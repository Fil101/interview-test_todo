/* APPLICATION */
import { ListItem } from "./ListItem";
import { selectAllCategories } from "../features/categoriesSlice";
import { useAppSelector } from "../app/hooks";

export const Categories = () => {
  // заменил useSelector на useAppSelector
  const categories = useAppSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
