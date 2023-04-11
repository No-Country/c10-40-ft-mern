import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import dayjs from 'dayjs'

const CalendarHeader = ({
  date,
  setDate
}: {
  date: dayjs.Dayjs
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
}): JSX.Element => {
  const formatDate = date.format('DD-MMMM-YY')
  const handlePrevMonth = (): void => {
    setDate(date.subtract(1, 'month'))
  }
  const handleNextMonth = (): void => {
    setDate(date.add(1, 'month'))
  }
  const handleCurrentMonth = (): void => {
    setDate(dayjs())
  }
  return (
    <header className="px-4 py-2 flex justify-around items-center">
      <p> Logo </p>
      <h1 className="mr-10 text-xl text-gray-500 font-bold">
        {formatDate.toUpperCase()}
      </h1>
      <div className="flex justify-center items-center gap-4">
        <button
          className="border rounded-3xl py-2 px-4 mr-5 bg-[#fb8500]"
          onClick={handleCurrentMonth}>
          {' '}
          Hoy{' '}
        </button>
        <button
          className="bg-[#fb8500] rounded-full px-1 py-0.5"
          onClick={handlePrevMonth}>
          <span className="cursor-pointer text-black mx-2">
            <BsChevronLeft />
          </span>
        </button>
        <button
          className="bg-[#fb8500] rounded-full px-1 py-0.5"
          onClick={handleNextMonth}>
          <span className="cursor-pointer text-black mx-2">
            <BsChevronRight />
          </span>
        </button>
      </div>
    </header>
  )
}

export default CalendarHeader
