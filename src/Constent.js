import React from "react";

const Consent = () => {
    return (
        <div className="consent">
            <p>Before you can feel the groove, you need to allow us access to your speakers.</p>
            <p>Are you ready to groove??</p>
            <label>
                <input name="consent" type="checkbox"/>

                <span>You bet, I am!</span>
            </label>
        </div>
    )
}

export default Consent;