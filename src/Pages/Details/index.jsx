import { Container, Content, DivisionTwo } from './styles.js'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'
import { BiTime } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Stars } from '../../components/Stars'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Details() {
  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  function handleBack() {
    navigate("/")
  }
  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }
  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      console.log(response.data)
      setData(response.data)
    }
    fetchMovie()
  }, [])
  return (
    <Container>
      <Header />
      <div className="buttontext" >

        <ButtonText title="Voltar" onClick={handleBack} />
        <ButtonText title="Excluir Movie" onClick={handleRemove} />

      </div>
      {
        data &&
        <main>
          <Content>
            <div className="nameMovieAndStars">
              <h2>{data.title}</h2>
              <Stars rating={data.rating} />
            </div>
            <div className="userAndTime">
              <div className="user">
                <img src={avatarUrl} alt="Foto do Usuário" />
                <span>{user.name}</span>
              </div>
              <div className="time">
                <BiTime />
                <span>{data.created_at}</span>
              </div>
            </div>
            <DivisionTwo>
              {
                data.tags.map(tag => (
                  <div >
                    <Tag title={tag.name} key={String(tag.id)}/>
                  </div>
                ))
              }
            </DivisionTwo>
            <p>{data.description}</p>
          </Content>
        </main>
      }
    </Container>
  )
}