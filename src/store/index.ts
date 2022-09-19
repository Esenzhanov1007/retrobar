import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { getEventsPhoto } from './features/PhotoPage/GetEventsPhoto';
import { getVideoEvents } from './features/videoApi/getVideoEvents';

const rootReducer = combineReducers({
    [getEventsPhoto.reducerPath]: getEventsPhoto.reducer,
    [getVideoEvents.reducerPath]: getVideoEvents.reducer,
});

export const store = configureStore ({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(
       getEventsPhoto.middleware,
       getVideoEvents.middleware,
   ),
});