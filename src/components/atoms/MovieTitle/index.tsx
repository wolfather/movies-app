import { FC, HTMLAttributes } from "react";
import { Title } from "./styles";

interface MovieTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    text?: string;
}

export const MovieTitle: FC<MovieTitleProps> = ({text, ...rest}: MovieTitleProps) => {
    return <>
        { text?.trim() !== '' ? <Title {...rest}>{text}</Title> : <></> }
    </>
}