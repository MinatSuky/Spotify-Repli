import verify from "../IMGS/VERFY.png"
import { useState } from "react"
import AudioPlayer from "../componentes/audioPlayer"
import summe from "../audio/batBunny/Myke Towers, Bad Bunny - ADIVINO (Official Lyric Video) (1).mp3"
import beautiful from "../audio/batBunny/Bad Bunny ft. Feid - Perro Negro (LetraLyrics)  nadie sabe lo que va a pasar mañana (1).mp3"
import say from "../audio/batBunny/Bad Bunny (ft. Chencho Corleone) - Me Porto Bonito (Video Oficial)  Un Verano Sin Ti (1).mp3"
import west from "../audio/batBunny/J BALVIN x BAD BUNNY - LA CANCIÓN  OASIS (Video Oficial) (1).mp3"
import games from "../audio/batBunny/Grupo Frontera x Bad Bunny - un x100to (Video Oficial) (1).mp3"
import img3 from "../IMGS/Captura de pantalla 2024-06-21 091558.png"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"
import { Link } from "react-router-dom"
import AudioPlayerNexx from "../componentes/Proxi"
import { BarraPrin } from "../componentes/barraprincipal"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Footer } from "../componentes/footer"

export const BatPerfil = () => {

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
    const names = ["DIVINO", "PERREO NEGRO", "Me Porto Bonito", "LA CANCION", "un x100to"]

    //variable para la imagen en la barra de audio
    const imgaudio = ["https://i.scdn.co/image/ab67616d0000b273b41f34aa51be675c5cfd3d94", "https://i.scdn.co/image/ab67616d0000b2737b1fc51ff3257b5286a1ecec", "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72", "https://i.scdn.co/image/ab67616d0000b2734891d9b25d8919448388f3bb", "https://i.scdn.co/image/ab67616d0000b27382ce4c7bbf861185252e82ae"]

    return (
        <div className="BARRAPRINCIPAL1 text-white">
            <BarraPrin />
            <div className="fotoperfil5 h-[47vh] bg-cover bg-center flex flex-col">
                <p className="text-white font-extrabold title-perfi mt-20 ml-3">Bad Bunny</p>
                <p className="text-white ml-3 font-medium mt-3">65.123.159 oyentes mensuales</p>
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
            <div className="mt-7 cursor-default">
                    <div className="flex justify-between opacity-70 mx-[1.7%]">
                        <div className="flex gap-10">
                            <p>#</p>
                            <p>Titulo</p>
                        </div>
                        <div className="flex gap-52 mb-3">
                            <p className=" repro">Reproduciones</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    <p className="flex justify-center opacity-20"><hr className="w-[100%]" /></p>
                </div>
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(0)} className="flex items-center repro4 cursor-pointer">
                        <p>1</p>
                        <img className="rounded-lg ora2" src={imgaudio[0]} alt="" width={50} />
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
                        <img className="rounded-lg ora2" src={imgaudio[1]} alt="" width={50} />
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
                        <img className="rounded-lg ora2" src={imgaudio[2]} alt="" width={50} />
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
                        <img className="rounded-lg ora2" src={imgaudio[3]} alt="" width={50} />
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
                    <div onClick={() => toggleAudioPlayer(4)} className="flex items-center repro4 cursor-pointer">
                        <p>5</p>
                        <img className="rounded-lg ora2" src={imgaudio[4]} alt="" width={50} />
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
                    <Link className="w-[100%]" >
                        <div onClick={() => toggleAudioPlayer(5)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72" width={200} alt="" />
                            <p className="text-white font-medium ney mt-5">Un Verano Sin Ti</p>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2022</p>
                                <p className="cans">23 Canciones</p>
                            </div>
                            {barraAudio === 5 && <AudioPlayerNexx />}
                        </div>
                    </Link>

                    <Link className="w-[100%]" >
                        <div onClick={() => toggleAudioPlayer(6)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b2737b1fc51ff3257b5286a1ecec" width={200} alt="" />
                            <p className="text-white font-medium ney mt-5">Nadie Sabe L...</p>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2024</p>
                                <p className="cans">21 Canciones</p>
                            </div>
                            {barraAudio === 6 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link className="w-[100%]" >
                        <div onClick={() => toggleAudioPlayer(7)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0" width={200} alt="" />
                            <p className="text-white font-medium ney mt-5">YHLQMDLG</p>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2020</p>
                                <p className="cans">20 Canciones</p>
                            </div>
                            {barraAudio === 7 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link className="w-[100%]" >
                        <div onClick={() => toggleAudioPlayer(8)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d00001e02519266cd05491a5b5bc22d1e" width={200} alt="" />
                            <p className="text-white font-medium ney mt-5">X100PRE</p>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2018</p>
                                <p className="cans">15 Canciones</p>
                            </div>
                            {barraAudio === 8 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                    <Link className="w-[100%]" >
                        <div onClick={() => toggleAudioPlayer(9)} className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d00001e024891d9b25d8919448388f3bb" width={200} alt="" />
                            <p className="text-white font-medium ney mt-5">El Ultimo tou...</p>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2019</p>
                                <p className="cans">8 Canciones</p>
                            </div>
                            {barraAudio === 9 && <AudioPlayerNexx />}
                        </div>
                    </Link>
                </Slider>
            </div>
            <Footer/>
        </div>
    )
}