import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import { ClerkProvider, SignedIn, SignIn, SignUp } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from 'react-query'

import HomePage from './pages/HomePage'
import Layout from './layout/Layout'
import NotFound from './pages/NotFound'
import PackageCheckout from './features/Services/PackageCheckout'
import SignInUser from './components/SignInUser'
import SuccessPage from './pages/SuccessPage'
// import PersistLogin from './helpers/PersistLogin'
import PrivateRoute from './helpers/PrivateRoute'
import Dashboard from './pages/Dashboard'

const clerk_pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function ClerkProviderWithRoutes() {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      publishableKey={clerk_pub_key}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route
          path='/package/:id'
          element={<PackageCheckout />}
        />
        <Route
          path='/sign-in/*'
          element={<SignInUser />}
        />
        <Route
          path='/success'
          element={<SuccessPage />}
        />
        {/* </Route> */}
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<HomePage />}
          />
        </Route>
        {/* admin components */}
        {/* <Route element={<PersistLogin />}> */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
        </Route>
        {/* </Route> */}

        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </ClerkProvider>
  )
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: 'always',
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ClerkProviderWithRoutes />
      </Router>
    </QueryClientProvider>
  )
}

export default App
