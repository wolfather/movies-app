import { useEffect, useState, FC, memo, useContext, useMemo } from "react"
import { PaginationContext } from "../../../contexts/pagination/pagination.context";
import { SearchContext } from "../../../contexts/search/search.context";
import { Movie } from "../../../entities/movie/movie.interface";
import { Message } from "../../atoms/Message";
import { MovieItem } from "../MovieItem"
import { PaginationItemList } from "../PaginationItemList";
import { ListContainer, ListItem } from "./styles";

// const mock = [
//     {
//         "id": "movie-1",
//         "title": "Et quis quis",
//         "director": "Jody Keebler",
//         "description": "Quaerat occaecati et dolorem velit adipisci quo consequatur. Ullam quos saepe ratione non. Velit quaerat voluptatem rem est et dolore. Aut voluptatibus facere quo qui voluptas ipsa adipisci blanditiis quis.",
//         "year": 2021,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
//     {
//         "id": "movie-2",
//         "title": "Et doloribus quia",
//         "director": "Irvin Littel IV",
//         "description": "Quam atque sapiente pariatur voluptas harum repudiandae. Molestiae dicta eos porro odio suscipit nihil illo repudiandae eum. Aut expedita temporibus molestiae. Eum id quibusdam nemo in molestias et rerum maiores. Qui expedita quis et. Ut quam accusantium.",
//         "year": 2016,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
//     {
//         "id": "movie-3",
//         "title": "Corrupti non velit",
//         "director": "Margie Kulas",
//         "description": "Doloremque possimus id. A quo id architecto nam ex suscipit expedita. Et fugiat quia omnis error cupiditate totam voluptate. Est dolores facilis odit occaecati impedit non nesciunt repellat. Illum sed unde aliquam vel totam sed. In aut veritatis molestiae doloribus delectus.",
//         "year": 2022,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
//     {
//         "id": "movie-4",
//         "title": "Corrupti non velit",
//         "director": "Margie Kulas",
//         "description": "Doloremque possimus id. A quo id architecto nam ex suscipit expedita. Et fugiat quia omnis error cupiditate totam voluptate. Est dolores facilis odit occaecati impedit non nesciunt repellat. Illum sed unde aliquam vel totam sed. In aut veritatis molestiae doloribus delectus.",
//         "year": 2022,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
//     {
//         "id": "movie-5",
//         "title": "Corrupti non velit",
//         "director": "Margie Kulas",
//         "description": "Doloremque possimus id. A quo id architecto nam ex suscipit expedita. Et fugiat quia omnis error cupiditate totam voluptate. Est dolores facilis odit occaecati impedit non nesciunt repellat. Illum sed unde aliquam vel totam sed. In aut veritatis molestiae doloribus delectus.",
//         "year": 2022,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
//     {
//         "id": "movie-6",
//         "title": "Corrupti non velit",
//         "director": "Margie Kulas",
//         "description": "Doloremque possimus id. A quo id architecto nam ex suscipit expedita. Et fugiat quia omnis error cupiditate totam voluptate. Est dolores facilis odit occaecati impedit non nesciunt repellat. Illum sed unde aliquam vel totam sed. In aut veritatis molestiae doloribus delectus.",
//         "year": 2022,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
//     {
//         "id": "movie-7",
//         "title": "Corrupti non velit",
//         "director": "Margie Kulas",
//         "description": "Doloremque possimus id. A quo id architecto nam ex suscipit expedita. Et fugiat quia omnis error cupiditate totam voluptate. Est dolores facilis odit occaecati impedit non nesciunt repellat. Illum sed unde aliquam vel totam sed. In aut veritatis molestiae doloribus delectus.",
//         "year": 2022,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
//     {
//         "id": "movie-8",
//         "title": "Corrupti non velit",
//         "director": "Margie Kulas",
//         "description": "Doloremque possimus id. A quo id architecto nam ex suscipit expedita. Et fugiat quia omnis error cupiditate totam voluptate. Est dolores facilis odit occaecati impedit non nesciunt repellat. Illum sed unde aliquam vel totam sed. In aut veritatis molestiae doloribus delectus.",
//         "year": 2022,
//         "coverImage": "http://placeimg.com/640/480/business"
//     },
// ];

interface MoviesProps {
    movies: Movie[];
}

const _MovieItemList: FC<MoviesProps> = ({movies}: MoviesProps) => {
    const [ data, setData ] = useState<Movie[]>([]);
    const { finalIndex, initialIndex, setIndexPage } = useContext(PaginationContext);
    const { searchParam, searchEnabled } = useContext(SearchContext);
    const [result, setResult] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);

    const chunkResult: Movie[] = useMemo(() => movies.filter(movie => (
        movie.title.indexOf(searchParam) > -1
    )), [movies, searchParam]);

    useEffect(() => {
        if(searchEnabled) {
            console.log('chunk', chunkResult);
            setResult(chunkResult);

            setData(result.slice(initialIndex, finalIndex));
            setTotalItems(result.length);
        } else {
            setData(movies.slice(initialIndex, finalIndex));
            setTotalItems(movies.length);
        }
    }, [movies, result, initialIndex, finalIndex, searchParam, searchEnabled, chunkResult]);
    
    console.log('resultado', result);

    useEffect(() => {
        setIndexPage(1);
    }, [result, data]);

    return (
        <>
            {
                data.length ?
                <>
                    <ListContainer>
                    {
                        data.map(item => (
                            <ListItem key={item.id}>
                                <p>{item.id}</p>
                                <MovieItem
                                    imageSource={item.coverImage}
                                    textDescription={item.description}
                                    textTitle={item.title}
                                />
                            </ListItem>
                        ))
                    }
                    </ListContainer>
                    <PaginationItemList totalItems={totalItems} />
                </> :
                <Message text='No results were found' />
            }
        </>
    )
};

export const MovieItemList = memo(_MovieItemList);