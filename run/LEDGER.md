# Run Ledger

## Run

| Field | Value |
|---|---|
| Run ID | T1D-GLP1-20260914-R1 |
| Director | Codex |
| Started | 2026-09-14 |
| Evidence cutoff | 2026-09-14 |
| Status | COMPLETE / PUBLISHED |

## Session receipts

| Role | Session | Base commit | Brief ACK | Write scope | Peer message | Status |
|---|---|---|---|---|---|---|
| Adult endocrinology | `t1d-adult-r1` (`d5840db5-b5d0-4837-8905-62ad7957a6f8`) | `9b81a74e` | yes; source hashes matched | `research/memos/ADULT_ENDOCRINE.md` | C-01/C-03 exchange completed | COMPLETE |
| Evidence methodology | `t1d-method-r1` (`49efdc6b-c6fa-42bd-b8db-6e029725ed43`) | `9b81a74e` | yes; source hashes matched | `research/memos/METHODOLOGY.md` | challenged C-01/C-03; reply received | COMPLETE |
| Safety/special populations | `t1d-safety-r1` (`92368806-a858-45a9-a45a-4b0a8d7f99c7`) | `9b81a74e` | yes; full source read | `research/memos/SAFETY_SPECIAL_POPULATIONS.md` | challenged C-03; reply/fix confirmed | COMPLETE; Codex recovered memo after role-session worktree EPERM fault |

## Known conflicts requiring adjudication

| ID | Issue | Initial state |
|---|---|---|
| C-01 | `200 mg/dL` is `11.1 mmol/L`, but a recommendation line pairs it with `13.9 mmol/L` | CLOSED: use 11.1 mmol/L and disclose apparent source erratum |
| C-02 | Graphical abstract says no GLP-1/GIP change for upper endoscopy; main text recommends individualized peri-procedural decision and cites OCULUS with more retained gastric content when continued | CLOSED: follow formal body recommendation; disclose conflict and OCULUS data |
| C-03 | Apparent cardiorenal/mortality benefit comes from observational or target-trial-emulation data, not T1D cardiovascular/kidney outcome RCTs | CLOSED: association only; no causal wording |
| C-04 | T1D use is off-label; obesity indication may apply to a person with T1D but is not a T1D treatment indication | CLOSED: separate and date/jurisdiction qualify |

## Source processing receipts

| Item | Receipt |
|---|---|
| Consensus PDF | 23 pages; SHA-256 `93d4670396159934c2c509aef1ca88de06f28dd9f1e3bb7c1751904b51c42352`; pages 1–15 rendered and key tables/graphical abstract visually inspected |
| Supplied Markdown | 1,219 lines; SHA-256 `3394682fe6401f7deae02a1a66ae94388b5e29b8848ab924855b699790ae6aad`; line locators used across role memos |
| Open-access reference full text | Pasqua RCT, Snaith RCT, Purcell meta-analysis, OCULUS RCT, Xu target-trial emulation, and 2024 AID consensus saved outside Git under `source_cache/fulltext/`; checksum manifest generated |
| Research/literature MCP | OpenEvidence call attempted; blocked because its logged-in browser relay was unavailable. Replaced with publisher, PubMed/PubMed Central, ClinicalTrials.gov, FDA/TFDA primary-source checks |
| LlamaParse | Official `llama-cloud` SDK, agentic tier; job `pjb-aibqinu4dstsfjvz38ley2u144uf` COMPLETED; 23/23 page markers; Markdown 177 KB / 19,771 words; title, Table 2, both C-01 loci, OCULUS passage and references spot-checked against PDF/supplied Markdown; output SHA-256 `becc81695c28dc81200b865f627e8b85d446b86cd14243d4dbe8b0bb5cd348f8`; output kept outside Git |

## Cross-session handoff summary

- Codex was director and sole Git writer.
- Each Claude role read the same immutable brief and source checksums, wrote one bounded memo, and exchanged at least one specific evidence challenge through Claude cross-session messaging.
- Three independent roles converged on C-01. Methodology and safety roles challenged the adult memo's C-03 causal-language risk; the adult role explicitly added confounding-by-indication / healthy-user / prescriber-selection limitations.
- The safety role's attempted `EnterWorktree` caused an EPERM fault after its analysis was complete; Codex copied the finished scratch artifact into the canonical path and preserved this receipt.

## Publication receipt

| Field | Value |
|---|---|
| Repository | <https://github.com/zinojeng/t1d-glp1-consensus-zh-tw> |
| Content PR | <https://github.com/zinojeng/t1d-glp1-consensus-zh-tw/pull/1> |
| Content merge commit | `630ffb4eb8229f403c093bad2c707771a9d23b11` |
| Pages source | `main:/docs` |
| Public site | <https://zinojeng.github.io/t1d-glp1-consensus-zh-tw/> |
| Deployment verification | GitHub Pages state `built`; HTTPS enabled; live request HTTP 200; hero, ADJUST-T1D and C-01 markers matched deployed HTML |

## Closure checklist

- [x] Canonical SHA and source inventory verified.
- [x] All session ACKs and write scopes verified.
- [x] Required peer challenge/response recorded or failure disclosed.
- [x] Every high-risk claim has evidence class and source.
- [x] LlamaParse result checked against local source.
- [x] Source PDFs and secrets excluded from Git.
- [x] Markdown, Q&A and website QA passed.
- [x] Feature branch pushed, PR merged to `main`, remote commit verified.
- [x] GitHub Pages deployed and URL verified.
