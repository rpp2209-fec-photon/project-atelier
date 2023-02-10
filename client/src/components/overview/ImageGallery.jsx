import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

class Imagegallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photolist: [],
            currentPhoto: undefined
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.photolist !== this.props.photolist) {
            this.setState({
                photolist: this.props.photolist,
                currentPhoto: 0
            })
        }
    }
    changeimage = (e) => {
        let a = this.state.currentPhoto
        if (e.target.id === 'toleft') {
            a = a - 1 === -1 ? this.state.photolist.length - 1 : a - 1
            this.setState({
                currentPhoto: a
            })
        } else {
            a = a + 1 === this.state.photolist.length ? 0 : a + 1
            this.setState({
                currentPhoto: a
            })
        }
    }
    setmainphoto = (e) => {
        this.setState({
            currentPhoto: +e.currentTarget.getAttribute('index')
        })
    }

    render() {
        return (<div id='galley'>

            <div id="imagegallery">{typeof this.state.currentPhoto === 'number' ? <img style={{ width: '100%', height: '100%' }} src={this.state.photolist[this.state.currentPhoto].url} alt="" /> : null}
                <ul className="thumbnail_urlul">{this.state.photolist.map((item, index) => {
                    return <li
                        className={`${this.state.currentPhoto === index ? "selected_image" : ""}` + " " + "thumbnail_urlli"}
                        index={index}
                        key={item.thumbnail_url}
                        onClick={this.setmainphoto}
                    >
                        <img className="thumbnail_url" src={item.thumbnail_url} ></img></li>
                })}</ul>
                <FaAngleLeft id='toleft'
                    style={{
                        fontSize: '50px',
                        position: 'absolute',
                        left: '60px',
                        top: '160px',
                        color: 'grey'
                    }} onClick={this.changeimage} /><FaAngleRight id='toright'
                    style={{
                        fontSize: '50px',
                        position: 'absolute',
                        right: '30px',
                        top: '160px',
                        color: 'grey'
                    }}
                     onClick={this.changeimage}/> </div>
        </div>)
    }
}

export default Imagegallery