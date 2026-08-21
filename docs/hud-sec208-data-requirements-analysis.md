# HUD Section 208 Data and Performance Measurement: Requirements Analysis

**City of Kansas City, Missouri**
**Prepared for: CPD Directors, Assistant City Manager, Grants Officer, Chief Data Officer**
**Subject: what the CPD Public AI Innovation Challenge must measure now to remain eligible for HUD Innovation Fund support later**
**Reference: Announcement R4, EV4601; 21st Century ROAD to Housing Act, Pub. L. 119-101, Sec. 208**

---

## 1. Why this needs a decision now

The challenge announcement is at R4 and moving toward issuance through Procurement. Once
Stage 1 begins, the data we collect is the data we will have. Performance measurement
cannot be retrofitted after the fact.

Separately, HUD must establish the Section 208 Innovation Fund within one year of
enactment, which puts the first funding opportunity in roughly mid to late 2027.
Appropriations are authorized at $200 million per year for FY2027 through FY2031, with
grants from $250,000 to $10 million and not fewer than 25 awarded annually.

The overlap is the point. A 60-day Stage 1 plus a six-month Stage 2 concludes well before
the first notice of funding opportunity. If the challenge is instrumented correctly, it
becomes documented evidence in an application. If it is not, it becomes an anecdote.

**This is a two-week decision, not a two-quarter one.** The specific changes below cost
very little to make before issuance and are effectively impossible to make afterward.

---

## 2. What Section 208 actually asks for

Quoted or closely paraphrased from the enrolled text.

**Eligibility.** A metropolitan city that has "demonstrated an objective improvement in
housing supply growth, as determined by the Secretary." KCMO qualifies as a metropolitan
city under 42 U.S.C. 5302. The supply-growth test is the gate.

**The application must provide:**

1. A description of each purpose for which the grant will be used, with attestation that funds go only to eligible purposes.
2. **Data on characteristics of increased housing supply during the 3-year period ending on the date the application is submitted**, which may include whether such housing serves households at a range of income levels, and whether it has improved the quality and affordability of housing in the jurisdiction.
3. A description of how each purpose addresses a community need or advances an objective in the City's **consolidated plan** under 24 CFR Part 91.
4. A description of how the City "has carried out, **or is in the process of carrying out**, initiatives that facilitate the expansion of the supply of housing."

**Qualifying initiative, verbatim:**

> "(vi) streamlining regulatory requirements and shortening processes, increasing code
> enforcement and permitting capacity, reforming zoning codes, or other initiatives that
> reduce barriers to increasing housing supply and affordability"

**Priority** goes to entities demonstrating "the use of innovative policies,
interventions, or programs for increasing housing supply" and "a marked improvement in
housing supply growth."

**Eligible purposes** are activities under section 105 of the Housing and Community
Development Act of 1974 (42 U.S.C. 5305); activities under the Local and Regional Project
Assistance Program (49 U.S.C. 6702); **or** initiatives that facilitate expansion of the
supply of attainable housing and that supplement initiatives the City has carried out or
is carrying out. The third category is the broad one and is the most likely home for this
work.

**One provision the Grants Officer should read closely.** Projects assisted under this
section "for activities described in sector 23 of the North American Industry
Classification System" are treated as CDBG projects. Sector 23 is Construction. A
technology and process project is probably not sector 23, which would mean CDBG strings do
not attach. That determination materially changes the compliance burden and should not be
assumed in either direction.

---

## 3. The gap in R4

R4 is a strong procurement document. Its measurement design is thorough and well
constructed. It is also aimed entirely at one question: does the vendor's tool work.

The following terms appear **zero times** in R4: baseline, housing, units, income,
affordability, consolidated plan, supply, permits issued.

| What HUD will ask | What R4 measures today | Status |
|---|---|---|
| Objective improvement in housing supply growth over 3 years | Nothing | **Missing** |
| Housing serving a range of income levels | Nothing | **Missing** |
| Improvement in quality and affordability of housing | Nothing | **Missing** |
| How the initiative advances a consolidated plan objective | Nothing | **Missing** |
| Evidence the initiative was carried out or is in progress | Extensive and high quality | Adequate |
| Current-state baseline against which improvement is shown | Nothing | **Missing** |

### The causal chain problem

The theory of the challenge is a chain:

> better first-pass screening → fewer avoidable review cycles → shorter time to permit →
> more permits processed per unit of staff capacity → more housing units permitted →
> housing supply growth

**R4 measures the first two links. HUD cares about the last two.** Nothing in the
announcement connects them.

This is the central finding of this analysis. It is not a criticism of the document, which
was written to procure a tool. It is a statement that a second purpose has emerged and the
instrumentation has to serve both.

---

## 4. What to change, before issuance

Six changes. The first is the one that cannot be retrofitted.

### 4.1 Permit-level record linkage (highest priority)

Every submittal used in the challenge, in both the development set and the blind
evaluation set, and every submittal touched during a Stage 2 shadow operation, must carry
its **permit record identifier** from the system of record.

Without this, review-efficiency measures float free of outcomes. We would be able to say
review got faster and never be able to demonstrate that permits issued, units permitted, or
time to permit moved with it.

With it, we can join challenge measures to permit outcomes at any later date, including
after the challenge concludes, without having planned the specific analysis in advance.

**Cost now: near zero. Cost later: not recoverable.**

Handle applicant personally identifiable information deliberately. The linkage key should
be the permit record identifier, not applicant identity, and the join should occur inside
City systems rather than in vendor environments.

