# Briefing: DC AI Procurement Handbook, and the Embedded-AI Question

**Prepared for:** call with Noam
**Subject:** contract language for AI capabilities embedded in products, specifically model training and automated decision-making
**Sources:** DC OCP, *Artificial Intelligence (AI) Procurement Handbook*, last updated February 2025, 36 pages; DC AI Values and Strategic Plan

---

## 1. The short answer for the call

**Yes, someone is doing exactly this. DC has it, it is public, and it is one paragraph.**

DC's Office of Contracting and Procurement requires an **AI Notification Clause in every
solicitation for services and information technology, regardless of procurement method or
contract type.** Not only in AI buys. That is the design choice that matters, because the
embedded-AI problem is precisely that it arrives inside procurements nobody labeled "AI."

DC in turn borrowed the clause from the **California Generative AI Toolkit**, so there is a
second jurisdiction to point at.

**Direct link to send:** https://techplan.dc.gov/sites/default/files/u23/1E.%20AI%20Procurement%20Handbook%20-FINAL.pdf

**One caveat worth saying out loud on the call:** DC's clause is excellent at forcing
*disclosure that AI exists*. It does **not**, on its own, answer either of the two specific
questions being asked. Section 4 below gives the two supplemental provisions that close
that gap, and KCMO already has draft language for one of them.

---

## 2. DC's AI Notification Clause (verbatim)

This is the shareable artifact. Quoted exactly from the handbook, section 3.2.5:

> **AI Notification Clause**
>
> Offeror must notify the contracting officer in writing if their solution or service
> includes, or makes available, any AI including AI from third parties or subcontractors.
>
> During the term of the contract, Contractor must notify the contracting officer in
> writing if their services or any work under this contract includes, or makes available,
> any previously unreported AI technology, including AI from third parties or
> subcontractors.
>
> At the direction of the contracting officer, Contractor shall discontinue the use of any
> new or previously undisclosed AI technology that materially impacts functionality, risk
> or contract performance, until use of such AI technology has been approved by the
> District.
>
> Failure to disclose AI use to the District may be considered a breach of the contract by
> the District at its sole discretion and the District may consider such failure to disclose
> AI as grounds for the termination of the contract. The District is entitled to seek any
> and all relief it may be entitled to as a result of such non-disclosure.

### Why this clause works

Four properties worth naming on the call:

1. **It applies to all IT and services solicitations**, not a separate AI process. Embedded AI is caught because the net is cast over everything.
2. **It reaches third parties and subcontractors.** Most embedded AI arrives through a sub or an upstream model provider.
3. **It is continuing, not one-time.** The obligation runs "during the term," which catches the AI that shows up in next quarter's release notes.
4. **It has teeth and a kill switch.** The contracting officer can order discontinuation pending approval, and non-disclosure is grounds for termination.

### How DC defines what triggers it

The handbook gives a plain three-question screen for identifying AI, useful for staff who
are not technologists:

> A technology may be considered an AI system if it elicits positive answers to any of the following:
> 1. Does the technology use data to provide predictions, recommendations, insights, or decisions?
> 2. Does the technology augment human decision-making?
> 3. Does the company use words such as "personalized," "tailored," and "adaptive" in its marketing?

The third question is the practical one. It is a marketing-copy test, and it works.

---

## 3. The rest of DC's stack, briefly

DC's handbook issues under **Mayor's Order 2024-028**, which directed OCP to build it with
the District's AI Taskforce. Structure:

| Artifact | What it does |
|---|---|
| **AI Notification Clause** | Disclosure trigger in every IT/services solicitation. Section 2 above. |
| **AI Factsheet** (Appendix B) | Vendor-completed, submitted with the technical proposal. 15 fields: purpose, training data, test data, model information, update procedure, inputs/outputs, performance metrics, bias, robustness, optimal and poor conditions, explanation, jurisdiction considerations. Plus a six-question Algorithmic Impact Assessment. |
| **Addendum: Requirements for AI Systems** (Appendix E) | The contract terms. 14 numbered contractor obligations plus indemnification and an AI incident-response process. |
| **AI Values Alignment Report** | Per-deployment report against DC's six AI Values, reviewed by OCTO. Required for each AI tool an agency deploys. |
| **Proposal instructions and evaluation factors** (Appendices C, D) | Three technical factors, 75 points technical / 25 points price. |

