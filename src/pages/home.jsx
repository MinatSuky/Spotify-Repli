import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { BarraLate } from "../componentes/barralateral"
import { BarraPrin } from "../componentes/barraprincipal"
import { MenuPrin } from "../componentes/menuprin"



export const Home = () => {

    // Definimos el estado inicial del fondo del contenedor
    const [bgColor, setBgColor] = useState('linear-gradient(0deg, #121212 2%, #222222 79%)');

    const handleMouseOver1 = () => {
        setBgColor('linear-gradient(0deg, #121212 2%,  #082b3a 79%)');
    };


    const handleMouseOver2 = () => {
        setBgColor('linear-gradient(0deg, #121212 2%,  #0b2214 79%)');
    };


    const handleMouseOver3 = () => {
        setBgColor('linear-gradient(0deg, #121212 2%,  #322e06 79%)');
    };


    const handleMouseOver4 = () => {
        setBgColor('linear-gradient(0deg, #121212 2%,  #333333 79%)');
    };


    const handleMouseOver5 = () => {
        setBgColor('linear-gradient(0deg, #121212 2%,  #47001a 79%)');
    };


    const handleMouseOver6 = () => {
        setBgColor('linear-gradient(0deg, #121212 2%,  #2e0000 79%)');
    };



    var settings = {   //carrsel
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
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

    return (
        <div className="padre flex gap-[3px]">
            <div className="padre3 h-[99%] overflow-hidden BARRALATERAL ">
                <BarraLate />
            </div>
            <div className="h-[98.2vh] rounded-lg mt-2  overflow-auto hijo bg-[#121212]">
                <BarraPrin />
                <div  style={{
                background: bgColor,
                transition: 'background 1000ms ease-in-out 100s'

            }} className="pt-[6%] pb-[5%] relative transition-all duration-1000 bg-context">
                    <div className="mx-[2%] grid gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6"  >
                    
                       
                    <a
                                href="#2"
                                className="playlist-item2 mt-5 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
                                data-color="#14792d"
                                
                                onMouseOver={handleMouseOver1} // Evento mouseover
                                 
                            >
                                <div className="h-20 w-20">
                                    <img
                                        src="https://media.pitchfork.com/photos/5e5d895d19382e0008724f89/1:1/w_450%2Cc_limit/YHLQMDLG_Bad%2520Bunny.jpg"
                                        alt="Trance"
                                        className="object-cover h-full w-full shadow-[5px_0_30px_rgba(0,0,0,0.3)]"
                                        
                                    />
                                </div>
                                <div className="font-bold block">
                                    YHLQMDLG
                                </div>
                                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                                    <span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8" >
                                            <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#2"
                                className="playlist-item2 mt-5 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
                                data-color="#14792d"
                                
                                onMouseOver={handleMouseOver2} // Evento mouseover
                                 
                            >
                                <div className="h-20 w-20">
                                    <img
                                        src="https://www.listenspotify.com/uploaded_files/Thf_1682738738.jpeg"
                                        alt="Trance"
                                        className="object-cover h-full w-full shadow-[5px_0_30px_rgba(0,0,0,0.3)]"
                                        
                                    />
                                </div>
                                <div className="font-bold block">
                                    Maluma
                                </div>
                                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                                    <span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8" >
                                            <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                      
                      
                            <a
                                href="#2"
                                className="playlist-item2 mt-5 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
                                data-color="#14792d"
                                
                                onMouseOver={handleMouseOver3} // Evento mouseover
                                 
                            >
                                <div className="h-20 w-20">
                                    <img
                                        src="https://www.bworldonline.com/wp-content/uploads/2021/11/adele.jpg"
                                        alt="Trance"
                                        className="object-cover h-full w-full shadow-[5px_0_30px_rgba(0,0,0,0.3)]"
                                        
                                    />
                                </div>
                                <div className="font-bold block">
                                    Adele
                                </div>
                                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                                    <span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8" >
                                            <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            <a href="#4" className="playlist-item4 mt-5 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" data-color="#7f1d1d" data-astro-transition-scope="astro-5t5pqjm7-18"
                                onMouseOver={handleMouseOver4}
                               ><div className="h-20 w-20"><img src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_4_ap5xnb.jpg" alt="Beatles classNameics" className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" data-astro-transition-scope="astro-ngetq7r3-19" /></div><div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-20">Beatles classNameics</div><div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-21"><span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12"><svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg></span></div></a>
                       
                        
                       <a
                                href="#4"
                                className="playlist-item2 mt-5 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
                                data-color="#14792d"
                                
                                onMouseOver={handleMouseOver5} // Evento mouseover
                                 
                            >
                                <div className="h-20 w-20">
                                    <img
                                        src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_5_erjyb7.jpg"
                                        alt="Trance"
                                        className="object-cover h-full w-full shadow-[5px_0_30px_rgba(0,0,0,0.3)]"
                                        
                                    />
                                </div>
                                <div className="font-bold block">
                                    Electronic Dance
                                </div>
                                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                                    <span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
                                        <svg viewBox="0 0 24 24" className="h-8 w-8" >
                                            <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                            <a href="#6" className="playlist-item6 mt-5 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" data-color="#27272a" data-astro-transition-scope="astro-5t5pqjm7-26"
                                onMouseOver={handleMouseOver6}
                                ><div className="h-20 w-20"><img src="https://cdns-images.dzcdn.net/images/cover/e9d9cb31f0a9fae78b07fbadf893f844/500x500.jpg" alt="Cow songs" className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" data-astro-transition-scope="astro-ngetq7r3-27" /></div><div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-28">Nicky Jam</div><div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-29"><span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12"><svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg></span></div></a>
                       
                    
                    </div>
                </div>

                <div className="mt-[4%] BARRAPRINCIPAL1">
                    <MenuPrin />
                </div>
            </div>
        </div>
    )
}