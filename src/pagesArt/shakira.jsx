import { ShakPerfil } from "../compoArt/shakperfil"
import { BarraLate } from "../componentes/barralateral"

export const Shak = () => {
    return(
        <div className="padre flex gap-[3px]">
            <div className="padre3 w-[23%] h-[100%] overflow-hidden  BARRALATERAL">
                <BarraLate />
            </div>
            <div className="h-[99vh] bg-[#121212] rounded-lg mt-1 overflow-auto hijo">
               <ShakPerfil/>
            </div>
        </div>
    )
}