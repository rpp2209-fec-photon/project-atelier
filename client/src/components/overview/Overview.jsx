import React, { Component } from "react";
import ProductInfo from "./ProductInfo.jsx";
import { getProductStyles, getMetaReviews, getProductInfo } from "../../../helpers/helpers.js";
import Styleselector from "./Styleselector.jsx";
import AddtoCart from "./AddtoCart.jsx";
import Imagegallery from "./ImageGallery.jsx";
class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inoutfit: false,
            outFitList: [],
            currentProductId: '',
            productname: '',
            ratings: -1,
            reviewsum: 0,
            original_price: null,
            sale_price: null,
            styles: [],
            currentstyle: '',
            skus: {},
            photolist: []
        }
    }
    changestyle = (style) => {
        this.setState({
            currentstyle: style.name,
            original_price: style.original_price,
            sale_price: style.sale_price,
            skus: style.skus,
            photolist: style.photos
        })
    }
    checkoutfitList = () => {
        console.log(this.state.currentProductId)
        return this.props.handleAddOutfit(this.state.currentProductId)
    }
    componentDidMount() {
        this.setState({
            outFitList: this.props.outFitList
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.currentProductId !== prevProps.currentProductId) {
            this.setState({
                currentProductId: this.props.currentProductId
            })
            Promise.all([getProductInfo(this.props.currentProductId), getProductStyles(this.props.currentProductId), getMetaReviews(this.props.currentProductId)])
                .then((res) => {
                    let reviewsum = 0, total = 0, ave = 0, a = false
                    res = res.map(item => item.data)
                    this.props.setname(res[0].name)
                    this.props.setchar(res[0].features)
                    const ratings = res[2].ratings
                    if (Object.keys({ ratings }).length) {
                        for (let item in ratings) {
                            total += +item * +ratings[item]
                            reviewsum += +ratings[item]
                        }
                        ave = (total / reviewsum).toFixed(1)
                    } else {
                        ave = -1
                    }
                    //handle outfitlist
                    // if (this.props.outFitList.indexOf(this.props.currentProductId) !== -1) {
                    //     a = true
                    // }
                    //handle style
                    const results = res[1].results[0]
                    this.setState({
                        original_price: results.original_price,
                        sale_price: results.sale_price,
                        styles: res[1].results,
                        currentstyle: results.name,
                        skus: results.skus,
                        photolist: results.photos,
                        productname: res[0].name,
                        ratings: ave,
                        reviewsum: reviewsum,
                        inoutfit: false
                    })
                })
        }
    }
    render() {
        return (<div id='overview' style={{ position: 'relative', height: '600px', width: '1000px' }}>
            <ProductInfo productname={this.state.productname}
                original_price={this.state.original_price}
                reviewsum={this.state.reviewsum}
                sale_price={this.state.sale_price}
                ratings={this.state.ratings}
            />
            <Styleselector currentstyle={this.state.currentstyle}
                styles={this.state.styles} changestyle={this.changestyle} />
            <AddtoCart skus={this.state.skus} inoutfit={this.state.inoutfit} checkoutfitList={this.checkoutfitList} />
            <Imagegallery photolist={this.state.photolist} />
        </div>)
    }
}//mainphoto={this.state.mainphoto}

export default Overview