# Canada価格設計 — 前提との整合チェック（最適化版の修正）

**Date:** 2026-10-13  
**US正本:** `COSMO_US_warehouse_US_location_Threads_fixed_v2 (1) 1.xlsx`（Effective May 27, 2026）  
**対象:** ユーザー提示の5前提 vs `cosmo-canada-pricing-method-optimized-20261013`

---

## 0. 結論

| 判定 | 内容 |
|---|---|
| **概ね基づいている** | 正本エクセル、US Dist=DDP、Faire=Suggested WS、小売FXパリティ、CPT/非DDP、関税≈0 |
| **修正が必要** | 「不公平感なし」の比較対象。正しくは **Faire店の仕入 ≒ Distがretail shopへ卸す価格（着地）**。DistがTANAAKKから買う **$3.78** をFaireの **$5.04** と同等にするものではない |
| **明示不足だった点** | Japan→USはLCJ負担／Canada Faireはbuyerがduty・（建前上）送料負担・Insiderで送料≈0の見込み |

---

## 1. 前提ごとの整合

### ① 添付エクセルは US distributor / DDP価格

| | |
|---|---|
| 前提 | US Dist列（No.25 pack **$3.78** 等）は **DDP-US** |
| 設計 | CA Dist **goods金額**は同額USDを使うが、条件は **CPT CA・Buyer IOR**（DDP Canadaではない） |
| 整合 | **Yes**（金額踏襲＋条件差を明記） |

### ② FaireへはUS倉庫から、エクセルの wholesale。Japan→USはLCJ負担

| | |
|---|---|
| 前提 | Faire建値 = **Suggested Wholesale**（No.25 **$5.04**/6本 = **$0.84**/本）。日→米の輸入・国際コストは **LCJ負担**（米側WS/Distに転嫁しない／既に吸収済み） |
| 設計 | `CA_WS_USD = US Suggested Wholesale` をFaireパリティの正とする |
| 整合 | **Yes** |
| 含意 | Canada直送の **日→加航空**は米経路に無いコスト。Distの仕入側でMOQ/Freight行が必要（Dist本体を$3.78未満にしない） |

### ③ Canada buyerもFaire購入。関税・送料はbuyer負担（Insiderで送料は実質ほぼ負担なしと予想）

| | |
|---|---|
| 前提 | CA retailer = IOR（duty等）。送料は建前buyerだが **Insiderで≈0** が多い |
| 設計 | `Landed_Faire ≈ WS + freight(≈0) + brokerage`（duty≈0想定）。GSTはITCならネット除外可 |
| 整合 | **Yes**（送料≈0を明示して着地を組む） |

### ④ Canada buyerの売価は過去調査どおり

| | |
|---|---|
| 前提 | No.25小売 CAD **$1.55–$2.50** 等（Yellowknife上側〜Lindley下側） |
| 設計 | 希望小売 **MAP = US SRP×FX** → No.25 **CAD ≈ $2.30**/本（米$1.68×1.37） |
| 整合 | **Yes（方針）**。観測下側（$1.55–$1.75）はMAP割れ／値崩れ。ブランド希望は上側・FXパリティ |
| 注意 | MAPを$2.30に置くのは「調査の中央」ではなく「米と実効同一＋防衛」 |

### ⑤ 不公平感なし = Faire仕入 ≒ Dist→retail shop卸

| | |
|---|---|
| 前提の正しい読み | 比較するのは **店の仕入**同士 |
| | Path A: Shop ← **Faire**（WS） |
| | Path B: Shop ← **CA Distributor** ← TANAAKK/LCJ |
| 目標 | Path A の店着地 ≈ Path B の店着地 |
| **旧メモの弱さ** | DistのTANAAKK仕入（$3.78）とFaire（$5.04）を並べ「チャネル差でOK」と書き、**店への卸価格**の固定が薄い |
| **修正ルール** | **Dist → retail shop の卸価格（USD）= US Suggested Wholesale（Faire WS）** を原則とする（着地で同等） |
| | Distの仕入 = US Dist金額（$3.78 CPT goods）→ Dist粗利 ≈ WS−Dist−航空按分 |
| 整合（修正後） | **Yes** |

---

## 2. 修正後の三層（No.25例）

```
TANAAKK ──CPT goods $3.78──► CA Distributor ──WS $5.04──► Retail shop
                                      ▲
Faire (US WH) ──WS $5.04──► Retail shop (CA, IOR; Insider freight≈0)
```

| 区間 | USD（6本） | /本 | 誰の視点 |
|---|---:|---:|---|
| Faire → Shop | **5.04** | 0.84 | 店の仕入（公平の錨） |
| Dist → Shop | **5.04**（原則） | 0.84 | 店の仕入（Faireと同等） |
| TANAAKK → Dist | **3.78** | 0.63 | Distの仕入（卸マージン原資） |
| Shop → Consumer MAP | — | CAD **2.30** | FXパリティ希望小売 |

Distが店に **$5.04未満**で卸すと、Faire店が不公平を感じる → **禁止（原則）**。  
例外は数量コミット等がある場合のみ、かつFaire WSを大きく割らない。

---

## 3. 着地公平（duty≈0、Insider送料≈0）

| Path | 店の概算着地（商品＋送料＋duty） |
|---|---|
| Faire | **≈ $5.04** + brokerage（送料≈0、duty≈0） |
| Dist経由 | **≈ $5.04** +（店が国内送料を払うなら別） |

TANAAKK→Distの航空は **Distが負担（CPTの売主負担をMOQ/Freightで回収）**し、店の建値$5.04を壊さない。

---

## 4. 最適化メソッドへの反映（差し替え文言）

**Faire公平の定義（確定）**

> Canada retail shop が Faire で払う卸価格（Suggested WS）と、CA Distributor が retail shop に卸す価格を同等程度にする。  
> TANAAKK→Distributor の価格は US Distributor（DDP-US金額／CAはCPT）とし、卸の利幅を確保する。

**数式追加**

```
CA_Shop_Buy_USD     = US_Suggested_Wholesale_USD     # Faire & Dist→shop
CA_Dist_Buy_USD     = US_Distributor_Price_USD       # TANAAKK→Dist (CPT goods)
CA_MAP_CAD          = US_SRP_USD × FX
# Constraint:
CA_Dist_to_Shop_USD ≥ CA_Shop_Buy_USD - ε   # ε≈0; no undercutting Faire
```

---

## 5. 一文

**はい、設計は当該エクセルとDDP/Faire/LCJ負担の前提に基づいている。ただし不公平回避の本丸は「Dist仕入＝Faire」ではなく「Distが店に卸す価格＝Faire WS」であり、そこを明示したのが今回の修正である。**
