import { createContext, PropsWithChildren, useState } from "react";

interface SearchProps extends PropsWithChildren {}

export const SearchContext = createContext<any>({} as any);

export const SearchProvider = ({children}: SearchProps) => {
    const [searchParam, setSearchParam] = useState<string>('');
    const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
    
    return (
        <SearchContext.Provider value={{searchParam, setSearchParam, searchEnabled, setSearchEnabled}}>
            {children}
        </SearchContext.Provider>
    )
}