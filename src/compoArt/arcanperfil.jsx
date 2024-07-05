import verify from "../IMGS/VERFY.png"
import { useState } from "react"
import AudioPlayer from "../componentes/audioPlayer"
import summe from "../audio/arcangel/REMIX.mp3"
import beautiful from "../audio/arcangel/Jumpa.mp3"
import say from "../audio/arcangel/ALV.mp3"
import west from "../audio/arcangel/Así.mp3"
import games from "../audio/arcangel/Bien.mp3"
import img3 from "../IMGS/Captura de pantalla 2024-06-21 091558.png"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"
import { Link } from "react-router-dom"
import { BarraPrin } from "../componentes/barraprincipal"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Arcaperfil = () => {
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

    const toggleAudioPlayer = (activo) => {
        if (barraAudio === activo) {
            setBarraAudio(null); // Cierra el reproductor si se hace clic en el activo
        } else {
            setBarraAudio(activo); // Abre el reproductor correspondiente
        }
    };
    const handleEnded = () => {
        setBarraAudio(0 === barraAudio ? 1 : 2);
    };
    const handleEnded2 = () => {
        setBarraAudio(2 === barraAudio ? 3 : 4);
    };

    const [icono, setIcono] = useState(true)

    //variablepara el nombre en la barra de audio
    const names = ["X'clusivo-Remix", "La Jumpa", "ALV", "Tu No Vive Asi", "Pa' Que La Pases Bien"]

    //variable para la imagen en la barra de audio
    const imgaudio = ["https://i.scdn.co/image/ab67616d0000b2735327757614a832374e491778", "https://i.scdn.co/image/ab67616d0000b27330326b23e30ae93d4d48165b", "https://i.scdn.co/image/ab67616d0000b2739bf23abed0a1e730a90d3490", "https://i.scdn.co/image/ab67616d0000b2739bf23abed0a1e730a90d3490", "https://i.scdn.co/image/ab67616d0000b273294ea58a8ac4ae598c46d0b0"]

    return (
        <div className="BARRAPRINCIPAL1">
            <BarraPrin />
            <div className="fotoperfil2 h-[47vh] bg-cover bg-center flex flex-col">
                <p className="text-white font-extrabold title-perfi mt-20 ml-3">Arcangel</p>
                <p className="text-white ml-3 font-medium mt-3">26.853.159 oyentes mensuales</p>
                <div className="text-white ml-3 font-medium mt-3 flex items-center gap-2">
                    <img src={verify} alt="" width={25} />
                    Artista Veridicado
                </div>
            </div>
            <div className="flex mt-10 gap-7 items-center ml-8">
                <div>
                    <p className="text-white text-3xl font-semibold">Populares</p>
                </div>
                <div className="cursor-pointer" onClick={() => toggleAudioPlayer(0)}>
                    <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full  ora1 w-fit">
                        <img src={icono ? (img1) : (img2)} alt="" width={20} />
                    </div>
                </div>
            </div>
            <div className="mt-10 ml-12 flex flex-col gap-3">
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(0)} className="flex items-center repro4 cursor-pointer">
                        <p>1</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b2735327757614a832374e491778" alt="" width={50} />
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
                    <div onClick={() => toggleAudioPlayer(1)} className="flex items-center repro4 cursor-pointer">
                        <p>2</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b27330326b23e30ae93d4d48165b" alt="" width={50} />
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
                    <div onClick={() => toggleAudioPlayer(2)} className="flex items-center repro4 cursor-pointer">
                        <p>3</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b2735947e677a3370208d0ba491d" alt="" width={50} />
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
                    <div onClick={() => toggleAudioPlayer(3)} className="flex items-center repro4 cursor-pointer">
                        <p>4</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b2739bf23abed0a1e730a90d3490" alt="" width={50} />
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
                        <p>4:24</p>
                    </div>
                </div>
                <div className="conn flex items-center p-3 justify-between rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(4)} className="flex items-center repro4 cursor-pointer">
                        <p>5</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b273294ea58a8ac4ae598c46d0b0" alt="" width={50} />
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
                {barraAudio === 0 && <AudioPlayer imgaudio={imgaudio[0]} names={names[0]} audio={summe} onEnded={handleEnded} />}
                {barraAudio === 1 && <AudioPlayer imgaudio={imgaudio[1]} names={names[1]} audio={beautiful} onEnded={handleEnded} />}
                {barraAudio === 2 && <AudioPlayer imgaudio={imgaudio[2]} names={names[2]} audio={say} onEnded={handleEnded2} />}
                {barraAudio === 3 && <AudioPlayer imgaudio={imgaudio[3]} names={names[3]} audio={west} onEnded={handleEnded2} />}
                {barraAudio === 4 && <AudioPlayer imgaudio={imgaudio[4]} names={names[4]} audio={games} />}
            </div>
            <div className="ml-5 mt-10">
                <p className="text-3xl font-semibold">Albumes</p>
            </div>
            <div className="flex justify-center items-center mb-[5%] mt-10 slider-container">
                <Slider className="slader" {...settings}>
                <Link className="flex justify-center" to={'/Fenomeno'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b273294ea58a8ac4ae598c46d0b0" width={210} alt="" />
                            <p className="text-white  font-medium mt-4 ney">El Fenomeno</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-2 opacity-60">
                                <p className="cans">2008</p>
                                <p className="cans">14 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/Historias'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d00001e027ce7c833a19b3552c318f080" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney nanda">Historias de...</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2014</p>
                                <p className="cans">11 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/Ares'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b273f48143b885b851f2d5978749" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney">Ares</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2018</p>
                                <p className="cans">18 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/LosFavoritos'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b27352ff352cd503ceddbaf1d533" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney">los Favoritos</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2015</p>
                                <p className="cans">18 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/Sentimiento,Elegancia y Más Maldad'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b2735947e677a3370208d0ba491d" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney">Sentiminto, ele..</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2023</p>
                                <p className="cans">19 Canciones</p>
                            </div>
                        </div>
                    </Link>
                   
                </Slider>
            </div>

            <img className="mt-5" src={img3} alt="" />
        </div>
    )
}
 