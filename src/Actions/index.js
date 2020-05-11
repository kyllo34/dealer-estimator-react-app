// CREATE AN EMPTY OBJECT IN THE LINEITEMS STATE
export function createLineItem() {
  return {
    type: 'CREATE_LINE_ITEM',
  }
}

// GETS ALL LINE ITEMS 
export function getAllLineItems() {
  return async function(dispatch) {
    const raw = await fetch('http://localhost:3001/lineItems');
    const data = await raw.json();
    return dispatch(getAllLineItemsAction(data))
  }
}

function getAllLineItemsAction(data) {
  return {
    type: 'GET_ALL_LINE_ITEMS',
    payload: data
  }
}

// UPDATE A LINE ITEM
export function updateLineItem(lineItem) {
  return {
    type: 'UPDATE_LINE_ITEM',
    payload: lineItem
  }
}


// DELETE A LINE ITEM
export function deleteLineItem(id) {
  return {
    type: 'DELETE_LINE_ITEM',
    payload: id
  }
}
