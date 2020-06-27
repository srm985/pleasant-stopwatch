import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';
import classNames from '../../utils/classNames';

const StopwatchTickerComponent = (props) => {
    const {
        elapsedTime
    } = props;

    const {
        displayName
    } = StopwatchTickerComponent;

    const tickQuantity = 120;

    const formatTime = (timeValue) => {
        const formattedTime = [];

        let decrementedTime = timeValue;

        const hours = Math.floor(decrementedTime / 360000);

        decrementedTime -= hours * 360000;

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

    const renderTickRing = () => {
        const ticks = [];

        for (let tickNumber = 0; tickNumber < tickQuantity; tickNumber++) {
            const percentTimeElapsed = (elapsedTime % 1000) / 1000;
            const tickNumberRotationalPercentage = tickNumber / tickQuantity;

            const isCurrentlyTicked = percentTimeElapsed >= tickNumberRotationalPercentage;

            const tickClassNames = classNames(
                `${displayName}__tick`,
                `${displayName}__tick-${tickNumber}`,
                {
                    [`${displayName}__tick--ticked`]: isCurrentlyTicked
                }
            );

            ticks.push(
                <span
                    className={tickClassNames}
                    key={tickNumber}
                />
            );
        }

        return (
            <div className={`${displayName}__tick-ring`}>
                {ticks}
            </div>
        );
    };

    return (
        <div className={displayName}>
            <h2 className={`${displayName}__elapsed-time`}>{formatTime(elapsedTime)}</h2>
            {renderTickRing()}
        </div>
    );
};

StopwatchTickerComponent.displayName = 'StopwatchTickerComponent';

StopwatchTickerComponent.propTypes = {
    elapsedTime: PropTypes.number
};

StopwatchTickerComponent.defaultProps = {
    elapsedTime: 0
};

export default StopwatchTickerComponent;
