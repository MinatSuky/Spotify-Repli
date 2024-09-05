import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Art } from "./artista";
import { Link } from "react-router-dom";
import lanaR from "../IMGS/lanaaperfil.jpeg"
import arca from "../IMGS/Arcanperfil.jpeg"
import bil from "../IMGS/bil.jpeg"
import the from "../IMGS/thewperfil.jpeg"
import bat from "../IMGS/batperfil.jpeg"
import shak from "../IMGS/shakiperfil.jpg"
import lue from "../IMGS/love.jpeg"
import wey from "../IMGS/wey.jpeg"
import dey from "../IMGS/dey.jpeg"
import judas from "../IMGS/judas.jpeg"
import vio from "../IMGS/violin.jpeg"
import your from "../IMGS/your.jpeg"
import shaa from "../IMGS/shaa.jpeg"
import yonaa from "../IMGS/yona.jpeg"
import mal from "../IMGS/mal.jpeg"
import me from "../IMGS/me.jpeg"
import vez from "../IMGS/vez.jpeg"
import rihana from "../IMGS/rihana.jpeg"
import daily2 from "../IMGS/daily2.jpeg"
import daily3 from "../IMGS/daily3.jpeg"
import daily4 from "../IMGS/daily 4.jpeg"
import daily5 from "../IMGS/daily5.jpeg"
import daily6 from "../IMGS/daily6.jpeg"

import Radio1 from "../IMGS/radio.jpeg"
import Radio2 from "../IMGS/radio2.jpeg"
import Radio3 from "../IMGS/radio3.jpeg"
import Radio4 from "../IMGS/radio4.jpeg"
import Radio5 from "../IMGS/radio5.jpeg"
import Radio6 from "../IMGS/radio6.jpeg"

import summe from "../audio/random/i wanna be yours - dramatic violin interlude (1).mp3"
import wanna from "../audio/random/Arctic Monkeys - I Wanna Be Yours (1).mp3"
import beautiful from "../audio/random/David Kushner - Daylight (Official Music Video) (1).mp3"
import say from "../audio/random/Arctic Monkeys - Do I Wanna Know (Official Video) (1).mp3"
import west from "../audio/random/The Neighbourhood - Sweater Weather (Official Video) (1).mp3"
import games from "../audio/random/Lady Gaga - Judas (Lyrics) (1).mp3"
import love from "../audio/random/I Love You So.mp3"
import ciega from "../audio/random/Ciega, Sordomuda.mp3"
import yona from "../audio/random/Bad Bunny - Yonaguni.mp3"
import maldicion from "../audio/random/Nena Maldicion.mp3"
import feel from "../audio/random/Trueno - FEEL ME.mp3"
import rara from "../audio/random/Rara Vez.mp3"
import { Music } from "./mushome";
import { useState } from "react";
import AudioPlayer from "./audioPlayer";
import { Footer } from "./footer";
import { Seccion1 } from "./seccion1";


