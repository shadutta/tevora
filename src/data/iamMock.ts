export const kpis = {
  totalIdentities: 12482,
  accessReviewsCompleted: 318,
  highRiskAccessCount: 38,
  policyViolations: 14,
  coveragePct: 92,
}

export const accessByBusinessUnit = [
  { unit: 'Finance', privileged: 122, standard: 1084, exceptions: 18 },
  { unit: 'Engineering', privileged: 208, standard: 2860, exceptions: 31 },
  { unit: 'HR', privileged: 44, standard: 512, exceptions: 7 },
  { unit: 'Sales', privileged: 86, standard: 1674, exceptions: 22 },
  { unit: 'Operations', privileged: 132, standard: 2210, exceptions: 26 },
]

export const accessTrend = [
  { month: 'Nov', highRisk: 52, violations: 19, reviews: 38 },
  { month: 'Dec', highRisk: 48, violations: 18, reviews: 41 },
  { month: 'Jan', highRisk: 45, violations: 16, reviews: 55 },
  { month: 'Feb', highRisk: 43, violations: 15, reviews: 63 },
  { month: 'Mar', highRisk: 40, violations: 14, reviews: 71 },
  { month: 'Apr', highRisk: 38, violations: 14, reviews: 79 },
]

export const topAccessRisks = [
  {
    risk: 'Privileged access without recent review',
    count: 17,
    businessImpact: 'Audit exposure; elevated breach impact',
    recommendedAction: 'Accelerate review cycle; enforce review SLA',
  },
  {
    risk: 'Orphaned accounts in critical apps',
    count: 9,
    businessImpact: 'Unauthorized access paths',
    recommendedAction: 'Automate deprovisioning; reconcile source-of-truth',
  },
  {
    risk: 'Segregation of duties conflicts',
    count: 6,
    businessImpact: 'Fraud / control failure risk',
    recommendedAction: 'SoD policy + preventive controls; exception workflow',
  },
  {
    risk: 'Standing admin roles (non time-bound)',
    count: 4,
    businessImpact: 'Persistent elevated risk',
    recommendedAction: 'Introduce JIT / PAM controls; tighten role design',
  },
  {
    risk: 'High-risk entitlements outside job function',
    count: 2,
    businessImpact: 'Excess access; insider risk',
    recommendedAction: 'Role mining; least-privilege remediation',
  },
]

