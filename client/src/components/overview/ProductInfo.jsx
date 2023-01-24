import React, { Component } from "react";
import { getMetaReviews, getProductInfo } from "../../../helpers/helpers";
class ProductInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewdisplay: false,
            ratingstar: 0,
            numberOfreviews: 0,
            productname: '',
            
        }
    }
    componentDidMount() {
        getMetaReviews('71697').then((result) => {
            const ratings = result.data.ratings
            if (Object.keys(ratings).length) {
                let reviewsum = 0, total = 0, ave = 0
                for (let item in ratings) {
                    total += +item * +ratings[item]
                    reviewsum += +ratings[item]
                }
                ave = (total / reviewsum).toFixed(1)
                this.setState({
                    reviewdisplay: true,
                    ratingstar: ave,
                    numberOfreviews: reviewsum
                })
            }
        })
        getProductInfo('71697').then((result) => {
            this.setState({
                productname: result.data.name
            })
        })
    }
    jumpto = (e) => {
        console.log(e)
    }
    Outfit = () => {
        console.log('outfit')
    }
    render() {
        return (<div>
            {this.state.reviewdisplay ? <div>
                <span>{this.state.ratingstar}</span>&nbsp;&nbsp;
                <span onClick={this.jumpto}>{this.state.numberOfreviews} reviews</span>
            </div> : null}
            <div>Category</div>
            <div>{this.state.productname}</div>
            {this.props.sale_price ? <div><span style={{ 'textDecoration': 'line-through' }}>${this.props.original_price}</span> ${this.props.sale_price}</div>
                : <div>${this.props.original_price}</div>}
            <div onClick={this.Outfit}>star</div>
            {/* implment it later */}
        </div>)
    }
}

export default ProductInfo