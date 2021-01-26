import * as React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './CountdownCircle.module.css';

const mcc = 'color:hotpink;';

export interface CountDownCircleProps {
    durationSeconds: any;
    colors: any;
    onComplete?: any;
    size?: any;
    strokeWidth?: any;
    strokeLinecap?: any;
    trailColor?: any;

    repeat?: any;
    repeatDelay?: number;
    doneMessage?: string;
    className?: string;
}

export interface CountDownCircleState {
    message?: string;
}




class CountDownCircle extends React.Component<CountDownCircleProps, CountDownCircleState> {
    constructor(props: CountDownCircleProps) {
        super(props);
        this.state = { message: null };
    }

    // public componentDidUpdate(prevProps: CountDownCircleProps, prevState: CountDownCircleState) {
    //     console.log('%c : CountDownCircle -> componentDidUpdate -> prevState', mcc, prevState);
    //     console.log('%c : CountDownCircle -> componentDidUpdate -> this.state', mcc, this.state);
    //     if (prevState.message && !this.state.message)
    //         return [true, 500];
    // }

    public _onComplete() {
        const repeatDelay = this.props.repeatDelay ? this.props.repeatDelay : 1000;
        if (this.props.repeat && this.props.doneMessage) {
            this.setState({
                message: this.props.doneMessage
            });
            setTimeout(() => {
                this.setState({
                    message: null
                });
            }, 1000);
            return [true, repeatDelay];
        }
        else if (this.props.repeat) {
            return [true, repeatDelay];
        }
        else if (this.props.doneMessage) {
            this.setState({ message: this.props.doneMessage });
        }
        else return;
    }

    public render() {

        return (
            <div className={this.props.className || 'default'}>
                <CountdownCircleTimer
                    isPlaying
                    durationSeconds={this.props.durationSeconds}
                    colors={this.props.colors}
                    renderTime={time => {
                        if (this.state.message) return <span className='msg'>{this.state.message}</span>;
                        return time;
                    }}
                    size={this.props.size || 180}
                    strokeWidth={this.props.strokeWidth || 12}
                    strokeLinecap={this.props.strokeLinecap || 'round'}
                    trailColor={this.props.trailColor}
                    onComplete={() => this._onComplete()}
                />
            </div>
        );
    }
}

export default CountDownCircle;