import { ContactListUl, ContactListLi, ItemButton, ItemParagraph } from "./ContactList.styled";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from './../../Redux/selectors';
import { deleteContact } from "./../../Redux/slices/contactSlice";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter); 
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(contacts.id));
    
    return (
      <ContactListUl >
        {contacts.filter(
            contact =>
              filter === '' ||
              contact.name.toLowerCase().includes(filter.toLowerCase().trim())
          ).map(({name, id, number}) => (
            <ContactListLi key={id}>
              <ItemParagraph>{name + ':' + number}</ItemParagraph>
              <ItemButton
                type="button"
                onClick={onDeleteContact}>
                Delete
              </ItemButton>
            </ContactListLi>
          ))}
      </ContactListUl>
    );
  }