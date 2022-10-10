import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <div><ButtonText title="Voltar" /></div>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/mateusrc-dev.png" alt="foto do usuário" />
          <label htmlFor="avatar"> <FiCamera /> <input type="file" id="avatar" /> </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}