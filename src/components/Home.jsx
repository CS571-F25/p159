import { Button, Card, Col, Row, Stack } from 'react-bootstrap'
import SectionHeader from './SectionHeader'
import StatsStrip from './StatsStrip'
import EventCard from './EventCard'

const spotlight = {
  title: 'Builder Lab: Routing Payments',
  detail: 'Ship a simple checkout flow with risk checks and friendly UX patterns.',
  tag: 'Workshop',
  date: 'Feb 12 · 6pm · Grainger 1230',
  location: 'Engineering campus',
}

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="hero-card p-4 p-md-5 mb-4 shadow-sm">
        <SectionHeader
          title="UW–Madison FinTech Club"
          subtitle="A student-led hub for payments, crypto, and product builders on campus."
          headingLevel={1}
        />
        <Stack direction="horizontal" gap={3}>
          <Button variant="primary" href="#/events">
            See events
          </Button>
          <Button variant="outline-primary" href="#/resources">
            Browse resources
          </Button>
        </Stack>
      </div>

      <StatsStrip />

      <Row className="g-3">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Learn</Card.Title>
              <Card.Text>Weekly primers on rails, risk, and everything in between.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Build</Card.Title>
              <Card.Text>Projects, hack nights, and sandbox APIs to test your ideas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Connect</Card.Title>
              <Card.Text>Meet peers, alumni, and local startups shaping fintech in Madison.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm border-0">
        <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div>
            <div className="text-uppercase text-secondary small fw-semibold">Spotlight</div>
            <Card.Title as="h2" className="h4 mb-1">
              Up next on the calendar
            </Card.Title>
            <Card.Text className="text-secondary mb-0">
              We keep events small and hands-on, with demos you can repeat at home.
            </Card.Text>
          </div>
          <div className="flex-grow-1" style={{ minWidth: '280px' }}>
            <EventCard {...spotlight} />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
