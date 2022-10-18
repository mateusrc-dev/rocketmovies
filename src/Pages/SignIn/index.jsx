import { Container, Form, Background } from './styles'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()
  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>
        <div className="inputs">
          <Input type="text" icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
          <Input type="password" icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)} />
          <Button title="Entrar" onClick={handleSignIn} />
        </div>
        <Link to="/register">
          <a href="#">Criar conta</a>
        </Link>
      </Form>
      <Background />
    </Container>
  )
}