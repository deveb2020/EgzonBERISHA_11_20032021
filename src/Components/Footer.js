import React from 'react';
import "../Style/Footer.css"
import LogoFooter from "../LogoFooter.png"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img src={LogoFooter} alt="Logo"/>
                <p>2021 Kasa. All rights reserved</p>
            </footer>
        )
    }
}

export default Footer