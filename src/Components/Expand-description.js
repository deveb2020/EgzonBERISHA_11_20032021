import React, { Component } from 'react'
import '../Style/Appartement-details.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa"


class ExpandDescription extends Component {

    state = {
        expand1: false,
        expand2: false
    }

    handleClick() {
        this.setState({expand1 : !this.state.expand1})
    }
    handleClick2() {
        this.setState({expand2 : !this.state.expand2})
    }

    render() {

        const Description = this.props.description;
        const Equipements = this.props.equipments;

        const isExpandedDescription = this.state.expand1;
        const isExpandedEquipement = this.state.expand2;

        const classConditionDescription = isExpandedDescription ? "expendavle-div-description" : "collapse-div-description";
        const classConditionEquipement = isExpandedEquipement ? "expendavle-div-description" : "collapse-div-description";

        const iconConditionDescription = isExpandedDescription ? < FaAngleUp  size="1.5rem" color="white"/> :  < FaAngleDown  size="1.5rem" color="white"/>;
        const iconConditionEquipement = isExpandedEquipement ? < FaAngleUp  size="1.5rem" color="white"/> :  < FaAngleDown  size="1.5rem" color="white"/>;

        return (
            <div className="expandables-wrapper">
                <div className="description">
                    <div className="description-txt">
                        <p>Description</p>
                        <div className="icon-wrapper" onClick={() => this.handleClick()}>
                            {iconConditionDescription}
                        </div>
                    </div>
                    <div className={classConditionDescription}>
                        <p>{Description}</p>
                    </div>
                </div>
                <div className="equipements">
                    <div className="equipements-txt">
                        <p >Equipements</p>
                        <div className="icon-wrapper" onClick={() => this.handleClick2()}>
                            {iconConditionEquipement}
                        </div>
                    </div>
                    <div className={classConditionEquipement}>
                        <ul >
                            {Equipements.map(elem => <li className="color-tag">{elem}</li>)}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}

export default ExpandDescription