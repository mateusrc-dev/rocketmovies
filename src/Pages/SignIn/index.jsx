import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>
        <div className="inputs">
          <Input type="text" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />
          <Button title="Entrar" />
        </div>
        <Link to="/register">
          <a href="#">Criar conta</a>
        </Link>
      </Form>
      <Background />
    </Container>
  )
}