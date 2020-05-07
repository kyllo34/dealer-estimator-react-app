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

// UPDATE A LINE ITEM
export function updateLineItem(lineItem) {
  return async function(dispatch) {
    return dispatch(updateLineItemAction(lineItem))
  }
}

function updateLineItemAction(lineItem) {
  return {
    type: 'UPDATE_LINE_ITEM',
    payload: lineItem
  }
}