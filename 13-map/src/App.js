import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

function App({ text }) {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const texts = ['Click me!', 'Click me please!', 'Hit me!', 'Press me!'];

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map(text, index => {
        return <Button key={index} text={text} onClick={incrementCount} />;
      })}
    </div>
  );
}

export default App;
