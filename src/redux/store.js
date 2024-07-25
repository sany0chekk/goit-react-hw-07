import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const persistContactsReducer = persistReducer(
  {
    key: "contacts",
    storage,
  },
  contactsReducer
);

const persistFiltersReducer = persistReducer(
  {
    key: "filters",
    storage,
  },
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: persistFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
