import React, {Component} from "react";
import './App.css';
import nextId from "react-id-generator";
import Header from "../header";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import PostItem from "../post-item";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import moment from "moment";


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
            {subject: 'Andy', note: 'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.\n' +
                    '\n' +
                    'The Python interpreter and the extensive standard library are freely available in source or binary form for all major platforms from the Python web site, https://www.python.org/, and may be freely distributed. The same site also contains distributions of and pointers to many free third party Python modules, programs and tools, and additional documentation.\n' +
                    '\n' +
                    'The Python interpreter is easily extended with new functions and data types implemented in C or C++ (or other languages callable from C). Python is also suitable as an extension language for customizable applications.\n' +
                    '\n' +
                    'This tutorial introduces the reader informally to the basic concepts and features of the Python language and system. It helps to have a Python interpreter handy for hands-on experience, but all examples are self-contained, so the tutorial can be read off-line as well.\n' +
                    '\n' +
                    'For a description of standard objects and modules, see The Python Standard Library. The Python Language Reference gives a more formal definition of the language. To write extensions in C or C++, read Extending and Embedding the Python Interpreter and Python/C API Reference Manual. There are also several books covering Python in depth.', date: '25 September 2020', id:nextId()},
        ]};
    }

    addDate = () => {
        return moment().format('DD MMMM YYYY');
    }

    addItem = (bodySub, bodyNote) => {
        if (bodySub !== '' && bodySub !== ''){

            const newItem = {
                subject: bodySub,
                note: bodyNote,
                date: this.addDate(),
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

