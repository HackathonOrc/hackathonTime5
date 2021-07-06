import { ReactNode } from 'react'
import './formCard.css';

type FormCardProps = {
    image: 1 | 2 | 3;
    children?: ReactNode;
}

function FormCard({ image, children }: FormCardProps) {
    return (
        <div className="formCard" >
            <img className="orcImage" src={image === 1 ? "./images/orcDuvida.png" : image === 2 ? "./images/orcProfessor.png" : "./images/orcSom.png"} alt="Orcinho" />
            {children}
        </div>
    )
}

export default FormCard
