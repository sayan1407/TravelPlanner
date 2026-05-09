import { configureStore } from "@reduxjs/toolkit";
import { itineraryApi } from "../Api/itineraryApi";

export const store = configureStore({
    reducer: {
            [itineraryApi.reducerPath]: itineraryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itineraryApi.middleware)



})