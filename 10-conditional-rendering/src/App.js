import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="10" hasPet={true} />
      <PetInfo animal="bird" age="5" hasPet={false} />
    </div>
  );
}

export default App;
