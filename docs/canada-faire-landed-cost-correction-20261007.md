# 修正メモ — Faire経由CA小売の true landed cost と価格設計への含意

**Date:** 2026-10-07  
**Status:** 批判的吟味＋分析修正  
**対象:** `20261007_Canada_COSMO_retailers_reviews_prices_vs_Faire.md` の「Faire cost ≈ CAD $1.15」読み  
**関連:** `canada-cosmo-distributor-pricing-method-20261007.md`

---

## 0. 結論

| 命題 | 判定 |
|---|---|
| FaireのCA向け国外発送で、retailerが原則IORとなり関税・import GST等を負担する | **妥当**（Faire Help / Retailer Termsの説明と整合） |
| Insider送料無料 ≠ 関税無料 | **妥当** |
| `$0.84 → CAD $1.15` は true landed ではない | **妥当**（元資料も Duty/freight 未算入と明記） |
| この修正はCanada distributor価格設計で **かなり重要** | **妥当・重要度は高い** |
| 「だから直送のIOR設計が新しい負担になる」 | **過大**（Faire経路でも既に同型の負担がある） |
| 「だから直送の関税二重回避メリットが消える」 | **誤り**（米側関税の埋め込みは別レイヤーで残る） |

**一文:**  
比較単位を「Faire卸のFX換算」から「**着地コスト同士**」に上げる修正は必須。直送の価値は「誰がIORか」の新規性より、**米輸入脚の排除＋運賃・建値・MOQ**の差し引きで測る。

---

## 1. 指摘内容の妥当性

### 1.1 Faire上の負担構造（同意）

公開ヘルプ上も概ね次のとおり。

- International購入のretailerは **importer of record**
- **customs duties / tariffs / taxes** 等はretailer負担
- checkoutでduty estimateが出ることがあるが、最終はcarrier/broker請求
- Insiderのfree shippingは送料補助であり、**import dutiesは別**（CA Insiderもdutiesはretailer）

よって実質原価の式:

```
Faire経路の経済原価（登録retailer）≈
  Faire WS
  + international freight（Insider対象外 or 補助後の残）
  + Canada customs duty
  + brokerage / carrier customs fees
  + import GST/HST（ITC可なら多くの場合ネットゼロに近い）
```

は **分析上正しい骨格**である。

### 1.2 元メモの $0.84→CAD $1.15（同意：不十分）

あれは **商品仕入のFX換算**にすぎない。  
元メモ注記（Duty / freight / FX not included）どおり、**マージン表の「倍率・GM」は楽観側（着地を低く見積もった側）**だった。

含意:

- No.25の Lindley/Workroom帯は、duty込みなら **さらに苦しい／既に赤字寄り**の可能性
- 「Faire仕入で余裕がある」とは読めない
- Hidamariの「健全な2.1–2.4×」も、duty+freight後は **見かけより薄い**

### 1.3 批判的に残す留保（言い切りすぎない点）

| 留保 | 内容 |
|---|---|
| 全件が「フル商業通関」とは限らない | 価額・carrier・時期で実務が揺れる。COSMOの実績インボイスで検証すべき |
| 原産地 | 米3PL発でも原産は多くの場合 **Japan** → CA税率は「米産」ではなくJPルールで見ることが多い |
| GST | 登録retailerのITC前提なら、**恒久コストから外して比較**してよい（指摘どおり） |
| Faire手数料 | WSのほかブランド側コミッション等は **卸値の背後**にあり、retailer landed式には出ない |
| Insider補助 | 送料ゼロでもdutyは残る。比較表は「Insiderあり／なし」の二列が必要 |

---

## 2. なぜ distributor 価格で「かなり重要」か

### 2.1 比較の土俵が変わる（最重要）

| 誤った比較 | 正しい比較 |
|---|---|
| Japan直送 invoice vs Faire WS×FX | **Japan直送着地** vs **Faire着地** |
| 「直送は関税が乗るから不利」 | 両方ともCA通関負担がありうる。差は **運賃・税率適用・建値・米脚の有無** |

Gate（Faire公平）も、当初メモの「Faire WS＋送料＋関税」と言っていた方向は正しかったが、**数値イラストがWSのみ**だったため意思決定が歪む。ここを直すのは必須。

### 2.2 「IOR＝Distributor」は新規リスクというより既存慣行の延長

航空CPT＋買主IORは、Faire CA retailerが既にやっていることと **同型**。

- 直送提案の説明コストは下がる（「今Faireで払っているdutyと同じ種類」）
- 「直送だから初めて関税を払わされる」という反対論は弱い
- ただし **一括・定期・航空専用**になると、brokerageの乗り方やキャッシュフローはFaire小口と異なりうる

### 2.3 二重関税ストーリーは「消えない」が「層が分かれる」

| 層 | Faire（米3PL→CA） | Japan直送 |
|---|---|---|
| 米輸入関税等 | **ブランド／WS経済に埋め込み**（TANAAKK IOR） | **発生しない** |
| CA輸入関税等 | **retailer負担** | **Distributor負担** |
| 国際送料 | 米→加（Insiderで軽減されうる） | 日→加（航空前提で厚い） |

小売の払うCA dutyだけ見ると両経路とも「CA側コストあり」。  
グループ全体・建値交渉では、**米脚の関税・3PL・Faire手数料の有無**が直送の主たる経済差になりうる。

### 2.4 価格三段法への具体的修正

従来の逆算は維持。入力だけ更新する。

```
Benchmark Landed_Faire ≈
  Faire WS
  + CA向け実効送料（Insider後）
  + 実duty + brokerage
  （GSTはITC前提で除外可）

Landed_Direct ≈
  TANAAKK invoice
  + 航空運賃按分
  + CA duty + brokerage
```

- **Max Landed（MAP÷倍数）** と **Landed_Faire** の低い方／政策で決めた方が、直送invoiceの天井になる  
- 「Faireより少し安い着地」を売るなら、航空運賃を相殺できるほど **invoiceをWSより下げる**か、**MOQで航空単価を落とす**必要がある  
- 名目WSをFaireと同額にすると、航空が厚い分 **着地でFaire負け**しやすい

---

## 3. 重要度のキャリブレーション（過大・過小の両側）

| 言い方 | 評価 |
|---|---|
| 「かなり重要」 | **適切**（比較単位・マージン診断・直送の売り文句が変わる） |
| 「これで価格戦略の前提が根底から覆る」 | **やや過大**（三段法・FXパリティMAP・DDP禁止はむしろ強化される） |
| 「duty込みだからNo.25直送は不可能」 | **早計**（着地同士で負けているかは未計測。MOQ・混載・Hidamari先行で変わりうる） |
| 「FaireもIORだから直送と同じ」 | **単純化しすぎ**（運賃経路・米脚・手数料・ロットが違う） |

---

## 4. 次にやる計測（これ無しに率も卸も固めない）

1. COSMOのCA向けFaire注文の **実duty + brokerage 請求サンプル**（YK / Out of Hand等）  
2. Insider適用有無別の **実効送料**  
3. 同SKUの **航空日→加** 見積（kg・最低課金）  
4. HS／CPTPP後の **duty rate**（Broker）  
5. 上記で `Landed_Faire` vs `Landed_Direct` の感度表（No.25 / Hidamari）

---

## 5. 一文

**指摘は妥当で、Canada distributor価格では比較を着地ベースに上げる修正が必要。**  
ただしそれは直送を不利と決める材料ではなく、Faire経路も既にCA通関負担があることを踏まえ、**米脚排除と航空運賃を差し引いた真の競争力**で建値を決める、という精度向上である。
