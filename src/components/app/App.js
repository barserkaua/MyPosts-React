import React, {Component} from "react";
import './App.css';
import nextId from "react-id-generator";
import Header from "../header";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {subject: 'Vasyl', note: 'Hello World!', date: '07 April 2021', id:nextId()},
            {subject: 'Alex', note: 'Some text!', date: '31 June 2021', id:nextId()},
            {subject: 'Max', note: 'Can you did it, Sucker!?', date: '25 September 2020', id:nextId()},
        ]};
        this.nextId = nextId();
    }

    addItem = (bodySub, bodyNote) => {
        if (bodySub !== '' && bodySub !== ''){

            const newItem = {
                subject: bodySub,
                note: bodyNote,
                date: '08 April 2022',
                id: nextId()
            };
            console.log(newItem.id)
            // return all posts what we have
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }

    render() {
        const {data} = this.state;

        return (
            <Router>
                <div>
                    <Header/>
                    <div className='container'>
                        <div className=''>
                            <PostAddForm onAdd={this.addItem}/>
                        </div>
                        <Route path='/some' exact={true} component={() => <h1>Welcome to my posts</h1>}/>
                        <PostList posts={data}/>
                    </div>
                </div>
            </Router>
        );
    }
}

