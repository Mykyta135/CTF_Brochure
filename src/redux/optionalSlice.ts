import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { options } from "@/app/(_content)/_content"
import { useTranslations } from 'next-intl';



const initialState = options();

const optionalPacketsSlice = createSlice({
    name: 'optional',
    initialState,
    reducers: {
        toggleOptionActive: (state, action: PayloadAction<string>) => {
            const name = action.payload;
            console.log(name);
            const option = state.find(sp => sp.index === name);
            if (option) {
                option.active = !option.active;
            }

        },
    },
});

export const { toggleOptionActive } = optionalPacketsSlice.actions;

export default optionalPacketsSlice.reducer;