### The two strongest provisions after the notification clause

**Appendix E opens with a license-override:**

> This Addendum governs over any contrary license terms and the District will not agree to
> any terms that conflict with the Addendum. Failure of the Contractor to comply with the
> terms of this Addendum shall constitute a material breach of the Contract.

That single sentence defeats click-through terms of service and vendor EULAs that would
otherwise swallow the government's protections. Worth stealing on its own.

**Appendix E.4 requires, among fourteen items:** annual Factsheet updates plus updates
within 30 days of any substantive change; means for the District to monitor accuracy;
evidence that bias is managed; **a human able to override outputs whose judgment "take[s]
precedence over all outputs"**; explainability; audit rights at no additional cost; data
retention policy; and deletion or return of data at termination.

**The post-award loop:** if a vendor changes the AI after award, the notification clause
fires, the contracting officer notifies the agency and OCTO, the agency may be directed to
update its Values Assessment, the vendor may be required to update the Factsheet, and OCP
decides whether a contract modification is needed.

---

## 4. Where DC's language does not answer the question asked

This is the most useful thing to bring to the call, because it is the part nobody has
solved cleanly.

### 4.1 "Does the tool train public models?"

**DC coverage: partial, and indirect.**

- The **Factsheet** asks how the *vendor's* system was trained and on what data. That is the vendor's training history, not a forward commitment about the buyer's data.
- **Appendix E.12** provides the contractor "shall not disclose or use the District's data for any purpose other than as expressly authorized in the Contract." That reaches training by implication, but never says the word.

**Why indirect is not good enough.** A vendor can comply with E.12 while arguing that
model improvement is authorized as part of service delivery, that derived data or
embeddings are not "the District's data," or that a downstream model provider, not the
vendor, performed the training. The gap is real and vendors do use it.

**KCMO already has stronger language.** From the challenge's data and IP terms:

> The vendor may not sell, license, share, commercialize, retain beyond authorized
> periods, or use City data or derived data to train, test, or improve unrelated models or
> products.
>
> General improvements to a vendor's platform or product remain the vendor's property.
> The vendor may not incorporate City confidential information, applicant data,
> City-specific test cases, or protected City materials into a general product without
> written authorization.

Three things this does that DC's does not: it names **training** explicitly, it reaches
**derived data**, and it closes the **general product improvement** route separately.

### 4.2 "Does it have automated decision-making?"

**DC coverage: partial.**

- DC **defines** "Automated Decision System" in Appendix A, and the definition is good, particularly its exclusions:

> A computational process derived from machine learning, statistical modeling, data
> analytics, or artificial intelligence that issues simplified output, including a score,
> classification, or recommendation, that is used to assist or replace human discretionary
> decision making and materially impacts natural persons. An "automated decision system"
> does not include a spam email filter, firewall, antivirus software, identity and access
> management tools, calculator, database, dataset, or other compilation of data.

  The carve-out list is what keeps the definition from swallowing all software. Adopt it as written.

- **Appendix E.4.4** requires a human override capability.

**But there is no disclosure trigger.** Nothing requires a vendor to affirmatively state
*"this product makes or materially informs decisions about people."* The notification
clause asks whether AI is present; it does not ask what the AI decides. A vendor can
truthfully disclose AI and never surface that it scores applicants.

### 4.3 Two supplemental provisions that close both gaps

Draft language, subject to Law review. Offer these to the group as the delta on top of
DC's clause.

> **Supplemental Disclosure: Model Training on City Data**
>
> Offeror shall state whether any City data, City-derived data, user inputs, prompts,
> outputs, telemetry, or usage data is or may be used to train, fine-tune, evaluate, or
> otherwise improve any model, product, or service, including models operated by a third
> party or upstream provider. Offeror shall identify each such use, whether it is a default
> setting or configurable, whether it can be disabled contractually and technically, and
> which entity performs the training.
>
> Absent express written authorization, Contractor shall not, and shall ensure that its
> subcontractors and model providers do not, use City data or City-derived data to train,
> fine-tune, evaluate, or improve any model, product, or service other than the instance
> provided to the City. This restriction survives termination.

