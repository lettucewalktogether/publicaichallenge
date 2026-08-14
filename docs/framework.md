# Public AI Innovation Challenge — Canonical Framework

**City of Kansas City, Missouri (KCMO)**
**A reusable, staged-acquisition structure for any public AI innovation challenge**

---

## 0. How to read this document

This is not a challenge. It is the **template that produces challenges.**

Every KCMO public AI innovation challenge is one *instance* of the structure defined
here. To run a new challenge, you do not redesign the process — you fill in the
**parameters** in §2, then execute the fixed **pipeline** in §4 under the fixed
**gate logic** in §5, the fixed **roles** in §6, and the fixed **terms** in §8.

The first worked instance — CPD Quality Control Review / residential plan screening —
lives in [`instance-cpd-residential-plan-review.md`](./instance-cpd-residential-plan-review.md).
It shows the parameters filled in. This document stays generic.

**Governing authority:** every challenge is executed as an **Innovation Partnership
under KCMO Administrative Regulation 3-27**, which supplies the local legal vehicle,
the approval chain, and the performance-measure requirement this framework
operationalizes. See [`authority-ar-3-27.md`](./authority-ar-3-27.md) and §9. The
federal and municipal references are reference models *under* that authority — not the
authority itself.

Why "algorithmic": the process is written as a deterministic procedure — inputs,
ordered stages, explicit decision points, and defined branches (advance / remediate /
stop) — so that two different departments running two different challenges make the
same *kind* of decision at the same *kind* of moment, with the same evidentiary
discipline. The subject changes; the algorithm does not.

---

## 1. The one invariant

> **Buy evidence in stages. Increase commitment only after a gate is passed.**

Everything below is machinery to enforce that single rule. Stated formally:

```
commitment(scope, data_access, funding) may increase from step k to step k+1
    ONLY IF gate(k) == PASS
otherwise: REMEDIATE (re-test the same gate) or STOP (exit with city in control)
```

Commitment is monotonic and evidence-gated. The city never expands scope, opens more
data, or releases more money on the strength of a demonstration, a claim, or optimism.
It expands only on demonstrated performance against a pre-declared threshold.

This is the through-line of every federal precedent in §9. It is also the answer to
the failure mode the panel named: *a tool that performs well in a demo and still fails
when it meets the real workflow around it.*

---

## 2. Parameter block — the "function signature"

To instantiate a challenge, a sponsoring department fills in this block **before**
solicitation. These are the only values that change between challenges. Everything
after §2 is fixed structure that consumes these values.

| # | Parameter | Type | Notes |
|---|-----------|------|-------|
| P1 | **Service problem** | statement | What is failing for residents or staff. *Not* an AI product description. |
| P2 | **Target outcome & current process** | statement | The measurable outcome and the decision AI would support. |
| P3 | **Sponsoring department + Department AI Lead** | role assignment | The accountable owner of the service outcome. |
| P4 | **Risk tier** | `LOW` \| `MEDIUM` \| `HIGH` | Drives gate rigor (see §3). Higher consequence → stronger evidence. |
| P5 | **Data scope per phase** | list | The minimum data opened at each phase; starts narrow, widens only by gate. |
| P6 | **Number of teams advanced per phase** | integers | e.g. Stage 1: up to 3; Stage 2: discretionary subset. |
| P7 | **Phase durations** | durations | Defaults: Stage 1 = 45 days; Stage 2 ≤ 6 months. |
| P8 | **Participant stipend** | amount | Fixed payment for Stage 1 demonstrated deliverables (DARPA/prize logic). |
| P9 | **Scoring weights** | 5 values summing to 100 | Defaults in §5.1; adjustable per challenge, must sum to 100. |
| P10 | **Gate thresholds** | pass criteria per gate | Minimum evidence to advance; defaults in §5.2, tightened for higher risk tier. |
| P11 | **Proposal limits** | page/format limits | Default: 18-page technical narrative. |
| P12 | **Roadmap horizon** | duration | Default: 12–18 month product roadmap. |
| P13 | **AR 3-27 partnership type & approval path** | classification | The Innovation Partnership type (usually *Innovation/Testing* seeking an *Innovative Solution*), routed to the Innovation Partnerships Team → City Manager for approval. See [`authority-ar-3-27.md`](./authority-ar-3-27.md). |

> **Rule:** if a parameter cannot be stated, the challenge is not ready to solicit.
> An undefined problem (P1) or unassigned owner (P3) fails Gate 0 by definition.

