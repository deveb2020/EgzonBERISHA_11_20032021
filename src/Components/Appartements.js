import React from 'react';
import {data} from '../Components/Data'
import { Link } from "react-router-dom";
import '../Style/Appartements.css'

class Appartements extends React.Component {
    
    render() {

        return ( 
            <main>
                <section className="central-photo">
                    <h1>Chez vous, partout et ailleurs</h1>
                </section>
                <div className="appartements-wrapper">
                    {data.map(apt => {
                        return (
                            <Link to={`/appartement/${apt.id}`} key={apt.id} className="appartement-box">
                                <img src={apt.cover} alt={apt.title}/>
                                <div className="opacity-div"></div>
                                <p>{apt.title}</p>
                            </Link>
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default Appartements
