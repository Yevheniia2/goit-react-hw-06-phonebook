import {
  configureStore
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { contactsReducer } from './../Redux/slices/contactSlice';
import { filterReducer  } from './slices/filterSlice';


const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsReducer
);

const persistedReducer = persistReducer(persistConfig, persistedContactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  }), logger],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);