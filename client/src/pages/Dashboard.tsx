import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import axios from '../api/api'
import { formatDate, formatMoney } from '../utils/utils'
import Spinner from '../components/Spinner'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { useNavigate } from 'react-router-dom'

type TableProps = {
  receipt_email: string
  metadata: {
    dateofreservation: string
    productname: string
    timerange: string
  }
  amount: number
}

Chart.register(...registerables)

const TableRows = ({ receipt_email, metadata, amount }: TableProps) => {
  return (
    <tr className='hover:bg-[#D9D9D980] cursor-pointer bg-white rounded-2xl'>
      <td className='py-4 px-6'>{receipt_email}</td>
      <td className='py-4 px-6'>{formatDate(metadata.dateofreservation)}</td>
      <td className='py-4 px-6'>{metadata.timerange}</td>
      <td className='py-4 px-6'>{metadata.productname}</td>
      <td className='py-4 px-6'>{formatMoney(amount)}</td>
    </tr>
  )
}

const ChartData = () => {
  const { data, isLoading, isError } = useQuery(['linechartData'], () =>
    axios.get('/api/payment/graph').then((res) => res.data)
  )

  let chartData = data ?? null

  if (isLoading) return <Spinner />
  if (isError) return <div>Error...</div>
  if (data)
    chartData = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Reservations',
          data: Object.values(data),
          backgroundColor: ['#970747'],
          borderColor: '#970747',
          borderWidth: 2,
        },
      ],
    }
  return (
    <Line
      className='md:min-h-[400px] bg-[#fff] rounded-3xl p-4'
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  )
}

const Dashboard = () => {
  const [query, setQuery] = useState('')
  const { data, isLoading, isError } = useQuery(['customers'], () =>
    axios.get('/api/payment/payments').then((res) => res.data)
  )
  const navigate = useNavigate()

  const logoutMutation = useMutation({
    mutationFn: () => axios.delete('/api/auth/logout'),
    onSuccess: () => {
      navigate('/login')
    },
  })

  return (
    <div className='h-screen font-outfit'>
      {logoutMutation.isLoading && <Spinner />}
      <div className='flex justify-center items-center flex-col mb-10'>
        <div>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-extrabold mt-4 mb-8 text-[#123C69]'>
              DASHBOARD
            </h1>
            <button
              className='border border-black h-10 p-2 rounded-lg'
              onClick={() => logoutMutation.mutate()}
            >
              LOGOUT
            </button>
          </div>
          {/* <ChartData /> */}
          <div className='max-h-[600px] my-10'>
            <ChartData />
          </div>
          <div className='flex justify-end mb-5'>
            <input
              type='text'
              className='border border-black p-2 rounded-lg'
              placeholder='Search..'
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className='max-h-[500px] overflow-y-auto'>
            <table className='min-w-[920px] border border-seperate rounded-2xl h-full'>
              <thead className='bg-[#970747] text-white rounded-t-2xl sticky -top-1'>
                <tr>
                  <th className='px-5 py-6 text-start'>Customer Email</th>
                  <th className='px-5 py-6 text-start'>Date of Reservation</th>
                  <th className='px-5 py-6 text-start'>Time Range</th>
                  <th className='px-5 py-6 text-start'>Package</th>
                  <th className='px-5 py-6 text-start'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td colSpan={5}>Loading....</td>
                  </tr>
                )}
                {data
                  ?.filter((item: TableProps) =>
                    item.receipt_email
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  )
                  .map((item: TableProps, index: React.Key) => (
                    <TableRows
                      key={index}
                      {...item}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
