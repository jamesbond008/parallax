import { RoundData } from '../types';

export const roundsData: RoundData[] = [
  {
    round: 1,
    name: 'Round 1',
    title: {
      zh: 'Round 1: 盲走与随机探索 (Blind Exploration)',
      en: 'Round 1: Blind Exploration & Random Walks',
      ja: 'Round 1: 盲目探索とランダムウォーク'
    },
    strategyName: {
      zh: '盲走与随机试错 (Random Exploration)',
      en: 'Random Exploration',
      ja: 'ランダム探索'
    },
    mazeDimension: 7,
    mazeSizeLabel: '7×7',
    description: {
      zh: '策略基因完全随机。Agent 无记忆、无预判，在死胡同里反复撞墙，行动高度冗余，消耗大量无意义步数。',
      en: 'Strategy DNA is completely random. The agent has no spatial memory or lookahead, repeatedly bouncing off dead ends.',
      ja: '戦略遺伝子は完全にランダム。エージェントには空間記憶や先読みがなく、袋小路で壁に衝突を繰り返します。'
    },
    strategyDna: {
      direction: 'random-walk',
      memory: 'none (0 bytes)',
      lookahead: '0 steps',
      backtrack: 'random bounce'
    },
    baselineSteps: 86,
    baselineDeadEnds: 12,
    evolutionScore: 12,
    variants: [
      {
        id: 'v1',
        name: 'Variant A (Rule-Based Wall Following)',
        strategy: '+wall-following (右手法则)',
        predicted: '52 steps, 7 dead ends',
        confidence: 78,
        selected: true,
        tag: 'Recommended Mutation',
        description: '引入确定性边界规则，沿单一侧墙体稳定摸索前进。'
      },
      {
        id: 'v2',
        name: 'Variant B (Speed Momentum)',
        strategy: '+step-momentum (动量惯性)',
        predicted: '74 steps, 11 dead ends',
        confidence: 35,
        selected: false,
        tag: 'Sub-optimal',
        description: '在直行方向增加惯性权重，但在迷宫弯道频繁深陷盲区。'
      },
      {
        id: 'v3',
        name: 'Variant C (Random Jitter)',
        strategy: '+random-jitter (概率抖动)',
        predicted: '81 steps, 12 dead ends',
        confidence: 20,
        selected: false,
        tag: 'High Risk',
        description: '纯随机分布微调，缺乏结构化认知突破。'
      }
    ],
    insight: {
      core: {
        zh: '初级模型最典型的盲目行为：缺乏状态留存与长程规划，任何阻碍都会触发无休止的原地重复。',
        en: 'The classic hallmark of naive agents: no state persistence, turning every obstacle into repetitive thrashing.',
        ja: '初期モデルの典型的な行動：状態保持が欠如しており、障害に遭遇するたびに無駄な試行を繰り返します。'
      },
      parallaxContrast: {
        zh: '映射 Solo Vibe Coding：单模型遇到未知 bug 时，由于缺乏外部对照，往往反复生成相似的错误代码。',
        en: 'Mirrors Solo Vibe Coding: a single model lacks external calibration and endlessly loops in hallucinated fixes.',
        ja: '単独バイブコーディングの写像：外部との照合がないため、幻覚による修正ループに陥ります。'
      }
    },
    quote: {
      zh: '“在黑暗中摸索，每一次转身都是全新的无知。”',
      en: '"Groping in the dark, every turn is a brand-new state of ignorance."',
      ja: '「暗闇の中で手探りし、曲がるたびに新たな無知に出会う。」'
    }
  },
  {
    round: 2,
    name: 'Round 2',
    title: {
      zh: 'Round 2: 右手法则 (Wall Following)',
      en: 'Round 2: Wall Following & Deterministic Boundary',
      ja: 'Round 2: 右手法則と境界トレース'
    },
    strategyName: {
      zh: '右手法则 (Wall Following)',
      en: 'Wall Following Rule',
      ja: '右手法則'
    },
    mazeDimension: 9,
    mazeSizeLabel: '9×9',
    description: {
      zh: '从 Round 1 的撞墙中进化出基本规则：右手摸墙。死胡同试错减少，但在长回路和中央孤岛中极易绕巨大远路。',
      en: 'Evolved deterministic wall-tracing from Round 1 failures. Reduces chaotic bouncing, but traverses unnecessary detours.',
      ja: 'Round 1 の失敗から右手法則を獲得。無駄な衝突は激減しますが、環状構造で遠回りを強いられます。'
    },
    strategyDna: {
      direction: 'right-hand-bias',
      memory: 'orientation-only',
      lookahead: '0 steps',
      backtrack: 'perimeter slide'
    },
    baselineSteps: 52,
    baselineDeadEnds: 7,
    evolutionScore: 34,
    variants: [
      {
        id: 'v4',
        name: 'Variant A (+Visited Memory & Stack)',
        strategy: '+memory (已访问标记与回溯栈)',
        predicted: '31 steps, 3 dead ends',
        confidence: 84,
        selected: true,
        tag: 'Recommended Mutation',
        description: '建立空间坐标记忆，绝不再踏入已知死路。'
      },
      {
        id: 'v5',
        name: 'Variant B (+Alternate Hands)',
        strategy: '+alternate-hands (左右手动态轮替)',
        predicted: '49 steps, 6 dead ends',
        confidence: 42,
        selected: false,
        tag: 'Sub-optimal',
        description: '遇阻时切换参考墙体，容易在对称结构中死锁震荡。'
      },
      {
        id: 'v6',
        name: 'Variant C (+Compass Heading)',
        strategy: '+static-compass (静态朝向偏置)',
        predicted: '44 steps, 5 dead ends',
        confidence: 51,
        selected: false,
        tag: 'Partial Gain',
        description: '对目标方位有微弱偏好，但无法脱离复杂几何凹坑。'
      }
    ],
    insight: {
      core: {
        zh: '规则型认知虽然带来了确定性，但由于缺乏“空间历史记忆”，无法识别自己正在走无意义的巨大闭环。',
        en: 'Rules bring determinism, but without spatial history, the agent cannot detect when it traverses useless loops.',
        ja: '規則的認知は決定性をもたらしますが、空間記憶がないため無駄な周回ループを自覚できません。'
      },
      parallaxContrast: {
        zh: '类似传统的单体 Linter 规则：能杜绝低级格式错误，但对复杂的架构死锁与隐式业务缺陷无能为力。',
        en: 'Resembles basic linters: catches formatting syntax but remains blind to architectural deadlocks.',
        ja: '静的解析ルールと同様：構文エラーは防げても、アーキテクチャのデッドロックには無力です。'
      }
    },
    quote: {
      zh: '“有规则总比没规则好，但机械的规则只会换来机械的浪费。”',
      en: '"Rules beat chaos, but mechanical adherence produces mechanical waste."',
      ja: '「ルールは無秩序より勝るが、機械的な遵守は機械的な浪費を生む。」'
    }
  },
  {
    round: 3,
    name: 'Round 3',
    title: {
      zh: 'Round 3: 记忆回溯 (Memory & Backtracking)',
      en: 'Round 3: Spatial Memory & DFS Backtracking',
      ja: 'Round 3: 記憶保持とバックトラッキング'
    },
    strategyName: {
      zh: '记忆回溯 (Memory & Backtracking)',
      en: 'Memory & Backtracking',
      ja: '記憶とバックトラッキング'
    },
    mazeDimension: 11,
    mazeSizeLabel: '11×11',
    description: {
      zh: '突破性引入空间记忆与已探索标记。绝不二次踏入死胡同，遇阻即按栈结构干净回退，效率大幅跃升。',
      en: 'Breakthrough: introduces spatial memory and visited sets. Never re-enters dead ends, backtracks cleanly on obstruction.',
      ja: '空間記憶と訪問済みスタックを導入。袋小路への再突入をゼロにし、分岐点へ迅速にバックトラックします。'
    },
    strategyDna: {
      direction: 'depth-first-search',
      memory: 'visited-set (hash-map)',
      lookahead: '1 step',
      backtrack: 'strict LIFO stack'
    },
    baselineSteps: 31,
    baselineDeadEnds: 3,
    evolutionScore: 58,
    variants: [
      {
        id: 'v7',
        name: 'Variant A (+Greedy Manhattan Heuristic)',
        strategy: '+greedy-heuristic (曼哈顿距离引导)',
        predicted: '18 steps, 1 dead end',
        confidence: 89,
        selected: true,
        tag: 'Recommended Mutation',
        description: '岔路口引入目标距离评估，优先朝向终点方向突破。'
      },
      {
        id: 'v8',
        name: 'Variant B (+Branch Pruning)',
        strategy: '+deep-pruning (深层无效分支剪枝)',
        predicted: '24 steps, 2 dead ends',
        confidence: 66,
        selected: false,
        tag: 'Complex',
        description: '提前评估分支深度，虽然准确但计算代价偏高。'
      },
      {
        id: 'v9',
        name: 'Variant C (+Bidirectional Search)',
        strategy: '+bidirectional (起终点双向碰头)',
        predicted: '27 steps, 2 dead ends',
        confidence: 59,
        selected: false,
        tag: 'Experimental',
        description: '尝试双向探索，但在无全局图信息时通信成本过重。'
      }
    ],
    insight: {
      core: {
        zh: '“记忆”是智能体脱离低级反射的关键。知道“哪里走不通”，比仅仅知道“怎么往前走”更加重要。',
        en: 'Memory is the gateway from reflex to intelligence. Knowing where not to go outweighs merely moving forward.',
        ja: '「記憶」は反射から知性への跳躍点。「どこが行き止まりか」を知ることは、前進すること以上に重要です。'
      },
      parallaxContrast: {
        zh: '对应 Parallax 的 只增工程账本 (Append-Only Ledger)：所有探索、审计与被否决的方案均被完整记录，杜绝团队重蹈覆辙。',
        en: 'Mirrors Parallax Append-Only Ledger: rejected paths and audit notes are sealed, preventing teams from repeating mistakes.',
        ja: 'Parallaxの「追記専用台帳」に対応：失敗した試行や棄却案が記録され、同じ過ちの再発を根絶します。'
      }
    },
    quote: {
      zh: '“记住失败，是通往成功最短的捷径。”',
      en: '"Remembering failure is the shortest shortcut to success."',
      ja: '「失敗を記憶することこそ、成功への最も確実な近道である。」'
    }
  },
  {
    round: 4,
    name: 'Round 4',
    title: {
      zh: 'Round 4: 贪心预判 (Greedy + Lookahead)',
      en: 'Round 4: Greedy Heuristic & Multi-Step Lookahead',
      ja: 'Round 4: 貪欲ヒューリスティックと先読み'
    },
    strategyName: {
      zh: '贪心预判 (Greedy + Lookahead)',
      en: 'Greedy Heuristic & Lookahead',
      ja: '貪欲先読み (A* Lookahead)'
    },
    mazeDimension: 13,
    mazeSizeLabel: '13×13',
    description: {
      zh: '具备长程预判能力（Lookahead 3 步）。在每一个岔路口优先评估更靠近终点的支路，行进轨迹极具目的性。',
      en: 'Empowered with multi-step lookahead. Evaluates proximity heuristics at every fork, moving with clear intention.',
      ja: '3ステップ先読みを搭載。すべての分岐路でゴールへの距離を評価し、確信を持って最短候補路を選択します。'
    },
    strategyDna: {
      direction: 'a-star-heuristic',
      memory: 'visited + dead-zones',
      lookahead: '3 steps horizon',
      backtrack: 'priority queue'
    },
    baselineSteps: 18,
    baselineDeadEnds: 1,
    evolutionScore: 81,
    variants: [
      {
        id: 'v10',
        name: 'Variant A (+Global Topological Planning)',
        strategy: '+topological-scan (全局拓扑扫描与测地线)',
        predicted: '11 steps, 0 dead ends',
        confidence: 97,
        selected: true,
        tag: 'Recommended Mutation',
        description: '在步入迷宫前完成拓扑图解析，直接计算全局全局最优路线。'
      },
      {
        id: 'v11',
        name: 'Variant B (+Dynamic Replanning)',
        strategy: '+dynamic-dijkstra (动态 Dijkstra)',
        predicted: '14 steps, 0 dead ends',
        confidence: 91,
        selected: false,
        tag: 'Sub-optimal',
        description: '实时重算权值，虽然稳健但无法享受全局视角的算力跃迁。'
      },
      {
        id: 'v12',
        name: 'Variant C (+Macro Chunking)',
        strategy: '+macro-cluster (宏观区块分级压缩)',
        predicted: '15 steps, 1 dead end',
        confidence: 75,
        selected: false,
        tag: 'Approximation',
        description: '将迷宫切分为宏观房间，丢失局部最优细节。'
      }
    ],
    insight: {
      core: {
        zh: '从“被动遇阻后回撤”转变为“主动预判可能性”。试错成本被前置计算抹平，步数逼近理论几何极限。',
        en: 'Transitions from reactive recovery to proactive anticipation. Trial-and-error cost is flattened by upfront lookahead.',
        ja: '「失敗して戻る」から「事前に予測して回避する」へ転換。試行錯誤コストが事前計算により激減します。'
      },
      parallaxContrast: {
        zh: '对应 Parallax 的 盲审对抗设计：Model B 在 Model A 交付前就做边界测试预判，将 95% 的潜伏 Bug 拦截在第一轮。',
        en: 'Mirrors Parallax Adversarial Challenge: Model B audits edge cases before code merges, preempting 95% of regressions.',
        ja: 'Parallaxの敵対的監査に相当：Model Bが事前に境界テストを実施し、不具合の95%を未然に阻止します。'
      }
    },
    quote: {
      zh: '“看清三步之后，眼前的迷茫便不复存在。”',
      en: '"When you see three moves ahead, the fog of the maze dissipates."',
      ja: '「三手先を見据える者に、迷路の霧は存在しない。」'
    }
  },
  {
    round: 5,
    name: 'Round 5',
    title: {
      zh: 'Round 5: 全局规划 (Global Topological Planning)',
      en: 'Round 5: Global Topological Planning & Geodesic Path',
      ja: 'Round 5: 全局位相空間プランニング'
    },
    strategyName: {
      zh: '全局规划 (Global Planning)',
      en: 'Global Topological Planning',
      ja: '全局最適プランニング'
    },
    mazeDimension: 15,
    mazeSizeLabel: '15×15',
    description: {
      zh: '进入迷宫前先完成全局拓扑雷达扫描。零试错、零死胡同，直接沿测地线以最短步数抵达终点，展示 RSI 的终极形态。',
      en: 'Executes a global topological scan prior to movement. Zero wasted steps, zero dead ends — navigating the true geodesic.',
      ja: '進入前に迷路の全トポロジーをスキャン。試行錯誤ゼロ、行き止まりゼロで、測地線に沿って最短経路を直進します。'
    },
    strategyDna: {
      direction: 'global-optimal-geodesic',
      memory: 'complete-graph (hyper-graph)',
      lookahead: 'infinite (whole maze)',
      backtrack: 'zero-overhead'
    },
    baselineSteps: 11,
    baselineDeadEnds: 0,
    evolutionScore: 98,
    variants: [
      {
        id: 'v13',
        name: 'Variant A (Meta-Evolution Loop ∞)',
        strategy: 'Recursive Metacognition (自我改进引擎自身的自改进)',
        predicted: '∞ (Self-Synthesizing Intelligence)',
        confidence: 99,
        selected: true,
        tag: 'Endgame Vision',
        description: '当迷宫变得更难，Agent 进化的速度比环境复杂度增长更快。'
      },
      {
        id: 'v14',
        name: 'Variant B (Swarm Collective)',
        strategy: 'Autonomous Swarm Consensus',
        predicted: 'Sub-second Convergence',
        confidence: 96,
        selected: false,
        tag: 'Multi-Agent',
        description: '多智能体分形蜂群自组织，全域并行。'
      },
      {
        id: 'v15',
        name: 'Variant C (Quantum Superposition)',
        strategy: 'Probabilistic Wave Collapse',
        predicted: 'Physical Theoretical Limit',
        confidence: 93,
        selected: false,
        tag: 'Theoretical',
        description: '概率波坍缩直接锁定全局最优态。'
      }
    ],
    insight: {
      core: {
        zh: '剪刀差效应在此完全爆发：尽管迷宫尺寸翻倍（15×15），但步数却缩减至绝对极限（11步）。环境变难，智能进化更快。',
        en: 'The Scissors Effect reaches full climax: despite doubled maze complexity, steps collapse to the theoretical minimum.',
        ja: 'ハサミ効果の極致：迷路の複雑さは増大しているにもかかわらず、ステップ数は最小極限に圧縮されます。'
      },
      parallaxContrast: {
        zh: 'Parallax 的终局使命：通过双模型闭环自审计产生高质量合成数据，推动模型实现真正的递归自我改进 (RSI)。',
        en: 'The endgame of Parallax: dual-agent verifiable ledgers feed synthetic reinforcement data, bootstrapping true RSI.',
        ja: 'Parallaxの究極のミッション：二者協調の検証済み台帳が強化学習データを生み出し、RSIを自立駆動させます。'
      }
    },
    quote: {
      zh: '“终局不是协同，而是进化本身。”',
      en: '"The ceiling isn\'t collaboration — it\'s evolution."',
      ja: '「終着点は協調ではなく、進化そのものである。」'
    }
  }
];
