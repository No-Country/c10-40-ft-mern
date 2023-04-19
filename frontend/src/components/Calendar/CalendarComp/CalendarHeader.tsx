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
    <header className="px-16 py-2 flex flex-col items-center bg-[#1c212c]">
      <div className="flex w-full items-center justify-center md:justify-start">
        <img
          className="h-14 "
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt=""
        />
      </div>
      <div className="flex-1 flex justify-center">
        <p className="text-2xl text-white font-bold">
          {formatDate.toUpperCase()}
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          className=" bg-green-600/70 text-white py-2 px-10 hover:scale-90 rounded ease-in duration-200 w-auto text-center"
          onClick={handlePrevMonth}>
          <BsChevronLeft />
        </button>
        <button
          className=" bg-green-600/70 text-white py-2 px-10 hover:scale-90 rounded ease-in duration-200 w-auto text-center"
          onClick={handleCurrentMonth}>
          {' '}
          Hoy{' '}
        </button>
        <button
          className=" bg-green-600/70 text-white py-2 px-10 hover:scale-90 rounded ease-in duration-200 w-auto text-center"
          onClick={handleNextMonth}>
          <BsChevronRight />
        </button>
      </div>
    </header>
  )
}

export default CalendarHeader
