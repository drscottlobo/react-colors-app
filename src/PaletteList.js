import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
   render() {
      const { palettes } = this.props;
      return (
         <div>
            {palettes.map(p => {
               return <p>
                  <Link to={`/palette/${p.id}`} >{p.paletteName}</Link>
                  </p>
            })}
         </div>
      )
   }
}