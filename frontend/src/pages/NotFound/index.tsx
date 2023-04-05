import A from 'components/404/404A'
import B from 'components/404/404B'
import C from 'components/404/404C'
import D from 'components/404/404D'
import { useState } from 'react'

const index = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    Math.floor(Math.random() * 4) + 1
  )
  let selectedComponent
  switch (selectedOption) {
    case 1:
      selectedComponent = <A />
      break
    case 2:
      selectedComponent = <B />
      break
    case 3:
      selectedComponent = <C />
      break
    case 4:
      selectedComponent = <D />
      break
    default:
      selectedComponent = <A />
  }

  return <div>{selectedComponent}</div>
}

export default index
