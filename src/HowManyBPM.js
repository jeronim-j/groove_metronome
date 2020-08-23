import React from 'react';
import * as Tone from "tone";

const HowManyBPM = () => {

    let beatArray = [];
    let bpm;

    let setTime = () => {

        Tone.Transport.start(0);
        let time = Tone.now();
        let beatTime = Tone.Transport.seconds;

        if (beatArray.length < 4) {
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


        console.log(`audio ctx time: ` + time.toFixed(3));
        console.log(`transport clock: ` + beatTime.toFixed(3));
        console.log(`bpm: ` + bpm.toFixed(0));
        Tone.Transport.stop().start();

    }





    return (
        <div className="how-many-bpm">
            <button className="metronome-button" onClick={setTime}>
                Tap the beat!
            </button>
            <div className="bpm-value">60BPM</div>
        </div>
    )
}




export default HowManyBPM;