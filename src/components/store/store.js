import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from '../slices/ticketsSlice';
import menuReducer from '../slices/menuSlice';

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        menu: menuReducer
    }
})
