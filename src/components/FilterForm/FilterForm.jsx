import { FilterBox } from './FilterForm.styled';
import { FormParagraph, FormInput } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../Redux/selectors';
import { filterContact } from './../../Redux/slices/filterSlice';

export default function FilterForm() {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
  
    const handleSetFilterValue = event => dispatch(filterContact(event.target.value));

    return (
        <FilterBox>
            <FormParagraph>Find contacts</FormParagraph>
            <FormInput type="text" name="filter" onChange={ handleSetFilterValue } value={value} pattern={"[^'\x22]+"} required/>
        </FilterBox>
    )
}