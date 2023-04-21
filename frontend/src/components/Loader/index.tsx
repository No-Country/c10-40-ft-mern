import CardLoader from './CardLoader'
import DashLoader from './DashLoader'
import ExerciseLoader from './ExerciseLoader'
import TextLoader from './TextLoader'

interface Props {
  type?: 'card' | 'text' | 'routine' | 'dash'
}

const Loader = ({ type = 'card' }: Props): JSX.Element => {
  if (type === 'text') {
    return <TextLoader />
  }
  if (type === 'routine') {
    return <ExerciseLoader />
  }
  if (type === 'dash') {
    return <DashLoader />
  }
  return <CardLoader />
}

export default Loader
