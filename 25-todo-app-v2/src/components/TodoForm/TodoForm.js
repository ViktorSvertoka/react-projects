import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = event => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
