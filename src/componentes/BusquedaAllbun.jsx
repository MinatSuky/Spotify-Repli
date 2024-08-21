import { useState } from "react";
import AudioPlayer from "./audioPlayer";
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"
import { Footer } from "./footer";

export const BusqAllbun = () => {
    const [icono, setIcono] = useState(true)
    const [cancion, setCancion] = useState("");
    const [canciones, setCanciones] = useState([]);
    const [error, setError] = useState(false);

    function buscarAlbunm(e) {
        e.preventDefault(); // para que no se recargue la página
        if (cancion === "") {
            setError(true); // mostrar mensaje de error
            setTimeout(() => setError(false), 3000); // ocultar mensaje de error después de 3 segundos
            return;
        }
        setError(false); // ocultar mensaje de error si hay una canción
        setCancion("");
        getSong(cancion);
    }

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "d52f200c44mshc9a0680ac7b4197p1d5b66jsnee04f13e4945",
            "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
        },
    };

    async function getSong(cancion) {
        try {
            let url = `https://spotify-web2.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=1&numberOfTopResults=5`;
            let data = await fetch(url, options);
            let res = await data.json();
            setCanciones(res.tracks.items);
            console.log(res);
        } catch (error) {
            console.log(`ups... error:${error}`);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-between h-[100vh] mt-10">
                <div className="flex flex-col justify-center items-center mt-10">
                    <form className="flex flex-col" onSubmit={buscarAlbunm}>
                        <input
                            type="text"
                            value={cancion}
                            placeholder="Que quieres escuchar..."
                            onChange={(e) => setCancion(e.target.value)}
                            className="px-8 py-2 rounded-lg mt-4  hover:bg-zinc-900"
                        />
                        <button
                            type="submit"
                            className="mt-2 py-1 rounded-lg bg-green-800 transition ease-in-out hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50"
                        >
                            Buscar
                        </button>
                    </form>
                    {error && (
                        <p className="text-red-500 mt-2">Debes ingresar algo</p>
                    )}
                </div>
                <div onClick={() => setIcono(!icono)} className="flex justify-center gap-5 flex-wrap mt-5">
                    {canciones.map((cancione, index) => (
                        <div key={index}>
                            <div className="flex flex-col items-center w-[200px] relative group">
                                <img className="rounded-lg" src={cancione.data.albumOfTrack.coverArt.sources[0].url} width={180} alt="foto" />
                                <h3 className="text-start ml-8 nanda mt-2 text-white font-medium">{cancione.data.name}</h3>
                                <h4 className="nanda opacity-75 text-start ml-8">{cancione.data.artists.items[0].profile.name}</h4>
                                <div className="FLECH1 bg-[#23dc67] p-5 rounded-full absolute top-[150px] hover:scale-110 group-hover:top-[130px] right-2 ora1 w-fit opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                                    <img className="w-5" src={icono ? (img1) : (img2)} alt="" width={20} />
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <Footer />
                </div>
            </div>
        </>
    );
};

