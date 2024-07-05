import { useState } from "react"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"

export const Music = ({ names, src, art }) => {
    const [icono, setIcono] = useState(true)
    return (
        <div onClick={() => setIcono(!icono)} className="CONTENEDOR cursor-pointer w-[100%] sm-[208px] px-3 pt-2 pb-6 rounded-xl relative  hover:bg-[#1A1A1A] ease-out duration-300">
           <div className="flex flex-col items-center">
           <img className="rounded-lg ora2" src={src} alt="" width={210} />
           </div>
            <div className="flex ml-4 items-center justify-between">
                <p className="font-semibold mt-3 nanda ney">{names}</p>
                <div  className="FLECHA  bg-green-600 hover:bg-[#23dc67] cursor-pointer p-5 rounded-full mt-[-25px] ora1 ">
                    <img className="w-8" src={icono ? (img1) : (img2)} alt="" width={20} />
                </div>
            </div>
            <p className="opacity-50 ml-4 nanda cans">{art}</p>
        </div>
    )
}