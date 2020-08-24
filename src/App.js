import React from 'react';
import Metronome from "./Metronome";
import Header from "./Header";
import Footer from "./Footer";
import HowManyBPM from "./HowManyBPM";
import Consent from "./Constent";


const App = () => {


    return (
        <>
            <Header/>
            <section className={"application"}>
                <Consent/>
                <Metronome/>
                <HowManyBPM/>
            </section>
            <Footer/>
        </>
    )

}

export default App;