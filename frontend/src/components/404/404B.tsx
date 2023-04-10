import { Link } from 'react-router-dom'

const B = (): JSX.Element => {
  return (
    <div className="flex flex-col p-5 h-[89vh] items-center justify-center max-w-md m-auto">
      <img
        src="https://media.c5n.com/p/d0d22ec5867d88e7cf9a06b55324b7d0/adjuntos/326/imagenes/000/160/0000160654/1200x675/smart/lionel-messi-que-miras-bobo.png"
        alt="que miras bobo"
        className=""
      />
      <p className="mt-3">
        Que miras bobo? anda a la
        <Link to="/" className="text-blue-700 text-2xl">
          {' '}
          main{' '}
        </Link>{' '}
      </p>
    </div>
  )
}
export default B
