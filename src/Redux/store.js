import { configureStore } from '@reduxjs/toolkit';
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
 import storage from 'redux-persist/lib/storage'
 import logger from 'redux-logger';
//  import phoneBookReducer from './redusers';
 import contactReducer from './slices/contactSlice';
import filterReducer from './slices/filterSlice';
 
 const persistConfig = {
   key: 'contacts',
   storage,
   blacklist: ['filter'],
 };
 
//  const rootReducer = combineReducers({
//   contacts: phoneBookReducer,
// });
 
 const persistedReducer = persistReducer(persistConfig, contactReducer);
 
 export const store = configureStore({
  reducer: {
    contact: persistedReducer,
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