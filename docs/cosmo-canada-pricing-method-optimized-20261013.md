# COSMO Canada — 価格決定方法（最適化版）

**Date:** 2026-10-13（前提整合で改訂）  
**Excel:** `docs/cosmo-canada-pricing-method-optimized-20261013.xlsx`  
**US正本:** `COSMO_US_warehouse_US_location_Threads_fixed_v2`（Effective May 27, 2026）  
**前提対応:** `docs/cosmo-canada-pricing-premise-alignment-20261013.md`

**固定前提**
- 添付エクセルの Distributor 列 = **US DDP**
- Faire = US倉庫から **Suggested Wholesale**。Japan→US は **LCJ負担**
- CA Faire buyer = IOR（関税等）。送料は建前buyer、**Insiderで≈0**が多い見込み
- CA店頭売価は過去調査（No.25 CAD 1.55–2.50等）。希望MAPは米SRP×FX
- **不公平回避** = Faire店の仕入 ≒ Distが retail shop に卸す価格（着地）

---

## 1. 決定シーケンス

1. **正本ロック** — SRP / Suggested WS / Distributor（Dist = DDP-US）  
2. **MAP** — `CA_MAP_CAD = US_SRP × FX`  
3. **店の仕入（公平の錨）** — `CA_Shop_Buy = Suggested WS` ＝ Faire。**Dist→shopも同額を原則**  
4. **Dist仕入** — `CA_Dist_Buy = US Distributor`（数値同一・**CPT goods**）  
5. **Incoterms** — CPT CA、Buyer=IOR（**DDP Canada禁止**）  
6. **航空** — Japan→CAはMOQ / Freight行（Dist仕入をUSより下げない）  
7. **Faire着地** — duty≈0、Insider送料≈0 → 店着地≈WS＋brokerage  
8. **公平チェック** — Faire店着地 ≈ Dist経由店着地  
9. **Wave 1** — 糸優先  

---

## 2. 数式

```
CA_MAP_CAD          = US_SRP_USD × FX
CA_Shop_Buy_USD     = US_Suggested_Wholesale_USD   # Faire→shop AND Dist→shop（原則）
CA_Dist_Buy_USD     = US_Distributor_Price_USD     # TANAAKK→Dist（CPT; US list was DDP-US）
Landed_Shop_Faire   ≈ Shop_Buy + freight(≈0) + brokerage
Landed_Shop_viaDist ≈ Shop_Buy + brokerage
Constraint: Dist must not systematically sell to shops below Faire WS
```

**No.25（6本）@ FX 1.37**

| 区間 | USD | /本 |
|---|---:|---:|
| MAP | — | CAD **2.30** |
| Faire→Shop / Dist→Shop | **5.04** | **0.84** |
| TANAAKK→Dist（CPT） | **3.78** | **0.63** |

```
TANAAKK ─CPT $3.78─► CA Dist ─WS $5.04─► Retail shop
Faire US WH ─WS $5.04─► Retail shop (IOR; Insider freight≈0)
```

---

## 3. ハード制約

1. 見積に *US Dist=DDP-US / CA Dist buy=CPT CA, Buyer IOR*  
2. **Dist→shop ≥ Faire WS**  
3. Dist仕入条件のFaire店リーク禁止  
4. Dist仕入を下げて航空を吸収しない  
5. 名目小売同一（USD数字＝CAD数字）禁止  

---

## 4. 暫定MOQ

- 初回 ≥ USD 2,000（糸）または No.25フルカラー  
- リピート航空 ≥ USD 500（単価後に改定）  
- 航空按分が商品代金の概ね8–10%超 → MOQ/Freight先、Dist据え置き  

---

## 5. 一文

**店から見てFaire仕入とDist経由仕入が同じSuggested WSになるよう固定し、TANAAKK→Distだけ米Dist金額（CPT）で卸マージンを残す。米正本・DDP/WS/LCJ負担の前提に基づく。**
