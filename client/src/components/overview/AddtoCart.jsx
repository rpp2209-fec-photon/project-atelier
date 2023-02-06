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
        const a = [], b = sku.quantity > 15 ? 15 : sku.quantity
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
                <select>
                    <option value="" disabled selected>Select your size</option>
                    {Object.keys(this.props.skus).map((item) => {
                        return <Skucontrol key={item} sku={this.props.skus[item]} skuid={item} sizecontroll={this.sizecontroll} />
                    })}</select></div>
            {!this.state.quantity ? null : <select>
                {this.state.quantity.map((item) => {
                    return <option key={this.state.skuid + item} onClick={this.select}>{item}</option>
                })}
            </select>}
            <button onClick={this.AddtoCart}>addtocart</button>
        </div>)
    }
}

export default AddtoCart