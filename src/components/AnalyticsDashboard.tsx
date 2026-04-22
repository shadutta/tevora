import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { AlertTriangle, BarChart3, CheckCircle2, ShieldAlert, Users } from 'lucide-react'
import { SectionShell } from './SectionShell'
import { accessByBusinessUnit, accessTrend, kpis, topAccessRisks } from '../data/iamMock'

function formatNumber(n: number) {
  return Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n)
}

function KpiCard({
  label,
  value,
  hint,
  icon,
}: {
  label: string
  value: string
  hint: string
  icon: React.ReactNode
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900/55">
            {label}
          </div>
          <div className="mt-2 text-3xl font-semibold tracking-tight text-ink-950">{value}</div>
          <div className="mt-2 text-sm text-ink-900/70">{hint}</div>
        </div>
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-25 p-2 text-emerald-700 shadow-soft">
          {icon}
        </div>
      </div>
    </div>
  )
}

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="card p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-ink-950">{title}</div>
          <div className="mt-1 text-sm text-ink-900/70">{subtitle}</div>
        </div>
        <div className="chip">
          <BarChart3 className="h-4 w-4 text-emerald-700" />
          Presentation-ready
        </div>
      </div>
      <div className="mt-5 h-[280px]">{children}</div>
    </div>
  )
}

function TooltipBox({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ name?: string; value?: number; color?: string }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-black/10 bg-white px-3 py-2 shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900/55">
        {label}
      </div>
      <div className="mt-1 space-y-1">
        {payload.map((p) => (
          <div key={`${p.name}-${p.value}`} className="flex items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: p.color ?? '#10b981' }}
              />
              <span className="text-ink-900/75">{p.name}</span>
            </div>
            <span className="font-semibold text-ink-950">{formatNumber(p.value ?? 0)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AnalyticsDashboard() {
  return (
    <SectionShell
      id="analytics"
      kicker="Reporting & analytics"
      title="Dashboards that connect identity risk to business decisions"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          label="Total identities"
          value={formatNumber(kpis.totalIdentities)}
          hint="Authoritative and application identities"
          icon={<Users className="h-5 w-5" />}
        />
        <KpiCard
          label="Access reviews completed"
          value={formatNumber(kpis.accessReviewsCompleted)}
          hint="Quarter-to-date certifications closed"
          icon={<CheckCircle2 className="h-5 w-5" />}
        />
        <KpiCard
          label="High-risk access count"
          value={formatNumber(kpis.highRiskAccessCount)}
          hint="Privileged outliers requiring action"
          icon={<ShieldAlert className="h-5 w-5" />}
        />
        <KpiCard
          label="Policy violations"
          value={formatNumber(kpis.policyViolations)}
          hint="SoD and lifecycle control breaches"
          icon={<AlertTriangle className="h-5 w-5" />}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Access by business unit"
          subtitle="Where privileged access and exceptions concentrate"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={accessByBusinessUnit} margin={{ left: 8, right: 16, top: 12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(2, 6, 23, 0.06)" />
              <XAxis dataKey="unit" tick={{ fill: 'rgba(10, 28, 20, 0.65)', fontSize: 12 }} />
              <YAxis tick={{ fill: 'rgba(10, 28, 20, 0.65)', fontSize: 12 }} />
              <Tooltip content={<TooltipBox />} />
              <Bar dataKey="standard" name="Standard" stackId="a" fill="#d4f2e3" radius={[8, 8, 0, 0]} />
              <Bar dataKey="privileged" name="Privileged" stackId="a" fill="#18a866" radius={[8, 8, 0, 0]} />
              <Bar dataKey="exceptions" name="Exceptions" stackId="a" fill="#0f6f46" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Access trend over time"
          subtitle="High-risk access, violations, and review throughput"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={accessTrend} margin={{ left: 8, right: 16, top: 12 }}>
              <defs>
                <linearGradient id="hr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#18a866" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#18a866" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f8a54" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="#0f8a54" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(2, 6, 23, 0.06)" />
              <XAxis dataKey="month" tick={{ fill: 'rgba(10, 28, 20, 0.65)', fontSize: 12 }} />
              <YAxis tick={{ fill: 'rgba(10, 28, 20, 0.65)', fontSize: 12 }} />
              <Tooltip content={<TooltipBox />} />
              <Area
                type="monotone"
                dataKey="highRisk"
                name="High-risk access"
                stroke="#18a866"
                fill="url(#hr)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="violations"
                name="Policy violations"
                stroke="#0f6f46"
                fill="url(#rev)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="reviews"
                name="Reviews closed"
                stroke="#0f8a54"
                fill="transparent"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="card p-6">
          <div className="text-sm font-semibold text-ink-950">Top access risks</div>
          <div className="mt-1 text-sm text-ink-900/70">
            A consulting-ready view of risk drivers and actions
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-black/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-emerald-25">
                <tr className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/60">
                  <th className="px-4 py-3">Risk</th>
                  <th className="px-4 py-3">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {topAccessRisks.map((r) => (
                  <tr key={r.risk} className="bg-white">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-ink-950">{r.risk}</div>
                      <div className="mt-1 text-xs text-ink-900/60">{r.businessImpact}</div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-ink-950">{r.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-muted p-6">
          <div className="text-sm font-semibold text-ink-950">Strategic insight</div>
          <div className="mt-1 text-sm text-ink-900/70">
            How these metrics map to governance and client value
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Control health score',
                value: `${kpis.coveragePct}%`,
                detail: 'Coverage across critical applications and privileged roles',
              },
              {
                title: 'Review velocity',
                value: '↑ 2.1x',
                detail: 'Improved completion rate by targeting high-risk populations',
              },
              {
                title: 'Risk burn-down',
                value: '↓ 27%',
                detail: 'Reduction in high-risk access over the last two quarters',
              },
              {
                title: 'Decision-ready reporting',
                value: 'Exec + audit',
                detail: 'One narrative from operational data to board-level outcomes',
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-black/5 bg-white/80 p-4 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900/55">
                  {c.title}
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">{c.value}</div>
                <div className="mt-2 text-sm text-ink-900/70">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

