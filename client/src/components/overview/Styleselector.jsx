import React from "react";
import Style from "./Style.jsx";

class Styleselector extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (<div>
            <div><span>style&gt;</span>{this.props.currentstyle}</div>
            <ul id="styleselector">{this.props.styles.map((item) => {
                return <Style changestyle={this.props.changestyle} key={item.style_id} style={item} />
            })}</ul>
        </div>)
    }
}

export default Styleselector