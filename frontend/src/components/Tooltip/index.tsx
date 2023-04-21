import { useEffect, useState } from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'

const Tooltip = ({ message }: { message: string }): JSX.Element => {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }, [])

  // FIX: for mobile: tooltip overrides input placeholder
  return (
    <div className="group relative">
      <span className="text-secondary-400 text-lg lg:text-xl">
        <RiErrorWarningLine />
      </span>
      <span
        className={`absolute top-2/4 -translate-y-2/4 right-6 w-max h-max transition-all rounded lg:p-2 text-xs text-secondary-400 group-hover:scale-100 ${
          showMessage ? 'scale-100' : 'scale-0'
        }`}>
        {message}
      </span>
    </div>
  )
}

export default Tooltip
