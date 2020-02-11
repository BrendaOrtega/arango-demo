import React, {Component} from 'react';
import './Picture.css'

class Picture extends Component {
    constructor(props) {
        super(props);
        this.url=props.url
    }

    handleRemove(imageId) {
        console.log("Eliminado")
    }

    render() {
        return(
            <div className="Picture">
                <img src={this.url} />
                <button className="btn_delete">Eliminar</button>
            </div>
        )
    }
}

export default Picture