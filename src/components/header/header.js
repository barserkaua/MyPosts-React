import React, {Component} from "react";
import img from './settings_icon.png';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm header">
                    <a className="logo-btn" href="#">
                        <p className="logo-name">LOGO</p>
                    </a>
                    <a className="settings-link" href="#">
                        <img className="img-settings" src={img}/>
                        <p className="text-settings">settings</p>
                    </a>
                </nav>
            </div>
        )
    }
}