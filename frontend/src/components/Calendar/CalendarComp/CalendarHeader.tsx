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
    <header className="w-full px-4 md:py-6 md:px-10 flex justify-between items-center">
      <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-Barlow text-primary-100 font-bold px-4">
        {formatDate.toUpperCase()}
      </p>
      <div className="flex justify-center items-center">
        <button
          className="button text-primary-100 w-max px-4 hover:text-primary-bg hover:bg-primary-400"
          onClick={handlePrevMonth}>
          <BsChevronLeft />
        </button>
        <button
          className="button text-primary-100 w-max px-4 hover:text-primary-bg hover:bg-primary-400"
          onClick={handleCurrentMonth}>
          Hoy{' '}
        </button>
        <button
          className="button text-primary-100 w-max px-4 hover:text-primary-bg hover:bg-primary-400"
          onClick={handleNextMonth}>
          <BsChevronRight />
        </button>
      </div>
    </header>
  )
}

export default CalendarHeader
