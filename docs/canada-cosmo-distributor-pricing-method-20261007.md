# Canada COSMO — Distributor 価格設定の最善方法

**Date:** 2026-10-07  
**Status:** 方針提案（関税率・運賃・CPTPP適用は Broker 確定前）  
**根拠データ:** `20261007_Canada_COSMO_retailers_reviews_prices_vs_Faire.md`  
**前提構造:** Japan→Canada直送 / SOR=TANAAKK / IOR=Canadian Distributor / LCJ=fulfillment

---

## 0. 結論（最善方法）

**採用すべきは「Canada小売逆算（Retail-back）＋着地コスト門（Landed-cost gate）＋Faireチャネルガードレール」の三段法。**

| やらない | 理由 |
|---|---|
| Faire USD卸をそのまま×FXしてCA卸にする | IORがDistributorに移り、関税・国際送料が卸側コストになる。No.25は既にCA小売が鋭く、着地後マージンが壊れる |
| 米生地の `D × 1.33 × 2` を流用 | 刺しゅうCAは問屋2段ではなく、独立キルト店直荷が中心。階梯が合わない |
| Lindley CAD $1.55 に合わせて卸を下げる | 市場の最安に追従するとブランドも直送経済も壊れる。MAPで守る側 |
| 「関税が安いから卸を上げる」だけ | 小売が付いてこない。逆算とセットでないと在庫滞留 |

**一文:**  
CAで観測される小売帯を先に正し、そこから小売マージンを確保できる **最大着地コスト** を決め、関税・運賃を引いて **TANAAKK請求上限** を出す。そのうえで Faire卸とのチャネル公平と LCJ残余をゲートする。

---

## 1. 市場事実（価格設計の拘束条件）

出典: 2026-10-07 Canada retailers vs Faire メモ。FX例: **1 USD ≈ 1.37 CAD**（都度更新）。

### 1.1 CA小売（CAD）

| 商品 | 観測帯 | 設計上の読み |
|---|---|---|
| No.25 8m | **$1.55–$2.50** | Lindley/Workroomが鋭い。Yellowknife≈フルチケット |
| Seasons | 例 **$3.50**（YK） | No.25より余裕 |
| Hidamari solid 30m | **$7.00–$7.99** | 概ね健全 |
| Hidamari variegated | **$8.50–$8.99** | 健全 |

### 1.2 Faire卸（現状の比較基准・USD）

| 商品 | Faire WS / 小売単位 | ≈CAD |
|---|---:|---:|
| No.25 | **$0.84**/skein | ≈$1.15 |
| Seasons | **$1.18** | ≈$1.62 |
| Hidamari solid | **$2.39** | ≈$3.27 |
| Hidamari var | **$2.78** | ≈$3.81 |

Faire上の suggested retail は概ね **卸×2**。  
CA実態: No.25は **1.3–2.2×**（着地前の単純比較）。関税・送料を入れると $1.55–$1.75 帯はさらに苦しい。

### 1.3 チャネル実態

- Faire上のCA大口: **Yellowknife Books / Out of Hand** が中心  
- 直送distributorは、これら既存売場と **競合しうる**（同一ブランドの二重供給）  
- レビュー文化は薄く、価格・品揃え・供給安定が差別化の本体

---

## 2. 最善方法 — 三段法の手順

### Step A — Canada SRP / MAP を先に決める（小売アンカー）

米MSRPやFaire suggestedだけを正本にしない。**CA店頭の中央〜上側**をブランド推奨にする。

| 商品 | 推奨 MAP（CAD, 税抜目安） | 根拠 |
|---|---:|---|
| No.25 | **$2.20–$2.50** | YK $2.50 / OOH上端に寄せる。$1.55はMAP対象外の値崩れとして扱わない |
| Seasons | **$3.30–$3.60** | YK $3.50付近 |
| Hidamari solid | **$7.50–$8.00** | $7–8帯の中央〜上 |
| Hidamari var | **$8.50–$9.00** | 観測上端 |

契約: Distributor（およびその先の小売）に **MAP政策**を渡し、公的サイトでMAP割れを続けないことを条件化（Enforceの強さは法域・関係次第で段階的）。

### Step B — 小売マージン目標 → 最大着地コスト（Landed ceiling）

独立キルト店向けの目安（着地後）:

| 商品タイプ | 目標 | 意味 |
|---|---|---|
| No.25（主力・価格敏感） | 着地の **≥2.0×** または GM **≥50%** | MAP中央で守る |
| Hidamari / Seasons | 着地の **≥2.1×** または GM **≥52%** | 現状に近い |

定義（IOR=Distributor）:

```
Landed cost (CAD) ≈
  TANAAKK invoice (CAD又はUSD×FX)
  + 国際送料・保険の按分
  + Canada関税（Broker確定）
  + brokerage等
  （輸入GSTは登録事業者がITCなら「経済コスト」から分離してよい）
```

**逆算:**

```
Max Landed = MAP ÷ 目標倍数
例 No.25 MAP CAD 2.40、目標 2.0× → Max Landed = CAD 1.20
```

### Step C — 関税・送料を控除 → TANAAKK Distributor価格（Invoice ceiling）

```
Max TANAAKK price =
  Max Landed
  − freight/duty/brokerage 見積
```

関税コード・CPTPP適用は **Broker書面前はプレースホルダ**（仮置きで感度のみ。確定値で再計算）。

### Step D — 二つのゲート（必須）

**Gate 1 — Faireチャネル公平**

| ルール | 内容 |
|---|---|
| 原則 | 直送Distributorの **着地相当** が、Faire CAバイヤーの実効仕入（Faire WS＋米→加送料＋関税等）を **不当に大幅下回りしない** |
| 例外 | 最低発注・年間コミット・フルカラー必須など、Faire単発より重い義務と交換でのみ優遇 |
| 目的 | YK / Out of Hand 等の既存Faire売場を壊さない |

