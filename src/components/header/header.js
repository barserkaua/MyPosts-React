import React, {Component} from "react";
import img from './settings_icon.png';
import {Link} from 'react-router-dom';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm header">
                    <Link className="logo-btn" to="/">
                        <p className="logo-name">LOGO</p>
                    </Link>
                    <Link className="settings-link" to="#">
                        <img className="img-settings" src={img}/>
                        <p className="text-settings">settings</p>
                    </Link>
                </nav>
            </div>
        )
    }
}
