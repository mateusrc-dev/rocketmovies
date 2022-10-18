import {Container} from './styles'
import {BiArrowBack} from 'react-icons/bi'

export function ButtonText({title, ...rest}) {
  if (title === "Excluir Movie") {
  return(
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
} else {
  return(
    <Container type="button" {...rest}>
      <BiArrowBack/>
      {title}
    </Container>
  )
}
}