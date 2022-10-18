import { useState } from 'react'
import { Container, Form, Section, ButtonOne, ButtonTwo } from './styles'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { api } from '../../services/api'

export function NewMovie() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const navigate = useNavigate()
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }
  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }
  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do seu filme!")
    }
    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!")
    }
    if (!rating) {
      return alert("Você não deu uma nota para o seu filme, digite uma nota!")
    }
    if (rating > 5 || rating < 0) {
      return alert("Escreva uma nota para o seu filme entre 0 e 5!")
    }
    await api.post("/notes", {
      title, description, tags, rating
    })
    alert("Filme criado com sucesso!")
    navigate("/")
  }
  function returnHome() {
    navigate("/")
  }
  return (
    <Container>
      <Header />
      <div className="ButtonText">
        <Link to="/">
          <ButtonText title="Voltar" />
        </Link>
      </div>
      <main>
        <Form className="form">

          <h1>Novo filme</h1>
          <div className="inputs">
            <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
            <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)} />
          </div>
          <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />
          <Section>
            <h2>Marcadores</h2>
            <div className="items">
              {
                tags.map((tag, index) => (
                  <MovieItem key={String(index)} value={tag} onClick={() => { handleRemoveTag(tag) }} />
                ))
              }
              <MovieItem placeholder="Novo marcador" isNew value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag} />
            </div>
          </Section>
          <div className="buttons">
            <ButtonOne onClick={handleNewMovie}>Salvar alterações</ButtonOne>
            <ButtonTwo onClick={returnHome}>Excluir filme</ButtonTwo>
          </div>
        </Form>
      </main>
    </Container>
  );
}