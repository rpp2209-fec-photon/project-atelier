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
                <span onClick={this.jumpto}>{this.props.reviewsum} <span>read all reviews</span></span>
            </div> : null}
            <div>Category</div>
            <div>{this.props.productname}</div>
            {this.props.sale_price ? <div><span style={{ 'textDecoration': 'line-through' }}>${this.props.original_price}</span> ${this.props.sale_price}</div>
                : <div>${this.props.original_price}</div>}
        </div>)
    }
}

export default ProductInfo