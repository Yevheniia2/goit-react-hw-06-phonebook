// import PropTypes from 'prop-types';
import { FilterBox } from './FilterForm.styled';
import { FormParagraph, FormInput } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../Redux/selectors';
import * as actions from '../../Redux/actions';

export function FilterForm() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    function handleSetFilterValue (event) {
        dispatch(actions.filterContact(event.target.value));
    }

    return (
        <FilterBox>
            <FormParagraph>Find contacts</FormParagraph>
            <FormInput type="text" name="filter" onChange={ handleSetFilterValue } value={value} pattern={"[^'\x22]+"} required/>
        </FilterBox>
    )
}

// Filter.propTypes = {
//     handleSetFilterValue: PropTypes.func.isRequired,
// };