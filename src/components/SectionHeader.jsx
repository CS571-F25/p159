import { Stack } from 'react-bootstrap'

export default function SectionHeader({ title, subtitle }) {
  return (
    <Stack gap={1} className="section-header mb-4">
      <span className="eyebrow text-uppercase fw-semibold">UW FinTech Club</span>
      <h1 className="mb-0">{title}</h1>
      {subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
    </Stack>
  )
}
