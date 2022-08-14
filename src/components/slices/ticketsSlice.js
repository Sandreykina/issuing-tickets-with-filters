import { createSlice } from '@reduxjs/toolkit';
import initialTickets from '../../tickets.json';

const initialState = {
    ticketsData: initialTickets.tickets,
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
    }
})
export default ticketsSlice.reducer