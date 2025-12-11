import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <div className="page-wrapper">
      <SectionHeader
        title="About the Club"
        subtitle="We connect UW–Madison students to the future of finance and technology."
        headingLevel={1}
      />
      <h2 className="h5 fw-semibold">What drives us</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title as="h3" className="h5">
                What we do
              </Card.Title>
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
              <Card.Title as="h3" className="h5">
                Why join
              </Card.Title>
              <Card.Text>
                Meet founders, build projects, and discover internships across Madison and beyond.
                We pair curiosity with community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm border-0">
        <Card.Body>
          <SectionHeader
            title="How we work"
            subtitle="Three principles keep our community inclusive and hands-on."
            headingLevel={2}
          />
          <Row className="g-3">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    Ship small
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    We value shipping tiny, reliable prototypes over big decks. Every pod demos monthly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    Teach what you learn
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Workshops are peer-led. You do not have to be an expert—just willing to share a pattern that worked.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h3" className="h5">
                    Keep doors open
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    We make space for new voices and ensure events stay accessible, from captions to beginner-friendly labs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="shadow-sm border-0">
        <Card.Body>
          <SectionHeader title="Partners" subtitle="Campus orgs and startups we collaborate with." headingLevel={2} />
          <ListGroup horizontal className="flex-wrap">
            {['Badger Blockchain', 'WIT', 'Edgewood', 'Local startups'].map((partner) => (
              <ListGroup.Item key={partner} className="small">
                {partner}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}
