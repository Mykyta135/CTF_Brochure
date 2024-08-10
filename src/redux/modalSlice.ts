import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { iModalData, ModalParams } from "@/types";

const initialState: iModalData = {
    showModal: false,
    name: "",
    modalData: []

};

const modalSlice = createSlice({
    name: 'openModal',
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<ModalParams>) => {
            // action.payload.modalData.heading
            return {
                showModal: !state.showModal,
                name: action.payload.name,
                modalData: action.payload.modalData
            };
        }
    }
})

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;