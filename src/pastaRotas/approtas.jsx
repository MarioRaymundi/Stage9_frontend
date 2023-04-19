import {Routes, Route} from 'react-router-dom';

import {Nova} from '../paginas/pastaNova/Nova.jsx';
import {Home} from '../paginas/pastaHome/Home.jsx';
import {Detalhes} from '../paginas/pastaDetalhes/Detalhes';
import {Profile} from '../paginas/pastaProfile/profile';

export function AppRotas(){

  return(

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/nova" element={<Nova/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/detalhes/:id" element={<Detalhes/>} />
    </Routes>
  )
}