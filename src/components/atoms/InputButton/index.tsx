import { FC, ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}
export const InputButton: FC<ButtonProps> = ({...rest}: ButtonProps) => {
    return (
        <Button {...rest} />
    )
}