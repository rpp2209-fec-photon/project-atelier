import React from "react";

class Skucontrol extends React.Component {
    constructor(props) {
        super(props)

    }
    sizecontroll = () => {
        this.props.sizecontroll(this.props.sku, this.props.skuid)
    }

    render() {
        return (<li onClick={this.sizecontroll}>{this.props.sku.size}</li>)
    }
}

export default Skucontrol