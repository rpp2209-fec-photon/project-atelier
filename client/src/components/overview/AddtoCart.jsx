import React from "react";
class AddtoCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skuid: '',
            quantity: [],
            number: '-',
            size: 'Select your size',
            sizedisplay: 'none'
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.skus !== this.props.skus) {
            console.log('hahah')
            this.setState({
                quantity: [],
                size: 'Select Size',
                number: '-',
                sizedisplay: 'none',
                numberdisplacy: 'none'
            })
        }
    }
    selectSize = (e) => {
        console.log(this.state.sizedisplay)
        let a = [], b = this.props.skus[e.target.value].quantity > 15 ? 15 : this.props.skus[e.target.value].quantity
        for (let i = 0; i < b; i++) {
            a.push(i + 1)
        }
        this.setState({
            size: this.props.skus[e.target.value].size,
            skuid: e.target.value,
            quantity: a,
            number: 1,
            sizedisplay: 'none',
            numberdisplacy: 'none'
        })
    }
    handlesizediplay = () => {
        let a = this.state.sizedisplay === 'block' ? 'none' : 'block'
        this.setState({
            sizedisplay: a
        })
    }
    handlenumberdisplay = () => {
        let a = this.state.numberdisplacy === 'block' ? 'none' : 'block'
        this.setState({
            numberdisplacy: a
        })
    }
    selectQuantity = (e) => {
        this.setState({
            number: e.target.value,
            numberdisplacy: 'none'
        })
    }
    AddtoCart = () => {
        console.log('>>>', this.state.skuid, this.state.number)
    }
    render() {
        return (<div id="addtocart">
            <div  onClick={this.handlesizediplay}>
                <div className="selectSize" >{this.state.size}</div>
                <ul className ='selectSizelist'style={{ display: this.state.sizedisplay }}>{Object.keys(this.props.skus).map((item) => {
                    return <li className="selectSizelistitem"key={item} onClick={this.selectSize} value={item}>{this.props.skus[item].size}</li>
                })}</ul>
            </div>
            <div className="quantity">
                <div onClick={this.handlenumberdisplay}>{this.state.number}</div>
                <ul style={{ display: this.state.numberdisplacy }}>
                    {this.state.quantity.map((item) => {
                        return <li key={this.state.skuid + item} value={item} onClick={this.selectQuantity}>{item}</li>
                    })}
                </ul>

            </div>

            <button onClick={this.AddtoCart}>addtocart</button>
        </div>)
    }
}

export default AddtoCart