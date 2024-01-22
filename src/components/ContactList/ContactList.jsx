import { ContactListUl, ContactListLi, ItemButton, ItemParagraph } from "./ContactList.styled";
import { getContacts, getFilter } from './../../Redux/selectors';
import { useSelector } from 'react-redux';
import * as actions from './../../Redux/actions';
import { useDispatch } from 'react-redux';

export function ContactList () {
    const contacts = useSelector(getContacts);
    const filterCont = useSelector(getFilter);
    const dispatch = useDispatch();
    const handleDeleteContact = () => dispatch(actions.onDeleteContact());

    const findContact = () => {
      return contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(filterCont.trim().toLowerCase());
      });
    };
    const foundContacts = findContact();

    
    return (
      <ContactListUl >
        {foundContacts.map(({ name, number, id }) => {
          return (
            <ContactListLi key={id} id={id}>
              <ItemParagraph>{name + ':' + number}</ItemParagraph>
              <ItemButton
                type="button"
                onClick={handleDeleteContact}>
                Delete
              </ItemButton>
            </ContactListLi>
          );
          })}
      </ContactListUl>
    );
  }

// ContactList.propTypes = {
//     contacts: PropTypes.array,
//     handleDeleteContact: PropTypes.func,
// };