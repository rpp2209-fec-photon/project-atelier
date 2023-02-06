import React from "react";

class Skucontrol extends React.Component {
    constructor(props) {
        super(props)

    }
    sizecontroll = () => {
        this.props.sizecontroll(this.props.sku, this.props.skuid)
    }

    render() {
        return (<option onClick={this.sizecontroll}>{this.props.sku.size}</option>)
    }
}

export default Skucontrol