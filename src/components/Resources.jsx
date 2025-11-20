import { Card, ListGroup } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

const resources = [
  { title: 'Starter Reading', items: ['a16z State of Crypto', 'FedNow overview', 'Plaid docs'] },
  { title: 'Builder Kits', items: ['Open banking sandbox', 'DeFi data API', 'React + Flask starter'] },
  { title: 'Career Prep', items: ['Mock case prompts', 'Resume swaps', 'Alumni contacts'] },
]

export default function Resources() {
  return (
    <div className="page-wrapper">
      <SectionHeader title="Resources" subtitle="Handy links to kick off your fintech journey." />
      <div className="resource-grid">
        {resources.map((resource) => (
          <Card key={resource.title} className="shadow-sm">
            <Card.Body>
              <Card.Title>{resource.title}</Card.Title>
              <ListGroup variant="flush">
                {resource.items.map((item) => (
                  <ListGroup.Item key={item}>{item}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}
