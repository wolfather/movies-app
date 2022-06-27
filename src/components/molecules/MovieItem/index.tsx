import { FC, HTMLAttributes } from "react";
import { MovieImage } from "../../atoms/MovieImage";
import { MovieInfo } from "../MovieInfo";
import { Container } from "./styles";

interface MovieItemProps extends HTMLAttributes<HTMLDivElement> {
    imageSource: string;
    textTitle: string;
    textDescription: string;
}

export const MovieItem: FC<MovieItemProps> = ({imageSource, textTitle, textDescription, ...rest}: MovieItemProps) => {
    return (
        <Container {...rest}>
            <MovieImage
                src={imageSource}
                altText={textTitle}
                aria-hidden="true"
            />
            <MovieInfo
                textDescription={textDescription}
                textTitle={textTitle}
            />
        </Container>
    )
}
