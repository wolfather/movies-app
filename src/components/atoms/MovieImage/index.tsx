import { FC, HTMLAttributes } from "react";
import { Image } from './styles';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    altText?: string;
}

export const MovieImage: FC<ImageProps> = ({src, altText, ...rest}: ImageProps) => {
    const _altText = altText !== '' ? altText : 'cover image';
    
    return (
        <Image {...rest} src={src} alt={_altText} />
    )
}