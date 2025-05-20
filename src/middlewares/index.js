export const logger = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [
    { name: "andres", url: "https://pokeapi.co/api/v2/pokemon/152/" },
    ...actionInfo.action.payload,
  ];
  const updatedAction = {
    ...actionInfo,
    action: {
      ...actionInfo.action, payload: featured},
  };
  next(updatedAction);
};
