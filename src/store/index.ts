import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { getEventsPhoto } from './features/PhotoPage/GetEventsPhoto';

const rootReducer = combineReducers({
    [getEventsPhoto.reducerPath]: getEventsPhoto.reducer,
});

export const store = configureStore ({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(
   ),
});