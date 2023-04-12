import CardLoader from './CardLoader'
import TextLoader from './TextLoader'

interface Props {
  type?: 'card' | 'text'
}

const Loader = ({ type = 'card' }: Props): JSX.Element => {
  if (type === 'text') {
    return <TextLoader />
  }
  return <CardLoader />
}

export default Loader
