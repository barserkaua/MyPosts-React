import React, {Component} from "react";
import './App.css';
import Header from "../header";
import Posts from "../posts";
import PostAddForm from "../post-add-form";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }
    }

    render() {
        return (

            <div>
                <Header/>
                <div className=''>
                    <PostAddForm/>
                </div>
                <Posts/>
            </div>
        );
    }
}

