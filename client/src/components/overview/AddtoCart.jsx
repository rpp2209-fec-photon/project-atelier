import React from "react";
import Skucontrol from "./Skuscontrol.jsx";

class AddtoCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skuid: '',
            quantity: null,
            number: 0
        }
    }
    sizecontroll = (sku, id) => {
        const a = []
        let b = sku.quantity
        b = b > 15 ? 15 : b
        for (let i = 0; i < b; i++) {
            a.push(i + 1)
        }
        this.setState({
            quantity: null
        })
        this.setState({
            number: 0,
            skuid: id,
            quantity: a
        })
    }
    select = (e) => {
        this.setState({
            quantity: null,
            number: e.target.innerHTML
        })
    }

    AddtoCart = () => {
        console.log('>>>', this.state.skuid, this.state.number)
    }
    render() {
        return (<div id="addtocart">
            <div><div style={{}}>select size</div>
                <ul>{Object.keys(this.props.skus).map((item) => {
                    return <Skucontrol key={item} sku={this.props.skus[item]} skuid={item} sizecontroll={this.sizecontroll} />
                })}</ul></div>
            {!this.state.quantity ? null : <ul>
                {this.state.quantity.map((item) => {
                    return <li key={this.state.skuid + item} onClick={this.select}>{item}</li>
                })}
            </ul>}
            <button onClick={this.AddtoCart}>addtocart</button>
        </div>)
    }
}

export default AddtoCart