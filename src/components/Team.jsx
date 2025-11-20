import { Card, Col, Row } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

const teamMembers = [
  { name: 'Jiapeng Jiang', role: 'President', focus: 'Product + venture' },
  { name: 'Conan Lee', role: 'VP of Finance', focus: 'Technical workshops' },
  { name: 'Michael Tang', role: 'VP of Technology', focus: 'Startup collabs' },
]

export default function Team() {
  return (
    <div className="page-wrapper">
      <SectionHeader title="Meet the Team" subtitle="Students building a fintech playground on campus." />
      <Row className="g-3">
        {teamMembers.map((member) => (
          <Col md={4} key={member.name}>
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <div className="avatar-placeholder mb-3">{member.name[0]}</div>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-primary">{member.role}</Card.Subtitle>
                <Card.Text className="text-secondary">{member.focus}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
