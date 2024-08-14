import { useState } from "react"
import { BarraLate } from "../componentes/barralateral"
import AudioPlayer from "../componentes/audioPlayer"
import arca from "../IMGS/Arcanperfil.jpeg"
import paque from "../audio/arcangel/Bien.mp3"
import ciegas from "../audio/arcangel/Por Amar A Ciegas (1).mp3"
import chica from "../audio/arcangel/Arcángel - Chica Virtual  El Fenomeno (Audio Oficial) (1).mp3"
import agresi from "../audio/arcangel/Agresivo 3  El Fenomeno (Audio Oficial) (1).mp3"
import pegas from "../audio/arcangel/Si Te Pegas (1).mp3"
import nopuede from "../audio/arcangel/Tony Lenta ft. Arcangel - Tu Conmigo Original (1).mp3"
import ahieh from "../audio/arcangel/Arcángel - Ahí Eh  El Fenomeno (Audio Oficial) (1).mp3"
import yote from "../audio/arcangel/Yo Te Enseño  El Fenomeno (Audio Oficial) (1).mp3"
import nadamalo from "../audio/arcangel/Arcángel - Nada Malo  El Fenomeno (Audio Oficial) (1).mp3"
import ganas from "../audio/arcangel/Ganas De Ti (1).mp3"
import si from "../audio/arcangel/Si  El Fenomeno (Audio Oficial) (1).mp3"
import enamorado from "../audio/arcangel/Enamorado de Ti  El Fenomeno (Audio Oficial) (1).mp3"
import got from "../audio/arcangel/I Got Flow  El Fenomeno (Audio Oficial) (1).mp3"
import tabueno from "../audio/arcangel/Ta Bueno El Ambiente  El Fenomeno (Audio Oficial) (1).mp3"
import img3 from "../IMGS/Captura de pantalla 2024-06-21 091558.png"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"
import { BarraPrin } from "../componentes/barraprincipal"
import { Footer } from "../componentes/footer"





