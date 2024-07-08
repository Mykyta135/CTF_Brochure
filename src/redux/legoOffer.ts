import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    selectedCheckboxes: [] // Array of selected checkbox texts
};

export const SELECT_CHECKBOX = 'SELECT_CHECKBOX';
export const DESELECT_CHECKBOX = 'DESELECT_CHECKBOX';

// Action Creators
export const selectCheckbox = (text: string) => ({
    type: SELECT_CHECKBOX,
    payload: text
});

export const deselectCheckbox = (text: string) => ({
    type: DESELECT_CHECKBOX,
    payload: text
});


const checkboxReducer = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SELECT_CHECKBOX:
      return {
        ...state,
        selectedCheckboxes: [...state.selectedCheckboxes, action.payload]
      };
    case DESELECT_CHECKBOX:
      return {
        ...state,
        selectedCheckboxes: state.selectedCheckboxes.filter(text => text !== action.payload)
      };
    default:
      return state;
  }
};

export default checkboxReducer.reducer;
