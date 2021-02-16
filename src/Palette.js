import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';

export default class Palette extends Component {
   constructor(props){
      super(props);
      this.state = {
         level: 500,
         format: 'hex'
      }
   }
   changeLevel = (level) => {
      this.setState({level})
   }
   changeFormat = (value) => {
      this.setState({ format: value })
   }
   render() {
         const { colors, paletteName, emoji, id } = this.props.palette;
         const { level, format } = this.state;
         const colorBoxes = colors[level].map(box => (
            <ColorBox 
               background={box[format]} 
               name={box.name} 
               key={box.id} 
               moreUrl={`/palette/${id}/${box.id}`}
               showLink
            />
         ));
      return (
         <div className="Palette">
         <Navbar 
            level={level} 
            changeLevel={this.changeLevel} 
            handleChange={this.changeFormat}
            showingAllColors
         />
            <div className="Palette-colors">{colorBoxes}</div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
         </div>
      )
   }
}
