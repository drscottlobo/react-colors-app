import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './Navbar.css';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
   root: {
      backgroundColor: 'blue',
      display: 'flex',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'center'
   },
   container: {
      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap'
   },
   nav: {

   }
}

class PaletteList extends Component {
   render() {
      const { palettes, classes } = this.props;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}></nav>
               <div className={classes.palettes}>
                  <MiniPalette />
                     {palettes.map(p => {
                        return <MiniPalette {...p}/>
                     })}
               </div>
            </div>
            
         </div>
      )
   }
}

export default withStyles(styles)(PaletteList);