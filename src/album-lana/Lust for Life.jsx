import { useState } from "react"
import { motion } from "framer-motion";
import { BarraLate } from "../componentes/barralateral"
import AudioPlayer from "../componentes/audioPlayer"
import lanaR from "../IMGS/lanaaperfil.jpeg"
import summe from "../audio/lanadelrey/summe.mp3"
import bornto from "../audio/lanadelrey/BornTo.mp3"
import races from "../audio/lanadelrey/Races.mp3"
import blue from "../audio/lanadelrey/Blue.mp3"
import games from "../audio/lanadelrey/Games.mp3"
import dew from "../audio/lanadelrey/Dew.mp3"
import nati from "../audio/lanadelrey/Nati.mp3"
import dark from "../audio/lanadelrey/Dark.mp3"
import radio from "../audio/lanadelrey/Radio.mp3"
import carmen from "../audio/lanadelrey/Carmen.mp3"
import man from "../audio/lanadelrey/Man.mp3"
import us from "../audio/lanadelrey/Us.mp3"
import chan from "../audio/lanadelrey/Change.mp3"
import themo from "../audio/lanadelrey/Tomorrow Never Came.mp3"
import heori from "../audio/lanadelrey/Heroin.mp3"
import get from "../audio/lanadelrey/Get Free.mp3"
import img3 from "../IMGS/Captura de pantalla 2024-06-21 091558.png"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"
import { BarraPrin } from "../componentes/barraprincipal";




