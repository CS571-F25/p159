import SectionHeader from './SectionHeader'
import ResourceCard from './ResourceCard'

const resources = [
  {
    title: 'Starter Reading',
    description: 'Get the language down.',
    tag: 'Basics',
    items: [
      { label: 'a16z State of Crypto', href: 'https://a16zcrypto.com/state-of-crypto-report/' },
      { label: 'FedNow overview', href: 'https://www.frbservices.org/financial-services/fednow' },
      { label: 'How interchange works', href: 'https://stripe.com/blog/interchange-101' },
      { label: 'Modern fraud patterns', href: 'https://stripe.com/radar/guide' },
    ],
  },
  {
    title: 'Builder Kits',
    description: 'Launch a tiny prototype fast.',
    tag: 'Projects',
    items: [
      { label: 'Open banking sandbox', href: 'https://plaid.com/docs/sandbox/' },
      { label: 'On-chain analytics starter', href: 'https://dune.com/learn' },
      { label: 'React + Flask template', href: 'https://github.com/saadpasta/react-flask-app' },
      { label: 'UW data viz kit', href: 'https://uwdata.github.io/arquero/' },
    ],
  },
  {
    title: 'Career Prep',
    description: 'Practice real prompts.',
    tag: 'Careers',
    items: [
      { label: 'Mock case prompts', href: 'https://www.joincolossus.com/episodes/collections/cases' },
      { label: 'Resume swaps', href: 'https://www.resume.com/' },
      { label: 'Alumni contacts', href: 'https://www.linkedin.com/school/university-of-wisconsin-madison/people/' },
      { label: 'Interview rubric', href: 'https://stripe.com/blog/hiring-engineers' },
    ],
  },
  {
    title: 'Inclusive Practices',
    description: 'Design with accessibility in mind.',
    tag: 'UX',
    items: [
      { label: 'WCAG quickstart', href: 'https://www.w3.org/WAI/standards-guidelines/wcag/' },
      { label: 'Color contrast checker', href: 'https://webaim.org/resources/contrastchecker/' },
      { label: 'Form label checklist', href: 'https://www.smashingmagazine.com/2023/02/accessible-forms-interfaces/' },
      { label: 'Keyboard-friendly tips', href: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript' },
    ],
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
