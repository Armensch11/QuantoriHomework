import { ITodoItem } from "../../Interfaces/Interfaces";

export const dbPost = async (item: ITodoItem) => {
  const postConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };

  try {
    const responce = await fetch(`http://localhost:3005/tasks/`, postConfig);
    if (responce.ok) console.log("posted successfully");
  } catch (error: any) {
    console.error(error.message);
  }
};
