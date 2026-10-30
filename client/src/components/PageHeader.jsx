import { Link } from 'react-router-dom'

// Banner at the top of every inner page (About, Contact, service pages).
function PageHeader({ label, title, sub, crumbs = [], children }) {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="crumb-sep">/</span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {label && <div className="page-header-label">{label}</div>}
        <h1>{title}</h1>
        {sub && <p className="page-header-sub">{sub}</p>}
        {children}
      </div>
    </header>
  )
}

export default PageHeader
