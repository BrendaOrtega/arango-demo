import React, {Component} from 'react';
import './Picture.css'

class Picture extends Component {
    constructor(props) {
        super(props);
        this.url=props.url,
        this.pictureId=props.pictureId
    }

    handleRemove(pictureId) {
        this.props.removePicture(pictureId)
    }

    render() {
        return(
            <div className="Picture">
                <img src={this.url} />
                <button className="btn_delete" onClick={() => this.handleRemove(this.pictureId)}>Eliminar</button>
            </div>
        )
    }
}

export default Picture