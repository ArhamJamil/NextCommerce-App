import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
    value: any,
    isLoading: boolean
    data: boolean | null
    fiteredProducts: []

}

const initialState: ProductState = {
    value: [],
    isLoading: false,
    data:null,
    fiteredProducts:[]
}

export const FetchDummyProducts = createAsyncThunk(
    'products/FetchDummyProducts', // Title of function
    async () => {
        let DataResponse = await fetch('http://localhost:3000/api/getProducts', {
            method: 'GET', 
        })
        let data = await DataResponse.json()
       
        return data.products
    }

)



export const ProductDummySlice = createSlice({
    name: 'DummyProdList',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(FetchDummyProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(FetchDummyProducts.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.isLoading = false
            state.value = action.payload
            state.data = true
          
            
      
        })
        builder.addCase(FetchDummyProducts.rejected, (state, action) => {
         
            console.log(state, action)
        })


    }
})

// Action creators are generated for each case reducer function
export const { } = ProductDummySlice.actions

export default ProductDummySlice.reducer


