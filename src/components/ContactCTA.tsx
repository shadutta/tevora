import { ArrowRight, Building2, Mail } from 'lucide-react'
import { SectionShell } from './SectionShell'

export function ContactCTA() {
  return (
    <SectionShell
      id="contact"
      kicker="Contact"
      title="Let’s connect about IAM, governance, and analytics at Tevora"
    >
      <div className="card-muted overflow-hidden">
        <div className="relative p-8 md:p-10">
          <div className="absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/90" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="chip">
                <Building2 className="h-4 w-4 text-emerald-700" />
                Tevora-focused portfolio demo
              </div>
              <p className="mt-5 max-w-[70ch] text-base leading-relaxed text-ink-900/80">
                If you’re hiring for IAM consulting, identity governance, security reporting, or
                analytics-driven risk programs, I’d love to connect. I’m excited about building
                secure identity solutions that improve both security outcomes and business velocity.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="mailto:your.email@example.com">
                  Email me <Mail className="h-4 w-4" />
                </a>
                <a className="btn-secondary" href="#home">
                  Back to top <ArrowRight className="h-4 w-4 text-emerald-700" />
                </a>
              </div>

              <div className="mt-4 text-xs text-ink-900/55">
                Update the email link in <span className="font-semibold">`src/components/ContactCTA.tsx`</span>.
              </div>
            </div>

            <div className="card p-6">
              <div className="text-sm font-semibold text-ink-950">Quick summary</div>
              <div className="mt-4 space-y-3 text-sm text-ink-900/75">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  IAM lifecycle framing: governance → automation → assurance
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Reporting dashboards aligned to business units and risk priorities
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Consulting-ready narrative and artifacts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

