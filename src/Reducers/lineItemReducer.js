const lineItems = [
  { id: 1, description: 'Motor', partCost: 12334, quantity: 1, partNumber: '111-111-111-111', laborHours: 24 }
]

const lineItem = (state = lineItems, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return action.payload
    default:
      return state
  }
}

export default lineItem