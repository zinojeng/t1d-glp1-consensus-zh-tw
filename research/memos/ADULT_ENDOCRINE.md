# 成人臨床 Memo：T1D 中 GLP-1／GLP-1–GIP RA 輔助治療

- **Role**: Adult endocrinology and clinical implementation (`t1d-adult-r1`)
- **Run**: T1D-GLP1-20260914-R1
- **Base commit verified**: `9b81a74e0f63c6694e8f9dd5a367aeb9557b61b2`（與 `run/BRIEF.md` 記載一致；worktree `worktree-t1d-adult-memo` 亦鎖在此 commit）
- **Source verification**: PDF 與 Markdown 之 SHA-256 皆與 `run/BRIEF.md` 逐字元相符
  - PDF `93d4670396159934c2c509aef1ca88de06f28dd9f1e3bb7c1751904b51c42352`
  - MD `3394682fe6401f7deae02a1a66ae94388b5e29b8848ab924855b699790ae6aad`
- **Locator convention**: `[MD line N]` 指向 parent directory 中已解析之 Markdown 檔（`garg-et-al-2026-adjunctive-treatment-with-glp-1-and-dual-glp-1-gip-receptor-agonists-for-people-with-type-1-diabetes.md`），該檔為單一連續文字流（非分頁），故以行號取代頁碼；文中另附印刷頁碼（如「p.8」）以利與 PDF 對照。證據分級標記：`[RCT]` `[OBSERVATIONAL]` `[CONSENSUS]` `[UNKNOWN]`。共識報告內建之 A/B/C/E 建議等級（下稱「Grade」）**不等於**獨立 GRADE 評估，僅代表本共識小組自訂等級，故一律另加證據類別標記，不可互相取代。

---

## 1. 候選人選（Candidate selection）

- 啟動門檻（成人）：BMI ≥30 kg/m²（無體重相關共病）；或 BMI ≥27 kg/m² 併至少一項體重相關共病（高血壓、血脂異常、阻塞性睡眠呼吸中止、心血管疾病）。`[MD line 458]` `[CONSENSUS]`
- 特例：持續高血糖、雖規律使用密集胰島素治療仍未達 HbA1c 目標者，即使 BMI <27 kg/m²，亦可考慮啟動 GLP-1/GIP RA，以求 HbA1c 下降且不增加低血糖風險。`[MD line 458]` `[CONSENSUS]`
- 治療目標與再評估：BMI 累積下降 ≥10% 且達成議定 HbA1c 目標可作為檢討時機；BMI 降至 <25 kg/m²，或起始 BMI 本已 ≤25 kg/m²（因血糖管理適應症用藥）者，須定期重新評估，考慮調整劑量或暫停治療。`[MD line 464]` `[CONSENSUS]`
- **重要區分（brief 明定必須釐清）**：本共識中，成人 T1D 啟動 GLP-1/GIP RA 之依循原則，是「借用」肥胖／體重管理的處方原則（"align with established prescribing principles"），**而非** T1D 本身已取得該項核准適應症。原文明白指出：「Regulatory approval for use of weekly GLP-1 and GLP-1/GIP RAs in type 1 diabetes (T1D) has not yet been achieved」`[MD line 61]`，且「access to these drugs is already possible, based on their use to treat overweight and obesity」`[MD line 61]`。亦即：**肥胖適應症可以合法地讓 T1D 病人取得藥物，但這不構成 T1D 治療的法規適應症**（對應 Ledger C-04）。`[CONSENSUS]`
- 青少年／年輕成人（本 memo 之附帶關注，非主要角色）：semaglutide 可考慮用於體重過重／肥胖且胰島素治療未達標之青少年與年輕成人（Grade C），以及已達標但仍過重／肥胖者（Grade E）。`[MD line 596]` `[CONSENSUS]`

## 2. Semaglutide vs. tirzepatide：證據與預期結果

### 2.1 長期（≥12 個月）成人資料（Table 1，8 篇觀察性研究）`[OBSERVATIONAL]`

`[MD line 235]`–`[MD line 442]`（印刷 p.5–6，TABLE 1）：

