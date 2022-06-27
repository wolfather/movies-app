import { FC, memo, useCallback, useContext, useEffect, useState } from "react"
import { PaginationContext } from "../../../contexts/pagination/pagination.context";
import { PaginationItem } from "../../atoms/PaginationItem";
import { PaginationList, PaginationListItem } from "./styles"

interface PaginatorProps {
    id: number;
    disabled: boolean;
    value: string;
}

interface PaginationProps {
    totalItems: number;
}

const _PaginationItemList: FC<PaginationProps> = ({totalItems}: PaginationProps) => {
    const [pages, setPages] = useState<PaginatorProps[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    const { indexPage, setIndexPage, ITEMS_PER_PAGE } = useContext(PaginationContext);

    // eslint-disable-next-line
    useEffect(() => {
        console.log('pagination updated', totalItems);
        setTotalPages(Math.round(totalItems / ITEMS_PER_PAGE));
        
        setPages(createPageList());
    }, [totalItems, totalPages, ITEMS_PER_PAGE]);

    const createPageList = useCallback(() => {
        let pagesCounter = [];
        for(let counter = 1; counter < totalPages; counter++) {
            const pageItem = {id: counter, disabled: false, value: String(counter)};
            
            pagesCounter.push(pageItem);
        }

        return pagesCounter;
    }, [totalPages]);

    return (
        <>
            <p>index: {indexPage}</p>
            <PaginationList>
            {
                pages.map(page => (
                    <PaginationListItem key={page.value}>
                        <PaginationItem 
                            text={page.value} 
                            onClick={() => setIndexPage(Number(page.value))} />
                    </PaginationListItem>
                ))
            }
            </PaginationList>
        </>
    )
}

export const PaginationItemList = memo(_PaginationItemList);

