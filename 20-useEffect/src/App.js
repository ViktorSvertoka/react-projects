import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then(response => response.json())
      .then(json => setTodo(json));
  }, []);

  return (
    <div className="App">
      {todo && <h1>{todo.title}</h1>}
      {todo && <h1>{todo.id}</h1>}
      {todo && <h1>{todo.userId}</h1>}
    </div>
  );
}

export default App;
