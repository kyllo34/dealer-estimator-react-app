const lineItems = [
];
lineItems.push({
  _id: 1,
  description: "Motor",
  partCost: 12334,
  quantity: 1,
  partNumber: "111-111-111-111",
  laborHours: 24,
},
{
  _id: lineItems.length,
  description: "",
  partCost: 0,
  quantity: 0,
  partNumber: "",
  laborHours: 0,
})


const lineItem = (state = lineItems, action) => {
  console.log('here')
  switch (action.type) {
    case "ADD_LINE_ITEM":
      return [...state, {}];
    case "GET_ALL_LINE_ITEMS":
      return action.payload;
    case "UPDATE_LINE_ITEM":
      return [...state].map((lineItem) =>
        lineItem._id === action.payload._id
          ? { ...lineItem, [action.payload.property]: action.payload.value }
          : lineItem
      );
    case "DELETE_LINE_ITEM":
      console.log(action.payload)
      return state.filter((lineItem) => lineItem._id !== action.payload);
    default:
      return state;
  }
};

export default lineItem;