export const MenuPrin = () => {

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
        setBarraAudio(10 === barraAudio ? 11 : null);
    };

    const names = ["Lana Del Rey", "Arcangel", "Billie Eilish", "The weeknd", "Bad bunny", "Shakira",
        "I Wanna by Yours", "DayLigth", "Do I Wanna Know?", "Sweater Weather", "Judas", "I Love You So", "I Wanna by Yours (Violin)"
        , "Ciega, Sordomuda", "Yonaguni", "Nena Maldicion", "FEEL ME??", "Rara Vez"]
    const art = ["Drematic Violin", "David Kushner", "Arctic Monkeys", "The Neighbourhood", "Lady Gaga", "The Walters"
        , "Shakira", "Bad bunny", "Paulo Londra ft Lenny", "TRUENO", "Milo j"
    ]


    return (
        <div className="conteiner flex flex-col text-white">
            <div>
                <p className="mx-[2%]  font-semibold text-2xl text-white ">For You</p>
                <div className="mx-[1%] flex gap-2 justify-center">
                    <Slider className="sladerhome" {...settings}>
                        <div className="w-[100%] ">
                            <Music src={rihana} art={"Rihanna, Lady Gaga, adele,"} art1={"Carlos y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={daily2} art={"Dario, Lana Del Rey"} art1={"Bat Bunny y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={daily3} art={"Castillas, Brack, Eren"} art1={"Lady Gaga y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={daily4} art={"Eminem, SZA, metro,"} art1={"Martha y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={daily5} art={"Dario, Lana Del Rey, marco"} art1={"CHIBITA y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={daily6} art={"Omar, Adale, The Weeknd"} art1={"Dairo y mas"} />
                        </div>
                    </Slider>
                </div>
                <p className="mx-[2%] font-semibold text-2xl mb-3 text-white">Artistas Recomendados</p>
                <div className="CONT mx-[2%] flex gap-2 justify-center">
                    <Slider className="sladerhome" {...settings}>
                        <Link to={'/LanaDelRey'}>
                            <Art names={names[0]} src={lanaR} />
                        </Link>
                        <Link to={'/Arcangel'}>
                            <Art names={names[1]} src={arca} />
                        </Link>
                        <Link to={'/Batbonny'}>
                            <Art names={names[4]} src={bat} />
                        </Link>
                        <Link to={'/Shakira'}>
                            <Art names={names[5]} src={shak} />
                        </Link>
                        <Link to={'/Billie Eilish'}>
                            <Art names={names[2]} src={bil} />
                        </Link>
                        <Link to={'/Theweeknd'}>
                            <Art names={names[3]} src={the} />
                        </Link>
                    </Slider>
                </div>
                <p className="mx-[2%] mt-5 font-semibold text-2xl text-white">Podria Gustarte...</p>
                <div className="mx-[1%] flex gap-2 justify-center">
                    <Slider className="sladerhome " {...settings}>
                        <div onClick={() => toggleAudioPlayer(0)} className="w-[100%] ">
                            <Music names={names[6]} src={your} art={art[2]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(1)} className="w-[100%] ">
                            <Music names={names[7]} src={dey} art={art[1]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(2)} className="w-[100%] ">
                            <Music names={names[8]} src={your} art={art[2]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(3)} className="w-[100%] ">
                            <Music names={names[9]} src={wey} art={art[3]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(4)} className="w-[100%] ">
                            <Music names={names[10]} src={judas} art={art[4]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(5)} className="w-[100%] ">
                            <Music names={names[11]} src={lue} art={art[5]} />
                        </div>

                    </Slider>
                </div>
                <p className="mx-[2%]  font-semibold text-2xl text-white ">Populares</p>
                <div className="mx-[1%] flex gap-2 justify-center">
                    <Slider className="sladerhome" {...settings}>
                        <div onClick={() => toggleAudioPlayer(6)} className="w-[100%] ">
                            <Music names={names[12]} src={vio} art={art[0]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(7)} className="w-[100%] ">
                            <Music names={names[13]} src={shaa} art={art[6]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(8)} className="w-[100%] ">
                            <Music names={names[14]} src={yonaa} art={art[7]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(9)} className="w-[100%] ">
                            <Music names={names[15]} src={mal} art={art[8]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(10)} className="w-[100%] ">
                            <Music names={names[16]} src={me} art={art[9]} />
                        </div>
                        <div onClick={() => toggleAudioPlayer(11)} className="w-[100%] ">
                            <Music names={names[17]} src={vez} art={art[10]} />
                        </div>
                    </Slider>
                </div>
                <p className="mx-[2%]  font-semibold text-2xl text-white ">Emisoras Populares</p>
                <div className="mx-[1%] flex gap-2 justify-center">
                    <Slider className="sladerhome" {...settings}>
                        <div className="w-[100%] ">
                            <Music src={Radio1} art={"con le andariego, joaquin"} art1={"Guiller,Dario y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={Radio2} art={"con le andariego, joaquin"} art1={"Guiller,Dario y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={Radio3} art={"con le andariego, joaquin"} art1={"Guiller,Dario y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={Radio4} art={"con le andariego, joaquin"} art1={"Guiller,Dario y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={Radio5} art={"con le andariego, joaquin"} art1={"Guiller,Dario y mas"} />
                        </div>
                        <div className="w-[100%] ">
                            <Music src={Radio6} art={"con le andariego, joaquin"} art1={"Guiller,Dario y mas"} />
                        </div>
                    </Slider>
                </div>

                <Footer />
            </div>

            <div className="overflow-hidden fixed z-20 audicont">
                {barraAudio === 0 && <AudioPlayer imgaudio={your} names={names[6]} art={art[2]} audio={wanna} onEnded={handleEnded} />}
                {barraAudio === 1 && <AudioPlayer imgaudio={dey} names={names[7]} art={art[1]} audio={beautiful} onEnded={handleEnded} />}
                {barraAudio === 2 && <AudioPlayer imgaudio={your} names={names[8]} art={art[2]} audio={say} onEnded={handleEnded2} />}
                {barraAudio === 3 && <AudioPlayer imgaudio={wey} names={names[9]} art={art[3]} audio={west} onEnded={handleEnded2} />}
                {barraAudio === 4 && <AudioPlayer imgaudio={judas} names={names[10]} art={art[4]} audio={games} onEnded={handleEnded3} />}
                {barraAudio === 5 && <AudioPlayer imgaudio={lue} names={names[11]} art={art[5]} audio={love} onEnded={handleEnded3} />}
                {barraAudio === 6 && <AudioPlayer imgaudio={vio} names={names[12]} art={art[0]} audio={summe} onEnded={handleEnded4} />}
                {barraAudio === 7 && <AudioPlayer imgaudio={shaa} names={names[13]} art={art[6]} audio={ciega} onEnded={handleEnded4} />}
                {barraAudio === 8 && <AudioPlayer imgaudio={yonaa} names={names[14]} art={art[7]} audio={yona} onEnded={handleEnded5} />}
                {barraAudio === 9 && <AudioPlayer imgaudio={mal} names={names[15]} art={art[8]} audio={maldicion} onEnded={handleEnded5} />}
                {barraAudio === 10 && <AudioPlayer imgaudio={me} names={names[16]} art={art[9]} audio={feel} onEnded={handleEnded6} />}
                {barraAudio === 11 && <AudioPlayer imgaudio={vez} names={names[17]} art={art[10]} audio={rara} />}
            </div>


        </div>
    )
}
