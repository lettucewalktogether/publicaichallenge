# CLAUDE.md — KCMO Public Innovation Challenge

Project memory. Read before drafting, editing, or advising on any public innovation
challenge — **AI or otherwise** — for the City of Kansas City, Missouri.

## What this repo is

A reusable specification for public innovation challenges, split into three parts so the
reusable half never gets tangled with the one-off half.

| Part | File | Reusable? |
|------|------|:---:|
| **Part 1 — The Challenge** (problem, domain, data, success) | `docs/challenge-*.md` | No — new each time |
| **Part 2A — Pathway** (stages, gates, decision points) | `docs/mechanism-and-pathway.md` Part A | Yes |
| **Part 2B — Mechanism** (rules, evaluation, terms, governance) | `docs/mechanism-and-pathway.md` Part B | Yes |

Core rule: **buy evidence in stages; increase commitment only after a gate is passed.**

## Standing rules

1. **Keep the parts separate.** Domain specifics go in Part 1. Anything that would be true
   for a different department's challenge goes in Part 2. This separation is the point.
2. **The spec is authority-neutral.** The instrument and procurement authority are set
   per-instance by Procurement + Law and recorded as parameter **P1**. Do not assert an
   authority basis in the spec.
3. **AR 3-27 is not the vehicle.** Evaluated and set aside — it is inbound-only (assumes
   an unsolicited partner proposal) and has no competitive selection method. Do not
   reintroduce it as governing authority. Rationale: `docs/ar-3-27-assessment.md`.
4. **No gate without a threshold.** "Acceptable performance" is not a criterion. Gates
   carry numeric or objectively testable pass conditions, set before announcement.
5. **No artifact, no score.** Every scored claim maps to a required deliverable.
6. **Baseline before announcement.** Improvement is unprovable without measured current
   state. This is the most common cause of failed pilots.
7. **Stopping is a valid outcome.** A challenge that concludes without advancing a team,
   for a stipend and a documented "no," succeeded.
8. **Keep the stack current.** New precedent or authority → add it below.

## Ownership context

Chief Digital Officer owns this, with Data KC. Procurement is the intended long-term
owner of the mechanism as a standard template. Sponsoring departments own their
Part 1 and the service outcome.

## Design precedents

Reference models, not KCMO legal authority. Shared discipline: *define the need, limit
the first commitment, evaluate evidence, expand only after performance.*

**Federal:**
- **FAR 1.102(d)** — sound business judgment where not prohibited
- **FAR 39.103** — modular contracting; separately testable increments
- **Challenge-Based Acquisition** — MITRE v5 (2020); the announcement how-to
- **DARPA Grand Challenge / 10 U.S.C. §4025** — pay for demonstrated achievement
- **NASA COTS** — Space Act Agreements; funded milestones (NASA/SP-2014-617)
- **SBIR Phase I/II/III** — 15 U.S.C. §638; commitment rises with evidence
- **15 U.S.C. §3719** — prize competitions; announcement elements, participant-IP default, judge conflict rules
- **51 U.S.C. §20113** — Space Act Agreement authority
- **FAR Part 12** — commercial acquisition; buying the proven winner
- **GAO-26-107859** (Apr 2026) — AI-acquisition lessons learned

**Peer municipalities:**
- **D.C. AI Procurement Handbook** (Feb 2025) — AI notification clause in every IT/services solicitation, vendor AI Factsheet, contract addendum overriding vendor license terms
- **City of Long Beach** — Smart City Challenge; municipal challenge front-end
- **Miami-Dade Innovation Authority** — dedicated challenge institution; 3-of-136 funnel; funded pilots

**Missouri / local (verify with Law before citing in binding documents):**
- Missouri Sunshine Law — RSMo Ch. 610 — records, proposal confidentiality, retention
- KCMO Charter and Code procurement provisions
- MBE/WBE participation goals and local preference policies

## Source documents

- CPD Public AI Innovation Challenge mind map
- CPD Public Innovation Challenge description (May 2026)
- CPD Public AI Innovation Challenge Working Document R3 (Aug 2026) — the combined draft this spec was extracted from
- "Purchasing Responsible AI" panel talking points (PPG / PEN, July 22, 2026)
- KCMO AR 3-27, "Innovation Partnerships" (2013) — assessed, set aside
