import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const navigate = useNavigate()
  function handleSearch() {
    alert("Para pesquisar pelo filme precisamos retornar a página inicial!")
    const response = confirm("Tem certeza que deseja retornar?")
    if (response) {
      navigate("/")
    }
  }
  function handleSignOut() {
    navigate("/")
    signOut()
  }
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" onChange={handleSearch} onClick={handleSearch} />
      <Profile >
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <a onClick={handleSignOut}>sair</a>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  )
}