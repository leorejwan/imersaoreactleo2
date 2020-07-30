import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

//state: guarda dados 

function CadastroCategoria(){
    let [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial'); //tem 2 valores: string filmes e uma funcao para alterar o valor

    return(
      <PageDefault>
        <h1>Cadastro de categoria: {nomeDaCategoria}</h1>

        <form>

          <label>
            Nome da Categoria:
            <input
              type="text"
              value={nomeDaCategoria} //valor no textbox
              onChange={function functionHandler(infosDoEvento){
                console.log('[nome categoria]: ', nomeDaCategoria)
                console.log('[infos do evento]: ', infosDoEvento.target.value) //mostra o que foi clicado
                setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>

          <button>
            Cadastrar
          </button>
        </form>

      <Link to="/">
        Ir para Home
      </Link> 

      </PageDefault>
    )
  }

export default CadastroCategoria;