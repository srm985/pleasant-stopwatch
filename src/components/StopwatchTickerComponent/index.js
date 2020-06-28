import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';
import formatTime from '../../utils/formatTime';

import {
    KEY_CODE_SPACEBAR
} from '../../constants';

import './styles.scss';

const StopwatchTickerComponent = (props) => {
    const {
        elapsedTime,
        handleClick,
        isRunning
    } = props;

    const {
        displayName
    } = StopwatchTickerComponent;

    const tickQuantity = 120;

    const handleKeyPress = (event) => {
        const {
            keyCode
        } = event;

        if (keyCode === KEY_CODE_SPACEBAR) {
            handleClick();
        }
    };

    const renderTickRing = () => {
        const ticks = [];

        for (let tickNumber = 0; tickNumber < tickQuantity; tickNumber++) {
            const tickClassNames = classNames(
                `${displayName}__tick`,
                `${displayName}__tick-${tickNumber}`,
                {
                    [`${displayName}__tick-${tickNumber}--ticking`]: isRunning
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
        <div
            className={displayName}
            onClick={handleClick}
            onKeyUp={handleKeyPress}
            role={'button'}
            tabIndex={0}
        >
            <h2 className={`${displayName}__elapsed-time`}>{formatTime(elapsedTime)}</h2>
            {renderTickRing()}
        </div>
    );
};

StopwatchTickerComponent.displayName = 'StopwatchTickerComponent';

StopwatchTickerComponent.propTypes = {
    elapsedTime: PropTypes.number,
    handleClick: PropTypes.func,
    isRunning: PropTypes.bool
};

StopwatchTickerComponent.defaultProps = {
    elapsedTime: 0,
    handleClick: () => {},
    isRunning: false
};

export default StopwatchTickerComponent;
