import { motion, useReducedMotion } from 'framer-motion'
import {
  AlarmClockCheck,
  ClipboardList,
  Eye,
  Fingerprint,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { SectionShell } from './SectionShell'

type Stage = {
  title: string
  Icon: React.ComponentType<{ className?: string }>
  description: string
  outcomes: string[]
}

const stages: Stage[] = [
  {
    title: 'Identify',
    Icon: Fingerprint,
    description:
      'Establish identity sources of truth, application inventory, and access patterns to build a reliable baseline.',
    outcomes: ['Authoritative data', 'Identity lifecycle clarity', 'App onboarding readiness'],
  },
  {
    title: 'Govern',
    Icon: ClipboardList,
    description:
      'Define policies, roles, approvals, and review cadence so access is aligned to business accountability.',
    outcomes: ['Policy alignment', 'Role clarity', 'Audit-ready evidence'],
  },
  {
    title: 'Provision',
    Icon: ShieldCheck,
    description:
      'Automate joiner/mover/leaver and access request workflows to deliver least privilege with speed and control.',
    outcomes: ['Faster onboarding', 'Reduced manual effort', 'Consistent controls'],
  },
  {
    title: 'Monitor',
    Icon: Eye,
    description:
      'Continuously track access changes, privileged assignments, and policy drift to surface risk early.',
    outcomes: ['Risk visibility', 'Control health signals', 'Exception tracking'],
  },
  {
    title: 'Review',
    Icon: AlarmClockCheck,
    description:
      'Run targeted access reviews and certifications with clear ownership, SLAs, and evidence capture.',
    outcomes: ['Compliance confidence', 'Clean attestations', 'Stakeholder accountability'],
  },
  {
    title: 'Remediate',
    Icon: Wrench,
    description:
      'Close the loop: remove excess access, resolve violations, and refine roles and policies to reduce recurrence.',
    outcomes: ['Least privilege improvement', 'Reduced violations', 'Continuous maturity'],
  },
]

export function IamFramework() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell
      id="framework"
      kicker="IAM framework"
      title="A strategic lifecycle that delivers secure access and measurable outcomes"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card p-6">
          <div className="text-sm font-semibold text-ink-950">How I think about IAM</div>
          <p className="mt-3 text-sm leading-relaxed text-ink-900/75">
            Strong IAM is not just tooling. It’s an operating model that connects identity data,
            governance, automation, and continuous assurance—so security controls support business
            efficiency and compliance readiness.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              {
                label: 'Security',
                detail: 'Reduce privileged exposure and enforce least privilege',
              },
              { label: 'Compliance', detail: 'Evidence-ready access reviews and policy control' },
              { label: 'Efficiency', detail: 'Automated workflows that scale with the business' },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border border-black/5 bg-white/70 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900/55">
                  {row.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-ink-950">{row.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-muted overflow-hidden p-6">
          <div className="relative">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-ink-950">Lifecycle flow</div>
                <div className="mt-1 text-sm text-ink-900/70">
                  Designed for governance, reporting, and continuous improvement
                </div>
              </div>
              <div className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Strategy → Delivery → Assurance
              </div>
            </div>

            <div className="grid gap-3">
              {stages.map((s, idx) => {
                const Icon = s.Icon
                return (
                  <motion.div
                    key={s.title}
                    className="relative rounded-xl border border-black/5 bg-white/80 p-4 shadow-soft"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: idx * 0.04, ease: 'easeOut' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-25 text-emerald-700 shadow-soft">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="text-base font-semibold text-ink-950">
                            <span className="mr-2 text-emerald-700">{idx + 1}.</span>
                            {s.title}
                          </div>
                          <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-black/5 via-emerald-500/20 to-black/5 md:block" />
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink-900/75">
                          {s.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.outcomes.map((o) => (
                            <span
                              key={o}
                              className="inline-flex items-center rounded-full border border-black/5 bg-white px-3 py-1 text-xs font-semibold text-ink-900/70"
                            >
                              {o}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {idx < stages.length - 1 ? (
                      <div className="pointer-events-none absolute -bottom-3 left-6 h-6 w-6 rounded-full border border-emerald-500/20 bg-white shadow-soft" />
                    ) : null}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

