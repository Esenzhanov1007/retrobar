import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { getAd } from "./Ad/GetAd";
import { getEventsPhoto } from './features/PhotoPage/GetEventsPhoto';
import { getVideoEvents } from './features/videoApi/getVideoEvents';

const rootReducer = combineReducers({
    [getEventsPhoto.reducerPath]: getEventsPhoto.reducer,
    [getVideoEvents.reducerPath]: getVideoEvents.reducer,
    [getAd.reducerPath]: getAd.reducer,
});

export const store = configureStore ({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(
       getEventsPhoto.middleware,
       getVideoEvents.middleware,
       getAd.middleware,
   ),
});