import React from 'react';
import * as Tone from "tone";

const HowManyBPM = () => {




    let setTime = () => {
        Tone.Transport.start(0);
        let time = Tone.now();
        let beatTime = Tone.Transport.seconds;
        let bpm =  60 / beatTime;

        console.log(`audio ctx time: ` + time.toFixed(3));
        console.log(`transport clock: ` + beatTime.toFixed(3));
        console.log(bpm);


        Tone.Transport.stop().start();



    }



    return (
        <div className="how-many-bpm" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button className="metronome-button" onClick={setTime}>
                Tap the beat!
            </button>
            <div className="bpm-value">60bpm</div>
        </div>
    )

}




export default HowManyBPM;