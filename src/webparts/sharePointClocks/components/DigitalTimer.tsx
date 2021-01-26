import * as React from 'react';
// import CountdownTimer from "react-component-countdown-timer";
// import 'react-component-countdown-timer/lib/styles.css';
import Timer from 'react-compound-timer';

const mcc = 'color:lime;';

export interface DigitalTimerProps {
    direction?: string;
    initialTime?: number;
    lastUnit?: string;

    showDays?: boolean;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    showMs?: boolean;

    checkpoints?: any;

    hasControls?: boolean;
    startImmediately?: boolean;
}

export interface DigitalTimerState {
    message: string;
    timerState?: string;
}

class DigitalTimer extends React.Component<DigitalTimerProps, DigitalTimerState> {
    constructor(props: DigitalTimerProps) {
        super(props);
        const initState = this.props.startImmediately === false ? 'Timer is paused.' : 'Timer is playing.';
        this.state = {
            message: null,
            timerState: initState
        };
    }

    public render() {
        console.log('%c : DigitalTimer -> render -> this.props', mcc, this.props);

        const initialTime = this.props.initialTime || 0;
        const direction = this.props.direction == 'backward' ? 'backward' : 'forward';
        const lastUnit = this.props.lastUnit == 's' ? 's' : 'd';

        const timer_guts =
            <div>
                {this.props.showDays && <Timer.Days />}
                {this.props.showDays && 'days'}
                {this.props.showHours && <Timer.Hours />}
                {this.props.showHours && 'hours'}
                {this.props.showMinutes && <Timer.Minutes />}
                {this.props.showMinutes && 'minutes'}
                {this.props.showSeconds && <Timer.Seconds />}
                {this.props.showSeconds && ' seconds '}
                {this.props.showMs && <Timer.Milliseconds />}
                {this.props.showMs && 'milliseconds'}
                {this.state.message && this.state.message}
            </div>;


        const timer_with_controls =
            <Timer
                initialTime={initialTime}
                direction={direction}
                lastUnit={lastUnit}
                startImmediately={this.props.startImmediately === false ? false : true}
                onPause={() => this.setState({ timerState: 'Timer is paused.' })}
                onStart={() => this.setState({ timerState: 'Timer is playing.' })}
                onStop={() => this.setState({ timerState: 'Timer is stopped.' })}
                onResume={() => this.setState({ timerState: 'Timer is playing.' })}
                // onReset={() => this.setState({ timerState: 'Timer is paused.' })}
            >
                {({ start, resume, pause, stop, reset/* , timerState */ }) => (
                    <>
                        {timer_guts}
                        <br />
                        <div>
                            {this.state.timerState}
                        </div>
                        <br />
                        <div>
                            <button onClick={() => {start();}}>Start</button>
                            <button onClick={() => {pause();}}>Pause</button>
                            <button onClick={() => {resume();}}>Resume</button>
                            <button onClick={() => {stop();}}>Stop</button>
                            <button onClick={() => {reset();}}>Reset</button>
                        </div>
                    </>
                )}
            </Timer>;


        const timer_no_controls =
            <Timer
                initialTime={initialTime}
                direction={direction}
                lastUnit={lastUnit}
                checkpoints={this.props.checkpoints
                    ? this.props.checkpoints.map(c => {
                        return ({
                            time: c.time,
                            callback: () => {
                                this.setState({ message: c.message });
                            }
                        });
                    })
                    : []}
            >
                {() => {
                    return (
                        <>
                            {timer_guts}
                        </>
                    );
                }}
            </Timer>;


        const el_timer = this.props.hasControls ? timer_with_controls : timer_no_controls;


        return (
            <>
                {el_timer}
            </>
        );
    }
}

export default DigitalTimer;