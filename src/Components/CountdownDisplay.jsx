import React from 'react';
import PropTypes from 'prop-types';

function CountdownDisplay({ daysLeft, hoursLeft, minutesLeft, secondsLeft }) {
    return (
        <div className='Countdown__spans'>
            <span>{daysLeft < 10 ? '0' + daysLeft : daysLeft}</span>
            <span>:</span>
            <span>{hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}</span>
            <span>:</span>
            <span>{minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}</span>
            <span>:</span>
            <span>{secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}</span>
        </div>
    );
}

// Choose types of data
CountdownDisplay.propTypes = {
    daysLeft: PropTypes.string.isRequired,
    hoursLeft: PropTypes.func.isRequired,
    minutesLeft: PropTypes.func.isRequired,
    secondsLeft: PropTypes.func.isRequired,
};

export default CountdownDisplay;
