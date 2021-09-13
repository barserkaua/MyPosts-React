import React, {Component} from "react";
import './App.css';
import nextId from "react-id-generator";
import Header from "../header";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import PostItem from "../post-item";

import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {subject: 'Vasyl', note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi exercitationem ipsum modi placeat, sint\n' +
                    '    soluta vel! Atque, molestiae, tenetur. Adipisci distinctio doloremque dolorum enim libero minima praesentium totam\n' +
                    '    voluptas!', date: '07 April 2021', id:nextId()},
            {subject: 'Alex', note: 'Some text!', date: '31 June 2021', id:nextId()},
            {subject: 'Max', note: 'Can you did it, Sucker!?', date: '25 September 2020', id:nextId()},
        ]};
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
                            <Route path='/' exact component={() => {return (<PostAddForm onAdd={this.addItem}/>)}}/>
                        </div>
                        <Route path='/' exact component={() => {return (<PostList posts={data}/>)}}/>
                    </div>
                    <div className='container-post-detail'>
                        <Route path='/:id' exact
                               render={
                                   ({match}) => {
                                       const {id} = match.params;
                                       return <PostItem postId={id} post={data}/>
                                   }}/>
                    </div>
                </div>
            </Router>
        );
    }
}

