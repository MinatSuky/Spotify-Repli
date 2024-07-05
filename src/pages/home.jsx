

import { BarraLate } from "../componentes/barralateral"
import { BarraPrin } from "../componentes/barraprincipal"
import { MenuPrin } from "../componentes/menuprin"



export const Home = () => {


    return (
        <div className="padre flex gap-[3px]">
            <div className="padre3 w-[23%] h-[100%] overflow-hidden  BARRALATERAL">
                <BarraLate />
            </div>
            <div className="h-[99vh] bg-[#121212] rounded-lg mt-1 overflow-auto hijo">
                <BarraPrin bgColor="#121212"/>
                <div className="mt-[6%] BARRAPRINCIPAL1">
                    <MenuPrin/>
                </div>
            </div>
        </div>
    )
}