---

## 3. Risk tier — the one branch in the algorithm

The pipeline is identical for every challenge **except** that its rigor scales with the
consequence of the decision the AI supports. This is the panel's "proportionate
controls" principle made mechanical.

| Tier | Definition | Effect on the pipeline |
|------|-----------|------------------------|
| **LOW** | Staff aid; output is advisory; a human makes every consequential decision; no effect on eligibility, enforcement, employment, or access to services. | Baseline gate thresholds. Lighter governance pack. Faster cadence. |
| **MEDIUM** | Materially shapes staff decisions or resident-facing timelines, but a human still decides and can readily override. | Baseline + equity/bias testing required at G2; broader review panel at G4. |
| **HIGH** | Affects eligibility, enforcement, employment, benefits, or access to services. | Highest thresholds; mandatory appeal path; independent governance/legal sign-off at every gate; no phase advances on a single evaluator. |

The risk tier is set once, at P4, and never relaxed mid-challenge — only raised if new
facts warrant. **Default posture for a first-of-kind challenge: advisory / LOW**, with
AI output supporting, not replacing, staff judgment.

---

## 4. The pipeline — four phases, monotonic commitment

The challenge is a five-state pipeline. Each state ends in a gate (§5). The city's
commitment (scope, data, funding) is the smallest that lets the next question be
answered honestly.

```
  ┌─────────────┐  G0  ┌──────────────┐  G1 G2 G3 ┌──────────────┐  G4  ┌──────────────┐  G5  ┌───────────┐
  │  PHASE 0    │─────▶│   PHASE 1    │──────────▶│   PHASE 2    │─────▶│   PHASE 3    │─────▶│  OPERATE  │
  │  Framing &  │      │  Co-Design   │           │  Controlled  │      │  Scale-or-   │      │    or     │
  │ Authorize   │      │  Challenge   │           │    Pilot     │      │  Stop + Exit │      │   EXIT    │
  └─────────────┘      └──────────────┘           └──────────────┘      └──────────────┘      └───────────┘
   problem-first        narrow slice,              real systems,          measured outcomes,    enforceable
   is AI even needed?   representative data,        staff, security,       can the city exit?    operating terms
                        human review                records, residents
```

Any gate can branch to **REMEDIATE** (fix and re-test) or **STOP** (end the
engagement with the city retaining data, results, and continuity — §8).

### Phase 0 — Framing & Authorization *(city-internal, before any vendor)*
- Fill the parameter block (§2). Confirm the **service problem** (P1), not a product.
- Decide whether AI is appropriate at all. Sometimes the answer is a process fix, not a model.
- Confirm authority, data availability, risk tier, and the groups affected.
- **Precedent:** FAR 1.102 (sound business judgment); GAO AI-acquisition lessons-learned.

### Phase 1 — Co-Design Challenge *(default 45 days, up to 3 teams)*
- Publish the **problem and the gates**, not a prescribed solution (challenge-based, not RFP-prescriptive).
- Selected teams receive a **stipend** and a narrow, representative data slice.
- Teams configure a working prototype against the real workflow, with human review in the loop.
- Produce the Stage 1 deliverable set (§7.1) and pass G1–G3.
- **Precedent:** Challenge-Based Acquisition; DARPA prize/stipend for demonstrated achievement; Long Beach / Miami-Dade challenge models.

### Phase 2 — Controlled Pilot *(default ≤ 6 months, discretionary subset of teams)*
- Advancement is **discretionary**, not automatic — passing Stage 1 earns *eligibility*, not entitlement.
- Run in **shadow mode**: the AI operates alongside, and is reviewed against, current staff practice before it influences any live decision.
- Validate operational fit: interfaces, security, accessibility, records/retention, resident-facing experience.
- Complete the Governance Readiness pack (§7.2) and pass G4–G5.
- **Precedent:** FAR 39.103 modular contracting; NASA COTS funded milestone agreements; SBIR Phase II.

### Phase 3 — Scale-or-Stop & Transition
- Decide, on measured pilot evidence, whether the solution has *earned* broader scope and spending.
- Convert surviving claims into **enforceable operating terms** (acceptance criteria, SLAs, audit rights, change-notification, termination).
- Confirm the city can **exit without losing control** of data or service continuity (§8).
- **Precedent:** SBIR Phase III (commercialization/acquisition with non-challenge funds); PPG "a passed pilot is not yet an operating service."

---

