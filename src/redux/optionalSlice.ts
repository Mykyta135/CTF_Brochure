import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {options} from "@/components/_content/_content"

const initialState = options

const optionalPacketsSlice = createSlice({
    name: 'optional',
    initialState,
    reducers: {
        toggleOptionActive: (state, action: PayloadAction<{ name: string }>) => {
            const { name } = action.payload;
            const option = state.find(sp => sp.name === name);
            if (option) {
                option.active = !option.active;
            }

        },
    },
});

export const { toggleOptionActive } = optionalPacketsSlice.actions;

export default optionalPacketsSlice.reducer;
