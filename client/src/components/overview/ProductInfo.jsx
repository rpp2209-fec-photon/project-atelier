import React, { Component } from "react";
import StarRating from '../../RatingsAndReviews/components/miniComponents/StarRating.jsx';

class ProductInfo extends Component {
    constructor(props) {
        super(props)

    }

    jumpto = (e) => {
        console.log(e)
    }

    render() {
        return (<div id="productinfo">
            {this.props.ratings > -1 ? <div className='prostar'>
                <StarRating Rating={this.props.ratings} />
                <div onClick={this.jumpto}>{this.props.reviewsum} <span>read all reviews</span></div>
            </div> : null}
            <div style={{
                position: 'absolute',
                top: '40px',
                fontSize: '15px',
                height: '15px',
                lineHeight: '15px'
            }}>Category</div>
            <div id='productname'>{this.props.productname}</div>
            <div style={{
                width:'200px',
                position:'absolute',
                top:'120px'
            }}>{this.props.sale_price ? <div><span style={{ 'textDecoration': 'line-through' }}>${this.props.original_price}</span> ${this.props.sale_price}</div>
                : <div>${this.props.original_price}</div>}</div>

        </div>)
    }
}

export default ProductInfo