import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { getAd } from "./Ad/GetAd";
import { getEventsPhoto } from './features/PhotoPage/GetEventsPhoto';

const rootReducer = combineReducers({
    [getEventsPhoto.reducerPath]: getEventsPhoto.reducer,
    [getAd.reducerPath]: getAd.reducer,
});

export const store = configureStore ({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(
       getAd.middleware,
       getEventsPhoto.middleware,
   ),
});