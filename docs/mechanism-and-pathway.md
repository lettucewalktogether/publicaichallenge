# Public Innovation Challenge — Mechanism & Pathway

**City of Kansas City, Missouri**
**The reusable specification for any public innovation challenge (AI or otherwise)**

---

## 0. How to use this document

A public innovation challenge has three separable parts. This document is **Part 2** —
the half that does not change between challenges.

| Part | What it is | Changes per challenge? |
|------|-----------|------------------------|
| **Part 1 — The Challenge** | The service problem, domain, use cases, data, and success definition for *one* challenge. | **Yes** — written fresh each time. |
| **Part 2A — Pathway** | The *route*: stages, gates, decision points, and how commitment advances or stops. | **No** — fixed. |
| **Part 2B — Mechanism** | The *rulebook*: standing clauses, requirements, evaluation machinery, terms, and governance. | **No** — fixed, with per-instance parameters. |

To run a new challenge: write Part 1, fill the **parameter block** (§1), and execute
Parts 2A and 2B unchanged. Do not redesign the process.

### Authority and instrument

This specification is deliberately **authority-neutral**. The legal instrument and the
procurement authority for each challenge are set per-instance by the Procurement
Division and the Law Department, and recorded in the parameter block (**P1**). Nothing
in this document asserts an authority basis of its own.

> *Note on AR 3-27:* KCMO Administrative Regulation 3-27 (Innovation Partnerships) was
> evaluated as a possible vehicle and **set aside** — it is structured for *inbound,
> unsolicited* partnership proposals and contains no competitive selection method for
> choosing among multiple competing teams. See [`ar-3-27-assessment.md`](./ar-3-27-assessment.md)
> for the full assessment and rationale.

### The one invariant

> **Buy evidence in stages. Increase commitment only after a gate is passed.**

Commitment — scope, data access, and funding — is monotonic and evidence-gated. The City
never expands on the strength of a demonstration, a claim, or optimism. It expands only
on documented performance against a pre-declared threshold. Everything below enforces
that single rule.

---

## 1. Parameter block

Fill this before solicitation. These are the only values that change between challenges.

| # | Parameter | Set by | Notes |
|---|-----------|--------|-------|
| **P1** | **Instrument & procurement authority** | Procurement + Law | What the Stage 1 agreement legally *is*, and the authority it is issued under. **Must be resolved before announcement.** |
| **P2** | Service problem | Sponsoring dept | What is failing for residents or staff. Not a product description. |
| **P3** | Target outcome + baseline metrics | Sponsoring dept | Measured current state (§A2). Improvement cannot be shown without it. |
| **P4** | Sponsoring department + challenge lead | Sponsoring dept | Accountable owner of the service outcome. |
| **P5** | Risk tier (`LOW`/`MEDIUM`/`HIGH`) | Sponsor + Legal | Scales gate rigor (§1.1). |
| **P6** | Teams selected / advanced | Sponsor | Default: up to 3 in Stage 1; discretionary subset to Stage 2. |
| **P7** | Stage durations | Sponsor | Default: Stage 1 = 45 days; Stage 2 ≤ 6 months. |
| **P8** | Stage 1 stipend (per team) | Sponsor + Finance | Partial support, not full cost recovery (§B1.2). |
| **P9** | Stage 2 structure & payment | Sponsor + Procurement | Amount, milestones, and instrument. |
| **P10** | Scoring weights | Sponsor | Defaults in §B5.1. Must total 100. |
| **P11** | Gate thresholds | Sponsor + SMEs | Numeric pass criteria (§B5.4). **No gate may be left qualitative.** |
| **P12** | Proposal limits | Sponsor | Default: 18-page technical narrative. |
| **P13** | Roadmap horizon | Sponsor | Default: 12–18 months. |
| **P14** | Challenge package contents | Sponsor + SMEs | Per §B3.1. Includes the ground-truth benchmark set. |
| **P15** | Evaluation panel + COI screen | Procurement | Named evaluators, aggregation method, conflict rules (§B5.5). |

> **Readiness rule:** if a parameter cannot be stated, the challenge is not ready to
> solicit. An undefined problem (P2), an unmeasured baseline (P3), or an unresolved
> instrument (P1) fails Gate 0 by definition.

### 1.1 Risk tier — the one branch

Risk tiering is a KCMO construct. It is not drawn from any single precedent.

