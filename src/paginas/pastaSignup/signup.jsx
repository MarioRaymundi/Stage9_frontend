import { useState } from "react";
import { Container,Form, Background } from "./styles";
import {Input} from "../../pastaComponentes/Input";
import {Botao} from "../../pastaComponentes/Botao";
import {FiMail, FiLock,FiUser} from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom";

import {api} from "../../pastaServico/api"



export function SignUp(){
  const navigate = useNavigate()
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSignUp(){
    // console.log(nome, email, senha)
    if(!nome || !email || !senha){
      return alert("Preencha todos os campos.")
    }

    api.post("/usuarios",{nome, email, senha})
    .then(
      alert("Usario cadastrado com sucesso."),
      navigate("/") )
    .catch( (er) => {
      if(er.response){
        alert(er.response.data.message)
      }else{
        alert("Não foi possivel cadastrar.")
      }
    })
  }

  return(

    <Container>

      <Background/>

      <Form>
        <h1>Rocket Notas</h1>
        <p>Aplicação para gerenciar e salvar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="Text"
          icon={FiUser}
          onChange = {e => setNome(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="Text"
          icon={FiMail}
          onChange = {e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange = {e => setSenha(e.target.value)}
        />

        <Botao titulo="Cadastrar" onClick={handleSignUp} />
       

        <Link to="/">
          Ir para o Login
        </Link>
          
      </Form>

      
    </Container>
  )
}