import './App.css';
import Palette from './Palette';
import seedPalettes from './SeedColors';

function App() {
  return (
    <div>
      <Palette {...seedPalettes[4]} />
    </div>
  );
}

export default App;
