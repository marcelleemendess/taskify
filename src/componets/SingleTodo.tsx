import React, { useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './SingleTodo.css'

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props>= ({todo, todos, setTodos}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id:number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, isDone:!todo.isDone} 
            : 
            todo)
        )
    }

    const handleDelete = (id:number) => {
        const newTodos = todos.filter((todo) => todo.id !== id );
        setTodos(newTodos);
    }

    const handleEdit = (id:number) => {
        setEdit(!edit)
    }
  
    return (
    <form className="todos__single"> 
        { todo.isDone ? (
            <s className="todos__sigle--text">{todo.todo}</s>
        ) : (
            <span className="todos__sigle--text">{todo.todo}</span>
        )}
        <div>
            <span 
                className="icon" 
                onClick={() =>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                }}>
                <AiFillEdit/> 
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
