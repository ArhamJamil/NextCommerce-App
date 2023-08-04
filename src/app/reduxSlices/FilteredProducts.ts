import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
    
    isLoading: boolean
    data: boolean | null
    fiteredProducts: any

}

const initialState: ProductState = {
    
    isLoading: false,
    data:null,
    fiteredProducts:[]
}

export const FetchFilterProducts = createAsyncThunk(
    'products/FetchFilterProducts', // Title of function
    async (subCategory:any) => {
        console.log(subCategory)
        const categories = subCategory.split(',');
        console.log(categories)
      
        const fetchPromises = categories.map(async (category:any) => {
            const response = await fetch(`/api/getCategories?category=${category}`, {
                method: 'GET',
            })
            return await response.json()
          });
      
          const results = await Promise.all(fetchPromises);
          
          return results;
    }

)



export const FetchFilterProductsSlice = createSlice({
    name: 'FilterProducts',
    initialState,
    reducers: {
        

    },
    extraReducers: (builder) => {
        builder.addCase(FetchFilterProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(FetchFilterProducts.fulfilled, (state, action) => {
            console.log()
            // 
            // action.payload.forEach((items:any)=> {items.FilterProducts.map((items:any)=> {console.log(items)})})
            state.isLoading = false
            state.data = true
    
            state.fiteredProducts = action.payload.flatMap((items: any) => items.FilterProducts)
           

          
            
      
        })
        builder.addCase(FetchFilterProducts.rejected, (state, action) => {
         
            console.log(state, action)
        })


    }
})

// Action creators are generated for each case reducer function
export const { } = FetchFilterProductsSlice.actions

export default FetchFilterProductsSlice.reducer


