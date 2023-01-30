import {Component} from 'react'

class ImageComponent extends Component {
    render() {
        return <img src={this.props.src} alt={this.props.src}></img>
    }
}

export default ImageComponent