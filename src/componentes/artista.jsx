import { useState } from "react"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"

export const Art = ({ names, src }) => {
    const [icono, setIcono] = useState(true)

    return (
        <div className="CONTENEDOR w-[100%] sm-[208px] px-2 pt-2 pb-6 rounded-xl relative cursor-pointer hover:bg-[#1A1A1A] ease-out duration-300">
            <img className="rounded-full ora" src={src} alt="" width={250} />

            <div className="flex items-center justify-between">
                <p className="font-semibold mt-3 ney nanda">{names}</p>
                <div onClick={() => setIcono(!icono)} className="FLECHA bg-green-600 hover:bg-[#23dc67] p-5 rounded-full mt-[-45px] ora1 ">
                    <img src={icono ? (img1) : (img2)} alt="" width={25} />
                </div>
            </div>
            <p className="opacity-50 ney">Artista</p>
        </div>
    )
}