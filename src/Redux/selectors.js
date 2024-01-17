export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getRenderContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toString().toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};