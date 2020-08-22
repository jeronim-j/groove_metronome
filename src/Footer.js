import React from 'react';
import {ReactComponent as Github} from "./assets/github.svg";
import {ReactComponent as LinkedIn} from "./assets/linkedin.svg";

const Footer = () => {
    return (
        <>
            <hr className="footer-underline"/>
            <div className="footer">

                <section>
                    <div>Made using <a href="https://reactjs.org/">React</a> and <a href="https://tonejs.github.io/">ToneJS</a>.</div>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </div>
                </section>
                <section>
                    <a href="https://github.com/jeronim-j"><Github className="icon"/></a>
                    <a href="https://www.linkedin.com/in/jeronimjan/"><LinkedIn className="icon"/></a>
                </section>
            </div>
        </>
    )
}

export default Footer;