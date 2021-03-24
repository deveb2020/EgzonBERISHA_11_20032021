import React, { Component } from 'react'
import {data} from '../Components/Data'
import '../Style/Appartement-details.css'
import ExpandDescription from '../Components/Expand-description'
import Rating from "../Components/Rating"
import Gallery from '../Components/Gallery'


 class AppartementDetails extends Component {
    render() {

        const paramID = this.props.match.params.id;

        const currentAppartement = data.filter(apt => apt.id === paramID)[0];

        const { title, location, pictures, host, equipments, tags, rating, description } = currentAppartement;

        return (
            <div className="apt-info-wrapper">
                <Gallery Photos={pictures}/>
                <div className="group-element-principale">
                    <div className="group-element-left">
                        <h1 className="title">{title}</h1>
                        <p className="location">{location}</p>
                        <ul className='tags-list-wrapper'>
                            {tags.map(tag => <li className="tag">{tag}</li>)}
                        </ul>
                    </div>
                    <div className="group-elements-right">
                        <div className="name-photo-wrapper">
                            <div className="host-name">{host.name}</div>
                            <img className="host-photo" src={host.picture} alt={host.name}/>
                        </div>
                        <Rating Rating={rating}/>
                    </div>
                </div>

                <ExpandDescription description={description} equipments={equipments}/>
            </div>
        )
    }
}

export default AppartementDetails