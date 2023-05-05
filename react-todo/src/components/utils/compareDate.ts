import { ITodoItem } from "../../Interfaces/Interfaces";

export const compareDate = (todo: ITodoItem) => {
  const today = new Date();
  const stringToCompare = `${today.getDate()}-${today.getMonth()}`;
  const todoDate = new Date(todo.date);
  const todoDayMonth = `${todoDate.getDate()}-${todoDate.getMonth()}`;

  return todoDayMonth === stringToCompare ? true : false;
};
