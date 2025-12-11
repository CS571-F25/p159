import SectionHeader from './SectionHeader'
import ResourceCard from './ResourceCard'

const resources = [
  {
    title: 'Starter Reading',
    description: 'Get the language down.',
    tag: 'Basics',
    items: ['a16z State of Crypto', 'FedNow overview', 'How interchange works', 'Modern fraud patterns'],
  },
  {
    title: 'Builder Kits',
    description: 'Launch a tiny prototype fast.',
    tag: 'Projects',
    items: ['Open banking sandbox', 'On-chain analytics starter', 'React + Flask template', 'UW data viz kit'],
  },
  {
    title: 'Career Prep',
    description: 'Practice real prompts.',
    tag: 'Careers',
    items: ['Mock case prompts', 'Resume swaps', 'Alumni contacts', 'Interview rubric'],
  },
  {
    title: 'Inclusive Practices',
    description: 'Design with accessibility in mind.',
    tag: 'UX',
    items: ['WCAG quickstart', 'Color contrast checker', 'Form label checklist', 'Keyboard-friendly tips'],
  },
]

export default function Resources() {
  return (
    <div className="page-wrapper">
      <SectionHeader title="Resources" subtitle="Handy links to kick off your fintech journey." headingLevel={1} />
      <h2 className="h5 fw-semibold">Collections curated by members</h2>
      <div className="resource-grid">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>
    </div>
  )
}
