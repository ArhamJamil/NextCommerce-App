import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export interface ProductState {
    
    isLoading: boolean
    data: boolean | null
    cartItems: any

}

export const addCartItems = createAsyncThunk(
  'cart/add',async (items:any) => {
    const response = await fetch('/api/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify( items)
    })
    // console.log(await response.json())
    let data = await response.json()
    // console.log(data.message.items)
    return data.message.items
    
  
    
  }
)


export const getCartItems = createAsyncThunk(
  'cart/get',async (items:any) => {
    const response = await fetch('/api/getCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(items)
    })
    // console.log(await response.json())
    let data = await response.json()
    // console.log(data)
    return data
  }
)

const initialState : ProductState = {
    isLoading: false,
    data: null,
    cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },
  extraReducers(builder) {
      builder.addCase(addCartItems.pending, (state)=>{
        state.isLoading = true
      })
      builder.addCase(addCartItems.fulfilled,(state, action)=>{
        console.log(action.payload)
        state.cartItems = action.payload.map((item: any) => item);
      })
      builder.addCase(addCartItems.rejected, (state, action)=> {
        console.log(action.error)
      })

      builder.addCase(getCartItems.pending, (state,action)=>{})
      builder.addCase(getCartItems.fulfilled, (state, action)=>{
        // state.cartItems = action.payload.item[0].items
        if(action.payload.item!){
          state.cartItems=action.payload.item[0].items
        }
        // console.log(action.payload.item[0].items)
      })
      builder.addCase(getCartItems.rejected, (state, action) => {})
  },
});

export const { } = cartSlice.actions;
export default cartSlice.reducer;