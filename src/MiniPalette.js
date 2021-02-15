import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        border: '1px solid black',
        padding: '.5rem',
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
      backgroundColor: '#dae1e4',
      height: '150px',
      width: '100%',
      overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',
        margin: 0,
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    miniColor: {
       height: '25%',
       width: '20%',
       margin: '0 auto',
       display: 'inline-block',
       position: 'relative',
       marginBottom: '-3.5'
    }
}

function MiniPalette (props) {
    const { classes, paletteName, emoji, colors } = props;
    const miniColorBoxes = colors.map(c => (
      <div 
         className={classes.miniColor} 
         style={{backgroundColor: c.color}}
         key={c.name}   
         onClick={props.handleClick}
      />
    ))
    return (
        <div className={classes.root}>
            <div className={classes.colors}>
               {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);