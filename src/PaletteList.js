import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './Navbar.css';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
   root: {
      backgroundColor: 'blue',
      display: 'flex',
      height: '100vh',
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
      display: 'flex',
      width: '100%',
      justifyContent: 'wrap',
      color: 'white'
   },
   palettes: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 30%)',
      gridGap: '5%'
   }
}

class PaletteList extends Component {
   goToPalette (id) {
      this.props.history.push(`/palette/${id}`);
   }
   render() {
      const { palettes, classes } = this.props;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}>
                  <h1>React Colors</h1>
               </nav>
               <div className={classes.palettes}>
                     {palettes.map(p => (
                        <MiniPalette {...p} handleClick={() => this.goToPalette(p.id)}/>
                     ))}
               </div>
            </div>
         </div>
      )
   }
}

export default withStyles(styles)(PaletteList);