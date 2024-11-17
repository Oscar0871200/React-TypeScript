import { useState } from 'react';
import { ComponentCounter } from './components/ComponentCounter/ComponentCounter';
import { MyPrimerComponent } from './components/MiPrimerComponent/MiPrimerComponent'
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect';
import { FormComponent } from './components/FormComponent/FormComponent';
import { AppProduct } from './AppProduct/AppProduct';

export const App = () => {

    const [enableCounter, setEnableCounter] = useState(false)

    return (
    <div style = {{display: 'flex', flexDirection: 'column',  gap: "2vh"}}>
    {/*<MyPrimerComponent text = {"texto desde propiedades"} color="purple" fontSize = {5} />
    <ComponentCounter />
    <ComponentUseEffect />
    <FormComponent />*/}

    <AppProduct />
    </div>
    );
}