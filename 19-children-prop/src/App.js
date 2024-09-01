import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h1>Hello World</h1>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h1>Hello City</h1>
        <p>Some text</p>
        <button>Click me now!</button>
      </Wrapper>
    </div>
  );
}

export default App;
