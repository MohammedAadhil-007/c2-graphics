import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import servicesData from '../../data/servicesData'
import { formatPrice } from '../../utils/formatPrice'
import { useMutation, useQueryClient } from 'react-query'
import { useAuth, useUser } from '@clerk/clerk-react'
import Calendar from '../../components/Calendar'
import dayjs from 'dayjs'
import axios from '../../api/api'
import Spinner from '../../components/Spinner'

type Service = {
  id: string
  title: string
  description?: string
  source: string
  price?: number | string
  packages?: string[]
}

const PackageCheckout = () => {
  const { isSignedIn, isLoaded, user } = useUser()
  const { getToken } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()

  if (isLoaded && !isSignedIn) return <Navigate to='/sign-in' />
  // if (!id) return <NotFound />

  const currentDate = dayjs()
  const [packageItem, setPackageItem] = useState<Service>()
  const [hour, setHour] = useState('')
  const [selectDate, setSelectDate] = useState(currentDate)

  useEffect(() => {
    setPackageItem(servicesData.find((item) => item.id === id))
    window.scrollTo(0, 0)
  }, [])

  const mutation = useMutation({
    mutationFn: (price: string | undefined) =>
      axios.post('/api/payment/create-checkout-session', {
        priceid: price,
        hour: hour,
        date: selectDate.format('YYYY-MM-DD'),
        email: user?.primaryEmailAddress?.emailAddress,
      }),
    onError: (error) => console.log(error),
    onSuccess: (data) => (window.location.href = data.data.url),
  })

  const checkoutPackage = async (price: string | undefined) => {
    if (!selectDate || !hour) return
    mutation.mutate(price)
  }

  return (
    <>
      <div className='mt-5 px-16'>
        {mutation.isLoading && <Spinner />}
        <div className='flex flex-col items-center md:flex-row py-8'>
          <div className='md:flex-[1] flex justify-end h-[400px]'>
            <img
              src={packageItem?.source}
              alt={packageItem?.title}
              className='w-[300px] h-full object-cover mb-2'
            />
          </div>
          <div className='md:flex-[3] px-14 font-lora'>
            <h1 className='md:text-5xl text-3xl font-bold'>
              {packageItem?.title}
            </h1>
            <h4 className='py-4 max-w-3xl font-medium'>
              {packageItem?.description}
            </h4>
            <div className='px-8 py-6'>
              <span className='text-2xl font-semibold'>Package Inclusion</span>
              {packageItem?.packages?.map((item, index) => (
                <div
                  className='py-1'
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className='bg-[#970747] px-6 py-2 max-w-[16rem] mt-6 text-white font-medium rounded-lg text-lg text-center'>
              Price:{' '}
              <span className='text-2xl'>
                {formatPrice(packageItem?.price)}
              </span>
            </div>
          </div>
        </div>
        <div className='px-16'>
          <Calendar
            hour={hour}
            setHour={setHour}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />
        </div>
        <div className='flex md:justify-end justify-center gap-4 px-4 md:px-48 mb-10'>
          <button
            className='px-8 py-2 rounded-full font-bold text-[#123C69] bg-white'
            onClick={() => navigate(-1)}
          >
            back
          </button>
          <button
            className='px-4 py-2 rounded-full font-bold bg-[#123C69] text-white'
            onClick={() => checkoutPackage(packageItem?.id)}
            disabled={!selectDate || !hour}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}

export default PackageCheckout
