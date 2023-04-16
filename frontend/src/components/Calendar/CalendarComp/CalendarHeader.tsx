import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import dayjs from 'dayjs'
import { getMonth } from 'utils/calendarUtils'

const CalendarHeader = ({
  date,
  setDate,
  setCurrentMonth
}: {
  date: dayjs.Dayjs
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
  setCurrentMonth: (arg: any) => void
}): JSX.Element => {
  const formatDate = date.format('MMMM YYYY')
  const handlePrevMonth = (): void => {
    const d = date.subtract(1, 'month')
    setDate(d)
    setCurrentMonth(getMonth(d.month(), d.year()))
  }
  const handleNextMonth = (): void => {
    const d = date.add(1, 'month')
    setDate(d)
    setCurrentMonth(getMonth(d.month(), d.year()))
  }
  const handleCurrentMonth = (): void => {
    setDate(dayjs())
    setCurrentMonth(getMonth(dayjs().month()))
  }

  return (
    <header className="px-4 py-2 flex justify-around items-center">
      <img
            className="h-14 pl-10"
            src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
            alt=""
          />
      <p className="mr-10 text-xl text-gray-500 font-bold">
        {formatDate.toUpperCase()}
      </p>
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
