import React from "react";

class Style extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: this.props.style
        }
    }
    changestyle = () => {
        console.log(this.state.style.skus)
        this.props.changestyle(this.state.style)
    }

    render() {
        return <li onClick={this.changestyle}><img className="style" src={this.state.style.photos[0].thumbnail_url}></img></li>
    }
}


export default Style