import { FC } from "react"

interface IPropsMyPrimerComponent {

    text: string
    color: string
    fontSize?: number //El signo de pregunta indica que no es necesario usarla si o si
}

export const MyPrimerComponent : FC<IPropsMyPrimerComponent> = ({
    text,
    color,
    fontSize
}) => {
    return (
    <div style={{color: `${color}`, fontSize: `${fontSize || 1}rem`}}> 
        <p>{text}</p>
        </div>
    );
};

//El || entre fontSize y 10 inidica que si no llegara a existir fontSinze usará un tamaño de 10rem