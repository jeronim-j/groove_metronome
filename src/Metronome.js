import React, {Component} from 'react';
import click1 from './assets/click1.wav';
import click2 from './assets/click2.wav';


class Metronome extends Component {
    constructor(props) {
        super(props);

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);

        this.state = {
            playing: false,
            count: 0,
            bpm: 180,
            beatsPerMeasure: 4
        };

    }

    startStop = () => {
        const pointer = document.querySelector("#pointer");

        if (this.state.playing) {
            clearInterval(this.timer);
            pointer.style.left = "0%";
            pointer.innerHTML = "1"
            this.setState({
                playing: false
            });
        } else {
            this.timer = setInterval(
                this.playClick,
                (60 / this.state.bpm) * 1000
            );
            this.setState(
                {
                    count: 0,
                    playing: true
                },
                this.playClick
            );
        }
    };

    playClick = () => {
        const {count, beatsPerMeasure} = this.state;
        const pointer = document.querySelector("#pointer");


        if (count % beatsPerMeasure === 0) {
            this.click2.play();
            pointer.style.left = "0%"
            pointer.innerHTML = "1"
        } else if (count % beatsPerMeasure === 3) {
            this.click1.play();
            pointer.style.left = "75%"
            pointer.innerHTML = "4"
        } else if (count % beatsPerMeasure === 2) {
            this.click1.play();
            pointer.style.left = "50%"
            pointer.innerHTML = "3"
        } else {
            this.click1.play();
            pointer.style.left = "25%"
            pointer.innerHTML = "2"

        }

        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }));
    };

    handleBpmChange = event => {
        let bpm = event.target.value;

        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

            this.setState({
                count: 0,
                bpm
            });
        } else {
            this.setState({bpm});
        }
    }


    render() {
        const {playing, bpm} = this.state;

        return (
            <div className="metronome">
                <div className="bpm-value" onChange={this.handleBpmChange}>{bpm} BPM</div>

                <input className="bpm-slider" type="range" min="60" max="300" value={bpm}
                       onChange={this.handleBpmChange}/>
                <button className="metronome-button" onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
                <div className="metronome-animation">
                    <div className="metronome-animation-pointer" id="pointer">1</div>
                </div>
            </div>
        );
    }
}

export default Metronome;