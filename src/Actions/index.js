// CREATE A NEW LINE ITEM
export function createLineItem() {
  return {
    type: 'CREATE_LINE_ITEM',
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
