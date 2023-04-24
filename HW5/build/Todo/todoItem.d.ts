import { ITodoItem } from "../Interfaces/Interfaces";
export declare function renderTaskList(status: string): Promise<ITodoItem[]>;
export declare function markCompleted(object: HTMLDivElement): Promise<void>;
export declare function notCompleted(object: HTMLDivElement): Promise<void>;
export declare function removeTodo(id: string): Promise<void>;
