import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useOrganizationList } from '@clerk/clerk-react'

type PrivateRouteProps = {
  allowedRoles: string[]
}

const PrivateRoute = ({ allowedRoles }: PrivateRouteProps) => {
  const { organizationList, isLoaded } = useOrganizationList()

  if (!isLoaded) return <>Loading...</>
  if (isLoaded) {
    let auth = {
      token: true,
    }
    return allowedRoles.includes(
      organizationList[0]?.membership.role
        ? organizationList[0]?.membership.role
        : 'test'
    ) ? (
      <Outlet />
    ) : auth?.token ? (
      <Navigate to='/unauthorize' />
    ) : (
      <Navigate to='/login' />
    )
  }

  return <></>
}

export default PrivateRoute
