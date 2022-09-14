import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import {getAd} from "./Ad/GetAd";

const rootReducer = combineReducers({
    [getAd.reducerPath]: getAd.reducer,
});

export const store = configureStore ({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(),
});