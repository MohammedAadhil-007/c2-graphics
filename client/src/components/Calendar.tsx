import dayjs from 'dayjs'
import React, { useState } from 'react'
import { generateDate, months } from '../utils/calendar'
import cn from '../utils/cn'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Dayjs } from 'dayjs'
import { useQuery } from 'react-query'
import axios from '../api/api'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import Skeleton from './Skeleton'

type CalendarProps = {
  hour: string
  setHour: React.Dispatch<React.SetStateAction<string>>
  selectDate: Dayjs
  setSelectDate: React.Dispatch<React.SetStateAction<Dayjs>>
}

export type Reservation = {
  id: number
  session_id?: string
  dateofreservation: string
  timerange: string
  product_id: string
}

const Calendar = ({
  hour,
  setHour,
  selectDate,
  setSelectDate,
}: CalendarProps) => {
  const { id } = useParams()

  const currentDate = dayjs()
  const [today, setToday] = useState(currentDate)

  const { data, isLoading, isError } = useQuery(
    ['productReservations', selectDate],
    () =>
      axios
        .get(
          `/api/reservation/get/${id}?date=${selectDate.format('YYYY-MM-DD')}`
        )
        .then((res) => res.data)
  )

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const hours = [
    '1:00pm - 2:00pm',
    '2:30pm - 3:30pm',
    '4:00pm - 5:00pm',
    '5:30pm - 6:30pm',
    '7:00pm - 8:00pm',
  ]

  return (
    <>
      <div className='mt-10 flex gap-10 justify-center mx-auto h-full pb-8 md:items-start items-center lg:flex-row flex-col'>
        {isError && 'error'}
        <div className='bg-white rounded-2xl p-6 h-[500px]'>
          <div className='md:w-[600px] w-96 h-96 '>
            <div className='flex justify-between items-center'>
              <h1 className='select-none font-semibold text-2xl'>
                {months[today.month()]} {today.year()}
              </h1>
              <div className='flex gap-1 items-center '>
                <GrFormPrevious
                  className='w-5 h-5 cursor-pointer hover:scale-105 transition-all'
                  onClick={() => {
                    setToday(today.month(today.month() - 1))
                  }}
                />

                <GrFormNext
                  className='w-5 h-5 cursor-pointer hover:scale-105 transition-all'
                  onClick={() => {
                    setToday(today.month(today.month() + 1))
                  }}
                />
              </div>
            </div>
            <div className='grid grid-cols-7 '>
              {days.map((day, index) => {
                return (
                  <h1
                    key={index}
                    className='text-sm text-center h-14 w-14 grid place-content-center text-black select-none'
                  >
                    {day}
                  </h1>
                )
              })}
            </div>

            <div className=' grid grid-cols-7 '>
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today, selectable }, index) => {
                  return (
                    <div
                      key={index}
                      className='p-2 text-center h-14 grid place-content-center text-sm'
                    >
                      <h1
                        className={cn(
                          currentMonth ? '' : 'text-gray-400',
                          today ? 'bg-black text-white' : '',
                          selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                            ? 'bg-[#970747] text-white'
                            : '',
                          'h-10 w-10 grid place-content-center hover:bg-[#970747] hover:text-white transition-all cursor-pointer select-none',
                          !selectable ? 'text-gray-400 cursor-default' : ''
                        )}
                        onClick={() => {
                          if (selectable) {
                            setSelectDate(date)
                            setHour('')
                          }
                        }}
                      >
                        {date.date()}
                      </h1>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center h-[500px] text-center w-80 rounded-2xl bg-white p-8 font-lora'>
          <h1 className=' font-semibold mb-2'>
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <h1 className='font-semibold'>Select Time</h1>
          <h6 className='text-xs'>Choose your preferred time</h6>
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className='mt-10'>
              {hours.map((item, index) => {
                const isReserved = data?.some(
                  (data: Reservation) => data.timerange === item
                )
                return (
                  <div
                    className={
                      item === hour
                        ? 'py-2 px-4 rounded-full bg-[#970747] text-white mb-5 cursor-pointer border-black'
                        : `py-2 px-4 rounded-full ${
                            isReserved
                              ? 'bg-gray-400 line-through'
                              : 'bg-[#DFDFDE]'
                          } mb-5 cursor-pointer`
                    }
                    key={index}
                    onClick={() => !isReserved && setHour(item)}
                  >
                    {item}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Calendar
