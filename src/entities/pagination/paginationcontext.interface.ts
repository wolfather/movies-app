export interface PaginationContextProps {
    indexPage: number;
    setIndexPage (value: number):void;
    finalIndex: number;
    initialIndex: number;
    ITEMS_PER_PAGE: number;
}