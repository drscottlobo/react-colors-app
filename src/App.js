import './App.css';
import React, { Component } from 'react';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedPalettes from './SeedColors';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
   findPalette = (id) => {
      console.log(id)
      return seedPalettes.find((palette) => {
         return palette.id === id;
      })
   }
   render() {
      console.log();
      return (
         <Switch>
            <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps}/>}/>
            <Route exact path="/palette/:paletteId/:colorId" 
               render={routeProps => (
                  <SingleColorPalette
                     palette={generatePalette(
                        this.findPalette(routeProps.match.params.paletteId)
                     )} 
                     colorId={routeProps.match.params.colorId}
                  /> 
               )}
            />
            <Route exact path="/palette/:id" render={routeProps => 
               <Palette 
                  palette={generatePalette(this.findPalette(routeProps.match.params.id))} 
               /> }
            />
         </Switch> 
      );
   }
}
export default App;
