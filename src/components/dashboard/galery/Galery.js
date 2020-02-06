import React, {Component} from 'react';
import {Sidebar} from '../sidebar/Sidebar';
import './Galery.css'
import firebase, {storage} from '../../../firebase'

class Galery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadValue: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        const image = e.target.files[0]
        const storageRef = firebase.storage().ref(`images/${image.name}`)
        const task = storageRef.put(image);

        task.on('state_changed', (snapshot) =>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue: percentage
            })
        }, (error)=>{
            console.log(error.message)
        }, () => {
            this.setState({
                picture: task.snapshot.downloadURL
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Sidebar />
                <div className="progr">
                    <progress value={this.state.uploadValue} max='100' />
                    {this.state.uploadValue} %
                </div>
                <div className="add-image">
                    <input className="imageInput" type="file" onChange={this.handleChange} accept="image/png, image/jpeg" />    
                </div>
                <div className="show-image">
                    {console.log(this.state.picture)}
                </div>
            </div>
        )
    }
}

export default Galery;