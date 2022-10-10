import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <Link to="/profile/1">
            <strong>Mateus Carvalho</strong>
          </Link>
          <a href="#">sair</a>
        </div>
        <Link to="/profile/1">
          <img src="https://github.com/mateusrc-dev.png" alt="Foto do Usuário" />
        </Link>
      </Profile>
    </Container>
  )
}