import {Routes, Route} from 'react-router-dom';

import {SignIn} from '../paginas/pastaSignin/signin.jsx';
import {SignUp} from '../paginas/pastaSignup/signup';

export function AutRotas(){


  return(

    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/registro" element={<SignUp/>} />
    </Routes>
  )
}