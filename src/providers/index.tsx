import { PropsWithChildren } from "react";
import { MoviesDataProvider } from "../contexts/movies/movies.context";
import { PaginationProvider } from "../contexts/pagination/pagination.context";
import { SearchProvider } from "../contexts/search/search.context";

export const Providers = ({children}: PropsWithChildren) => {
    return (
        <MoviesDataProvider>
            <SearchProvider>
                <PaginationProvider>
                    {children}
                </PaginationProvider>
            </SearchProvider>
        </MoviesDataProvider>
    )
}