| 研究（文獻編號） | 設計 | 藥物 | 追蹤（月） | n | 基礎 HbA1c | HbA1c 變化 | 體重變化 |
|---|---|---|---|---|---|---|---|
| Garg<sup>41</sup> | 回溯世代 | Tirzepatide | 21 | 84 | 7.0±0.9% | −0.50±0.07%（P=0.017） | −23.4%（P<0.001） |
| Gonzalez<sup>42</sup> | 回溯世代 | Sema/Dula/Lira | 16 | 24（21用sema） | 8.3±1.5% | −0.81%（−0.04, −1.58）（P=0.04） | −7.6%（P=0.02） |
| Snell-Bergeon<sup>22</sup> | 回溯世代 | Tirzepatide | 12 | 50 | 7.0±0.2% | −0.68±SE0.14%（P<0.05） | −21.4%（P<0.001） |
| Al Ozairi<sup>43</sup>（3組） | 真實世界 | Sema/Tirz/Sema | 12 | 50/35/36 | 7.6–8.3% | −0.33至−0.65% | −9.1至−11.1% |
| Garg<sup>44</sup> | 回溯世代 | Semaglutide | 12 | 50 | 7.6±1.2% | −0.7±0.2%（P<0.05） | −7.6%（P<0.05） |
| Mertens<sup>45</sup> | 真實世界 | Semaglutide | 12 | 42 | 7.4±0.8% | −0.4±0.6%（P<0.001） | −13.3%（P<0.001） |
| Al Hayek<sup>46</sup> | 真實世界 | Semaglutide | 24 | 67 | 8.2±0.5% | −1.1±0.4%（P<0.001） | −16.3%（P<0.001） |
| Almohareb<sup>47</sup> | 回溯病歷回顧 | Sema/Lira | 18 | 141（92sema/49lira） | 8.6±1.4% | −0.5±0.8%（P<0.001） | −4.5%（P<0.001） |

- Baseline 特徵範圍：平均年齡 16–46 歲、體重 85–104 kg、BMI 32–36 kg/m²、HbA1c 7.0–8.6%（53–71 mmol/mol）。`[MD line 235]` `[OBSERVATIONAL]`
- 追蹤 >1 年之三篇（16、18、21 個月）：HbA1c 由基礎下降 −0.4% 至 −0.8%。`[MD line 442]` `[OBSERVATIONAL]`
- TIR（70–180 mg/dL）變化見於 5 篇研究，範圍 +4.5% 至 +25%，換算每日額外 65–360 分鐘在目標範圍內。`[MD line 442]` `[OBSERVATIONAL]`
- 體重減輕幅度依藥物而異：**tirzepatide 之減重幅度大於 semaglutide**（Table 1 一致趨勢）。`[MD line 442]` `[OBSERVATIONAL]`
- 補充表 S1（18 篇，非血糖終點，本地檔未含表格內容，僅正文摘要）：semaglutide 減重約 9%；tirzepatide 減重 10%–23%。`[MD line 444]` `[OBSERVATIONAL]`。Tirzepatide 亦與血壓、血脂改善相關；semaglutide 同樣有血壓與血脂改善報告。`[MD line 444]` `[OBSERVATIONAL]`
- 胰島素總每日劑量（TDD）：tirzepatide 可降低 TDD 達 30%；semaglutide 亦有降低但**並非所有研究皆一致顯著**（3 篇未見顯著變化）。`[MD line 444]` `[OBSERVATIONAL]`
- **無頭對頭 RCT**：文中明確聲明「Although no head-to-head clinical trials have compared tirzepatide and semaglutide in individuals with T1D」，現有研究一致顯示 tirzepatide 胰島素劑量下降幅度較大，部分歸因於較大減重幅度與 GIP 作用。`[MD line 574]` `[UNKNOWN]`（比較優劣本身缺乏頭對頭 RCT 佐證，僅為跨研究間接比較）

### 2.2 關鍵 RCT 證據（成人）`[RCT]`

- **ADJUNCT ONE**（liraglutide，每日一次，非週製劑）：1398 位成人 T1D，treat-to-target 設計；最高劑量 1.8 mg 組 68.3% 出現 GI 事件、最低劑量 0.6 mg 組 50%，對照安慰劑組 33.3%。`[MD line 626]` `[RCT]`（doi: 10.2337/dc16-0691）
- **ADJUNCT TWO**（liraglutide，胰島素採「封頂」設計，限制胰島素調整）：835 位成人；噁心發生率最高劑量組 49.5%、最低劑量組 32.2%，對照組 16.5%；嘔吐 17.0%／9.0% vs. 3.9%。`[MD line 626]` `[RCT]`（doi: 10.2337/dc16-0690）
  - **方法學重要警語**（本文明白指出，應與 t1d-method 交叉核對）：ADJUNCT ONE 為 treat-to-target 胰島素設計，ADJUNCT TWO 則對胰島素設「封頂」限制調整，兩者設計差異可能影響低血糖風險判讀，**不應直接外推至週製劑（semaglutide／tirzepatide）之風險**。`[MD line 476]` `[CONSENSUS]`
