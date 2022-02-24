import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './TodoList.css';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<Props> = ({ todo, todos, setTodos}) => {
  return (
    <div className="todos">
        {
            todos.map(todo => (
              <SingleTodo
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}

              />
            ))
        }
    </div>
  )
}

export default TodoList