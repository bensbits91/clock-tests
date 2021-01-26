import * as React from 'react';
import Digital from './Digital';
import Analog from './Analog';
import CountdownCircle from './CountdownCircle';
import DigitalTimer from './DigitalTimer';
import './main.css';

const digital_12_nodate =
    <div>
        <h2>12-Hour</h2>
        <div>
            <h3>Seattle</h3>
            <Digital
                format='h:mm:ss a'
                timezone='US/Pacific'
            />
        </div>
        <div>
            <h3>London</h3>
            <Digital
                format='h:mm:ss a'
                timezone='Europe/London'
            />
        </div>
        <div>
            <h3>Tokyo</h3>
            <Digital
                format='h:mm:ss a'
                timezone='Asia/Tokyo'
            />
        </div>
    </div>;

const digital_12_date =
    <div>
        <h2>12-Hour with Date</h2>
        <div>
            <h3>Seattle</h3>
            <Digital
                format='dd MMM Do YYYY'
                timezone='US/Pacific'
                ticking={false}
            />
            <Digital
                format='h:mm:ss a'
                timezone='US/Pacific'
            />
        </div>
        <div>
            <h3>London</h3>
            <Digital
                format='dd MMM Do YYYY'
                timezone='Europe/London'
                ticking={false}
            />
            <Digital
                format='h:mm:ss a'
                timezone='Europe/London'
            />
        </div>
        <div>
            <h3>Tokyo</h3>
            <Digital
                format='dd MMM Do YYYY'
                timezone='Asia/Tokyo'
                ticking={false}
            />
            <Digital
                format='h:mm:ss a'
                timezone='Asia/Tokyo'
            />
        </div>
    </div>;

const digital_24_nodate =
    <div>
        <h2>24-Hour</h2>
        <div>
            <h3>Seattle</h3>
            <Digital
                format='HH:mm:ss a'
                timezone='US/Pacific'
            />
        </div>
        <div>
            <h3>London</h3>
            <Digital
                format='HH:mm:ss a'
                timezone='Europe/London'
            />
        </div>
        <div>
            <h3>Tokyo</h3>
            <Digital
                format='HH:mm:ss a'
                timezone='Asia/Tokyo'
            />
        </div>
    </div>;


const digital =
    <div>
        <h1>Digital</h1>
        {digital_12_nodate}
        {digital_12_date}
        {digital_24_nodate}
    </div>;


const analog =
    <div>
        <h1>Analog</h1>
        <div>
            <h2>Simple</h2>
            <Analog />
        </div>
        <div>
            <h2>With Numbers</h2>
            <Analog
                renderNumbers
            />
        </div>
        <div>
            <h2>With Date</h2>
            <Analog />
            <Digital
                format='dd MMM Do YYYY'
                timezone='US/Pacific'
                ticking={false}
            />
        </div>
        <div>
            <h2>Custom Style</h2>
            <Analog
                className='mint'
            />
            <Analog
                className='navy'
            />
            <Analog
                className='tech'
            />
        </div>
        <div>
            <h2>Sizes</h2>
            <Analog
                className='navy'
                size={50}
            />
            <Analog
                className='navy'
                size={100}
            />
            <Analog
                className='navy'
            />
            <Analog
                className='navy'
                size={200}
            />
            <Analog
                className='navy'
                size={250}
            />
            <Analog
                className='navy'
                size={500}
            />
        </div>
    </div>;


