import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'
import HeroesImg from '../../assets/img/heroes.png'
import LogoImg from '../../assets/img/logo.svg'
import api from '../../services/api'

export default function Login() {

	const [id, setId] = useState('')

	const history = useHistory()

	async function handleLogin(e) {
		e.preventDefault()
		try {
			const response = await api.post('/sessions', {id})
			localStorage.setItem('ongId', id)
			localStorage.setItem('ongName', response.data.name)

			history.push('/profile')
		} catch (error) {
			console.log('Falha no login')
		}
	}

	return (
		<dic className="logon-container">
			<section className="form">
				<img src={LogoImg} alt=""/>

				<form onSubmit={handleLogin}>
					<h1>Faça seu login</h1>

					<input type="text"
						placeholder="Sua ID"
						value={id}
						onChange={e => setId(e.target.value)}
					/>
					<button className="button" type="submit">Entrar</button>

					<Link to="/register" className="back-link"><FiLogIn size={16} color="3e02041" />
						Não tenho cadastro
					</Link>
				</form>
			</section>
			<img src={HeroesImg} alt=""/>
		</dic>
	)
}