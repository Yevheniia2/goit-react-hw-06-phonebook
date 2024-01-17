import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

// const itemsReducer = createReducer(
//   [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   {
//     [actions.onAddContact]: (state, { payload }) => [...state, payload],
//     [actions.onDeleteContact]: (state, { payload }) =>
//       state.filter(({ id }) => id !== payload),
//   },
// );

// const filterReducer = createReducer('', {
//   [actions.filterContact]: (_, { payload }) => payload,
// });

const itemsReducer = createReducer([
       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
     ], (builder) => {
   builder
     .addCase([actions.onAddContact], (state, { payload }) => {
       return [...state, payload]
     })
     .addCase([actions.onDeleteContact], (state, { payload }) => {
       return [state.filter(({ id }) => id !== payload)]
     })
 })

 const filterReducer = createReducer([],(builder) => {
   builder
   .addCase([actions.filterContact], (_, { payload }) => {
      return payload
   })
}

 )

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});