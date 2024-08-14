import { useState } from "react"
import img1 from "../IMGS/play.png"
import img2 from "../IMGS/pausa.png"

export const Music = ({ names, src, art }) => {
    const [icono, setIcono] = useState(true)
    return (
        <div onClick={() => setIcono(!icono)} className="CONTENEDOR1 cursor-pointer w-[100%] sm-[208px] px-3 pt-2 pb-3 rounded-[6px]  relative my-6 hover:bg-[#222222]  ease-out duration-300 ">
           <div className="">
           <img className="rounded-lg shadow-1 " src={src} alt=""  />
           </div>
            <div className="flex ml-4 items-center justify-between">
                <p className="font-medium mt-3 nanda ne">{names}</p>
                <div  className="FLECHA1 bg-green-600 hover:bg-[#23dc67] p-5 rounded-full absolute top-[160px] right-2 ora1 w-fit">
                    <img className="w-5" src={icono ? (img1) : (img2)} alt="" width={20} />
                </div>
            </div>
            <p className="opacity-50 ml-4 nanda cans">{art}</p>
        </div>
    )
}