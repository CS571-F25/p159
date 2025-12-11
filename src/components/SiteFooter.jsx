import { Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router'

const footerLinks = [
  { path: '/events', label: 'Events' },
  { path: '/resources', label: 'Resources' },
  { path: '/team', label: 'Team' },
  { path: '/join', label: 'Get involved' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer py-4 mt-5">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
        <div>
          <div className="fw-bold text-uppercase small text-secondary">UW FinTech Club</div>
          <div className="text-secondary small">Building products, not just slide decks.</div>
        </div>
        <Nav className="gap-3 flex-wrap">
          {footerLinks.map((link) => (
            <Nav.Link
              as={NavLink}
              to={link.path}
              key={link.path}
              className="text-secondary small"
              end={link.path === '/'}
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </footer>
  )
}
