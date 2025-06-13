import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface PriceState {
    marketPrice: string;
    ethMarketPrice: string;
}

const initialState: PriceState = {
    marketPrice: '',
    ethMarketPrice: '',
};

const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setMarketPrice(state, action: PayloadAction<string>) {
            state.marketPrice = action.payload;
        },
        setEthMarketPrice(state, action: PayloadAction<string>) {
            state.ethMarketPrice = action.payload;
        },
    },
});

export const { setMarketPrice, setEthMarketPrice } = priceSlice.actions;
export default priceSlice.reducer;
