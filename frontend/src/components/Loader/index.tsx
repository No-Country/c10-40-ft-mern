import { ImSpinner8 } from 'react-icons/im'
import CardLoader from './CardLoader'
import DashLoader from './DashLoader'
import ExerciseLoader from './ExerciseLoader'
import TextLoader from './TextLoader'

interface Props {
  type?: 'card' | 'text' | 'routine' | 'dash' | 'spinner'
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

  if (type === 'spinner') {
    return (
      <div className="w-full h-screen flex items-center justify-center text-4xl animate-spin">
        <ImSpinner8 className="fill-primary-100" />
      </div>
    )
  }

  return <CardLoader />
}

export default Loader
