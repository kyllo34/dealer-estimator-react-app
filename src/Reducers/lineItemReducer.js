const lineItems = [
  { _id: 1, description: 'Motor', partCost: 12334, quantity: 1, partNumber: '111-111-111-111', laborHours: 24 }
]

const lineItem = (state = lineItems, action) => {
  switch (action.type) {
    case 'ADD_LINE_ITEM':
      return [...state, action.payload]
    case 'GET_ALL_LINE_ITEMS':
      return action.payload;
    case 'UPDATE_LINE_ITEM':
      const lineItem = state.find(lineItem => lineItem._id === action.payload._id);
      lineItem[action.payload.property] = action.payload.value;
      return state;
    case 'DELETE_LINE_ITEM':
      return state.filter(lineItem => lineItem._id !== action.payload);
    default:
      return state;
  }
}

export default lineItem;