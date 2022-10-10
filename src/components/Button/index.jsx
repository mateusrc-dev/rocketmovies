import {Container} from './styles'

export function Button({loading = false, title, ...rest}) {
  return(
    <Container type='button' disabled={loading} {...rest}>
       
       {loading ? 'Carregando...' : title}
    </Container>
  )
}