import { useForm } from "./hooks/useForm";
// import { useState } from "react";
export const Formularios = () => {
    // const [formulario, setFormulario] = useState({
    //     email: 'daaicoronafl@ittepic.edu.mx',
    //     password: '123456'
    // });
    // const onChange = (value, campo) => {
    //     setFormulario({
    //         ...formulario,
    //         [campo]: value
    //     });
    // };
    const {formulario, email, password, onChange} = useForm({
        email: 'daaicoronafl@ittepic.edu.mx',
        password: '123456'
    });
    return (
        <>
            <h1>Formulario</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                // value={formulario.email}
                value={email}
                onChange={({ target }) => onChange(target.value, 'email2')}
            />
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                // value={formulario.password}
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    );
};