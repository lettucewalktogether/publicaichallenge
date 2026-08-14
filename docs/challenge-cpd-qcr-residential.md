# Part 1 — The Challenge: CPD QCR & Residential Plan Review

**City of Kansas City, Missouri — City Planning & Development (CPD)**
**Public AI Innovation Challenge: AI support for Quality Control Review and residential plan review**

---

## 0. How this document works

This is **Part 1 — the Challenge**: the CPD-specific half of the challenge. It defines
*what* problem is being solved, in *what* domain, against *what* materials, and to *what*
standard of success.

The reusable half — stages, gates, evaluation machinery, proposal rules, terms, and
governance — lives in **[`mechanism-and-pathway.md`](./mechanism-and-pathway.md)** and is
**not restated here**. Read them together. Where this document sets a value, it is filling
a parameter (P1–P15) defined in the mechanism spec.

**Status:** procurement intake request submitted; instrument and details being finalized
with the Procurement Division and Law. AR 3-27 was evaluated and set aside
([`ar-3-27-assessment.md`](./ar-3-27-assessment.md)).

**Funding:** confirmed — 3 teams × $20,000 = **$60,000**, funded by the sponsoring
department.

---

## 1. The service problem

CPD's **Quality Control Review (QCR)** intake and **residential plan review for one- and
two-family homes** is slow and inconsistent. Incomplete submissions are not always caught
at intake, findings vary between reviewers, review cycles repeat avoidably, and the basis
for findings is not consistently traceable or auditable.

**What the City is testing:** whether qualified teams can help staff identify missing
information earlier, improve first-pass screening, reduce avoidable review cycles, and
prepare clearer review information.

> **What this is not.** AI output will support staff work. It will **not** replace City
> review, professional judgment, code interpretation, or permitting authority. Authorized
> City staff retain responsibility for all official review findings and permitting
> decisions.

---

## 2. Parameter block (filled)

| # | Parameter | Value |
|---|-----------|-------|
| **P1** | Instrument & authority | Set by Procurement + Law. Intake submitted; **open item**. |
| **P2** | Service problem | §1 above. |
| **P3** | Target outcome + baseline | §3 below. **Baseline measurement is an open item — see §9.** |
| **P4** | Sponsor + challenge lead | CPD. Departmental sponsor, challenge lead, QCR process owner, residential review process owner, and Department AI Lead to be designated. |
| **P5** | Risk tier | **LOW — advisory.** Output supports staff judgment; staff decide. No effect on eligibility, enforcement, or access to services. |
| **P6** | Teams | Up to **3** in Stage 1; discretionary subset to Stage 2. |
| **P7** | Durations | Stage 1: **45 days.** Stage 2: **up to 6 months.** |
| **P8** | Stage 1 stipend | **$20,000 per team** ($60,000 total), on accepted deliverables. |
| **P9** | Stage 2 structure & payment | **Open item** — amount, milestones, instrument. |
| **P10** | Scoring weights | Mechanism spec §B5.1 defaults (30/20/15/15/10/10). |
| **P11** | Gate thresholds | **Open item** — must be set as numbers by severity class before announcement. |
| **P12** | Proposal limit | **18 pages** technical/management narrative. |
| **P13** | Roadmap horizon | **12–18 months.** |
| **P14** | Challenge package | §5 below. Ground-truth set is an **open item**. |
| **P15** | Evaluation panel & COI | **Open item** — Procurement. |

---

## 3. Objectives and target outcomes

### 3.1 QCR intake and completeness review
- Identify documents included in a submission
- Identify required documents or information that appear to be missing
- Compare submitted materials with applicable intake requirements
- Organize findings for staff verification
- Distinguish clear deficiencies from issues requiring staff judgment

### 3.2 Residential plan screening
- Screen plan sets for common review issues
- Identify potentially missing or inconsistent information
- Connect proposed findings to applicable City requirements
- Direct reviewers to the relevant drawing, page, detail, or document
- Refer uncertain or complex conditions to staff

### 3.3 Consistency and workflow support
- Support consistent treatment of similar submissions
- Prepare standardized comments where appropriate
- Maintain traceable findings and an auditable review record
- Reduce repetitive screening without creating excessive verification work
- Fit within the current QCR and residential review workflow

### 3.4 Human-centered adoption and organizational readiness
- Engage affected staff in structured discovery, workflow design, testing, and evaluation
- Identify changes to roles, responsibilities, review practices, training, supervision, and applicant communications
- Measure whether staff can understand, verify, modify, reject, and explain AI-assisted findings
- Determine whether the solution reduces work, shifts work to another role, or creates new verification burdens
- Evaluate whether the workflow can be sustained without continuous vendor involvement
- Distinguish problems addressable through technology from problems requiring **policy, process, staffing, training, or organizational change**

---

## 4. The City's review framework

