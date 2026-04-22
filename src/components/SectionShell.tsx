import type { ReactNode } from 'react'

export function SectionShell({
  id,
  kicker,
  title,
  children,
}: {
  id: string
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <div className="container-shell">
        <div className="mb-10">
          <div className="section-kicker">{kicker}</div>
          <div className="mt-3 flex items-end justify-between gap-6">
            <h2 className="section-title">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}

