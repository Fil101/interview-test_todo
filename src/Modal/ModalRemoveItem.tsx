/* VENDOR */
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalText } from "./ModalText";
import { ModalFooter } from "./ModalFooter";
import { removeTask, clearTaskCategory } from "../features/tasksSlice";
import { removeCategory } from "../features/categoriesSlice";
import { useAppDispatch } from "../app/hooks";

interface ModalRemoveItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useAppDispatch(), // заменил useDispatch на useAppDispatch
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={
          isCategories
            ? () => {
                dispatch(removeCategory(item.id));
                dispatch(clearTaskCategory(item.id));
              }
            : () => dispatch(removeTask(item.id))
        }
      />
    </Modal>
  );
};
