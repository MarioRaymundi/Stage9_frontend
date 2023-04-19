import {RiShutDownLine} from "react-icons/ri"
import { Container,Profile,Logout } from "./styles";
import { useAuth } from "../../pastaHooks/auth";
import {api} from"../../pastaServico/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";



export function Header(){
  const {authSignout, crachaUser} = useAuth()
  const avatarUrl = crachaUser.avatar ? `${api.defaults.baseURL}/files/${crachaUser.avatar}` : avatarPlaceholder;


  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl}
        alt="Foto do Usuario"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Mario Raymundi</strong>
        </div>
      </Profile>
      <Logout onClick={authSignout}>
         <RiShutDownLine/>
      </Logout>

    </Container>
  )
}