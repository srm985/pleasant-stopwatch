import moment from 'moment';
import React, {
    Component
} from 'react';

import Button from '../../components/ButtonComponent';
import ButtonGroup from '../../components/ButtonGroupComponent';
import DialBezel from '../../components/DialBezelComponent';
import Pit from '../../components/PitComponent';
import Plateau from '../../components/PlateauComponent';
import StopwatchTicker from '../../components/StopwatchTickerComponent';
import ViewTemplate from '../../components/ViewTemplateComponent';

import formatTime from '../../utils/formatTime';

class StopwatchView extends Component {
    constructor(props) {
        super(props);

        this.pausedTime = 0;
        this.timerInterval = 100;

        this.state = {
            elapsedTime: 0,
            isRunning: false,
            savedIntervalList: []
        };
    }

    countTime = () => {
        this.timerReference = setInterval(() => {
            const now = moment();

            const elapsedTime = now.diff(this.startTime, 'milliseconds') + this.pausedTime;

            this.setState({
                elapsedTime
            });
        }, this.timerInterval);
    }

    toggleRunning = () => {
        this.setState((previousState) => {
            const {
                elapsedTime,
                isRunning: wasRunning
            } = previousState;

            if (wasRunning) {
                clearInterval(this.timerReference);

                this.pausedTime = elapsedTime;
            } else {
                this.startTime = moment();

                this.countTime();
            }

            return ({
                isRunning: !wasRunning
            });
        });
    }

    captureInterval = () => {
        this.setState((previousState) => {
            const {
                elapsedTime,
                savedIntervalList
            } = previousState;

            const isIntervalSameAsLast = elapsedTime <= savedIntervalList[savedIntervalList.length - 1];

            if (!elapsedTime || isIntervalSameAsLast) {
                return null;
            }

            const updatedIntervalList = [
                ...savedIntervalList,
                elapsedTime
            ];

            return ({
                savedIntervalList: updatedIntervalList
            });
        });
    }

    handleReset = () => {
        clearInterval(this.timerReference);

        this.pausedTime = 0;

        this.setState({
            elapsedTime: 0,
            isRunning: false,
            savedIntervalList: []
        });
    }

    renderSavedIntervals = () => {
        const {
            state: {
                savedIntervalList
            }
        } = this;

        return savedIntervalList.map((intervalTimestamp, intervalNumber) => (
            <Plateau key={intervalTimestamp}>
                <span>
                    <span className={'bold mr--1'}>{intervalNumber + 1}</span>
                    <span>{'Interval'}</span>
                </span>
                <span>{formatTime(intervalTimestamp)}</span>
            </Plateau>
        ));
    }

    render() {
        const {
            state: {
                elapsedTime,
                isRunning
            }
        } = this;

        const {
            displayName
        } = StopwatchView;

        const startStopLabel = isRunning ? 'Stop' : 'Start';
        const hasStopwatchCounted = elapsedTime > 0;

        return (
            <ViewTemplate viewName={displayName}>
                <DialBezel className={'mb--7'}>
                    <StopwatchTicker
                        elapsedTime={elapsedTime}
                        handleClick={this.captureInterval}
                        isRunning={isRunning}
                    />
                </DialBezel>
                <ButtonGroup className={'mb--6'}>
                    <Button
                        handleClick={this.toggleRunning}
                        label={startStopLabel}
                    />
                    <Button
                        handleClick={this.handleReset}
                        isDisabled={!hasStopwatchCounted}
                        isWarning
                        label={'Reset'}
                    />
                </ButtonGroup>
                <Pit shouldFillRemainingHeight>
                    {this.renderSavedIntervals()}
                </Pit>
            </ViewTemplate>
        );
    }
}

StopwatchView.displayName = 'StopwatchView';

export default StopwatchView;
