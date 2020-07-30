import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

//state: guarda dados 

function CadastroCategoria(){
    const [categorias, setCategorias] = useState(['Teste'])
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial'); //tem 2 valores: string filmes e uma funcao para alterar o valor

    return(
      <PageDefault>
        <h1>Cadastro de categoria: {nomeDaCategoria}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault()
          console.log('dashhsads')
          setCategorias([
            ...categorias, //concatena e nao sobescreve o que tinha
            nomeDaCategoria
          ]);
        }}>

          <label>
            Nome da Categoria:
            <input
              type="text"
              value={nomeDaCategoria} //valor no textbox
              onChange={function functionHandler(infosDoEvento){
                setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            )
          })}
        </ul>

      <Link to="/">
        Ir para Home
      </Link> 

      </PageDefault>
    )
  }

export default CadastroCategoria;