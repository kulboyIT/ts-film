import { Fab } from '@mui/material'
import React, { useContext } from 'react'
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { ThemeContext } from './ThemeContext';


const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: 'fixed',
      right: '-105rem',
      bottom: '-40rem'
    },
  })
);

const ToggleThemeBtn = () => {
    const classes = useStyles()

    //context 
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <Fab color="primary" variant = "extended" className={classes.floatBtn} onClick={toggleTheme.bind(this, theme === "primary" ? "secondary" : "primary")}>
            Toggle theme
        </Fab>
    )
}

export default ToggleThemeBtn
