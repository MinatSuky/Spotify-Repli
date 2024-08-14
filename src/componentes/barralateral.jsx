import { useState } from "react"
import { Link } from "react-router-dom"



export const BarraLate = () => {

    return (
        <div className="padre h-[85%]">
            <div className="cont1 my-2 mx-2 bg-[#121212] py-2 rounded-lg pb-3">
                <Link to={"/"}>
                    <div className="flex items-center gap-3 cursor-pointer ml-3 hover:ml-4  sha py-1 px-4 duration-200 w-[50%] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 36 36"><path fill="#ffffff" d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="#ffffff" d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                        <p className="font-semibold text-[#BEBEBE] hover:text-gray-100 ">Inicio</p>
                    </div>
                </Link>
                <Link to={'/allbum'} >
                    <div className="mt-4 flex items-center gap-3 cursor-pointer ml-3 hover:ml-4 sha py-1 px-4 duration-200 w-[50%] rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="30" color="#ffffff" fill="none">
                            <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>

                        <p className="font-semibold text-[#BEBEBE] hover:text-gray-100 duration-100">Buscar</p>
                    </div>
                </Link>
                
            </div>
            <div className="cont2 h-full flex flex-col justify-between my-2 mx-2 mt-2 bg-[#121212] rounded-lg">
                <div className="mt-2 flex items-center justify-between hover:ml-2 duration-100 cursor-pointer ml-1 mx-[3%]">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="30" color="#ffffff" fill="none">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M11 7.5H17M8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 12H17M8 12C8 12.2761 7.77614 12.5 7.5 12.5C7.22386 12.5 7 12.2761 7 12C7 11.7239 7.22386 11.5 7.5 11.5C7.77614 11.5 8 11.7239 8 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 16.5H17M8 16.5C8 16.7761 7.77614 17 7.5 17C7.22386 17 7 16.7761 7 16.5C7 16.2239 7.22386 16 7.5 16C7.77614 16 8 16.2239 8 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="font-semibold text-[#BEBEBE] hover:text-gray-100 duration-100 ">Tu biblioteca</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#ffffff" fill="none">
                        <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
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