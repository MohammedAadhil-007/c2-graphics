import React, { useState } from 'react'

const Faqs = () => {
  const [selected, setSelected] = useState<null | number>(null)

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const questions = [
    {
      question: 'How do I book a photo session?',
      answer:
        'You can book a photo session by visiting our website. We will then work with you to schedule a date and time that works best for you.',
    },
    {
      question: 'How long does a photo session last?',
      answer: 'The length of a photo session lasts only for one hour.',
    },
    {
      question: 'Can I book multiple appointments at once?',
      answer:
        "C2-Graphics doesn't allow you to book multiple appointments at once. It'll only allow you to book them one at a time.",
    },
    {
      question: 'Do you allow same date bookings?',
      answer: 'No, we have implemented a strictly no same date booking policy.',
    },
    {
      question: 'How far in advance can I make a booking?',
      answer:
        'We recommend making reservations at least 1 day or more in advance to secure your preferred date and time.',
    },
    {
      question: 'Does C2-Graphics accept cancellations?',
      answer:
        'There is no cancellation policy because we only have a limited number of time slots available for clients.',
    },
    {
      question: 'Are there any refunds?',
      answer: 'No. We do not offer any refund.',
    },
  ]

  return (
    <>
      <div
        id='FAQs'
        className='flex md:px-36 px-4 flex-col items-center mb-10'
      >
        <h1 className=' font-lilita text-5xl text-[#970747] mb-10'>FAQs</h1>
        <div className='w-full font-lora'>
          {questions.map((item, i) => (
            <div
              key={i}
              className='cursor-pointer border border-b-black'
            >
              <div
                className='flex justify-between px-2 py-4 border border-t-black'
                onClick={() => toggle(i)}
              >
                <h2 className='text-xl font-semibold'>{item.question}</h2>
                <span className='text-3xl'>
                  {selected === i ? ' - ' : ' + '}
                </span>
              </div>
              <div
                className={
                  selected === i ? 'block py-4 px-2 text-lg' : 'hidden'
                }
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Faqs
