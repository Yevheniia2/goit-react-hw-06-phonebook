import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const onAddContact = createAction('contacts/addContact', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    }
}));
export const onDeleteContact = createAction('contacts/deleteContact');
export const filterContact = createAction('contacts/filterContact');