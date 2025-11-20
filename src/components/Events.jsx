import { Badge, Card, Col, Row } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

const eventItems = [
  { title: 'FinTech 101 Workshop', detail: 'Intro to payments, rails, and risk', tag: 'Workshop' },
  { title: 'DeFi Deep Dive', detail: 'Smart contracts + on-chain analytics', tag: 'Tech Talk' },
  { title: 'Career Roundtable', detail: 'Alumni paths in product and risk', tag: 'Networking' },
]

export default function Events() {
  return (
    <div className="page-wrapper">
      <SectionHeader title="Events" subtitle="A quick look at our upcoming sessions." />
      <Row className="g-3">
        {eventItems.map((event) => (
          <Col md={4} key={event.title}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Badge bg="primary" className="mb-2">
                  {event.tag}
                </Badge>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text className="text-secondary">{event.detail}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