const countdownCircle =
    <div>
        <h1>Countdown Circle Timers</h1>
        <div>
            <h2>Simple Countdown</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['#34bebd']
                ]}
                trailColor='transparent'
            />
        </div>
        <div>
            <h2>Changing Colors</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
            />
        </div>
        <div>
            <h2>Repeating</h2>
            <CountdownCircle
                durationSeconds={5}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                repeat
            />
        </div>
        <div>
            <h2>Message when Complete</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                doneMessage={'Countdown complete!'}
            />
        </div>
        <div>
            <h2>Repeating with Message when Complete</h2>
            <CountdownCircle
                durationSeconds={5}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                doneMessage={'Countdown complete!'}
                repeat
                repeatDelay={1500}
            />
        </div>
        <div>
            <h2>Small</h2>
            <CountdownCircle
                durationSeconds={5}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                size={90}
                doneMessage={'Done!'}
                repeat
                className='small'
            />
        </div>
        <div>
            <h2>Big</h2>
            <CountdownCircle
                durationSeconds={5}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                size={360}
                doneMessage={'Countdown complete!'}
                repeat
                className='big'
            />
        </div>
        <div>
            <h2>Thin</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                strokeWidth={3}
                doneMessage={'Countdown complete!'}
                repeat
                className='thin default'
            />
        </div>
        <div>
            <h2>Thick</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                strokeWidth={36}
                doneMessage={'Done!'}
                repeat
                className='thick default'
            />
        </div>
        <div>
            <h2>Full</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                trailColor='#888'
                // strokeLinecap={'square'}
                strokeWidth={90}
                doneMessage={'Countdown complete!'}
                repeat
                className='full default darkbg'
            />
        </div>
        <div>
            <h2>Square Line Ending</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['#1e3b5a', .33],
                    ['#34bebd', .33],
                    ['#ee964b', .33]
                ]}
                strokeLinecap={'square'}
                // strokeWidth={36}
                doneMessage={'Countdown complete!'}
                repeat
            />
        </div>
        <div>
            <h2>No Circle</h2>
            <CountdownCircle
                durationSeconds={10}
                colors={[
                    ['transparent']
                ]}
                trailColor='transparent'
                doneMessage={'Countdown complete!'}
                repeat
                className='bigMsg default'
            />
        </div>
        <div>
            <h2>Long Time - not good - maybe combine with digital countdown timer</h2>
            <CountdownCircle
                durationSeconds={60 * 60 * 12}
                colors={[
                    ['#34bebd']
                ]}
                doneMessage={'Countdown complete!'}
            />
        </div>
    </div>;


const timer =
    <div>
        <h1>Digital Timers</h1>
        <div>
            <h2>Forward</h2>
            <div>
                <DigitalTimer
                    showSeconds
                    lastUnit='s'
                />
            </div>
            <div>
                <DigitalTimer
                    showMinutes
                    showSeconds
                    lastUnit='m'
                />
            </div>
            <div>
                <DigitalTimer
                    showHours
                    showMinutes
                    showSeconds
                    lastUnit='h'
                />
            </div>
            <div>
                <DigitalTimer
                    showDays
                    showHours
                    showMinutes
                    showSeconds
                />
            </div>
        </div>
        <div>
            <h2>Backward</h2>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={60000}
                    showSeconds
                />
            </div>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={60000 * 60 * 2}
                    showMinutes
                    showSeconds
                />
            </div>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={60000 * 60 * 2}
                    showHours
                    showMinutes
                    showSeconds
                />
            </div>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={60000 * 60 * 24 * 2}
                    showDays
                    showHours
                    showMinutes
                    showSeconds
                />
            </div>
        </div>
        <div>
            <h2>With Messages</h2>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={60000}
                    showSeconds
                    checkpoints={[
                        {
                            time: 55000,
                            message: '5 secs passed.',
                        },
                        {
                            time: 30000,
                            message: 'Only 30 secs left!',
                        },
                        {
                            time: 5000,
                            message: 'Only 5 secs left!!!',
                        }
                    ]}
                />
            </div>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={5000}
                    showMinutes
                    showSeconds
                    checkpoints={[
                        {
                            time: 0,
                            message: 'Countdown complete.',
                        }
                    ]}
                />
            </div>
            <div>
                <DigitalTimer
                    showSeconds
                    showMinutes
                    checkpoints={[
                        {
                            time: 5000,
                            message: 'It\'s been 5 seconds since we started.',
                        },
                        {
                            time: 30000,
                            message: 'It\'s been 30 seconds since we started.',
                        },
                        {
                            time: 60000,
                            message: 'It\'s been a minute since we started.',
                        }
                    ]}
                />
            </div>
        </div>
        <div>
            <h2>With Controls</h2>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={60000}
                    showSeconds
                    lastUnit='s'
                    hasControls
                />
            </div>
        </div>
        <div>
            <h2>With Controls, Don't Auto-Start</h2>
            <div>
                <DigitalTimer
                    direction='backward'
                    initialTime={60000}
                    showSeconds
                    lastUnit='s'
                    hasControls
                    startImmediately={false}
                />
            </div>
        </div>
    </div >;

export interface AppProps { }
// export interface AppState {}

class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
        // this.state = { : };
        console.clear();
    }

    public render() {
        return (
            <>
                {timer}
                {countdownCircle}
                {digital}
                {analog}
            </>
        );
    }
}

export default App;