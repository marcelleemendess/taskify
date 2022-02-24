import React, { useRef } from 'react';
import './InputField.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; // this fun does not return anything
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {
  
    const inputRef = useRef<HTMLInputElement>(null);
  
    return (
    <form 
        className="input" 
        onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}
    >
        <input 
            ref={inputRef}
            type="input" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task" 
            className="input__box" 
        />
        <button className="input__submit" type="submit">
            Go
        </button>
    </form>
  )
}

export default InputField;