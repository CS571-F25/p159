import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import SectionHeader from './SectionHeader'
import InterestForm from './InterestForm'
import FAQ from './FAQ'

const steps = [
  {
    title: 'Show up to a workshop',
    detail: 'Pick any 101 session—payments, security, or DeFi. We start each with a quick primer.',
  },
  {
    title: 'Join a project pod',
    detail: 'Build something small with 4-6 peers. We ship in four weeks and demo at the showcase.',
  },
  {
    title: 'Meet mentors',
    detail: 'Chat with alumni at Baird, Stripe, and startups to learn how they broke into fintech.',
  },
]

export default function GetInvolved() {
  return (
    <div className="page-wrapper">
      <SectionHeader
        title="Get involved"
        subtitle="Tell us how you want to plug in—we will route you to the right pod, workshop, or mentor."
      />

      <Row className="g-4 align-items-stretch">
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title as="h2" className="h4">
                Build your starter plan
              </Card.Title>
              <Card.Text className="text-secondary">
                Share a bit about what you want to learn. We will suggest a track and send you next steps.
              </Card.Text>
              <InterestForm />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title as="h2" className="h4">
                What getting involved looks like
              </Card.Title>
              <ListGroup variant="flush">
                {steps.map((step) => (
                  <ListGroup.Item key={step.title}>
                    <div className="fw-semibold">{step.title}</div>
                    <div className="text-secondary small">{step.detail}</div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <FAQ headingLevel={2} />
    </div>
  )
}
