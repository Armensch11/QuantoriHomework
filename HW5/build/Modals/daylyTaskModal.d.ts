import { ITodoItem } from "../Interfaces/Interfaces";
export declare const daylyTaskModal: (todos: Promise<ITodoItem[]>) => Promise<void>;
export declare function isShownToday(): boolean;
