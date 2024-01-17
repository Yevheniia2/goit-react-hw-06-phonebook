import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import * as actions from './../../Redux/actions';
import { FormBox, FormParagraph, FormInput, FormButton, FormLabel } from "./ContactForm.styled";
import { getContacts } from './../../Redux/selectors';

export function ContactForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
        
    const handleChangeInput = event => {
        const { name, value } = event.currentTarget;
    
        switch (name) {
          case 'name':
            setName(value);
            break;
    
          case 'number':
            setNumber(value);
            break;
    
          default:
            return;
        }
      };
    
      const resetName = () => {
        setName('');
      };
    
      const resetNumber = () => {
        setNumber('');
      };
    
      const checkName = name => {
        return contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
      };
    
      const checkNumber = number => {
        return contacts.find(contact => contact.number === number);
      };
    
      const handleSubmit = e => {
        e.preventDefault();
    
        if (checkName(name)) {
          alert(`${name} is already in contacts`);
        } else if (checkNumber(number)) {
          alert(`${number} is already in your contacts!`);
        } else {
          dispatch(actions.onAddContact(name, number));
        }
    
        resetName();
        resetNumber();
      };

    return (
        <FormBox onSubmit={ handleSubmit }>
            <FormLabel>
                <FormParagraph>Name</FormParagraph>
                <FormInput
                    onChange={ handleChangeInput }
                    type="text"
                    name="name"
                    pattern="[^'\x22]+"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                />
            </FormLabel>
            <FormLabel> 
                <FormParagraph>Number</FormParagraph>
                <FormInput
                    onChange={ handleChangeInput }
                    type="tel"
                    name="number"
                    pattern="[^'\x22]+"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                />
            </FormLabel>
            <FormButton>Add contact</FormButton>
        </FormBox>
    );
}

// ContactForm.propTypes = {
//     onAddContact: PropTypes.func,
// };