> **Supplemental Disclosure: Automated Decision-Making**
>
> Offeror shall state whether the solution issues any score, ranking, classification,
> flag, eligibility determination, or recommendation that is used to assist or replace
> human discretionary decision-making and that materially affects any natural person,
> including residents, applicants, or employees. For each such function, Offeror shall
> identify the decision supported, the affected population, whether output is advisory or
> determinative, the human review step, and how an affected person may seek review of an
> outcome.
>
> This disclosure applies whether the function is enabled by default, offered as an
> optional module, or introduced in a subsequent release.

The design principle behind both: **ask about the capability, not the label.** Vendors
dispute whether something "is AI." They have a harder time denying that a feature produces
a score used to rank applicants.

---

## 5. Talking points for the call

1. **Lead with the artifact.** DC has this, it is public, and the operative clause is four short paragraphs. Send the PDF link.

2. **Name the key design decision.** The clause goes in *every* IT and services solicitation, not a separate AI track. That is what catches embedded AI. A separate AI procurement process would miss exactly the case being asked about.

3. **The marketing-copy test is the practical screen.** "Does the vendor say personalized, tailored, or adaptive?" is something a contract specialist can apply without a data scientist.

4. **Flag the honest gap.** DC's clause forces disclosure that AI exists. It does not ask whether the vendor trains on your data, and it does not ask whether the tool makes decisions about people. Those need two additional provisions.

5. **Offer KCMO's contribution.** We have drafted training-prohibition language that names training explicitly, reaches derived data, and closes the general-product-improvement route. Happy to share as draft, subject to our Law review.

6. **Steal the license-override sentence.** "This Addendum governs over any contrary license terms." One sentence, defeats vendor terms of service.

7. **Second jurisdiction to cite.** California's Generative AI Toolkit is DC's source for the clause.

8. **What to ask the group.** Has anyone enforced one of these clauses yet? Disclosure language is easy to adopt and hard to operate. The interesting question is what happened the first time a vendor said "yes, there is AI in here."

---

## 6. What KCMO should adopt, adapt, and skip

### Adopt largely as written

| Item | Why |
|---|---|
| **AI Notification Clause** | Highest value per word in the entire document. Put it in every IT and services solicitation. Independent of the challenge. |
| **License-override sentence** (Appendix E opening) | Defeats conflicting vendor terms of service. |
| **Automated Decision System definition** including its exclusions | The carve-out list keeps the definition operational. |
| **The three-question AI identification screen** | Usable by non-technical procurement staff. |
| **AI Factsheet** (Appendix B) | The challenge announcement already references an "AI Fact Sheet" that does not exist at KCMO. This is a ready-made template. Adopting it closes an open item. |
| **Post-award change to re-review loop** | Matches the material-change triggers already in the mechanism spec. |

### Adapt

| Item | Adaptation needed |
|---|---|
| **Appendix E, 14 contractor requirements** | Sound, but written for deployed operational systems. For a challenge pilot, apply the subset at Gate 4 rather than all fourteen at Stage 1. |
| **Special Pilot Procurement** (D.C. Official Code § 2-354.08) | DC has a *statutory* pilot procurement method for "obtaining a new technology," explicitly recommended when testing at smaller scale before full deployment. **Find out whether KCMO's code has an equivalent.** If it does, that is the instrument question for the challenge largely answered. If it does not, that is a concrete legislative ask. |
| **75/25 technical-to-price split** | Not applicable to a fixed-stipend challenge stage, but directly relevant to the eventual implementation contract. |
| **AI Values Alignment Report** | Requires a values framework first. KCMO would need its own equivalent of the six AI Values before this artifact means anything. |

### Skip or do not inherit

