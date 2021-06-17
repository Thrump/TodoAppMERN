import React from 'react'
import { Link } from 'react-router-dom'


const TodoCard = (props) => {
    const todo = props.todo;

    return(
        <div>
            <div className="desc">
                <h2>
                    <Link to={`/show-todo/${todo._id}`}/>
                    {todo.title}
                </h2>
                <h3>{todo.description}</h3>
            </div>
        </div>
    )
}

export default TodoCard;