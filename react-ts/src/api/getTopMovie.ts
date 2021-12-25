import axios from "axios";

const topMovieIds = [
    'tt0111161',
    'tt0068646',
    'tt0071562'
]

const topMoviesInfo = topMovieIds.map(id=> axios.get(`http://www.omdbapi.com/?i=${id}&apikey=600d9858`))

export default topMoviesInfo