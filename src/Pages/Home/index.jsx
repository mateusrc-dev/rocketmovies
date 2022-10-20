import { Container, Content, Button, ContainerTwo, Tag, Header, Profile, DivisionTwo } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { GrAdd } from 'react-icons/gr'
import { Input } from '../../components/Input'
import { Stars } from '../../components/Stars'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useState, useEffect } from 'react'

export function Home() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  function handleDetails(id) {
    navigate(`/details/${id}`)
  }
  useEffect(() => {
    async function fetchMoviesOne() {
      const response = await api.get(`/notes/`)
      setMovies(response.data)
    }
    fetchMoviesOne()
  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes/?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])
  return (
    <Container>
      <Header>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" onChange={e => setSearch(e.target.value)} />
        <Profile >
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
            <a onClick={signOut}>sair</a>
          </div>
          <Link to="/profile">
            <img src={avatarUrl} alt={user.name} />
          </Link>
        </Profile>
      </Header>
      <main>
        <Content>
          <div className="myMoviesAndAddMovie">
            <h2>Meus filmes</h2>
            <Link to="/newmovie">
              <Button type='button' >
                <GrAdd />
                <span>Adicionar filme</span>
              </Button>
            </Link>
          </div>
          <div className="listMovies">
            {
              movies.map(movie => (
                <ContainerTwo key={String(movie.id)} onClick={() => handleDetails(movie.id)}>
                  <h2>{movie.title}</h2>

                  <Stars rating={movie.rating} />

                  <p>
                    {movie.description}
                  </p>

                  <DivisionTwo>
                    {
                      movie.tags.map(tag => (
                        <div>
                          <Tag>{tag.name}</Tag>
                        </div>
                      ))
                    }
                  </DivisionTwo>
                </ContainerTwo>
              ))
            }
          </div>
        </Content>
      </main>
    </Container >
  )
}