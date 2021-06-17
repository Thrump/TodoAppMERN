import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export class CreateTodo extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '' 
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            description: this.state.description
        }

        axios.post('http://localhost:8000/todos', data)
        .then(res => {
            this.setState({
                title: '',
                description: ''
            })
            this.props.history.push('/');
        }).catch(err => {
            console.log("Error in CreateTodo!");
        })
    }

    render() {
        return (
            <div className="CreateTodo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Todo List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Todo</h1>
                            <p className="lead text-center">
                                Create new Todo
                            </p>


                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type='text'
                                        placeholder='Title of Todo'
                                        name='title'
                                        className="form-control"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                        ></input>

                                </div>
                                <br/>

                                <div className="form-group">
                                    <input
                                        text='text'
                                        placeholder='Description of todo'
                                        name='description'
                                        className='form-control'
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        ></input>
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                ></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreateTodo
