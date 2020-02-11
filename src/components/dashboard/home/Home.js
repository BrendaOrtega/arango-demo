import React, {Component} from 'react';
import firebase from '../../../firebase';
import Login from '../login/Login';
import Galery from '../galery/Galery';

class AdminHome extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({user:null});
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div className="admin-container">
                {this.state.user ? (<Galery />) : (<Login />)}
            </div>
        )
    }
}

export default AdminHome;