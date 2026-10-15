# COSMO Canada — DAP前提の価格体系デザイン（批判的吟味付き）

**Date:** 2026-10-13  
**解釈:** 依頼の「DIP」は **DAP** として設計（**DDPではない**）。DDP意図なら要再設計。  
**Excel:** `docs/cosmo-canada-price-system-DAP-20261013.xlsx`  
**US正本:** `COSMO_US_warehouse_US_location_Threads_fixed_v2`（May 27, 2026）

---

## 1. 前提（ロック）

| ID | 前提 |
|---|---|
| P1 | LCJ＝ブランド・日本在庫・製造調達・JP fulfillment。TANAAKK＝Canada SOR（契約・価格・Invoice・回収）。Dist＝Buyer／IOR／下流卸 |
| P2 | **DAP [Named Place, CA]**。通関・duty・GST・brokerage＝Buyer。**非DDP** |
| P3 | US表 Dist列＝**DDP-US**。Faire＝Suggested WS（US倉庫）。Japan→US＝**LCJ負担** |
| P4 | CA Faire店＝IOR。Insiderで送料≈0が多い見込み |
| P5 | **公平**＝Faire店仕入 ≒ Dist→retail shop卸（Suggested WS） |
| P6 | 航空： **LCJがJPY払い → TANAAKK実費請求**。Distへは **Freight行（USD）回収が原則** |
| P7 | Distの商品・Freight支払は **TANAAKKへUSD** |
| P8 | 関税計画 ≈0% |
| P9 | 米向けは無保険実績あり。DAPでは危険窓が長い点を認識 |
| P10 | MAP＝US SRP×FX（CAD）。建値・請求はUSD |

---

## 2. 批判的吟味（採用前に飲む前提）

| # | 指摘 | 設計への含意 |
|---|---|---|
| C1 | DAPでも通関はBuyer → IOR方針と両立 | DDPと混同しない |
| C2 | 米Dist DDPと同額でもサービスは非同等 | 見積に「DAP／非DDP」明記 |
| C3 | **無保険DAPがCPTより危険**（着地後滞留） | 無料保管日数・超過＝Buyerを契約必須 |
| C4 | 公平の錨は店のWSでありDist仕入ではない | Dist→shopのWS割れ禁止 |
| C5 | 日→加航空はFaire経路に無いコスト | Freight行／MOQ。**goodsを$3.78未満にしない** |
| C6 | Named Placeが空港かドアかでFreightが変わる | 契約で固定してから価格提示 |
| C7 | duty≈0は未実証 | 否認時はBuyer着地。建値先切りなし |

**DAPを採るなら最大リスク対策（滞留・デマレージ＝Buyer）を価格と同列の必須条件にする。** これが無いDAP価格体系は未完成。

---

## 3. 価格体系（レイヤー）

```
L1  MAP (CAD)     = US_SRP × FX
L2  Shop buy      = US_Suggested_WS     ← Faire と Dist→shop の共通錨（公平）
L3  Dist Goods    = US_Dist_Price USD   ← DAP（米はDDP-US参照のみ）
L4  Dist Freight  = 実費相当 USD 別行  ← LCJ支払→TANAAKK精算→Dist回収
L5  Duty/GST      = Dist IOR（≈0 / ITC）
```

### フロー

```
Carrier ←(JPY)─ LCJ ─(実費)→ TANAAKK ─(Goods+Freight USD)→ Dist
                                      Dist ─(WS)→ Retail shop
Faire US WH ─(WS)→ Retail shop
```

### No.25（6本）@ FX 1.37

| 層 | USD | /本 |
|---|---:|---:|
| MAP | — | CAD **2.30** |
| Shop（Faire / Dist→shop） | **5.04** | **0.84** |
| Dist Goods（DAP） | **3.78** | **0.63** |
| Freight | TBD | Named Place後に確定 |

Dist粗利（Freight完全回収時）≈ **5.04 − 3.78 = 1.26**/パック（約25% of WS）— 米Dist構造と同型。

---

## 4. ハード制約

1. 見積ヘッダ: *DAP Canada / Buyer IOR — not DDP. US Dist list = DDP-US reference.*  
2. Dist→shop ≥ Faire WS  
3. Goods単価で運賃を隠さない  
4. 着後フリータイム超過費用＝Buyer  
5. 支払USD to TANAAKK  

---

## 5. CPTと比較した位置づけ（批判）

| | DAP採用時 |
|---|---|
| 選ぶ理由 | 「指定地まで届ける」説明・Dist体験 |
| 払う代償 | 危険窓が長い・無保険との相性が悪い・ドア指定ならFreight増 |
| 価格本体 | CPT案と **goods/WS/MAPは同一**。差はFreight定義とリスク条項 |
| それでもDAPにする条件 | Named Place固定＋滞留費用Buyer＋（任意）高額便のみ付保 |

滞留条項を入れられないなら、価格体系はそのままでも **IncotermはCPTに戻すべき**。

---

## 6. 一文

**DAP前提でも価格の三層（MAP／店WS／Dist Goods）とLCJ運賃立替→TANAAKK→Freight回収は維持できる。ただし米DDPと同額を「同じ条件」と呼んではならず、着地後リスクとFreightを契約と別行で処理しないDAP設計は棄却する。**
