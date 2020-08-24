import React, {useState} from 'react';
import * as Tone from "tone";

const HowManyBPM = () => {

    let beatArray = [];
    let [bpm, setBpm] = useState(0);



    const countBpm = () => {
        Tone.Transport.start(0);
        let time = Tone.now();
        let beatTime = Tone.Transport.seconds;

        if (beatArray.length < 8) {
            beatArray.push(beatTime);
        } else {
            beatArray = [];
            beatArray.push(beatTime);
        }

        let total = beatArray.reduce( function(acc, cur) {
            return acc + cur
        }, 0 )
        let avg = total / beatArray.length;
        bpm =  60 / avg;

        console.log(`audio context time: ` + time.toFixed(3));
        console.log(`transport clock: ` + beatTime.toFixed(3));
        console.log(`bpm: ` + bpm.toFixed(2));
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