| Tier | Definition | Effect |
|------|-----------|--------|
| **LOW** | Advisory staff aid. A human makes every consequential decision. No effect on eligibility, enforcement, employment, or access to services. | Baseline thresholds and governance. |
| **MEDIUM** | Materially shapes staff decisions or resident-facing timelines; a human still decides and can readily override. | + equity/performance-variation testing at Gate 2; broader review panel at Gate 4. |
| **HIGH** | Affects eligibility, enforcement, employment, benefits, or access to services. | Highest thresholds; mandatory appeal path; independent legal sign-off at every gate; no advancement on a single evaluator. |

Set once; never relaxed mid-challenge, only raised. **Default for a first-of-kind
challenge: LOW / advisory.**

---

# PART A — PATHWAY

*The route a challenge travels, and the decision points along it.*

## A1. Stage map

```
  STAGE 0            STAGE 1                    STAGE 2                  FOLLOW-ON
  Internal      Co-Design Challenge        Controlled Pilot         Implementation
  Readiness     (default 45 days)          (default ≤ 6 months)     or Conclusion
      │                │                          │                       │
     G0            G1 · G2 · G3                 G4 · G5              separate City
  no vendor      stipend paid on            governance first;        decision, separate
  engagement     accepted deliverables      then shadow operation    procurement action
  before this
      │                │                          │                       │
      └── commitment ──┴──────── increases only through a passed gate ────┘
```

Each stage ends in a decision. Every decision has three outcomes: **ADVANCE**,
**REMEDIATE**, or **STOP**. Stopping is a planned, legitimate result — the purpose of
staging is a clean, low-cost exit before dependency grows.

## A2. Stage 0 — Internal readiness *(no vendor contact)*

The stage most often skipped, and the most common cause of failed pilots. Stage 0 is
City-internal work that must be complete **before the announcement is published**.

| Readiness item | Owner | Why it blocks |
|---|---|---|
| **Service problem defined** (P2) | Sponsor | A challenge for an undefined problem cannot be evaluated. |
| **Baseline measured** (P3) | Sponsor + data | *Improvement is unprovable without current-state numbers.* Measure cycle time, rework/resubmittal rate, consistency/variance, and first-pass outcomes **before** the challenge starts. |
| **Ground-truth benchmark set built** (P14) | SMEs | The blind evaluation set and benchmark findings require SME adjudication of correct answers. This is **the critical path** — scope and staff it first. |
| **Data readiness confirmed** | Data owner | Availability, format/machine-readability, quality, classification, and PII posture. |
| **System-of-record integration confirmed feasible** | Technology | Stage 1 may exclude integration, but Stage 2 requires it. Confirm before advertising a pilot. |
| **City staff capacity committed** | Sponsor | SME hours, co-design sessions × N teams in parallel, named backfill. The City's own labor is a real cost. |
| **Instrument & authority resolved** (P1) | Procurement + Law | Determines competition rules, thresholds, and protest rights. |
| **Governance minimum available** | CDO / Technology | Any review, questionnaire, or attestation the challenge will require must exist or be defined inline. |
| **Funding confirmed** (P8, P9) | Finance | Stipends and pilot. |
| **Risk tier set** (P5) | Sponsor + Legal | Drives everything downstream. |

**→ Gate 0.** All items resolved, or explicitly waived in writing with rationale.

## A3. Stage 1 — Co-Design Challenge *(default 45 days)*

**Purpose:** combine structured co-design with formal demonstration under common,
City-defined test conditions. The City evaluates **working capability and team
performance**. Vendor-selected demonstrations and written descriptions alone do not
satisfy the requirements.

**Not** production deployment, enterprise integration, or ground-up development of a new
platform. Deliverables must be proportionate to the duration and the defined use cases.

**Work plan:**

| Step | Activities | Required output |
|---|---|---|
| 1. Discovery | Workflow observation, staff interviews, process mapping, issue identification | Current-state workflow and issue summary |
| 2. Requirements translation | Map approved City sources to testable functions, controls, and outputs | Use-case and requirements document |
| 3. Configuration & iteration | Configure prototype, test development cases, document changes | Working prototype and change log |
| 4. Controlled evaluation | Run common and blind test cases under defined rules | Comparable performance results |
| 5. Findings & pilot plan | Present results, limitations, dependencies, recommended pilot scope | Final report and pilot work plan |

