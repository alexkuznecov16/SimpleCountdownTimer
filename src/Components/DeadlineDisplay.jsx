import React from 'react';
import PropTypes from 'prop-types';

function DeadlineDisplay({ selectedDate, formatDateTime }) {
    return (
        <p className='Countdown__deadline'>
            Deadline: {selectedDate ? formatDateTime(selectedDate) : ''}
        </p>
    );
}

// Choose types of data
DeadlineDisplay.propTypes = {
    selectedDate: PropTypes.string.isRequired,
    formatDateTime: PropTypes.func.isRequired,
};

export default DeadlineDisplay;
