import React, { Component } from "react";
import ProductInfo from "./ProductInfo.jsx";
import { getProductStyles } from "../../../helpers/helpers.js";
import Styleselector from "./Styleselector.jsx";
import AddtoCart from "./AddtoCart.jsx";
import Imagegallery from "./ImageGallery.jsx";
class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    componentDidMount() {
        getProductStyles('71697').then((res) => {
            const results = res.data.results
            this.setState({
                original_price: results[0].original_price,
                sale_price: results[0].sale_price,
                styles: results,
                currentstyle: results[0].name,
                skus: results[0].skus,
                //mainphoto: results[0].photos[0],
                photolist: results[0].photos
            })
        })
    }
    render() {
        return (<div >
            <ProductInfo original_price={this.state.original_price}
                sale_price={this.state.sale_price} />
            <Styleselector currentstyle={this.state.currentstyle}
                styles={this.state.styles} changestyle={this.changestyle} />
            <AddtoCart skus={this.state.skus} />
            <Imagegallery photolist={this.state.photolist} />
        </div>)
    }
}//mainphoto={this.state.mainphoto}

export default Overview