import { configureStore } from '@reduxjs/toolkit';

import sponsorshipReducer from './sponsorshipSlice';
import optionalPacketsReducer from './optionalSlice';
import modalReducer from './modalSlice';
import selectedCheckboxesReducer from './flexibleSlice';

const store = configureStore({
    reducer: {
        sponsorship: sponsorshipReducer,
        optionalPackets: optionalPacketsReducer,
        modal: modalReducer,
        selectedCheckboxes: selectedCheckboxesReducer,
    },
    
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
