import React, { Component } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import '../Style/Appartement-details.css'

class Rating extends Component {
    render() {

        const ratingNumber = this.props.Rating;
        let starsArray = [];
        

        for (let i = 0; i < 5; i++) {
            i < ratingNumber
            ? starsArray.push(<FaStar size={25} color="#FF6060"/>)
            : starsArray.push(<FaRegStar size={25} color="rgba(165, 159, 159, 0.774)"/>);
        }

        return (
            <div className="rate">
                <span>{starsArray}</span>
            </div>
        )
    }
}


export default Rating