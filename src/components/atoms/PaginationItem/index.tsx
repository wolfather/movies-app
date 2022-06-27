import { FC, HTMLAttributes } from "react";
import { Item } from "./styles";

interface PaginationItemProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
}

export const PaginationItem: FC<PaginationItemProps> = ({text, ...rest}: PaginationItemProps) => {
    return (
        <Item role="button" {...rest}>{ text }</Item>
    )
}
