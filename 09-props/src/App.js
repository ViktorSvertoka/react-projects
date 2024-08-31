import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="10" />
      <PetInfo animal="bird" age="5" />
    </div>
  );
}

export default App;
