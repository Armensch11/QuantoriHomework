import { ITodoItem } from "../../Interfaces/Interfaces";

export const dbPut = async (id: string, item: ITodoItem) => {
  const putConfig = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };

  try {
    await fetch(`http://localhost:3005/tasks/${id}`, putConfig);
    console.log("put successfully");
  } catch (error: any) {
    console.error(error.message);
  }
};
