import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
   constructor(props){
      super(props);
      this._shades = this.gatherShades(this.props.palette, this.props.colorId);
      this.state = {
         format: 'hex'
      }
   }
   changeFormat = (value) => {
      this.setState({ format: value })
   }
   gatherShades = (palette, colorToFilterBy) => {
      /// return all shades of given color
      let shades = [];
      let allColors = palette.colors;
      for (let key in allColors) {
         shades = shades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy)
         )
      }
      return shades.slice(1);
   }
   render() {
      const colorBoxes = this._shades.map(c => (
         <ColorBox 
            key={c.id} 
            name={c.name} 
            background={c[this.state.format]} 
            showLink={false} 
         />
      ))
      const { paletteName, emoji} = this.props.palette;
      return (
         <div className="Palette">
            <Navbar 
               handleChange={this.changeFormat} 
               showingAllColors={false}
            />
            <div className="Palette-colors">
               {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
         </div>
      )
   }
}

export default SingleColorPalette;