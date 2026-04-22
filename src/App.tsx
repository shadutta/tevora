import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  FileText,
  Fingerprint,
  Gauge,
  Mail,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { AnalyticsDashboard } from './components/AnalyticsDashboard'
import { ContactCTA } from './components/ContactCTA'
import { IamFramework } from './components/IamFramework'
import { Nav } from './components/Nav'
import { SectionShell } from './components/SectionShell'
import { ValueToTevora } from './components/ValueToTevora'

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-svh">
      <Nav />

      <main className="md:pl-[280px]">
        <div className="subtle-grid">
          <SectionShell id="home" kicker="Identity & Access Management" title="Shamik Dutta Majumdar">
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="chip">
                  <Fingerprint className="h-4 w-4 text-emerald-700" />
                  Passionate about IAM
                </div>

                <motion.h1
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink-950 md:text-5xl"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  Helping Tevora create <span className="text-emerald-700">secure</span>,{' '}
                  <span className="text-emerald-700">scalable</span>, and{' '}
                  <span className="text-emerald-700">business-aligned</span> identity solutions.
                </motion.h1>

                <motion.p
                  className="mt-5 max-w-[62ch] text-base leading-relaxed text-ink-900/80 md:text-lg"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
                >
                  I’m currently pursuing my MS in Information Systems at the Kelley School of Business,
                  graduating in May 2026. I completed my undergraduate degree in Business Administration
                  at the University at Buffalo and bring a global perspective from living and studying
                  across India, Vietnam, Thailand, and the U.S.
                </motion.p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a className="btn-primary" href="#framework">
                    View IAM Framework <ArrowRight className="h-4 w-4" />
                  </a>
                  <a className="btn-secondary" href="#tevora-value">
                    Why Tevora <Target className="h-4 w-4 text-emerald-700" />
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <div className="card p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                      <ShieldCheck className="h-4 w-4 text-emerald-700" />
                      Security consulting
                    </div>
                    <p className="mt-2 text-sm text-ink-900/75">
                      Governance-first identity that reduces risk without slowing the business.
                    </p>
                  </div>
                  <div className="card p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                      <ClipboardCheck className="h-4 w-4 text-emerald-700" />
                      Audit-ready control
                    </div>
                    <p className="mt-2 text-sm text-ink-900/75">
                      Clean access reviews, evidence, and policy alignment for compliance confidence.
                    </p>
                  </div>
                  <div className="card p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                      <BarChart3 className="h-4 w-4 text-emerald-700" />
                      Analytics & reporting
                    </div>
                    <p className="mt-2 text-sm text-ink-900/75">
                      Strategic dashboards that translate identity signals into decision-ready insights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="card-muted relative overflow-hidden p-6">
                  <div className="absolute inset-0">
                    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-200/45 blur-3xl" />
                    <div className="absolute -bottom-24 -right-28 h-64 w-64 rounded-full bg-emerald-300/35 blur-3xl" />
                    <div className="absolute left-1/2 top-10 h-[2px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
                    <div className="absolute left-1/2 top-10 h-10 w-10 -translate-x-1/2 rounded-full border border-emerald-500/30 bg-white/70 shadow-soft" />
                    <div className="absolute left-1/2 top-10 h-[2px] w-[60%] -translate-x-1/2 opacity-40">
                      <div className="h-full w-[40%] animate-shimmer bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-ink-950">Identity Risk Signal</div>
                      <div className="chip">
                        <Gauge className="h-4 w-4 text-emerald-700" />
                        Executive-ready view
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4">
                      <div className="rounded-xl border border-black/5 bg-white/80 p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900/60">
                              High-risk access
                            </div>
                            <div className="mt-2 text-3xl font-semibold tracking-tight text-ink-950">
                              38
                            </div>
                          </div>
                          <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700">
                            <ShieldCheck className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-black/5">
                          <div className="h-full w-[38%] rounded-full bg-emerald-600" />
                        </div>
                        <div className="mt-2 text-xs text-ink-900/60">
                          Prioritize remediation and approvals for privileged outliers.
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-black/5 bg-white/80 p-4">
                          <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                            <FileText className="h-4 w-4 text-emerald-700" />
                            Evidence by design
                          </div>
                          <p className="mt-2 text-sm text-ink-900/70">
                            Clear audit trails across provisioning, review, and exceptions.
                          </p>
                        </div>
                        <div className="rounded-xl border border-black/5 bg-white/80 p-4">
                          <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                            <ClipboardCheck className="h-4 w-4 text-emerald-700" />
                            Governance cadence
                          </div>
                          <p className="mt-2 text-sm text-ink-900/70">
                            Review cycles aligned to business units and risk tiering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -bottom-6 left-6 right-6 h-10 rounded-[24px] bg-emerald-200/20 blur-2xl" />
              </div>
            </div>
          </SectionShell>
        </div>

        <IamFramework />
        <AnalyticsDashboard />
        <ValueToTevora />

        <SectionShell
          id="about"
          kicker="About me"
          title="Business-minded. Security-driven. Client-focused."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="card p-6">
              <p className="text-base leading-relaxed text-ink-900/80">
                I bridge business and technology to help organizations strengthen identity governance,
                reduce access risk, and communicate outcomes in a way that resonates with stakeholders.
                I’m especially interested in IAM strategy, access reviews, policy design, reporting,
                and analytics that enable better decisions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'IAM lifecycle & operating models',
                  'Identity governance & access reviews',
                  'Risk & compliance reporting',
                  'Security analytics & dashboards',
                  'Client-focused problem solving',
                ].map((t) => (
                  <span key={t} className="chip">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div className="text-sm font-semibold text-ink-950">What I’d bring to Tevora</div>
              <ul className="mt-4 space-y-3 text-sm text-ink-900/75">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  A governance-first mindset: secure access that stays aligned to how the business
                  actually operates.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <BarChart3 className="h-4 w-4" />
                  </span>
                  Reporting that tells the story: risk trends, control health, and executive-ready
                  insights.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <ClipboardCheck className="h-4 w-4" />
                  </span>
                  Strong delivery habits: clear artifacts, repeatable frameworks, and stakeholder
                  communication.
                </li>
              </ul>
            </div>
          </div>
        </SectionShell>

        <ContactCTA />

        <footer className="border-t border-black/5 py-10">
          <div className="container-shell flex flex-col gap-2 text-sm text-ink-900/60 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Shamik Dutta Majumdar</div>
            <a
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800"
              href="#contact"
            >
              <Mail className="h-4 w-4" /> Connect
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
