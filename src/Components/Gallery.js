import React, { Component } from 'react'
import '../Style/Gallery.css'
import { FiChevronLeft ,FiChevronRight } from "react-icons/fi";



class Gallery extends Component {
    
    state = { index: 0 } 

    previousSlid() {
        const nextIndex = this.state.index - 1;
        if (nextIndex < 0) {
            this.setState({index: this.props.Photos.length-1})
        } else {
            this.setState({index: nextIndex})
        }
    }

    nextSlid(){
        this.setState({index: (this.state.index +1) % this.props.Photos.length })
    }
   
    render() {
        const photos = this.props.Photos;

        return (
            <div className="photo-box">
                <div className="left-icon" onClick={() => this.previousSlid()}>
                    <FiChevronLeft color='white' size={70}/>
                </div>
                <div className="right-icon" onClick={() => this.nextSlid()}>
                    <FiChevronRight color='white' size={70}/>
                </div>
                <img src={photos[this.state.index]} alt="Foto"/>
            </div>
        )
    }
}

export default Gallery