- **ADJUST-T1D**（semaglutide，週製劑，隨機對照）：72 位成人 T1D、BMI ≥30 kg/m²，1:1 隨機分配每週 semaglutide（最高 1 mg）vs. 安慰劑，併用 AID。GI AE 發生率 53%（semaglutide）vs. 25%（對照）；因 GI AE 停藥率 5.5%。`[MD line 628]` `[RCT]`（doi: 10.1056/evidoa2500173）
- **交叉試驗（crossover RCT）**：28 位成人 T1D，semaglutide vs. 安慰劑；GI AE 82%（semaglutide 期）vs. 25%（安慰劑期）。事後質性訪談（n=23）指出噁心與嘔吐恐懼會干擾正餐前碳水化合物估計與追加劑量（bolus）判斷。`[MD line 628]` `[RCT]`（doi: 10.1038/s41591-024-03463-z）；本研究中 2/28 參與者於 semaglutide 期發生無酸中毒之反覆糖化正常酮症（euglycemic ketosis without acidosis）。`[MD line 630]` `[RCT]`
- **Snaith 等，Tirzepatide phase 2 RCT（安慰劑對照）**（doi: 10.2337/dc25-2379）：列於參考文獻 52，本地 MD 正文未見具體數據引用段落，僅見於安全性彙總句「Real-world studies with semaglutide or tirzepatide have not shown a significant risk for hypoglycemia or hyperglycemia/ketosis.<sup>21–23,41,42,44,48,52,66,67</sup>」`[MD line 476]`——**注意**：此句將 ref 52（RCT）與多篇觀察性研究並列引用，但未拆分陳述 RCT 與觀察性資料的個別發現，屬於證據等級混同的表達方式，讀者應自行對應原始文獻拆分解讀。`[RCT/OBSERVATIONAL 混合引用，需澄清]`

### 2.3 心腎與死亡率的長期效益：務必區分證據等級（對應 Ledger C-03）

- 一篇 2026 真實世界研究（TriNetX 資料庫）：短期 2 年追蹤，T1D 使用 GLP-1/GLP-1-GIP RA 者，全因住院與全因死亡率顯著下降，急診就診減少 44%，且未增加低血糖或 DKA 相關就診。`[MD line 446]` `[OBSERVATIONAL]`（doi: 10.1177/15209156251403555）
- 一篇 target trial emulation（目標試驗模擬，觀察性資料模仿 RCT 設計）：174,678 位 T1D 病人；11,648 位 GLP-1 RA 使用者之主要不良心血管事件（MACE）5 年 HR = 0.85（95% CI 0.77–0.95），相對風險降低 15%；14,218 位使用者之末期腎病 5 年發生率 HR = 0.81（95% CI 0.69–0.95），相對降低 19%。未觀察到 DKA 或嚴重低血糖住院增加。`[MD line 446]` `[OBSERVATIONAL]`（target trial emulation，非 RCT；doi: 10.1038/s41591-026-04274-0）
- **共識報告本身之限制聲明（應完整引用，勿刪減）**：「Although cardiovascular and kidney outcomes trials of GLP-1 and GLP-1/GIP RAs have excluded people with T1D」`[MD line 446]`；且「Of note, the majority of studies included were retrospective and observational in nature, study designs that have many limitations including potential selection biases and under reporting of safety outcomes.」`[MD line 450]`。**結論**：T1D 族群中所謂心腎保護／死亡率效益，其證據基礎為觀察性研究與 target trial emulation，**並非**源自 T1D 專屬之心血管或腎臟結果 RCT；此為共識報告作者群自陳之限制，非本 memo 外部推論。`[OBSERVATIONAL]`——**直接支持 Ledger C-03 之判定**。
- **具名偏差機制（本節經 `t1d-safety-r1` 挑戰後補強，原文僅泛稱「potential selection biases」，未展開機制）**：即使 target trial emulation 已採傾向分數配對（propensity-score matched），仍無法排除**適應症混淆（confounding by indication）**與**健康使用者／處方者選擇偏差（healthy-user and prescriber-selection bias）**——在 T1D 屬於仿單標示外使用的脈絡下，被處方 GLP-1／GLP-1-GIP RA 的病人，很可能本身就較健康、社經資源較佳、對自我照護與回診較積極（因為醫師傾向優先開立給這類病人，病人本身也更可能主動要求或負擔得起藥物），這些特質本身即與較低心腎事件風險相關，可能與藥物之因果效應混淆而無法單以傾向分數配對完全校正。因此 15%／19% 之相對風險／發生率降低，**應理解為與治療相關之關聯性訊號，而非已證實之因果治療效果**；本 memo 全文對此僅使用關聯性措辭（如「相對風險降低」「發生率降低」搭配 HR／95% CI），不使用「證實可降低」「已證明保護」等因果斷言，亦不將此段落之證據等級高於 `OBSERVATIONAL`。

### 2.4 兒童與青少年資料（本角色僅摘要，供對照，非主要負責範圍）

