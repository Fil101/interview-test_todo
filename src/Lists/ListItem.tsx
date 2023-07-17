/* VENDOR */
import { useState } from "react";

/* APPLICATION */
import React from "react";
// import edit from "../icons/edit.svg";
import remove from "../icons/remove.svg";
import { selectAllCategories } from "../features/categoriesSlice";
import { ModalEditItem } from "../Modal/ModalEditItem";
import { ModalRemoveItem } from "../Modal/ModalRemoveItem";
import {useAppSelector} from "../app/hooks";
import {SvgSelector} from "../UI/SvgSelector";

interface ListItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  // заменил useSelector на useAppSelector
  const categories = useAppSelector(selectAllCategories);

  const [editModalActive, setEditModalActive] = useState(false); // разделение сущностей
  const [removeModalActive, setRemoveModalActive] = useState(false); // замена let на const

  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {
                  categories.find((category) => category.id === item.category)?.name
                }
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description}</div>
        </div>
        <div className="list-item-col2">
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setEditModalActive(true);
            }}
          >
            {/*<img src={edit} alt="edit" />*/}
            <SvgSelector id="edit" />
          </button>
          <button
            className="list-item-col2__btn"
            onClick={() => {
              // removeModalActive = true; поправил не правильное использование стейта
              setRemoveModalActive(true);
            }}
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
      </li>
      {/*вынес модалки из элемента <li>, но нужно вообще переделать их архитекнуру, описал в ReadMe*/}
      {editModalActive &&
          <ModalEditItem
              item={item}
              active={editModalActive}
              setActive={setEditModalActive}
          />
      }
      {removeModalActive &&
          <ModalRemoveItem
              item={item}
              active={removeModalActive}
              setActive={setRemoveModalActive}
          />
      }
    </>
  );
};
