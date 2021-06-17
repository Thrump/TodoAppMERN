import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TodoCard from './TodoCard'

class ShowTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/Todos')
        .then(res => {
            this.setState({
                todos: res.data
            })
        }).catch( err => {
            console.log("Error from ShowTodos")
        })

    }

    render() {
        const todos = this.state.todos
        console.log(todos)

        let todoList;

        if(!todos || todos.length == 0) {
            todoList = "There is no todo record!";
        }else {
            todoList = todos.map((todo , k) => {
                return <TodoCard todo={todo} key={k}></TodoCard>
            })
        }

        return (
            <div className="ShowTodos">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <h2 clasName="display-4 text-center">Todos List</h2>
                        </div>
                        <div className = "col-md-11">
                            <Link to="/create-todo" className="btn btn-outline-warning float-right">
                                + Add New Todo
                            </Link>
                            <br />
                        </div>
                    </div>
                    <div className="list">
                        {todoList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowTodos