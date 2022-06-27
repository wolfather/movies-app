import { createContext, PropsWithChildren } from "react";
import { Movie } from "../../entities/movie/movie.interface";
import { useFetchData } from "../../hooks/usefetchdata";

interface MoviesDataProps extends PropsWithChildren {}

interface MovieData {
    loading: boolean;
    data: Movie[];
}

export const MoviesDataContext = createContext<MovieData>({} as MovieData);

export const MoviesDataProvider = ({children}: MoviesDataProps) => {
    const { loading, data } = useFetchData();

    return (
        <MoviesDataContext.Provider value={{loading, data}}>
            {children}
        </MoviesDataContext.Provider>
    )
}