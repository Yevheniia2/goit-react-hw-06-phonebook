// import PropTypes from 'prop-types';
import { FilterBox } from './Filter.styled';
import { FormParagraph, FormInput } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { filterSlice } from './../../Redux/redusers';

export function Filter() {
    const dispatch = useDispatch();
  
    const handleSetFilterValue = ({ target: { value } }) => {
       dispatch(filterSlice(value));
    };

    return (
        <FilterBox>
            <FormParagraph>Find contacts</FormParagraph>
            <FormInput type="text" onChange={ handleSetFilterValue } />
        </FilterBox>
    )
}

// Filter.propTypes = {
//     handleSetFilterValue: PropTypes.func.isRequired,
// };