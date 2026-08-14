# Instance: CPD Public AI Innovation Challenge — Residential Plan Screening

**City of Kansas City, Missouri — City Planning & Development (CPD)**
**A worked instantiation of the [Public AI Innovation Challenge Framework](./framework.md)**

---

This document is the framework in [`framework.md`](./framework.md) with its parameters
filled in for CPD's first challenge. It reorganizes the original mind map content into
the framework's lifecycle, so the challenge reads as a single ordered procedure rather
than seven parallel lists. **The framework is the reusable structure; this is one run of it.**

---

## 0. Governing authority

This challenge runs as an **Innovation Partnership under KCMO AR 3-27** — most naturally
an *Innovation/Testing* partnership (§4.1.2) seeking an *Innovative Solution* with a
measurable performance component (§4.1.4), and a candidate *Partnership Development
Opportunity* (§4.1.3) to the extent it supports local innovators / AdvanceKC. It is
forwarded to the **Innovation Partnerships Team** and approved by the **City Manager**
(§6.2 / §6.3.3); the Stage-1/Stage-2 gates below are the *performance measures* required
by §6.4, checked in stages. See [`authority-ar-3-27.md`](./authority-ar-3-27.md).

## 1. Problem framing (Phase 0)

- **Service problem (P1):** Quality Control Review (QCR) intake and residential plan
  screening for 1–2 family homes is slow and inconsistent, and findings are not always
  traceable or auditable.
- **Target outcome (P2):** Faster, more consistent QCR intake and completeness review,
  with **traceable findings and auditable records**, and **advisory AI output that
  supports — not replaces — staff judgment.**
- **Sponsoring department + AI Lead (P3):** CPD; Department AI Lead named at kickoff.
- **The decision AI supports:** completeness/consistency screening of residential plans;
  a human planner makes every consequential determination.

### Challenge objectives (from the mind map)
- QCR intake and completeness review
- Residential plan screening for 1–2 family homes
- Improved consistency and staff efficiency
- Traceable findings and auditable records
- Advisory AI output to support staff judgment

---

## 2. Parameter block (filled)

| # | Parameter | Value for this challenge |
|---|-----------|--------------------------|
| P1 | Service problem | Inconsistent, slow, hard-to-audit QCR intake & residential plan screening (1–2 family). |
| P2 | Target outcome | Faster, consistent, traceable, auditable screening; advisory output supporting staff. |
| P3 | Sponsor / AI Lead | CPD / Department AI Lead. |
| **P4** | **Risk tier** | **LOW — advisory.** AI output supports staff judgment; a planner decides. No effect on eligibility/enforcement. |
| P5 | Data scope per phase | Stage 1: narrow, representative sample of residential plans. Stage 2: broader live intake in shadow mode. |
| P6 | Teams advanced | Stage 1: **up to 3 teams.** Stage 2: **discretionary** subset. |
| P7 | Durations | Stage 1: **45 days.** Stage 2: **up to 6 months.** |
| P8 | Stipend | Fixed stipend for Stage 1 participants (demonstrated deliverables). |
| P9 | Scoring weights | Framework defaults (see §5). |
| P10 | Gate thresholds | Framework defaults at LOW-tier baseline. |
| P11 | Proposal limit | **18-page** technical narrative. |
| P12 | Roadmap horizon | **12–18 month** product roadmap. |
| P13 | AR 3-27 type & approval | **Innovation/Testing → Innovative Solution**; Partnerships Team recommends, **City Manager** approves each advance. |

---

## 3. Pipeline for this challenge

```
 PHASE 0            PHASE 1                       PHASE 2                    PHASE 3
 Framing        Co-Design Challenge          Controlled Pilot          Scale-or-Stop
 (CPD internal) 45 days · ≤3 teams · stipend  ≤6 months · shadow mode   + transition/exit
   │  G0             │  G1 · G2 · G3               │  G4 · G5                 │
   └── problem &     └── workflow understood,      └── governance ready;     └── scale on
       authority         prototype works on            pilot performance         evidence, or
       confirmed         representative plans,         holds in real intake      stop with CPD
                         staff can use it                                        retaining data
```