### 4.2 Add outcome measures alongside the efficiency measures

R4 section 8.3 lists pilot measures. Add:

- Permits issued, and dwelling units permitted, for the covered application types
- End-to-end time to permit, measured from submittal to issuance, distinct from review time
- Count of review cycles per application
- Share of submittals complete at first intake

The first two are the ones HUD will recognize. The current measures are the mechanism; these
are the outcome.

### 4.3 Establish a three-year retrospective baseline, not a snapshot

The Section 208 application asks for three years of data. The challenge needs current state
for its own gates. These are the same exercise if scoped correctly at the start and two
separate exercises if not.

Build the baseline as a three-year retrospective series covering, at minimum: QCR cycle
time, review cycles per application, resubmittal and rework rate, first-pass completeness,
end-to-end time to permit, permits issued, and units permitted.

**This is City-internal work and does not belong in the announcement as a vendor
requirement.** It does belong on a schedule with a named owner, and it should be under way
before Stage 1 begins so that the challenge has something to be measured against.

### 4.4 Add affordability and income characteristics where the data exists

Section 208 asks whether housing serves households at a range of income levels and whether
quality and affordability improved. Determine now whether permit records can be tagged with
affordability characteristics, income-restricted status, or area median income band, and if
so, capture the tag from the start.

If the data does not exist in permit records, say so now and decide whether it can be
derived or joined from another source. Discovering this during application preparation is
too late.

### 4.5 Map the challenge to a Consolidated Plan objective

The application must describe how the purpose advances an objective in the City's
consolidated plan under 24 CFR Part 91. Identify the specific objective now and record it
in the CPD challenge file. This is a short exercise and it also strengthens the internal
case for the work independent of any grant.

### 4.6 Two narrow amendments to R4 language

**Data rights.** R4 section 12 gives the City the right to retain and use challenge results
"for internal evaluation, governance, audit, public accountability, and procurement
planning." Add grant applications and federal reporting to that list. One clause, and
without it there is an avoidable argument later.

**Records retention.** R4 addresses Missouri public records requirements. If challenge data
may support a federal grant application, federal retention rules may also apply, generally
three years from final report submission under 2 CFR 200.334. Confirm with the Grants
Officer and reflect whichever period is longer.

---

## 5. What each participant owns

| Participant | Owns |
|---|---|
| **Assistant City Manager** | The decision to instrument for a grant path, and the resourcing that follows. Whether pursuing Section 208 is a City priority. |
| **CPD Directors** | Whether the outcome measures in 4.2 are collectable from current permitting practice. Subject-matter expert capacity for the baseline and the ground-truth set. Consolidated plan objective mapping with housing staff. |
| **Grants Officer** | Whether KCMO can demonstrate objective improvement in housing supply growth. Whether this work fits an eligible purpose, most likely the third category. Whether NAICS sector 23 treatment and CDBG strings attach. Federal retention and audit requirements. Consolidated plan alignment. |
| **Chief Data Officer** | Permit-level linkage design. The three-year retrospective baseline. Whether affordability and income tagging is feasible. Personally identifiable information handling across the challenge and permit-record join. Data ownership across CPD, Data KC, and vendor environments. |
| **CDO (convening)** | Sequencing against the Procurement timeline. Federal Register monitoring. Keeping the challenge and the grant path from becoming entangled in ways that slow either one. |

---

## 6. Decisions needed at the meeting

1. Do we instrument the challenge for a possible Section 208 application, yes or no? Everything else follows from this.
2. Who owns the three-year retrospective baseline, and does it start before Stage 1?
3. Is permit-level record linkage feasible in the current system of record, and who implements it?
4. Can permit records carry affordability or income characteristics, and if not, is a joined source available?
5. Does the Section 208 timeline change anything about the Procurement schedule for R4? The recommendation below is that it should not.
6. Who monitors the Federal Register for HUD's supply-growth methodology and the comment window?

---

## 7. Recommendation

**Do not delay issuance of R4 for this.** The changes in section 4 are small. Sections 4.2
and 4.6 are edits to the announcement. Sections 4.1, 4.3, 4.4 and 4.5 are City-internal
work that runs in parallel and does not gate Procurement.

The one item that genuinely must be settled before Stage 1 begins is **permit-level record
linkage**, because it determines whether the challenge produces evidence or only
impressions. It is a data architecture decision, it costs almost nothing to make now, and
it cannot be made later.

Everything else in this analysis can proceed on its own track.

---

## 8. Cautions

- **Eligibility turns on housing supply growth, not on permitting improvement.** Running this challenge does not make KCMO eligible for Section 208. Demonstrated supply growth does. The permitting work earns priority once eligible. This distinction should survive every retelling of this analysis.
- **HUD's methodology does not exist yet.** The measure of "objective improvement in housing supply growth" will be published in the Federal Register for at least 90 days of public comment before the first funding opportunity. Until then, we are preparing against an informed guess.
- **The grant is upside, not a plan.** Nothing about the challenge depends on it. The service case stands on its own.
- **Section 208 contains no artificial intelligence provisions.** Nor does the Act as a whole. This analysis concerns housing data and performance measurement only, and does not affect the AI governance workstream.

---

*Sources: 21st Century ROAD to Housing Act, Pub. L. 119-101, enrolled text, GovInfo package
BILLS-119hr6644enr, Sections 208 and 209. CPD Public AI Innovation Challenge Announcement
R4, EV4601, August 14, 2026. Companion note:
[`note-road-to-housing-act.md`](./note-road-to-housing-act.md).*
