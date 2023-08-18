import './App.css';
import React from 'react';
import Control from './Components/Control';
import DeadlineDisplay from './Components/DeadlineDisplay';
import CountdownDisplay from './Components/CountdownDisplay';

function App() {
    const [deadline, setDeadline] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(false);
    const [daysLeft, setDaysLeft] = React.useState(0);
    const [hoursLeft, setHoursLeft] = React.useState(0);
    const [minutesLeft, setMinutesLeft] = React.useState(0);
    const [secondsLeft, setSecondsLeft] = React.useState(0);

    React.useEffect(() => {
        setSelectedDate(document.getElementById('dateInput').value);
        setDeadline(new Date(`${selectedDate}`));
        setCurrentDate(new Date());
        if (selectedDate) {
            let dateDiff = Math.floor(
                (deadline.getTime() - currentDate.getTime()) / 1000,
            );

            setDaysLeft(Math.floor(dateDiff / (24 * 60 * 60)));
            setHoursLeft(Math.floor(dateDiff / 3600) % 24);
            setMinutesLeft(Math.floor(dateDiff / 60) % 60);
            setSecondsLeft(Math.floor(dateDiff) % 60);
        }
    });

    // Date and time formatter
    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const formattedDate = dateTime.toLocaleDateString(); // Date format
        const formattedTime = dateTime.toLocaleTimeString(); // Time format
        return `${formattedDate} ${formattedTime}`;
    };
    return (
        <div className='Countdown'>
            <div className='Countdown__block'>
                <h2 className='COUNTDOWN'>Countdown</h2>
                <Control
                    selectedDate={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <CountdownDisplay
                    daysLeft={daysLeft}
                    hoursLeft={hoursLeft}
                    minutesLeft={minutesLeft}
                    secondsLeft={secondsLeft}
                />
                <DeadlineDisplay
                    selectedDate={selectedDate}
                    formatDateTime={formatDateTime}
                />
            </div>
        </div>
    );
}

export default App;