- 8 位青少年／年輕成人病例系列（semaglutide 或 tirzepatide）：體重下降、TDD 下降、血糖改善、耐受性尚可。`[MD line 454]` `[OBSERVATIONAL]`（病例系列，證據等級低）
- 33 位青少年／年輕成人（平均 17.6 歲）回溯研究：HbA1c −0.32%、BMI −2.2 kg/m²、TIR +11.7%、TDD −14.6 U/day（12 個月）。`[MD line 454]` `[OBSERVATIONAL]`
- 24 位青少年（胰島素幫浦使用者）回溯研究：BMI −3.7 kg/m²、TIR +8.0%、TDD −21.4 U/day（12 個月）；HbA1c −0.8%（16 個月時點）。`[MD line 454]` `[OBSERVATIONAL]`

## 3. 起始／劑量調整（Initiation/titration）

- 起始原則：低劑量起始，依耐受度逐步上調；多數情況每 4 週可上調一次，部分病人需更慢（每 2–3 個月）。`[MD line 470]` `[MD line 598]` `[CONSENSUS, Grade B]`
- 隨訪頻率：起始及劑量上調期間，建議於 7 天或 14 天（依病人需求）進行遠距或門診追蹤，之後每 4 週一次直到劑量穩定；穩定劑量、不需再上調者，追蹤間隔可延長至每 3 個月一次。`[MD line 470]` `[MD line 610]` `[CONSENSUS, Grade E]`
- 胰島素劑量下降幅度（成人）：起始與上調期間，TDD 下降幅度可達 25%–35%。`[MD line 474]`（兒童青少年約 20%，`[MD line 474]`）`[OBSERVATIONAL]`（引用觀察性研究彙總，非單一 RCT 數字）
- **優先順序（本文明確建議）**：應優先降低 bolus（追加）胰島素劑量，而非 basal（基礎）胰島素；胰島素幫浦/AID 使用者之研究一致顯示 bolus 下降更早且幅度更大。`[MD line 478]` `[CONSENSUS, Grade 未標示於此段，屬機制敘述]`
- MDI 病人建議：提高胰島素–碳水比（ICR）及矯正因子；HbA1c <7.5% 者可較大幅提高 ICR，7.5–8.5% 者中度提高，>8.5% 者不建議調整 ICR。`[MD line 478]` `[CONSENSUS]`
- **Table 2（劑量調整表，需與方法學角色核對換算是否一致）** `[MD line 484]`–`[MD line 568]`（印刷 p.8）：

  | 評估指標 | MDI 基礎 | MDI 追加 | AID 基礎 | AID 追加 |
  |---|---|---|---|---|
  | TIR <50% 且 TBR <4% | 不變 | 不變 | 不變 | 不變 |
  | TIR 50–60% 且 TBR <4% | ↓10% | ↓10% | 不變 | ↓10% |
  | TIR 60–70% 且 TBR <4% | ↓15% | ↓20% | ↓10% | ↓20% |
  | TIR ≥70% 或 TBR ≥4% | ↓20% | ↓25% | ↓15% | ↓25% |
  | HbA1c >8.5%（69 mmol/mol） | 不變 | 不變 | 不變 | 不變 |
  | HbA1c 7.5–8.5%（58–69） | ↓10% | ↓10% | 不變 | ↓10% |
  | HbA1c 7.0–7.5%（53–58） | ↓15% | ↓20% | ↓10% | ↓20% |
  | HbA1c <7.0%（<53） | ↓20% | ↓25% | ↓15% | ↓25% |

  - 本表數值為**共識小組建議之起始下修比例，非病人專屬處方**；文末明言「individual responses differ significantly...each person with T1D should be managed according to the principles of individualized care.」`[MD line 566]` `[CONSENSUS]`——因此本 memo 依 brief 要求，**不將此表格轉譯為通用胰島素處方指示**，僅作為 CGM 導向個人化調整之參考框架呈現。
  - 建議於起始後 2–3 天內評估並調整胰島素劑量，其後定期複評。`[MD line 566]` `[CONSENSUS]`
- CGM／AID 差異：AID 系統中，若 basal 胰島素於閉環模式下自動依 TDD 調整（如 MiniMed 780G、Omnipod 5），須留意「手動模式基礎率」可能高於實際遞送量，於系統跳出自動模式時應重新檢視手動基礎設定以避免低血糖。`[MD line 576]` `[CONSENSUS]`。若 AID 系統將 basal 胰島素作為自動模式運算參數之一（如 Tandem Control-IQ、twiist、CamAPS FX），則除 ICR 調整外，通常仍需額外調整 basal 劑量設定。`[MD line 576]` `[CONSENSUS]`

## 4. CGM 判讀重點（成人臨床操作）

