import React, { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ audio, names, imgaudio, onEnded }) => {
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
        <div className="audio-container px-6 ">
            <audio className="audio-element" ref={audioRef} autoPlay onEnded={onEnded}>
                <source src={audio} type="audio/mpeg" />
                naa...
            </audio>
            <div className="audio-controls flex gap-4">
                <div className="progress-container">
                    <div className='repro2'>
                        <img className="rounded-lg border ora2" src={imgaudio} alt="" width={50} />
                        <p className='ney mr-5'>{names}</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="m14 8l-3.332 3.02c-.89.807-.89 1.153 0 1.96L14 16" /><circle cx="12" cy="12" r="10" /></g></svg>
                        </p>
            
                        <button onClick={togglePlayPause}>
                            {isPlaying ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22"><path fill="#000000" d="M6 4h3v14H6zm7 14V4h3v14z"/></svg>
                            ) : (
                                <svg className='p-1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 898 1026"><path fill="#000000" d="m62.397 8l819 467q16 9 16 39.5t-16 37.5l-819 467q-12 8-30 5.5t-32-17.5V22q31-34 62-14"/></svg>
                            )}
                        </button>
                        
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ffffff"><path d="m10 8l3.332 3.02c.89.807.89 1.153 0 1.96L10 16" /><circle cx="12" cy="12" r="10" /></g></svg>
                        </p>
                    </div>
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

                    <div className='voll'>
                        <svg className='volumen' onClick={toggleVolumeBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="fffff" fill="none">
                            <path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {showVolumeBar && (
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="volume-bar"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
