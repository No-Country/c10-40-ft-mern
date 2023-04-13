import dayjs, { type Dayjs } from 'dayjs'

export function getMonth(
  month: any = dayjs().month(),
  year: any = dayjs().year()
): Dayjs[][] {
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
  let currentMonthCount = 0 - firstDayOfTheMonth
  const daysMatrix: Dayjs[][] = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    })
  })
  return daysMatrix
}
