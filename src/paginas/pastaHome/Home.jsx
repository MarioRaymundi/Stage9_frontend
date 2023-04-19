import {Container,Marca,Menu,Procura,Conteudo,NovaNota}  from "./styles";

import {FiPlus, FiSearch} from "react-icons/fi"

import {Header} from "../../pastaComponentes/Header";
import {BotaoTexto} from "../../pastaComponentes/BotaoTexto"
import {Input} from "../../pastaComponentes/input"
import {Secao} from "../../pastaComponentes/Secao"
import {Nota} from "../../pastaComponentes/Nota"

import { useEffect, useState } from "react";
import { api } from "../../pastaServico/api";
import { useNavigate } from "react-router-dom";

export function Home(){
  const irPara = useNavigate()
  const [tags, setTags] = useState([]);
  const [tagsSel, setTagsSel] = useState([]);
  const [busca, setBusca] = useState([]);
  const [notas,setNotas] = useState([]);

  function lidarTagsSel(tagNome){
    if(tagNome =="todos"){
      setTagsSel([])
    }else{
      const jaSel = tagsSel.includes(tagNome)
      if(!jaSel){
        setTagsSel( estadoAnt => [...estadoAnt,tagNome])
      }else{
        const tagsFiltradas= tagsSel.filter(tg => tg !== tagNome)
        setTagsSel(tagsFiltradas)
      }

    }
  }

  function lidarPgDetalhes(id){
    irPara(`/detalhes/${id}`)
  }

  useEffect(() =>{
      async function buscaTags(){
        const res = await api.get("/tags");
        // console.log(res.data)
        setTags(res.data)
      };

      buscaTags();
  },[])

  useEffect(( ) => {
    async function buscaNotas(){
      const res = await api.get(`/notas?titulo=${busca}&tags=${tagsSel}`)
      setNotas(res.data);
      
    };

    buscaNotas();

  },[tagsSel,busca])



  return(
    <Container>
      <Marca>
        <h1>Rochetnotes</h1>
      </Marca>

      <Header/>

      <Menu>
        <li>
          <BotaoTexto 
            titulo="Todos" 
            onClick={() => lidarTagsSel("todos")}
            ativo={!tagsSel[0]}
          />
        </li>

        {
          tags && tags.map( (tag,ind) =>(
            <li key={String(ind)}>
              <BotaoTexto
                titulo={tag.nome}
                onClick={() => lidarTagsSel(tag.nome)}
                ativo={tagsSel.includes(tag.nome)}
              />
            </li>
          ))
        }

      </Menu>

      <Procura>
        <Input
           icon={FiSearch} 
           placeholder="Pesquisar pelo título"
           onChange={(e) => setBusca(e.target.value)}
        />
      </Procura>

      <Conteudo>
        <Secao titulo="Minhas notas">
          {notas.map(nota =>(
            <Nota
              key={(String(nota.id))}
              dados={nota}
              onClick={() => lidarPgDetalhes(nota.id)}
            />
          ))}
        </Secao>

      </Conteudo>

      <NovaNota to="/nova">
        <FiPlus/>
        Criar nota
      </NovaNota>

    </Container>

  )
}