import React, {useState} from 'react';
import * as Tone from "tone";

const HowManyBPM = () => {

    let beatArray = [];
    let [bpm, setBpm] = useState(0);



    const countBpm = () => {
        Tone.start();
        Tone.Transport.start(0);


        let beatTime = Tone.Transport.seconds;

        if (beatArray.length < 5) {
            beatArray.push(beatTime);
        } else {
            beatArray.shift();
        }

        let total = beatArray.reduce( function(acc, cur) {
            return acc + cur
        }, 0 )
        let avg = (total - beatArray[0]) / (beatArray.length - 1);
        if (beatArray.length > 3) {
            bpm =  60 / avg;
        }

        Tone.Transport.stop().start();
        setBpm(bpm);
    }
    return (
        <div className="how-many-bpm">
            <button className="metronome-button" onClick={countBpm}>
                Tap the beat!
            </button>
            <div className="bpm-value">{bpm.toFixed(0)} BPM</div>
        </div>
    )
}




export default HowManyBPM;