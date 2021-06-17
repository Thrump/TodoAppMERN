
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import ShowTodos from './components/ShowTodos'
import CreateTodo from './components/CreateTodo'
import ShowTodoDetails from './components/ShowTodoDetails'
import UpdateTodo from './components/UpdateTodo'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component= {ShowTodos}/>
        <Route path='/create-todo' component= {CreateTodo}/>
        <Route path='/edit-todo/:id' component= {UpdateTodo}/>
        <Route path='/show-todo:/id' component= {ShowTodoDetails}/>
      </div>
    </Router>
  );
}

export default App;
