import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/events', label: 'Events' },
  { path: '/resources', label: 'Resources' },
  { path: '/team', label: 'Team' },
  { path: '/join', label: 'Get involved' },
]

export default function SiteNav() {
  return (
    <Navbar expand="lg" bg="danger" data-bs-theme="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          UW FinTech Club
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-nav" />
        <Navbar.Collapse id="primary-nav">
          <Nav className="ms-auto" navbarScroll>
            {links.map((link) => (
              <Nav.Link
                key={link.path}
                as={NavLink}
                to={link.path}
                end={link.path === '/'}
                className="text-nowrap"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
