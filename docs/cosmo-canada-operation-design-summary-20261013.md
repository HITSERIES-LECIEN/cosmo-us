# COSMO Canadian Operation — 前提・設計まとめ

**Date:** 2026-10-13  
**Status:** 社内方針の統合メモ（法務・税務・通関の確定助言ではない）  
**US価格正本:** `COSMO_US_warehouse_US_location_Threads_fixed_v2 (1) 1.xlsx`（Effective May 27, 2026）

---

## 0. 一文

**Japan→Canada航空直送。売主SOR＝TANAAKK、IOR＝Canadian Distributor（CPT・DDP不可）。商品建値は米表（DistはDDP-US金額／FaireはSuggested WS）。店の仕入はFaireもDist経由もWSで揃え、小売希望は米SRP×FX。支払はTANAAKKへUSD。関税は計画上≈0%（CPTPP等）。**

---

## 1. なぜCanada直送か

| 動機 | 内容 |
|---|---|
| 関税・コスト | 米経由だと米輸入コストのうえにCA再輸入が乗りうる。直送で米脚を外す |
| 打診 | Canadian distributor / 売場からTANAAKKへ声 |
| 既存実態 | すでにCA店はFaire経由で購入（US倉庫発）。duty等はbuyer負担、Insiderで送料≈0が多い見込み |

---

## 2. 当事者・役割（FAR）

| 主体 | 役割 | やらないこと |
|---|---|---|
| **LECIEN Japan (LCJ)** | Brand / 日本在庫 owner / Japan fulfillment（TANAAKK指図） | CA顧客と販売条件交渉・契約しない |
| **TANAAKK INC** | **SOR**（契約・価格・受注・請求・回収・与信）。出荷指図 | CA office/在庫なし。**原則Canadian IORにならない** |
| **Canadian Distributor** | Buyer / **IOR** / 通関 / 下流へ卸・流通 | （契約Dist以外はFaire継続を原則） |
| **CA Retail shop** | 店頭販売。FaireまたはDistから仕入 | — |

### Commercial / Physical

```
Commercial:  LCJ (consignment) → TANAAKK (sale) → CA Distributor → Retail shop
                ↘︎（並行） Faire US WH → CA Retail shop

Physical:    LECIEN Japan ──── air ────→ CA Distributor
             US Warehouse ─(Faire)─→ CA Retail shop
```

### 契約上の注意

- 米Master（Consignment + U.S. Principal / Amendment No.2）を**Canadaへそのまま流用しない**
- **Canada専用 Schedule**（Territory・IOR・CPT・精算・title）を追加
- 上流はconsignment維持可。真正SORはTANAAKK→CAのcommercial saleで担保（buy-sell必須論は採らない）
- Path Bの自動コピー禁止。Canadaでtitle/精算を再定義

---

## 3. 貿易条件（Incoterms）

| | 採用 |
|---|---|
| **標準** | **CPT [カナダ指定地], Incoterms 2020** |
| **禁止** | **DDP Canada**（IORが売主側に寄る） |
| **代替** | 相手フォワーダーが強い場合 **FCA Japan** |
| **モード** | **航空前提**（FOBは使わない） |
| **IOR** | Canadian Distributor（duty / import GST/HST / brokerage） |

**対比:** US Distributor向け価格表は **DDP-US**。Canadaは同額USDでも **CPT＋Buyer IOR** と明記する。

---

## 4. 価格設計（正本＝添付US表）

### 4.1 米表の読み方

| 列 | 意味 | No.25（6本）例 |
|---|---|---:|
| SRP | 希望小売 | $10.08（$1.68/本） |
| Suggested Wholesale | **Faire卸** | $5.04（$0.84/本） |
| Distributor | **US Dist / DDP-US** | $3.78（$0.63/本） |

- Faire出荷: **US倉庫**、建値＝Suggested WS  
- **Japan→US** の負担: **LCJ**（米側WS/Distに別建てしない／既に吸収）

### 4.2 Canada三層

| 層 | 決め方 | 通貨 |
|---|---|---|
| **希望小売 MAP** | US SRP × FX（例1.37 → No.25 CAD **≈$2.30**/本） | **CAD表**（正本はUSD SRP） |
| **店の仕入（公平の錨）** | ＝ Suggested WS。**Faire→店**も **Dist→店**も同額を原則 | **USD** |
| **Dist仕入（TANAAKK→Dist）** | ＝ US Distributor金額。条件はCPT（DDPではない） | **USD** |

```
TANAAKK ──CPT $3.78──► CA Dist ──WS $5.04──► Retail shop
Faire US WH ──WS $5.04──► Retail shop (IOR; Insider freight≈0見込み)
```

### 4.3 不公平感の定義（確定）

**比較するのは店の仕入同士。**  
Faire仕入 ≒ Distがretail shopに卸す価格（着地・Suggested WS）。  
DistがTANAAKKから$3.78で買うのは卸マージンであり、Faire店との「同等」対象ではない。

### 4.4 航空・支払

