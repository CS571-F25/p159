import { Button, Card, Col, Row, Stack } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="hero-card p-4 p-md-5 mb-4 shadow-sm">
        <SectionHeader
          title="UW–Madison FinTech Club"
          subtitle="A student-led hub for payments, crypto, and product builders on campus."
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
    </div>
  )
}
