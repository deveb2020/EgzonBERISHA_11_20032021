import React from 'react';
import '../Style/About.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa"



class About extends React.Component {

    state = {
        expand: true,
        expand2: true,
        expand3: true,
        expand4: true
    };

    handleClick() {
        this.setState({expand : !this.state.expand})
    }
    handleClick2() {
        this.setState({expand2 : !this.state.expand2})
    }
    handleClick3() {
        this.setState({expand3 : !this.state.expand3})
    }
    handleClick4() {
        this.setState({expand4 : !this.state.expand4})
    }

    render() {
        
        const isExpanded = this.state.expand;
        const isExpanded2 = this.state.expand2;
        const isExpanded3 = this.state.expand3;
        const isExpanded4 = this.state.expand4;
        
        return (
            <section>
                <div className="cover-photo-about"></div>
                <ul className="list-wrapper">

                    <li>
                        <div  className="list-item">
                            <p>Fiabiliter</p>
                            <div className="icon-wrapper" onClick={() => this.handleClick()} >
                                {isExpanded ? < FaAngleDown  size="1.5rem" color="white"/> : < FaAngleUp  size="1.5rem" color="white"/>}
                            </div>
                        </div>
                        <div className={ isExpanded ? "collapsed-text" : "expanded-text" }>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat odit, accusantium eligendi delectus tenetur. Obcaecati asperiores eius cupiditate assumenda minus reprehenderit doloremque, facere praesentium fuga porro debitis optio voluptas!</p>
                        </div>
                    </li>

                    <li >
                        <div className="list-item">
                            <p>Respect</p>
                            <div className="icon-wrapper"  onClick={ () => this.handleClick2()} >
                                {isExpanded2 ? < FaAngleDown  size="1.5rem" color="white"/> : < FaAngleUp  size="1.5rem" color="white"/>}
                            </div> 
                        </div>
                        <div className={ isExpanded2 ? "collapsed-text" : "expanded-text" }>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat odit, accusantium eligendi delectus tenetur. Obcaecati asperiores eius cupiditate assumenda minus reprehenderit doloremque, facere praesentium fuga porro debitis optio voluptas!</p>
                        </div>
                    </li>

                    <li >
                        <div className="list-item">
                            <p>Service</p>
                            <div className="icon-wrapper" onClick={ () => this.handleClick3()} >
                                {isExpanded3 ? < FaAngleDown  size="1.5rem" color="white"/> : < FaAngleUp  size="1.5rem" color="white"/>}
                            </div>
                        </div>
                        <div className={ isExpanded3 ? "collapsed-text" : "expanded-text" }>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat odit, accusantium eligendi delectus tenetur. Obcaecati asperiores eius cupiditate assumenda minus reprehenderit doloremque, facere praesentium fuga porro debitis optio voluptas!</p>
                        </div>
                    </li>

                    <li>
                        <div className="list-item">
                            <p>Responsabilite</p>
                            <div className="icon-wrapper" onClick={ () => this.handleClick4()} >
                                {isExpanded4 ? < FaAngleDown  size="1.5rem" color="white"/> : < FaAngleUp  size="1.5rem" color="white"/>}
                            </div>
                        </div>
                        <div className={ isExpanded4 ? "collapsed-text" : "expanded-text" }>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat odit, accusantium eligendi delectus tenetur. Obcaecati asperiores eius cupiditate assumenda minus reprehenderit doloremque, facere praesentium fuga porro debitis optio voluptas!</p>
                        </div>
                    </li>

                </ul>
            </section>
        )
    }
}

export default About


