# KCMO Public AI Innovation Challenge

A reusable, staged-acquisition structure for running public AI innovation challenges at
the City of Kansas City, Missouri (KCMO). The goal is one canonical process — an
*algorithm* — that any department can instantiate for any future challenge, instead of
redesigning the process each time.

## The core idea

> **Buy evidence in stages. Increase commitment only after a gate is passed.**

The city defines the service problem, limits its first commitment, evaluates evidence at
defined gates, and expands scope, data access, and funding only after performance is
demonstrated. This mirrors the federal staged-acquisition precedents (FAR modular
contracting, Challenge-Based Acquisition, DARPA prizes, NASA COTS milestones, SBIR
Phase I/II/III) — used here as reference models, not as KCMO legal authority.

**Governing authority:** challenges run as **Innovation Partnerships under KCMO
Administrative Regulation 3-27**, which provides the local legal vehicle, approval chain,
and performance-measure requirement. The federal and municipal precedents are reference
models under that authority. The full authority stack is recorded in
[`CLAUDE.md`](./CLAUDE.md).

## Documents

| File | What it is |
|------|-----------|
| [`docs/framework.md`](./docs/framework.md) | **The reusable framework** — parameters, pipeline, unified gate ladder, scoring, roles, terms, and the authority/precedent crosswalk. Start here. |
| [`docs/authority-ar-3-27.md`](./docs/authority-ar-3-27.md) | **The governing authority** — KCMO AR 3-27 Innovation Partnerships: the local vehicle, approval chain, criteria, and crosswalk to the framework. |
| [`docs/instance-cpd-residential-plan-review.md`](./docs/instance-cpd-residential-plan-review.md) | **A worked example** — the CPD residential plan screening / QCR challenge, with the framework's parameters filled in. |
| [`CLAUDE.md`](./CLAUDE.md) | **Standing authority stack** — the local / state / federal references every future challenge (AI or otherwise) must carry. |

## How to run a new challenge

1. Copy the framework's parameter block and fill it in for your service problem.
2. Set the risk tier (default: LOW / advisory).
3. Pass Gate 0 internally before engaging any vendor.
4. Publish the problem and the gates — not a prescribed solution.
5. Run the pipeline (Phases 0–3) under the gate logic, with named decision rights.
6. Feed every gate with its required evidence artifact.
7. Hold the data/IP terms fixed; confirm the city can exit before scaling.

See [`docs/framework.md` §10](./docs/framework.md#10-instantiation-checklist--running-a-new-challenge)
for the full instantiation checklist.

---

*Built from the CPD Public AI Innovation Challenge mind map and the "Purchasing
Responsible AI" panel talking points (Partners for Public Good / PEN, July 22, 2026).*
