import { useState } from "react"
import { Link } from "react-router-dom"



export const BarraLate = () => {

    return (
        <div className="padre h-[85%]">
            <div className="cont1 my-2  bg-[#121212] py-2  rounded-lg pb-3">
                <Link to={"/"}>
                    <div className="flex items-center gap-3 cursor-pointer group ml-1 py-1 px-4 w-[50%] rounded-lg">
                    <svg className="opacity-60 group-hover:opacity-100 duration-200" xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 36 36"><path fill="#ffffff" d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="#ffffff" d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                        <p className="font-semibold text-[#BEBEBE] group-hover:text-gray-100 duration-200">Inicio</p>
                    </div>
                </Link>
                <Link to={'/allbum'} >
                    <div className="mt-4 flex items-center gap-3 cursor-pointer group ml-1 py-1 px-4 duration-200 w-[50%] rounded-lg">
                        <svg className="opacity-60 group-hover:opacity-100 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="30" color="#ffffff" fill="none">
                            <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>

                        <p className="font-semibold text-[#BEBEBE] group-hover:text-gray-100 duration-200">Buscar</p>
                    </div>
                </Link>
                
            </div>
            <div className="cont2 h-full flex flex-col justify-between my-2  mt-2 bg-[#121212] rounded-lg">
                <div className="mt-2 flex items-center justify-between  duration-100 cursor-default ml-4 mx-[3%]">
                    <div className="flex items-center gap-3 group">
                  <span> <svg viewBox="0 0 32 32" class="h-6 w-6" astro-icon="carbon:media-library"><path fill="currentColor" d="M13 15v8l7-4-7-4z"></path><path fill="currentColor" d="M26 28H6a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.002 2.002 0 0 1-2 2zM6 12v14h20V12zM6 6h20v2H6zM8 2h16v2H8z"></path></svg></span>
                        <p className="font-semibold text-[#BEBEBE]">Tu biblioteca</p>
                    </div>
                    <div className="flex gap-3">
                    <svg className="hover:bg-[#202020] cursor-pointer rounded-full p-1 opacity-60 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" color="#ffffff" fill="none">
                        <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg className="hover:bg-[#202020] cursor-pointer rounded-full p-1 opacity-60 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#ffffff" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"/></svg>
                    </div>
                </div>
                <div className="conteiner flex flex-col mt-4 mx-[1%]">
                    <div className="carta bg-[#1A1A1A] py-5 px-2 rounded-lg ">
                        <p className="text-[14px] font-semibold">Crea tu primera lista</p>
                        <p className="text-[12px] mt-3">Es muy facil, y te charemos una mano.</p>
                        <button className="bg-white mt-2 text-[14px] text-black py-[5px] px-6 rounded-full font-semibold duration-200 transition ease-in-out hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50">Crear lista</button>
                    </div>
                    <div className="carta2  bg-[#1A1A1A] py-5 px-2 rounded-lg mt-5">
                        <p className="text-[14px] font-semibold">Ecuantra podcasts que quieras seguir</p>
                        <p className="text-[12px] mt-3">Te avisaremos cuando salga nuevos episodios</p>
                        <button className="bg-white mt-2 text-[14px] text-neutral-800 py-[5px] px-6 rounded-full font-semibold duration-200 transition ease-in-out hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50">Explorar podcasts</button>
                    </div>
                </div>
                <div className="container2 flex flex-col gap-3 font-light ml-2 mb-5">
                    <span className="text-[10px] flex gap-3 opacity-70">
                        <a href="https://www.spotify.com/co-es/legal/end-user-agreement/">legal</a>
                        <a href="https://www.spotify.com/co-es/safetyandprivacy/reporting-content">centro de suguridad y privacidad</a>
                        <a href="https://www.spotify.com/co-es/legal/privacy-policy/">Politica de Privacidad</a>
                    </span>
                    <span className="text-[10px] flex gap-3 opacity-70">
                        <a href="https://www.spotify.com/co-es/legal/cookies-policy/">Crokies</a>
                        <a href="https://www.spotify.com/co-es/legal/privacy-policy/#s3">Informacion sobre los anuncios</a>
                        <a href="https://www.spotify.com/co-es/accessibility">Accesibilidad</a>
                    </span>
                    <span className="text-[12px] flex gap-3 opacity-70">
                        <a href="https://www.spotify.com/co-es/legal/cookies-policy/">Crokies</a>
                    </span>
                    <div className="flex gap-1 border w-fit mb-4 px-3 py-1 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" stroke-width="1.5" />
                            <path d="M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Español de España</p>
                    </div>
                </div>
            </div>
        </div>
    )
}