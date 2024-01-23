import { ContactListUl, ContactListLi, ItemButton, ItemParagraph } from "./ContactList.styled";
import { getContacts, getFilter } from './../../Redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from "./../../Redux/slices/contactSlice";

export function ContactList () {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filterValue = filter.toLowerCase().trim();
    const findContact = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
    const dispatch = useDispatch();
    const handleDeleteContact = id => {dispatch(deleteContact(id))};
    // const findContact = contacts.filter(contact => contact.name
    //       .toLowerCase()
    //       .includes(filter.trim().toLowerCase())
    //   );
      // function filterContacts(contacts, filter) {
      //   const filterValue = filter.toLowerCase().trim();
      //   return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue));
      //  }

    
    return (
      <ContactListUl >
        {findContact.map((contact) => (
            <ContactListLi key={contact.id}>
              <ItemParagraph>{contact.name + ':' + contact.number}</ItemParagraph>
              <ItemButton
                type="button"
                onClick={handleDeleteContact}>
                Delete
              </ItemButton>
            </ContactListLi>
          ))}
      </ContactListUl>
    );
  }

// ContactList.propTypes = {
//     contacts: PropTypes.array,
//     handleDeleteContact: PropTypes.func,
// };