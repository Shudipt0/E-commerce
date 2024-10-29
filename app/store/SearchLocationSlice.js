import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    countryName: []
}

export const LocationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        addLocation: (state, action) => {
             state.countryName.push(action.payload)
        }
    }
})


export const {addLocation} = LocationSlice.actions;
export default LocationSlice.reducer