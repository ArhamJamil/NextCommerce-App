import { configureStore } from '@reduxjs/toolkit'

import ProductsDummyList from '../reduxSlices/ProductsDummyList'
import userRegisterSlice from '../reduxSlices/userRegisterSlice'
import  userLoginSlice  from '../reduxSlices/userLoginSlice'
import  FetchFilterProductsSlice from '../reduxSlices/FilteredProducts'
import CartSlice from '../reduxSlices/CartSlice'


export const store = configureStore({
  reducer: {
    signUp: userRegisterSlice,
    signIn: userLoginSlice,
    productList : ProductsDummyList,
    FilterProduct: FetchFilterProductsSlice,
    CartItem: CartSlice
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch