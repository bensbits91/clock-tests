import * as React from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './Analog.module.css';


export interface AnalogProps {
    className?: string;
    renderNumbers?: boolean;
    size?: number;
}

export interface AnalogState {
    date: Date;
}

class Analog extends React.Component<AnalogProps, AnalogState> {
    constructor(props: AnalogProps) {
        super(props);
        this.state = { date: new Date() };
    }

    public componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    public render() {
        return (
            <Clock
                value={this.state.date}
                className={this.props.className}
                renderNumbers={this.props.renderNumbers || false}
                size={this.props.size || 150}
            />
        );
    }
}

export default Analog;