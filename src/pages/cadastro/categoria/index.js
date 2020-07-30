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

    function setValue(chave, valor) {
      //chave: nome, descricao, bla,ble,bli...
      setValues({
        ...values,
        [chave]: valor //pega a chave correta e define o valor dela. Assim, a chave é um dado dinamico para todos os campos! 
      })
    }

    function handleChange(infosDoEvento){
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value)
    }

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
              value={values.nome} //valor no textbox //tambem pode ser values['nome']
              name="nome"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
        <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao} //valor no textbox
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
        <label>
            Cor:
            <input
              type="color"
              value={values.cor} //valor no textbox
              name="cor"
              onChange={handleChange}
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