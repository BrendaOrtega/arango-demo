import React, {Component} from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Galery.css'
import firebase from '../../../firebase'
import Picture from './Picture';

class Galery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        const image = e.target.files[0]
        const databaseRef = firebase.database().ref('images')
        const storageRef = firebase.storage().ref(`images/${image.name}`)
        const task = storageRef.put(image);

        task.on('state_changed', (snapshot) =>{
            
        }, (error)=>{
            console.log(error.message)
        }, () => {
            storageRef.getDownloadURL().then(url => {
                const image = {
                    url: url
                }
                databaseRef.push(image)
            })
        });
    }

    componentDidMount() {
        const databaseRef = firebase.database().ref('images')
        databaseRef.on('value', (snapshot) => {
            let pictures = snapshot.val();
            let newState = [];
            for(let picture in pictures) {
                newState.push({
                    url: pictures[picture].url
                });
            }
            this.setState({
                pictures: newState
            });
        });
    }

    render() {
        return (
            <div className="container"> 
                <Sidebar />
                <div className="add-image">
                    <input className="imageInput" type="file" onChange={this.handleChange} accept="image/png, image/jpeg" />    
                </div>
                <div className="show-image">

                        {
                            this.state.pictures.map((picture) => {
                                return(
                                    <Picture
                                    url={picture.url} />
                                )
                                
                            })
                        }

                        
                    
                </div>
            </div>
        )
    }
}

export default Galery;