import { createContext,  useContext, useState, useEffect} from "react";
const AuthContext = createContext({});
import {api} from "../pastaServico/api"

function AuthProvider({children}){
  const [data, setData] = useState({})

  //--------------------------------------
  async function authSignin(email,senha){
    try{
      const resposta = await api.post("/secao",{email,senha})
      const {usuario, token} = resposta.data

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({usuario, token});

      localStorage.setItem("@notas:usuario",JSON.stringify(usuario));
      localStorage.setItem("@notas:token",token);

    }catch(error){
      if(error.response) { alert(error.response.data.message)}
      else{alert("Não foi possivel logar.")}
    }
  };

  //-------------------------------------------------------------

  function authSignout(){
    localStorage.removeItem("@notas:usuario");
    localStorage.removeItem("@notas:token");
    setData({})
  };

//---------------------------------------------------------------
  async function alteraProfile(usuario,avatarFile){

    try {
      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar",avatarFile);
        const resposta = await api.patch("/usuarios/avatar",fileUploadForm);
        usuario.avatar = resposta.data.avatar;
        // console.log(resposta)
      }

      await api.put("/usuarios",usuario)

      localStorage.setItem("@notas:usuario",JSON.stringify(usuario));
      setData({usuario, token: data.token});
     
      alert("Dados alterados com sucesso.")

    } catch (error) {
      if(error.response) { alert(error.response.data.message)}
      else{alert("Não foi possivel fazer a alteração.")}
    }
  };

  //-------------------------------------------------------------------


  useEffect(()=>{
    const usuario= JSON.parse(localStorage.getItem("@notas:usuario"));
    const token=localStorage.getItem("@notas:token");

    if(token && usuario){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({usuario, token})
    }

  }, []);


  return(
    <AuthContext.Provider value={
      {authSignin,
      crachaUser:data.usuario,
      authSignout,
      alteraProfile
      }}>
      {children}
    </AuthContext.Provider>
  )
};


//----------------------------------------------------------
function useAuth(){
  const context = useContext(AuthContext);
  return context
}
//-------------------------------------------------------------


export {AuthProvider, useAuth}