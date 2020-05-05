import { configureStore } from '@reduxjs/toolkit';
import lineItems from '../Reducers/lineItemReducer'

const store = configureStore({
  reducer: {
    lineItems,
  }
})

export default store;