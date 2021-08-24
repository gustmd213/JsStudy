import React from 'react';
import ReactRouterDom, { Route } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './NavigationBar.css';


const NavigationBar = ({props}) => {
    return(
        <div className = "NavigationBar">
            <img id = 'textLogo' src = '/img/textLogo.png'/>
            <div className = 'NavigationUI'>
            <img id = 'home' src = '/Navigation/home.png'/>

            <Link to ='/post'>
            <img id = 'post' src = '/Navigation/post.png'/>
            </Link>
            <div id = 'smallUserProfile'></div>
            </div>
        </div>
    );
}

export default NavigationBar