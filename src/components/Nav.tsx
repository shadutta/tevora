import { motion, useReducedMotion } from 'framer-motion'
import {
  BarChart3,
  CircleUser,
  Compass,
  Fingerprint,
  LayoutGrid,
  Mail,
  Target,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type NavItem = {
  id: string
  label: string
  Icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Overview', Icon: Compass },
  { id: 'framework', label: 'IAM Framework', Icon: Fingerprint },
  { id: 'analytics', label: 'Reporting & Analytics', Icon: BarChart3 },
  { id: 'tevora-value', label: 'Value to Tevora', Icon: Target },
  { id: 'about', label: 'About', Icon: CircleUser },
  { id: 'contact', label: 'Contact', Icon: Mail },
]

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { root: null, threshold: [0.15, 0.25, 0.35, 0.45], rootMargin: '-20% 0px -65% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}

export function Nav() {
  const reduceMotion = useReducedMotion()
  const ids = useMemo(() => navItems.map((n) => n.id), [])
  const active = useActiveSection(ids)

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[280px] border-r border-black/5 bg-white/70 backdrop-blur md:block">
        <div className="flex h-full flex-col px-5 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-25 shadow-soft">
              <LayoutGrid className="h-5 w-5 text-emerald-700" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink-950">Tevora IAM Demo</div>
              <div className="text-xs text-ink-900/55">Single-page consulting style</div>
            </div>
          </div>

          <nav className="mt-7 flex flex-col gap-1">
            {navItems.map(({ id, label, Icon }) => {
              const isActive = active === id
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={[
                    'group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-emerald-25 text-ink-950'
                      : 'text-ink-900/70 hover:bg-emerald-25 hover:text-ink-950',
                  ].join(' ')}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-black/5 bg-white shadow-soft transition group-hover:border-emerald-500/20">
                    <Icon className={['h-4 w-4', isActive ? 'text-emerald-700' : 'text-ink-900/70'].join(' ')} />
                  </span>
                  <span>{label}</span>

                  {isActive ? (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-xl border border-emerald-500/15 bg-emerald-25"
                      transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    />
                  ) : null}
                </a>
              )
            })}
          </nav>

          <div className="mt-auto">
            <div className="card p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900/55">
                Positioning
              </div>
              <div className="mt-2 text-sm font-semibold text-ink-950">
                IAM • Security consulting • Analytics
              </div>
              <div className="mt-2 text-sm text-ink-900/70">
                Governance-first identity with executive-ready reporting.
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur md:hidden">
        <div className="container-shell flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-25 shadow-soft">
              <LayoutGrid className="h-5 w-5 text-emerald-700" />
            </span>
            <span className="text-sm font-semibold text-ink-950">Tevora IAM Demo</span>
          </a>

          <div className="flex gap-2">
            {navItems.slice(0, 4).map(({ id, Icon, label }) => {
              const isActive = active === id
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-label={label}
                  className={[
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border transition',
                    isActive
                      ? 'border-emerald-500/20 bg-emerald-25 text-emerald-700'
                      : 'border-black/10 bg-white text-ink-900/70 hover:bg-emerald-25 hover:text-emerald-700',
                  ].join(' ')}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </header>
    </>
  )
}

