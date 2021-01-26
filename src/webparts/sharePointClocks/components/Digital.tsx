import * as React from 'react';
import Clock from 'react-live-clock';


export interface DigialProps {
    timezone: string;
    format: string;
    ticking?: boolean;
}

// export interface DigialState {}

class Digial extends React.Component<DigialProps, {}> {
    constructor(props: DigialProps) {
        super(props);
        // this.state = { :  };
    }
    
    public render() {
        return (
            <div className='spfx-clock digital'>
                <Clock format={this.props.format} ticking={this.props.ticking || true} timezone={this.props.timezone} />
            </div>
        );
    }
}

export default Digial;