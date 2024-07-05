import React, { useRef, useState, useEffect } from 'react';

const AudioPlayerNex = ({ audio, names, imgaudio, onEnded }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // estado para el boton de reproduccion
    const [currentTime, setCurrentTime] = useState(0); // estado para el timpo recorrido de la cancion
    const [duration, setDuration] = useState(0); // estado para la duracion de la cancion
    const [volume, setVolume] = useState(1); // estado para el volumen
    const [VolumeBar, setVolumeBar] = useState(false); // Estado para controlar la visibilidad de la barra de volumen

    useEffect(() => {
        const audio = audioRef.current;

        const TiempoActualizado = () => {
            setCurrentTime(audio.currentTime);
        };

        const updateDuration = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', TiempoActualizado);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded); // Agrega el evento 'ended'

        // Reproducir automáticamente cuando se carga el componente
        if (audio) {
            audio.play();
            setIsPlaying(true);
        }

        return () => {
            audio.removeEventListener('timeupdate', TiempoActualizado);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', onEnded); // Limpia el evento 'ended'
        };
    }, [onEnded]);

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        const seekTime = (e.target.value / 100) * audio.duration;
        audio.currentTime = seekTime;
        setCurrentTime(seekTime); // Actualiza el tiempo actual para que la UI refleje el cambio
    };

    const handleVolumeChange = (e) => {
        const audio = audioRef.current;
        const newVolume = e.target.value;
        audio.volume = newVolume;
        setVolume(newVolume);
    };

    const BarraVolume = () => {
        setVolumeBar(!VolumeBar);
    };

    const [proxi,setProxi] = useState(false)

    return (
        <div className="audio-container px-6 py-2">
            <div>
                <audio className="audio-element" ref={audioRef} autoPlay onEnded={onEnded}>
                    <source src={audio} type="audio/mpeg" />
                    naa...
                </audio>
                <div className="audio-controls flex gap-4">
                    <div className="flex flex-col mb-10">
                        <div className='flex justify-center items-center gap-5'>
                        <img className="rounded-lg border ora2" src={imgaudio} alt="" width={50} />
                        { proxi ?  <div className='flex justify-between font-extrabold text-xl'>
                           <p className='floo py-1 px-3 rounded-md ney'> PROXIMAMENTE</p>
                        </div>  :  `${names}`
                         }                       
                            <button onClick={() => setProxi(!proxi)} >
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                          </button>
                        </div>
                       
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AudioPlayerNex;
