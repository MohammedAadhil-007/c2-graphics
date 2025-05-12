import React from 'react'
import { useSearchParams } from 'react-router-dom'

const NotFound = () => {
  const [filterParams] = useSearchParams()
  return (
    <div>
      {filterParams.get('hour')} {filterParams.get('date')}{' '}
      {filterParams.get('price')}
    </div>
  )
}

export default NotFound
