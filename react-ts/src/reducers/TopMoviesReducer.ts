import { TopMovieActionType, AuthActionType } from "./types";

interface TopMovie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}

export type TopMovieState = TopMovie[];

const { GET_TOP_MOVIE, TOGGLE_TOP_MOVIES_WATCHER } = TopMovieActionType;

type TopMovieAction =
  | {
      type: typeof GET_TOP_MOVIE;
      payload: TopMovie[];
    }
  | {
      type: typeof TOGGLE_TOP_MOVIES_WATCHER;
      payload: string; //id cua bo phim ma ta muon lat
    };

export const topMovieReducer = (
  state: TopMovieState,
  action: TopMovieAction
) => {
  switch (action.type) {
    case GET_TOP_MOVIE:
      return action.payload;
    case TOGGLE_TOP_MOVIES_WATCHER:
      return state.map((topMovie) =>
        topMovie.imdbID === action.payload
          ? { ...topMovie, Watched: !topMovie.Watched }
          : topMovie
      );
    default:
      return state;
  }
};
