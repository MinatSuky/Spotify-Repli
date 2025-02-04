import { useState } from "react"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"

export const Art = ({ names, src }) => {
    const [icono, setIcono] = useState(true)

    return (
        <div className="CONTENEDOR w-[100%] sm-[208px] px-2 pt-2 pb-6 group rounded-xl relative cursor-pointer hover:bg-[#1A1A1A] ease-out duration-300">
            <img className="rounded-full shadow-2" src={src} alt="" width={250} />

            <div className="flex items-center justify-between">
                <p className="mt-3 text-[16px] nanda font-medium">{names}</p>
                <div onClick={() => setIcono(!icono)} className="FLECH bg-green-600 hover:bg-[#23dc67] p-5 rounded-full mt-[-25px] group-hover:mt-[-65px] ora1  opacity-0 group-hover:opacity-100 ease-in-out duration-300 ">
                    <img src={icono ? (img1) : (img2)} alt="" width={25} />
                </div>
            </div>
            <p className="opacity-50 text-sm">Artista</p>
        </div>
    )
}