import { ITodoItem } from "../../Interfaces/Interfaces";

export const searchResult = (
  searchTerm: string,
  todos: ITodoItem[] | []
): ITodoItem[] | [] => {
  const result = todos.filter(
    (todo) => todo.task?.toLowerCase().startsWith(searchTerm) === true
  );
  return result;
};
