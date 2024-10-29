import { configureStore } from "@reduxjs/toolkit";
import { LocationSlice } from "./SearchLocationSlice";


export default configureStore({
    reducer: {
        location: LocationSlice,
    }
})