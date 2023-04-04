import { SideBarMenu } from 'components'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Stats = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-start h-[89vh] max-w-[100vw]">
      <SideBarMenu />
      <div>
        <button
          onClick={() => {
            navigate('/dashboard')
          }}>
          <BsFillArrowLeftCircleFill size={30} />
        </button>
        <div>hola</div>
      </div>
    </div>
  )
}

export default Stats
