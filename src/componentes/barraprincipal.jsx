import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Popap } from './popap';


export const BarraPrin = () => {

   
    const [popap, setPopap] = useState(false)

    const negacion = () => {
        setPopap(!popap)
    }
    

    const regresar = () => {
        window.history.back();
    };

    const volver = () => {
        window.history.forward();
    };

    return (
        <div
        className={`padre flex justify-between h-[8%] rounded-xl BARRAPRINCIPAL`}
      >
            <div className="flex ml-7 ">
                <div className="flex justify-center gap-2 items-center cursor-pointer">
                    <svg
                        className="REGRESAR backdrop-blur-sm bg-black/50 hover:bg-neutral-950 rounded-full"
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
                        className="VOLVER backdrop-blur-sm bg-black/50 hover:bg-neutral-950 rounded-full cursor-pointer"
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
                 {popap && <Popap negacion={negacion} />}
                <button onClick={negacion} className='popap mt-2'>
                    <svg className=' border rounded-md px-2 ' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1025 1024"><path fill="white" d="M896.428 640h-768q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384h-768q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-768 512h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5" /></svg>
                </button>
                <Link to={'/login'}>
                    <button className="bg-white hover:scale-105 duration-100  backdrop-blur-lg py-2 px-8 font-bold rounded-full login text-sm mt-4 text-black">Descubre Premium</button>
                </Link>
                <Link to={'/login'}>
                    <button className="bg-black/50 hover:scale-105 duration-100  backdrop-blur-lg py-2 px-8 font-bold rounded-full login text-sm mt-4 text-white">Registrate</button>
                </Link>
                <Link>
                    <button className="bg-black/50 backdrop-blur-2xl py-2 px-2 font-bold rounded-full login text-sm mt-4 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 36 36"><path fill="#ffffff" d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.6 12.6 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.6 12.6 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75M5.13 28.94a16.2 16.2 0 0 0 2.44-3a14.2 14.2 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.2 14.2 0 0 0 1.65 5.85a16.2 16.2 0 0 0 2.44 3Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="#ffffff" d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg></button>
                </Link>
                <Link>
                    <button className="bg-black/50 backdrop-blur-2xl p-[4px] font-bold rounded-full login text-sm mt-4 text-white "><p className='bg-fuchsia-800 rounded-full px-[10px] left-1 py-1 '>S</p></button>
                </Link>
            </div>
        </div>
    );
};
