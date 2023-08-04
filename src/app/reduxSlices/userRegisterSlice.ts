import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export interface UserRegisterationState {
    value: {
        name: string,
        email: string,
        password: string,
    },
    isLoading: boolean
    data: boolean | null | any
}

const initialState: UserRegisterationState = {
    value: {
        name: "",
        email: "",
        password: ""
    },
    isLoading: false,
    data: null
}
export const registerUser = createAsyncThunk(
    'user/register', // Title of function
    async (userData: { name: string; email: string; password: string }) => {
        try {
            const response = await fetch('/api/UserRegister', {
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



export const userRegisterSlice = createSlice({
    name: 'userRegisterSlice',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.value.name = action.payload;
        },
        setUseremail: (state, action) => {
            state.value.email = action.payload;
        },
        setUserpassword: (state, action) => {
            state.value.password = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(registerUser.rejected, (state, action)=>{
            state.isLoading = false
            console.log(action.error.message)
        })




    }
})

// Action creators are generated for each case reducer function
export const {setUsername, setUseremail, setUserpassword } = userRegisterSlice.actions

export default userRegisterSlice.reducer
