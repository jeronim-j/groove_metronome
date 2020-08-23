import React from 'react';
import Metronome from "./Metronome";
import Header from "./Header";
import Footer from "./Footer";
import HowManyBPM from "./HowManyBPM";


const App = () => {
    return (
        <>
            <Header/>
            <Metronome/>
            <HowManyBPM/>
            <Footer/>
        </>
    )
}

export default App;