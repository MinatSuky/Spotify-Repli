import { useState } from "react";
import AudioPlayer from "./audioPlayer";

export const BusqAllbun = () => {
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

    const [barraAudio, setBarraAudio] = useState(false)

    return (
        <>
            <div className="flex flex-col justify-between h-[83.1vh] mt-10">
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
                <div className="flex justify-center gap-5 flex-wrap mt-5">
                    {canciones.map((cancione, index) => (
                        <div key={index}>
                            <div className="flex flex-col items-center w-[300px] ">
                                <img className="rounded-2xl" src={cancione.data.albumOfTrack.coverArt.sources[0].url} alt="" />
                                <h3 className="text-center nanda ">{cancione.data.name}</h3>
                                <a href={cancione.data.uri}>
                                <button className="bg-green-500 py-2 px-4 rounded-lg">Play</button>
                                </a>
                               
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="overflow-hidden fixed audicont">
                        {barraAudio && <AudioPlayer setBarraAudio={setBarraAudio} />}
                    </div>
                </div>
            </div>
        </>
    );
};