- CGM 為所有 T1D 接受 GLP-1/GIP RA 治療者之**強烈建議**監測工具，須符合最低準確度標準，使劑量調整可單獨依 CGM 數據進行。`[MD line 580]` `[CONSENSUS]`
- 劑量上調期間（通常每 4 週），CGM 應**取代 HbA1c** 作為胰島素調整依據，因其能捕捉每日／每週趨勢。`[MD line 586]` `[CONSENSUS]`
- 常用 CGM 指標：TIR（70–180 mg/dL）、tight TIR（70–140 mg/dL）、TBR（<70 mg/dL 或 <54 mg/dL）。`[MD line 586]` `[CONSENSUS]`
- **酮體監測門檻──發現內部不一致（對應 Ledger C-01，已於文中兩處出現不同數值）**：
  - 正文（CGM 使用段落）：「monitor ketone levels when glucose levels are ≥200 mg/dL (≥11.1 mmol/L) for 2 h or more」`[MD line 580]`（200 mg/dL 正確換算為 11.1 mmol/L）。
  - Recommendations 段落：「Ketone levels should be monitored when glucose levels are ≥200 mg/dL (≥13.9 mmol/L) for 2 h or more. (B)」`[MD line 602]`（此處 200 mg/dL 被誤配對 13.9 mmol/L；13.9 mmol/L 實際對應約 250 mg/dL）。
  - **結論**：兩處門檻文字不一致，屬於原文換算錯誤（很可能是 250 mg/dL 相關敘述——同段稍後另提到 <250 mg/dL 之「euglycemic ketosis」情境`[MD line 602]`——的單位在編修時被誤植於 200 mg/dL 敘述上）。**臨床應用建議**：以 200 mg/dL = 11.1 mmol/L 之正確換算為準（正文版本），並在病人衛教時同時說明「即使血糖 <250 mg/dL（糖化正常酮症）仍應驗酮」之情境`[MD line 602]`，避免因單位誤植而延遲驗酮時機。此為原始文獻之勘誤，非本 memo 之詮釋分歧，已列入 Ledger C-01，待方法學角色／Codex 最終定案時對外揭露此不一致。
- 糖化正常酮症（euglycemic ketosis）：可在血糖無明顯升高時發生`[MD line 580]`；衛教重點需包含噁心、嘔吐、腹痛、不明原因疲倦等症狀，並提醒此類症狀可能與 GLP-1/GIP RA 常見腸胃道副作用重疊，須以驗酮區分。`[MD line 580]` `[CONSENSUS]`
- 建議毛細血酮測試優於尿酮試紙。`[MD line 602]` `[CONSENSUS, Grade E]`

## 5. 隨訪頻率（Follow-up cadence，彙整）

| 階段 | 建議頻率 | Locator | Grade |
|---|---|---|---|
| 起始後早期 | 7 或 14 天（依病人需求），遠距或門診 | `[MD line 470]` | CONSENSUS |
| 劑量上調期 | 每 4 週 | `[MD line 470]` | CONSENSUS |
| 劑量穩定、不需上調 | 每 3 個月 | `[MD line 470]`, `[MD line 610]` | CONSENSUS, Grade E |
| 一般 Recommendations 版本 | 4–8 週間隔（上調期），穩定後每 3 個月或更長 | `[MD line 610]` | CONSENSUS, Grade E |
| 胰島素方案重新評估 | **每次臨床就診**，不論劑量、療程長短或穩定與否 | `[MD line 612]` | CONSENSUS, Grade A |

- 注意：正文敘述（`[MD line 470]`：4 週間隔）與 Recommendations 段落（`[MD line 610]`：4–8 週間隔）在劑量上調期的建議頻率措辭略有差異（4 週 vs. 4–8 週），未達到 Ledger 等級之矛盾，但建議臨床操作時以較保守（4 週，即較密集）的正文版本為預設，8 週為可接受之上限彈性。

## 6. 診間可用之非處方式工作流程（Clinic-ready, non-prescriptive workflow）

以下依共識文字彙整之流程節點，**刻意不附上固定單位劑量**，以符合 brief「避免通用胰島素處方」之邊界：

