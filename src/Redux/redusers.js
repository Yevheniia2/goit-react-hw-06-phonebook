import { createSlice } from "@reduxjs/toolkit";


const defaultContacts = [
   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
 ];

// const storageContacts = JSON.parse(window.localStorage.getItem('contacts'));
// if (storageContacts && storageContacts !== 'undefined') {
//     return JSON.parse(storageContacts)
//   }
// localStorage.getItem("contacts") !== undefined ? JSON.parse(localStorage.getItem("contacts")) : null;
// const initialContacts = storageContacts ?? defaultContacts;

export const contactsSlice = createSlice({
   name: "contacts",
   initialState: defaultContacts,
   reducers: {
      addContact(state, action) {
         return [...state, action.payload];
      },
      deleteContact(state, action) {
         return state.filter((item) => item.id !== action.payload);
      },
   },
});

export const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
       filterContact(state, action) {
          return state = action.payload;
       },
    },
 });

export const { addContact, deleteContact } = contactsSlice.actions;
export const { filterContact } = filterSlice.actions;

// export default contactsSlice.reducer;
// export default filterSlice.reducer;