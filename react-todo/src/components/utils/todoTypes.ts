import { ITodoTypes, IBorders } from "../../Interfaces/Interfaces";

export const todoTypes: ITodoTypes = {
  work: { color: "#0053CF", background: "rgba(60, 134, 244, 0.31)" },
  health: { color: "#9747FF", background: "#E8D7FF" },
  home: { color: "#639462", background: "#E2F7E2" },
  other: { color: "#EA8C00", background: "#FFECC7" },
};
export const borderColors: IBorders = {
  work: " 1px solid #0053CF",
  health: "1px solid  #9747FF",
  home: "1px solid  #639462",
  other: "1px solid  #EA8C00",
};
export const borderNone: IBorders = {
  work: "none",
  health: "none",
  home: "none",
  other: "none",
};
