import React, {Component} from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Galery.css'
import firebase from '../../../firebase'
import Picture from './Picture';

class Galery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            inputRef: this.refs.myInput
        }
        this.handleChange = this.handleChange.bind(this);
        this.removePicture = this.removePicture.bind(this);
    }

    handleChange (e) {
        const image = e.target.files[0]
        const databaseRef = firebase.database().ref('images')
        const newName=Date.now().toString()+image.name
        const storageRef = firebase.storage().ref(`images/${newName}`)
        const task = storageRef.put(image);
        let snap = {}

        task.on('state_changed', (snapshot) =>{
        }, (error)=>{
            console.log(error.message)
        }, () => {
            
            storageRef.getDownloadURL().then(url => {
                const image = {
                    url: url,
                    name: newName
                }
                databaseRef.push(image)
            })
        })
        this.inputFiles.value='';
    }

    componentDidMount() {
        const databaseRef = firebase.database().ref('images')
        databaseRef.on('value', (snapshot) => {
            let pictures = snapshot.val();
            let newState = [];
            for(let picture in pictures) {
                newState.push({
                    pictureId: picture,
                    url: pictures[picture].url,
                    name: pictures[picture].name
                });
            }
            this.setState({
                pictures: newState
            });
        });
    }

    removePicture(pictureId, name){
        const databaseRef = firebase.database().ref('images')
        const storageRef = firebase.storage().ref('images')
        storageRef.child(name).delete().then((e)=>console.log(e)).catch((e)=>console.log(e))
        databaseRef.child(pictureId).remove().then((e)=>console.log(e)).catch((e)=>console.log(e))

    }

    render() {
        return (
            <div className="container"> 
                <Sidebar />
                <div className="add-image">
                    <input ref={input=>{this.inputFiles=input}} className="imageInput" type="file" onChange={this.handleChange} accept="image/png, image/jpeg" />    
                </div>
                <div className="show-image">

                        {
                            this.state.pictures.map((picture) => {
                                return(
                                    <Picture
                                    url={picture.url}
                                    pictureId={picture.pictureId}
                                    name={picture.name}
                                    key={picture.pictureId}
                                    removePicture={this.removePicture}
                                     />
                                    
                                )  
                            })
                        }
                </div>
            </div>
        )
    }
}

export default Galery;