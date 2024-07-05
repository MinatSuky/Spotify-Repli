import verify from "../IMGS/VERFY.png"
import { useState } from "react"
import AudioPlayer from "../componentes/audioPlayer"
import summe from "../audio/lanadelrey/summe.mp3"
import beautiful from "../audio/lanadelrey/Beautiful.mp3"
import say from "../audio/lanadelrey/Say.mp3"
import west from "../audio/lanadelrey/West.mp3"
import games from "../audio/lanadelrey/Games.mp3"
import img3 from "../IMGS/Captura de pantalla 2024-06-21 091558.png"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"
import { Link } from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BarraPrin } from "../componentes/barraprincipal"

export const LanaPerfil = () => {

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

    const [icono0, setIcono0] = useState(true)
    const [icono, setIcono] = useState(true)

    //variablepara el nombre en la barra de audio
    const names = ["Summertime Sadness", "Young and Beautiful", "Say Yes To Heven", "West Coast", "Video Games"]

    //variable para la imagen en la barra de audio
    const imgaudio = ["https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7", "https://i.scdn.co/image/ab67616d0000b273d7fb3e4c63020039d1cff6b2", "https://upload.wikimedia.org/wikipedia/en/5/51/Lana_Del_Rey_-_Say_Yes_to_Heaven.png", "https://i.scdn.co/image/ab67616d0000b273979dbbce412ed4780664cc57", "https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7"]

    return (
        <div className="BARRAPRINCIPAL1 text-white">
            <BarraPrin/>
            <div className="fotoperfil h-[47vh] bg-cover bg-center flex flex-col">
                <p className="text-white font-extrabold title-perfi mt-20 ml-3">Lana Del Rey</p>
                <p className="text-white ml-3 font-medium mt-3">55.133.090 oyentes mensuales</p>
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
                    <div onClick={() => setIcono0(!icono0)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full  ora1 w-fit">
                        <img src={icono0 ? (img1) : (img2)} alt="" width={20} />
                    </div>
                </div>
            </div>
            <div className="mt-10 ml-12 flex flex-col gap-3">
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(0)} className="flex items-center repro4 cursor-pointer">
                        <p>1</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7" alt="" width={50} />
                        <p className="ney">Summertime Sadness</p>
                    </div>
                    <div className="flex  gap-24 cursor-default relative">
                        <p className="repro">1.437.139.124</p>
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
                        <p className="ney">4:25</p>
                    </div>
                </div>
                <div className="conn flex items-center p-3 justify-between rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(1)} className="flex items-center repro4 cursor-pointer">
                        <p>2</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b273d7fb3e4c63020039d1cff6b2" alt="" width={50} />
                        <p className="ney">Young and Beautiful</p>
                    </div>
                    <div className="flex  gap-24 cursor-default relative">
                        <p className="repro">1.237.125.852</p>
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
                        <p className="ney">3:58</p>
                    </div>
                </div>
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(2)} className="flex items-center repro4 cursor-pointer">
                        <p>3</p>
                        <img className="rounded-lg ora2" src="https://upload.wikimedia.org/wikipedia/en/5/51/Lana_Del_Rey_-_Say_Yes_to_Heaven.png" alt="" width={50} />
                        <p className="ney">Say Yes To Heven</p>
                    </div>
                    <div className="flex gap-24 cursor-default relative">
                        <p className="repro">558.367.859</p>
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
                        <p className="ney">3:29</p>
                    </div>
                </div>
                <div className="conn flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(3)} className="flex items-center repro4 cursor-pointer">
                        <p>4</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b273979dbbce412ed4780664cc57" alt="" width={50} />
                        <p className="ney">West Coast</p>
                    </div>
                    <div className="flex gap-24 cursor-default relative">
                        <p className="repro">797.357.159</p>
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
                        <p className="ney">4:25</p>
                    </div>
                </div>
                <div className="conn flex items-center p-3 justify-between rounded-lg hover:bg-[#1A1A1A] mr-[2%] hover:shadow-lg">
                    <div onClick={() => toggleAudioPlayer(4)} className="flex items-center repro4  cursor-pointer">
                        <p>5</p>
                        <img className="rounded-lg ora2" src="https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7" alt="" width={50} />
                        <p className="ney">Video Games</p>
                    </div>
                    <div className="flex gap-24 cursor-default relative ">
                        <p className="repro">987.321.753</p>
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
                            {gurdado5 ? <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Favorito</span>
                                : <span className="mens absolute right-24 bottom-7 text-sm font-light bg-[#121212] px-2 pt-1 rounded-lg">Quitar de Favoritos</span>}
                        </div>
                        <p className="ney">4:43</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden fixed z-[1] audicont">
                {barraAudio === 0 && <AudioPlayer imgaudio={imgaudio[0]} names={names[0]} audio={summe} onEnded={handleEnded} />}
                {barraAudio === 1 && <AudioPlayer imgaudio={imgaudio[1]} names={names[1]} audio={beautiful} onEnded={handleEnded} />}
                {barraAudio === 2 && <AudioPlayer imgaudio={imgaudio[2]} names={names[2]} audio={say} onEnded={handleEnded2} />}
                {barraAudio === 3 && <AudioPlayer imgaudio={imgaudio[3]} names={names[3]} audio={west} onEnded={handleEnded2} />}
                {barraAudio === 4 && <AudioPlayer imgaudio={imgaudio[4]} names={names[4]} audio={games} onEnded={handleEnded2} />}
            </div>
            <div className="ml-5 mt-10">
                <p className="text-3xl font-semibold">Albumes</p>
            </div>

            <div className="flex justify-center items-center mb-[5%] mt-10 slider-container">
                <Slider className="slader" {...settings}>
                    <Link className="flex justify-center" to={'/BornToDie'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b27311e3158d6de0e471bff44f6e" width={210} alt="" />
                            <p className="text-white  font-medium mt-4 ney">Born To Die</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-2 opacity-60">
                                <p className="cans">2012</p>
                                <p className="cans">12 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/Ultraviolence'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney">Ultraviolence</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2014</p>
                                <p className="cans">11 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/Lustforlife'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b273427fc95e3e9d98803413864e" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney">Lust For Life</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2017</p>
                                <p className="cans">16 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/NormanFuckingRockwell!'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney">Norman Fuck...</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2019</p>
                                <p className="cans">14 Canciones</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/DidYouKnowThatThere’saTunnelUnderOceanBlvd'}>
                        <div className="CONTENEDOR mb-10 hover:bg-[#1A1A1A] relative rounded-xl cursor-pointer w-fit p-6">
                            <img className="rounded-md" src="https://i.scdn.co/image/ab67616d0000b27359ae8cf65d498afdd5585634" width={210} alt="" />
                            <p className="text-white font-medium mt-4 ney">Did You Know...</p>
                            <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[230px] right-2 ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                            <div className="flex gap-3 opacity-60">
                                <p className="cans">2023</p>
                                <p className="cans">16 Canciones</p>
                            </div>
                        </div>
                    </Link>
                </Slider>

            </div>

            <img className="mt-5" src={img3} alt="" />
        </div>
    )
}