**→ Gates 1, 2, 3.**

## A4. Stage 2 — Controlled Pilot *(default ≤ 6 months)*

Advancement is **discretionary**. Passing Stage 1 earns eligibility, not entitlement. The
City may advance no team, one team, or more than one.

**Gate 4 must be fully complete before any controlled operational use begins.**

**Milestones:**
1. **Pilot readiness** — security review, configuration, access controls, training, data controls complete.
2. **Controlled validation** — meet defined accuracy and error thresholds on a City-controlled test set.
3. **Shadow operation** — process selected submissions alongside staff, without independently generating official decisions.
4. **Workflow assessment** — measure staff time, consistency, turnaround, usability, operational burden.
5. **Operational readiness** — document integration, support, governance, maintenance, and transition requirements.

**→ Gate 5.**

## A5. Follow-on

A separate City decision, under a separate procurement action. Participation in Stage 1
or Stage 2 grants **no exclusivity and no automatic preference**. Neither stage
authorizes production deployment absent separate written City approval.

## A6. Gate ladder

| Gate | Question | Fires |
|------|----------|-------|
| **G0 — Readiness & Authority** | Is the problem defined, the baseline measured, the ground truth built, the data ready, the instrument resolved, and City capacity committed? | End of Stage 0, before announcement |
| **G1 — Problem & Workflow Understanding** | Accurate current-state workflow · defined problem statement · identified user groups and decision points · documented staff and applicant needs · clear boundary between AI/tool support and City authority · recognition of what requires policy, process, staffing, or training change rather than technology. | Early Stage 1 |
| **G2 — Controlled Technical Performance** | Acceptable performance in material-issue detection · false positives · missed findings · source traceability · uncertainty handling · repeatability · staff-deferral rules · data handling · environment security controls. | Late Stage 1 |
| **G3 — Initial Staff Usability & Adoption** | Staff can complete defined tasks after basic orientation · understand the basis for findings · verify, modify, reject, or escalate · identify when the tool may be wrong · operate without continuous vendor direction. | Stage 1 → 2 boundary |
| **G4 — Governance Readiness** | All applicable reviews complete: security, privacy, legal, accessibility, public-records/retention, data governance · equity and performance-variation testing plan · incident-response procedures · department lead designated · responsibility matrix · training and support plan. | **Before** Stage 2 operational use |
| **G5 — Pilot Performance** | Accuracy by issue type and severity · review and verification time · staff adoption and overrides · applicant-facing effects · operational reliability · policy compliance · maintenance and support burden · resource requirements · performance after material changes · **and the City can exit without losing data or continuity.** | During and at end of Stage 2 |

A team may be declined advancement for failing a required gate **regardless of its
overall score**.

## A7. Decision outcomes

```
for each gate G:
    evidence = required_artifacts(G)              # §B4 — no artifact, no score
    if pass_fail_item_failed(evidence):  STOP     # mandatory items are absolute
    score = evaluate(evidence, weights, threshold(G, risk_tier))
    if   score >= threshold:   ADVANCE            # commitment may increase
    elif remediable:           REMEDIATE          # correct and re-test; commitment held flat
    else:                      STOP               # conclude; City retains data and results
```

**Possible City actions after Stage 1:** invite one or more teams to Stage 2 · request
limited corrective work where the rules permit · narrow or revise the pilot scope ·
conclude the challenge without advancing any team.

## A8. Commitment ladder

| Stage | Scope | Data access | Funding |
|---|---|---|---|
| 0 | Internal only | None external | City staff time |
| 1 | Defined use cases, controlled test set | Approved sample/representative materials | Stipend per team (P8) |
| 2 | Broader operational conditions, shadow → controlled use | Live/operational data under Gate 4 controls | Pilot funding (P9) |
| Follow-on | Production, per separate approval | Per executed agreement | Separate procurement |

---

# PART B — MECHANISM

*The rules that govern participation, evaluation, and terms.*

## B1. Standing clauses

Reproduce in every challenge announcement.

**B1.1 No guarantee of further work.** Selection for Stage 1 does not guarantee
advancement to Stage 2 or any future City action. The City may end the challenge after
either stage.

