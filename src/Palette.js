import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default class Palette extends Component {
   constructor(props){
      super(props);
      this.state = {
         level: 500
      }
   }
   changeLevel = (level) => {
      this.setState({level})
   }
  render() {
      const { colors } = this.props.palette;
      const { level } = this.state;
      const colorBoxes = colors[level].map(box => (
         <ColorBox background={box.hex} name={box.name} />
      ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel}/>
         <div className="Palette-colors">{colorBoxes}</div>
         {/* Footer here */}
      </div>
    )
  }
}
