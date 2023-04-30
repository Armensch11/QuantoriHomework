import { borderColors, borderNone } from "./todoTypes";

export const typeSelector = (type: string) => {
  const bordersUpdate = { ...borderNone };
  bordersUpdate[type] = borderColors[type];
  return bordersUpdate;
};
