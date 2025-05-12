import { useQuery } from 'react-query'
import { Link, useSearchParams } from 'react-router-dom'
import axios from '../api/api'
import Spinner from '../components/Spinner'
import { BsCheckCircleFill } from 'react-icons/bs'

const SuccessPage = () => {
  const [filterParams] = useSearchParams()

  const session_id = filterParams.get('session_id') as string

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const data = await axios.get(
        `/api/payment/retrieve?session_id=${session_id}`
      )
      return data.data
    },
  })
  if (isError) return <p>error</p>

  return (
    <>
      <Link
        to='/'
        className='p-4 underline'
      >
        Go back
      </Link>
      <div className='flex justify-center items-center h-screen'>
        {isLoading && <Spinner />}
        <div className='bg-white flex justify-center items-center py-10 px-28 flex-col text-center'>
          <BsCheckCircleFill
            size={70}
            color='#123C69'
            className='mb-2'
          />
          <h1 className='text-2xl font-lora font-semibold mb-4'>
            PAYMENT SUCCESSFUL
          </h1>
          <p className='text-l mb-10 font-lora'>
            Thank you for your payment. An automated payment receipt will be
            sent <br />
            to your registered email
          </p>
          <a
            href={data?.hosted_invoice_url}
            target='_blank'
            className='px-8 py-2 rounded-full bg-[#123C69] text-white font-outfit font-bold'
          >
            View Transaction
          </a>
        </div>
      </div>
    </>
  )
}

export default SuccessPage