CPD's residential review framework is defined in **Information Bulletins IB100, IB115,
IB171-RE, and IB172**, covering one- and two-family dwelling submittals, express review
pathways, and residential energy-code compliance.

These provide an established, documented basis for controlled testing — real review
conditions, real submission expectations, and measurable outcomes. They are the primary
source against which the **requirements traceability matrix** (mechanism spec §B4.1) must
map, and the reference for findings' source citations.

---

## 5. Challenge package — CPD specifics

Per mechanism spec §B3.1. To be completed before Stage 1 begins.

| Package element | CPD value |
|---|---|
| Included application/project types | One- and two-family residential |
| Included activities | QCR intake and completeness review; residential plan screening |
| Applicable requirements | IB100, IB115, IB171-RE, IB172, plus City-provided review guidance |
| Development cases | **TBD** — count and complexity |
| Blind evaluation cases | **TBD** — count and complexity |
| File types / sizes / sheet ranges | **TBD** — plan sets, forms, supporting documents |
| Prototype inputs and outputs | **TBD** |
| Findings and source-reference format | Must cite drawing, page, detail, or document |
| Co-design sessions and SME availability | **TBD** — QCR staff, plan reviewers, supervisors |
| Permitted data classifications and access | **TBD** — Data KC |
| Excluded from Stage 1 | Per mechanism spec §B3.2 defaults: no production permitting-system integration, no applicant-facing deployment, no automated applicant communication, no unattended decisions |

**Stage 1 exclusion note:** integration with the production permitting system is excluded
from Stage 1 but required for Stage 2 — feasibility must be confirmed before the
announcement publishes (§9).

---

## 6. Team qualifications — CPD-specific

Beyond the general qualifications in mechanism spec §B6.5, respondents should demonstrate:

- Experience with **municipal permitting, plan review, architecture, engineering, construction, or code administration**
- Ability to process **drawings, forms, plans, and technical documents**
- Experience translating **approved policies and code requirements** into testable functions

---

## 7. What success looks like for CPD

Success is **not** a working demo. Success is a documented answer to: *can an AI-assisted
tool improve first-pass screening consistency and completeness on residential submittals,
under real review conditions, with findings staff can verify and trace — and can CPD
operate it?*

A well-run challenge that concludes **without advancing any team** is a successful
challenge. It costs $60,000 and a documented "no," in place of a multi-year dependency on
a tool that does not fit. Advancement is discretionary; the City may advance no team, one,
or more than one.

---

## 8. Error severity for this domain

Per mechanism spec §B5.3, findings are classified by consequence rather than a single
accuracy percentage:

| Severity | CPD meaning |
|---|---|
| **Critical / life-safety** | Structural, egress, fire, or life-safety implications |
| **Material** | Substantive code or submission issue affecting approvability |
| **Minor** | Correctable issue with limited consequence |
| **Administrative** | Form, format, or completeness housekeeping |
| **Informational** | Observation not requiring action |

Thresholds are set per class (P11). **A missed critical/life-safety finding is not
offset by strong aggregate accuracy.**

---

## 9. Open items — CPD

Instance-specific items from the mechanism spec's register (Appendix A). Track to closure.

| # | Item | Owner | Why it blocks |
|---|------|-------|---------------|
| 1 | **Baseline metrics measured** — current QCR cycle time, resubmittal/rework rate, reviewer consistency, first-pass completeness | CPD + Data KC | Improvement is unprovable without current-state numbers; Gate 5 is unfalsifiable |
| 2 | **Ground-truth benchmark + blind-test set built** | CPD SMEs | Critical path — requires senior reviewer time to adjudicate correct findings |
| 3 | **Gate thresholds set as numbers**, by severity class | CPD SMEs | A gate without a threshold is not a gate |
| 4 | **Permitting system-of-record integration feasibility** | Technology | Stage 2 depends on it |
| 5 | **Data classification, quality, and PII posture** for plan sets and applicant info | Data KC | Determines permitted access method |
| 6 | **SME capacity plan** — 3 teams in parallel, 45 days, plus benchmark build | CPD | The City's own labor is the binding constraint |
| 7 | **Instrument & procurement authority** (P1) | Procurement + Law | In progress |
| 8 | **Stage 2 payment structure** (P9) | Procurement + Finance | Undefined |
| 9 | **Evaluation panel + COI screen** (P15) | Procurement | Before proposals open |
| 10 | **Governance forms** — AI review, fact sheet, vendor questionnaire, or inline equivalents | CDO / Technology | Gate 4 undefined without them |
| 11 | **Labor consultation**, if represented staff affected | HR | Work-practice change |
| 12 | **Applicant disclosure and appeal path** | CPD + Law | Applicants affected by screening |
| 13 | **Liability allocation** for a missed life-safety finding | Law | Domain-specific exposure |

---

*Part 1 of the CPD Public AI Innovation Challenge. Read with
[`mechanism-and-pathway.md`](./mechanism-and-pathway.md) (Part 2).*
