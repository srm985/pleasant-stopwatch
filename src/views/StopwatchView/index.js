import moment from 'moment';
import React, {
    Component
} from 'react';

import Button from '../../components/ButtonComponent';
import ButtonGroup from '../../components/ButtonGroupComponent';
import DialBezel from '../../components/DialBezelComponent';
import StopwatchTicker from '../../components/StopwatchTickerComponent';
import ViewTemplate from '../../components/ViewTemplateComponent';

class StopwatchView extends Component {
    static startTime;
    static timerInterval = 100;
    static timerReference;

    constructor(props) {
        super(props);

        this.state = {
            elapsedTime: 0,
            isRunning: false
        };
    }

    countTime = () => {
        this.timerReference = setInterval(() => {
            const now = moment();

            const elapsedTime = now.diff(this.startTime, 'milliseconds');

            this.setState({
                elapsedTime
            });
        }, this.timerInterval);
    }

    toggleRunning = () => {
        this.setState((previousState) => {
            const {
                isRunning: wasRunning
            } = previousState;

            if (wasRunning) {
                clearInterval(this.timerReference);

                this.startTime = null;
            } else {
                this.startTime = moment();

                this.countTime();
            }

            return ({
                isRunning: !wasRunning
            });
        });
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
                    <StopwatchTicker elapsedTime={elapsedTime} />
                </DialBezel>
                <ButtonGroup>
                    <Button
                        handleClick={this.toggleRunning}
                        label={startStopLabel}
                    />
                    <Button
                        isDisabled={!hasStopwatchCounted}
                        isWarning
                        label={'Reset'}
                    />
                </ButtonGroup>
            </ViewTemplate>
        );
    }
}

StopwatchView.displayName = 'StopwatchView';

export default StopwatchView;
