import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedCheckboxesState {
    selectedCheckboxes: string[];
}

const initialState: SelectedCheckboxesState = {
    selectedCheckboxes: [],
};

const selectedCheckboxesSlice = createSlice({
    name: 'selectedCheckboxes',
    initialState,
    reducers: {
        addSelected: (state, action: PayloadAction<string>) => {
            if (!state.selectedCheckboxes.includes(action.payload) && state.selectedCheckboxes.length < 4) {
                state.selectedCheckboxes.push(action.payload);
            }
        },
        removeSelected: (state, action: PayloadAction<string>) => {
            state.selectedCheckboxes = state.selectedCheckboxes.filter((item) => item !== action.payload);
        },
    },
});

export const { addSelected, removeSelected } = selectedCheckboxesSlice.actions;
export default selectedCheckboxesSlice.reducer;