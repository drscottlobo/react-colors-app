import './App.css';
import React, { Component } from 'react';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedPalettes from './SeedColors';

class App extends Component {
   render() {
      console.log(generatePalette(seedPalettes[0]));
      return (
         <div>
            <Palette {...seedPalettes[4]} />
         </div>
      );
   }
}
export default App;
