import { Stack } from 'react-bootstrap'

export default function SectionHeader({ title, subtitle, headingLevel = 1 }) {
  const safeHeading = Math.min(Math.max(headingLevel, 1), 6)
  const HeadingTag = `h${safeHeading}`

  return (
    <Stack gap={1} className="section-header mb-4">
      <span className="eyebrow text-uppercase fw-semibold">UW FinTech Club</span>
      <HeadingTag className="mb-0">{title}</HeadingTag>
      {subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
    </Stack>
  )
}