## 5. Gate logic — the decision function

A gate is a pre-declared question with a pass threshold and three possible outcomes.
No gate is passed by narrative alone; each requires the evidence artifact named in §7.

### 5.0 The unified gate ladder (reconciling both source models)

The mind map and the PPG panel each proposed a "Gate 1–5." They describe the same
staircase at different resolutions. This is the canonical, merged ladder:

| Canonical gate | Question | Mind-map gate | PPG staged-model gate | Where it fires |
|----------------|----------|---------------|-----------------------|----------------|
| **G0 — Problem & Authority** | Is the problem defined, is AI appropriate, is authority/data/risk understood? | — (pre-challenge) | Gate 1 — Problem & authority | End of Phase 0 |
| **G1 — Workflow Understanding** | Do teams demonstrably understand the real workflow and user needs? | Gate 1 — Workflow understanding | Gate 2 (part) — Controlled proof | Early Phase 1 |
| **G2 — Technical Performance** | Does a narrow slice work on representative data, with traceable output and human review? | Gate 2 — Technical performance | Gate 2 — Controlled proof | Mid/late Phase 1 |
| **G3 — Staff Usability** | Can real staff use it, and does it fit the operational context? | Gate 3 — Initial staff usability | Gate 3 (part) — Operational fit | Phase 1 → 2 boundary |
| **G4 — Governance Readiness** | Is it secure, private, equitable, auditable, and records-compliant? | Gate 4 — Governance readiness | Gate 3 — Operational fit | Phase 2 entry |
| **G5 — Pilot Performance → Scale/Stop** | Do measured outcomes hold in practice, and can the city scale *or* exit safely? | Gate 5 — Pilot performance | Gates 4 & 5 — Limited deployment; scale or stop | Phase 2 exit / Phase 3 |

### 5.1 Scoring categories (default weights — parameter P9)

Applied at the scored gates (primarily G2 and G5). Weights must sum to 100 and may be
re-tuned per challenge, but the five categories are fixed.

| Category | Default weight | What it measures |
|----------|:---:|------------------|
| Accuracy & completeness | **30%** | Correctness and coverage of the AI output against ground truth. |
| Explainability & traceability | **20%** | Can a finding be traced to its basis and audited after the fact. |
| Workflow fit & usefulness | **15%** | Does it help the actual task the actual staff perform. |
| Engineering performance | **15%** | Latency, reliability, integration, operational robustness. |
| Adoption & readiness | **20%** | How close it is to something the city can operate, monitor, and support. |

### 5.2 Gate outcomes (the branch)

```
for each gate G in [G0, G1, G2, G3, G4, G5]:
    evidence = collect_required_artifacts(G)          # §7 — no artifact, no score
    score    = evaluate(evidence, weights, threshold(G, risk_tier))
    if   score >= threshold(G, risk_tier):  ADVANCE   # commitment may increase
    elif score is remediable:               REMEDIATE # fix, re-test same gate, no scope increase
    else:                                    STOP      # end engagement; city retains control (§8)
```

- **ADVANCE** is the only path that unlocks more scope, data, or funding.
- **REMEDIATE** holds commitment flat while the team corrects a defined shortfall.
- **STOP** is a legitimate, planned outcome — the whole point of staging is a clean, low-cost exit before dependency grows.
- Higher risk tier (§3) raises thresholds and forbids single-evaluator advancement.

---

## 6. Roles — named decision rights (the actors)

The panel's rule governs this section: *"A committee alone is not accountability;
named decision rights are."* Every role below is a function with an owner, not a
distribution list.

### 6.1 City side
| Role | Owns | Decision right |
|------|------|----------------|
| **City Manager** | Final approval of the Innovation Partnership Agreement (AR 3-27 §6.3.3). | Approves each commitment increase, on the Partnerships Team's recommendation. |
| **Innovation Partnerships Team** (CMO · Mayor/Council office · Finance · Law · Procurement) | Coordinating, tracking, and recommending all partnerships (AR 3-27 §6.2). | Recommends approval to the City Manager; reports to Council. |
| **Sponsoring department** | The service outcome (P1/P2). | Whether the delivered service actually solves the problem. |
| **Department AI Lead** | The challenge on behalf of the department. | Recommends advance/remediate/stop at each gate (up through the Partnerships Team). |
| **Challenge & process managers** | Solicitation, cadence, fairness, records. | Run the competition and enforce the terms. |
| **Subject-matter experts (SMEs)** | Ground truth for accuracy and workflow fit. | Validate that output is correct and usable. |
| **Governance & legal reviewers** | Authority, privacy, records, equity, IP. | Sign off (mandatory at every gate for HIGH tier). |
| **Technology & security** | Architecture, interfaces, controls. | Assess integration and security readiness (G4). |
| **Named human-oversight owner** | Authority to question, override, pause, escalate. | Final human control in operation. Not a rubber-stamp click. |

