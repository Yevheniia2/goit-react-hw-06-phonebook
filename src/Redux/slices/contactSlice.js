import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import { addContact, deleteContact } from 'Redux/actions';

// const contactInitialState = 
// [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
    reducers: {
    addContact: {
      reducer(state, action) {
        Object.values(state).push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: uuidv4(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = Object.values(state).findIndex(contact => contact.id === action.payload);
      Object.values(state).splice(index, 1);
      },
    },
  },
);

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;