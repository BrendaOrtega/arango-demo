import React, {Component} from 'react';
import firebase from '../../../firebase';
import Logo from '../../../assets/arango_logo.png'
import { Link } from 'react-router-dom';

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
                //localStorage.setItem('user', user.uid);
                console.log(user.uid)
            } else {
                this.setState({user:null});
                //localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div className="admin-container">
                <div className="header-home">
                    <img style={{height: "150px", margin: "70px 20px 20px 20px"}} src={Logo} alt="logo" />
                </div>
                <div className="footer-home">
                    <button className="btn_delete" style={{margin:"20px 20px 70px 20px"}}><Link to="/dashboard/login">Panel de administrador</Link></button>
                </div>
            </div>
        )
    }
}

export default AdminHome;