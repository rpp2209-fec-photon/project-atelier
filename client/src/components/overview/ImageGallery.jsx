import React from "react";
import { FaAngleLeft, FaAngleRight, FaCompressArrowsAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa'

class Imagegallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photolist: [],
            currentPhoto: undefined,
            mod: 'default',
            zoomin: false,
            x: 0,
            y: 0,
            lx: 0
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.photolist !== this.props.photolist) {
            this.setState({
                photolist: this.props.photolist,
                currentPhoto: 0,
                mod: 'default',
                zoomin: false,
                x: 0,
                y: 0,
                lx: 0
            })
        }
    }
    changeimage = (e) => {
        e.stopPropagation()
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
    imagehandler = (e) => {
        console.log(e.currentTarget.className)

        if (e.currentTarget.className === 'imagegallery') {
            this.setState({
                mod: 'expand',
                x: 0,
                y: 0
            })
        } else if (e.currentTarget.className === 'expand') {
            const a = this.state.zoomin
            this.setState({
                x: 0,
                y: 0,
                zoomin: !a
            })
        }

    }
    move = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    moveout = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    setdefault = (e) => {
        e.stopPropagation()
        this.setState({
            mod: 'default',
            zoomin: false
        })
    }
    down = (e) => {
        e.stopPropagation()
        let a = this.state.lx
        a = 240 - a + 50 < 50 * this.state.photolist.length ? a - 50 : a
        this.setState({
            lx: a
        })
    }
    up = (e) => {
        e.stopPropagation()
        let a = this.state.lx
        a = a + 50 > 0 ? 0 : a + 50
        this.setState({
            lx: a
        })
    }
    setmainphoto = (e) => {
        e.stopPropagation()
        this.setState({
            currentPhoto: +e.currentTarget.getAttribute('index')
        })
    }

    render() {
        return (<div id='galley' >
            <div className={this.state.mod === 'default' ? 'imagegallery' : 'expand'} onClick={this.imagehandler}>
                {this.state.mod === 'expand' ? <FaCompressArrowsAlt onClick={this.setdefault} style={{
                    cursor: "pointer",
                    color: 'yellow',
                    display: this.state.zoomin ? 'none' : 'inline-block',
                    position: 'absolute',
                    zIndex: '100',
                    right: '10px',
                    top: '10px'
                }} /> : null}
                {typeof this.state.currentPhoto === 'number' ? <img style={{
                    cursor: this.state.zoomin ? 'zoom-out' : 'inherit',
                    position: 'relative',
                    width: '100%', height: '100%',
                    transform: this.state.zoomin ? 'scale(2.5)' : 'none',
                    left: 0 - this.state.x + 'px',
                    top: 0 - this.state.y + 'px',
                    zIndex: this.state.zoomin ? '200' : '0'
                }}
                    onMouseMove={this.state.zoomin ? this.move : null} onMouseOut={this.state.zoomin ? this.moveout : null} src={this.state.photolist[this.state.currentPhoto].url} alt="" /> : null}

                <ul className="thumbnail_urlul" style={{
                    display: this.state.zoomin ? 'none' : 'inline-block'
                }} >{this.state.photolist.map((item, index) => {
                    return <li
                        className={`${this.state.currentPhoto === index ? "selected_image" : ""}` + " " + "thumbnail_urlli"}
                        style={{
                            top: this.state.lx
                        }}
                        index={index}
                        key={item.thumbnail_url}
                        onClick={this.setmainphoto}
                    >
                        <img className="thumbnail_url" src={item.thumbnail_url} ></img></li>
                })}
                </ul>
                {this.state.lx !== 0 ? <FaAngleUp onClick={this.up} className="updown" style={{
                }} /> : null}
                <FaAngleDown className="updown" style={{
                    top: '270px'
                }} onClick={this.down} />
                <FaAngleLeft id='toleft'
                    style={{
                        cursor: "pointer",
                        fontSize: '50px',
                        position: 'absolute',
                        left: '60px',
                        top: '160px',
                        color: 'grey',
                        display: this.state.zoomin ? 'none' : 'inline-block'
                    }} onClick={this.changeimage} />
                <FaAngleRight id='toright'
                    style={{
                        cursor: "pointer",
                        fontSize: '50px',
                        position: 'absolute',
                        right: '30px',
                        top: '160px',
                        color: 'grey',
                        display: this.state.zoomin ? 'none' : 'inline-block'
                    }}
                    onClick={this.changeimage} /> </div>
        </div>)
    }
}

export default Imagegallery