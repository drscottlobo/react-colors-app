import './App.css';
import React, { Component } from 'react';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedPalettes from './SeedColors';

class App extends Component {
   render() {
      console.log();
      return (
         <div>
            <Palette palette={generatePalette(seedPalettes[0])} />
         </div>
      );
   }
}
export default App;
