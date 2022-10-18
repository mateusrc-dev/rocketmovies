
import { Container } from './styles'
import { StarNull } from '../StarNull'
import { StarOne } from '../StarOne'
import { StarTwo } from '../StarTwo'
import { StarThree } from '../StarThree'
import { StarFour } from '../StarFour'
import { StarFive } from '../StarFive'

export function Stars({ rating }) {
  if ( rating  == 1) {
    return (
      <Container>
        <StarOne />
      </Container>
    )
  } else if ( rating == 2) {
    return (
      <Container>
        <StarTwo />
      </Container>
    )
  } else if ( rating  == 3) {
    return (
      <Container>
        <StarThree />
      </Container>
    )
  } else if ( rating  == 4) {
    return (
      <Container>
        <StarFour />
      </Container>
    )
  } else if ( rating  == 5) {
    return (
      <Container>
        <StarFive />
      </Container>
    )
  }
}