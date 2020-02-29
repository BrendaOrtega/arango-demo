import React, {Component} from 'react';
import './Picture.css'

class Picture extends Component {
    constructor(props) {
        super(props);
        this.url=props.url,
        this.name=props.name,
        this.pictureId=props.pictureId
    }

    handleRemove(pictureId, name) {
        this.props.removePicture(pictureId, name)
    }

    render() {
        return(
            <div className="Picture">
                <img className="imageSh" src={this.url} />
                <button className="btn_delete" onClick={() => this.handleRemove(this.pictureId, this.name)}>Eliminar</button>
            </div>
        )
    }
}

export default Picture