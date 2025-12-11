import { Badge, Card, ListGroup, Stack } from 'react-bootstrap'

export default function ResourceCard({ title, description, items, tag }) {
  return (
    <Card className="shadow-sm resource-card h-100">
      <Card.Body>
        <Stack direction="horizontal" gap={2} className="mb-2 align-items-start">
          <Badge bg="primary" className="text-uppercase">
            {tag}
          </Badge>
          <div className="text-secondary small">{description}</div>
        </Stack>
        <Card.Title as="h3" className="h5">
          {title}
        </Card.Title>
        <ListGroup variant="flush">
          {items.map((item) => (
            <ListGroup.Item key={item} className="small">
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}
