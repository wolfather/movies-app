import { FC, HTMLAttributes } from "react";
import { Container, MessageText } from "./styles"

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
    text?: string;
}

export const Message: FC<MessageProps> = ({text, ...rest}: MessageProps) => {
    return (
        <>{ 
            text?.trim() !== '' ? 
            <Container {...rest}><MessageText>{text}</MessageText></Container>
            : <></>
        }</>
    )
}