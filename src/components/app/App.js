import React, {Component} from "react";
import './App.css';
import nextId from "react-id-generator";
import Header from "../header";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {subject: 'Vasyl', note: 'Hello World!', date: '07 April 2021',},
            {subject: 'Alex', note: 'Some text!', date: '31 June 2021',},
            {subject: 'Max', note: 'Can you did it, Sucker!?', date: '25 September 2020'},
        ]};
        this.nextId = nextId();
    }

    addItem = (bodySub, bodyNote) => {
        const newItem = {
            subject: bodySub,
            note: bodyNote,
            date: '08 April 2022'
        };
        // return all posts what we have
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state;

        return (

            <div>
                <Header/>
                <div className=''>
                    <PostAddForm onAdd={this.addItem}/>
                </div>
                <PostList posts={data}/>
            </div>
        );
    }
}

