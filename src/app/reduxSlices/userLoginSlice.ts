import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export interface UserRegisterationState {
    value: {
        
        email: string,
        password: string,
    },
    isLoading: boolean
    data: boolean | null | any
}

const initialState: UserRegisterationState = {
    value: {
    
        email: "",
        password: ""
    },
    isLoading: false,
    data: null
}
export const loginUser = createAsyncThunk(
    'user/login', // Title of function
    async (userData: { email: string; password: string }) => {
        try {
            const response = await fetch('/api/UserLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const data = await response.json();
                return (data); // Return the error data to be handled in rejected case
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return ({ error: 'Internal Server Error' }); // Return the error data to be handled in rejected case
        }
    }


)



export const userLoginSlice = createSlice({
    name: 'userRegisterSlice',
    initialState,
    reducers: {
        setUseremail: (state, action) => {
            state.value.email = action.payload;
        },
        setUserpassword: (state, action) => {
            state.value.password = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.isLoading = false
            console.log(action.error.message)
        })




    }
})

// Action creators are generated for each case reducer function
export const { setUseremail, setUserpassword } = userLoginSlice.actions

export default userLoginSlice.reducer