### 6.2 Participant (vendor) side
| Role | Contributes |
|------|-------------|
| **Forward-deployed AI engineers** | Configure and adapt the solution to the real workflow. |
| **Implementation specialists** | Integrate with city systems and staff process. |
| **Technical support** | Sustain the pilot; respond to defects and changes. |

---

## 7. Deliverables — the evidence artifacts (the "what you submit")

Deliverables exist to feed gates. Each is the observable proof a gate needs; nothing is
scored that is not evidenced.

### 7.1 Stage 1 (Co-Design) minimum deliverables → feed G1–G3
- Workflow & user-needs summary *(→ G1)*
- Configured working prototype *(→ G2)*
- Requirements traceability matrix *(→ G2)*
- Controlled test results *(→ G2)*
- Technical architecture disclosure *(→ G3/G4)*
- Human-centered test findings *(→ G3)*

### 7.2 Governance Readiness pack → feed G4
- City AI Review and Fact Sheet
- Security and privacy documentation
- Equity and performance testing (mandatory for MEDIUM/HIGH tiers)
- Retention and public-records compliance

### 7.3 Proposal requirements (at solicitation)
- Technical narrative within the page limit (default 18 pages, P11)
- **Mandatory AI-use declaration** (how AI is used in the solution *and* in preparing the proposal)
- Product roadmap over the P12 horizon (default 12–18 months)
- Explicit identification of **available today vs. future** capabilities (no vaporware scored as delivered)

> **Claims-to-evidence rule (from the panel):** every material claim must map to a
> testable acceptance criterion, reporting requirement, audit right, service level, or
> termination right. *If a claim cannot be observed or enforced, it is not scored as a
> commitment.*

---

## 8. Data & intellectual property terms (fixed invariants)

These terms are constant across all challenges and protect the city's ability to
*explain, monitor, correct, and exit.* They are written into the **AR 3-27 Innovation
Partnership Agreement** — the vehicle that authorizes temporary use of City data and
facilities (AR 3-27 §3.1) — not left to a handshake.

- **The city maintains control of its data and of the results** produced under the challenge.
- **The vendor retains its background technology** (what it brought in).
- **Prohibition on training unrelated models** on city data.
- **Portability & transition requirement:** data, configurations, and records can be returned or transferred at exit, with no loss of service continuity.

The exit test is part of the final gate: a solution that cannot be exited has not passed
G5, regardless of performance.

---

## 9. Authority and precedent crosswalk

There are two tiers here, and they must not be confused:

- **Governing authority (binding):** KCMO's own regulation. This is what makes a
  challenge lawful and executable.
- **Reference models (informative):** federal and municipal precedents that share the
  discipline — *define the need, limit the first commitment, evaluate evidence, expand
  only after performance* (the invariant in §1). They inform *how* to execute; they are
  **not** KCMO legal authority.

### 9.0 Governing authority — KCMO AR 3-27 Innovation Partnerships

> **City of Kansas City, Missouri, Administrative Regulation No. 3-27, "Innovation
> Partnerships"** (approved by City Manager Troy M. Schulte; effective July 23, 2013).

AR 3-27 supplies the **Innovation Partnership Agreement** vehicle (temporary use of City
data/facilities, §3.1), the **approval chain** (Innovation Partnerships Team →
City Manager, §6.2 / §6.3.3), the **Gate 0 criteria** (Council-Priority alignment and
benefit-vs-cost, §6.3.2), and the **performance-measure requirement** (§6.4) that this
framework's gate ladder operationalizes. Full analysis and crosswalk:
[`authority-ar-3-27.md`](./authority-ar-3-27.md).

The reference models below operate **under** AR 3-27, filling the parts a 2013 general
policy leaves open (AI specifics, staged gates, solicitation format).

### 9.1 Federal reference models (from the PPG panel)

