import { Container,Form, Background } from "./styles";
import {Input} from "../../pastaComponentes/Input";
import {Botao} from "../../pastaComponentes/Botao";
import {FiMail, FiLock} from "react-icons/fi"
import {Link} from "react-router-dom";
import {useAuth} from "../../pastaHooks/auth"
import { useState } from "react";

export function SignIn(){
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const {authSignin} = useAuth()

  function lidarSignin(){
    authSignin(email,senha)
  };



  return(
    <Container>
      <Form>
        <h1>Rocket Notas</h1>
        <p>Aplicação para gerenciar e salvar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="Text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setSenha(e.target.value)}

        />

        <Botao titulo="Entrar"  onClick={lidarSignin}/>

        <Link to="/registro" >
          Criar conta
        </Link>
          
      </Form>

      <Background/>
      
    </Container>
  )
}