**B1.2 Stipend and participant contribution.** The Stage 1 stipend provides *partial*
support for required activities and accepted deliverables. It may not cover a team's
full cost. Each team determines whether and to what extent it contributes additional
personnel, technology, or resources. **The City will not reimburse costs beyond the
stated stipend.**

**B1.3 Separate decisions.** Acceptance of deliverables, payment of the stipend,
advancement to the next stage, and any future City action are **separate decisions**.
Completion of a stage does not guarantee advancement, a pilot, procurement preference, or
future work.

**B1.4 Future competition.** Participation grants no exclusivity and no automatic
preference in a future procurement. The City may use challenge findings and City-owned
materials to plan or conduct future procurement activities, subject to applicable law and
the rights established in the challenge agreement.

**B1.5 No production authorization.** No stage authorizes production deployment unless
the City provides separate written approval.

## B2. Participation model

**B2.1 Existing or substantially developed capability.** Respondents must propose an
existing or substantially developed capability that can be *configured* for the defined
use cases. A challenge is not intended to fund development of a new enterprise platform
from the ground up.

**B2.2 Forward-deployed engineering.** Each selected team assigns qualified technical
personnel — forward-deployed engineers, solution/implementation engineers, applied
specialists, or comparable functions — to work directly with designated City staff to:

- Observe and document current workflows
- Translate approved City source materials into testable system requirements
- Configure prompts, rules, retrieval methods, models, integrations, and output formats
- Test with City-provided materials and review errors with staff
- Identify conditions in which the system should defer to staff
- Document data flows, security controls, third-party services, and dependencies
- Train designated City staff to use and evaluate the prototype
- Maintain a configuration, issue, and decision log

*The City evaluates assigned personnel on the functions they perform and the results they
produce, not on job title.*

**B2.3 Human-centered discovery and adoption.** Teams must conduct focused discovery with
affected staff and supervisors; document the current workflow, roles, decision points,
exceptions, verification needs, and sources of delay or rework; conduct usability testing
to determine whether staff can understand, verify, modify, reject, and explain findings;
identify adoption barriers and work that may shift to another role; and demonstrate that
staff can complete defined tasks **without continuous vendor direction**.

**B2.4 Co-design boundaries.** City staff provide operational knowledge, approved source
materials, representative examples, and feedback. Each team remains responsible for
technical design, configuration, performance, documentation, and compliance. **City
participation does not constitute approval for production use or acceptance of vendor
technology.** City staff retain responsibility for official interpretation and City
decisions.

## B3. Scope control

**B3.1 Challenge package.** Before Stage 1 begins, the City provides a package defining
the work. It must identify:

1. Included application/project types
2. Included review or process activities
3. Applicable City requirements and source documents
4. Number and general complexity of development cases
5. Number and general complexity of **blind evaluation cases**
6. Anticipated file types, sizes, and volume ranges
7. Required prototype inputs and outputs
8. Expected format for findings and source references
9. Planned co-design sessions and anticipated staff availability
10. Permitted data classifications and approved access methods
11. Activities and integrations **excluded** from Stage 1
12. Conditions for requesting clarification, and for City revision of materials

**B3.2 Default Stage 1 exclusions.** Unless expressly included in the package, Stage 1
does not require: integration with production systems of record · applicant- or
resident-facing deployment · automated communication with applicants · production data
migration · enterprise identity integration · payment-system integration · unattended
automated decision-making.

**B3.3 No unilateral scope expansion.** The City will not require a participant to
complete materially expanded work outside the defined scope without a written amendment
or other authorized adjustment.

## B4. Deliverables

**B4.1 Minimum Stage 1 deliverables** *(evidence for G1–G3)*

| Deliverable | Feeds |
|---|---|
| **Workflow and user-needs summary** — current process, affected roles, decision points, recurring problems, verification needs, conditions requiring City judgment | G1 |
| **Configured prototype** — working solution configured for the defined use cases | G2 |
| **Requirements traceability matrix** — tested functions connected to applicable City requirements | G2 |
| **Controlled test results** — correct findings, missed findings, incorrect findings, uncertainty referrals, results by issue severity | G2 |
| **Technical disclosure** — architecture, data flow, models, third-party services, hosting, significant dependencies | G2/G4 |
| **Human-centered test findings** — usability, staff verification time, accepted/rejected findings, workflow exceptions, adoption barriers | G3 |
| **Limitations and risk summary** — known limitations, unsupported uses, prohibited data practices, conditions requiring deferral to staff | G1/G2 |
| **Proposed Stage 2 plan** — scope, milestones, staffing, City resource needs, assumptions, and principal cost drivers (licensing structure, third-party charges, usage-based fees, integration assumptions, storage, support, separately licensed functions) | Advancement |

