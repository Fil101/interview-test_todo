/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../app/store";

export interface Category {
  id: string;
  name: string;
  description: string;
}

// добавил типы
type CategoriesState = Category[];
type NewCategory = Omit<Category, "id">;

const initialState: CategoriesState = [
  {
    id: "d485a644-5a24-4f55-b3f7-a083338be879", // заменить на enum
    name: "Категория",
    description: "Описание может быть длинным",
  },
  {
    id: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
    name: "Категория2",
    description: "Описание может быть длинным",
  },
  {
    id: "36704c57-4575-4112-b962-948b04a20506",
    name: "Категория3",
    description: "Описание может быть длинным",
  },
];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // переименовано в соответсвии с докой Redux и добавлена типизация
    addCategory: (
        state: CategoriesState,
        action: PayloadAction<NewCategory>
    ) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    // переименовано в соответсвии с докой Redux и добавлена типизация
    updateCategory: (
        state: CategoriesState,
        action: PayloadAction<Category>
    ) => {
      const { id, name, description } = action.payload,
        existingCategory = state.find((category) => category.id === id);

      if (existingCategory) {
        existingCategory.name = name;
        existingCategory.description = description;
      }
    },
    // переименовано в соответсвии с докой Redux и добавлена типизация
    removeCategory: (
      state: CategoriesState,
      action: PayloadAction<string>
    ) => {
      // удалил неиспользуемые параметры
      const rm = (el: Category) => el.id === action.payload;
      const rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
  },
});

export const { addCategory, updateCategory, removeCategory } =
  categoriesSlice.actions;

export const selectAllCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
