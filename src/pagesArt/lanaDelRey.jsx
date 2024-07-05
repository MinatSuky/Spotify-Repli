
import { LanaPerfil } from "../compoArt/lanaPerfil"
import { BarraLate } from "../componentes/barralateral"

export const Lana = () => {
    return (
        <div className="padre flex gap-[3px]">
            <div className="padre3 w-[23%] h-[100%] overflow-hidden  BARRALATERAL">
                <BarraLate />
            </div>
            <div className="h-[99vh] bg-[#121212] rounded-lg mt-1 overflow-auto hijo">
                <LanaPerfil/>
            </div>
        </div>
    )
}