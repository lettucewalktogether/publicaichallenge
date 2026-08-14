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

## Documents

| File | What it is |
|------|-----------|
| [`docs/framework.md`](./docs/framework.md) | **The reusable framework** — parameters, pipeline, unified gate ladder, scoring, roles, terms, and the federal-precedent crosswalk. Start here. |
| [`docs/instance-cpd-residential-plan-review.md`](./docs/instance-cpd-residential-plan-review.md) | **A worked example** — the CPD residential plan screening / QCR challenge, with the framework's parameters filled in. |

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
