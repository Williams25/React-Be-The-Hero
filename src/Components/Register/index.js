import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import HeroesImg from '../../assets/img/heroes.png'
import LogoImg from '../../assets/img/logo.svg'

import api from '../../services/api'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [city, setCidade] = useState('')
	const [uf, setUf] = useState('')


	const history = useHistory()

	async function handleRegister(e) {
		e.preventDefault()

		const data = {
			name,
			email,
			whatsapp,
			city,
			uf
		}
		console.log(data)

		try {
			const response = await api.post('/ongs', data)
			alert(`ID de acesso: ${response.data.id}`)
			history.push('/')
		} catch (error) {
			console.log(error)
		}
	}


	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={LogoImg} alt=""/>
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
					<Link to="/" className="back-link">
						<FiArrowLeft size={16} color="3e02041" />
						Voltar
					</Link>
				</section>

				<form onSubmit={handleRegister}>
					<input type="text"
						placeholder="Nome da ONG"
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
					<input type="text"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<input type="text"
						placeholder="Whatsapp"
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
						required
					/>

					<div className="input-group">
						<input type="text"
							placeholder="Cidade"
							value={city}
							onChange={e => setCidade(e.target.value)}
							required
						/>
						<input type="text"
							placeholder="UF"
							style={{ width: 80, marginLeft: 8 }}
							value={uf}
							onChange={e => setUf(e.target.value)}
							required
						/>
					</div>
					<button type="submit" className="button">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}