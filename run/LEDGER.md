# Run Ledger

## Run

| Field | Value |
|---|---|
| Run ID | T1D-GLP1-20260914-R1 |
| Director | Codex |
| Started | 2026-09-14 |
| Evidence cutoff | 2026-09-14 |
| Status | PREFLIGHT |

## Session receipts

| Role | Session | Base commit | Brief ACK | Write scope | Peer message | Status |
|---|---|---|---|---|---|---|
| Adult endocrinology | `t1d-adult` | pending | pending | `research/memos/ADULT_ENDOCRINE.md` | pending | pending |
| Evidence methodology | `t1d-method` | pending | pending | `research/memos/METHODOLOGY.md` | pending | pending |
| Safety/special populations | `t1d-safety` | pending | pending | `research/memos/SAFETY_SPECIAL_POPULATIONS.md` | pending | pending |

## Known conflicts requiring adjudication

| ID | Issue | Initial state |
|---|---|---|
| C-01 | `200 mg/dL` is `11.1 mmol/L`, but a recommendation line pairs it with `13.9 mmol/L` | OPEN |
| C-02 | Graphical abstract says no GLP-1/GIP change for upper endoscopy; main text recommends individualized peri-procedural decision and cites OCULUS with more retained gastric content when continued | OPEN |
| C-03 | Apparent cardiorenal/mortality benefit comes from observational or target-trial-emulation data, not T1D cardiovascular/kidney outcome RCTs | OPEN |
| C-04 | T1D use is off-label; obesity indication may apply to a person with T1D but is not a T1D treatment indication | OPEN |

## Closure checklist

- [ ] Canonical SHA and source inventory verified.
- [ ] All session ACKs and write scopes verified.
- [ ] Required peer challenge/response recorded or failure disclosed.
- [ ] Every high-risk claim has evidence class and source.
- [ ] LlamaParse result checked against local source.
- [ ] Source PDFs and secrets excluded from Git.
- [ ] Markdown, Q&A and website QA passed.
- [ ] Feature branch pushed, PR merged to `main`, remote commit verified.
- [ ] GitHub Pages deployed and URL verified.

