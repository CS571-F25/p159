import { Badge, Card, Stack } from 'react-bootstrap'

export default function EventCard({ tag, title, detail, date, location }) {
  return (
    <Card className="h-100 shadow-sm border-0 event-card">
      <Card.Body>
        <Stack direction="horizontal" className="justify-content-between align-items-start gap-2 mb-2">
          <Badge bg="primary">{tag}</Badge>
          <span className="text-secondary small">{date}</span>
        </Stack>
        <Card.Title as="h3" className="h5">
          {title}
        </Card.Title>
        <Card.Text className="text-secondary small mb-3">{detail}</Card.Text>
        <div className="small text-secondary">
          <span className="fw-semibold text-dark">Where:</span> {location}
        </div>
      </Card.Body>
    </Card>
  )
}
