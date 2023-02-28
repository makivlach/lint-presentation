import { Link } from 'react-router-dom'
import { AppLayout } from '~/components/layout/AppLayout'
import { routes } from '~/constants'

export const HomePage: React.FC = () => {
  return <AppLayout>
    <Link to={routes.HomePage}>Home</Link>
    <Link to={routes.ExhaustiveDependencies}>Exhaustive dependencies</Link>
  </AppLayout>
}