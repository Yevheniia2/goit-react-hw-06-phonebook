import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import * as actions from './../../Redux/actions';
import { FormBox, FormParagraph, FormInput, FormButton, FormLabel } from "./ContactForm.styled";
import { getContacts } from './../../Redux/selectors';

// function getRenderContacts (state) {
//   const contacts = getContacts(state);
//   const filteredContacts = getFilter(state);
//   const normalizedFilter = filteredContacts.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
// };

export function ContactForm () {     
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
        
    const handleChangeInput = event => {
        const { value } = event.currentTarget;
        event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
    }  
        const handleSubmit = e => {
          e.preventDefault();
      
        const allContacts = contacts.reduce((acc, contact) => {
          acc.push(contact.name);
          return acc;
        }, []);
      
        if (allContacts.includes(name)) {
          alert(`${name} already in contacts.`);
          return;
        }
      
        const contact = {
          id: nanoid(),
          name,
          number,
        };
      
        dispatch(actions.onAddContact(contact));
        reset();
      };
      
      const reset = () => {
        setName('');
        setNumber('');
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