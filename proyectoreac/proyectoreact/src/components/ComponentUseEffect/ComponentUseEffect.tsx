import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {

    const [state, setState] = useState(false)

    useEffect (() => {
        console.log("Componente Montada");
        return () => {
            console.log("Componente Desmontada");
        };
    }, []);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return ( 
    <div>
        <p>{state ? "Es true" : "Es false"}</p>
        <button onClick={()=> {
            setState(!state);
        }}>
            Cambiar state
        </button>
    </div>
    );
};