export const Lust = () => {

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
        setBarraAudio(14 === barraAudio ? 15 : null);
    };

    const names = ["Love", "Lust for Life", "13 Beaches", "Cherry", "White Mustang", "Summer Bumme", "Groupie Lov", "In My Feelings", "Coachella  Woodstock in My Mind", "God Bless America", "When the World Was at War We Kept Dancing", "Beautiful People Beautiful Problems", "Tomorrow Never Came", "Heroin", "Change", "Get Free"]

    const imgaudio = ["https://i.scdn.co/image/ab67616d0000b27311e3158d6de0e471bff44f6e", "https://upload.wikimedia.org/wikipedia/en/a/ae/Off_to_the_Races_cover.jpg", "https://upload.wikimedia.org/wikipedia/en/4/4e/LanaBlueJeans.png", "https://upload.wikimedia.org/wikipedia/en/c/cf/Lana_Del_Rey_-_Video_Games_single_cover.png", "https://i.pinimg.com/originals/de/31/e6/de31e663f873f03320eea57b0b228262.jpg", "https://i1.sndcdn.com/artworks-000071483784-1271k8-t500x500.jpg", "https://i1.sndcdn.com/artworks-000147467778-f96mnh-t500x500.jpg", "https://i1.sndcdn.com/artworks-000674063545-qt7x57-t500x500.jpg", "https://i1.sndcdn.com/artworks-000193290475-bmkipr-t500x500.jpg", "https://i1.sndcdn.com/artworks-000071611424-i1hhb6-t500x500.jpg", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2c/0b/d3/2c0bd3e6-f896-2555-210d-8957265c0a7a/21UM1IM42033.rgb.jpg/1200x1200bf-60.jpg", "https://i1.sndcdn.com/artworks-000229060031-nmj6di-t500x500.jpg", "https://i1.sndcdn.com/artworks-000339257496-2pl03u-t500x500.jpg", "https://pbs.twimg.com/media/FvKMnZtWcAIH9G6.jpg:large", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07d9b9b3-d0dd-414b-bb8b-284b756de89f/dbf8bia-783e8f64-9f48-4027-a8ab-08601d006f36.png/v1/fill/w_1024,h_1024,q_80,strp/lana_del_rey___change__cover_art__by_cruelworld2003_dbf8bia-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzA3ZDliOWIzLWQwZGQtNDE0Yi1iYjhiLTI4NGI3NTZkZTg5ZlwvZGJmOGJpYS03ODNlOGY2NC05ZjQ4LTQwMjctYThhYi0wODYwMWQwMDZmMzYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ngBqZkU8TsEdVc2qxH7LZZTPdfEpMEkP7yBRzc2wE-w", "https://baltimorewatchdog.com/wp-content/uploads/2024/05/Screen-Shot-2024-05-10-at-9.25.27-PM.png"]

    const [icono, setIcono] = useState(true)
    const [red, setRed] = useState(false)

    return (
        <div className="padre flex gap-[3px]">
            <div className="padre3 w-[23%] h-[100%] overflow-hidden  BARRALATERAL">
                <BarraLate />
            </div>
            <div className="h-[99vh] bg-[#121212] rounded-lg mt-1 overflow-auto hijo">
            <BarraPrin />
                <div className="fotoborn2 gradi ">
                    <div className="bg-[#305157]  portada p-8 ">
                        <div>
                            <img className="fotodie" src="https://i.scdn.co/image/ab67616d0000b273427fc95e3e9d98803413864e" width={200} alt="" />
                        </div>
                        <div className="cursor-default">
                            <p className="text-white ml-3 font-medium ney all">Albunm</p>
                            <p className="text-white font-extrabold title-perfi2 ml-3">Lust For Life</p>
                            <div className="text-white ml-3  mt-3  fechas2 gap-3">
                               <div className="fechas3">
                               <img className="rounded-full" src={lanaR} alt="" width={30} />
                               <p className="text-xl font-bold">Lana Del Rey</p>
                               </div>
                                <div className="fechas">
                                <p className="font-normal opacity-80 text-sm">2017</p>-
                                <p className="font-normal opacity-80 text-sm">16 canciones, 1h 9 min 16 s</p>
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
                                <p className="repro">Reproduciones</p>
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
                    <div onClick={() => toggleAudioPlayer(0)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>1</p>
                            <p className="text-white">{names[0]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">682.852.357</p>
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
                            <p className="opacity-60 ney">4:46</p>
                        </div>
                    </div>
                    {/* namber #2 */}
                    <div onClick={() => toggleAudioPlayer(1)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>2</p>
                            <p className="text-white">{names[1]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">229.823.374</p>
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
                            <p className="opacity-60 ney">4:59</p>
                        </div>
                    </div>
                    {/* namber #3 */}
                    <div onClick={() => toggleAudioPlayer(2)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>3</p>
                            <p className="text-white">{names[2]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">449.783.365</p>
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
                            <p className="opacity-60 ney">4:20</p>
                        </div>
                    </div>
                    {/* namber #4 */}
                    <div onClick={() => toggleAudioPlayer(3)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>4</p>
                            <p className="text-white">{names[3]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">920.001.100</p>
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
                            <p className="opacity-60 ney">4:43</p>
                        </div>
                    </div>
                    {/* namber #5 */}
                    <div onClick={() => toggleAudioPlayer(4)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>5</p>
                            <p className="text-white">{names[4]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">519.456.130</p>
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
                            <p className="opacity-60 ney">3:40</p>
                        </div>
                    </div>
                    {/* namber #6 */}
                    <div onClick={() => toggleAudioPlayer(5)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>6</p>
                            <p className="text-white">{names[5]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">444.369.741</p>
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
                            <p className="opacity-60 ney">3:51</p>
                        </div>
                    </div>
                    {/* namber #7 */}
                    <div onClick={() => toggleAudioPlayer(6)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>7</p>
                            <p className="text-white">{names[6]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">418.852.123</p>
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
                            <p className="opacity-60 ney">4:03</p>
                        </div>
                    </div>
                    {/* namber #8 */}
                    <div onClick={() => toggleAudioPlayer(7)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>8</p>
                            <p className="text-white">{names[7]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">581.741.963</p>
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
                    {/* namber #9 */}
                    <div onClick={() => toggleAudioPlayer(8)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>9</p>
                            <p className="text-white">{names[8]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">181.851.185</p>
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
                            <p className="opacity-60 ney">4:09</p>
                        </div>
                    </div>
                    {/* namber #10 */}
                    <div onClick={() => toggleAudioPlayer(9)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>10</p>
                            <p className="text-white">{names[9]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">165.452.652</p>
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
                    {/* namber #11 */}
                    <div onClick={() => toggleAudioPlayer(10)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>11</p>
                            <p className="text-white">{names[10]}s<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">1.442.365.896</p>
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
                            <p className="opacity-60 ney">4:25</p>
                        </div>
                    </div>
                    {/* namber #12 */}
                    <div onClick={() => toggleAudioPlayer(11)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>12</p>
                            <p className="text-white">{names[11]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">151.521.825</p>
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
                            <p className="opacity-60 ney">3:58</p>
                        </div>
                    </div>
                    {/* namber #13 */}
                    <div onClick={() => toggleAudioPlayer(12)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>13</p>
                            <p className="text-white">{names[12]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">152.852.159</p>
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
                    {/* namber #14 */}
                    <div onClick={() => toggleAudioPlayer(13)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>14</p>
                            <p className="text-white">{names[13]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">852.236.874</p>
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
                            <p className="opacity-60 ney">5:55</p>
                        </div>
                    </div>
                    {/* namber #15 */}
                    <div onClick={() => toggleAudioPlayer(14)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>15</p>
                            <p className="text-white">{names[14]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">851.123.852</p>
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
                            <p className="opacity-60 ney">5:21</p>
                        </div>
                    </div>
                    {/* namber #16 */}
                    <div onClick={() => toggleAudioPlayer(15)} className="conn cursor-pointer mt-5 flex items-center justify-between py-2 px-5 rounded-lg hover:bg-[#272a2c] mx-[3.5%]">
                        <div className="flex items-center gap-10">
                            <p>16</p>
                            <p className="text-white">{names[15]}<br />
                                <span className="opacity-55 text-sm">Lana Del Rey</span></p>
                        </div>
                        <div className="flex  gap-24 cursor-default relative">
                            <p className="opacity-60 repro">621.523.125</p>
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
                            <p className="opacity-60 ney">5:34</p>
                        </div>
                    </div>
                    <img className="mt-5" src={img3} alt="" />
                </div>
                <div className="overflow-hidden fixed z-[1] audicont">
                    {barraAudio === 0 && <AudioPlayer imgaudio={imgaudio[0]} names={names[0]} audio={bornto} onEnded={handleEnded} />}
                    {barraAudio === 1 && <AudioPlayer imgaudio={imgaudio[1]} names={names[1]} audio={races} onEnded={handleEnded} />}
                    {barraAudio === 2 && <AudioPlayer imgaudio={imgaudio[2]} names={names[2]} audio={blue} onEnded={handleEnded2} />}
                    {barraAudio === 3 && <AudioPlayer imgaudio={imgaudio[3]} names={names[3]} audio={games} onEnded={handleEnded2} />}
                    {barraAudio === 4 && <AudioPlayer imgaudio={imgaudio[4]} names={names[4]} audio={dew} onEnded={handleEnded3} />}
                    {barraAudio === 5 && <AudioPlayer imgaudio={imgaudio[5]} names={names[5]} audio={nati} onEnded={handleEnded3} />}
                    {barraAudio === 6 && <AudioPlayer imgaudio={imgaudio[6]} names={names[6]} audio={dark} onEnded={handleEnded4} />}
                    {barraAudio === 7 && <AudioPlayer imgaudio={imgaudio[7]} names={names[7]} audio={radio} onEnded={handleEnded4} />}
                    {barraAudio === 8 && <AudioPlayer imgaudio={imgaudio[8]} names={names[8]} audio={carmen} onEnded={handleEnded5} />}
                    {barraAudio === 9 && <AudioPlayer imgaudio={imgaudio[9]} names={names[9]} audio={man} onEnded={handleEnded5} />}
                    {barraAudio === 10 && <AudioPlayer imgaudio={imgaudio[10]} names={names[10]} audio={summe} onEnded={handleEnded6} />}
                    {barraAudio === 11 && <AudioPlayer imgaudio={imgaudio[11]} names={names[11]} audio={us} onEnded={handleEnded6} />}
                    {barraAudio === 12 && <AudioPlayer imgaudio={imgaudio[12]} names={names[12]} audio={themo} onEnded={handleEnded7} />}
                    {barraAudio === 13 && <AudioPlayer imgaudio={imgaudio[13]} names={names[13]} audio={heori} onEnded={handleEnded7} />}
                    {barraAudio === 14 && <AudioPlayer imgaudio={imgaudio[14]} names={names[14]} audio={chan} onEnded={handleEnded8} />}
                    {barraAudio === 15 && <AudioPlayer imgaudio={imgaudio[15]} names={names[15]} audio={get} />}
                </div>
            </div>
        </div>
    )
}