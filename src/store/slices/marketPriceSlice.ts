import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface PriceState {
    prices: Record<string, string>;
}

const initialState: PriceState = {
    prices: {},
};

const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setMarketPrice(state, action: PayloadAction<{ key: string; price: string }>) {
            state.prices[action.payload.key] = action.payload.price;
        },
    },
});

export const { setMarketPrice } = priceSlice.actions;
export default priceSlice.reducer;
