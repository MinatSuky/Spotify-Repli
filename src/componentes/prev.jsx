import React from 'react';

import appFirebase from "../credenciales"
import { getAuth, signOut} from "firebase/auth"
import { Link } from 'react-router-dom';
const auth = getAuth(appFirebase)

export const Preve = () => {
    const regresar = () => {
        window.history.back();
    };

    const volver = () => {
        window.history.forward();
    };

    return (
        <div className={`padre flex justify-between h-[8%] rounded-xl pt-3 BARRAPRINCIPAL shadow-lg`}>
            <div className="flex ml-3">
                <div className="flex justify-center gap-2 items-center cursor-pointer">
                    <svg
                        className="REGRESAR bg-neutral-950 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        color="#ffffff"
                        fill="none"
                        onClick={regresar}
                    >
                        <path
                            d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <svg
                        className="VOLVER bg-neutral-950 rounded-full cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        color="#ffffff"
                        fill="none"
                        onClick={volver}
                    >
                        <path
                            d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex gap-2 mb-3 mr-6 ">
                <button className='popap'> 
                    <svg className=' border  rounded-md px-2 ' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1025 1024"><path fill="white" d="M896.428 640h-768q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384h-768q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-768 512h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5" /></svg>
                </button>
                
                <button className="bg-neutral-900 py-2 px-8 font-bold rounded-full ney login">Registrate</button>
                <button className="bg-slate-100 text-neutral-900 font-bold px-8 rounded-full ney login">Iniciar</button>
            </div>
        </div>
    );
}