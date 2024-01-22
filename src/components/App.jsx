import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { FilterForm } from "./FilterForm/FilterForm";
import { AppContainer } from "./App.styled";
// import PropTypes from 'prop-types';
// import { getContacts } from './../Redux/selectors';
// import { useSelector } from 'react-redux';

export default function App() {
  // const contact = useSelector(getContacts);
  // const contactsLength = contacts.length;

  return (
    <>
      <AppContainer>
        <ContactForm />
        <FilterForm />
        <ContactList />
      </AppContainer>
    </>
  );
}

// ) : (<Pmessage>Your phonebook still has no contacts. Please, add it.</Pmessage>)}