**B4.2 Required only of a team being considered for Stage 2** *(evidence for G4)* — not
required of every Stage 1 participant:

- Completed City vendor questionnaire and AI Fact Sheet *(or equivalent per P1 governance set)*
- Detailed security, privacy, accessibility, public-records, retention, and data-governance documentation
- Equity and performance-variation testing protocol
- Incident-response and suspension procedures
- Prohibited-capability and secondary-data-use attestation
- Material-change notification and re-review plan
- Detailed responsibility matrix and department lead designation
- Role-based training, operational support, and change-management plan
- Model/system update, monitoring, lifecycle, and retirement procedures

**B4.3 Acceptance.** Payment is based on timely completion and City acceptance of
required activities and deliverables — **not** on comparative score or advancement. The
City may reject a deliverable that is incomplete, materially inconsistent with
requirements, unsupported by submitted evidence, or not in the required format, and may
allow a limited correction opportunity where the agreement permits.

## B5. Evaluation machinery

**B5.1 Scored categories and default weights** (P10 — must total 100)

| # | Category | Weight | Includes |
|---|----------|:---:|---|
| 1 | **Controlled technical performance** | **30%** | Accuracy and completeness · missed findings · incorrect findings · error severity · reliability |
| 2 | **Explainability and staff control** | **20%** | Traceability · source references · uncertainty handling · ability to accept, revise, reject, or escalate |
| 3 | **Workflow usefulness** | **15%** | Verification time · clarity · workflow fit · effect on repetitive work |
| 4 | **Co-design and engineering performance** | **15%** | Responsiveness · configuration quality · documentation · knowledge transfer |
| 5 | **Human-centered adoption feasibility** | **10%** | Staff ability to use and understand · adoption barriers · workload effects · ability to operate without continuous vendor direction |
| 6 | **Operational and governance readiness** | **10%** | Architecture · data flow · third-party dependencies · initial security and policy disclosures · next-stage readiness |

**Unweighted / informational:** future roadmap and interoperability. Roadmap information
may inform the City's understanding of longer-term fit but **will not outweigh
demonstrated performance**, and will not substitute for it.

**B5.2 Pass/fail items.** Evaluated as mandatory requirements, not scored criteria. A team
failing any is ineligible for advancement **regardless of total score**:

- Safety and material-error handling
- Security and approved data handling
- Prohibited data use (including training on City data without authorization)
- Preservation of staff decision authority

**B5.3 Error severity.** Evaluate the *types and consequences* of errors rather than a
single overall accuracy percentage. Classify findings as: **critical or life-safety ·
material · minor · administrative · informational**. Thresholds are set per class (P11).

**B5.4 Thresholds — mandatory.** Each gate must carry a **numeric or otherwise
objectively testable** pass criterion, set in P11 before the announcement publishes and
disclosed to respondents.

> **A gate without a threshold is not a gate.** "Acceptable performance" is not a
> criterion. Minimum thresholds in critical categories must be stated as numbers, ranges,
> or explicit pass conditions, per severity class where applicable.

**B5.5 Evaluation panel and conflicts.** Per P15, the City records before proposals are
opened: named evaluators and their roles · the score aggregation method · tie-breaking ·
minimum thresholds. No person may evaluate who has a financial, employment, or familial
relationship with a respondent, or any other conflict of interest. Conflict screening is
documented. For HIGH tier, no advancement may rest on a single evaluator.

**B5.6 Two-step evaluation.** *Initial selection* is based on the written proposal and
respondent qualifications. *Advancement* is based primarily on **observed performance**
during the stage. Both must have stated criteria; they are not the same criteria.

**B5.7 Adoption measures** (Stage 1 evaluates adoption *feasibility* — not department-wide
adoption or sustained production use):
- Percentage of participating staff able to complete defined prototype tasks after basic orientation
- Time to learn the tool; time to verify its findings
- Percentage of findings accepted, modified, rejected, or escalated, with documented reasons
- Number and type of workflow exceptions requiring manual intervention
- Whether the solution reduces work, moves work to another role, or creates downstream rework
- Whether staff can complete the test workflow without continuous vendor direction

