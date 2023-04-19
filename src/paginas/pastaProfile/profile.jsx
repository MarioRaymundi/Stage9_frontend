import { useState } from "react";
import { FiArrowLeft, FiUser,FiMail,FiLock, FiCamera } from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../../pastaHooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Input } from "../../pastaComponentes/Input";
import { Botao } from "../../pastaComponentes/Botao";
import { Container, Form, Avatar} from "./styles";
import {api} from "../../pastaServico/api"




export function Profile(){
  const {crachaUser, alteraProfile} = useAuth()
  const irPara = useNavigate()
  const [nome, setNome] = useState(crachaUser.nome)
  const [email, setEmail] = useState(crachaUser.email)
  const [senhaAtual, setSenhaAtual] = useState()
  const [senhaNova, setSenhaNova] = useState()

  const avatarUrl = crachaUser.avatar ? `${api.defaults.baseURL}/files/${crachaUser.avatar}` : avatarPlaceholder;
  const [avatar,setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  //----------------------------------------
  async function lidarProfile(){
    const novosDadosUs = {
      nome,
      email,
      senha: senhaNova,
      senhaVelha: senhaAtual
    }

    //assign, atualiza o crachaUser com os novos dados
    const dadosUs = Object.assign(crachaUser,novosDadosUs)
    await alteraProfile(dadosUs,avatarFile)
  };

  //-----------------------------------------------

  function lidarComAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
  //--------------------------------------------

  function lidarVotar(){
    irPara(-1)
  }
  //---------------------------------------------



  return(

    <Container>
      <header>
        <button type="button" onClick={lidarVotar}>
          <FiArrowLeft/>
        </button>
      </header>

      <Form>
        <Avatar>
          <img 
          // src="https://github.com/MarioRaymundi.png" 
          src={avatar}
          alt="foto do usuario" 
          />
          <label htmlFor="avatar"> 
            <FiCamera/>
            <input 
              id="avatar"
              type="file"
              onChange={lidarComAvatar}
            />
          </label>

        </Avatar>


        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <Input
          placeholder="E-Mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setSenhaAtual(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setSenhaNova(e.target.value)}
        />

        <Botao titulo="Salvar" onClick={lidarProfile}/>

      </Form>

    </Container>
  )
}