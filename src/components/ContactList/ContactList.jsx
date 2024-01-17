import { ContactListItem } from "./ContactListItem";
// import PropTypes from 'prop-types';
import { ContactListUl } from "./ContactList.styled";
import { addContact, getFilter } from './../../Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteContact } from './../../Redux/actions';

export function ContactList () {
    const contacts = useSelector(addContact);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    // const filterToLowerCase = filter.toLowerCase();
    // const filterContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filterToLowerCase)
    // );

    const searchFilterToLowerCase = filter.toString().toLowerCase();

    const visibleContacts = () => {
      if (filter !== '') {
        return contacts.filter(({ contact }) =>
          contact.toLowerCase().includes(searchFilterToLowerCase)
        );
      }
      return contacts;
    };
  
    // const visibleContacts = getVisibleContacts();
  
    const handleDeleteContact = id => {
      dispatch(onDeleteContact(id));
    };
    
    return (
        <ContactListUl>
            <ContactListItem 
                contacts = {visibleContacts}
                handleDeleteContact={ handleDeleteContact }>

                </ContactListItem>;
        </ContactListUl>
    );
};

// ContactList.propTypes = {
//     contacts: PropTypes.array,
//     handleDeleteContact: PropTypes.func,
// };