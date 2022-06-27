import { FC, HTMLAttributes } from "react";
import { JsxFragment } from "typescript";
import { Description } from "./styles";

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement|JsxFragment> {
    text?: string;
}

export const MovieDescription: FC<DescriptionProps> = ({text, ...rest}: DescriptionProps) => {
    return (
        <>{
            text?.trim() !== '' ?
            <Description {...rest}>{text}</Description> : <></>
        }</>
    )
}