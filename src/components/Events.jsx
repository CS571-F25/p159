import { useMemo, useState } from 'react'
import { Card, Col, Form, Row, Stack } from 'react-bootstrap'
import SectionHeader from './SectionHeader'
import EventCard from './EventCard'

const eventItems = [
  {
    title: 'FinTech 101 Workshop',
    detail: 'Intro to payments, rails, risk, and real-world product decisions.',
    tag: 'Workshop',
    date: 'Jan 28 · 6pm',
    location: 'Grainger 1335',
    track: 'Foundations',
  },
  {
    title: 'DeFi Deep Dive',
    detail: 'Smart contracts and on-chain analytics with live dashboards.',
    tag: 'Tech Talk',
    date: 'Feb 4 · 7pm',
    location: 'Computer Sciences 1240',
    track: 'Crypto',
  },
  {
    title: 'Career Roundtable',
    detail: 'Alumni share their paths into product, risk, and venture.',
    tag: 'Networking',
    date: 'Feb 12 · 5pm',
    location: 'Union South',
    track: 'Careers',
  },
  {
    title: 'Builder Lab: Risk Reviews',
    detail: 'Run through sample fraud cases and decisioning frameworks.',
    tag: 'Workshop',
    date: 'Feb 19 · 6pm',
    location: 'Grainger 1230',
    track: 'Foundations',
  },
  {
    title: 'API Night: Open Banking',
    detail: 'Ship a quick integration with the Plaid sandbox and test data.',
    tag: 'Lab',
    date: 'Feb 26 · 6pm',
    location: 'Engineering Centers 1105',
    track: 'Builders',
  },
]

export default function Events() {
  const [selectedTrack, setSelectedTrack] = useState('All tracks')

  const filteredEvents = useMemo(() => {
    if (selectedTrack === 'All tracks') return eventItems
    return eventItems.filter((event) => event.track === selectedTrack)
  }, [selectedTrack])

  return (
    <div className="page-wrapper">
      <SectionHeader title="Events" subtitle="A quick look at our upcoming sessions." headingLevel={1} />
      <Card className="shadow-sm border-0 mb-3">
        <Card.Body>
          <Stack
            direction={{ xs: 'vertical', md: 'horizontal' }}
            className="justify-content-between align-items-start align-items-md-center gap-2"
          >
            <div>
              <div className="fw-semibold">Filter by track</div>
              <div className="text-secondary small">Pick the topics that match your goals.</div>
            </div>
            <Form.Select
              aria-label="Filter events by track"
              value={selectedTrack}
              onChange={(event) => setSelectedTrack(event.target.value)}
              style={{ maxWidth: '240px' }}
            >
              {['All tracks', 'Foundations', 'Crypto', 'Careers', 'Builders'].map((track) => (
                <option value={track} key={track}>
                  {track}
                </option>
              ))}
            </Form.Select>
          </Stack>
        </Card.Body>
      </Card>
      <h2 className="h5 fw-semibold">Upcoming sessions</h2>
      <Row className="g-3">
        {filteredEvents.map((event) => (
          <Col md={6} lg={4} key={event.title}>
            <EventCard {...event} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
