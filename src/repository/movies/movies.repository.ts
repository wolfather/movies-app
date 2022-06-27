import axios from "axios"

export const MoviesRepository = async () => {
    const getMoviesList = await axios.get('http://localhost:8080/movies');

    return getMoviesList;
}