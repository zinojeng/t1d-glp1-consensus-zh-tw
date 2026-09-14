# Cross-Session Brief

## Run identity

- `run_id`: T1D-GLP1-20260914-R1
- owner/director/reconciler: Codex
- evidence cutoff: 2026-09-14 (Asia/Taipei)
- Claude Code: 2.1.270 on macOS
- orchestration: three independent Claude Code background sessions with file handoff and peer challenge; Codex fan-in
- repository: `t1d-glp1-consensus-zh-tw`
- target branch: `main` through a reviewed feature branch

## Objective

以 Garg et al. 2026 consensus report 為核心，產出供內分泌與糖尿病專業讀者使用的繁體中文完整學術摘要、臨床安全框架與 10 題 Q&A；清楚區分共識意見、RCT、觀察性資料與尚未證實的推論，並公開為 GitHub Pages。

## Deliverables

| Deliverable | Owner | Path | Required checks |
|---|---|---|---|
| 成人臨床 memo | Claude `t1d-adult` | `research/memos/ADULT_ENDOCRINE.md` | 數字、locator、證據層級 |
| 方法學 memo | Claude `t1d-method` | `research/memos/METHODOLOGY.md` | study design、偏差、衝突、換算 |
| 兒科／安全 memo | Claude `t1d-safety` | `research/memos/SAFETY_SPECIAL_POPULATIONS.md` | contraindication、ketosis、特殊族群 |
| 最終報告 | Codex | `REPORT_ZH_TW.md` | 引用、臨床措辭、衝突揭露 |
| 10 題 Q&A | Codex | `QA_ZH_TW.md` | 每題完整且可獨立閱讀 |
| 網站 | Codex | `docs/` | link、HTML、mobile、accessibility |

## Canonical inputs

| Input | Version | Locator | Public Git status |
|---|---|---|---|
| Garg et al. consensus PDF | DOI 10.1177/15209156261449879; local SHA-256 `93d4670396159934c2c509aef1ca88de06f28dd9f1e3bb7c1751904b51c42352` | Parent directory, 23 pages | Excluded |
| Parsed Markdown | local SHA-256 `3394682fe6401f7deae02a1a66ae94388b5e29b8848ab924855b699790ae6aad` | Parent directory | Excluded |

## Source policy

1. Primary article, trial registry, regulator or professional society takes precedence.
2. Quantitative and high-risk claims require DOI/PMID/NCT and an exact table, page, section or outcome locator where available.
3. Grade evidence as `RCT`, `OBSERVATIONAL`, `CONSENSUS`, or `UNKNOWN`; the paper's A/B/C/E recommendation grades must not be mistaken for an independent GRADE assessment.
4. No Sci-Hub or other unauthorized source. Download only lawful open-access or author-posted full text.
5. Do not commit source PDFs, copyrighted full text, credentials or tokens.

## Non-negotiable clinical boundaries

- GLP-1／GLP-1–GIP therapy is adjunctive; insulin must never be completely stopped in confirmed T1D.
- Avoid universal insulin-dose prescriptions; present Table 2 values as consensus starting suggestions requiring CGM-driven individualization.
- Separate euglycemic ketosis/DKA symptoms from expected GI adverse effects; advise ketone testing and sick-day escalation.
- State off-label/regulatory status with date and jurisdiction limits.
- Pregnancy, active severe GI disease/gastroparesis, active retinopathy risk, frailty/sarcopenia and peri-procedural use require explicit cautions.

## Required peer challenge

Each Claude session must use `ListAgents` and `SendMessage` if available after its first-pass memo. It must send one specific evidence challenge to another named session and record the message ID/topic in its own memo. The recipient must append a response or unresolved note to its own memo. If transport is unavailable, record `DELIVERY_UNKNOWN`; Codex must not infer assent.

## Git and security

- Claude sessions do not commit, push, merge, change GitHub settings or write outside their own memo path.
- Codex alone owns final artifacts and Git operations.
- Original PDF/full-text caches and the user-supplied LlamaParse key never enter Git.