**Gate 2 — LCJ残余＋TANAAKK retention**

```
TANAAKK Net Sales × (1 − retention%)  −  Japan側原価・品質費用
が、LCJとして持続可能な残余になること
```

retention は別紙TP（仮説 7.5–10%等）に従い、価格決定後にOM感度を見る。  
**価格をTP率で決めない。** 価格は市場逆算、率はroutine利益。

### Step E — 商品別プライシング（一律%オフ禁止）

No.25とHidamariで着地倍率・価格弾力が違う。  
**SKUファミリーごとに Step A–D を回す。** 「全品Faire×0.95」は最悪手。

---

## 3. 数値イラスト（No.25）— 方法の見せ方

前提（Illustration only）:

| 項目 | 値 |
|---|---|
| MAP | CAD **2.40** |
| 目標倍数 | **2.0×** |
| Max Landed | CAD **1.20** |
| 仮: 送料按分＋関税＋broker | CAD **0.15**（要実測） |
| **Max TANAAKK invoice** | CAD **≈1.05** / skein |
| 参考 Faire WS | ≈ CAD **1.15**（$0.84×1.37） |

読み:

1. 直送で送料・関税が乗ると、**Faire WSと同額をTANAAKKが取ると着地がMAPを割り込みやすい**。  
2. よって直送Distributor価格は、単純「Faireと同額」ではなく **着地≤CAD 1.20** を守る設計が先。  
3. Lindley $1.55 を正にすると Max Landed≈0.78（2.0×時）→ 卸が成立しにくい。**MAPを$2.20+に引き上げる方が先。**

Hidamari solid（Illustration）:

| 項目 | 値 |
|---|---|
| MAP | CAD **7.75** |
| 目標 2.15× | Max Landed ≈ CAD **3.60** |
| Faire相当 | ≈ CAD **3.27** |
| 余白 | No.25より直送設計の余地が大きい |

→ **導入は Hidamari / Seasons / Nishikiito を先に直送し、No.25はMAP定着後**、がオペ上も安全。

---

## 4. 建値・通貨・契約の実務

| 項目 | 推奨 |
|---|---|
| 建値通貨 | **USD建**（TANAAKK会計・Faire比較が容易）。小売MAPは **CAD表**を併記し四半期FX見直し |
| Incoterms | **FCA Japan 又は CPT主要港**（DDP禁止＝IORはDistributor） |
| 価格表 | Family別: No.25 / Seasons / Hidamari / Nishikiito / Needles |
| 改定 | FX±5%又は年2回。関税確定後に初回true-up |
| 最低発注 | 直送インセンティブの本体（値引きよりMOQ・フルカラー） |
| 公開MAP | CAD表をDistributorに配布。ECの恒常的MAP割れは是正協議 |

---

## 5. Faire併用時のチャネル設計（価格と不可分）

直送を「全CAのFaire代替」にしない。

| 顧客タイプ | 供給 | 価格 |
|---|---|---|
| 既存Faire小売（少量） | **Faire継続** | Faire WSのまま |
| コミットDistributor（在庫・IOR・年間） | **Japan直送** | 三段法のDistributor表 |
| ハイブリッド（YK級） | 品揃えは直送、欠品はFaire等 | 着地が壊れないよう **二価格の併存ルール**を文書化 |

二重供給になる店には、**排他SKU・リードタイム・最低在庫**で役割分担し、価格だけで奪い合わない。

---

## 6. 他手法との比較（なぜ三段が最善か）

| 手法 | 評価 |
|---|---|
| **A. Retail-back + Landed gate + Faire guard（本推奨）** | 市場・IORコスト・既存チャネルを同時に守る |
| B. Cost-plus（原価×係数） | LCJは守れるがCA小売・Faireと乖離しやすい。補助ゲートのみ |
| C. Faireパリティ固定 | 単純だが直送の関税負担シフトを無視しNo.25が破綻 |
| D. 米生地 2.66式 | CA刺しゅうの流通構造に不適合 |
| E. 競合DMC店頭合わせ | プレミアム毀損。参考下限に留める |

---

## 7. 実装ロードマップ（価格だけ）

| Phase | 作業 | 成果物 |
|---|---|---|
| P0 | MAP案（CAD）を社内確定。No.25を$2.20+に置く方針の是非 | MAP表v0 |
| P1 | Broker: HS・duty・CPTPP。試算用運賃（海/空） | 着地係数 |
| P2 | Family別に Max Landed / Max Invoice 計算 | Distributor価格表v0（USD） |
| P3 | Faire実効着地と比較、ガードレール調整 | チャネルメモ |
| P4 | LCJ残余・retention感度 | Go/No-Go |
| P5 | Distributor提示（MAP＋MOQ＋価格表）。パイロットはHidamari優先可 | 契約・初回PO |

---

## 8. 未確定（確定前に埋めない）

推測で価格をロックしない項目:

1. 各SKUの **正確なHSとCanada duty / CPTPP**（Broker）  
2. 想定ロットでの **国際送料 $/skein**  
3. 提示先Distributorが **既存Faire売場か新規か**  
4. MAPを **契約義務にするか努力義務か**  
5. 建値を **USDのみか CAD建オプションか**

---

## 9. 意思決定用一文

**Canada Distributor価格の最善は、Faire卸のコピーではなく、CADのMAPを先に置き、小売2.0×超の着地を守る逆算でTANAAKK請求上限を決め、Faire公平とLCJ残余でゲートする三段法である。No.25は小売値崩れが制約なのでMAP引き上げとHidamari先行が現実的である。**

---

*新規ファイル（2026-10-07）。既存の Canada retailers メモは上書きしない。*
