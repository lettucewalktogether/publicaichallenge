# Permit Record Linkage: Minimum Tracking Specification

**City of Kansas City, Missouri**
**For: Chief Data Officer / Data KC, CPD, and the CPD Public AI Innovation Challenge**
**Purpose: define the minimum identifiers the challenge must carry so review performance can be joined to permit and housing outcomes later**

---

## 1. The principle

The identifier must be **assigned at first touch and survive every state change afterward**.

If it comes from the system of record, linkage is free. If it is created for the challenge,
we have built a mapping problem that someone has to maintain and reconcile forever.

**Rule: no vendor may assign the primary key.** Vendors may carry their own internal
identifiers, but every artifact they produce must reference the City's record identifier.

---

## 2. Why one identifier is not enough

A residential project passes through several states, and the identifier often changes
along the way.

| State | When | Identifier typically available |
|---|---|---|
| Submittal received, QCR intake | Challenge touches here | Application or submittal number |
| Review cycles, resubmittals | Challenge touches here | Same record, or a new one, depending on the system |
| Permit issued | After the challenge | Permit number, which may differ from the application number |
| Construction | Later | Permit number |
| Certificate of occupancy, units delivered | Later | Permit number, unit count |

**The challenge operates in the first two rows. HUD cares about the last two.** If the
identifier changes between them and we did not capture the crosswalk, the join cannot be
reconstructed.

---

## 3. Minimum key set

Carry all four with every challenge artifact.

| Field | Why |
|---|---|
| **Application or submittal ID** | Exists at the point the challenge touches the work. The primary operational key. |
| **Permit number** | Assigned later. May differ from the application ID. Captured when it exists, backfilled when issued. |
| **Parcel identifier** | The stable anchor. Application and permit numbers can churn across revisions and reapplications; the parcel does not. This is the fallback that makes the join recoverable even if the other keys break. |
| **Dwelling unit count** | One permit is not one housing unit. A duplex is one permit and two units. HUD counts units, not permits. |

### Timestamps to capture alongside them

Submittal received, each review cycle start and end, permit issued, certificate of
occupancy. These are what produce end-to-end time to permit, which is the outcome measure,
as distinct from review time, which is the mechanism measure.

### Optional but valuable if the data exists

Affordability or income-restriction flag, or area median income band. Section 208 asks
whether housing serves households at a range of income levels. If permit records cannot
carry this, decide now whether it can be joined from another source.

---

## 4. Three questions for Data KC

These determine whether the design above is buildable as written.

1. **Does a stable application or submittal identifier exist at QCR intake, before a permit number is assigned?** If not, the challenge has no key at its own touch point and we need one.

2. **Does a resubmittal create a new record or update the existing one?** This determines how review cycles are counted, and whether a project's history is one row or several. It also determines whether the resubmittal rate is computable at all.

3. **Do permit records carry a dwelling unit count and a parcel identifier?** If either is missing or unreliable, that is a gap to close before Stage 1, not after.

---

## 5. What this requires of the challenge itself

**In the challenge package (R4 section 5.5).** Every development case and every blind
evaluation case is supplied to teams already carrying its City record identifiers. Teams do
not create them and do not need to.

**In vendor outputs.** R4 currently requires findings to cite "drawing, page, detail, or
document." Add the City record identifier to that requirement. Every finding, every log
entry, every test result should be traceable to the record it came from.

**In Stage 2 shadow operations.** Same requirement, applied to live submittals.

**On personally identifiable information.** The linkage key is the record identifier and
the parcel, not applicant identity. Any join to applicant-level data happens inside City
systems, not in vendor environments. This is consistent with the data handling already in
R4 and with the staff-data protections in section 6.6.

---

## 6. Minimum viable version

If only one thing gets done before Stage 1:

> **Capture the system-of-record application identifier with every challenge artifact, and
> require vendors to carry it through every output.**

That single step preserves the ability to join later, even if the unit counts, parcel
identifiers, and affordability tags are added afterward. Without it, nothing downstream is
recoverable.

---

## 7. Why this is urgent rather than important

Every other item in the Section 208 analysis can be added later at moderate cost. This one
cannot. Review performance measured without a record key produces numbers that describe
the tool and can never be connected to permits, units, or housing supply.

The decision costs almost nothing now. After Stage 1 begins, the data that exists is the
data we have.

---

*Companion to [`hud-sec208-data-requirements-analysis.md`](./hud-sec208-data-requirements-analysis.md).
Reference: CPD Public AI Innovation Challenge Announcement R4, EV4601.*
