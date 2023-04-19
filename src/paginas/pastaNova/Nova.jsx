import { Container, Form} from "./styles";
import {Header} from "../../pastaComponentes/Header"
import {Input} from "../../pastaComponentes/Input"
import { AreaTexto } from "../../pastaComponentes/AreaTexto";
import { NovoItem } from "../../pastaComponentes/NovoItem";
import { Secao } from "../../pastaComponentes/Secao";
import { Botao } from "../../pastaComponentes/Botao";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { api } from "../../pastaServico/api";
import { BotaoTexto } from "../../pastaComponentes/BotaoTexto";

export function Nova(){
  const [titulo,setTitulo] = useState("")
  const [descricao,setDescricao] = useState("")

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("")

  const irPara = useNavigate()

  function lidarAdicLink(){
    setLinks(estadoAnt => [...estadoAnt,newLink] );
    setNewLink("");
  };


  function lidarRemoverLink(descarte){
    setLinks(estadoAnt => estadoAnt.filter(link => link !== descarte))
  };


  function lidarAddTag(){
    setTags(estadoAnt => [...estadoAnt, newTag]);
    setNewTag("");
  }

  function lidarRemoverTag(descarte){
    setTags(estadoAnt => estadoAnt.filter(tag => tag !== descarte))
  }

   async function GravaNota(){

    if(!titulo){return alert("O campo titulo é necessario.")}

    if(links.length == 0 || tags.length==0){ return alert("Cadastre pelo menos um link e uma tag.")}

    if(newLink){
      return alert("Voce inseriu um link e não adicionou, apague ou adicione.")
    }

    if(newTag){
      return alert("Voce inseriu uma tag e não adicionou, apague ou adicione.")
    }

    await api.post("notas",{
      titulo,
      descricao,
      tags,
      links
    });
    alert("Nota gravada com sucesso.")
    irPara(-1)
  }

  function lidarVoltar(){
    irPara(-1)
  }


  return(

  <Container>
    <Header/>

    <main>
      <Form>
        <header>
          <h1>
            Criar nota
          </h1>
          {/* <Link to="/">Voltar</Link> */}
          <BotaoTexto
            titulo="Voltar"
            onClick={lidarVoltar}
          />
        </header>

        <Input
          placeholder="Título"
          onChange={e => setTitulo(e.target.value)}
        />

        <AreaTexto 
          placeholder="Observações"
          onChange={e => setDescricao(e.target.value)}
        />
        
        <Secao titulo="Links uteis">
          {
          links.map((link,index) =>(
             <NovoItem 
              key = {String(index)}
              valor={link}
              onClick={()=>lidarRemoverLink(link)}
             />
          ))
          }
          <NovoItem 
          valor={newLink}
          seNovo
          placeholder="Novo link"
          onChange={e => setNewLink(e.target.value)}
          onClick={lidarAdicLink}
          />
        </Secao>

        <Secao titulo="Marcadores">
          <div className="tags">
            {
              tags.map((tag, index) => (
                <NovoItem 
                  key={String(index)}
                  valor={tag}
                  onClick={() => lidarRemoverTag(tag)}
                />)
              )

            }

            <NovoItem 
              seNovo 
              placeholder="Nova tag"
              valor={newTag}
              onChange={e=> setNewTag(e.target.value)}
              onClick={lidarAddTag}
            />
          </div>
        </Secao>
        
        <Botao 
          titulo="Salvar"
          onClick={GravaNota}
        />

      </Form>
    </main>
  </Container>

  )

}