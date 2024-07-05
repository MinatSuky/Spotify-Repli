import { useState } from "react";
import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(appFirebase);

export const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const autenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const pass = e.target.contra.value;

        try {
            if (registrando) {
                await createUserWithEmailAndPassword(auth, correo, pass);
            } else {
                await signInWithEmailAndPassword(auth, correo, pass);
            }
        } catch (error) {
            setMensaje("Contraseña o Correo Incorrectos");
        }
    };

    const regresar = () => {
        window.history.back();
    };

    return (
        <div className="bg-gradient-to-t from-black to-gray-900 h-[100vh] flex justify-center items-center">
            
            <div className="bg-white/10 px-10 py-16 rounded-xl relative m-10">
            <p onClick={regresar} className="absolute top-6 right-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="#ffffff" d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.75.75 0 0 1 0-1.06"/></svg>
            </p>
                <div className="flex justify-center mt-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="116"
                        height="116"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="white"
                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"
                        />
                    </svg>
                </div>
                <div className="mx-5 flex flex-col">
                    <p className="title-perfi1 font-bold floo2 text-center mt-5">
                        INICIA SECCIÓN
                    </p>
                    <div className="">
                        <form className="flex flex-col gap-4 mt-20" onSubmit={autenticacion}>
                            <input
                                className="py-3 px-2 bg-inherit border-b-2"
                                type="text"
                                placeholder="Email"
                                id="email"
                            />
                            <input
                                className="py-3 px-2 bg-inherit border-b-2"
                                type="password"
                                placeholder="Contraseña"
                                id="contra"
                            />
                            <button  className="mt-10 text-black hover:shadow-lg hover:shadow-cyan-500/50 duration-200 ease-in-out bg-white py-2 font-bold rounded hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                               Iniciar
                            </button>
                        </form>
                        <p className="mensaje text-red-500 text-center mt-5">{mensaje}</p>
                    </div>

                    <p className="mt-10 text-center">
                        No Tienes Cuenta
                        <span
                            
                            className="floo cursor-pointer ora2 ml-3 px-3 py-1 rounded-sm font-semibold"
                        >
                            <Link to={'/registro'}>Registrarse</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
