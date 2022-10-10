import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>
        <div className="inputs">
          <Input type="text" icon={FiUser} placeholder="Nome" />
          <Input type="text" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />
          <Button title="Cadastrar" />
        </div>
        <Link to="/">
          <a href="#"><ButtonText title="Voltar para o login" /></a>
        </Link>
      </Form>
    </Container>
  )
}