| 項目 | 方針 |
|---|---|
| Japan→CA航空 | CPT。対Distは売主（TANAAKK）負担の建付け |
| **運賃の支払実務（確定）** | **A. LCJが日本で支払い（円）→ TANAAKKへ実費請求（pass-through）** |
| DistからのFreight回収 | 原則 Invoice に **Freight行（USD）** で回収。回収しない分はTANAAKK費用（MOQで吸収） |
| Dist仕入（goods） | 米Dist金額据え置き。**運賃で goods 単価を下げない** |
| 商品代金の支払先 | **TANAAKK INC（USD）** |
| MAPのみ | CAD併記・四半期FX更新 |

**運賃フロー（確定）**

```
フォワーダー ←(JPY)─ LCJ
LCJ ─(実費請求 USD/JPY)→ TANAAKK
TANAAKK ─(Goods + Freight USD)→ CA Distributor   ※Freight行で回収が原則
```

Canada Schedule記載例:
- LECIEN arranges and pays international air freight for Canada CPT shipments in Japan.
- TANAAKK reimburses LECIEN for documented actual freight (pass-through).
- TANAAKK may recover freight from Distributor as a separate invoice line in USD.
- Freight recovery shall not be effected by reducing the Distributor goods unit price below the US Distributor list amount.

### 4.5 観測CA小売との関係

- 調査: No.25 CAD **$1.55–$2.50** 等  
- 方針MAP: FXパリティ（≈$2.30）＝防衛・米と実効同一  
- 下側店頭は値崩れ扱い（卸を合わせて追従しない）

---

## 5. 関税・CPTPP（計画前提）

| 項目 | 方針 |
|---|---|
| 計画 | Canada **duty ≈ 0%**（CPTPP特恵またはHSによりMFN Free） |
| 主力綿糸（5204.20想定） | MFN **8%** / CPTPT **Free** → 特恵成功で0%。**原産地PSRが本番のハードル** |
| Sashiko印刷布（5208.52） | Canada **MFNもとからFree**が多い |
| 残るコスト | import GST/HST（ITC可）、brokerage、航空 |
| 価格への入れ方 | ベースはduty≈0。否認時はBuyer着地にMFN—**建値を先に切らない** |

特恵の条件要約: HSのCPTPT Free × originating × IOR申告＋CO × 直送要件。  
（詳細: `canada-cosmo-cptpp-zero-duty-conditions-20261008.md`）

---

## 6. 移転価格・報酬（枠のみ）

| 項目 | 方針 |
|---|---|
| LCJ | Brand / inventory principal、残余 |
| TANAAKK | CA SOR、routine。報酬はCanada FAR（米15%流用禁止） |
| 率 | 外部commissionだけで未確定。**TNMM（OM）が本検定**。10%は仮説候補の一つ |
| 精算 | Canada Scheduleで定義（米No.2不流用） |

---

## 7. チャネル運用

| 顧客 | 供給 | 価格 |
|---|---|---|
| 既存Faire CA店（少量） | **Faire継続** | Suggested WS |
| 契約CA Distributor | **Japan直送 CPT** | Dist仕入＝米Dist金額／店へはWS |
| Distの資格 | MOQ・年間コミット・B2B再販 | Faire WS割れ卸の禁止 |

Wave 1推奨: **糸**（No.25 / Seasons / Hidamari / Nishikiito）。重い布・キットは航空後回し。

---

## 8. Go前チェックリスト

- [ ] Canada Schedule / Distributor契約（SOR・CPT・IOR・MAP・Dist→shop＝WS）  
- [ ] Broker: HS・CPTPP・CI（Vendor=TANAAKK / Shipper=LCJ / IOR=Dist）  
- [ ] 航空単価・CPT指定地・MOQ確定  
- [ ] USD支払口座・請求フロー  
- [ ] CAD MAP表（FX）公開ルール  
- [ ] GST/PEの税理士確認（規模シナリオ）  
- [ ] CPTPP COプロセス（duty≈0前提でも）  

---

## 9. 関連ドキュメント

| ファイル | 内容 |
|---|---|
| `cosmo-canada-pricing-method-optimized-20261013.md` | 価格決定手順 |
| `cosmo-canada-pricing-premise-alignment-20261013.md` | 前提との整合 |
| `cosmo-canada-pricing-method-optimized-20261013.xlsx` | 価格表ドラフト |
| `cosmo-canada-distributor-price-cpt-design-20261008.*` | 初期CPT設計 |
| `canada-distributor-direct-ship-roadmap-tp-strategy-20261007.docx` | ロードマップ＋TP |
| `canada-cosmo-cptpp-zero-duty-conditions-20261008.md` | CPTPP 0%条件 |
| `canada-faire-landed-cost-correction-20261007.md` | Faire着地修正 |
| `20261007_Canada_COSMO_retailers_reviews_prices_vs_Faire.md`（OneDrive） | CA店頭調査 |

---

## 10. 決定事項 vs 未確定

### 決まっていること

- 直送・SOR=TANAAKK・IOR=Distributor・CPT・非DDP・航空  
- 価格正本＝US表、支払USD to TANAAKK  
- 店の仕入公平＝Faire WS ≒ Dist→shop  
- Dist仕入＝米Dist金額（条件はCPT）  
- MAP＝米SRP×FX  
- 米Amendment No.2のCanada流用禁止  

### まだ数値・署名が必要なこと

- 航空運賃・最終MOQ・CPT地名  
- Distributor契約相手・排他範囲  
- CPTPP原産の実証  
- TANAAKK報酬率の最終（TNMM）  
- 支払サイト（Net日数等）  
