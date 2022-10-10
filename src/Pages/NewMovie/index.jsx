import { Container, Form, Section, ButtonOne, ButtonTwo } from './styles'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'

export function NewMovie() {
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
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />
          <Section>
            <h2>Marcadores</h2>
            <div className="items">
              <MovieItem value="react" />
              <MovieItem placeholder="Novo marcador" isNew />
            </div>
          </Section>
          <div className="buttons">
            <ButtonOne>Salvar alterações</ButtonOne>
            <ButtonTwo>Excluir filme</ButtonTwo>
          </div>
        </Form>
      </main>
    </Container>
  );
}