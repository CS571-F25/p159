import { useMemo, useState } from 'react'
import { Alert, Button, Form, Stack } from 'react-bootstrap'

const trackPrompts = {
  payments: 'Start with our Rails 101 workshop and sign up for the Plaid sandbox walkthrough.',
  defi: 'Join the on-chain analytics lab and build a simple dashboard with our API guide.',
  careers: 'Visit the resume swap, then book a mock case with an alum from our directory.',
}

export default function InterestForm() {
  const [name, setName] = useState('')
  const [track, setTrack] = useState('payments')
  const [availability, setAvailability] = useState('weekly')
  const [newsletter, setNewsletter] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const planSummary = useMemo(() => {
    const friendlyName = name.trim() || 'Builder'
    const base = trackPrompts[track]
    const cadence =
      availability === 'weekly'
        ? 'We will route you to weekly builders meetups.'
        : 'We will match you with a project pod that meets bi-weekly.'
    const updates = newsletter
      ? 'You will also get a monthly digest with new events and roles.'
      : 'We will only follow up about your chosen track.'
    return `${friendlyName}, ${base} ${cadence} ${updates}`
  }, [availability, name, newsletter, track])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Form onSubmit={handleSubmit} aria-label="Get involved interest form">
      <Stack gap={3}>
        <Form.Group controlId="interestName">
          <Form.Label>Preferred name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Sam"
            required
          />
        </Form.Group>

        <Form.Group controlId="interestTrack">
          <Form.Label>What are you most curious about?</Form.Label>
          <Form.Select value={track} onChange={(event) => setTrack(event.target.value)}>
            <option value="payments">Payments + product</option>
            <option value="defi">DeFi + on-chain analytics</option>
            <option value="careers">Careers + recruiting prep</option>
          </Form.Select>
          <Form.Text className="text-secondary">
            Choose a track and we will recommend your first session.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="interestAvailability">
          <Form.Label>How often can you join us?</Form.Label>
          <Form.Check
            type="radio"
            id="weekly"
            name="availability"
            value="weekly"
            checked={availability === 'weekly'}
            label="Weekly meetups"
            onChange={(event) => setAvailability(event.target.value)}
          />
          <Form.Check
            type="radio"
            id="biweekly"
            name="availability"
            value="biweekly"
            checked={availability === 'biweekly'}
            label="Every other week"
            onChange={(event) => setAvailability(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="interestNewsletter">
          <Form.Check
            type="checkbox"
            label="Send me builder updates and internship drops"
            checked={newsletter}
            onChange={(event) => setNewsletter(event.target.checked)}
          />
        </Form.Group>

        <div className="d-flex align-items-center gap-3">
          <Button type="submit" variant="primary">
            Build my plan
          </Button>
          <span className="text-secondary small">
            We will not share your info outside the UW FinTech Club.
          </span>
        </div>

        {submitted && (
          <Alert variant="success" className="mb-0" aria-live="polite">
            {planSummary}
          </Alert>
        )}
      </Stack>
    </Form>
  )
}
