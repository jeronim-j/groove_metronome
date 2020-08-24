import React, {useState} from "react";

const Consent = () => {

    const [showConsent, setShowConsent] = useState(true);
    const hide = () => setShowConsent(false);


    const ConsentForm = () => {
        return (
            <div className="consent" id="consent">
                <p>Before you can feel the groove, you need to allow us access to your speakers.</p>
                <p>Are you ready to groove??</p>
                <label>
                    <input onClick={hide} name="consent" type="checkbox"/>

                    <span>You bet, I am!</span>
                </label>
            </div>
        )
    }


    return (
        <>
            {showConsent ? <ConsentForm/> : null}
        </>
    )
}

export default Consent;