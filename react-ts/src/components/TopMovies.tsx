import React, { useContext, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@mui/material";
import { Box } from "@mui/system";
import { TopMovieContext } from "../contexts/TopMovieContext";

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    topMovieHeader: {
      paddingBottom: 0,
    },
    topMoviesList: {
      paddingTop: 0,
    },
    topMoviesItem: {
      paddingTop: "2px",
      paddingBottom: "2px",
    },
  })
);

const TopMovies = () => {
  
  const classes = useStyles();

  //take Context
  const { topMovies, getTopMovies, toggleWatched } =
    useContext(TopMovieContext);

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <Box>
      <Card raised>
        <CardHeader
          title="Top 10 movies of all time"
          className={classes.topMovieHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary ",
          }}
        />
        <CardContent className={classes.topMovieList}>
          <List>
            {topMovies.map((movie) => (
              <ListItem
                button
                className={classes.topMovieItem}
                key={movie.imdbID}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={movie.Watched}
                    onClick={toggleWatched.bind(this, movie.imdbID)}
                  />
                </ListItemIcon>
                <ListItemText primary={movie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;
