import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { PaginationContextProps } from "../../entities/pagination/paginationcontext.interface";

interface PaginationProps extends PropsWithChildren {}

export const PaginationContext = createContext<PaginationContextProps>({} as PaginationContextProps);

export const PaginationProvider = ({children} : PaginationProps) => {
    const ITEMS_PER_PAGE = 6;
    const [indexPage, setIndexPage] = useState(1);

    const [finalIndex, setFinalIndex] = useState<number>(indexPage * ITEMS_PER_PAGE);
    const [initialIndex, setInitialIndex] = useState<number>(finalIndex - ITEMS_PER_PAGE);

    useEffect(() => {
        setFinalIndex(indexPage * ITEMS_PER_PAGE);
        setInitialIndex(finalIndex - ITEMS_PER_PAGE);
    }, [indexPage, finalIndex]);

    return (
        <PaginationContext.Provider value={{indexPage, setIndexPage, finalIndex, initialIndex, ITEMS_PER_PAGE}}>
            {children}
        </PaginationContext.Provider>
    );

}