1. **啟動前評估**：確認 BMI 分類與共病、記錄基礎 BMI/HbA1c/胰島素劑量`[MD line 458]`；篩檢腸胃道症狀（逆流、飽脹、便秘、腹瀉）並於用藥前處理既有腸胃道疾病`[MD line 646]`；評估糖尿病相關眼病風險，必要時 12 個月內完成視網膜檢查`[MD line 666]`；篩檢懷孕計畫並確認有效避孕`[MD line 736]`；提供衛教（低血糖／高血糖／酮症辨識、書面胰島素自我調整指示、Sick-day 規則）`[MD line 600]` `[MD line 604]`。
2. **起始劑量**：低劑量起始，依耐受度逐步上調（4 週或更慢）`[MD line 470]`。
3. **起始後 2–3 天**：依 CGM／症狀評估胰島素需求，**優先下修 bolus** 胰島素`[MD line 478]` `[MD line 566]`；提醒補充水分，預防因噁心／嘔吐／腹瀉導致脫水`[MD line 468]` `[MD line 586]`。
4. **劑量上調期（每 4–8 週追蹤）**：以 CGM 指標（非 HbA1c）為主要胰島素調整依據`[MD line 586]`；每次就診重新評估胰島素方案`[MD line 612]`；監測血壓、血脂、eGFR、UACR`[MD line 612]`。
5. **達標後（BMI 降幅 ≥10% 或達 HbA1c 目標）**：與病人討論是否降階 GLP-1/GIP RA 至最小有效劑量，並持續評估肌少症／體能表現症狀`[MD line 606]` `[MD line 742]`。
6. **任何時間點的不可退讓紅線**：即使達成 HbA1c <7.0% 或更低，**絕對不可完全停用胰島素**`[MD line 614]`；懷孕確認或積極備孕須停用 GLP-1/GIP RA`[MD line 736]`；計畫性手術前建議停藥至少 1 週（依專業團體個別化建議，範圍約 24 小時至 1 週）`[MD line 149]` `[MD line 730]`，但**上消化道內視鏡檢查**依本共識圖像摘要「no change in GLP/GIP1-RA needed」`[MD line 149]`——此點與正文建議之個別化決策及 OCULUS RCT 發現（見下）存在張力，臨床決策應以正文與 RCT 證據為準，而非圖像摘要之簡化敘述（見 §7 矛盾記錄）。

## 7. 內部矛盾與待議事項（本角色新增觀察，補充 Ledger）

### 7.1 確認 Ledger C-01（酮體監測門檻單位錯配）
見 §4，已於正文與 Recommendations 段落分別定位（`[MD line 580]` vs. `[MD line 602]`）。**建議 Codex 最終報告採用 200 mg/dL = 11.1 mmol/L（正確換算），並加註勘誤說明。**

### 7.2 確認並擴充 Ledger C-02（上消化道內視鏡之圖文矛盾）
- 圖像摘要結論（Conclusion 區塊）：「For upper endoscopy, no change in GLP/GIP1-RA needed.」`[MD line 149]`
- 正文 Perioperative Management 段落：「Ahead of planned procedure or surgery, multiple professional societies recommend using an individualized approach, with shared decision making among individuals living with T1D, proceduralists, endocrinologists, and anesthesiologists, to stopping versus continuing GLP-1 and GLP-1/GIP RA.」`[MD line 738]` `[CONSENSUS, Grade E]`——此建議未特別排除上消化道內視鏡，隱含內視鏡亦應個別化決策，與圖像摘要之一律「不需改變」矛盾。
- 直接 RCT 證據（OCULUS trial，60 位穩定劑量成人，doi: 10.1001/jamainternmed.2026.0027）：暫停一劑者（n=32）之殘餘胃內容物體積（RGV）造成視野不足比率為 3.1%；**持續用藥者（n=28）則為 25%（P=0.0029）**`[MD line 728]` `[RCT]`。此為**直接支持暫停用藥可降低內視鏡視野不足風險**之 RCT 結果，與圖像摘要「不需改變」之敘述方向相反。
- **本角色判斷**：圖像摘要之敘述應視為簡化摘要之錯誤或不精確表達，正文＋OCULUS RCT 證據應優先採用於臨床建議（即上消化道內視鏡前仍應個別化評估是否暫停，而非一律不變）。此為 evidence class 由 RCT 而非圖像摘要支持之直接案例，建議 Codex 最終報告以正文與 RCT 為準，並在報告中揭露圖像摘要與正文的不一致，而非隱藏其中之一。

### 7.3 確認 Ledger C-03（心腎／死亡率效益之證據等級）
見 §2.3；已定位具體引用句與作者自陳限制段落，支持「非 T1D 心血管／腎臟結果 RCT」之判定。

### 7.4 確認 Ledger C-04（法規適應症 vs. 取得管道）
見 §1；已定位原文措辭區分「取得管道（via 肥胖適應症）」與「T1D 治療適應症（尚未核准）」。

### 7.5 新增觀察：胰島素劑量上調追蹤頻率之措辭差異
見 §5 表格附註，正文（4 週）與 Recommendations（4–8 週）用詞不完全一致，非 Ledger 既列矛盾，建議一併提報 Codex 判斷是否需要加入 Ledger 或僅在最終報告中以較保守版本呈現。

## 8. 未達成之研究缺口（與本角色相關者摘要）

