// import { useSelector } from 'react-redux';
// import { getContacts } from './../src/Redux/selectors';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import FilterForm from "./components/FilterForm/FilterForm";
import { AppContainer } from "./App.styled";

export default function App() {
  // const contacts = useSelector(getContacts);

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