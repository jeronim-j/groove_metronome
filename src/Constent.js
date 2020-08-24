import React, {useState} from "react";
import {Audio} from "./App";
import * as Tone from "tone";


const Consent = () => {

    const [showConsent, setShowConsent] = useState(true);

    const hide = () => {
        setShowConsent(false);
        if (Audio.state === 'suspended') {
            Audio.resume();
            Tone.start();
        }
    }



    const ConsentForm = () => {
        return (
            <section className="consent-background">
            <div className="consent" id="consent">
                <p>Before you can feel the groove, you need to allow us access to your speakers.</p>
                <p>Are you ready to groove??</p>
                <label>
                    <input onClick={hide} name="consent" type="checkbox"/>

                    <span>You bet, I am!</span>
                </label>
            </div>
            </section>
        )
    }


    return (
        <>
            {showConsent ? <ConsentForm/> : null}
        </>
    )
}

export default Consent;