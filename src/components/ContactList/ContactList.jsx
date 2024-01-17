import { ContactListItem } from "./ContactListItem";
// import PropTypes from 'prop-types';
import { ContactListUl } from "./ContactList.styled";
import { FormButton } from "./../ContactForm/ContactForm.styled";
import { getRenderContacts } from './../../Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../Redux/actions';

export function ContactList () {
    const contacts = useSelector(getRenderContacts);
    const dispatch = useDispatch();
    const handleDeleteContact = id => dispatch(actions.onDeleteContact(id));
    
    return (
      <ContactListUl>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem key={id} >
            {name}: {number}
            <FormButton
              type="button"
              onClick={() => handleDeleteContact(id)}>
              Delete
            </FormButton>
          </ContactListItem>
        ))}
      </ContactListUl>
    );
  };

// ContactList.propTypes = {
//     contacts: PropTypes.array,
//     handleDeleteContact: PropTypes.func,
// };