import { useEffect, useState } from "react"
import { Movie } from "../../entities/movie/movie.interface";
import { MoviesRepository } from "../../repository/movies/movies.repository";

interface FetchData {
    loading: boolean;
    data: Movie[];
}

export const useFetchData = (): FetchData => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Movie[]>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await MoviesRepository()
            .then(response => {
                const {status, data} = response;
                
                if(status === 200 && data.length) {
                    setData(response?.data);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    return { loading, data };
}