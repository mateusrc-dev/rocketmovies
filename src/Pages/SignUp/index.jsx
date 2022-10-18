import { useState } from "react"
import { api } from "../../services/api"
import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!!")
    }
    api.post("/users", { name, email, password }).then(() => { alert("Usuário cadastrado com sucesso"); navigate("/") }).catch(error => { if (error.response) { alert(error.response.data.message) } else { alert("Não foi possível cadastrar!") } })
  }
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>
        <div className="inputs">
          <Input type="text" icon={FiUser} placeholder="Nome" onChange={e => setName(e.target.value)} />
          <Input type="text" icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
          <Input type="password" icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)} />
          <Button title="Cadastrar" onClick={handleSignUp} />
        </div>
        <Link to="/">
          <a href="#"><ButtonText title="Voltar para o login" /></a>
        </Link>
      </Form>
    </Container>
  )
}