import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transfers: [{key: 'all', name:'Все'},
        {key: 'without transfers', name:'Без пересадок'},
        {key: 'one transfer', name:'1 пересадка'},
        {key: 'two transfer', name:'2 пересадки'},
        {key: 'three transfer', name:'3 пересадки'}],
    currency: [{key: 'RUB', name:'RUB'},
        {key: 'USD', name:'USD'},
        {key: 'EUR', name:'EUR'}],
    currentCurrency: this.currency.RUB,
    selectArr: [this.transfers.lenght].fill(false),
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