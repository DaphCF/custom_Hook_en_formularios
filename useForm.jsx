import { useState } from "react";
export const useForm = (formulario) => {
    // const [formulario, setFormulario] = useState({
    const [state, setState] = useState (
        // {
        //     email: 'daaicoronafl@ittepic.edu.mx',
        //     password: '123456'
        // }
        formulario
    );
    const onChange = (value, campo) => {
        // setFormulario({
        // Verifica si "campo" es una propiedad válida del estado
        if (campo in state) {
            setState({
                // ...formulario,
                ...state,
                [campo]: value
            });
        } else {
            console.warn(`El campo "${campo}" no existe en el formulario.`);
        }
    };
    return {
        // ...formulario,
        ...state,
        formulario,
        onChange
    }
}

