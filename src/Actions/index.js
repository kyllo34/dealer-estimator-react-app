// CREATE A NEW LINE ITEM
export function createLineItem(lineItem) {
  return async function(dispatch) {
    return dispatch(createLineItemAction(lineItem))
  }
}

function createLineItemAction(lineItem) {
  return {
    type: 'CREATE_LINE_ITEM',
    payload: lineItem
  }
}