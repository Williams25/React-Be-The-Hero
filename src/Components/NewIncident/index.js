import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'
import LogoImg from '../../assets/img/logo.svg'

export default function NewIncident() {

  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const ongId = localStorage.getItem('ongId')

  const handleCadastroIncident = async (e) => {
    e.preventDefault()

    const data = {
      title,
      description,
      value
    }
    try {
      api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('erro')
    }
    
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt=""/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link to="/profile" className="back-link"><FiArrowLeft size={16} color="3e02041" />
						Voltar para home
					</Link>
        </section>

        <form onSubmit={handleCadastroIncident}>
          <input type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)} >
          </textarea>
          <input type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}