- 頭對頭 semaglutide vs. tirzepatide 之 RCT：目前不存在，僅有跨研究間接比較。`[MD line 574]` `[UNKNOWN]`
- 長期胰島素降階（down-titration）至最小有效劑量之研究：待進行。`[MD line 450]` `[UNKNOWN]`
- 兩項進行中 3 期 RCT：**SURPASS-T1D-1**（NCT06914895）與**SURPASS-T1D-2**（NCT06962280），均為 tirzepatide vs. 安慰劑，成人 T1D 合併肥胖／過重，主要終點為 40 週 HbA1c 改善。`[MD line 800]` `[MD line 1206]` `[MD line 1208]` `[UNKNOWN／進行中]`——**這將是未來唯一可直接回答成人 T1D 血糖終點之大型 RCT 證據，現階段所有血糖效益數據仍以觀察性研究為主體。**

---

## 9. Peer challenge（必要之跨會話挑戰）

### 9.1 收到之挑戰（Inbound）— 來自 `t1d-method-r1`

- **時序**：本 memo 初稿完成、正要撰寫本節之前，`t1d-method-r1` 主動以 `SendMessage` 傳入跨會話訊息（`from-name="t1d-method-r1"`），要求確認本 memo 是否正確處理 **Ledger C-03**（心腎／死亡率效益之證據等級）與 **Ledger C-01**（酮體監測門檻單位錯配，附帶提醒）。
- **內容摘要**：要求確認 ref[57]（target trial emulation，MACE HR 0.85 [0.77–0.95]；ESRD HR 0.81 [0.69–0.95]）與 ref[56]（TriNetX 回溯世代，44% 急診就診下降）均標記為 `OBSERVATIONAL`、使用關聯性措辭（"associated with"）而非因果／處方式措辭、且不將共識報告之 A/B/C/E 等級誤植為獨立 GRADE 評估；並提醒 C-01 之酮體門檻正文（line 580, 11.1 mmol/L 正確）與 Recommendations（line 602, 13.9 mmol/L 錯誤）不一致，建議採 11.1 mmol/L。
- **本 memo 之回應**：已於 §2.3、§4、§7.1、§7.3 完整處理上述兩點，且獨立得出與對方相同的結論。已以 `SendMessage` 回覆確認、無異議（msg_id `907b034d-ee6f-4612-9ded-c006a2bcef23`，`success:true`）。
- **對方確認**：`t1d-method-r1` 隨後回覆：「Received and recorded your confirmation in METHODOLOGY.md §7 — thanks for the fast turnaround and the independent convergence on the C-01 loci. No outstanding disagreement on C-01 or C-03 from this side. Closing the challenge as resolved.」
- **狀態：已收到、已確認、雙方收斂一致，議題結案（resolved, 2/2 convergence）。**

### 9.2 送出之挑戰（Outbound，符合 BRIEF.md 要求）— 致 `t1d-safety-r1`

- **對象選定理由**：本 memo §4 的酮體監測門檻矛盾（Ledger C-01）直接影響 sick-day／DKA 衛教之安全語言，屬於安全角色 memo 的核心負責範圍（`run/roles/SAFETY_SPECIAL_POPULATIONS.md` 覆蓋 contraindication／ketosis），需要該角色在其安全框架中明確採用哪一個換算數值，避免兩份 memo 對外呈現互相矛盾的病人衛教門檻。
- **挑戰內容（摘要）**：詢問 `SAFETY_SPECIAL_POPULATIONS.md` 對 ketone-check 門檻採用 mg/dL、mmol/L 或兩者並列；若使用 mmol/L，要求確認採 11.1（而非 13.9），並揭露原文（MD line 580 vs. line 602）之內部不一致，而非默默採用其中一個數值；同時告知 `t1d-method-r1` 已獨立提出相同結論，形成 2/2 收斂。
- **送出方式**：`SendMessage`，`to="t1d-safety-r1"`，送出成功（`success:true`，msg_id `1891d2ad-b6ca-428a-ab1a-8367a4ff9192`）。
- **結果記錄**：`t1d-safety-r1` 已回覆確認：其 `SAFETY_SPECIAL_POPULATIONS.md` 將以 200 mg/dL（11.1 mmol/L）為權威門檻，明確標示原文 Recommendations 段落（line ~602）之「13.9 mmol/L」為內部不一致／可能之勘誤（13.9 mmol/L ≈ 250 mg/dL，與同一段落稍後「<250 mg/dL (euglycemic ketosis)」之數字相符，研判為編修時之複製貼上錯置），且**不會**將 13.9 mmol/L 當作刻意設定之較高門檻繼續傳播；兩個原始數字皆會逐字引用並附 locator 供 Codex／審閱者查核。**狀態：已收到回覆，Ledger C-01 達成 3/3 收斂（`t1d-adult-r1`／`t1d-method-r1`／`t1d-safety-r1` 三方一致採用 200 mg/dL = 11.1 mmol/L，並揭露原文勘誤而非隱藏）。議題結案。**

