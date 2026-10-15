# COSMO Canada — Distributor価格 & 輸出方式 設計（要約）

**Date:** 2026-10-08  
**Excel:** `docs/cosmo-canada-distributor-price-cpt-design-20261008.xlsx`  
**元表:** `COSMO_US_warehouse_US_location_Threads_fixed_v2 (1) 1.xlsx`（Effective May 27, 2026）  
**前提:** Canada関税 ≈ 0% / 小売＝米SRP×FX / Faire不公平なし / **DDP不可**

---

## 1. 輸出方式（結論）

| | 採用 |
|---|---|
| **使う** | **CPT [カナダ指定地], Incoterms 2020** |
| **使わない** | **DDP**（IORが売主側に寄り、Canada運営方針と矛盾） |
| **代替** | 相手フォワーダーが強い場合のみ **FCA Japan** |
| **IOR** | Canadian Distributor（関税≈0でも輸入GST・brokerageはBuyer） |

条文骨子: Buyer is IOR; pays duty (if any), import GST/HST, brokerage. Seller is not Canadian IOR.

---

## 2. 価格アーキテクチャ（USD請求）

| 層 | 金額の決め方 | Faire公平 |
|---|---|---|
| **CA MAP（CAD）** | US SRP × FX（例 1.37） | 米と同チケット（実効） |
| **CA Suggested WS** | **＝ US Suggested Wholesale**（Faireカタログと同額） | Faire仕入と商品建値パリティ |
| **CA Distributor** | **＝ US Distributor Price** | 契約卸のみ。Faireスポット客に渡さない |
| **航空（CPT）** | 実費 or サーチャージ / MOQで吸収 | Dist本体を切って勝たない |

### No.25（6本パック）数値例

| | USD / pack | / skein | CAD MAP @1.37 |
|---|---:|---:|---:|
| SRP / MAP | 10.08 | 1.68 | **13.81** pack / **2.30** skein |
| Faire / Suggested WS | 5.04 | 0.84 | — |
| **CA Distributor** | **3.78** | **0.63** | — |

（Seasons / Hidamari / Nishikiito も同様にUS Dist＝CA Dist。詳細はExcel `02_CA_Price_List_USD`。）

---

## 3. Faire不公平を防ぐルール

1. 直送の**小売・スポット**建値 ≥ Faire WS（下回らない）  
2. Dist価格は **契約＋MOQ＋B2B再販のみ**（既存Faire店へのリーク禁止）  
3. Yellowknife / Out of Hand 等は原則Faire継続。Dist化は合意とコミット時のみ  
4. 航空が高いときは **MOQ引上げ or Freight行**であって DistをUSより下げない  
5. 公開MAPはFXパリティ（米SRP換算）を崩さない  

DistがFaire WSより安いのは**米国内と同じチャネル差**（卸機能の対価）。問題は「Faire店がDist価格で買える抜け道」なので契約で塞ぐ。

---

## 4. 未確定（ロック前）

- 日→加航空 $/kg・最低料金  
- CPT指定地（YYZ等）  
- 初回・リピートMOQの確定額  
- FX四半期改定の担当  
- Nishikiitoの米表ゆれの正本確認  
- 支払条件  

---

## 5. 一文

**関税≈0%前提では、商品建値は米表のコピー（WS＝Faireパリティ、Dist＝米Dist）、小売は米SRPのFX換算、貿易条件はCPT＋Buyer IOR（DDP禁止）。Faire公平は「Distを安売りチャネルにしない」ことで担保する。**