export const Elegan = () => {

    const [gurdado, setGuardado] = useState(true)

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
    const handleEnded3 = () => {
        setBarraAudio(4 === barraAudio ? 5 : 6);
    };
    const handleEnded4 = () => {
        setBarraAudio(6 === barraAudio ? 7 : 8);
    };
    const handleEnded5 = () => {
        setBarraAudio(8 === barraAudio ? 9 : 10);
    };
    const handleEnded6 = () => {
        setBarraAudio(10 === barraAudio ? 11 : 12);
    };
    const handleEnded7 = () => {
        setBarraAudio(12 === barraAudio ? 13 : 14);
    };
    const handleEnded8 = () => {
        setBarraAudio(14 === barraAudio ? 15 : 16);
    };
    const handleEnded9 = () => {
        setBarraAudio(16 === barraAudio ? 17 : null);
    };

    const names = ["El Palo", "Me Gusta Tu Flow", "Plutón", "ALV", "Antonio Banderas", "Rosita", "Los Roques", "Psicópata", "FP", "Que Tengo Que Hacer", "Condado", "Yoshi", "Bali", "La Chamba","Rapido","No tiene Nombre Esta Cancion","Arca 1OMil","Los Tiempos Cambian"]
    const art = ["Arcangel"]

    const imgaudio = ["https://i.scdn.co/image/ab67616d0000b2735947e677a3370208d0ba491d"]

    const [icono, setIcono] = useState(true)
    const [red, setRed] = useState(false)

    return (
        <div className="padre flex gap-[3px]">
            <div className="padre3  h-[100%] overflow-hidden  BARRALATERAL">
                <BarraLate />
            </div>
            <div className="h-[98.2vh] bg-[#121212] rounded-lg mt-2 overflow-auto hijo">
            <BarraPrin/>
                <div className="fotoborn9 gradi">
                    <div className="bg-[#4e4f4d] portada p-8 ">
                        <div>
                            <img className="fotodie rounded-md" src="https://i.scdn.co/image/ab67616d0000b2735947e677a3370208d0ba491d" width={200} alt="" />
                        </div>
                        <div className="cursor-default">
                            <p className="text-white ml-3 font-medium ney all">Albunm</p>
                            <p className="text-white font-extrabold title-perfi3 ml-3">Sentimiento, Elegancia y Más Maldad</p>
                            <div className="text-white ml-3  mt-3 fechas2 gap-2">
                               <div className="fechas3">
                               <img className="rounded-full" src={arca} alt="" width={30} />
                               <p className="text-xl font-bold">Arcangel</p>
                               </div>
                                <div className="fechas">
                                <p className="font-normal opacity-80 text-sm">2023</p>-
                                <p className="font-normal opacity-80 text-sm">18 canciones, 1h 2 min 52 s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 mt-5 mx-[2%]">
                        <div className="cursor-pointer" onClick={() => toggleAudioPlayer(0)}>
                            <div onClick={() => setIcono(!icono)} className="FLECHA1 bg-green-600 hover:bg-[#23dc67] p-4 rounded-full  ora1 w-fit">
                                <img src={icono ? (img1) : (img2)} alt="" width={20} />
                            </div>
                        </div>
                        <div className="cursor-pointer" onClick={() => setRed(!red)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color={red ? "red" : "white"} fill={red ? "red" : "none"}>
                                <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </div>
                        <div className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="white">
                                <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-7 cursor-default">
                        <div className="flex justify-between opacity-70 mx-[4.7%]">
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
                        <p className="flex justify-center opacity-20"><hr className="w-[96%]" /></p>
                    </div>
                    <div onClick={() => toggleAudioPlayer(0)} className="conn mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div  className="flex items-center gap-10 cursor-pointer">
                            <p>1</p>
                            <p className="text-white">{names[0]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">452.122.527</p>
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
                            <p className="opacity-60 ney">3:34</p>
                        </div>
                    </div>
                    {/* namber #2 */}
                    <div onClick={() => toggleAudioPlayer(1)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>2</p>
                            <p className="text-white">{names[1]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">350.363.554</p>
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
                            <p className="opacity-60 ney">3:55</p>
                        </div>
                    </div>
                    {/* namber #3 */}
                    <div onClick={() => toggleAudioPlayer(2)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>3</p>
                            <p className="text-white">{names[2]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">36.703.365</p>
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
                            <p className="opacity-60 ney">4:24</p>
                        </div>
                    </div>
                    {/* namber #4 */}
                    <div onClick={() => toggleAudioPlayer(3)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>4</p>
                            <p className="text-white">{names[3]}<br />
                                <span className="opacity-55 text-sm">{art[0]} & J King</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">20.001.100</p>
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
                            <p className="opacity-60 ney">5:07</p>
                        </div>
                    </div>
                    {/* namber #5 */}
                    <div onClick={() => toggleAudioPlayer(4)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>5</p>
                            <p className="text-white">{names[4]}<br />
                                <span className="opacity-55 text-sm">{art[0]} & john jay</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">19.456.130</p>
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
                            <p className="opacity-60 ney">3:32</p>
                        </div>
                    </div>
                    {/* namber #6 */}
                    <div onClick={() => toggleAudioPlayer(5)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>6</p>
                            <p className="text-white">{names[5]}<br />
                                <span className="opacity-55 text-sm">{art[0]} & Tony Lenta ft</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">44.369.741</p>
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
                            <p className="opacity-60 ney">3:50</p>
                        </div>
                    </div>
                    {/* namber #7 */}
                    <div onClick={() => toggleAudioPlayer(6)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>7</p>
                            <p className="text-white">{names[6]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">41.852.123</p>
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
                            <p className="opacity-60 ney">3:31</p>
                        </div>
                    </div>
                    {/* namber #8 */}
                    <div onClick={() => toggleAudioPlayer(7)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>8</p>
                            <p className="text-white">{names[7]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">51.741.963</p>
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
                            <p className="opacity-60 ney">3:31</p>
                        </div>
                    </div>
                    {/* namber #9 */}
                    <div onClick={() => toggleAudioPlayer(8)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>9</p>
                            <p className="text-white">{names[8]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">18.851.185</p>
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
                            <p className="opacity-60 ney">2:54</p>
                        </div>
                    </div>
                    {/* namber #10 */}
                    <div onClick={() => toggleAudioPlayer(9)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>10</p>
                            <p className="text-white">{names[9]}<br />
                                <span className="opacity-55 text-sm">{art[0]}, Yaga & Mackie</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">169.452.652</p>
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
                            <p className="opacity-60 ney">2:54</p>
                        </div>
                    </div>
                    {/* namber #11 */}
                    <div onClick={() => toggleAudioPlayer(10)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>11</p>
                            <p className="text-white">{names[10]}<br />
                                <span className="opacity-55 text-sm">{art[0]}, Voltio & Ñejo</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">42.365.896</p>
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
                            <p className="opacity-60 ney">3:45</p>
                        </div>
                    </div>
                    {/* namber #12 */}
                    <div onClick={() => toggleAudioPlayer(11)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>12</p>
                            <p className="text-white">{names[11]}<br />
                                <span className="opacity-55 text-sm">{art[0]} & Daddy Yankee</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">195.521.825</p>
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
                            <p className="opacity-60 ney">3:54</p>
                        </div>
                    </div>
                    {/* namber #13 */}
                    <div onClick={() => toggleAudioPlayer(12)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>13</p>
                            <p className="text-white">{names[12]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">35.521.825</p>
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
                            <p className="opacity-60 ney">3:46</p>
                        </div>
                    </div>
                    {/* namber #14 */}
                    <div onClick={() => toggleAudioPlayer(13)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>14</p>
                            <p className="text-white">{names[13]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">113.521.825</p>
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
                            <p className="opacity-60 ney">3:56</p>
                        </div>
                    </div>
                     {/* namber #15 */}
                     <div onClick={() => toggleAudioPlayer(14)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>15</p>
                            <p className="text-white">{names[14]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">19.456.130</p>
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
                            <p className="opacity-60 ney">3:32</p>
                        </div>
                    </div>
                    {/* namber #16 */}
                    <div onClick={() => toggleAudioPlayer(15)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>16</p>
                            <p className="text-white">{names[15]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">18.851.185</p>
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
                            <p className="opacity-60 ney">2:54</p>
                        </div>
                    </div>
                    {/* namber #17 */}
                    <div onClick={() => toggleAudioPlayer(16)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>17</p>
                            <p className="text-white">{names[16]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">42.365.896</p>
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
                            <p className="opacity-60 ney">3:45</p>
                        </div>
                    </div>
                    {/* namber #18 */}
                    <div onClick={() => toggleAudioPlayer(17)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>18</p>
                            <p className="text-white">{names[17]}<br />
                                <span className="opacity-55 text-sm">{art[0]}</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">20.001.100</p>
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
                            <p className="opacity-60 ney">5:07</p>
                        </div>
                    </div>
                    <Footer/>
                </div>
                <div className="overflow-hidden fixed z-[1] audicont">
                    {barraAudio === 0 && <AudioPlayer imgaudio={imgaudio[0]} names={names[0]} audio={paque} onEnded={handleEnded} />}
                    {barraAudio === 1 && <AudioPlayer imgaudio={imgaudio[0]} names={names[1]} audio={ciegas} onEnded={handleEnded} />}
                    {barraAudio === 2 && <AudioPlayer imgaudio={imgaudio[0]} names={names[2]} audio={chica} onEnded={handleEnded2} />}
                    {barraAudio === 3 && <AudioPlayer imgaudio={imgaudio[0]} names={names[3]} audio={agresi} onEnded={handleEnded2} />}
                    {barraAudio === 4 && <AudioPlayer imgaudio={imgaudio[0]} names={names[4]} audio={pegas} onEnded={handleEnded3} />}
                    {barraAudio === 5 && <AudioPlayer imgaudio={imgaudio[0]} names={names[5]} audio={nopuede} onEnded={handleEnded3} />}
                    {barraAudio === 6 && <AudioPlayer imgaudio={imgaudio[0]} names={names[6]} audio={ahieh} onEnded={handleEnded4} />}
                    {barraAudio === 7 && <AudioPlayer imgaudio={imgaudio[0]} names={names[7]} audio={yote} onEnded={handleEnded4} />}
                    {barraAudio === 8 && <AudioPlayer imgaudio={imgaudio[0]} names={names[8]} audio={nadamalo} onEnded={handleEnded5} />}
                    {barraAudio === 9 && <AudioPlayer imgaudio={imgaudio[0]} names={names[9]} audio={ganas} onEnded={handleEnded5} />}
                    {barraAudio === 10 && <AudioPlayer imgaudio={imgaudio[0]} names={names[10]} audio={si} onEnded={handleEnded6} />}
                    {barraAudio === 11 && <AudioPlayer imgaudio={imgaudio[0]} names={names[11]} audio={enamorado} onEnded={handleEnded6} />}
                    {barraAudio === 12 && <AudioPlayer imgaudio={imgaudio[0]} names={names[12]} audio={got} onEnded={handleEnded7} />}
                    {barraAudio === 13 && <AudioPlayer imgaudio={imgaudio[0]} names={names[13]} audio={tabueno} onEnded={handleEnded7} />}
                    {barraAudio === 14 && <AudioPlayer imgaudio={imgaudio[0]} names={names[14]} audio={si} onEnded={handleEnded8} />}
                    {barraAudio === 15 && <AudioPlayer imgaudio={imgaudio[0]} names={names[15]} audio={enamorado} onEnded={handleEnded8} />}
                    {barraAudio === 16 && <AudioPlayer imgaudio={imgaudio[0]} names={names[16]} audio={got} onEnded={handleEnded9} />}
                    {barraAudio === 17 && <AudioPlayer imgaudio={imgaudio[0]} names={names[17]} audio={tabueno} onEnded={handleEnded9} />}
                </div>
            </div>
        </div>
    )
}