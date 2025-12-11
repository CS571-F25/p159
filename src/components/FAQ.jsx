import { Accordion } from 'react-bootstrap'
import SectionHeader from './SectionHeader'

const items = [
  {
    question: 'Do I need prior fintech experience?',
    answer: 'No. We teach fundamentals from payments to compliance and pair newer members with peer mentors.',
  },
  {
    question: 'How do project pods work?',
    answer:
      'Pods are 4-6 members who meet weekly to ship something small. We provide prompts, mentors, and API credits.',
  },
  {
    question: 'Can non-CS majors join?',
    answer:
      'Yes. We welcome business, econ, data, and design backgrounds—fintech products need many perspectives.',
  },
]

export default function FAQ({ headingLevel = 2 }) {
  return (
    <div className="faq-block">
      <SectionHeader title="Questions we hear" subtitle="Quick answers before you jump in." headingLevel={headingLevel} />
      <Accordion alwaysOpen>
        {items.map((item, index) => (
          <Accordion.Item eventKey={item.question} key={item.question}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}