| Precedent | What it establishes | Maps to |
|-----------|--------------------|---------|
| **FAR 1.102(d)** — guiding principles | Sound business judgment permitted where not prohibited by law. | Authority to run a staged challenge (Phase 0). |
| **FAR 39.103** — modular contracting | Divide IT into smaller, interoperable, separately testable increments. | The phased pipeline (§4); portability (§8). |
| **Challenge-Based Acquisition** (MITRE v5) | State the operational need, invite different approaches, assess demonstrated capability. | Solicitation posture — problem, not product. |
| **DARPA Grand Challenge / 10 U.S.C. §4025** | Prize competition; pay for demonstrated achievement; define outcome, not design. | Stipend + demonstrated-performance advancement (Phase 1). |
| **NASA COTS** — Space Act Agreements | Funded milestones; pay on completion; end on insufficient progress; separate development from later purchase. | Milestone gates; STOP branch; Phase 2→3 separation. |
| **SBIR Phase I / II / III** | Feasibility → prototype → commercialization; commitment rises with evidence. | The whole monotonic-commitment staircase (§1, §4). |
| **GAO-26-107859** (Apr 2026) | Collect and apply AI-acquisition lessons learned. | Phase 0 framing; post-award monitoring. |

### 9.2 Additional federal reference models (fill legal-mechanism gaps)

| Precedent | Unique contribution | Maps to |
|-----------|--------------------|---------|
| **15 U.S.C. §3719** — Prize competitions (America COMPETES) | Government-wide prize authority; default *participant retains IP*; judge conflict-of-interest bars; standard announcement elements. | Announcement structure; scoring-panel integrity; §8 IP default. |
| **51 U.S.C. §20113** — NASA Space Act Agreement authority | The *legal vehicle* for a funded milestone partnership outside standard procurement. | Analogue for the AR 3-27 Innovation Partnership Agreement (§8). |
| **FAR Part 12** — commercial products/services | The only model for *buying the proven winner* via streamlined commercial terms. | Phase 3 operating contract. |

### 9.3 Municipal reference models (peer cities)

| Model | Unique contribution | Maps to |
|-------|--------------------|---------|
| **D.C. AI Procurement Handbook** | AI-specific + local: risk tiers, vendor disclosure (training data/architecture/limits), contract-embedded monitoring/bias audit, AI data-rights. | Governance Readiness pack (§7.2); risk tier (§3). |
| **City of Long Beach** — Smart City Challenge | Municipal execution of the challenge front-end; room for unspecified approaches; transparent evaluation. | Solicitation posture (Phase 1). |
| **Miami-Dade Innovation Authority** | Dedicated challenge-running institution; down-select funnel at scale (3 of 136); funded municipal pilots ($100k each). | Who runs it (§6); cohort sizing (P6); stipend (P8). |

---

## 10. Instantiation checklist — running a new challenge

1. **Fill the parameter block** (§2). If any parameter is unstatable, stop — you are not ready.
2. **Classify under AR 3-27** (P13) and **forward to the Innovation Partnerships Team** before engaging partners ([`authority-ar-3-27.md`](./authority-ar-3-27.md) §8).
3. **Set the risk tier** (§3). Default to LOW/advisory unless the decision is consequential.
4. **Pass G0 internally** (§5) — including AR 3-27 §6.3.2 criteria (Council-Priority alignment, benefit-vs-cost) — before spending a dollar of vendor time.
5. **Publish the problem and the gates**, not a solution (§4, Phase 1; §7.3).
6. **Run the pipeline** (§4) under the gate logic (§5), with named decision rights (§6); route each commitment increase to the City Manager for approval (AR 3-27 §6.3.3).
7. **Feed each gate with its artifact** (§7). No artifact, no score.
8. **Hold the terms fixed** (§8), written into the Innovation Partnership Agreement. Confirm the exit test before scaling.
9. **Record everything and file the concluding evaluation** against stated measures with the Partnerships Team (AR 3-27 §6.4) — the audit trail is what lets the city explain and defend each advance/stop decision.

> The goal is not a successful demo. The goal is a service the city can **operate,
> explain, monitor, and correct** — and exit if it must.

---

*Sources: KCMO Administrative Regulation No. 3-27, "Innovation Partnerships" (eff.
July 23, 2013) — the governing authority; CPD Public AI Innovation Challenge mind map;
"Purchasing Responsible AI" panel talking points (Andrew Ngui, Partners for Public Good
/ PEN, July 22, 2026), including its federal-precedent and staged-gate models. Precedent
source URLs are listed in the panel talking-points source notes and in
[`authority-ar-3-27.md`](./authority-ar-3-27.md).*
