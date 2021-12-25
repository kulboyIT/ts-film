import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { AppBar, Grid } from "@mui/material";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleThemeBtn from "./contexts/ToggleThemeBtn";
import MovieContextProvider from "./contexts/MovieContext";
import Movies from "./components/Movies";
import AuthContextProvider from "./contexts/AuthContext";
import TopMovies from "./components/TopMovies";
import TopMovieContextProvider from "./contexts/TopMovieContext";

function App() {
  return (
    <div className="App">
      {/* Bring the context to here and take all the navbar inside  */}
      <TopMovieContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </div>
  );
}

export default App;
