import { createContext, ReactNode, useReducer } from "react";
import { topMovieReducer, TopMovieState } from "../reducers/TopMoviesReducer";
import axios from "axios";
import { TopMovieActionType } from "../reducers/types";
import topMoviesInfo from "../api/getTopMovie";

const { GET_TOP_MOVIE } = TopMovieActionType;
const { TOGGLE_TOP_MOVIES_WATCHER } = TopMovieActionType;

interface TopMovieContextProps {
  children: ReactNode;
}

interface TopMovieContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void;
}

const topMoviesDefault: TopMovieState = [];

export const TopMovieContext = createContext<TopMovieContextDefault>({
  //gia tri phai trung voi topMovieContextData
  //gia tri khoi diem cua topMovies chinh la topMovieDefault
  topMovies: topMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: (id: string) => {},
});

const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault);

  //getTopMovieFromApi
  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo);
    dispatch({
      type: GET_TOP_MOVIE,
      payload: topMovies.map((topMovie) => ({
        ...topMovie.data,
        Watched: false,
      })),
    });
  };

  const toggleWatched = (imdbID: string) =>
    dispatch({
      type: TOGGLE_TOP_MOVIES_WATCHER,
      payload: imdbID,
    });

  const topMoviesContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };

  return (
    <TopMovieContext.Provider value={topMoviesContextData}>
      {children}
    </TopMovieContext.Provider>
  );
};

export default TopMovieContextProvider;
