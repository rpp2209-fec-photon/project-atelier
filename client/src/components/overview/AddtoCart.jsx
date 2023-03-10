import React from "react";
import { BsChevronDown, BsChevronUp, BsPlusLg, BsStar, BsHeart } from "react-icons/bs"
import { addtocart } from "../../../helpers/helpers";

class AddtoCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skuid: '',
            quantity: [],
            number: '-',
            size: 'SELECT SIZE',
            sizedisplay: 'none',
            inoutfit: false
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.skus !== this.props.skus) {
            this.setState({
                quantity: [],
                size: 'SELECT SIZE',
                number: '-',
                sizedisplay: 'none',
                numberdisplacy: 'none'
            })
        }
        if (prevProps.inoutfit !== this.props.inoutfit) {
            this.setState({
                inoutfit: false
            })
        }
    }
    selectSize = (e) => {
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
    Outfit = () => {
        this.props.checkoutfitList()
        let a = this.state.inoutfit
        this.setState({
            inoutfit: !a
        })
    }
    selectQuantity = (e) => {
        this.setState({
            number: e.target.value,
            numberdisplacy: 'none'
        })
    }
    AddtoCart = () => {
        if (this.state.skuid !== '') {
            addtocart(this.state.skuid).then((data) => {
                console.log(data)
            })
        }

    }
    render() {
        return (<div id="addtocart">
            <div onClick={this.handlesizediplay}>
                <div className="selectSize" ><span>{this.state.size}</span>{this.state.sizedisplay === 'none' ? <BsChevronDown className="bs" /> : <BsChevronUp className="bs" />}</div>
                <ul className='selectSizelist' style={{ display: this.state.sizedisplay }}>{Object.keys(this.props.skus).map((item) => {
                    return <li className="selectSizelistitem" key={item} onClick={this.selectSize} value={item}><span>{this.props.skus[item].size}</span></li>
                })}</ul>
            </div>
            <div className="quantity">
                <div className='handlenumberdisplay' onClick={this.handlenumberdisplay}><span>{this.state.number}</span><BsChevronDown className="ss" /></div>
                <ul className = 'numbers' style={{ display: this.state.numberdisplacy }}>
                    {this.state.quantity.map((item) => {
                        return <li className='numberlist' key={this.state.skuid + item} value={item} onClick={this.selectQuantity}><span>{item}</span></li>
                    })}
                </ul>

            </div>
            <div className="addtobag" onClick={this.AddtoCart}><span>ADD TO BAG</span><BsPlusLg style={{ float: 'right', 'marginTop': '15px', 'marginRight': '20px' }} /></div>
            <div className="outfit" style={{
                width: '44px',
                height: '44px',
                border: '1px solid rgb(202, 188, 188)',
                position: 'absolute',
                bottom: '10px',
                right: '0',
                display: 'inline-block'
            }} onClick={this.Outfit}>{!this.state.inoutfit ? <BsStar style={{ float: 'left', marginLeft: '13px', marginTop: '15px' }} /> : <BsHeart style={{ float: 'left', marginLeft: '13px', marginTop: '15px' }} />}</div>
        </div>)
    }
}

export default AddtoCart