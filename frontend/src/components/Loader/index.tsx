import CardLoader from './CardLoader'
import ExerciseLoader from './ExerciseLoader'
import TextLoader from './TextLoader'

interface Props {
  type?: 'card' | 'text' | 'routine'
}

const Loader = ({ type = 'card' }: Props): JSX.Element => {
  if (type === 'text') {
    return <TextLoader />
  }
  if (type === 'routine') {
    return <ExerciseLoader />
  }
  return <CardLoader />
}

export default Loader
