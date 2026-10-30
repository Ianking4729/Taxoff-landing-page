import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'

function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you were looking for could not be found." />
      <PageHeader
        title="Page not found"
        sub="The page you were looking for doesn't exist or has moved."
        crumbs={[{ label: '404' }]}
      >
        <div className="page-header-actions">
          <Link to="/" className="btn-light">Back to Home</Link>
        </div>
      </PageHeader>
    </>
  )
}

export default NotFound