## B6. Proposal requirements

**B6.1 Format.** Technical and management proposal not to exceed **P12 pages** (default
18); cover page excluded. 8.5×11, margins ≥ 0.5", font ≥ 9pt, pages numbered, one
searchable PDF unless the portal specifies otherwise. Required City forms,
certifications, architecture disclosures, security questionnaires, fact sheets, and
attestations are excluded from the narrative limit; **all other attachments count toward
it.** The City may decline to evaluate material beyond the limit.

**B6.2 Required organization.** Cover page · executive summary and approach ·
understanding of the domain and workflow · co-design and forward-deployed engineering
plan · technical approach, explainability, and human-review controls · testing,
validation, and error management · security, privacy, records, accessibility, and data
governance · team qualifications, key personnel, level of effort, availability · product
roadmap and future readiness · next-stage approach and assumptions · required declarations
and certifications · human-centered adoption, change-management, and knowledge transfer ·
City policy alignment and readiness to complete next-stage governance forms · summary of
equity, accessibility, public-records, incident-response, and material-change approach.

**B6.3 Available vs. future capability.** Respondents must identify which proposed
capabilities are **currently available and demonstrable at the start of Stage 1**, and
distinguish them from functions requiring development during Stage 1 or Stage 2,
third-party products, or future roadmap releases. For each roadmap item, state whether it
is in the current product, requires an additional license, depends on a third party, or
requires separate configuration or development.

**B6.4 AI-use declaration.** Each respondent must disclose whether generative AI or other
automated content-generation tools were used to prepare any part of the proposal. **Use
of AI does not by itself disqualify a proposal.** The declaration must identify: whether
tools were used · the name and general purpose of each · the portions for which a tool
provided material assistance · the human review and verification performed · whether any
City confidential or nonpublic information was entered into an external service.

> **Required certification:** *The respondent certifies that it reviewed and verified the
> full proposal; accepts responsibility for all statements, commitments, citations,
> calculations, and representations; and did not enter City confidential or nonpublic
> information into an unauthorized AI service.*

If no tool was used: *"No generative AI or automated content-generation tool was used to
construct this proposal."*

**B6.5 Team qualifications.** Experience configuring systems for operational workflows ·
relevant domain experience · ability to process the relevant document types · experience
translating approved policies into testable functions · ability to evaluate unsupported
output and document limitations · demonstrated security, privacy, accessibility, and
records practices · availability for the full duration and a potential pilot. The proposal
must name the lead engineer and level of effort, supporting staff, SMEs, subcontractors,
escalation contacts, and personnel expected to continue into the next stage. **Changes to
key personnel may require City approval.**

## B7. City obligations

**B7.1 Challenge environment.** The City provides approved source materials and guidance ·
representative complete and incomplete submissions · examples containing known issues ·
common test scenarios and benchmark findings · **a reserved blind-test set** · scheduled
access to designated SMEs · defined data-use, security, confidentiality, and records
requirements.

**B7.2 City commitments.** Designate a challenge manager and operational decision-makers ·
schedule timely access to staff and supervisors · provide source materials, development
cases, blind evaluation set, and benchmark findings · respond promptly to documented
questions · provide a controlled method for data access · review deliverables and
communicate decisions on schedule.

**B7.3 Schedule dependency.** The schedule depends on timely access to City staff,
materials, decisions, and approved data. If a material City dependency is delayed, the
City may adjust the affected schedule, test sequence, or deliverable date.

**B7.4 Comparable treatment.** The City provides reasonably comparable materials, staff
access, and co-design opportunity to all participating teams, and **documents and
distributes material clarifications** that could affect multiple teams or the comparative
evaluation. One named person coordinates operational questions; one defined process
resolves questions requiring policy, technology, security, legal, or procurement review.

**B7.5 City governance roles.** Designate a departmental sponsor, challenge lead, process
owner(s), and department lead for the technology. Affected staff participate in
discovery, testing, workflow design, evaluation, training, and review. Technology,
cybersecurity, data, legal, procurement, records, accessibility, equity, and
communications personnel participate when their review or decision is required. **The
City retains responsibility for policy, interpretation, staffing, process ownership,
employee communications, and operational decisions. Vendors support these activities but
do not make City governance decisions.**

## B8. Data, intellectual property, and security

