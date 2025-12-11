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
          {items.map((item) => {
            const label = typeof item === 'string' ? item : item.label
            const href = typeof item === 'string' ? undefined : item.href

            return (
              <ListGroup.Item key={label} className="small">
                {href ? (
                  <a href={href} className="text-reset text-decoration-none" target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ) : (
                  label
                )}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}