| Item | Why |
|---|---|
| **0-5 Technical Rating Scale with fractional weighting** | Workable but clunky, and it has no hard floors. KCMO's threshold-plus-pass/fail model is stronger: a team can fail on a mandatory item regardless of total score. Keep ours. |
| **DC's governance bodies** (AI Taskforce sunsetting December 2026, AIVA advisory group) | Organizational design specific to DC. |
| **Cost-reimbursement discouragement** | Sensible but generic procurement advice, not AI-specific. |

### Gaps in DC's handbook that KCMO should not replicate

- **No baseline measurement requirement.** DC says the best way to evaluate an AI tool is to compare it to a human doing the same task, which is right, but nothing requires measuring the current human baseline before deployment. Our Stage 0 already fixes this.
- **No explicit prohibition on training against buyer data.** Section 4.1 above.
- **No automated decision-making disclosure trigger.** Section 4.2 above.
- **No staged gates.** DC's pilot procurement is a *method*, not a gated pathway with thresholds. Our mechanism spec is ahead here.
- **No evaluator conflict-of-interest rules.** Absent from the handbook.

---

## 7. What KCMO's AI procurement document could look like

DC's pattern is worth copying at the structural level: **an executive instrument authorizes
a procurement handbook, which produces standard clauses, a vendor factsheet, and a
contract addendum.** Three layers, each doing one job.

A KCMO equivalent, sequenced by what unblocks what:

**Layer 1: Authorizing instrument.** DC used Mayor's Order 2024-028. KCMO's equivalent
would need to come from the City Manager or Council. This is the slowest piece, and it is
**not on the critical path for the challenge** — the challenge proceeds as a standard
procurement action. Start it in parallel.

**Layer 2: Standard clauses, deployable now.** These need no new authority; they are
contract language Procurement can begin inserting immediately.
- AI Notification Clause, in every IT and services solicitation
- Supplemental training-on-City-data disclosure and prohibition
- Supplemental automated decision-making disclosure
- License-override provision
- Data deletion and return at termination

**Layer 3: The handbook.** Structured like DC's, but built on the staged model already
developed for the challenge:
- Definitions, including Automated Decision System with exclusions
- How to identify AI, including the marketing-copy screen
- Risk tiering, which is **ours, not DC's**, scaling oversight to consequence
- Pre-solicitation: problem definition, **baseline measurement**, data readiness
- Solicitation: clauses, Factsheet, proposal instructions, evaluation with thresholds and pass/fail items
- Post-award: monitoring, material-change re-review, incident response
- Appendices: Factsheet template, contract addendum, evaluation worksheet

**The reusable asset already built.** The mechanism and pathway specification is the staged
acquisition half of this. It is domain-neutral and instrument-neutral by design. A KCMO AI
procurement handbook would be that specification plus the AI-specific governance content
above, and the challenge is the first instance proving the staged half works.

---

## 8. Verification notes

- The DC handbook is **confirmed** as "Last Updated: February 2025," issued by DC OCP under Mayor's Order 2024-028. This resolves a date previously flagged as unverified in our reference compendium.
- **Correction carried into our other documents:** earlier materials described DC's handbook as establishing "risk tiers." The full text does **not**. It categorizes risks into three harm areas drawn from the Handbook for AI Values Alignment (direct and indirect physical harm, deprivation of rights, exacerbating inequity), and uses a 0-5 technical rating scale for proposals, but establishes no graduated oversight tiers. The risk tier in our mechanism specification is our own construct and should not be attributed to DC.
- Draft clause language in section 4.3 is **ours, unreviewed**. It has not been through KCMO Law and should be offered as draft only.

---

*Sources: DC OCP, Artificial Intelligence (AI) Procurement Handbook, February 2025,
https://techplan.dc.gov/sites/default/files/u23/1E.%20AI%20Procurement%20Handbook%20-FINAL.pdf
· DC AI Values and Strategic Plan, https://techplan.dc.gov/page/dcs-ai-values-and-strategic-plan
· Mayor's Order 2024-028 · California Generative AI Toolkit, cited by DC as the source of the notification clause.*