**B8.1 Access controls.** Use only approved hosting, storage, transfer, and remote-access
methods · disclose third-party models, services, hosting providers, and subcontractors ·
return or delete City data as directed after each stage.

**B8.2 Intellectual property — six-part split.**

| Category | Rule |
|---|---|
| **City materials** | City data, source documents, test cases, benchmark findings, staff-created materials, applicant information, and other City-provided materials **remain under City control**. |
| **Vendor background technology** | Preexisting vendor software, models, methods, tools, templates, prompts, configurations, and documentation **remain the vendor's property**, except as stated in an executed agreement. |
| **Challenge results** | The City **must** have the right to retain and use test results, performance measures, evaluation records, workflow documentation, issue logs, and other City-funded deliverables for internal evaluation, governance, audit, public accountability, and procurement planning. |
| **City-specific configurations** | The agreement identifies the City's rights to retain, examine, use, and transfer City-specific configurations, requirements mappings, comment structures, test methods, and documentation. |
| **General product improvements** | Remain the vendor's property. The vendor **may not** incorporate City confidential information, applicant data, City-specific test cases, or protected City materials into a general product without written authorization. |
| **Data and derived data** | The vendor **may not** sell, license, share, commercialize, retain beyond authorized periods, or use City data or derived data to train, test, or improve unrelated models or products. |

**B8.3 Portability, transition, and exit.** Respondents must describe how the City can
retrieve its data, configurations, findings, audit records, and other City-owned materials
in documented, usable formats, and identify: proprietary formats · required third-party
services · export capabilities · documented interfaces and APIs · restrictions on
transferring configurations · available transition support · data-deletion procedures ·
dependencies that could make replacement difficult · functions that would cease if a
subscription, model service, or integration ends.

*Stage 1 does not require a complete transition plan. A detailed transition and exit plan
may be required before Stage 2 or any operational use.* **A solution the City cannot exit
has not passed G5, regardless of performance.**

## B9. Technology governance and lifecycle

**B9.1 Review and re-review.** Complete the applicable City review before controlled
operational use. Support re-review after any **material change**.

**B9.2 Material change — definition.** Any of:

1. Replacement of the underlying model
2. Material model-version update
3. Change to system prompts or instructions affecting behavior
4. Change to City source documents or requirements
5. Addition of an integration or external tool
6. Change in data inputs or data classification
7. Expansion to a new application type or user group
8. Introduction of autonomous or agentic functions
9. Change in hosting environment
10. Change in a material subcontractor or third-party provider
11. Material change in retention, logging, or data-use practices

The City may require re-testing or re-review before a materially changed capability is
used.

**B9.3 Human oversight and accountability.** Identify the intended form of human oversight
for each function and document **who may review, approve, override, suspend, or
terminate** system activity. Maintain a responsibility matrix covering the departmental
sponsor, process owner, department lead, supervisors, staff, technology, security, legal,
procurement, and vendor personnel.

**B9.4 Equity and accessibility.** Test performance variation across relevant submission
types, conventions, file quality, project conditions, and applicant pathways. **Do not
infer protected characteristics from submitted documents or use them as decision
factors.** Staff- and applicant-facing outputs must meet applicable accessibility and
plain-language requirements.

**B9.5 Public records and auditability.** Outputs, system logs, user actions, source
references, evaluation records, and decision records must be **exportable and retainable**
as required by City policy and Missouri public-records requirements.

**B9.6 Incident response and suspension.** Procedures for identifying and reporting
incidents, suspending affected functions, preserving records, correcting affected
outputs, supporting investigation, and defining restoration criteria.

**B9.7 Prohibited capabilities and secondary use.** Disclose prohibited, latent, or
configurable capabilities and provide written controls preventing unauthorized
activation.

## B10. Human review and decision authority

Non-negotiable invariants for any advisory system:

1. **Output is advisory.**
2. **Authorized City staff retain responsibility** for official findings and decisions.
3. Staff must be able to **accept, modify, or reject** system-generated findings.
4. The system must **identify uncertainty and defer** unsupported conclusions.
5. Material findings must be **traceable** to submitted documents and approved City requirements.
6. The system must preserve an **auditable record** of output and staff action.
7. Production use, if any, requires defined **monitoring, escalation, and change-control** procedures.

---

# Appendices

## Appendix A — Per-instance open-items register

