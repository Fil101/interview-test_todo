import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categoriesSlice";
import tasksReducer from "../features/tasksSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// можно удалить, если они не планируются использоваться в будущем при расширении приложения
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
