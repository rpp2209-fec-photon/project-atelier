import React, { Component } from "react";
class ProductInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inoutfit: this.props.inoutfit
        }
    }
    componentDidUpdate(prevProps) {
        console.log(prevProps, this.props)
        if (prevProps.inoutfit !== this.props.inoutfit) {
            this.setState({
                inoutfit: this.props.inoutfit
            })
        }
    }
    jumpto = (e) => {
        console.log(e)
    }
    Outfit = () => {

        this.setState({
            inoutfit: this.props.checkoutfitList()
        })
    }
    render() {
        return (<div>
            {this.props.ratings > -1 ? <div>
                <span>{this.props.ratings}</span>&nbsp;&nbsp;
                <span onClick={this.jumpto}>{this.props.reviewsum} reviews</span>
            </div> : null}
            <div>Category</div>
            <div>{this.props.productname}</div>
            {this.props.sale_price ? <div><span style={{ 'textDecoration': 'line-through' }}>${this.props.original_price}</span> ${this.props.sale_price}</div>
                : <div>${this.props.original_price}</div>}
            <div onClick={this.Outfit}>{this.state.inoutfit ? <span>heart</span> : <span>star</span>}</div>
        </div>)
    }
}

export default ProductInfo