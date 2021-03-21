import React from 'react';
import {data} from '../Components/Data'
import '../Style/Appartements.css'


class Appartements extends React.Component {
    render() {
        return ( 
            <main className="appartements-wrapper">
                {data.map(apt => {
                    return (
                        <div key={apt.id} className="appartement-box">
                            <img src={apt.cover} alt={apt.title}/>
                            <div className="opacity-div"></div>
                            <p>{apt.title}</p>
                        </div>
                    )
                })}
            </main>
        )
    }
}

export default Appartements
