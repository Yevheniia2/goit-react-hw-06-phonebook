import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { onAddContact } from './../../Redux/actions';
import { nanoid } from '@reduxjs/toolkit';
import { FormBox, FormParagraph, FormInput, FormButton, FormLabel } from "./ContactForm.styled";
import { addContact } from './../../Redux/selectors';

export function ContactForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(addContact);
        
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const number = event.target.number.value;
        const createdContact = ({
            name,
            number,
            id: nanoid()
        });

        if (contacts.name === createdContact.name) {
            alert('You can`t enter this contact again. it`s already entered :(');
        } else {
            dispatch(onAddContact(createdContact));
        }

        if (contacts.number === createdContact.number) {
            alert('You can`t enter this number again. it`s already entered :(');
        } else {
            dispatch(onAddContact(createdContact));
        }
        
        event.target.reset();
        setName('');
        setNumber('');
    };
    const handleChangeInput = event => {
        const { value } = event.currentTarget;
        event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
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