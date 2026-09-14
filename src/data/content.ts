import { Language, StageInfo, RSIRound, FaqItem } from '../types';

export interface SiteContent {
  nav: {
    why: string;
    demo: string;
    proof: string;
    process: string;
    vision: string;
    howItWorks: string;
    pricing: string;
    faq: string;
    downloadMac: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    watchDemo: string;
    downloadBtn: string;
    trialBadge: string;
    interactiveTab: string;
    diagramTab: string;
  };
  mazeDemo: {
    title: string;
    subtitle: string;
    soloTitle: string;
    soloSub: string;
    parallaxTitle: string;
    parallaxSub: string;
    soloQuote: string;
    parallaxQuote: string;
    bottomTagline: string;
    flowSolo: string;
    flowParallax: string;
    startBtn: string;
    pauseBtn: string;
    resetBtn: string;
    regenerateBtn: string;
    speed: string;
    steps: string;
    deadEnds: string;
    retries: string;
    handoffs: string;
    status: string;
    statusThinking: string;
    statusStruggled: string;
    statusVerified: string;
  };
  trust: {
    label: string;
    sublabel: string;
  };
  proof: {
    quote: string;
    author: string;
    authorTitle: string;
    stat1Number: string;
    stat1Label: string;
    stat1Sub: string;
    stat2Number: string;
    stat2Label: string;
    stat2Sub: string;
    stat3Number: string;
    stat3Label: string;
    stat3Sub: string;
    dogfoodTitle: string;
    dogfoodDesc: string;
    comparisonTitle: string;
    beforeLabel: string;
    afterLabel: string;
  };
  stages: {
    badge: string;
    title: string;
    subtitle: string;
    modelALabel: string;
    modelBLabel: string;
    challengeLabel: string;
    convergenceTitle: string;
    convergenceDesc: string;
    ownershipTitle: string;
    ownershipDesc: string;
    ownershipQuote: string;
    ledgerTitle: string;
    ledgerDesc: string;
    ledgerQuote: string;
    items: StageInfo[];
  };
  vision: {
    badge: string;
    title: string;
    subtitle: string;
    quoteTop: string;
    todayTitle: string;
    todaySub: string;
    todayPrice: string;
    todayBullet1: string;
    todayBullet2: string;
    todayBullet3: string;
    tomorrowTitle: string;
    tomorrowSub: string;
    tomorrowTime: string;
    tomorrowBullet1: string;
    tomorrowBullet2: string;
    tomorrowBullet3: string;
    endgameTitle: string;
    endgameSub: string;
    endgameQuote: string;
    flywheel: string;
    interactiveTitle: string;
    interactiveDesc: string;
    evolutionStatsLabel: string;
    selectVariantLabel: string;
    dnaLabel: string;
    insightTitle: string;
    insightText: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
    quote: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    monthly: string;
    annual: string;
    saveBadge: string;
    monthlyPrice: string;
    annualPrice: string;
    perMonth: string;
    billedAnnually: string;
    cta: string;
    trialNote: string;
    tagline: string;
    features: string[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  footer: {
    desc: string;
    allRightsReserved: string;
    macOS: string;
    license: string;
    privacy: string;
    terms: string;
    documentation: string;
  };
}

export const contentData: Record<Language, SiteContent> = {
  zh: {
    nav: {
      why: "为什么需要",
      demo: "迷宫对比",
      proof: "真实证据",
      process: "六阶段协同",
      vision: "RSI终局愿景",
      howItWorks: "如何运行",
      pricing: "订阅方案",
      faq: "常见问题",
      downloadMac: "下载 Mac 客户端 ↓",
    },
    hero: {
      badge: "Vibe Coding 的工程救赎 · 通向 RSI 之桥",
      titleLine1: "Vibe coding is the entry point.",
      titleLine2: "RSI is the endgame.",
      titleLine3: "The engineering system in between is the opportunity.",
      subtitle: "直觉编码是入口，递归自我改进（RSI）是终局。而介于二者之间的工程协调系统，正是 Parallax 的使命：双模型互盲、交叉审查、证据仲裁，终结大模型的单打独斗与盲目幻觉。",
      watchDemo: "▶ 观看 30s 演示",
      downloadBtn: "下载 Mac 版客户端 (v1.4) ↓",
      trialBadge: "无需信用卡 · 免费试用 3 天 · 自带 API Key",
      interactiveTab: "交互式走迷宫演示 (Live Demo)",
      diagramTab: "对比架构图 (Architecture)",
    },
    mazeDemo: {
      title: "Same Problem. Two Approaches.",
      subtitle: "相同的代码难题，两种解法。一个在死循环里消耗 Token，另一个在交叉换手中直达终点。",
      soloTitle: "SOLO VIBE CODING（单人盲目编码）",
      soloSub: "一个模型自言自语，撞墙后在错误逻辑里反复重试，单元测试侥幸通过却掩盖了致命 Bug",
      parallaxTitle: "WITH PARALLAX（双模型工程协同）",
      parallaxSub: "Model A 探索受阻即触发 Ownership Transfer，Model B 换角接管并相互审计，证据链闭环验证",
      soloQuote: "“测试居然全绿了！但我心里知道……这代码根本跑不通。”",
      parallaxQuote: "“Model A 陷入僵局，Model B 无缝接管 → 交叉审计完成，已签名入链。✅”",
      bottomTagline: "同一迷宫：单模型盲走 147 步依旧心虚，Parallax 协作 48 步经证据确权验收。",
      flowSolo: "🧑‍💻 开始 Vibe Coding → 🧱 撞墙（假测试通过） → ↻ 盲目重试 → 😰 陷入绝境",
      flowParallax: "🧑 Model A 探索 → ↔️ 自动交接给 Model B → 🔍 独立视角发现漏洞 → 🎯 终点确实验证",
      startBtn: "开始双路模拟",
      pauseBtn: "暂停",
      resetBtn: "重置迷宫",
      regenerateBtn: "生成新迷宫",
      speed: "速度",
      steps: "探索步数",
      deadEnds: "死胡同",
      retries: "死循环重试",
      handoffs: "视角换手 (Handoff)",
      status: "状态",
      statusThinking: "探索中...",
      statusStruggled: "😰 陷入逻辑死循环",
      statusVerified: "✅ 经证据确实验证",
    },
    trust: {
      label: "BUILT WITH PARALLAX. VERIFIED BY PARALLAX.",
      sublabel: "支持原生接入你信赖的顶尖模型 · 本地隐私执行 · 零代码外传",
    },
    proof: {
      quote: "“AI 写代码的速度确实快得吓人，但盯着 AI 犯错、排查它自欺欺人的幻觉，比我自己一行行手写代码还要疲惫一百倍。”",
      author: "慧红 (Huihong)",
      authorTitle: "前 Google 资深工程师 · Parallax 联合创作者",
      stat1Number: "16 轮交互",
      stat1Label: "跨厂商互审发现 5 个真实隐蔽缺陷",
      stat1Sub: "单模型测试全部声称 PASS，两模型对抗审计后瞬间现形",
      stat2Number: "12 轮 → 2 轮",
      stat2Label: "自动所有权交接彻底打断死循环",
      stat2Sub: "当 Model A 修复卡住超过阈值，立即换由 Model B 从新视角秒解",
      stat3Number: "100%",
      stat3Label: "Parallax 由 Parallax 全程自举开发 (Dogfooding)",
      stat3Sub: "自身 40,000+ 行核心协同代码全部通过双模型闭环签名审查",
      dogfoodTitle: "吃自己的狗粮 (Dogfooding)",
      dogfoodDesc: "Parallax 不是空中楼阁。它的整个编译器、状态协调机、本地加密账本，全部由 Claude 3.7 与 DeepSeek R1 依托 Parallax 自身流程开发并互审通过。",
      comparisonTitle: "真实的跨模型审计截屏：",
      beforeLabel: "单模型 Vibe Coding（单方面粉饰太平）",
      afterLabel: "Parallax 交叉验证（刺刀见红，找出真实竞态条件）",
    },
    stages: {
      badge: "SIX STAGES WORKFLOW",
      title: "Blind First. Compare Second. Evidence Decides.",
      subtitle: "六个工程阶段。两套独立模型互盲思考，彼此发起 Challenge，唯有证据能够决定代码是否晋级。",
      modelALabel: "MODEL A（主构想/首轮推进）",
      modelBLabel: "MODEL B（独立视点/对抗审计）",
      challengeLabel: "CHALLENGE 盲审质询",
      convergenceTitle: "CONVERGENCE ZONE（收敛区）",
      convergenceDesc: "两方方案独立完成后在收敛区汇合比对。如果发生分歧，禁止用模型口才说服对方，必须提供确定性的运行证据（测试用例/反例/类型证明）方可裁定。",
      ownershipTitle: "⚡ OWNERSHIP TRANSFER（所有权交接）",
      ownershipDesc: "当 Model A 在修复一个 bug 上失败超过设定轮次（通常 2-3 次）：Parallax 会强制剥夺 A 的尝试权，连同完整的失败上下文交由 Model B 主导。换一个全新的上下文视角，原本需要 12 轮挣扎的死循环往往在第 2 轮迎刃而解。",
      ownershipQuote: "“这是整套系统里最省 Token、也最能拯救开发者心智的黄金机制。”",
      ledgerTitle: "📋 APPEND-ONLY LEDGER（只增工程账本）",
      ledgerDesc: "每一个阶段的决定：都带有两方模型的签名、时间戳、上下文 Hash 以及通过的证据用例。你得到的不只是一堆脆弱的代码，而是一份可复盘、可溯源的工业级工程记录。",
      ledgerQuote: "“不是又一个飘散的聊天记录，而是一本严谨的工程手稿。”",
      items: [
        {
          id: "01",
          number: "01",
          title: "UNDERSTAND 目标理解",
          modelA: {
            role: "Model A",
            action: "解析业务目标、提炼先验假设与潜在风险清单",
            details: "提炼核心约束：并发吞吐量必须大于 10k QPS，本地持久化延迟小于 2ms。"
          },
          modelB: {
            role: "Model B",
            action: "在完全互盲状态下独立解读目标，形成对立视角",
            details: "指出 Model A 忽略的边界：客户端突然断网重连时的状态机死锁风险。"
          },
          challenge: "B 质询 A：“你把内存读写假设为无竞争，但这无法满足跨进程协同。”",
          convergence: "统一业务意图基准线，将断网重连明确纳入必须验证的硬性指标。",
          ledgerRecord: "Hash: 0x8f2a... · [SIGNED: A, B] · 目标规格冻结"
        },
        {
          id: "02",
          number: "02",
          title: "DEFINE 规格定义",
          modelA: {
            role: "Model A",
            action: "建立严格的问题模型与成功验收准则 (Acceptance Criteria)",
            details: "定义数据结构 Schema、状态迁移矩阵及异常枚举。"
          },
          modelB: {
            role: "Model B",
            action: "针对 A 的准则寻找反例与漏洞，提出边界用例",
            details: "针对 Schema 提出版本迁移兼容性不足的证据用例。"
          },
          challenge: "B 提交 3 个反例输入，证明 A 的迁移方案会导致历史脏数据溢出。",
          convergence: "修正字段可选性约束，通过双方确认的无歧义形式化规范。",
          ledgerRecord: "Hash: 0x3c91... · [SIGNED: A, B] · 验收用例 24/24 锁定"
        },
        {
          id: "03",
          number: "03",
          title: "DESIGN 架构设计",
          modelA: {
            role: "Model A",
            action: "给出架构设计案 A（分层模块、通信协议与接口）",
            details: "基于 Actor 模型的无锁消息队列设计方案。"
          },
          modelB: {
            role: "Model B",
            action: "给出对抗架构案 B，评估系统复杂度与维护成本",
            details: "证明在客户端场景下，纯函数式状态机比 Actor 模型更轻量且易于测试。"
          },
          challenge: "B 指出 Actor 调度在 WASM 编译目标下的线程安全隐患。",
          convergence: "结合双方优势，采用事件溯源 + 纯函数式状态机混合架构。",
          ledgerRecord: "Hash: 0x9b41... · [SIGNED: A, B] · 架构决策 ADR-007 确认"
        },
        {
          id: "04",
          number: "04",
          title: "BUILD 协同编码",
          modelA: {
            role: "Model A",
            action: "负责上层逻辑编排、交互接口与对外 API 实现",
            details: "编写无副作用的状态派生函数与事件派发总线。"
          },
          modelB: {
            role: "Model B",
            action: "负责底层核心引擎、数据一致性校验与边界防御代码",
            details: "编写并发原子操作、持久化回滚逻辑与单元测试套件。"
          },
          challenge: "A 与 B 独立编写各自模块，并在集成点自动触发契约测试。",
          convergence: "接口通过双方端到端联调测试，编译零警告，覆盖率达 94%。",
          ledgerRecord: "Hash: 0x7e12... · [SIGNED: A, B] · 编译构建产物通过"
        },
        {
          id: "05",
          number: "05",
          title: "VERIFY 交叉审计",
          modelA: {
            role: "Model A",
            action: "换位审查 Model B 代码：针对初始目标反查漏洞",
            details: "查出 B 在高负载下缺乏退避重试，可能导致重试风暴。"
          },
          modelB: {
            role: "Model B",
            action: "换位审查 Model A 代码：执行动态模糊测试与内存审计",
            details: "查出 A 在未释放句柄处存在偶发内存泄露（单模型单元测试测不出）。"
          },
          challenge: "双方互相打回补丁，触发 ⚡ Ownership Transfer 秒级修复。",
          convergence: "两处真实缺陷被彻底修补，5 组跨厂商模糊测试全部 PASS。",
          ledgerRecord: "Hash: 0x4d55... · [SIGNED: A, B] · 审计报告生成"
        },
        {
          id: "06",
          number: "06",
          title: "DELIVER 验收入库",
          modelA: {
            role: "Model A",
            action: "生成自包含的部署包与向后兼容性验证报告",
            details: "确认无外部未定义依赖，所有接口符合语义化版本。"
          },
          modelB: {
            role: "Model B",
            action: "进行终验签名，并与 A 共同把执行过程记录入本地账本",
            details: "向只增账本写入决策依据、审查日志与自动化测试结果。"
          },
          challenge: "双重密码学哈希比对无篡改，完成最终验收交付。",
          convergence: "代码产出已准备就绪，包含完整的工程确信度证明。",
          ledgerRecord: "Hash: 0x11ff... · [FINAL COMMIT SEALED] · 代码交付就绪"
        }
      ]
    },
    vision: {
      badge: "THE ENDGAME VISION",
      title: "From Collaboration to Evolution",
      subtitle: "The maze gets harder. The agent gets smarter faster.",
      quoteTop: "“Parallax 展示了两个 Agent 协同能做到什么；而 RSI 则展示了一个 Agent 最终能变成什么。”",
      todayTitle: "TODAY — PARALLAX",
      todaySub: "双模型交叉互审 · 证据裁决 · 消除单体盲区",
      todayPrice: "$19/月 · 现已发布",
      todayBullet1: "两个模型互为镜像与考官，死胡同减少 80%",
      todayBullet2: "所有权交接机制，将死循环从 12 轮砍至 2 轮",
      todayBullet3: "天花板：人机协作与跨模型协同的最高形态",
      tomorrowTitle: "TOMORROW — RSI",
      tomorrowSub: "单体递归变异 · 自我淘汰进化 · 剪刀差跃迁",
      tomorrowTime: "证据驱动 · 18 个月路线图",
      tomorrowBullet1: "Agent 不仅解决问题，更能升级「解决问题的方法」",
      tomorrowBullet2: "变异池与适应度筛选：迷宫越来越难，Agent 进化得更快",
      tomorrowBullet3: "天花板：不再依赖外部协助，走向自我迭代",
      endgameTitle: "THE ENDGAME",
      endgameSub: "AI 改进自身用于「自我改进」的过程",
      endgameQuote: "“人类编写的最后一个 AI，是一个能够编写更好 AI 的系统。天花板从来不是协作，而是进化。”",
      flywheel: "每个工程项目 → 沉淀结构化证据 → 强化模型审计能力 → 生成更高质量证据 → 驱动 RSI 飞轮",
      interactiveTitle: "RSI 迷宫进化沙盒（5 轮迭代模拟）",
      interactiveDesc: "点击体验：看 Agent 如何在每一轮中从失败中吸取教训，从 7x7 盲走到 15x15 全局规划，展现「剪刀差」奇迹。",
      evolutionStatsLabel: "进化历程数据对比：",
      selectVariantLabel: "变异池选择 (Mutation Pool)：",
      dnaLabel: "策略基因序列 (Strategy DNA)：",
      insightTitle: "你刚刚看到了什么：",
      insightText: "在第 1 轮中，Agent 毫无策略，乱撞一通；在第 5 轮中，面对尺寸翻倍的复杂迷宫，它甚至无需试错即可一步直达终点。Parallax 现在给你两个互补的顶尖大脑；而 RSI 将赋予你一个能够自我指数级进化的工程智能体。"
    },
    howItWorks: {
      badge: "FOUR SIMPLE STEPS",
      title: "How It Works",
      subtitle: "极简四步即可投入使用。你提供模型，Parallax 保证工程确信度。",
      steps: [
        {
          number: "01",
          title: "下载桌面客户端",
          desc: "支持 macOS (Apple Silicon / Intel)、Linux 与 Windows。单文件二进制，开箱即用。"
        },
        {
          number: "02",
          title: "填入你的模型 API Keys",
          desc: "支持 Claude、OpenAI、DeepSeek、MiniMax、Gemini 等任意两个模型。密钥纯本地存储，直连模型官方接口。"
        },
        {
          number: "03",
          title: "描述你的业务目标与代码需求",
          desc: "无论是新建全栈应用、重构底层模块，还是排查幽灵并发 Bug，自然语言输入即可。"
        },
        {
          number: "04",
          title: "Parallax 接管双模型工程全流程",
          desc: "互盲构思、跨厂商代码审计、所有权自动换手、签名证据交付，静候高质量代码出炉。"
        }
      ],
      quote: "“You bring the models. Parallax engineers the outcome.”"
    },
    pricing: {
      badge: "FAIR & TRANSPARENT",
      title: "专注本地协同，定价绝不掺水",
      subtitle: "不按 Token 抽水，不绑架你的代码。你的机器，你的模型，我们只做最极致的工程编排调度。",
      monthly: "按月订阅",
      annual: "按年订阅",
      saveBadge: "立省 15% · 相当于送 2 个月",
      monthlyPrice: "$19",
      annualPrice: "$199",
      perMonth: "/ 月",
      billedAnnually: "按年一次性支付 $199，折合每月仅 $16.5",
      cta: "免费开启 3 天全功能试用",
      trialNote: "无需绑定信用卡 · 试用期可随时下载 · 个人与商业项目通用",
      tagline: "“Your keys. Your code. Your machine. We coordinate.”",
      features: [
        "无限本地协同会话，无限制代码库大小",
        "自由组合任意两个支持的 LLM 模型",
        "独家 ⚡ Ownership Transfer 自动解卡死机制",
        "独家 📋 本地 Append-only 密码学工程账本",
        "100% 本地运行，代码零泄露，直连官方 API",
        "六阶段标准工程流水线（理解到交付）",
        "优先获取 RSI 进化沙盒与下一代演化功能测试权"
      ]
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "关于 Parallax 的一切疑问",
      subtitle: "深入了解双模型协同与传统单体 AI 编码助手的本质区别。",
      items: [
        {
          tag: "核心差异",
          question: "我已经买了 Cursor 或 Windsurf，为什么还需要 Parallax？",
          answer: "Cursor 和 Windsurf 是优秀的单模型编辑器集成工具，但本质上依然是「单个模型的独角戏」。当同一个模型陷入某种思维定势时，它会不断编写满足自己假设的单元测试，告诉你「Tests Passed!」但实际逻辑错误。Parallax 不是编辑器，而是工程协同层——它调动两个厂商的独立模型互盲思考、互相挑刺。单模型看不到自己的死角，但两只独立的眼睛可以。"
        },
        {
          tag: "技术原理",
          question: "Ownership Transfer（所有权交接）到底是如何切断死循环的？",
          answer: "在传统的 AI 调试中，当模型 A 第一次改错了，开发者在聊天框里说「不对，再试一次」。模型 A 会带着前文的挫败记忆和原有的错误假设继续打补丁，很容易陷入 10 几轮的漫长死循环。Parallax 会在 Model A 连续 2-3 次失败后，强制触发所有权转移：把干净的目标、失败的代码和环境报错打包，移交给完全没有思维定势的 Model B。B 以全新视角切入，通常 2 轮内即可直接击穿问题。"
        },
        {
          tag: "数据安全",
          question: "我的代码和密钥会被上传到 Parallax 的服务器吗？",
          answer: "绝对不会。Parallax 采用 Local-First（本地优先）纯客户端架构。所有双模型的调度、工程账本、文件修改全在你的本机完成。你输入的 API Keys 直接从你的电脑向 Anthropic、OpenAI、DeepSeek 等发起 HTTPS 请求。Parallax 没有中间人代理，不收集你的代码，零代码遥测。"
        },
        {
          tag: "模型组合",
          question: "推荐使用哪两组模型搭配？成本会翻倍吗？",
          answer: "推荐组合：① Claude 3.7 Sonnet + DeepSeek R1（兼具极强工程实现力与深度推理刺挑能力，且极具性价比）；② OpenAI o3/GPT-4.5 + Claude 3.7（顶配旗舰组合）。虽然两套模型看似调用两次，但由于 Ownership Transfer 砍掉了大量盲目尝试的无效轮次（12 轮降为 2 轮），总 Token 消耗反而大幅下降！"
        },
        {
          tag: "未来演进",
          question: "Parallax 与 RSI（递归自我改进）是什么关系？",
          answer: "Parallax 是通往 RSI 的基石。现在的 Parallax 解决了「跨模型协作与真实验证」的工程数据流闭环；这套闭环所沉淀下来的每一个决策、每一次失败与修复证据，正是未来智能体进行「自我变异与选择」所需的真实训练场。从今天的协作，平滑过渡到明天的自进化。"
        }
      ]
    },
    footer: {
      desc: "Parallax 是面向现代软件工程的多模型协同层。直觉编码是入口，RSI 是终局，我们为工程师打造最可靠的代码护城河。",
      allRightsReserved: "© 2026 Parallax HQ Inc. All rights reserved.",
      macOS: "macOS 12.0+ (Apple Silicon & Intel)",
      license: "本地客户端专有许可",
      privacy: "隐私政策（零代码收集承诺）",
      terms: "服务条款",
      documentation: "开发者文档"
    }
  },
  en: {
    nav: {
      why: "Why",
      demo: "Maze Demo",
      proof: "Proof",
      process: "Six Stages",
      vision: "RSI Vision",
      howItWorks: "How It Works",
      pricing: "Pricing",
      faq: "FAQ",
      downloadMac: "Download for Mac ↓",
    },
    hero: {
      badge: "The Engineering Redemption of Vibe Coding · The Bridge to RSI",
      titleLine1: "Vibe coding is the entry point.",
      titleLine2: "RSI is the endgame.",
      titleLine3: "The engineering system in between is the opportunity.",
      subtitle: "Vibe coding gets you moving. Recursive Self-Improvement (RSI) is where intelligence is headed. Parallax is the engineering coordination layer that cross-verifies logic, eliminates model blindness, and turns vibe coding into production-grade software.",
      watchDemo: "▶ Watch 30s Demo",
      downloadBtn: "Download for Mac (v1.4) ↓",
      trialBadge: "No credit card required · 3-Day Free Trial · Bring Your Own Keys",
      interactiveTab: "Interactive Maze Demo (Live)",
      diagramTab: "System Architecture",
    },
    mazeDemo: {
      title: "Same Problem. Two Approaches.",
      subtitle: "The exact same coding challenge. One burns tokens in delusion; the other converges with verified certainty.",
      soloTitle: "SOLO VIBE CODING",
      soloSub: "One model talks to itself, hitting dead ends, retrying the same flawed assumptions. Tests pass, yet the core logic is broken.",
      parallaxTitle: "WITH PARALLAX",
      parallaxSub: "Model A hits resistance → triggers Ownership Transfer → Model B takes over with fresh eyes and audits against the ground truth.",
      soloQuote: "“The tests pass! But something feels wrong deep down...”",
      parallaxQuote: "“Model A stuck. Model B takes over → Cross-audit confirmed, verified and signed. ✅”",
      bottomTagline: "Same maze. Solo: 147 steps, uncertain. With Parallax: 48 steps, cryptographically verified.",
      flowSolo: "🧑‍💻 Start Vibe Coding → 🧱 Hit a Wall (False Pass) → ↻ Blind Retry Loop → 😰 Trapped",
      flowParallax: "🧑 Model A Explores → ↔️ Auto-Handoff to Model B → 🔍 Fresh Eyes Find Flaw → 🎯 Verified Goal",
      startBtn: "Run Both Simulations",
      pauseBtn: "Pause",
      resetBtn: "Reset Maze",
      regenerateBtn: "Generate New Maze",
      speed: "Speed",
      steps: "Steps Taken",
      deadEnds: "Dead Ends",
      retries: "Retry Loops",
      handoffs: "Ownership Transfers",
      status: "Status",
      statusThinking: "Navigating...",
      statusStruggled: "😰 Trapped in logic loop",
      statusVerified: "✅ Cryptographically Verified",
    },
    trust: {
      label: "BUILT WITH PARALLAX. VERIFIED BY PARALLAX.",
      sublabel: "Works natively with the frontier models you already trust · Local execution · Zero code telemetry",
    },
    proof: {
      quote: "“AI writes code fast, but watching AI make confident mistakes and hallucinate green tests is more exhausting than writing the code myself.”",
      author: "Huihong",
      authorTitle: "Ex-Google Senior Engineer · Parallax Co-Creator",
      stat1Number: "16 Exchanges",
      stat1Label: "Cross-vendor audit uncovered 5 fatal hidden defects",
      stat1Sub: "Single model declared all unit tests green; dual-agent adversarial audit exposed them instantly",
      stat2Number: "12 Rounds → 2",
      stat2Label: "Automated Ownership Transfer breaks hallucination loops",
      stat2Sub: "When Model A fails repeatedly on a patch, Model B steps in with a fresh angle and solves it in 2 rounds",
      stat3Number: "100%",
      stat3Label: "Parallax was built using Parallax (True Dogfooding)",
      stat3Sub: "All 40,000+ lines of core coordination, state machine, and ledger code were authored and reviewed by dual agents",
      dogfoodTitle: "Dogfooding at Scale",
      dogfoodDesc: "Parallax is not a wrapper. Its entire compiler, state synchronization engine, and cryptographic ledger were designed and co-audited by Claude 3.7 and DeepSeek R1 operating under Parallax protocols.",
      comparisonTitle: "Real-World Cross-Audit Trace:",
      beforeLabel: "Solo Model Vibe Coding (Papering over defects)",
      afterLabel: "Parallax Cross-Verification (Adversarial stress test)",
    },
    stages: {
      badge: "SIX STAGES WORKFLOW",
      title: "Blind First. Compare Second. Evidence Decides.",
      subtitle: "Six engineering stages. Two models reason independently, challenge assumptions, and let deterministic evidence dictate progression.",
      modelALabel: "MODEL A (Hypothesis & Lead)",
      modelBLabel: "MODEL B (Adversarial Audit)",
      challengeLabel: "BLIND CHALLENGE",
      convergenceTitle: "CONVERGENCE ZONE",
      convergenceDesc: "Independent outputs converge in the arbitration zone. If models disagree, neither is allowed to 'talk the other down'. Concrete runtime evidence (reproduction scripts, type proofs) decides the winner.",
      ownershipTitle: "⚡ OWNERSHIP TRANSFER",
      ownershipDesc: "When Model A fails N times on a bug fix (typically 2-3 attempts): Parallax strips Model A of ownership and transfers full context to Model B. With zero bias from past failed attempts, Model B solves it in 2 rounds instead of 12.",
      ownershipQuote: "“The single greatest token-saving and sanity-preserving mechanism in the system.”",
      ledgerTitle: "📋 APPEND-ONLY LEDGER",
      ledgerDesc: "Every milestone is signed by both models, cryptographically hashed, and recorded in a local ledger. Not an ephemeral chat history, but a reproducible engineering record.",
      ledgerQuote: "“Not another fleeting chat log. A permanent engineering record.”",
      items: [
        {
          id: "01",
          number: "01",
          title: "UNDERSTAND Problem Alignment",
          modelA: {
            role: "Model A",
            action: "Extracts business goals, identifies assumptions, maps risks",
            details: "Frames key SLA: concurrency must sustain 10k QPS with local persistence latency < 2ms."
          },
          modelB: {
            role: "Model B",
            action: "Interprets goals blindly without seeing Model A's draft",
            details: "Flags unstated edge cases: client reconnect packet storm and potential state machine deadlock."
          },
          challenge: "B challenges A: 'You assume thread-safe in-memory cache, but multi-process sync violates this.'",
          convergence: "Baseline requirements codified with explicit network-drop recovery scenarios.",
          ledgerRecord: "Hash: 0x8f2a... · [SIGNED: A, B] · Requirements baseline locked"
        },
        {
          id: "02",
          number: "02",
          title: "DEFINE Problem Modeling",
          modelA: {
            role: "Model A",
            action: "Defines formal problem model and acceptance criteria",
            details: "Specifies data schema, state transitions, and error enum matrix."
          },
          modelB: {
            role: "Model B",
            action: "Stress-tests A's criteria by formulating adversarial edge cases",
            details: "Constructs schema migration failure scenario with backward compatibility break."
          },
          challenge: "B produces 3 counter-examples where A's data model causes silent payload truncation.",
          convergence: "Field optionality constraints revised and validated against formal contract.",
          ledgerRecord: "Hash: 0x3c91... · [SIGNED: A, B] · 24/24 Acceptance Criteria sealed"
        },
        {
          id: "03",
          number: "03",
          title: "DESIGN Architecture",
          modelA: {
            role: "Model A",
            action: "Proposes Architecture A (Modular pipeline with Actor messaging)",
            details: "Lock-free message queue based on virtual actor mailboxes."
          },
          modelB: {
            role: "Model B",
            action: "Counter-proposes Architecture B, analyzing runtime complexity",
            details: "Demonstrates that pure-function state machines avoid WASM thread serialization overhead."
          },
          challenge: "B points out critical thread safety issues in Actor scheduling under browser WASM targets.",
          convergence: "Hybrid architecture chosen: Event-sourced log with pure-function state reduction.",
          ledgerRecord: "Hash: 0x9b41... · [SIGNED: A, B] · ADR-007 ratified"
        },
        {
          id: "04",
          number: "04",
          title: "BUILD Co-Implementation",
          modelA: {
            role: "Model A",
            action: "Implements presentation logic, API endpoints, and event bus",
            details: "Pure event dispatchers and reactive state bindings."
          },
          modelB: {
            role: "Model B",
            action: "Implements core engine, transactional rollback, and test suites",
            details: "Atomic persistence, crash-recovery checkpoints, and integration tests."
          },
          challenge: "A & B build decoupled modules, automatically tested against cross-boundary contracts.",
          convergence: "Modules link with 0 compiler warnings and 94% test branch coverage.",
          ledgerRecord: "Hash: 0x7e12... · [SIGNED: A, B] · Build artifacts compiled"
        },
        {
          id: "05",
          number: "05",
          title: "VERIFY Cross-Vendor Audit",
          modelA: {
            role: "Model A",
            action: "Audits Model B's code against initial SLA and contract",
            details: "Discovers that B lacks exponential backoff, risking connection starvation under load."
          },
          modelB: {
            role: "Model B",
            action: "Audits Model A's code with fuzzing and memory leak checks",
            details: "Uncovers unclosed stream handles that single-agent tests completely masked."
          },
          challenge: "Both models exchange patches; ⚡ Ownership Transfer clears remaining friction in 1 round.",
          convergence: "Both flaws fixed; 5 cross-vendor fuzzy stress tests pass cleanly.",
          ledgerRecord: "Hash: 0x4d55... · [SIGNED: A, B] · Security & correctness audit cleared"
        },
        {
          id: "06",
          number: "06",
          title: "DELIVER Sealed Release",
          modelA: {
            role: "Model A",
            action: "Generates self-contained package and compatibility matrix",
            details: "Verifies zero undeclared dependencies and SemVer adherence."
          },
          modelB: {
            role: "Model B",
            action: "Performs final cryptographic sign-off into local ledger",
            details: "Appends execution audit trail, test seeds, and hash proofs."
          },
          challenge: "Double-hash verification passes; no uncommitted drift detected.",
          convergence: "Deliverable ready with complete proof of engineering confidence.",
          ledgerRecord: "Hash: 0x11ff... · [FINAL COMMIT SEALED] · Artifact ready for deployment"
        }
      ]
    },
    vision: {
      badge: "THE ENDGAME VISION",
      title: "From Collaboration to Evolution",
      subtitle: "The maze gets harder. The agent gets smarter faster.",
      quoteTop: "“Parallax shows what two agents can do together. RSI shows what one agent can become.”",
      todayTitle: "TODAY — PARALLAX",
      todaySub: "Two Agents · Cross-Verification · Evidence",
      todayPrice: "$19/mo · Live now",
      todayBullet1: "Two agents act as mirrors and auditors; dead ends drop by 80%",
      todayBullet2: "Ownership transfer cuts debugging loops from 12 rounds to 2",
      todayBullet3: "Ceiling: The pinnacle of human-AI & multi-model collaboration",
      tomorrowTitle: "TOMORROW — RSI",
      tomorrowSub: "Self-Mutation · Fitness Selection · Self-Improvement",
      tomorrowTime: "Evidence-driven · 18-month roadmap",
      tomorrowBullet1: "Agents do not just solve tasks; they upgrade HOW they solve them",
      tomorrowBullet2: "Mutation pool & selection: The maze gets harder, but the agent learns faster",
      tomorrowBullet3: "Ceiling: Autonomous evolution without external intervention",
      endgameTitle: "THE ENDGAME",
      endgameSub: "AI improves its own improvement loop (Recursive)",
      endgameQuote: "“The last AI built by humans will be the one that designs a better AI. The ceiling isn't collaboration — it's evolution.”",
      flywheel: "Every project → Structured evidence → Better audit models → Higher grade evidence → RSI flywheel",
      interactiveTitle: "RSI Maze Evolution Sandbox (5-Round Simulation)",
      interactiveDesc: "Explore how an agent evolves from 7x7 blind random walking to 15x15 global foresight planning, illustrating the 'scissors curve' in action.",
      evolutionStatsLabel: "Evolution Metrics Progression:",
      selectVariantLabel: "Mutation Pool (Selection):",
      dnaLabel: "Strategy DNA Sequence:",
      insightTitle: "What You Just Witnessed:",
      insightText: "In Round 1, the agent possessed zero strategy and bumped into walls aimlessly. By Round 5, despite the maze doubling in difficulty, it navigates directly to the goal with surgical precision. Today, Parallax provides two synchronized minds; tomorrow, RSI delivers an agent that evolves exponentially."
    },
    howItWorks: {
      badge: "FOUR SIMPLE STEPS",
      title: "How It Works",
      subtitle: "Get running in minutes. You bring the models. Parallax engineers the outcome.",
      steps: [
        {
          number: "01",
          title: "Download the Mac Client",
          desc: "Universal binary for Apple Silicon (M1–M4) and Intel. Also available on Linux & Windows."
        },
        {
          number: "02",
          title: "Add your Model API Keys",
          desc: "Plug in any two providers: Anthropic, OpenAI, DeepSeek, Google, or local Ollama. Keys stay local."
        },
        {
          number: "03",
          title: "Describe your goal or bug",
          desc: "From greenfield microservices to elusive multi-threaded race conditions, describe what you need."
        },
        {
          number: "04",
          title: "Parallax orchestrates dual-agent delivery",
          desc: "Blind drafts, cross-vendor audits, ownership handoffs, and cryptographically verified output."
        }
      ],
      quote: "“You bring the models. Parallax engineers the outcome.”"
    },
    pricing: {
      badge: "FAIR & TRANSPARENT",
      title: "Engineered for local developers. Zero markup on tokens.",
      subtitle: "We don't sell tokens or hold your code hostage. Your machine, your keys, our coordination engine.",
      monthly: "Monthly",
      annual: "Annual",
      saveBadge: "Save 15% · 2 months free",
      monthlyPrice: "$19",
      annualPrice: "$199",
      perMonth: "/ month",
      billedAnnually: "Billed annually at $199/yr ($16.50/mo equivalent)",
      cta: "Start 3-Day Free Trial",
      trialNote: "No credit card required · Instant download · Cancel anytime",
      tagline: "“Your keys. Your code. Your machine. We coordinate.”",
      features: [
        "Unlimited local multi-agent sessions, any repository size",
        "Mix & match any frontier models (Claude, OpenAI, DeepSeek, etc.)",
        "⚡ Automated Ownership Transfer to break hallucination loops",
        "📋 Append-Only Cryptographic Engineering Ledger",
        "100% Local-First execution — zero code leaves your machine",
        "Standardized 6-stage engineering pipeline (Understand to Deliver)",
        "Early access to RSI Evolution Sandbox & next-gen protocols"
      ]
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything you need to know about Parallax",
      subtitle: "How dual-agent cross-verification differs fundamentally from single-agent coding tools.",
      items: [
        {
          tag: "Core Difference",
          question: "I already pay for Cursor or Windsurf. Why do I need Parallax?",
          answer: "Cursor and Windsurf are phenomenal editor plugins, but they run a single model in a solitary echo chamber. When a single model makes an architectural assumption mistake, it creates test suites tailored to its own error and proudly announces 'Tests Passed!'. Parallax is an engineering coordination layer that orchestrates two different models from independent vendors. Model A cannot deceive Model B because they reason blindly and audit each other adversarially."
        },
        {
          tag: "Mechanism",
          question: "How does Ownership Transfer actually stop debugging death loops?",
          answer: "In regular AI chat, when a model fails, the user says 'that didn't work, fix it'. The same model drags its flawed mental baggage into attempt #2, #3, and #12. Parallax monitors failure frequency: after 2-3 failed iterations, it revokes Model A's control and hands the task over to Model B with fresh context. B approaches the problem from a different angle and typically resolves it in under 2 rounds."
        },
        {
          tag: "Privacy",
          question: "Does Parallax upload my proprietary code to any remote servers?",
          answer: "No. Parallax is 100% Local-First. The coordination state machine, git diffing, and cryptographic ledger execute entirely on your computer. Your API keys communicate directly via HTTPS from your machine to the respective AI providers. There is no middleman proxy, no cloud telemetry, and zero code retention."
        },
        {
          tag: "Model Pairings",
          question: "Which model pairs deliver the best results? Does it double token costs?",
          answer: "The ideal pair is Claude 3.7 Sonnet + DeepSeek R1 (superior coding combined with deep reasoning and low cost), or OpenAI o3/GPT-4.5 + Claude 3.7. While querying two models sounds more expensive, eliminating the 12-round debugging spiral down to 2 rounds actually reduces net token spend significantly on real-world engineering tasks."
        },
        {
          tag: "Roadmap",
          question: "What is the concrete relationship between Parallax and RSI?",
          answer: "Parallax provides the rigorous data collection and ground-truth evidence pipeline needed for Recursive Self-Improvement. The signed verification records generated today will serve as the fitness function for tomorrow's self-evolving agents. Parallax is the bridge from cooperative intelligence to evolutionary intelligence."
        }
      ]
    },
    footer: {
      desc: "Parallax is the multi-model engineering coordination layer. Vibe coding is the entry point, RSI is the endgame, and we give engineers deterministic confidence.",
      allRightsReserved: "© 2026 Parallax HQ Inc. All rights reserved.",
      macOS: "macOS 12.0+ (Universal Apple Silicon & Intel)",
      license: "Proprietary Local License",
      privacy: "Privacy Policy (Zero Telemetry Guarantee)",
      terms: "Terms of Service",
      documentation: "Developer Documentation"
    }
  },
  ja: {
    nav: {
      why: "製品価値",
      demo: "迷路デモ",
      proof: "検証実績",
      process: "6段階プロセス",
      vision: "RSIの終局",
      howItWorks: "利用手順",
      pricing: "料金プラン",
      faq: "よくある質問",
      downloadMac: "Mac版をダウンロード ↓",
    },
    hero: {
      badge: "Vibe Coding のエンジニアリング救済 · RSI への架け橋",
      titleLine1: "Vibe coding is the entry point.",
      titleLine2: "RSI is the endgame.",
      titleLine3: "The engineering system in between is the opportunity.",
      subtitle: "直感コーディングは入口であり、再帰的自己改善（RSI）こそが終着点です。Parallax はその間に位置するエンジニアリング協調レイヤーとして、デュアルモデルの相互ブラインド検証により盲点と幻覚を根絶します。",
      watchDemo: "▶ 30秒デモを見る",
      downloadBtn: "Mac版 (v1.4) をダウンロード ↓",
      trialBadge: "クレジットカード不要 · 3日間無料トライアル · 自身のAPIキーを使用",
      interactiveTab: "インタラクティブ迷路デモ",
      diagramTab: "アーキテクチャ概要",
    },
    mazeDemo: {
      title: "Same Problem. Two Approaches.",
      subtitle: "同一のコーディング課題。トークンを浪費し彷徨う単一モデルと、役割交代で即座に検証を完了する Parallax。",
      soloTitle: "SOLO VIBE CODING（単独モデル）",
      soloSub: "1つのモデルが自己対話し、誤った仮説でリトライを繰り返し、偽のテスト通過で致命的バグを隠蔽",
      parallaxTitle: "WITH PARALLAX（協調モデル）",
      parallaxSub: "Model A が行き詰まると Ownership Transfer が発動。Model B が新鮮な視点で引き継ぎ相互監査",
      soloQuote: "「テストは全てパスした…しかし何かが根本的に間違っている気がする。」",
      parallaxQuote: "「Model A 停滞、Model B へ交代 → 相互監査完了、台帳へ署名済み。✅」",
      bottomTagline: "同じ迷路：単独モデルは147歩の末に不安を残し、Parallax は48歩で確固たる検証を完了。",
      flowSolo: "🧑‍💻 Vibe Coding開始 → 🧱 行き止まり（偽テスト成功） → ↻ 盲目的リトライ → 😰 泥沼化",
      flowParallax: "🧑 Model A 探索 → ↔️ Model B へ自動引き継ぎ → 🔍 新たな視点で欠陥発見 → 🎯 ゴール検証",
      startBtn: "シミュレーション開始",
      pauseBtn: "一時停止",
      resetBtn: "迷路リセット",
      regenerateBtn: "新しい迷路を生成",
      speed: "速度",
      steps: "総ステップ数",
      deadEnds: "行き止まり",
      retries: "堂々巡りリトライ",
      handoffs: "役割交代 (Handoff)",
      status: "ステータス",
      statusThinking: "探索中...",
      statusStruggled: "😰 堂々巡りに陥っています",
      statusVerified: "✅ 相互検証完了",
    },
    trust: {
      label: "BUILT WITH PARALLAX. VERIFIED BY PARALLAX.",
      sublabel: "信頼するトップモデルを自由に連携 · 完全ローカル実行 · コードの外部送信ゼロ",
    },
    proof: {
      quote: "「AI がコードを書く速度は驚異的ですが、AI の自信満々な誤りや幻覚テストを見張る作業は、自分でコードを書くより百倍疲れます。」",
      author: "Huihong",
      authorTitle: "元 Google シニアエンジニア · Parallax 共同創設者",
      stat1Number: "16 回の応酬",
      stat1Label: "異種モデル間監査で 5 件の深刻な潜在バグを発見",
      stat1Sub: "単独モデルはテスト通過を主張したが、対抗監査により即座に発覚",
      stat2Number: "12 巡 → 2 巡",
      stat2Label: "自動所有権移転により無限ループを完全打破",
      stat2Sub: "Model A の修正が規定回数失敗した瞬間、Model B へ権限を移譲し秒速解決",
      stat3Number: "100%",
      stat3Label: "Parallax 自体を Parallax で構築 (Dogfooding)",
      stat3Sub: "協調エンジン・台帳システム等の4万行全コードが自社の二重審査を通過",
      dogfoodTitle: "完全なる自社運用 (Dogfooding)",
      dogfoodDesc: "Parallax は単なるラッパーではありません。コンパイラ、状態同期エンジン、暗号化台帳の全てが Claude 3.7 と DeepSeek R1 による相互検証プロトコル上で開発されました。",
      comparisonTitle: "実際のクロス監査ログ：",
      beforeLabel: "単独モデルの直感コード（問題を覆い隠す）",
      afterLabel: "Parallax の相互検証（徹底的な対抗テスト）",
    },
    stages: {
      badge: "SIX STAGES WORKFLOW",
      title: "Blind First. Compare Second. Evidence Decides.",
      subtitle: "6つのエンジニアリング段階。2つのモデルが互いに非公開で思考し、異議を唱え、決定論的証拠のみで前進します。",
      modelALabel: "MODEL A（先行立案）",
      modelBLabel: "MODEL B（対抗監査）",
      challengeLabel: "CHALLENGE（相互ブラインド異議）",
      convergenceTitle: "CONVERGENCE ZONE（収斂領域）",
      convergenceDesc: "独立した出力が収斂領域で突き合わされます。意見が対立した場合、口頭の説得は禁じられ、再現テストや型証明などの客観的証拠のみが決定権を持ちます。",
      ownershipTitle: "⚡ OWNERSHIP TRANSFER（所有権移転）",
      ownershipDesc: "Model A が同一バグ修正で2〜3回連続して失敗した場合、権限を剥奪し Model B に全権を移譲。過去の誤った前提にとらわれない新鮮な視点により、12回の苦悶が2回で解決します。",
      ownershipQuote: "「システム内で最もトークンを節約し、開発者の精神を守る中核機能です。」",
      ledgerTitle: "📋 APPEND-ONLY LEDGER（追記専用エンジニアリング台帳）",
      ledgerDesc: "各段階の決定は暗号ハッシュ、タイムスタンプ、通過証拠とともにローカル台帳へ記録されます。消え去るチャット履歴ではなく、再現可能な産業級の技術記録です。",
      ledgerQuote: "「一時的な会話ログではなく、恒久的なエンジニアリングの軌跡。」",
      items: [
        {
          id: "01",
          number: "01",
          title: "UNDERSTAND 要件理解",
          modelA: {
            role: "Model A",
            action: "ビジネス目標の抽出、前提仮定と潜在リスクの策定",
            details: "10k QPS の高スループットと 2ms 未満のレイテンシ要件を策定。"
          },
          modelB: {
            role: "Model B",
            action: "Model A の内容を見ずに独立して課題を解釈",
            details: "クライアントの再接続バーストに伴う状態遷移デッドロックのリスクを指摘。"
          },
          challenge: "B から A への指摘：「メモリキャッシュ前提ではマルチプロセス同期が破綻する」",
          convergence: "再接続復旧シナリオを明示的な検証基準として統合合意。",
          ledgerRecord: "Hash: 0x8f2a... · [SIGNED: A, B] · 要件ベースライン確定"
        },
        {
          id: "02",
          number: "02",
          title: "DEFINE 仕様定義",
          modelA: {
            role: "Model A",
            action: "問題モデルと受入基準 (Acceptance Criteria) の形式化",
            details: "スキーマ定義、状態遷移表、エラーコード一覧の作成。"
          },
          modelB: {
            role: "Model B",
            action: "A の基準に対する反例の作成と境界条件テスト",
            details: "後方互換性が失われるスキーマ移行の不備を反例で証明。"
          },
          challenge: "B が3つの反例入力を提示し、A の設計におけるデータ欠落を実証。",
          convergence: "フィールド制約を修正し、厳格な形式契約を双方が承認。",
          ledgerRecord: "Hash: 0x3c91... · [SIGNED: A, B] · 24/24 受入基準確定"
        },
        {
          id: "03",
          number: "03",
          title: "DESIGN 設計",
          modelA: {
            role: "Model A",
            action: "アーキテクチャ案 A（Actor モデルによる非同期処理）",
            details: "仮想アクターメールボックスを用いたロックフリー設計。"
          },
          modelB: {
            role: "Model B",
            action: "対抗設計案 B（純粋関数型状態マシン）の提示と検証",
            details: "WASM 環境下でのスレッド安全性の観点から関数型状態遷移の優位性を証明。"
          },
          challenge: "B がブラウザ WASM ターゲットにおけるスレッド安全性の懸念を提示。",
          convergence: "イベントソーシングと純粋関数型状態遷移を組み合わせた設計を採用。",
          ledgerRecord: "Hash: 0x9b41... · [SIGNED: A, B] · ADR-007 承認"
        },
        {
          id: "04",
          number: "04",
          title: "BUILD 実装",
          modelA: {
            role: "Model A",
            action: "プレゼンテーション層、API、イベントバスの実装",
            details: "副作用のないイベントディスパッチャとデータバインディング。"
          },
          modelB: {
            role: "Model B",
            action: "コアエンジン、永続化整合性、統合テストの実装",
            details: "アトミック永続化、障害復旧チェックポイント、ユニットテスト群。"
          },
          challenge: "疎結合モジュールを独立実装し、境界インターフェース契約テストを自動実行。",
          convergence: "コンパイラ警告ゼロ、テスト網羅率 94% で無事結合完了。",
          ledgerRecord: "Hash: 0x7e12... · [SIGNED: A, B] · ビルド成果物承認"
        },
        {
          id: "05",
          number: "05",
          title: "VERIFY 相互監査",
          modelA: {
            role: "Model A",
            action: "Model B のコードを当初の要件に照らして監査",
            details: "負荷時に指数バックオフが欠如し接続枯渇を起こす不備を発見。"
          },
          modelB: {
            role: "Model B",
            action: "Model A のコードに対しファジングとメモリ監査を実行",
            details: "単独モデルのテストでは検出不能だったストリーム開放漏れを摘出。"
          },
          challenge: "相互に修正パッチを交換し、⚡ Ownership Transfer で迅速に完了。",
          convergence: "両欠陥が完治し、異種モデル間ストレステスト全5件をクリア。",
          ledgerRecord: "Hash: 0x4d55... · [SIGNED: A, B] · 監査報告書承認"
        },
        {
          id: "06",
          number: "06",
          title: "DELIVER 最終納品",
          modelA: {
            role: "Model A",
            action: "配布パッケージの生成と互換性検証",
            details: "未定義依存関係ゼロおよび SemVer 準拠の確認。"
          },
          modelB: {
            role: "Model B",
            action: "最終署名を行い、全監査ログをローカル台帳へ記録",
            details: "意思決定ログ、テストシード、ハッシュ証明を記録。"
          },
          challenge: "ハッシュ値の照合が完全一致し、改ざんや未コミットの差分なし。",
          convergence: "高いエンジニアリング信頼性を備えたコード成果物が完成。",
          ledgerRecord: "Hash: 0x11ff... · [FINAL COMMIT SEALED] · デプロイ準備完了"
        }
      ]
    },
    vision: {
      badge: "THE ENDGAME VISION",
      title: "From Collaboration to Evolution",
      subtitle: "The maze gets harder. The agent gets smarter faster.",
      quoteTop: "「Parallax は2つのエージェントの協調を示し、RSI は1つのエージェントが至る進化を示します。」",
      todayTitle: "TODAY — PARALLAX",
      todaySub: "2つのモデル · 相互監査 · 証拠ベース",
      todayPrice: "月額 $19 · 提供中",
      todayBullet1: "互いを鏡として監査し、行き止まりを80%削減",
      todayBullet2: "所有権移転により堂々巡りを12回から2回へ短縮",
      todayBullet3: "天花板：人間とAI・異種モデル協調の最高峰",
      tomorrowTitle: "TOMORROW — RSI",
      tomorrowSub: "再帰的自己変異 · 適応淘汰 · 飛躍的成長",
      tomorrowTime: "実証主義 · 18ヶ月ロードマップ",
      tomorrowBullet1: "問題を解くだけでなく「問題の解き方」自体をアップグレード",
      tomorrowBullet2: "変異プールと選択：迷路が難しくなるほど進化速度が加速",
      tomorrowBullet3: "天花板：外部依存を脱し、自律的進化へ",
      endgameTitle: "THE ENDGAME",
      endgameSub: "AI が自らの「自己改善ループ」を改善する終着点",
      endgameQuote: "「人類が構築する最後のAIとは、より優れたAIを設計できるシステムです。天花板は協調ではなく、進化なのです。」",
      flywheel: "プロジェクト遂行 → 構造化証拠の蓄積 → 監査モデルの洗練 → 高品質な証拠生成 → RSI の自律加速",
      interactiveTitle: "RSI 迷路進化サンドボックス（5世代シミュレーション）",
      interactiveDesc: "7x7の当てずっぽう探索から15x15の全局的先読み計画へと、エージェントが自ら進化していく「シザーズ曲線」を体感してください。",
      evolutionStatsLabel: "世代別パフォーマンス推移：",
      selectVariantLabel: "変異体プール (Mutation Pool)：",
      dnaLabel: "戦略DNAシーケンス：",
      insightTitle: "今ご覧いただいた現象：",
      insightText: "第1世代では壁に衝突し続けたエージェントが、第5世代ではサイズが倍増した迷路を一分の迷いもなく最短経路で踏破しました。Parallax は今、2つの最高峰の頭脳を提供します。そして RSI は、指数関数的に自己改善する未来の知性をもたらします。"
    },
    howItWorks: {
      badge: "FOUR SIMPLE STEPS",
      title: "How It Works",
      subtitle: "わずか4ステップで開始。あなたがモデルを用意し、Parallax が結果を保証します。",
      steps: [
        {
          number: "01",
          title: "クライアントをダウンロード",
          desc: "Apple Silicon (M1〜M4) および Intel Mac に対応。Linux と Windows もサポート。"
        },
        {
          number: "02",
          title: "モデル API キーを設定",
          desc: "Anthropic, OpenAI, DeepSeek, Google など2つのモデルを登録。キーはPC内に安全に保存。"
        },
        {
          number: "03",
          title: "実装目標やバグを記述",
          desc: "新規アプリ構築から難解な並行処理バグの解消まで、自然言語で入力するだけです。"
        },
        {
          number: "04",
          title: "Parallax が二重検証を自動統括",
          desc: "ブラインド立案、相互監査、所有権の自動移譲を経て、署名付きの高品質コードを生成。"
        }
      ],
      quote: "「You bring the models. Parallax engineers the outcome.」"
    },
    pricing: {
      badge: "FAIR & TRANSPARENT",
      title: "ローカル開発者に誠実な定額制。トークンの中抜きなし。",
      subtitle: "トークン転売やコードの囲い込みは一切行いません。あなたのマシン、あなたのキー、私たちの協調技術。",
      monthly: "月払い",
      annual: "年払い",
      saveBadge: "15% OFF · 2ヶ月分無料",
      monthlyPrice: "$19",
      annualPrice: "$199",
      perMonth: "/ 月",
      billedAnnually: "年額 $199（月換算 $16.50）の一括払い",
      cta: "3日間の無料トライアルを開始",
      trialNote: "クレカ登録不要 · 即座にダウンロード可能 · いつでもキャンセル可能",
      tagline: "「Your keys. Your code. Your machine. We coordinate.」",
      features: [
        "無制限のローカル協調セッション（プロジェクト規模制限なし）",
        "主要 LLM モデル（Claude, OpenAI, DeepSeek 等）の自由な組合せ",
        "⚡ 堂々巡りを切断する自動 Ownership Transfer 機構",
        "📋 暗号学的追記専用エンジニアリング台帳 (Append-only Ledger)",
        "100% ローカル完結：ソースコードの外部流出リスク皆無",
        "理解から納品までを網羅する6段階標準エンジニアリングパイプライン",
        "次世代 RSI 進化サンドボックス機能への優先アクセス権"
      ]
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Parallax に関するよくある質問",
      subtitle: "単独エージェント型ツールとデュアルモデル協調レイヤーの根本的な違いを解説します。",
      items: [
        {
          tag: "本質的な違い",
          question: "Cursor や Windsurf を愛用していますが、なぜ Parallax が必要なのですか？",
          answer: "Cursor や Windsurf は優れたエディタですが、本質的には「1つのモデルによる一人芝居」です。モデルが誤った前提に囚われると、自らの誤りを正当化するテストを書き「Tests Passed!」と宣言してしまいます。Parallax はエディタではなくエンジニアリング協調レイヤーであり、独立した2つのモデルを互いにブラインド状態で戦わせます。単独では盲点に気づけませんが、独立した2つの視点なら確実に見抜けます。"
        },
        {
          tag: "動作原理",
          question: "Ownership Transfer（所有権移転）はどのように堂々巡りを断ち切るのですか？",
          answer: "通常のチャットでAIが修正を失敗すると、開発者は「違う、もう一度直して」と指示します。しかし同一モデルは過去の失敗した文脈を引きずり、同じ誤りを繰り返します。Parallax は連続失敗を検知すると、即座に Model A から権限を剥奪し、先入観のない Model B へ全権を移譲します。新鮮な視点で臨むことで、12回かかっていた修正が2回で解決します。"
        },
        {
          tag: "機密保護",
          question: "ソースコードや API キーが Parallax のサーバーに保存される心配はありますか？",
          answer: "一切ありません。Parallax は完全な Local-First（ローカルファースト）設計です。全コード解析、差分管理、暗号台帳はご自身のPC内で完結します。API 通信もあなたのマシンから各プロバイダへ直接 HTTPS 送信されます。中継プロキシも介さず、テレメトリも送信されません。"
        },
        {
          tag: "モデル構成",
          question: "推奨されるモデルの組み合わせは？ コストは倍になりますか？",
          answer: "おすすめは ① Claude 3.7 Sonnet + DeepSeek R1（高い実装力と深い推論監査力、圧倒的な低コスト）、② OpenAI o3/GPT-4.5 + Claude 3.7（最高峰フラッグシップ）です。2つのモデルを呼ぶため一見コストが増えそうですが、Ownership Transfer により堂々巡り（12回→2回）が激減するため、実際のプロジェクトでは総トークン消費量が逆に削減されます。"
        },
        {
          tag: "将来像",
          question: "Parallax と RSI（再帰的自己改善）にはどのような関係がありますか？",
          answer: "Parallax は RSI を実現するための確固たるデータ収集基盤です。現在蓄積されている「意思決定、失敗、相互監査、検証済みの事実」の台帳こそが、未来のエージェントが自らを再帰的に変異・淘汰させるための訓練データとなります。現在の協調から、未来の進化へシームレスに繋がります。"
        }
      ]
    },
    footer: {
      desc: "Parallax はソフトウェア工学のためのマルチモデル協調レイヤーです。直感コーディングから RSI への橋渡しを行い、エンジニアに確実な信頼性を提供します。",
      allRightsReserved: "© 2026 Parallax HQ Inc. All rights reserved.",
      macOS: "macOS 12.0+（Apple Silicon & Intel 両対応）",
      license: "ローカル独自ライセンス",
      privacy: "プライバシーポリシー（データ送信ゼロ保証）",
      terms: "利用規約",
      documentation: "技術ドキュメント"
    }
  }
};

export const rsiRoundsData: RSIRound[] = [
  {
    round: 1,
    name: "Round 1",
    strategyName: "盲走 (Random Walk)",
    mazeSize: "7×7",
    steps: 89,
    deadEnds: 12,
    evolutionScore: 12,
    strategyDna: {
      direction: "random",
      memory: "none",
      lookahead: "0",
      backtrack: "blind-bounce"
    },
    description: "策略基因完全随机。Agent 无记忆、无预判，在死胡同里不断撞墙，步数冗余且消耗大量无用精力。",
    variants: [
      { id: "v1", name: "Variant A (Rule Based)", strategy: "+wall-following (右手法则)", predicted: "52 steps, 7 dead ends", confidence: 78, selected: true },
      { id: "v2", name: "Variant B (Speed Bias)", strategy: "+step-momentum (动量惯性)", predicted: "74 steps, 11 dead ends", confidence: 35, selected: false },
      { id: "v3", name: "Variant C (Random Retries)", strategy: "+random-jitter (随机抖动)", predicted: "81 steps, 12 dead ends", confidence: 20, selected: false }
    ]
  },
  {
    round: 2,
    name: "Round 2",
    strategyName: "右手法则 (Wall Following)",
    mazeSize: "9×9",
    steps: 52,
    deadEnds: 7,
    evolutionScore: 34,
    strategyDna: {
      direction: "right-hand-rule",
      memory: "none",
      lookahead: "0",
      backtrack: "edge-slide"
    },
    description: "从 Round 1 的撞墙中学会了基本规则：贴墙行进。死胡同减少，但在环形回廊与复杂孤岛中仍会绕远路。",
    variants: [
      { id: "v4", name: "Variant A (+Visited Memory)", strategy: "+memory (已访问单元标记+回溯)", predicted: "31 steps, 3 dead ends", confidence: 84, selected: true },
      { id: "v5", name: "Variant B (+Left-Right Alternate)", strategy: "+alternate-hands (左右手轮转)", predicted: "49 steps, 6 dead ends", confidence: 42, selected: false },
      { id: "v6", name: "Variant C (+Compass Bias)", strategy: "+static-compass (朝向指南针)", predicted: "44 steps, 5 dead ends", confidence: 51, selected: false }
    ]
  },
  {
    round: 3,
    name: "Round 3",
    strategyName: "记忆回溯 (Memory & Backtracking)",
    mazeSize: "11×11",
    steps: 31,
    deadEnds: 3,
    evolutionScore: 58,
    strategyDna: {
      direction: "rule-based",
      memory: "visited-cells",
      lookahead: "1",
      backtrack: "strict-stack"
    },
    description: "引入空间记忆与已探索标记。绝不二次进入已知死胡同，遇阻即按栈回溯，效率大幅攀升。",
    variants: [
      { id: "v7", name: "Variant A (+Greedy Heuristic)", strategy: "+greedy-lookahead (曼哈顿距离引导预判)", predicted: "18 steps, 1 dead end", confidence: 89, selected: true },
      { id: "v8", name: "Variant B (+Deep Tree Search)", strategy: "+branch-pruning (深层枝剪)", predicted: "24 steps, 2 dead ends", confidence: 66, selected: false },
      { id: "v9", name: "Variant C (+Dual-End Search)", strategy: "+bidirectional (双向碰头尝试)", predicted: "27 steps, 2 dead ends", confidence: 59, selected: false }
    ]
  },
  {
    round: 4,
    name: "Round 4",
    strategyName: "贪心预判 (Greedy + Lookahead)",
    mazeSize: "13×13",
    steps: 18,
    deadEnds: 1,
    evolutionScore: 81,
    strategyDna: {
      direction: "greedy-heuristic",
      memory: "visited + dead-zones",
      lookahead: "3",
      backtrack: "optimized-priority"
    },
    description: "具备前瞻距离预判能力（Lookahead 3 步）。在每一个岔路口优先选择更靠近终点的方向，几乎直奔目标。",
    variants: [
      { id: "v10", name: "Variant A (+Global Map Planning)", strategy: "+global-topological-planning (全局拓扑扫描)", predicted: "11 steps, 0 dead ends", confidence: 97, selected: true },
      { id: "v11", name: "Variant B (+Dynamic A*)", strategy: "+dynamic-astar (动态A*算法)", predicted: "14 steps, 0 dead ends", confidence: 91, selected: false },
      { id: "v12", name: "Variant C (+Macro Chunking)", strategy: "+macro-cluster (宏观区块压缩)", predicted: "15 steps, 1 dead end", confidence: 75, selected: false }
    ]
  },
  {
    round: 5,
    name: "Round 5",
    strategyName: "全局规划 (Global Planning)",
    mazeSize: "15×15",
    steps: 11,
    deadEnds: 0,
    evolutionScore: 97,
    strategyDna: {
      direction: "global-topological",
      memory: "full-structural-graph",
      lookahead: "∞",
      backtrack: "zero-cost"
    },
    description: "进入迷宫前先完成全局拓扑扫描。零试错、零死胡同，直接沿最优测地线以最短步数抵达终点，展现 RSI 进化的终极形态。",
    variants: [
      { id: "v13", name: "Variant A (Recursive Metacognition)", strategy: "Meta-Evolution (自我改进流程的自改进)", predicted: "∞ (Self-Synthesizing)", confidence: 99, selected: true },
      { id: "v14", name: "Variant B (Multi-Agent Swarm)", strategy: "Swarm Emergence", predicted: "Optimal", confidence: 95, selected: false },
      { id: "v15", name: "Variant C (Quantum Superposition)", strategy: "Probabilistic Tunneling", predicted: "Theoretical Limit", confidence: 92, selected: false }
    ]
  }
];
