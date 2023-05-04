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
    const responce = await fetch(
      `http://localhost:3005/tasks/${id}`,
      putConfig
    );
    if (responce.ok) console.log("patched successfully");
  } catch (error: any) {
    console.error(error.message);
  }
};
