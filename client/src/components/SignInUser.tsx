import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInUser = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <SignIn
        routing='path'
        path='/sign-in'
        afterSignInUrl='/'
      />
    </div>
  )
}

export default SignInUser
