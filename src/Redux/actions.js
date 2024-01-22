import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import shortid from 'shortid';

export const onAddContact = createAction("contacts/addContact", (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  });

export const onDeleteContact = createAction('contacts/deleteContact');

export const filterContact = createAction('contacts/filterContact');