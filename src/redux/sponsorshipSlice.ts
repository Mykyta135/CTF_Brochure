import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sellingPoints } from "@/app/(_content)/_content";


// Initialize chosenSponsorships with compulsory items
const initialState = sellingPoints;

const sponsorshipSlice = createSlice({
  name: "sponsorship",
  initialState,
  reducers: {
    toggleSponsorship: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const sponsorship = state.find((sp) => sp.name === name);

      if (sponsorship && !sponsorship.compulsory) {
        sponsorship.active = !sponsorship.active;
      }
    },
  },
});

export const { toggleSponsorship } = sponsorshipSlice.actions;

export default sponsorshipSlice.reducer;
