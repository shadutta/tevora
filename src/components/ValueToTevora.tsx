import { BarChart3, ShieldCheck, Sparkles, Target, TrendingDown, Users } from 'lucide-react'
import { SectionShell } from './SectionShell'

const valueCards = [
  {
    title: 'Stronger security posture',
    Icon: ShieldCheck,
    body: 'Reduce privileged exposure, enforce least privilege, and close common identity attack paths.',
  },
  {
    title: 'Reduced compliance & access risk',
    Icon: TrendingDown,
    body: 'Evidence-ready reviews, policy alignment, and clean audit trails across identity lifecycle events.',
  },
  {
    title: 'Better governance & control',
    Icon: Target,
    body: 'Clear ownership, approvals, exception handling, and review cadence that scales with the organization.',
  },
  {
    title: 'Operational efficiency',
    Icon: Sparkles,
    body: 'Automate joiner/mover/leaver and access requests to cut manual effort while improving consistency.',
  },
  {
    title: 'Client reporting & visibility',
    Icon: BarChart3,
    body: 'Dashboards that communicate control health, risk drivers, and progress in a consulting-ready format.',
  },
  {
    title: 'Trusted advisory impact',
    Icon: Users,
    body: 'Translate identity data into business decisions: prioritize remediation, align stakeholders, and show ROI.',
  },
]

export function ValueToTevora() {
  return (
    <SectionShell id="tevora-value" kicker="Value to Tevora" title="Why IAM matters—beyond the tooling">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card p-6">
          <div className="text-sm font-semibold text-ink-950">Consulting perspective</div>
          <p className="mt-3 text-sm leading-relaxed text-ink-900/75">
            IAM succeeds when it’s communicated as a business capability: clear governance, measurable
            risk reduction, and operational efficiency. For Tevora and its clients, that means
            identity becomes a trusted control layer—supporting growth while improving security and
            audit outcomes.
          </p>

          <div className="mt-6 rounded-xl border border-black/5 bg-emerald-25 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900/55">
              Outcome narrative
            </div>
            <div className="mt-2 text-sm font-semibold text-ink-950">
              “Here is what changed, why it matters, and what we recommend next.”
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink-900/75">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Control health and review completion trends
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Risk hotspots by business unit and application criticality
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Remediation plan: least privilege, SoD, lifecycle automation, and governance cadence
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {valueCards.map(({ title, body, Icon }) => (
            <div key={title} className="card p-6 transition hover:-translate-y-0.5 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-25 text-emerald-700 shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-950">{title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-ink-900/75">{body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

