import { ChangeEvent, useCallback, useContext, useEffect } from "react";
import { InputButton } from "../../atoms/InputButton";
import { InputSearch } from "../../atoms/InputSearch";
import _debounce from 'lodash/debounce';
import { SearchContext } from "../../../contexts/search/search.context";

export const Search = () => {
    const { searchParam, setSearchParam, searchEnabled, setSearchEnabled } = useContext(SearchContext);

    const delaySearch = useCallback(_debounce(setSearchParam, 1000), []);

    const searchMovies = (e: ChangeEvent<HTMLInputElement>): void => {
        delaySearch(e.target.value);
    };

    useEffect(() => {
        setSearchEnabled( searchParam.length > 2);
    }, [searchParam]);

    return (
        <>
            <p>{searchParam}</p>
            <InputSearch
                onChange={(e: ChangeEvent<HTMLInputElement>) => searchMovies(e)}
                autoCorrect="false"
            />
            <InputButton disabled={!searchEnabled}>Buscar</InputButton>
        </>
    )
}