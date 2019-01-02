export const getTypeSolidity = value => {
    if (typeof value === "string") return "string";
    if (typeof value === "number") return "uint";
  };
  