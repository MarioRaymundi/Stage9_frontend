import {Container,Links,Conteudo} from "./styles"
import {Botao} from "../../pastaComponentes/Botao"
import { Header } from "../../pastaComponentes/Header"
import { Secao} from "../../pastaComponentes/Secao"
import {Tag} from "../../pastaComponentes/Tag"
import { BotaoTexto } from "../../pastaComponentes/BotaoTexto"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../pastaServico/api"

export function Detalhes(){
  const params = useParams()
  const irPara = useNavigate()
  const [dadosNota,setDadosNota] = useState()

  function lidarVoltar(){
    irPara(-1)
  }


  async function ExcluirNota(){
    const confirma = window.confirm("Confirma exclusão da nota?")
    if(confirma){
      await api.delete(`/notas/${params.id}`);
      irPara(-1)
    }
  }

  useEffect(()=>{
    async function buscaNota(){
      const res = await api.get(`/notas/${params.id}`);
      setDadosNota(res.data)
      // console.log(res)
    };

    buscaNota();

  },[])





  return(
    <Container>
      <Header/>
      {dadosNota &&
        <main>
          <Conteudo>
        
            <BotaoTexto
              titulo="Excluir Nota"
              onClick={ExcluirNota}
            />

            <h1> {dadosNota.nota.titulo}</h1>

            <p> {dadosNota.nota.descricao} </p>

              {dadosNota.links &&
                <Secao titulo="Link úteis">
                  <Links>
                    {dadosNota.links.map((link,ind) => (
                      <li key={String(ind)}> 
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a> 
                      </li>

                    ))}
                  </Links>
                </Secao>
              }


            {dadosNota.tags &&
              <Secao titulo="Marcadores">
                {dadosNota.tags.map((tag,ind) =>(
                  <Tag  key={String(ind)} titulo={tag.nome}/>
                ))}
              </Secao>

            }
            
            <Botao 
              titulo="voltar"
              onClick={lidarVoltar}
            />
              
          </Conteudo>
        </main>

      }
    </Container>
  )
}