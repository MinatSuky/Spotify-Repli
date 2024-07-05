import verify from "../IMGS/VERFY.png"
import { useState } from "react"
import img3 from "../IMGS/Captura de pantalla 2024-06-21 091558.png"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"
import AudioPlayerNex from "../componentes/audioNex"
import AudioPlayerNexx from "../componentes/Proxi"
import { BarraPrin } from "../componentes/barraprincipal"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom"


export const AdelePerfil = () => {

    //carrucel
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1385,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 515,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    //estados para el icono de favoritos
    const [gurdado, setGuardado] = useState(true)
    const [gurdado2, setGuardado2] = useState(true)
    const [gurdado3, setGuardado3] = useState(true)
    const [gurdado4, setGuardado4] = useState(true)
    const [gurdado5, setGuardado5] = useState(true)

    //estados para la barra de audio
    const [barraAudio, setBarraAudio] = useState(false)

    const BarrraAudion0 = (activo) => {
        if (barraAudio === activo) {
            setBarraAudio(null); // Cierra el reproductor si se hace clic en el activo
        } else {
            setBarraAudio(activo); // Abre el reproductor correspondiente
        }
    };


    const [icono, setIcono] = useState(true)

    //variablepara el nombre en la barra de audio
    const names = ["BIRDS OF A FEATHER", "LUNCH", "CHIHIRO", "WILDFLOWER", "BLUE"]

    //variable para la imagen en la barra de audio
    const imgaudio = ["https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da", "https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da", "https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da", "https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da", "https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da"]

    return (
        <div className="BARRAPRINCIPAL1">
            <BarraPrin />
            <div className="fotoperfil3 h-[47vh] bg-cover bg-center flex flex-col">
                <p className="text-white font-extrabold title-perfi mt-20 ml-3">Billie Eilish</p>
                <p className="text-white ml-3 font-medium mt-3">98.506.233 oyentes mensuales</p>
                <div className="text-white ml-3 font-medium mt-3 flex items-center gap-2">
                    <img src={verify} alt="" width={25} />
                    Artista Veridicado
                </div>
            </div>
            <div className="flex mt-10 gap-7 items-center ml-8">
                <div>
                    <p className="text-white text-3xl font-semibold">Populares</p>
                </div>
                <div className="cursor-pointer" onClick={() => BarrraAudion0(0)}>
                    <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full  ora1 w-fit">
                        <img src={icono ? (img1) : (img2)} alt="" width={20} />
                    </div>
                </div>
            </div>
            <div className="mt-10 ml-12 flex flex-col gap-3">
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => BarrraAudion0(0)} className="flex items-center repro4 cursor-pointer">
                        <p>1</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da" alt="" width={50} />
                        <p className="ney">{names[0]}</p>
                    </div>
                    <div className="flex  gap-24 cursor-default relative">
                        <p className="repro">71.852.357</p>
                        <div className="mas">
                            <span onClick={() => setGuardado(!gurdado)} className="cursor-pointer" >
                                {gurdado ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 10L17 2M13 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 11.3333C9 11.3333 9.875 11.3333 10.75 13C10.75 13 13.5294 8.83333 16 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                            </span>
                            {gurdado ? <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Favorito</span>
                                : <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Quitar de Favoritos</span>}
                        </div>
                        <p className="ney">3:35</p>
                    </div>
                </div>
                <div className="conn flex items-center p-3 justify-between rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => BarrraAudion0(1)} className="flex items-center repro4 cursor-pointer">
                        <p>2</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da" alt="" width={50} />
                        <p className="ney">{names[1]}</p>
                    </div>
                    <div className="flex  gap-24 cursor-default relative">
                        <p className="repro">717.963.654</p>
                        <div className="mas">
                            <span onClick={() => setGuardado2(!gurdado2)} className="cursor-pointer" >
                                {gurdado2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 10L17 2M13 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 11.3333C9 11.3333 9.875 11.3333 10.75 13C10.75 13 13.5294 8.83333 16 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                            </span>
                            {gurdado2 ? <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Favorito</span>
                                : <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Quitar de Favoritos</span>}
                        </div>
                        <p className="ney">4:12</p>
                    </div>
                </div>
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => BarrraAudion0(2)} className="flex items-center repro4 cursor-pointer">
                        <p>3</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da" alt="" width={50} />
                        <p className="ney">{names[2]}</p>
                    </div>
                    <div className="flex gap-24 cursor-default relative">
                        <p className="repro">118.125.741</p>
                        <div className="mas">
                            <span onClick={() => setGuardado3(!gurdado3)} className="cursor-pointer" >
                                {gurdado3 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 10L17 2M13 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 11.3333C9 11.3333 9.875 11.3333 10.75 13C10.75 13 13.5294 8.83333 16 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                            </span>
                            {gurdado3 ? <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Favorito</span>
                                : <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Quitar de Favoritos</span>}
                        </div>
                        <p className="ney">4:43</p>
                    </div>
                </div>
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => BarrraAudion0(3)} className="flex items-center repro4 cursor-pointer">
                        <p>4</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da" alt="" width={50} />
                        <p className="ney">{names[3]}</p>
                    </div>
                    <div className="flex gap-24 cursor-default relative">
                        <p className="repro">462.759.153</p>
                        <div className="mas">
                            <span onClick={() => setGuardado4(!gurdado4)} className="cursor-pointer" >
                                {gurdado4 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 10L17 2M13 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 11.3333C9 11.3333 9.875 11.3333 10.75 13C10.75 13 13.5294 8.83333 16 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                            </span>
                            {gurdado4 ? <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Favorito</span>
                                : <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Quitar de Favoritos</span>}
                        </div>
                        <p className="ney">4:24</p>
                    </div>
                </div>
                <div className="conn flex items-center p-3 justify-between rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => BarrraAudion0(4)} className="flex items-center repro4 cursor-pointer">
                        <p>5</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da" alt="" width={50} />
                        <p className="ney">{names[4]}</p>
                    </div>
                    <div className="flex gap-24 cursor-default relative">
                        <p className="repro">223.658.731</p>
                        <div className="mas">
                            <span onClick={() => setGuardado5(!gurdado5)} className="cursor-pointer" >
                                {gurdado5 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 10L17 2M13 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                        <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 11.3333C9 11.3333 9.875 11.3333 10.75 13C10.75 13 13.5294 8.83333 16 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }
                            </span>
                            {gurdado5 ? <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">
                                Favorito</span>
                                : <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">
                                    Quitar de Favoritos</span>}
                        </div>
                        <p className="ney">3:34</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden fixed z-[1] audicont">
                {barraAudio === 0 && <AudioPlayerNex imgaudio={imgaudio[1]} names={names[0]} />}
                {barraAudio === 1 && <AudioPlayerNex imgaudio={imgaudio[1]} names={names[1]} />}
                {barraAudio === 2 && <AudioPlayerNex imgaudio={imgaudio[2]} names={names[2]} />}
                {barraAudio === 3 && <AudioPlayerNex imgaudio={imgaudio[3]} names={names[3]} />}
                {barraAudio === 4 && <AudioPlayerNex imgaudio={imgaudio[4]} names={names[4]} />}

            </div>
            <div className="ml-5 mt-10">
                <p className="text-3xl font-semibold">Albumes</p>
            </div>
            <div className="flex justify-center items-center mb-[5%] mt-10 slider-container">
                <Slider className="slader" {...settings}>
                    <Link>
                        <div onClick={() => BarrraAudion0(5)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-4  ml-4 mt-10">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e" width={200} alt="" />
                            <p className="text-white ney font-medium mt-4">
                                Happier Than Ever
                            </p>
                            
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2021</p>
                                <p className="cans">16 Canciones</p>
                            </div>
                            {barraAudio === 5 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link>
                        <div onClick={() => BarrraAudion0(6)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-4  ml-4 mt-10">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce" width={200} alt="" />
                            <p className="text-white ney font-medium mt-4">WHEN WE ALL ASP...</p>
                            
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2019</p>
                                <p className="cans">14 Canciones</p>
                            </div>
                            {barraAudio === 6 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link>
                        <div onClick={() => BarrraAudion0(7)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-4  ml-4 mt-10">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62" width={200} alt="" />
                            <p className="text-white ney font-medium mt-4">HIT HARD AND SOFT</p>
                            
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2024</p>
                                <p className="cans">10 Canciones</p>
                            </div>
                            {barraAudio === 7 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link>
                        <div onClick={() => BarrraAudion0(8)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-4  ml-4 mt-10">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795" width={200} alt="" />
                            <p className="text-white ney font-medium mt-4">dont smile at me</p>
                            
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2017</p>
                                <p className="cans">9 Canciones</p>
                            </div>
                            {barraAudio === 8 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link>
                        <div onClick={() => BarrraAudion0(9)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-4  ml-4 mt-10">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d00001e02ed317ec13d3de9e01fb99c9e" width={200} alt="" />
                            <p className="text-white ney font-medium mt-4">What Was I Mode...</p>
                            
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2023</p>
                                <p className="cans">19 Canciones</p>
                            </div>
                            {barraAudio === 9 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link>
                        <div onClick={() => BarrraAudion0(10)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-4  ml-4 mt-10">
                            <img className="rounded-md" src="https://upload.wikimedia.org/wikipedia/en/f/fa/Billie_Eilish_and_Khalid_-_Lovely.png" width={200} alt="" />
                            <p className="text-white ney font-medium mt-4">lovely</p>
                            
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2018</p>
                                <p className="cans">15 Canciones</p>
                            </div>
                            {barraAudio === 10 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                </Slider>
            </div>
            <img className="mt-5" src={img3} alt="" />
        </div>
    )
}