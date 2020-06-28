const formatTime = (timeValue) => {
    const formattedTime = [];

    let decrementedTime = timeValue;

    const hours = Math.floor(decrementedTime / 3600000);

    decrementedTime -= hours * 3600000;

    const minutes = Math.floor(decrementedTime / 60000);

    decrementedTime -= minutes * 60000;

    const seconds = Math.floor(timeValue / 1000);

    decrementedTime -= seconds * 1000;

    const milliseconds = decrementedTime;

    formattedTime.push(`00${hours}`.slice(-2));
    formattedTime.push(`00${minutes % 60}`.slice(-2));
    formattedTime.push(`00${seconds % 60}`.slice(-2));
    formattedTime.push(`000${milliseconds}`.slice(-3));

    return `${formattedTime.slice(0, 3).join(':')}.${formattedTime[3]}`;
};

export default formatTime;
