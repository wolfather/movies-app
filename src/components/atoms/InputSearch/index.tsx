import { FC, HTMLAttributes } from "react"
import { Input } from "./styles"

interface InputSearchProps extends HTMLAttributes<HTMLInputElement> {
    type?: 'search';
}

export const InputSearch: FC<InputSearchProps> = ({type, ...rest}: InputSearchProps) => {
    return (
        <Input type={type} {...rest} />
    )
}