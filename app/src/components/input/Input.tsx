import { ChangeEvent } from 'react'
import './input.css'

type InputProps = {
    /** Texto que fica dentro da caixa */
    label: string;
    /** Valor que o usuário insere na caixa */
    value: string;
    /** Booleano que representa se o conteúdo da caixa fica oculto */
    isHidden?: boolean;
    /** Função para lidar com a alteração na caixa */
    onChange?(e: ChangeEvent<HTMLInputElement>): void;
};

function Input({
    label,
    value,
    isHidden = false,
    onChange
}: InputProps) {
    return (
        <input className="inputText" type={isHidden ? "password" : "text"} placeholder={label} value={value} onChange={onChange} />
    )
};

export default Input;
