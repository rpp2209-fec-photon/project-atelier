import React from "react";
import { FaRegCheckCircle } from 'react-icons/fa'

class Style extends React.Component {
    constructor(props) {
        super(props)
    }
    changestyle = (e) => {
        this.props.changestyle(e.currentTarget.getAttribute('index'), this.props.style)
    }

    render() {
        return <li className="style" index={this.props.index} onClick={this.changestyle}><img style={{ height: '100%', width: '100%', borderRadius: "50%" }} src={this.props.style.photos[0].thumbnail_url}></img>
            {this.props.currentindex === this.props.index ? <FaRegCheckCircle style={{ position: 'absolute', marginTop: '0px', right: '-4px', top: '-4px' }} /> : null}
        </li>
    }
}


export default Style