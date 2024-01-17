import { createAction } from '@reduxjs/toolkit';

export const onAddContact = createAction('contacts/addContact');
export const onDeleteContact = createAction('contacts/deleteContact');
export const filterContact = createAction('filterContact');