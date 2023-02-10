import React from "react";
import Style from "./Style.jsx";
//FaRegCheckCircle

class Styleselector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentindex: 0
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.styles !== this.props.styles) {
            this.setState({
                currentindex: 0
            })
        }
    }
    changestyle = (target, style) => {
        this.setState({ currentindex: +target })
        this.props.changestyle(style)
    }
    render() {
        return (<div id="styles">
            <div className="styles1"><span>style&gt;</span><span>{this.props.currentstyle}</span></div>
            <ul id="styleselector">{this.props.styles.map((item, index) => {
                return <Style index={index} currentindex={this.state.currentindex} changestyle={this.changestyle} key={item.style_id} style={item} />
            })}</ul>
        </div>)
    }
}

export default Styleselector