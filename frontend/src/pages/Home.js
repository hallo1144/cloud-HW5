import React, { Component } from 'react';
import image from '../img/pikachu.png';
import meme from '../img/meme.png';
import NavBar from '../component/AppBar';
import axios from 'axios';
import './Home.css';

class Home extends Component{
    constructor(){
        super();
        
        this.state = {isloggedin: false};
        axios.get('/api').then(res => {
            console.log(res)
            this.setState({isloggedin: res.data.isloggedin});
        }).catch(err => {
            alert('sorry, backend server seems to have some errors');
            console.log(err);
        })
    }

    render(){
        return (
        <div>
            <NavBar isloggedin={this.state.isloggedin} />
            <div id="Home_container">
                <div id="Home_image_column">
                    <div id="Home_image"><img src={image} alt="leftImage" width="250px" height="250px" /></div>
                    <p id="Home_image_name">
                        NTUEE<br />
                        cloud computing & security
                    </p>
                </div>
                <div id="Home_content">
                    <h1 id="Home_content_title">
                        Welcome to my website :)
                    </h1>
                    <div id="Home_content_meme">
                        <img src={meme} alt="leftImage" width="400px" height="294px" />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Home;