Track to closure before the announcement publishes. Carry unresolved items visibly.

| # | Item | Owner | Status |
|---|------|-------|--------|
| 1 | Instrument classification and procurement authority (P1) | Procurement + Law | |
| 2 | Competitive threshold analysis | Procurement | |
| 3 | MBE/WBE participation goals and local preference | Procurement | |
| 4 | Insurance, indemnification, liability, bonding | Law + Risk | |
| 5 | Protest, dispute, and debrief procedures | Procurement | |
| 6 | Proposal confidentiality / trade-secret handling (Sunshine Law) | Law + Records | |
| 7 | Records retention schedule and duration | Records | |
| 8 | Termination and suspension rights | Law | |
| 9 | Subcontractor approval process | Procurement | |
| 10 | Baseline metrics measured (P3) | Sponsor | |
| 11 | Ground-truth benchmark and blind-test set built (P14) | SMEs | |
| 12 | City staff capacity plan and backfill | Sponsor | |
| 13 | Data classification and PII posture | Data owner | |
| 14 | System-of-record integration feasibility | Technology | |
| 15 | Gate thresholds set as numbers (P11) | Sponsor + SMEs | |
| 16 | Evaluation panel named; COI screened (P15) | Procurement | |
| 17 | Governance forms available or defined inline | CDO / Technology | |
| 18 | Stage 2 payment structure and instrument (P9) | Procurement + Finance | |
| 19 | Follow-on procurement pathway | Procurement | |
| 20 | Labor consultation, if represented staff affected | HR / Labor | |
| 21 | Liability allocation for consequential errors | Law | |
| 22 | Applicant/resident disclosure and appeal path | Sponsor + Law | |
| 23 | Council and public communication plan | CDO + Communications | |
| 24 | City success/failure definition stated | Sponsor + CDO | |

## Appendix B — Design precedents

Reference models only; not KCMO legal authority. Each shares the discipline in §0:
*define the need, limit the first commitment, evaluate evidence, expand only after
performance.*

| Precedent | Contributes |
|---|---|
| **FAR 39.103** — modular contracting | Smaller, interoperable, separately testable increments |
| **Challenge-Based Acquisition** (MITRE v5) | State the operational need, invite approaches, assess demonstrated capability |
| **DARPA Grand Challenge / 10 U.S.C. §4025** | Pay for demonstrated achievement; define outcome, not design |
| **NASA COTS** — Space Act Agreements | Funded milestones; end on insufficient progress |
| **SBIR Phase I/II/III** | Commitment rises with evidence |
| **15 U.S.C. §3719** — prize competitions | Announcement elements; participant-IP default; judge conflict rules |
| **FAR Part 12** | Converting a proven pilot into an operating purchase |
| **D.C. AI Procurement Handbook** (Feb 2025) | AI notification clause reaching embedded and undisclosed AI; vendor AI Factsheet; contract addendum overriding conflicting vendor license terms |
| **Long Beach; Miami-Dade Innovation Authority** | Municipal challenge format; down-select funnel; funded pilots |
| **GAO-26-107859** (Apr 2026) | Applying AI-acquisition lessons learned |

## Appendix C — Scoring worksheet

| Category | Weight | Threshold (P11) | Score | Weighted |
|---|:---:|:---:|:---:|:---:|
| Controlled technical performance | 30 | | | |
| Explainability and staff control | 20 | | | |
| Workflow usefulness | 15 | | | |
| Co-design and engineering performance | 15 | | | |
| Human-centered adoption feasibility | 10 | | | |
| Operational and governance readiness | 10 | | | |
| **Total** | **100** | | | |

**Pass/fail items** (§B5.2) — any failure = ineligible regardless of total:

☐ Safety and material-error handling ☐ Security and approved data handling
☐ Prohibited data use ☐ Preservation of staff decision authority

**Error severity results** (§B5.3):

| Severity | Correct | Missed | Incorrect | Referred |
|---|---|---|---|---|
| Critical / life-safety | | | | |
| Material | | | | |
| Minor | | | | |
| Administrative | | | | |
| Informational | | | | |

---

*Part 2 of the KCMO Public Innovation Challenge specification. Part 1 (the Challenge) is
written per instance — see [`instance-cpd-residential-plan-review.md`](./instance-cpd-residential-plan-review.md)
for the first worked example.*
