# CPTPP preferential treatment で Canada 関税 0% になる条件

**Date:** 2026-10-08  
**対象:** COSMO No.25 等（Japan → Canada 直送、IOR = Canadian Distributor）  
**Status:** 条件整理（個別HS・RoOの最終確認は Broker / 原産地担当）

---

## 0. 結論（先に）

Canada関税が **0%（CPTPT: Free）** になるには、次が **すべて**必要。

1. 該当HSの **CPTPP特恵税率が Free**（No.25有力HSは該当）  
2. 貨物がCPTPP上 **originating（特に繊維PSR）**  
3. **輸入者（CA側IOR）が特恵を申告**（自動適用なし）  
4. **Certification of origin** を輸入時に所持・要求時提出  
5. **輸送・積替え要件**（直送が有利）を満たす  

「日本ブランド／Made in Japan表示」だけでは不足。  
関税0でも **import GST/HST・brokerage・航空運賃は残る**。

---

## 1. 税率条件（Schedule）

| 想定分類（要確定） | MFN | CPTPT |
|---|---|---|
| **5207.10.00** 小売用コットンヤーン（縫糸以外・綿≥85%） | 8% | **Free** |
| **5204.20.00** 小売用コットン縫糸 | 8% | **Free** |

→ 分類が上記（又はCPTPT: Freeの近縁）で、特恵が付けば **関税率は0%**。

**条件1:** BrokerがCOSMO No.25の **確定HS** を出し、その行の CPTPT が Free であること。

---

## 2. 原産地条件（Rules of Origin）

### 2.1 一般

貨物がCPTPPの **originating good** であること。  
繊維は Chapter 3 一般規則に加え、**Chapter 4 / Annex 4-A の品目別規則（PSR）**が適用される。

### 2.2 綿糸・小売糸（52.04–52.07）のPSR（要旨）

Annex 4-A（概要）:

> **52.04–52.07:** 他章からの変更（CTC）、ただし指定の人造繊維見出し等からの変更は除外。

実務イメージ（要個別判定）:

| 工程 | 含意 |
|---|---|
| CPTPP域内（例: 日本）で **紡績**され、小売用に仕上げ | PSRを満たしやすい本線 |
| 第三国で紡いだ糸を日本で **巻替え・小売包装のみ** | 「最小工程」扱いで **originatingになりにくい** |
| 綿花（52.01等）が域外でも、域内紡績で章変更を満たすか | PSR文言・例外との照合が必要（ケース判定） |

**条件2:** LECIEN／製造記録で「どこで紡績・染色・小売put upしたか」を文書化し、PSR適合の意見を取る。  
TPL（数量枠）ルートは別制度のため、通常のpreferential claimとは分けて検討。

### 2.3 証明の根拠資料（例）

- 製造工程フロー（紡績国・染色国・包装国）  
- BOM／原料調達先  
- 工場証明、品質・組成（綿100%等）  
- 輸出者・生産者の origin 判定メモ  

---

## 3. 手続条件（Claim & Certification）

特恵は **自動では付かない**。

| # | 条件 | 担当 |
|---|---|---|
| 3 | 輸入申告で **CPTPP特恵（CPTPT）を請求** | Canadian Distributor（IOR）＋customs broker |
| 4 | 申告時に有効な **Certification of origin** を所持 | 通常 exporter / producer / importer のいずれかが作成可（CPTPP） |
| 5 | CBSA要求時にCO写し・裏付けを提出 | IOR / broker |
| 6 | COにAnnex 3-B相当の最低記載（originatingである旨等） | 発行者 |

**Japan直送オペでの実務分担案:**

- LCJ（又は生産者）: 原産判定・CO作成の裏付け  
- TANAAKK: Shipment Instructionに「CPTPP claim用CO添付」を標準化  
- Distributor / broker: カナダ入国時に特恵申告  

---

## 4. 輸送・積替え条件

CPTPPは **transit / transhipment** 要件あり（第三国での加工制限、税関管理下など）。

| 経路 | 特恵との相性 |
|---|---|
| **Japan → Canada 航空直送** | 要件を満たしやすい（推奨） |
| Japan → US倉庫 → Canada | 原産は維持し得るが、**輸送書類・保管・非加工**の証明負担が増える |
| 米で実質的な加工・小売再包装 | 原産・claimが毀損しうる |

**条件7:** 直送（又は積替えでも非加工・証明可能）であること。

---

## 5. それでも残るコスト（0%の範囲）

| 項目 | CPTPP 0%後 |
|---|---|
| Customs **duty** | **0**（特恵成功時） |
| Import **GST/HST** | **残る**（登録事業者はITCで実質回収しうる） |
| Brokerage / carrier customs fee | **残る** |
| 航空運賃 | **残る**（CPT等） |

Landed比較では「duty消える」＋「航空・brokerageは残る」。

---

## 6. チェックリスト（Go用）

- [ ] HS確定（5207.10 / 5204.20 等）と CPTPT: Free の確認  
- [ ] Annex 4-A PSR（52.04–52.07）適合の製造フロー確認  
- [ ] Certification of origin の発行者・テンプレ決定  
- [ ] Distributor契約に「IORがCPTPP特恵を申告する」協力義務  
- [ ] 航空直送の輸送書類セット（BL/AWB、invoice、packing）  
- [ ] パイロット1件で特恵適用の実績確認（assessment / B3等）  
- [ ] 価格感度: duty 0%ケース vs MFN 8%ケース  

---

## 7. 一文

**CanadaでCPTPPにより関税0%にする条件は、(1) HSのCPTPTがFree、(2) 繊維PSRを満たすoriginating、(3) IORの特恵申告＋CO、(4) 直送等の輸送要件、の四点セットである。** 表示上の日本産だけでは足りず、GST・brokerage・航空は残る。

---

*参考:* Canada Customs Tariff Ch.52（CPTPT: Free表記）; CPTPP Annex 4-A（52.04–52.07）; Chapter 3（claim / certification / transit）; CBSA D11-5-16。個別事案はBroker確定意見を正とする。
