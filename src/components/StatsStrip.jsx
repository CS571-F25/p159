import { Card, Col, Row } from 'react-bootstrap'

const stats = [
  { label: 'Active members', value: '140+', detail: 'Product managers, engineers, and designers' },
  { label: 'Events per semester', value: '18', detail: 'Hands-on labs, panels, and build nights' },
  { label: 'Partner orgs', value: '12', detail: 'Campus teams, startups, and alumni mentors' },
]

export default function StatsStrip() {
  return (
    <Row className="g-3">
      {stats.map((stat) => (
        <Col md={4} key={stat.label}>
          <Card className="h-100 stat-card shadow-sm border-0">
            <Card.Body>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="mb-0 text-secondary small">{stat.detail}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
