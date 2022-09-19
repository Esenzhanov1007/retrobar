import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { adQueryApi } from "./features/Admin/Advertising/AdQueryApi";
import { ContactsApi } from "./features/Admin/Contacts/ContactsApi";
import { pubQueryApi } from "./features/Admin/Institution/pubQueryApi";
import { photoQueryApi } from "./features/Admin/Photo/PhotoQuery";
import { videoQueryApi } from "./features/Admin/Video/VideoQuery";
import { getAd } from "./Ad/GetAd";
import { getEventsPhoto } from './features/PhotoPage/GetEventsPhoto';
import { getVideoEvents } from './features/videoApi/getVideoEvents';

const rootReducer: any = combineReducers({
    [photoQueryApi.reducerPath]: photoQueryApi.reducer,
    [videoQueryApi.reducerPath]: videoQueryApi.reducer,
    [adQueryApi.reducerPath]: adQueryApi.reducer,
    [pubQueryApi.reducerPath]: pubQueryApi.reducer,
    [ContactsApi.reducerPath]: ContactsApi.reducer,
    [getEventsPhoto.reducerPath]: getEventsPhoto.reducer,
    [getVideoEvents.reducerPath]: getVideoEvents.reducer,
    [getAd.reducerPath]: getAd.reducer,
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
      getEventsPhoto.middleware,
      getVideoEvents.middleware,
      getAd.middleware,
   ),
});