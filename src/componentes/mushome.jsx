import { useState } from "react"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"

export const Music = ({ names, src, art, art1 }) => {
    const [icono, setIcono] = useState(true)
    return (
        <div onClick={() => setIcono(!icono)} className="CONTENEDOR1 group cursor-pointer w-[100%] sm-[208px] px-3 pt-2 pb-3 rounded-[6px]  relative my-6 hover:bg-[#222222]  ease-out duration-300 ">
           <div className="">
           <img className="rounded-lg shadow-1 " src={src} alt=""  />
           </div>
            <div className="flex ml-1 items-center justify-between">
                <p className="font-medium mt-3 nanda ne">{names}</p>
                <div  className="FLECH bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[170px] group-hover:top-[150px] right-2 ora1 w-fit opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                    <img className="w-5" src={icono ? (img1) : (img2)} alt="" width={20} />
                </div>
            </div>
            <p className="opacity-50 ml-1 nanda cans">{art}</p>
            <p className="opacity-50 ml-1 nanda cans">{art1}</p>
        </div>
    )
}