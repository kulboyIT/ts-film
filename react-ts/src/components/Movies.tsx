import { Box, Button, Chip, ChipPropsColorOverrides, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { OverridableStringUnion } from "@mui/types";
import React, { ChangeEvent } from "react";
import { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles: any = makeStyles((theme) =>
  createStyles({
    movieInput: {
      marginRight: "5px",
      color: "black",
    },
    input: {
      color: "black",
    },
    movieChip: {
        fontSize: '3rem',
        padding: '30px 10px',
        margin: '5px'
    }
  })
);

const Movies = () => {
  const classes = useStyles();

  //state
  const [movie, setMovie] = useState("");

  const onMovieChange = (event: ChangeEvent<HTMLInputElement>) => {
    return setMovie(event.target.value);
  };

  //context
  const {theme} = useContext(ThemeContext)
  const chipTheme = theme as OverridableStringUnion<
  'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  ChipPropsColorOverrides
>;
  const {movies, addMovie, deleteMovie} = useContext(MovieContext)

  return (
    <div>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          inputProps={{ style: { color: "black" } }}
          label="Your fav movie..."
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieChange}
          value={movie}
        />
        <Button variant="contained" color="primary" onClick={()=> {
            addMovie(movie)
            setMovie('')
        }}>
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map(movie => {
            return <Chip key={movie.id} label={movie.title} className={classes.movieChip} clickable color={chipTheme} onDelete={deleteMovie.bind(this, movie.id)}></Chip>
        })}
      </Box>
    </div>
  );
};

export default Movies;