### 9.3 收到之挑戰（Inbound，第二則）— 來自 `t1d-safety-r1`

- **內容摘要**：`t1d-safety-r1` 在回覆 §9.2 的同一則訊息中，依 BRIEF.md 規定之互相挑戰義務，對本 memo §2.3（Ledger C-03，心腎／死亡率效益）提出具體質疑：詢問本 memo 是否 (a) 明確將該證據標記為 `OBSERVATIONAL`（傾向分數配對／target trial emulation），從未描述為 RCT 等級或已證實之因果效應；以及 (b) 是否具名指出**適應症混淆（confounding by indication）**與**健康使用者／處方者選擇偏差（healthy-user and prescriber-selection bias）**為特定限制——即仿單標示外使用 GLP-1 RA 的 T1D 病人，很可能本身較健康、社經資源較佳、自我照護較積極，此點源文僅泛稱「potential selection biases」，未展開機制。
- **本 memo 之檢視結果與回應**：(a) 確認符合——§2.3 三個要點段落皆標記 `[OBSERVATIONAL]`，並列出 95% CI，措辭為關聯性用語（相對風險降低／發生率降低），從未使用因果斷言或將其等同 RCT 證據。(b) **原稿有落差**——原稿僅逐字引用原文「potential selection biases」一詞，未具名展開適應症混淆／健康使用者偏差之機制。**已依此挑戰於 §2.3 新增一段「具名偏差機制」**，明確寫入上述兩種偏差機制與其對 15%／19% 數字之解讀限制。已以 `SendMessage` 回覆 `t1d-safety-r1`，誠實說明 (a) 原本即符合、(b) 為有效落差且已即時修正，並附上修正後段落供其核對。**狀態：已收到、已檢視、發現有效落差並已修正、已回覆。議題結案。**

---

## 附錄：本 memo 引用之關鍵 DOI 對照表

| Ref# | 作者／年 | DOI | Locator（本地 MD 行號） |
|---|---|---|---|
| 21 | Shah et al., NEJM Evid 2025（ADJUST-T1D） | 10.1056/evidoa2500173 | line 628, 912 |
| 22 | Snell-Bergeon et al., DTT 2025 | 10.1089/dia.2024.0328 | line 296, 914 |
| 23 | Garg et al., DTT 2024（Tirzepatide） | 10.1089/dia.2024.0050 | line 916 |
| 41 | Garg et al., DTT 2025（21個月心腎生物標記） | 10.1089/dia.2024.0481 | line 262, 954 |
| 42 | Gonzalez et al., J Pediatr Endocrinol Metab 2026 | 10.1515/jpem-2025-0568 | line 279, 956 |
| 44 | Garg et al., DTT 2024（Semaglutide） | 10.1089/dia.2023.0490 | line 364, 960 |
| 48 | Pasqua et al., Nat Med 2025（crossover RCT） | 10.1038/s41591-024-03463-z | line 628, 968 |
| 52 | Snaith et al., Diabetes Care 2026（Tirzepatide phase 2 RCT） | 10.2337/dc25-2379 | line 976 |
| 56 | Garg et al., DTT 2026（TriNetX，死亡率／住院） | 10.1177/15209156251403555 | line 446, 984 |
| 57 | Xu et al., Nat Med 2026（target trial emulation，心腎） | 10.1038/s41591-026-04274-0 | line 446, 986 |
| 63 | Mathieu et al., Diabetes Care 2016（ADJUNCT ONE） | 10.2337/dc16-0691 | line 626, 1000 |
| 64 | Ahrén et al., Diabetes Care 2016（ADJUNCT TWO） | 10.2337/dc16-0690 | line 626, 1002 |
| 149 | Ahmad et al., JAMA Intern Med 2026（OCULUS RCT） | 10.1001/jamainternmed.2026.0027 | line 728, 1180 |
| 162 | NCT06914895（SURPASS-T1D-1） | clinicaltrials.gov | line 800, 1206 |
| 163 | NCT06962280（SURPASS-T1D-2） | clinicaltrials.gov | line 800, 1208 |

---

**Scope note**: 本 memo 僅由 `t1d-adult-r1` 撰寫並限定於 `research/memos/ADULT_ENDOCRINE.md`，未編輯、提交（commit）或推送（push）任何其他檔案。所有數字、樣本數、追蹤期與統計顯著性均直接取自本地已驗證 SHA-256 之 Markdown 檔，未使用外部記憶或未經核對之推論值。
