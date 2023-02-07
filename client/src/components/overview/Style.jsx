import React from "react";
import { FaRegCheckCircle } from 'react-icons/fa'
//FaRegCheckCircle
class Style extends React.Component {
    constructor(props) {
        super(props)
    }
    changestyle = (e) => {
        this.props.changestyle(e.currentTarget.getAttribute('index'), this.props.style)
    }

    render() {
        return <li index={this.props.index} onClick={this.changestyle}><img className="style" src={this.props.style.photos[0].thumbnail_url}></img>
            {this.props.currentindex === this.props.index ? <FaRegCheckCircle /> : null}
        </li>
    }
}


export default Style