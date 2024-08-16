import { useState } from "react";

export const Seccion1 = () => {


      // Definimos el estado inicial del fondo del contenedor
  const [bgColor, setBgColor] = useState('linear-gradient(0deg, #121212 65%, #222222 98%)');

  // Manejador para el evento mouseover
  const handleMouseOver = () => {
    setBgColor('linear-gradient(0deg, #14532d 65%, #22c55e 98%)');
  };

  // Manejador para el evento mouseout
  const handleMouseOut = () => {
    setBgColor('linear-gradient(0deg, #121212 65%, #222222 98%)');
  };

    return (


        
        <div className="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6" style={{ background: bgColor }} >
            <a href="#1" className="playlist-item1 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" data-color="#134e4a" data-astro-transition-scope="astro-5t5pqjm7-2">
                <div className="h-20 w-20">
                    <img src="https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0" alt="Electronic Party" className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" data-astro-transition-scope="astro-ngetq7r3-3" />
                </div>
                <div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-4">
                YHLQMDLG
                </div>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-5">
                    <span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
                        <svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z">
                        </path></svg>
                    </span>
                </div>
            </a>
            <a 
        href="#2" 
        className="playlist-item2 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" 
        data-color="#14532d" 
        data-astro-transition-scope="astro-5t5pqjm7-10"
        onMouseOver={handleMouseOver} // Evento mouseover
        onMouseOut={handleMouseOut}   // Evento mouseout
      >
        <div className="h-20 w-20">
          <img 
            src="https://musictech.com/wp-content/uploads/2021/11/Adele-30-Cover@2000x1500.jpg" 
            alt="Trance" 
            className="object-cover h-full w-full shadow-[5px_0_30px_rgba(0,0,0,0.3)]" 
            data-astro-transition-scope="astro-ngetq7r3-11" 
          />
        </div>
        <div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-12">
          Trance
        </div>
        <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-13">
          <span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12">
            <svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play">
              <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
            </svg>
          </span>
        </div>
      </a>
            <a href="#3" className="playlist-item3 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" data-color="#871b48" data-astro-transition-scope="astro-5t5pqjm7-14"><div className="h-20 w-20"><img src="https://musictech.com/wp-content/uploads/2021/11/Adele-30-Cover@2000x1500.jpg" alt="Trap Vibes" className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" data-astro-transition-scope="astro-ngetq7r3-15" /></div><div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-16">Trap Vibes</div><div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-17"><span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12"><svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg></span></div></a>
            <a href="#4" className="playlist-item4 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" data-color="#7f1d1d" data-astro-transition-scope="astro-5t5pqjm7-18"><div className="h-20 w-20"><img src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_4_ap5xnb.jpg" alt="Beatles classNameics" className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" data-astro-transition-scope="astro-ngetq7r3-19" /></div><div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-20">Beatles classNameics</div><div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-21"><span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12"><svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg></span></div></a>
            <a href="#5" className="playlist-item5 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" data-color="#831843" data-astro-transition-scope="astro-5t5pqjm7-22"><div className="h-20 w-20"><img src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_5_erjyb7.jpg" alt="Electronic Dance" className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" data-astro-transition-scope="astro-ngetq7r3-23" /></div><div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-24">Electronic Dance</div><div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-25"><span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12"><svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg></span></div></a>
            <a href="#6" className="playlist-item6 flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50" data-color="#27272a" data-astro-transition-scope="astro-5t5pqjm7-26"><div className="h-20 w-20"><img src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776474/spotify-astro/R-15112137-1586815179-1911_fsyl58.jpg" alt="Cow songs" className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" data-astro-transition-scope="astro-ngetq7r3-27" /></div><div className="font-bold block" data-astro-transition-scope="astro-ex6xpcej-28">Cow songs</div><div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-transition-scope="astro-ssgyf5s4-29"><span className="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-12 w-12"><svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:play"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg></span></div></a>

        </div>
        
    )

}