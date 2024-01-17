import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { AppContainer, Pmessage } from "./App.styled";
// import PropTypes from 'prop-types';
import { getContacts } from './../Redux/selectors';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(getContacts);
  const contactsLength = contacts.length;

  return (
    <>
      <AppContainer>
        <ContactForm />
        {contactsLength > 1 && <Filter />}
        {contactsLength > 0 ? (<ContactList />) : (<Pmessage>Your phonebook still has no contacts. Please, add it.</Pmessage>)}
      </AppContainer>
    </>
  );
}