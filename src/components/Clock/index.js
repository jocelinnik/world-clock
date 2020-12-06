import React from 'react';

import Value from "../Value/index";

import "./index.css";

class Clock extends React.Component {
    constructor(props){
        super(props);

        const hourHere = new Date();
        let hour = hourHere.getHours() + this.props.utc;
        let minute = hourHere.getMinutes();
        let second = hourHere.getSeconds();
        if(hour >= 24) hour = hour - 24;

        this.state = {
            city: this.props.city,
            hour: hour,
            minute: minute,
            second: second
        };
    }
    
    tickHour(value){
        this.setState(state => ({
            hour: value
        }));
    }

    tickMinutes(value){
        this.setState(state => ({
            minute: value
        }));
    }

    tickSeconds(value){
        this.setState(state => ({
            second: value
        }));
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.tickSeconds(this.state.second + 1);

            if(this.state.second === 60){
                this.tickSeconds(0);
                this.tickMinutes(this.state.minute + 1);
            }

            if(this.state.minute === 60){
                this.tickMinutes(0);
                this.tickHour(this.state.hour + 1);
            }

            if(this.state.hour === 24){
                this.tickHour(0);
            }
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <div className="container clock">
                <h3>{this.state.city}</h3>

                <div style={{display: "inline-flex"}}>
                    <Value value={this.state.hour} />

                    <div className="container twoPointsClock"><strong>:</strong></div>

                    <Value value={this.state.minute} />

                    <div className="container twoPointsClock"><strong>:</strong></div>

                    <Value value={this.state.second} />
                </div>
            </div>
        );
    }
}

export default Clock;