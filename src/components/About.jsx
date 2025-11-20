import { Card, Col, Row } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <div className="page-wrapper">
      <SectionHeader
        title="About the Club"
        subtitle="We connect UW–Madison students to the future of finance and technology."
      />
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>What we do</Card.Title>
              <Card.Text>
                From DeFi explainers to hands-on Python workshops, we help students explore fintech
                with real demos and alumni insights.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Why join</Card.Title>
              <Card.Text>
                Meet founders, build projects, and discover internships across Madison and beyond.
                We pair curiosity with community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
