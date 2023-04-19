import { BrowserRouter } from "react-router-dom";
import {useAuth} from "../pastaHooks/auth"

import {AppRotas} from "./approtas";
import {AutRotas} from "./autRotas";

export function Rotas(){
  const {crachaUser} = useAuth();

  // console.log(crachaUser);

  return(
    <BrowserRouter>
      {crachaUser ? <AppRotas/> :<AutRotas/>}
    </BrowserRouter>
  )
}