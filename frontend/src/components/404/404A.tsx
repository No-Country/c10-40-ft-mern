import { Link } from 'react-router-dom'

const A = (): JSX.Element => {
  return (
    <div className="flex flex-col p-5 h-[91vh] items-center justify-center max-w-md m-auto">
      <img
        src="https://th.bing.com/th/id/OIP.aOnKsYNBT-7BVtqjDef5VgHaFj?pid=ImgDet&rs=1"
        alt="anda a la main bobo"
      />
      <p className="mt-3">
        Anda a la
        <Link to="/" className="text-blue-700 text-2xl">
          {' '}
          main{' '}
        </Link>{' '}
        bobo
      </p>
    </div>
  )
}
export default A