### Phase 1 — Co-Design Challenge (45 days, up to 3 teams)
- Feasibility and workflow configuration against the real QCR process.
- Stipend for participants; up to three teams selected.
- Produces the Stage 1 deliverables (§6.1) and passes G1–G3.

### Phase 2 — Controlled Pilot (up to 6 months, discretionary advancement)
- **Shadow operations and shadow review:** the AI screens plans alongside staff and is
  reviewed against staff findings before it influences any live determination.
- Operational validation on real intake.
- Advancement from Stage 1 is **discretionary** — earned eligibility, not entitlement.

---

## 4. Unified gates for this challenge

| Gate | Question for CPD | Fires |
|------|------------------|-------|
| **G0** | Is the QCR problem defined, is AI appropriate (advisory), is authority/data/risk clear? | Phase 0 |
| **G1 — Workflow understanding** | Do teams understand the real QCR intake and screening workflow and planner needs? | Early Phase 1 |
| **G2 — Technical performance** | Does the prototype screen a representative plan sample accurately, with **traceable findings** and human review? | Late Phase 1 |
| **G3 — Initial staff usability** | Can CPD planners actually use it in their workflow? | Phase 1 → 2 |
| **G4 — Governance readiness** | Secure, private, equity-tested, auditable, records-compliant? | Phase 2 entry |
| **G5 — Pilot performance** | Do results hold in real intake? Can CPD scale — **or exit with data intact**? | Phase 2 exit → Phase 3 |

*(G1–G5 come directly from the mind map's Progress Gates; G0 and the scale/stop
decision come from the panel's staged model. See the framework crosswalk, §5.0.)*

---

## 5. Scoring (mind map weights = framework defaults)

| Category | Weight |
|----------|:---:|
| Accuracy & completeness | 30% |
| Explainability & traceability | 20% |
| Workflow fit & usefulness | 15% |
| Engineering performance | 15% |
| Adoption & readiness | 20% |

For an advisory QCR aid, **explainability & traceability (20%)** is doing heavy lifting:
the objective is *auditable, traceable findings*, so a correct-but-unexplainable output
is worth little to CPD.

---

## 6. Deliverables

### 6.1 Stage 1 minimum deliverables (→ G1–G3)
- Workflow and user-needs summary
- Configured working prototype
- Requirements traceability matrix
- Controlled test results
- Technical architecture disclosure
- Human-centered test findings

### 6.2 Governance readiness pack (→ G4)
- City AI Review and Fact Sheet
- Security and privacy documentation
- Equity and performance testing
- Retention and public-records compliance

### 6.3 Proposal requirements
- 18-page technical-narrative limit
- Mandatory AI-use declaration
- 12–18 month product roadmap
- Identification of available-today vs. future capabilities

---

## 7. Roles

**Participating teams:** forward-deployed AI engineers · implementation specialists · technical support.

**CPD / city stakeholders:** Department AI Lead · subject-matter experts (planners as SMEs
for ground truth) · challenge and process managers · governance and legal reviewers ·
technology & security · named human-oversight owner.

---

## 8. Data & IP terms (fixed)

- CPD/the city maintains control of data and results.
- Vendor retains its background technology.
- Prohibition on training unrelated models on city data.
- Requirement for portability and transition (exit with no loss of continuity).

---

## 9. What changed from the original draft

The original mind map was correct in content but flat: seven co-equal branches
(objectives, phases, roles, deliverables, evaluation, IP, proposal reqs) with no
ordering and two non-aligned "Gate 1–5" systems. This instance re-lays the *same
content* onto the framework's lifecycle:

- **Objectives → Phase 0 problem framing** (why, stated as a service problem first).
- **Phased structure → the pipeline** (Phases 1–2, with Phase 3 scale/stop added from the panel).
- **The two Gate 1–5 systems → one unified ladder** (framework §5.0).
- **Deliverables → evidence artifacts mapped to specific gates** (no artifact, no score).
- **Roles → named decision rights.**
- **IP → fixed exit-protecting invariants**, tied to the final gate.

Nothing from the mind map was dropped; it was ordered and connected to the federal
staged-acquisition discipline from the PPG panel.

---

*See [`framework.md`](./framework.md) for the reusable structure and the federal
precedent crosswalk.*
