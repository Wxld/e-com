import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error"
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
    return async function fetchProductThunks(dispatch, getState) {

        dispatch(setStatus(STATUS.LOADING));

        try {        
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            
            dispatch(setStatus(STATUS.IDLE));

            dispatch(setProducts(data));
        } catch (err) {
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}