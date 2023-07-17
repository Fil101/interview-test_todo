/* VENDOR */
import { useState } from "react";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import React from "react";
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalInput } from "./ModalInput";
import { ModalRow } from "./ModalRow";
import { ModalTextarea } from "./ModalTextarea";
import { ModalFooter } from "./ModalFooter";
import { addTask } from "../features/tasksSlice";
import { addCategory } from "../features/categoriesSlice";
import { useAppDispatch } from "../app/hooks";

interface ModalCreateItemProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useAppDispatch(); // заменил useDispatch на useAppDispatch
  const {pathname} = useLocation();

  const isCategories = pathname.includes("categories");

  const [name, setName] = useState("");
  const [category, setCategory] = useState(""); // переименовал стейт, для лучше читабельности
  const [description, setDescription] = useState("");

  function clearState() {
    setName("");
    setDescription("");
      setCategory("");
  }

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title={isCategories ? "Создание категории" : "Создание задачи"}
      />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={category}
          setSelected={setCategory}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        onSubmit={
          name
            ? () => {
                dispatch(
                  isCategories
                    ? addCategory({ name, description })
                    : addTask({
                        name,
                        description,
                        category,
                      })
                );
                clearState();
                setActive(false);
              }
            : () => {}
        }
      />
    </Modal>
  );
};
