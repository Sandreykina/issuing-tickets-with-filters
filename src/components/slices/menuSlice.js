import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transfers: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
    currency: ['RUB', 'USD', 'EUR'],
    currentCurrency: 'RUB',
    selectArr: [],
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        changeСurrency: (state, {payload}) => {
            state.currentCurrency = payload;
            return state;
        },
        updateSelect: (state, {payload}) => {
            state.selectArr = payload;
            return state;
        }
    }
})
export const { changeСurrency, updateSelect } = menuSlice.actions;
export default menuSlice.reducer;