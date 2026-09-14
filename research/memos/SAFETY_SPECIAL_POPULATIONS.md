# SAFETY_SPECIAL_POPULATIONS.md
Role: t1d-safety-r1 | Run: T1D-GLP1-20260914-R1 | Base commit: `9b81a74e0f63c6694e8f9dd5a367aeb9557b61b2` (verified via `git rev-parse HEAD`)
Source: Garg et al., "Adjunctive Treatment with GLP-1 and Dual GLP-1/GIP Receptor Agonists for People with Type 1 Diabetes: Consensus Report and Practical Guidelines for Safe Use," *Diabetes Technol Ther* 2026 (in press); DOI [10.1177/15209156261449879](https://doi.org/10.1177/15209156261449879). Local files: `garg-et-al-2026-...-type-1-diabetes.pdf` (23 pp.) and its LlamaParse `.md` (1219 lines), parent directory of the repo (excluded from Git per BRIEF.md).

**Locator convention:** `MD:<line>` = parsed-Markdown line number (as of the copy read for this memo); `PDF~p.N` = approximate PDF page inferred from adjacent page-break markers in the parsed MD (e.g. "8 GARG ET AL."). Evidence class tags: **[RCT]**, **[OBSERVATIONAL]** (includes real-world/retrospective/target-trial-emulation), **[CONSENSUS]** (expert opinion / narrative statement, not in the graded Recommendations list, or a graded A–E recommendation — the paper's own grade, *not* an independent GRADE rating per BRIEF.md source-policy §3), **[UNKNOWN]** (asserted without a traceable citation or study design in-text).

---

## Delivery note

This role session completed the analysis but encountered an `EnterWorktree`/filesystem permission fault while writing to the canonical path. Codex, acting as the run's sole Git writer, recovered the complete memo from the session scratch artifact and placed it here without changing the substantive analysis. The event is retained in `run/LEDGER.md` as a reproducibility note; it does not affect the source review below.

---

## 1. Hypoglycemia

| Finding | Evidence class | Locator |
|---|---|---|
| Daily liraglutide (ADJUNCT ONE/TWO, older-generation GLP-1 RA) showed **increased risk of symptomatic hypoglycemia and hyperglycemia with ketosis** vs. placebo in T1D adults. ADJUNCT ONE used a treat-to-target insulin design; ADJUNCT TWO capped insulin doses — both design choices may have independently influenced hypoglycemia risk, confounding the drug-effect signal. | **[RCT]** (ADJUNCT ONE n=1398; ADJUNCT TWO n=835) | MD:476; PDF~p.7–8; refs 63–64 |
| Weekly semaglutide/tirzepatide real-world studies "have not shown a significant risk for hypoglycemia or hyperglycemia/ketosis" — but the source itself flags that real-world studies "may underreport instances of severe hypoglycemia or ketosis, as participants are not explicitly monitored for these events," and that "selection biases for GLP-1 RA prescribing could also be a factor for the absence of acute diabetes events." | **[OBSERVATIONAL]**, explicit underreporting/selection-bias caveat **in-source** | MD:476; PDF~p.7–8; refs 21–23,41,42,44,48,52,66,67 |
| Table 1 (8 observational studies, 12–24 mo, semaglutide/tirzepatide ± liraglutide/dulaglutide): "No increases in severe hypoglycemia or diabetic ketoacidosis (DKA) risk ... were reported." | **[OBSERVATIONAL]** | MD:235–442 (Table 1), MD:442; PDF~p.5–6 |
| Insulin-titration Table 2 grades basal/bolus reductions by 14-day CGM TIR/TBR or HbA1c band specifically **to avoid hypoglycemia risk** during GLP-1/GIP RA initiation; bolus reduction is prioritized over basal reduction (earlier, disproportionately greater reductions seen with insulin pump/AID data). | **[CONSENSUS]** (expert-derived titration table, grounded in cited pump/AID studies refs 53,54,68) | MD:478, MD:484–568 (Table 2), MD:566; PDF~p.8 |
| AID-specific hypoglycemia risk: in closed-loop systems where basal is auto-adapted (MiniMed 780G, Omnipod 5), the **programmed manual basal rate can exceed actual delivered basal** after GLP-1/GIP RA-driven insulin reduction — a latent hypoglycemia risk if the system reverts to manual mode (e.g., CGM outage). Manual basal must be proactively lowered. | **[CONSENSUS]** | MD:576; PDF~p.9; ref 70 |
| Recommendation: CGM is required (**Grade A** for MDI; AID "preferred") and CGM metrics should **supersede HbA1c** for dose titration during escalation, specifically to reduce hypoglycemia risk while avoiding under-coverage/ketosis. | **[CONSENSUS]** (paper's own grade A) | MD:608 (rec.), MD:586; PDF~p.8–9 |

**T1D-specific vs. extrapolated:** All hypoglycemia data cited are T1D-specific (ADJUNCT I/II, ADJUST-T1D, Table 1 cohorts, AID sub-studies). No T2D-hypoglycemia data are used as a stand-in here — this is a strength of the source on this specific topic.

---

## 2. Hyperglycemia, Ketosis and Euglycemic DKA

### 2.1 The C-01 threshold discrepancy (resolved by 3-way peer convergence)

The source is **internally inconsistent** on the glucose threshold that should trigger ketone testing:

- Body text: "people with T1D starting GLP-1 and GLP-1/GIP RA therapy should be advised to monitor ketone levels when glucose levels are **≥200 mg/dL (≥11.1 mmol/L)** for 2 h or more." — **200 mg/dL ↔ 11.1 mmol/L is the arithmetically correct conversion.** **[CONSENSUS]** MD:580; PDF~p.9; ref 73.
- Graded Recommendation (Grade B): "Ketone levels should be monitored when glucose levels are **≥200 mg/dL (≥13.9 mmol/L)** for 2 h or more." — **13.9 mmol/L ≈ 250 mg/dL, not 200 mg/dL.** This is very likely a copy/paste slip from the *same bullet's* later clause, "even if glucose values are <250 mg/dL (euglycemic ketosis)" — i.e., the 250 mg/dL→13.9 mmol/L conversion appears to have been misapplied to the earlier 200 mg/dL clause during drafting. **[CONSENSUS, Grade B — with a suspected unit/value erratum]** MD:602; PDF~p.9.

**Resolution and peer challenge record:** I raised this discrepancy independently on first pass; before I could send a challenge, `t1d-adult-r1` messaged me the identical finding (having already cross-checked with `t1d-method-r1`), reporting 2/2 convergence on **11.1 mmol/L as authoritative**. I confirmed independently as the third session (3/3 convergence) — see §7 Peer Challenge Log. **This memo's recommendation to Codex: state the threshold as 200 mg/dL (11.1 mmol/L); quote both source numbers verbatim with locators; explicitly flag the 13.9 mmol/L figure in the Grade-B bullet as a probable source erratum rather than silently choosing one value or presenting 13.9 mmol/L as an intentional, distinct, higher threshold.** A clinician reading only the mmol/L figure in isolation could otherwise set a materially different (higher, less safe) ketone-check trigger.

### 2.2 Euglycemic ketosis / DKA mechanism and monitoring

| Finding | Evidence class | Locator |
|---|---|---|
| "Euglycemic ketosis may occur without significant hyperglycemia" — education must cover ketosis/DKA symptoms (nausea, vomiting, abdominal pain, unexplained fatigue) **that overlap with GLP-1/GIP RA's own GI side effects**, and "sick day" rules for precipitating factors (e.g., infection). Ketone checks are advised regardless of whether hyperglycemia is present. | **[CONSENSUS]**, mechanistic citation to a UK epidemiology paper on euglycemic DKA pre-SGLT2i era | MD:580; PDF~p.8–9; ref 74 |
| Graded Recommendation: ketone monitoring "also required during illness, persistent GI symptoms, reduced food/drink intake, or significant insulin dose reduction, **even if glucose values are <250 mg/dL (euglycemic ketosis)**." Capillary blood ketone testing preferred over urine dipsticks (Grade E); continuous dual glucose-ketone (DGK) monitors flagged as an emerging aid (Grade E, not yet standard of care). | **[CONSENSUS, Grade B/E]** | MD:602; PDF~p.9 |
| Case reports suggest GI AEs → euglycemic DKA pathway: nausea/vomiting → patient skips food **and accompanying prandial insulin** → combined with vomiting-related dehydration → ketosis/DKA. **However**, "data from RCTs and large retrospective studies in T1D have not shown elevated rates of DKA nor severe hypoglycemia with GLP-1 and GLP-1/GIP RA use." A crossover RCT reported 2/28 (7%) episodes of **recurrent euglycemic ketosis without acidosis** during the semaglutide phase. | Mechanism: **case reports (lowest evidence tier, [OBSERVATIONAL] at best)**; population-level reassurance: **[RCT + OBSERVATIONAL]**; crossover-RCT ketosis episodes: **[RCT]**, small n | MD:630; PDF~p.10; case reports refs 82–84; reassurance refs 21,23,41,44,48,52; crossover RCT ref 48 (Pasqua, *Nat Med* 2025) |
| "GI AEs may sometimes be due to ketosis (especially if the person is unwell) due to inadequate insulin intake. This may not be associated with hyperglycemia due to GLP and GLP/GIP RA." → close monitoring of finger-stick blood ketones recommended whenever GI symptoms are present, independent of glucose reading. | **[CONSENSUS]** | MD:634; PDF~p.10 |
| **NEVER completely stop insulin** in people with T1D on GLP-1/GIP RA, even at HbA1c goals <7.0% (<53 mmol/mol). Graphical-abstract conclusion echoes this as an absolute rule: "Never STOP insulin in people with T1D." | **[CONSENSUS, Grade E]** — this is the single non-negotiable safety boundary in the whole document and matches BRIEF.md's own non-negotiable-boundaries list | MD:614 (rec.); MD:149 (graphical abstract); PDF~p.1, ~p.9 |

**T1D-specific vs. extrapolated:** All ketosis/DKA content is T1D-specific; no T2D-DKA data are imported (consistent with DKA being a T1D-predominant risk not generally seen with GLP-1 RA in T2D absolute insulin-sufficient patients).

---

## 3. Hydration and Sick-Day Rules

| Finding | Evidence class | Locator |
|---|---|---|
| "Reduced appetite and slowed gastric emptying can also result in reduced fluid intake and unintended dehydration, potentially exacerbated by vomiting or diarrhea following initiation... Unintended dehydration may also be accompanied by hypotension" — mandates BP monitoring and antihypertensive-med review from the moment of GLP-1/GIP RA initiation. | **[CONSENSUS]** | MD:468; PDF~p.7 |
| "Individuals with T1D should be instructed to drink extra fluids during the GLP-1 and GLP-1/GIP RA dose escalations, to avoid dehydration because of nausea, vomiting, or other GI events during up-titration." | **[CONSENSUS]** | MD:586; PDF~p.9 |
| Sick-day protocol: written instructions for insulin self-adjustment **and** "sick day" protocols **and** symptom-awareness education for ketosis/DKA must be provided together at initiation, specifically for the scenario where food intake falls and insulin doses are reduced. | **[CONSENSUS, Grade E]** | MD:604 (rec.); PDF~p.9 |
| Perioperative: "Consider a clear liquid diet for 24 h before elective anesthesia/procedures ... to reduce residual gastric contents. If suspension of GLP-1 and GLP-1/GIP RA therapy is deemed necessary, more-intensive glycemic monitoring is recommended ... along with insulin dose adjustment." | **[CONSENSUS, Grade B]** | MD:740; PDF~p.13 |

---

## 4. GI Intolerance and Gastroparesis

| Finding | Evidence class | Locator |
|---|---|---|
| ADJUNCT ONE (n=1398, liraglutide): GI events in 68.3% (highest dose 1.8 mg) vs. 50% (lowest dose 0.6 mg) vs. 33.3% (placebo). ADJUNCT TWO (n=835): nausea 49.5%/32.2% (high/low dose) vs. 16.5% placebo; vomiting 17.0%/9.0% vs. 3.9% placebo. | **[RCT]** | MD:626; PDF~p.9–10; refs 63,64 |
| ADJUST-T1D RCT (n=72, semaglutide up to 1 mg + AID vs. placebo): ≥1 GI AE in 53% (semaglutide) vs. 25% (placebo); discontinuation for GI AEs 5.5%. Crossover RCT (n=28, semaglutide vs. placebo): GI AEs in 82% vs. 25%; "many GI events were mild ... no severe GI AEs were reported," but qualitative post-trial interviews (n=23) found **nausea and fear of vomiting impaired accurate preprandial carbohydrate/bolus estimation** — a T1D-specific safety-relevant mechanism (T2D patients do not need to prospectively dose prandial insulin against anticipated food intake in the same way). | **[RCT]**; qualitative sub-study **[OBSERVATIONAL/qualitative]** | MD:628; PDF~p.9–10; refs 21,48,79 |
| "GI AEs have been shown to occur more frequently in younger adults with T1D, in those with a lower BMI, and in those with a longer duration of diabetes." Longer titration (2–3 month acclimatization, possibly longer) recommended for **younger individuals, lower BMI, and diabetic kidney disease (DKD)** patients specifically. | **[CONSENSUS]** (narrative, not a separately numbered graded recommendation for the titration-length point itself) | MD:590, MD:632; PDF~p.9–10; ref 70,78 |
| Recommendation: "Exercise caution in people with T1D and gastroparesis or risks for gastroparesis (e.g., those with long-duration T1D or autonomic dysfunction), before initiating GLP-1 and GLP-1/GIP RA therapy" (**Grade B**); screen for reflux/fullness/bloating/constipation/diarrhea and treat pre-existing GI conditions before starting (**Grade E**). | **[CONSENSUS, Grade B/E]** | MD:640–648; PDF~p.10 |
| Management: antiemetics/antireflux/promotility drugs for nausea/GERD/gastroparesis; laxatives + fluid/fiber for constipation; soluble fiber for diarrhea; low starting dose + slow escalation is itself the primary mitigation. "Clinical experience indicates that GLP-1 and GLP-1/GIP RA therapy for people with T1D is often optimized at a dose below that achieved for people with T2D." | **[CONSENSUS]** | MD:632; PDF~p.10 |

**T1D-specific vs. extrapolated:** Direct T1D RCT/observational data throughout; the paper explicitly notes GI AE rates "do not appear dissimilar" to T2D for once-weekly semaglutide (MD:628, refs 80–81) but does not import T2D dosing/management data wholesale — the below-T2D optimal dose observation is T1D-specific clinical experience, ungraded.

---

## 5. Retinopathy

| Finding | Evidence class | Locator |
|---|---|---|
| Rapid HbA1c reduction is independently associated with early worsening of diabetic retinopathy (DR) in T1D (established, general diabetes physiology, not GLP-1-specific). | **[CONSENSUS]**, citing prior literature | MD:652; PDF~p.10; refs 86–87 |
| **T2D evidence (extrapolated, explicitly labeled as such by the source):** SUSTAIN-6 (semaglutide, T2D CVOT) found a 76% increased risk of DR-complications vs. placebo over 24 months, concentrated in patients with pre-existing DR + high baseline HbA1c, peaking in the first 16 weeks and associated with >1.5% HbA1c-reduction magnitude. Pooled analysis across six GLP-1 RA CVOTs: each 1% above-average HbA1c reduction → ln(OR) for DR +0.77 (95% CI 0.21–1.34, P=0.007). **Recent meta-analyses of oral/weekly semaglutide found no DR association.** Tirzepatide T2D real-world cohort: **27% reduced** new-onset DR risk, no increase in progressive-DR composite. | **[RCT]** (SUSTAIN-6, CVOT pooled analysis) / **[OBSERVATIONAL]** (tirzepatide real-world cohort) — **all T2D, not T1D** | MD:652–658; PDF~p.10–11; refs 88–100 |
| **T1D-specific data (the only direct T1D retinopathy evidence in the document):** retrospective cohort, tirzepatide ~1 yr, n=106 cases vs. n=85 matched controls — new-onset DR developed **similarly** in cases and controls, even though controls did not have reduced HbA1c on follow-up while tirzepatide-treated patients did; DR incidence tracked with **rapid HbA1c decline regardless of treatment arm** (i.e., the HbA1c-velocity mechanism, not the drug per se, appears to drive risk). | **[OBSERVATIONAL]**, single-center, T1D-specific | MD:658; PDF~p.11; ref 101 |
| Source's own caveat: "retinopathy occurring in T1D is indistinguishable from that in T2D, [but] the results of T2D studies may not be generalizable to T1D, and risks for DR may be different in T1D" — longer diabetes duration and higher baseline DR prevalence in T1D cohorts. | **[CONSENSUS]**, explicit non-generalizability caveat **in-source** | MD:660; PDF~p.11 |
| Recommendations (all **Grade E**, i.e., expert opinion, weakest formal grade in this paper's scheme): retinal exam within 12 months pre-initiation (AI-assisted retinal imaging acceptable if no known DR); exam closer to initiation if HbA1c/GMI >8.5% (69 mmol/mol) with expected rapid decline; stabilize active DR with an eye-care provider before starting; exam within 1 year post-initiation if no baseline DR, then standard ADA 1–2 year cadence; exam at 3–4 months post-initiation if baseline HbA1c/GMI >8.5% **and** >0.5% (5.5 mmol/mol) drop in first 3 months, or if baseline DR is active/recently treated proliferative or moderate-severe nonproliferative. | **[CONSENSUS, Grade E throughout]** | MD:664–685; PDF~p.11 |

**Flag for Codex:** the entire quantitative risk-magnitude evidence (76% increased risk, ln(OR) 0.77, 27% reduction) is **T2D-derived and must not be presented as T1D risk estimates**; the only T1D-specific study found *no* case-control difference. The retinal-exam schedule itself is Grade E consensus, not derived from a T1D retinopathy-surveillance RCT.

---

## 6. Lean Mass, Nutrition, Eating Disorders and Insulin Omission

| Finding | Evidence class | Locator |
|---|---|---|
| T2D data (background/extrapolated): 20–40% of total GLP-1/GIP RA-induced weight loss is lean mass, comparable to or greater than diet-alone weight loss; relative lean mass and muscle quality may still improve. | **[OBSERVATIONAL/meta-analytic]**, **T2D**, explicitly framed as background | MD:689; PDF~p.11–12; refs 116–120 |
| **T1D-specific RCTs are small and conflicting:** a 6-month liraglutide RCT (n=64, overweight/obese T1D adults) found significant fat-mass loss but **no significant lean-mass change** vs. placebo. A second 6-month liraglutide study (n=44) found **significantly reduced lean mass** vs. placebo (P<0.001) alongside fat mass. | **[RCT]** × 2, small, **directly conflicting on the lean-mass endpoint** | MD:695; PDF~p.12; refs 121–122 |
| Mitigation: resistance training + adequate protein intake attenuates strength/performance loss (T2D-derived evidence, ref 117,123, extrapolated); investigational bimagrumab + semaglutide (72 wk) preserved lean mass while losing weight — **not T1D-specific, investigational, not an approved/available option.** | **[RCT]** (bimagrumab study), **not T1D population** | MD:695; PDF~p.12; refs 116–127 |
| Diabulimia: acknowledged in ~10% of people with T1D generally (not specific to GLP-1/GIP RA use), associated with missed/reduced insulin and higher HbA1c. Because GLP-1/GIP RA initiation *requires* careful insulin-dose reduction, the consensus recommends **assessing for diabulimia concerns using the Eating Disorder Examination Questionnaire** when indicated, and assessing diet quality within the first month of initiation. Multivitamin supplementation recommended when intake is reduced. | **[CONSENSUS]**, diabulimia prevalence figure is background epidemiology (not this paper's own data) | MD:701; PDF~p.12; refs 130–133 |
| Recommendation (**Grade C**): educate on signs/symptoms of muscle loss/frailty; assess sarcopenia symptoms at every visit; recommend resistance training/protein intake. Explicit caveat restated in the recommendation itself: **"Muscle loss can happen with weight loss with or without GLP-1/GIP RA treatment"** — i.e., the source itself cautions against over-attributing sarcopenia risk to the drug class specifically. | **[CONSENSUS, Grade C]** | MD:742; PDF~p.13 |

**Gap flag — insulin omission as a distinct mechanism:** the source discusses diabulimia (deliberate insulin restriction for weight control) and separately discusses GI-AE-driven inadvertent under-dosing (§2.2 above, refs 82–84) but does **not** explicitly discuss whether GLP-1/GIP RA-associated appetite suppression could itself normalize or mask compensatory eating-disorder behaviors, nor does it provide a T1D-specific validated screening cadence beyond "consider ... within the first month." Clinicians should not read the EDE-Q mention as a mandated universal screening protocol — it is conditional ("any concerns ... can be assessed using").

**Gap flag — older/frail adults:** the source has **no dedicated section or age-stratified guidance for older/frail T1D adults** on GLP-1/GIP RA. The only content that touches frailty is the general lean-mass/sarcopenia material above, which is itself predominantly T2D/general-population-derived (see refs 110–127) and not age-stratified. There is no T1D-specific discussion of hypoglycemia-unawareness risk in older adults, polypharmacy interactions beyond levothyroxine/oral contraceptives (§8), or deprescribing/appetite-loss-driven frailty risk specific to advanced age. **This is an evidence gap in the source, not a gap in this memo** — flag explicitly in REPORT_ZH_TW.md rather than filling it with outside inference.

---

## 7. Oral Contraception and Levothyroxine (Drug–Drug Interactions)

| Finding | Evidence class | Locator |
|---|---|---|
| FDA draft guidance (cited, not primary data) on peptide-drug metabolism/DDI assessment; "no clinically relevant DDIs involving metabolic enzymes or transporters have been reported" for GLP-1/GIP RA generally, but **mechanism-based DDIs via delayed gastric emptying** are possible. | **[CONSENSUS]** citing regulatory guidance | MD:705; PDF~p.12; refs 134–135 |
| **Tirzepatide + oral contraceptive:** a single 5 mg tirzepatide dose decreased ethinylestradiol **Cmax by 59%** and **AUC by 21%**. "Clinical implications ... warrant further investigation" (i.e., the source does **not** claim contraceptive failure has been demonstrated, only reduced exposure). | **[OBSERVATIONAL/PK study]** (design not further specified in-text) | MD:707; PDF~p.12; ref 136 |
| **Oral semaglutide + levothyroxine:** levothyroxine showed a **delayed time to maximum concentration** after oral semaglutide co-administration — flagged as "potential clinical relevance" because levothyroxine is a **narrow-therapeutic-index drug**. Close monitoring recommended when oral drugs are co-administered with GLP-1/GIP RA generally. | **[OBSERVATIONAL/PK study]** | MD:707; PDF~p.12; refs 135,137 |
| Recommendation (**Grade C**): educate on adverse interactions with concomitant oral medications "such as levothyroxine and contraceptive pills, including those not specific to diabetes"; assess potential/suspected contraindications at every visit. | **[CONSENSUS, Grade C]** | MD:744; PDF~p.13 |

**Clinical-boundary note (per BRIEF.md non-negotiables):** effective birth control is recommended for anyone of childbearing potential on GLP-1/GIP RA (§8 below); given the ethinylestradiol exposure reduction above, prescribers should not assume oral contraceptive efficacy is unaffected — the source stops short of a specific recommendation (e.g., barrier back-up) but the exposure-reduction data plus the general contraception recommendation together imply added caution, which is my inference for clinical framing, **clearly separated here from the source's own (silent-on-this-point) text.**

---

## 8. Pregnancy and Prepregnancy Planning

| Finding | Evidence class | Locator |
|---|---|---|
| "Effective birth control is recommended for individuals of childbearing potential when treated with GLP-1 and GLP-1/GIP RA." Potential benefit pathway (lower glucose/BMI, higher TIR) for obesity- and diabetes-related adverse pregnancy outcomes is plausible but **not established**. "Small studies have suggested ... exposure in early pregnancy may not significantly increase adverse outcomes" — **however, the safety of GLP-1/GIP RA during pregnancy has not been established**, and **"the use of these agents during pregnancy is contraindicated at present."** | **[CONSENSUS]**; small-study reassurance is **[OBSERVATIONAL]**, not detailed further (n, design not given in-text) | MD:711; PDF~p.12; refs 138–141 |
| Retrospective cohort, 448 singleton pregnancies with GLP-1/GIP RA exposure in the 3 years before/90 days after conception vs. 1344 unexposed: 84% of exposed had obesity, 23% pre-existing diabetes (**not T1D-specific — mixed population, proportion with T1D not stated**). Prepregnancy/early-pregnancy **discontinuation** was associated with **more gestational weight gain and higher risk of adverse outcomes** (preterm delivery, hypertensive disorders of pregnancy) — i.e., this finding is about the *consequences of stopping*, not a safety signal for continued use, and should not be misread as evidence favoring continuation through pregnancy. | **[OBSERVATIONAL]**, mixed T1D/T2D/obesity population | MD:713; PDF~p.12–13; ref 142 |
| Four explicit unmet research needs stated by the source: (1) optimal prepregnancy discontinuation timing; (2) mitigating post-discontinuation gestational weight gain; (3) whether T2D/GDM-obesity pregnancy data can be safely extrapolated to T1D; (4) whether preconception weight loss increases fertility in T1D as it does in non-diabetic obesity. | **[CONSENSUS]** (explicitly framed as research gaps, not answered) | MD:715–720; PDF~p.13; refs 143–144 |
| Recommendation (**Grade C**): "Women with T1D must be advised to stop GLP-1 and GLP1/GIP RA therapy when actively trying to conceive or if pregnancy is confirmed." Graphical abstract states the same idea more categorically: "GLP/GIP-1RA should be discontinued before or during pregnancy." | **[CONSENSUS, Grade C]** | MD:736 (rec.); MD:149 (graphical abstract); PDF~p.1, ~p.13 |

**T1D-specific vs. extrapolated:** the only pregnancy outcome data cited (448 vs. 1344 cohort) is **not T1D-specific** (84% obesity, only 23% pre-existing diabetes of any type) — this must be labeled as extrapolated/mixed-population evidence in REPORT_ZH_TW.md, not presented as T1D pregnancy safety data. The source itself flags this as unmet research need #3.

---

## 9. Pediatric and Young-Adult Evidence

| Finding | Evidence class | Locator |
|---|---|---|
| "Current evidence regarding the use of GLP-1 and GLP-1/GIP RAs in children and adolescents with T1D is relatively sparse." Early-generation exenatide trials "support the beneficial impact ... in the pediatric population" (background, not detailed). | **[CONSENSUS]** framing; underlying exenatide trial **[RCT?]** not detailed in-text | MD:452, MD:454; PDF~p.6; refs 58 |
| Case series, single center, **n=8** adolescents/young adults (semaglutide or tirzepatide): general trend of weight reduction, decreased TDD insulin, glycemic improvement, tolerability. | **[OBSERVATIONAL]**, case series, n=8 | MD:454; PDF~p.6; ref 59 |
| Retrospective, **n=33** youth/young adults (mean age 17.6y): HbA1c −0.32%, BMI −2.2 kg/m², TIR +11.7%, TDD −14.6 U/day at 12 months. | **[OBSERVATIONAL]**, retrospective, n=33 | MD:454; PDF~p.6; ref 60 |
| Retrospective, **n=24** youth on insulin pump (same cohort as Table 1's "Gonzalez" row): BMI −3.7 kg/m², TIR +8.0%, TDD −21.4 U/day at 12 months; HbA1c −0.8% at 16 months. | **[OBSERVATIONAL]**, retrospective, n=24 | MD:454; PDF~p.6; ref 42 |
| Pediatric insulin-dose-reduction magnitude: "~20%" TDD reduction (vs. 25–35% in adults) — smaller effect size in youth than adults per the limited data available. | **[OBSERVATIONAL]**, small samples | MD:474; PDF~p.7; refs 42,58 |
| Recommendation: "Consider GLP-1 RA therapy (semaglutide) for adolescents and young adults with T1D and overweight/obesity not achieving glycemic targets on insulin therapy alone" — **Grade C**; for those already at glycemic target, "(E)" (weakest grade). | **[CONSENSUS, Grade C/E]** | MD:596; PDF~p.7 |
| Tirzepatide/dual-agonist pediatric data: **not reported anywhere in this document** — all pediatric-specific outcome data above are semaglutide/GLP-1-RA-only (or unspecified older agents); no pediatric tirzepatide study is cited. | **[UNKNOWN / absent from source]** | (absence noted across MD:452–474, MD:596) |

**Explicit gap for Codex:** there are **zero pediatric RCTs** of weekly GLP-1 or GLP-1/GIP RA in T1D in this document — every pediatric data point is observational (case series or retrospective cohort), n≤33, single- or few-center. The Grade-C recommendation for adolescents is therefore a **consensus/expert-opinion grade resting on observational evidence only**, not on RCT data, and REPORT_ZH_TW.md should not imply RCT-level support for pediatric use. This is consistent with BRIEF.md's instruction to separate direct T1D evidence from extrapolation — here the pediatric evidence is direct-T1D but very low quality (small n, retrospective, no control arms in 2 of 3 studies as described).

---

## 10. CKD / Diabetic Kidney Disease (DKD)

| Finding | Evidence class | Locator |
|---|---|---|
| Target-trial-emulation (n=174,678 people with T1D; 14,218 GLP-1 RA users analyzed for renal endpoint) vs. propensity-matched nonusers: 5-year ESKD rate reduction 19% (HR 0.81, 95% CI 0.69–0.95). This is the **C-03 ledger conflict** — observational/target-trial-emulation, not an RCT, and per my exchange with `t1d-adult-r1` (§7 below), that session's memo has now been updated to explicitly name confounding-by-indication/healthy-user bias rather than only citing the source's generic "selection bias" language. | **[OBSERVATIONAL]** (target-trial-emulation) | MD:446; PDF~p.6; ref 57 |
| DKD as a titration-caution flag: "A longer titration period may be needed in younger individuals with T1D, those with lower BMI, and **those with diabetic kidney disease (DKD)**" — embedded in GI-AE narrative, no dedicated DKD dosing algorithm (e.g., no eGFR-banded dose caps are given anywhere in the document, unlike the HbA1c/TIR-banded Table 2 for insulin). | **[CONSENSUS]**, ungraded narrative statement, no citation attached to the DKD clause specifically | MD:632; PDF~p.10 |
| Recommendation (**Grade A**, within the broader insulin-reassessment bullet): "Monitoring of blood pressure, lipid profiles, **estimated glomerular filtration rate, and albumin–creatinine ratios** are advised as standard" at every clinical encounter. | **[CONSENSUS, Grade A]** — note this is a general monitoring-panel bullet, not a T1D+CKD-specific GLP-1 dosing recommendation | MD:612; PDF~p.9 |

**Gap flag:** the document provides **no T1D-specific renal-dose-adjustment guidance** (no eGFR thresholds for starting/avoiding/reducing GLP-1 or GIP RA dose in T1D+CKD), despite CKD being 3–5× more prevalent in T1D than the general population (MD:67, ref 9, background epidemiology). The only renal-outcome "benefit" data (19% ESKD reduction) is observational and should not be read as license to under-monitor renal function; the Grade-A monitoring bullet is the operative safety instruction, not the ESKD-reduction statistic.

---

## 11. Perioperative and Endoscopy Care (C-02 ledger conflict)

| Finding | Evidence class | Locator |
|---|---|---|
| **Graphical abstract (page 1) states categorically:** "For pre-planned surgery: Recommend to stop GLP/GIP-1RA for at least 1 week. For upper endoscopy, **no change** in GLP/GIP1-RA needed." | **[CONSENSUS]** — visual summary box, no citation | MD:149; PDF~p.1 |
| **Body text directly contradicts the "no change for endoscopy" claim.** OCULUS RCT (n=60 adults on stable-dose GLP-1/GIP RA scheduled for endoscopy): those who **paused** therapy for one dose pre-procedure (n=32) had inadequate visualization due to residual gastric volume (RGV) in **3.1%** of cases; those who **continued** therapy (n=28) had inadequate visualization in **25%** of cases (P=0.0029). The study also found withholding GLP-1/GIP RA for **up to 13 days did not increase other AEs.** Clear liquids the day before may mitigate RGV regardless of continuation status. An OCULUS 2 RCT (colonoscopy bowel-prep quality) is ongoing. | **[RCT]** | MD:728; PDF~p.13; refs 145–150 |
| Broader perioperative literature: rare case reports of aspiration on semaglutide despite standard fasting; higher preprocedure gastric volumes reported in GLP-1/GIP RA users generally — "these associations do not confirm increased rates of perioperative AEs in larger cohorts." Expert-society guidance (not this consensus group specifically) suggests individualized withholding of ~24h (daily formulations) to ~1 week (weekly formulations), with the **optimal interval not definitively established**; some patients have elevated residuals even after extended discontinuation. Point-of-care gastric ultrasound may help risk-stratify. | **[OBSERVATIONAL]** (case reports, cohort associations) + **[CONSENSUS]** (other societies' guidance, cited secondhand) | MD:730; PDF~p.13; refs 145–152 |
| "For people with T1D, surgical planning must balance aspiration risk with glycemic management ... **To date, no studies have specifically assessed perioperative outcomes or defined optimal management strategies in people with T1D** using GLP-1/GIP RA." | **[UNKNOWN / explicit evidence gap, stated by the source itself]** | MD:732; PDF~p.13 |
| Graded Recommendations (all in the T1D-specific Recommendations block): individualized shared decision-making among patient, proceduralist, endocrinologist, anesthesiologist regarding stop-vs-continue (**Grade E**, i.e., **no specific duration is graded** — contrast with the graphical abstract's specific "1 week" figure); clear liquid diet 24h pre-procedure + more-intensive glycemic monitoring/insulin adjustment if suspending (**Grade B**). | **[CONSENSUS, Grade E/B]** | MD:738, MD:740; PDF~p.13 |

**Flag for Codex (C-02, confirmed and detailed for the final report):** the document has a genuine internal inconsistency between (a) the graphical abstract's simple, quantified rule ("1 week for surgery, no change for endoscopy") and (b) the body text and graded recommendations, which (i) present the *opposite* endoscopy finding — continuing therapy produced *worse*, not equivalent, endoscopic visualization in the only cited RCT — and (ii) deliberately avoid specifying a fixed stop duration, opting for individualized shared decision-making (Grade E) instead. **REPORT_ZH_TW.md should follow the body text and graded recommendations (individualized decision-making, informed by the OCULUS RCT's directional finding that continuation worsens visualization) and should not repeat the graphical abstract's "no change needed for endoscopy" line as if it were the consensus's operative recommendation** — it is not supported by, and is contradicted by, the RCT evidence in the same document. There is also **no T1D-specific perioperative outcomes evidence at all** — the source says so explicitly (MD:732) — so any perioperative glycemic-management specifics in REPORT_ZH_TW.md should be labeled as general (non-T1D-derived) perioperative diabetes principles, not consensus-group findings.

---

## 12. Off-Label / Regulatory Status (cross-cutting, feeds BRIEF.md non-negotiable boundary)

- No GLP-1 or GLP-1/GIP RA has regulatory approval for a T1D indication anywhere per this document; approvals exist only for T2D, obesity, sleep apnea, and MASH with moderate-advanced fibrosis (MD:19, PDF~p.1, Abstract). Off-label T1D use proceeds via the obesity/overweight indication pathway (MD:159, 227). Two ongoing phase III RCTs, **SURPASS-T1D-1 and SURPASS-T1D-2** (tirzepatide, primary endpoint HbA1c at 40 weeks), are the first dedicated T1D registration-intent trials named in the document (MD:776, MD:800; PDF~p.14–15, refs 162–163) — **[RCT, ongoing/not yet reported]**.
- Compounded GLP-1/GIP RA products (used during supply shortages) are explicitly flagged as **not identical to approved products** and "associated with clinically important dosing errors and AEs" — a safety-relevant access issue (MD:770; PDF~p.14; refs 158–159). **[OBSERVATIONAL/regulatory reporting, not detailed further in-text]**.
- Date/jurisdiction limits: the document is US/Europe/global-panel-centric and does not tabulate jurisdiction-by-jurisdiction regulatory status; REPORT_ZH_TW.md should state the off-label status "as of this consensus's literature cutoff, February 9, 2026" (MD:842, search-strategy section) and note jurisdiction-specific status (e.g., Taiwan TFDA) is **not addressed by this source** and would need a separate, explicitly dated regulatory check if included.

---

## 13. Peer Challenge Log (BRIEF.md required peer-challenge step)

**Outbound (this session → t1d-adult-r1), sent via SendMessage:**
1. Confirmed 3-way convergence with `t1d-adult-r1` and `t1d-method-r1` on **C-01**: ketone-check threshold is 200 mg/dL (11.1 mmol/L); the Grade-B recommendation's "13.9 mmol/L" is a probable erratum (≈250 mg/dL, likely misplaced from the adjacent euglycemic-ketosis clause), to be disclosed, not silently resolved.
2. New evidence challenge on **C-03**, directed at `ADULT_ENDOCRINE.md`'s cardiorenal/mortality benefit claims (TriNetX cohort, ref 56; target-trial-emulation, ref 57 — 15% MACE and 19% ESKD relative risk reductions): asked whether that memo (a) grades this evidence as OBSERVATIONAL/target-trial-emulation, never RCT-tier or causally confirmed, and (b) explicitly names confounding-by-indication / healthy-user-and-prescriber-selection bias (not just the source's generic "potential selection biases" phrase) as a limitation.

**Inbound response (received, not DELIVERY_UNKNOWN):** `t1d-adult-r1` replied confirming:
- C-01: 3/3 convergence, resolution adopted as above.
- C-03: their §2.3 already tagged both the TriNetX cohort and the target-trial-emulation as `[OBSERVATIONAL]`, quoted the source's own CV/kidney-outcome-RCT-exclusion and selection-bias limitation language, and used only associative (HR + 95% CI) phrasing — never RCT-tier or causal-confirmed language. On my specific gap (b), they acknowledged it as a real gap and **added an explicit paragraph naming confounding-by-indication and healthy-user/prescriber-selection bias**, restating that the 15%/19% figures should read as treatment-associated signals, not established causal effects — fixed in `ADULT_ENDOCRINE.md` §2.3 before their reply. No pushback on either point from their side; both closed.

**Status:** peer challenge **completed with response** (not DELIVERY_UNKNOWN). Transport (`SendMessage`/`ListAgents`) was available and worked in both directions throughout this session, even while the filesystem for this repo was inaccessible (see blocker note at top) — the two problems are unrelated.

**Inbound challenge received from `t1d-adult-r1` (unprompted, arrived before my own outbound message):** the C-01 threshold question above was originally raised *to* this session by `t1d-adult-r1`, who had already converged with `t1d-method-r1`. I confirmed as the third independent check rather than simply deferring to the stated convergence, and verified the arithmetic myself (200 mg/dL × 0.0555 = 11.1 mmol/L; 250 mg/dL × 0.0555 = 13.875 ≈ 13.9 mmol/L) before agreeing.

---

## 14. Summary Table — Evidence-Class Distribution Across This Memo's Topics

| Topic | Best available T1D evidence tier | Any T2D/mixed-population extrapolation used? |
|---|---|---|
| Hypoglycemia | RCT (ADJUNCT I/II, ADJUST-T1D) + observational (Table 1, real-world) | No |
| Ketosis/euglycemic DKA | RCT (crossover study) + case reports + observational | No |
| Hydration/sick-day | Consensus/expert only | No |
| GI intolerance/gastroparesis | RCT (ADJUNCT I/II, ADJUST-T1D, crossover) | Minor (rate-comparison statement only) |
| Retinopathy | Observational, single T1D study (n=106 vs 85) — **no T1D RCT** | **Yes, heavily** (SUSTAIN-6, CVOT pooled analysis, tirzepatide cohort are all T2D) |
| Lean mass/nutrition | RCT ×2 (T1D, small, conflicting) | Yes (T2D meta-analytic background, bimagrumab study) |
| Eating disorders/insulin omission | Consensus + background epidemiology | No |
| Oral contraceptive/levothyroxine DDI | Observational/PK study | No (but general DDI framing from FDA peptide-drug guidance) |
| Pregnancy | Consensus + 1 observational cohort | **Yes** (448/1344 cohort is 84% obesity, only 23% any pre-existing diabetes) |
| Pediatric/young adult | Observational only (n≤33, no RCTs) | No (but evidence is very low quality) |
| CKD/DKD | Observational (target-trial-emulation) for outcomes; no dosing RCT | No |
| Perioperative/endoscopy | RCT (OCULUS, n=60) — **but not T1D-specific**; **zero T1D perioperative studies exist** (source's own admission) | **Yes** (OCULUS enrolled "adults," not specified as T1D; broader perioperative guidance is general, non-diabetes-specific) |

**End of memo content.** Locators above are keyed to the parsed-Markdown line numbers as read during this session (pre-blocker); if the canonical MD is re-parsed and line numbers shift, PDF page (`PDF~p.N`) is the more durable cross-check.
