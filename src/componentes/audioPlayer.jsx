import React, { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ audio, names, imgaudio, onEnded, art }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1); // Añadimos un estado para el volumen
    const [showVolumeBar, setShowVolumeBar] = useState(false); // Estado para controlar la visibilidad de la barra de volumen

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
        };

        const updateDuration = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded); // Agrega el evento 'ended'

        // Reproducir automáticamente cuando se carga el componente
        if (audio) {
            audio.play();
            setIsPlaying(true);
        }

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
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

    const toggleVolumeBar = () => {
        setShowVolumeBar(!showVolumeBar);
    };

    return (
        <div className="audio-container px-4 ">
            <audio className="audio-element" ref={audioRef} autoPlay onEnded={onEnded}>
                <source src={audio} type="audio/mpeg" />
                naa...
            </audio>
            <div className="audio-controls gap-4">
               <div>
               <div className="progress-container">
                    <div className='repro2'>
                        <img className="rounded borde ora2" src={imgaudio} alt="" width={60} />
                       <div>
                        <p className='mr-10 font-medium nanda1'>{names}</p>
                         <p className='mr-10 opacity-40 artt'>{art}</p></div>
                    </div>
                </div>
               </div>


                <div className='flex flex-col items-center w-[80vh]'>
                    <div className='flex items-center gap-4'>
                    <svg className='opacity-60 hover:opacity-100 duration-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="#ffffff" d="m17 4l4 4l-4 4V9h-4V7h4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M6 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m1 10h4v-2H7v-3l-4 4l4 4zm7 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1"/></svg>
                        <p className='opacity-60 hover:opacity-100 duration-200 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#ffffff" d="m18 17l-8-5l8-5zM6 7h3v10H6z" /></svg>
                        </p>

                        <button onClick={togglePlayPause}>
                            {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#000000" d="M14 19V5h4v14zm-8 0V5h4v14z" /></svg>
                            ) : (
                                <svg className='p-1' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 240 384"><path fill="#000000" d="m0 43l235 149L0 341z" /></svg>
                            )}
                        </button>

                        <p className='opacity-60 hover:opacity-100 duration-200 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#ffffff" d="m6 17l8-5l-8-5zM18 7h-3v10h3z" /></svg>
                        </p>
                        <svg className='opacity-60 hover:opacity-100 duration-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47M6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47m1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03zM13 4.07V1L8.45 5.55L13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93"/></svg>
                    </div>
                    <div className='repro3'>
                        <span className="time">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={(currentTime / duration) * 100}
                            onChange={handleSeek}
                            className="progress-bar"
                        />
                        <span className="time">{formatTime(duration)}</span>

                        
                    </div>
                </div>
                <div className='voll flex gap-5 relative'>
                <svg  className='voll opacity-60 hover:opacity-100 duration-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><g fill="#ffffff"><path d="M15.415 18.53a1.47 1.47 0 1 1-2.94 0a1.47 1.47 0 0 1 2.94 0"/><path d="M19.36 3.662a2.227 2.227 0 0 0-3.157-.09a2.227 2.227 0 0 0-.124 3.12a7.4 7.4 0 0 0-1 3.164l-.012-.013L1.8 25.394a3.381 3.381 0 0 0 2.579 5.568c.733 0 1.446-.24 2.029-.685l16.299-12.334l-.005-.005a7.4 7.4 0 0 0 3.21-.808l.14.148c.85.901 2.255.94 3.155.092c.906-.842.94-2.26.093-3.158l-.194-.205a7.47 7.47 0 0 0-9.72-10.317zm-4.218 9.175l.492.522a7.5 7.5 0 0 0 3.595 3.817l.494.524L5.199 28.689a1.377 1.377 0 0 1-1.874-2zm1.747-8.538c.5-.471 1.273-.45 1.743.049l9.94 10.55a1.227 1.227 0 0 1-.046 1.74l-.003.003c-.5.472-1.274.45-1.743-.049l-9.94-10.55c-.472-.5-.45-1.273.049-1.743"/></g></svg>
                            <svg  className='voll opacity-60 hover:opacity-100 duration-200 cursor-pointer' onClick={toggleVolumeBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="fffff" fill="none">
                                <path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg  className='voll opacity-60 hover:opacity-100 duration-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M4 19.999q-.144 0-.286-.042A1 1 0 0 1 3 18.999v-1a9.98 9.98 0 0 1 8-9.796V6.499c0-.534.208-1.036.585-1.414c.756-.757 2.075-.756 2.829-.001l6.288 6.203a.996.996 0 0 1 0 1.424l-6.293 6.207c-.746.746-2.067.751-2.823-.005A2 2 0 0 1 11 17.499v-1.437c-2.495.201-4.523.985-6.164 3.484a1 1 0 0 1-.836.453m8-5.989l1-.01v3.499l5.576-5.5L13 6.503V10s-.384-.004-.891.052a7.98 7.98 0 0 0-6.892 6.08C7.338 14.404 9.768 14.066 12 14.01" stroke="currentColor" strokeWidth="0.01" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <svg  className='voll opacity-60 hover:opacity-100 duration-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="#ffffff" d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4M100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4m116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4"/></svg>
                          
                           {showVolumeBar && (
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="volume-bar absolute -bottom-7"
                                />
                            )}
                           
                        </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
