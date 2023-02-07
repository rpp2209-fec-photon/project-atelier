import React from "react";
class AddtoCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skuid: '',
            quantity: [],
            number: 0
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.skus !== this.props.skus) {
            this.setState({
                quantity: []
            })
        }
    }
    selectSize = (e) => {
        let a = [], b = this.props.skus[e.target.value].quantity > 15 ? 15 : this.props.skus[e.target.value].quantity
        for (let i = 0; i < b; i++) {
            a.push(i + 1)
        }
        this.setState({
            quantity: null
        })
        this.setState({
            skuid: e.target.value,
            quantity: a
        })
    }
    selectQuantity = (e) => {
        this.setState({
            number: e.target.value
        })
    }
    AddtoCart = () => {
        console.log('>>>', this.state.skuid, this.state.number)
    }
    render() {
        return (<div id="addtocart">
            <div className="selectSize">
                <select onChange={this.selectSize}>
                    <option value="" >Select your size</option>
                    {Object.keys(this.props.skus).map((item) => {
                        return <option key={item} value={item}>{this.props.skus[item].size}</option>
                    })}</select>
            </div>
            <div>
                <select onChange={this.selectQuantity}>
                    {!this.state.quantity.length ? <option value="" >-</option> : null}
                    {this.state.quantity.map((item) => {
                        return <option key={this.state.skuid + item} onClick={this.select}>{item}</option>
                    })}
                </select>
            </div>

            <button onClick={this.AddtoCart}>addtocart</button>
        </div>)
    }
}

export default AddtoCart