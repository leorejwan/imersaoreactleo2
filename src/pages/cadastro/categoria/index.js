import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

//state: guarda dados 

function CadastroCategoria(){
    const [categorias, setCategorias] = useState(['Teste'])

    const valoresIniciais = {
      nome: 'AAAAAAAA',
      descricao: 'BBBBBBBBB',
      cor: '#999999'
    }

    const [values, setValues] = useState(valoresIniciais); //tem 2 valores: string filmes e uma funcao para alterar o valor

    return(
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault()
          setCategorias([
            ...categorias, //concatena e nao sobescreve o que tinha
            values
          ]);
        }}>

        <div>
        <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome} //valor no textbox
              onChange={function functionHandler(infosDoEvento){
                // setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>
        </div>

        <div>
        <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao} //valor no textbox
              onChange={function functionHandler(infosDoEvento){
                // setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>
        </div>

        <div>
        <label>
            Cor:
            <input
              type="color"
              value={values.cor} //valor no textbox
              onChange={function functionHandler(infosDoEvento){
                // setNomeDaCategoria(infosDoEvento.target.value)
              }}
            />
          </label>
        </div>



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