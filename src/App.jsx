import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Busqueda } from './pages/busqueda'
import { Lana } from './pagesArt/lanaDelRey'
import { Arca } from './pagesArt/arcangel'
import { Adele } from './pagesArt/adele'
import { Thew } from './pagesArt/theweeknd'
import { Bat } from './pagesArt/batbonny'
import { Shak } from './pagesArt/shakira'
import { Born } from './album-lana/bornToDie'
import { Ultra } from './album-lana/Ultraviolence'
import { Lust } from './album-lana/Lust for Life'
import { Norman } from './album-lana/Norman Fucking Rockwell!'
import { Know } from './album-lana/know'
import { Fenomeno } from './album-arca/fenomeno'
import { Historias } from './album-arca/historias'
import { Ares } from './album-arca/ares'
import { Losfav } from './album-arca/losfavoritos'
import { Elegan } from './album-arca/elegancias'
import { Login } from './componentes/login'
import { Regis } from './componentes/regis'






function App() {




  return (
    <>
   
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/registro' element={<Regis/>} />
         <Route path='/login' element={<Login/>} />
        <Route path='/allbum' element={<Busqueda/>} />
        <Route path='/LanaDelRey' element={<Lana/>} />
        <Route path='/Arcangel' element={<Arca/>} />
        <Route path='/Billie Eilish' element={<Adele/>} />
        <Route path='/Theweeknd' element={<Thew/>} />
        <Route path='/Batbonny' element={<Bat/>} />
        <Route path='/Shakira' element={<Shak/>} />
        <Route path='/BornToDie' element={<Born/>} />
        <Route path='/Ultraviolence' element={<Ultra/>} />
        <Route path='/Lustforlife' element={<Lust/>} />
        <Route path='/NormanFuckingRockwell!' element={<Norman/>} />
        <Route path='/DidYouKnowThatThere’saTunnelUnderOceanBlvd' element={<Know/>} />
        <Route path='/Fenomeno' element={<Fenomeno/>} />
        <Route path='/Historias' element={<Historias/>} />
        <Route path='/Ares' element={<Ares/>} />
        <Route path='/LosFavoritos' element={<Losfav/>} />
        <Route path='/Sentimiento,Elegancia y Más maldad' element={<Elegan/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
