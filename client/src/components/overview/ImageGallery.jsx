import React from "react";

class Imagegallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mainphoto: '',
            photolist: []
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.photolist !== this.props.photolist) {
            this.setState({
                photolist: this.props.photolist,
                mainphoto: this.props.photolist[0].url
            })
        }
    }
    setmainphoto = (e) => {
        this.setState({
            mainphoto: e.target.alt
        })
    }

    render() {
        return (<div>
            <ul className="thumbnail_urlul">{this.state.photolist.map((item) => {
                return <li
                    key={item.thumbnail_url}
                    className="thumbnail_urlli"
                    onClick={this.setmainphoto}
                >
                    <img className="thumbnail_url" src={item.thumbnail_url} alt={item.url}></img></li>
            })}</ul>
            <div><img id="imagegallery" src={this.state.mainphoto} alt="" />
            </div>
        </div>)
    }
}

export default Imagegallery