import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
  render() {
   const colorBoxes = this.props.colors.map(box => (
      <ColorBox background={box.color} name={box.name} />
   ));
    return (
      <div className="Palette">
         {/* Navbar here */}
         <div className="Palette-colors">{colorBoxes}</div>
         {/* Footer here */}
      </div>
    )
  }
}
