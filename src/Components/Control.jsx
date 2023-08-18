import React from 'react';
import PropTypes from 'prop-types';

function InputDateTime({ selectedDate, onChange }) {
    return (
        <input
            id='dateInput'
            type='datetime-local'
            value={selectedDate}
            onChange={onChange}
        />
    );
}

// Choose types of data
InputDateTime.propTypes = {
    selectedDate: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default InputDateTime;
