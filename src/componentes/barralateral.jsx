import { useState } from "react"
import { Link } from "react-router-dom"

import img0 from "../IMGS/play.png"
import img from "../IMGS/batperfil.jpeg"
import img1 from "../IMGS/dey.jpeg"
import img2 from "../IMGS/your.jpeg"



export const BarraLate = () => {

    return (
        <div className="padre h-[100%]">
            <div className="cont1 my-2  bg-[#121212] py-2 rounded-lg pb-3">
                <Link to={"/"}>
                    <div className="flex items-center gap-3 cursor-pointer group ml-1 py-2 px-4 w-[50%] rounded-lg">
                    <svg className="opacity-60 group-hover:opacity-100 duration-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 750 840"><path fill="#ffffff" d="M733 289q8 6 8 18v406q0 10-6 16t-17 7H487q-10 0-17-7t-7-16V458q0-10-6-17t-17-6H301q-10 0-16 6t-7 17v255q0 10-6 16t-17 7H23q-10 0-16-7t-7-16V307q0-12 9-18L356 7q15-12 29 0z"/></svg>
                        <p className="font-semibold text-[#BEBEBE] group-hover:text-gray-100 duration-200 text-[16px]">Inicio</p>
                    </div>
                </Link>
                <Link to={'/allbum'} >
                    <div className="mt-3 flex items-center gap-3 cursor-pointer group ml-1 py-1 px-4 duration-200 w-[50%] rounded-lg">
                        <svg className="opacity-60 group-hover:opacity-100 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                            <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>

                        <p className="font-semibold text-[#BEBEBE] group-hover:text-gray-100 duration-200 text-[16px]">Buscar</p>
                    </div>
                </Link>

            </div>
            <div className="cont2 h-full flex flex-col justify-between my-2 bg-[#121212] rounded-lg">
                <div className="ml-4 mx-[3%]">
                    <div className="mt-2 flex items-center justify-between  duration-100 cursor-default ">
                        <div className="flex items-center gap-3 group">
                            <span> <svg viewBox="0 0 32 32" class="h-6 w-6" astro-icon="carbon:media-library"><path fill="currentColor" d="M13 15v8l7-4-7-4z"></path><path fill="currentColor" d="M26 28H6a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.002 2.002 0 0 1-2 2zM6 12v14h20V12zM6 6h20v2H6zM8 2h16v2H8z"></path></svg></span>
                            <p className="font-semibold text-[#BEBEBE] ">Tu biblioteca</p>
                        </div>
                        <div className="flex gap-3">
                            <svg className="hover:bg-[#202020] cursor-pointer rounded-full p-[6px] opacity-60 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" color="#ffffff" fill="none">
                                <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className="hover:bg-[#202020] cursor-pointer rounded-full p-[6px] opacity-60 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#ffffff" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" /></svg>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <button className="text-sm bg-[#222222] hover:bg-[#272727] px-3 py-[6px] font-medium text-white rounded-full">Listas</button>
                        <button className="text-sm bg-[#222222] hover:bg-[#272727] px-3 py-[6px] font-medium text-white rounded-full">Artistas</button>
                    </div>
                    <div className="flex justify-between mt-4">
                        <svg className="opacity-60 hover:opacity-80 cursor-pointer hover:bg-[#202020] rounded-full p-2" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20"><path fill="#ffffff" fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9" clip-rule="evenodd" /></svg>
                        <p className="flex items-center gap-1 text-white opacity-80 hover:scale-105 duration-100  text-sm cursor-pointer">Reciente <span className="opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 56 56"><path fill="#ffffff" fill-rule="evenodd" d="M10 36a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 39c0-1.105.89-2 2.002-2zM10 26a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 29c0-1.105.89-2 2.002-2zM10 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 19c0-1.105.89-2 2.002-2z" /></svg></span></p>
                    </div>
                    <div className="flex gap-4 mt-4 hover:bg-[#222222] group  p-2 ml-[-10px] mr-[-7px] rounded-[5px]">
                        <div className="flex justify-center items-center cursor-pointer">
                            <svg className="absolute opacity-0 group-hover:opacity-100 z-10" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M8 5.14v14l11-7z" /></svg>
                            <img className="shadow-lg group-hover:opacity-70 rounded-full" src={img} alt="foto" width={50} />
                        </div>
                        <div className="">
                            <p className="text-white text-[15px] cursor-default">Bat Bunny</p>
                            <p className="opacity-70 text-sm cursor-default">Artista</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-1 hover:bg-[#222222] group cursor-pointer p-2 ml-[-10px] mr-[-7px] rounded-[5px]">
                        <div className="flex justify-center items-center">
                            <svg className="absolute opacity-0 group-hover:opacity-100 z-10" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M8 5.14v14l11-7z" /></svg>
                            <img className="rounded shadow-lg group-hover:opacity-70" src={img1} alt="foto" width={50} />
                        </div>
                        <div className="">
                            <p className="text-white text-[15px]">DayLigth</p>
                            <p className="opacity-70 text-sm">David Kushner</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-1 hover:bg-[#222222] group cursor-pointer p-2 ml-[-10px] mr-[-7px] rounded-[5px]">
                        <div className="flex justify-center items-center">
                            <svg className="absolute opacity-0 group-hover:opacity-100 z-10" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M8 5.14v14l11-7z" /></svg>
                            <img className="rounded shadow-lg group-hover:opacity-70" src={img2} alt="foto" width={50} />
                        </div>
                        <div className="">
                            <p className="text-white text-[15px]">I Wanna Be Your</p>
                            <p className="opacity-70 text-sm">Arctic Monkeys</p>
                        </div>
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