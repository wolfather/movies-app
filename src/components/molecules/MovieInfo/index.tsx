import { FC, HTMLAttributes } from "react"
import { MovieDescription } from "../../atoms/MovieDescription";
import { MovieTitle } from "../../atoms/MovieTitle";
import { Container } from "./styles"

interface MovieInfoProps extends HTMLAttributes<HTMLDivElement> {
    textTitle: string;
    textDescription: string;
}

export const MovieInfo: FC<MovieInfoProps> = ({textTitle, textDescription, ...rest}: MovieInfoProps) => {
    return (
        <Container {...rest}>
            <MovieTitle text={textTitle} />
            <MovieDescription text={textDescription} />
        </Container>
    )
}