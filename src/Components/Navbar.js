import React from 'react';
import '../Style/Navbar.css'
import Logo from "../Logo.png"



class Navbar extends React.Component {
    render() {
      return (
        <header className="header">
            <nav className="Navbar">
                <img src={Logo} alt="Logo"/>
                <ul>
                    <li className="home-page">Accueil</li>
                    <li className="about">A propos</li>
                </ul>
            </nav>
            <section className="central-photo">
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
        </header>
      )
    }
  }

  export default Navbar;