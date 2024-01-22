// import { combineReducers } from 'redux';
// // import { createReducer } from '@reduxjs/toolkit';
// import { onAddContact, onDeleteContact, filterContact } from './actions';
// // import shortid from 'shortid';
// // import { nanoid } from 'nanoid';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
//   ],
// };


// const setLocalStorageContacts = [JSON.parse(localStorage.getItem('contacts'))];

// // const setLocalStorageContacts = contacts => localStorage.getItem('contacts', JSON.stringify(contacts));

// // const initialList = setLocalStorageContacts ?? defaultList;

// // const itemsReducer = createReducer([
// //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },] || setLocalStorageContacts || [], (builder) => {
// //    builder
// //      .addCase(actions.onAddContact, (state, action) => {
// //        return [...state, action.payload];
// //      })
// //      .addCase(actions.onDeleteContact, (state, action) => {
// //       //  setLocalStorageContacts(state.filter(contact => contact.id !== payload));
// //        return [state.filter(contact => contact.id !== action.payload)]
// //      })
// //  })

// //  const filterReducer = createReducer([],(builder) => {
// //    builder
// //    .addCase(actions.filterContact, (state, action) => {
// //       return (state = action.payload)
// //    })
// // }

// //  )

// const itemsReducer = (state = initialState, {payload}) => {
//   switch({payload}){
//     case onAddContact.type:
//       return state.contacts.push(payload);
//     case onDeleteContact.type:
//       return state.contacts = state.contacts.findIndex(({ id }) => id !== payload);
//     default:
//       return initialState;
//   }
// }

// const filterReducer = (state=[''],{payload})  => {
//   switch({payload}){
//     case filterContact.type:
//       return state.filter = payload;
//       default:
//       return state;
//   }
// }

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });