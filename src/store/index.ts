import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { adQueryApi } from "./features/Admin/Advertising/AdQueryApi";
import { ContactsApi } from "./features/Admin/Contacts/ContactsApi";
import { pubQueryApi } from "./features/Admin/Institution/pubQueryApi";
import { photoQueryApi } from "./features/Admin/Photo/PhotoQuery";
import { videoQueryApi } from "./features/Admin/Video/VideoQuery";

const rootReducer = combineReducers({
    [photoQueryApi.reducerPath]: photoQueryApi.reducer,
    [videoQueryApi.reducerPath]: videoQueryApi.reducer,
    [adQueryApi.reducerPath]: adQueryApi.reducer,
    [pubQueryApi.reducerPath]: pubQueryApi.reducer,
    [ContactsApi.reducerPath]: ContactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      photoQueryApi.middleware,
      videoQueryApi.middleware,
      adQueryApi.middleware,
      pubQueryApi.middleware,
      ContactsApi.middleware,
    )
});