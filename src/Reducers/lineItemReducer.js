

const lineItem = (state = [], action) => {
  switch (action.type) {
// ADDS AN EMPTY LINE ITEM OBJECT TO THE STATE
    case "CREATE_LINE_ITEM":
      const emptyLineItem = {
        id: state.length + 1,
        description: "",
        partCost: 0,
        quantity: 0,
        partNumber: "",
        laborHours: 0,
      }
      return [...state, emptyLineItem];
    case "GET_ALL_LINE_ITEMS":
      return action.payload;
    case "UPDATE_LINE_ITEM":
      return [...state].map((lineItem) =>
        lineItem.id === action.payload.id
          ? { ...lineItem, [action.payload.property]: action.payload.value }
          : lineItem
      );
    case "DELETE_LINE_ITEM":
      return state.filter((lineItem) => lineItem.id !== action.payload);
    default:
      return state;
  }
};

export default lineItem;
