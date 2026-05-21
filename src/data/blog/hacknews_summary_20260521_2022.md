---
title: 'OpenAI 模型推翻离散几何 80 年猜想 | Hacker News 摘要 (2026-05-21)'
author: 'hacknews'
description: ''
digest: 'OpenAI 宣布，一个内部通用推理模型在离散几何中推翻了长期流行的单位距离问题猜想。这个问题由 Erdős 在 1946 年提出：平面上放置 n 个点时，最多能有多少对点之间距离正好为 1。几十年来，数学界普遍相信由缩放方格构造给出的下界'
source_url: 'https://openai.com/index/model-disproves-discrete-geometry-conjecture/'
pubDatetime: 2026-05-21 20:22:26.127+08:00
tags:
  - AI数学
  - 供应链安全
  - AI搜索
  - 智能体
---

---

## 1. OpenAI 模型推翻离散几何 80 年猜想 (An OpenAI model has disproved a central conjecture in discrete geometry)


OpenAI 宣布，一个内部通用推理模型在离散几何中推翻了长期流行的单位距离问题猜想。这个问题由 Erdős 在 1946 年提出：平面上放置 n 个点时，最多能有多少对点之间距离正好为 1。几十年来，数学界普遍相信由缩放方格构造给出的下界已经接近最优，即单位距离对数量最多只能达到 n 的 1+o(1) 次方。OpenAI 模型给出了一族无限构造，能达到 n 的 1+δ 次方，外部数学家已检查证明，并有后续改进显示 δ 可取 0.014。文章强调，这不是专门为该问题训练或搭建搜索脚手架的数学系统，而是通用推理模型在 Erdős 问题集评测中独立找到证明，关键工具还来自代数数论。

原文链接：https://openai.com/index/model-disproves-discrete-geometry-conjecture/

论坛讨论链接：https://news.ycombinator.com/item?id=48212493

HN 上数学背景评论者普遍认为这是一件真正值得重视的事：证明虽然受到既有文献启发，但关键调整并不平凡，足以构成新的数学贡献。讨论也指出，模型输出中的引用和归因仍是短板，数学研究不仅需要结果正确，也需要清楚标出所依赖的前人成果。另一条主线是情绪上的复杂性：许多人反感 AI 公司营销和模型替代创作者的现实，但在数学、科学这种复杂性快速增长的领域，LLM 可能确实能成为突破研究瓶颈的工具。

---

## 2. GitHub 承认 3800 个内部仓库遭恶意 VS Code 插件窃取 (GitHub confirms breach of 3,800 repos via malicious VSCode extension)




BleepingComputer 报道，GitHub 已确认约 3800 个内部仓库被窃取，原因是一名员工安装了被投毒的 VS Code 扩展。GitHub 表示，已移除恶意扩展版本、隔离受影响终端并启动应急响应，目前评估显示活动只涉及 GitHub 内部仓库，攻击者声称的约 3800 个仓库规模与调查大体一致。此前 TeamPCP 黑客组织在地下论坛宣称获得 GitHub 源码和约 4000 个私有代码仓库，并开价至少 5 万美元出售数据。文章回顾了 VS Code Marketplace 过去多次出现恶意扩展的问题，包括窃取开发者凭据、投放挖矿软件、伪装 AI 编程助手并向中国服务器外传数据等。事件再次凸显 IDE 插件生态和开发者供应链的系统性风险。

原文链接：https://www.bleepingcomputer.com/news/security/github-confirms-breach-of-3-800-repos-via-malicious-vscode-extension/

论坛讨论链接：https://news.ycombinator.com/item?id=48207660

讨论集中在 VS Code 扩展缺少强沙箱和权限模型。有人提到 2018 年以来就有 VS Code sandbox 功能请求，却一直没有被优先解决；也有人指出，沙箱还不够，因为扩展往往需要访问代码、环境变量和构建流程，必须配合显式权限、延迟自动更新和供应链审查。许多评论者感叹，开发者一边告诫普通用户不要随便装东西，一边又在 IDE、包管理器、CI 和容器镜像里引入大量第三方代码。

---

## 3. Qwen3.7-Max 发布，阿里把重点押到长程智能体 (Qwen3.7-Max: The Agent Frontier)


Qwen 团队发布 Qwen3.7-Max，称其是面向智能体时代的专有模型，目标覆盖代码编写与调试、办公自动化、多智能体协作和超长程自主执行。官方特别强调模型可在 Claude Code、OpenClaw、Qwen Code 等不同 agent scaffold 中稳定工作，并展示了一个 35 小时、超过 1000 次工具调用的内核优化任务。基准表显示，Qwen3.7-Max 在 SWE-Pro、SWE-Multilingual、SciCode、Terminal-Bench、MCP-Mark、MCP-Atlas、SpreadsheetBench 和 Kernel Bench L3 等项目上接近或超过多个前沿模型，尤其突出跨工具调用、MCP、办公任务和 GPU kernel 优化。API 将通过阿里云 Model Studio 提供。

原文链接：https://qwen.ai/blog?id=qwen3.7

论坛讨论链接：https://news.ycombinator.com/item?id=48205626

HN 讨论没有只盯着官方榜单，而是围绕“低幻觉率”和拒答行为展开。有人称 Qwen 在 Artificial Analysis Omniscience 的非幻觉率达到 SOTA，但其他人提醒，单看非幻觉率可能被“全都拒答”刷高，需要结合正确率和拒答率评估。也有人认为，模型在不知道时能明确说不知道，本身就是从“二手车销售式胡编”走向可信工具的重要能力。整体讨论反映出社区对 agent benchmark、知识可靠性和评测定义越来越敏感。

---

## 4. BBC 调查：Google AI 答案正在被 SEO 操纵 (Google’s AI is being manipulated. The search giant is quietly fighting back)



BBC 记者 Thomas Germain 调查发现，AI 搜索和聊天机器人很容易被单篇精心设计的网页或社交帖子操纵，从而向公众输出错误答案。他用 20 分钟在个人网站发布虚假内容，成功让 ChatGPT 和 Google 把他描述成某个热狗大赛冠军。调查还发现，类似手法已被用于医疗补充剂、退休理财等更严肃领域，影响用户健康和财务决策。Google 最近更新垃圾内容政策，明确把试图操纵 AI 回答纳入违规范围，但 Google 对外称这只是澄清，核心反垃圾策略一直存在。专家认为，随着搜索从十个蓝色链接变成“一个 AI 答案”，单点内容污染的影响会被放大，用户应默认自己可能正在被操纵。

原文链接：https://www.bbc.com/future/article/20260519-google-tackles-attempts-to-hack-its-ai-results

论坛讨论链接：https://news.ycombinator.com/item?id=48205782

HN 对这篇文章的担忧程度有分歧。有人认为热狗冠军这种例子太冷门，更像编造一个不存在的维基页面后声称维基不可信；如果能操纵 Nathan's 热狗大赛赢家或真实热门查询，问题才更严重。反方则指出，一个记者能做到的事，公关公司、政治团体和 SEO 产业可以规模化做到，Reddit、社交媒体和维基式页面早已存在大量叙事操纵。讨论最终回到 AI 搜索的结构性风险：答案越集中，污染成本越低，用户越难自行交叉验证。

---

## 5. Meta 被指配合沙特和阿联酋屏蔽人权账号 (Meta blocks human rights accounts from reaching audiences in Saudi Arabia, UAE)





ALQST 等多家组织联合声明，谴责 Meta 按沙特和阿联酋政府要求，对人权组织、研究者和公民社会人士的 Facebook 与 Instagram 账号进行地域屏蔽。自 2026 年 4 月 30 日以来，ALQST、Democratic Diwan、沙特研究者 Abdullah Alaoudh、人权捍卫者 Yahya Assiri 等账号在沙特变为不可访问，阿联酋也出现类似限制。Meta 的通知称是响应当地法律或政府请求，其透明度报告显示，2026 年 3 月以来已有超过 100 个 Facebook 页面和 Instagram 账号被限制。声明认为，沙特和阿联酋长期利用网络犯罪法和反恐法压制异议，Meta 在这种环境下更应承担保护表达自由的责任，而不是充当威权政府的执法工具。

原文链接：https://www.alqst.org/ar/posts/1190

论坛讨论链接：https://news.ycombinator.com/item?id=48206768

HN 讨论里，一名身在阿联酋的用户表示 ALQST 网站当地也被屏蔽，只能开 VPN 阅读，称“连阅读什么被禁止都不被允许”。随后讨论转向 VPN 使用风险、海湾国家网络监控以及跨国平台是否应遵守当地法律。有人认为，短期增长和商业准入会侵蚀原则；也有人反驳说，几乎所有全球企业都在不同程度上遵守不自由国家的法律，用户自己也离不开这些供应链。整体情绪明显偏向批评 Meta，但也承认全球平台很难在市场、法律和人权之间维持一致立场。

---

## 6. Forge 用护栏把 8B 本地模型拉到智能体可用水平 (Show HN: Forge – Guardrails take an 8B model from 53% to 99% on agentic tasks)


Forge 是一个面向自托管 LLM 工具调用的可靠性层，目标不是换更大模型，而是在模型外部加上护栏和上下文管理，让小模型在多步 agent 工作流中更稳定。项目支持 Ollama、llama-server、Llamafile 和 Anthropic，可作为 WorkflowRunner、guardrails middleware 或 OpenAI 兼容代理使用。作者称，在 26 个场景评测中，当前最佳自托管配置 Ministral-3 8B Instruct Q8 可达到 86.5%，困难层 76%；在 HN 主贴中还提到论文覆盖 97 种模型/后端配置、18 个场景、每项 50 次运行，8B 模型加 Forge 在多步任务中可从约 53% 提升到 99% 左右。核心机制包括救援解析、重试提示、步骤约束、VRAM 感知 token 预算和分层压缩。

原文链接：https://github.com/antoinezambelli/forge

论坛讨论链接：https://news.ycombinator.com/item?id=48192383

作者在 HN 主贴中强调，多步 agent 的问题是错误率会复合：单步 90% 看似不错，五步任务就可能有约 40% 失败率。讨论围绕小模型是否能靠框架补足可靠性展开，很多人对“guardrails 让本地 8B 接近云端前沿 API”感兴趣，但也会自然追问评测场景是否足够代表真实任务。这个项目的价值在于把 agent 可靠性拆成可测、可复现的工程问题，而不是只比较模型本体能力。

---

## 7. Firefox 准备告别 asm.js，WebAssembly 接棒完成 (Saying goodbye to asm.js)




SpiderMonkey 团队宣布，从 Firefox 148 开始，asm.js 专用优化默认关闭，并计划未来完全移除相关代码。对仍在使用 asm.js 的网站来说，功能不会立即损坏，因为 asm.js 本身只是普通 JavaScript 的一个严格子集，仍可通过常规 JIT 执行；但 Mozilla 建议迁移到 WebAssembly，以获得更快执行速度和更小二进制体积。文章回顾 asm.js 的历史：它诞生于 2013 年，是 Mozilla 对 NaCl/PNaCl 的开放 Web 回答，通过让 JS 引擎识别静态类型子集并编译到原生代码，帮助 Unity、Unreal 等大型 C/C++ 代码库首次用标准 Web 技术运行在浏览器里。如今 WebAssembly 已成功接过使命，继续维护 asm.js 专用路径只会增加 VM 攻击面和维护成本。

原文链接：https://spidermonkey.dev/blog/2026/05/20/saying-goodbye-to-asmjs.html

论坛讨论链接：https://news.ycombinator.com/item?id=48206340

讨论变成了一场 Web 平台替代时间线的回忆。有人认为，如果放到今天，Chrome 可能会直接推动 NaCl/PNaCl 成为事实标准，再让 Safari 和 Firefox 被抱怨“不跟进”。也有人遗憾 PNaCl 消失后，WebAssembly 生态成熟速度仍不够快，结果许多应用变成 Electron，而不是更轻量的浏览器沙箱。另一个话题是本地文件系统 API 和浏览器内运行模型、Python、DuckDB 等能力：Web 平台潜力很大，但跨浏览器一致性仍是现实阻碍。

---

## 8. 每秒 N 个 token 到底有多快？这个网页让你直接感受 (How fast is N tokens per second really?)


这个小工具把抽象的 LLM 吞吐量数字可视化，让用户直观看到 5、30、60、200、800 token/s 等速度在屏幕上是什么感觉。页面提供 code、text、think 和 agent 四种模式，分别模拟语法高亮代码、普通文本、推理模型的思考加代码，以及带工具调用和处理停顿的 coding agent。作者指出，同样的 token/s 在不同内容上体感差异很大：代码比自然语言 token 密度更高，标点、操作符、驼峰标识符都会拆分成 token；英文约 1.3 token/词，所以 30 token/s 约等于 23 词/秒。它不是新的性能基准，而是帮助用户把本地模型、托管模型和专用推理硬件的速度数字转化成可感知体验。

原文链接：https://mikeveerman.github.io/tokenspeed/

论坛讨论链接：https://news.ycombinator.com/item?id=48174920

HN 讨论里，一个有意思的观察是：5 token/s 明明比普通人打字快，却对 agent 来说显得极慢，因为 token 速率不只是“打字速度”，也是模型显式推理和尝试方案的速度。有人指出，快速模型在文本冒险游戏等推理任务上表现更好，可能不是每个 token 更聪明，而是在同样时间里能走更多思考路径。也有人说 100 到 150 token/s 对人类阅读已经太快，但非常适合后台 subagent。讨论说明延迟、吞吐和可读性是不同维度。

---

## 9. FiveThirtyEight 文章索引被整理到 Internet Archive (FiveThirtyEight articles on the Internet Archive)


这个站点整理了 FiveThirtyEight 历年文章在 Internet Archive 上的索引，按日期、年份和作者浏览。首页从 2008 年 Nate Silver 早期 FAQ、Pollster Ratings、民主党初选和 Intrade 等文章开始，覆盖到 2025 年，并列出 Nate Silver、Neil Paine、Walt Hickey、Aaron Bycoffe、Galen Druke、Oliver Roeder、Nathaniel Rakich、Harry Enten 等 500 多位作者。背景是 FiveThirtyEight 迁移和归档过程中，曾有大量旧文章在公开互联网上变得难以访问。这个索引不是重建内容本身，而是为数据新闻和政治预测史提供可检索入口，让读者能通过 Internet Archive 找回被平台变迁冲散的文章。

原文链接：https://fivethirtyeightindex.com/

论坛讨论链接：https://news.ycombinator.com/item?id=48201973

讨论先从“Ben Welsh 是谁”展开，随后 Simon Willison 等人补充说 Ben 是数据新闻领域的重要人物，做过新闻应用、数据培训和开源教程。HN 管理员还说明原提交标题曾包含 Ben Welsh，后被改成更直接的站点描述。评论者也提到，FiveThirtyEight 旧文消失曾引发讨论，因此这个索引有明确保存价值。整体讨论不像技术争论，更像对数据新闻、网页腐烂和机构内容归档的一次集体补档。

---

## 10. GitHub 官方称正调查内部仓库未授权访问 (GitHub is investigating unauthorized access to their internal repositories)


GitHub 官方在 X 上表示，正在调查其内部仓库遭未授权访问的事件，并强调当前没有证据显示客户信息受到影响。这条官方表态与随后 BleepingComputer 披露的恶意 VS Code 扩展入侵事件相互印证：攻击者声称拿到数千个内部仓库，而 GitHub 则把范围限定为内部代码，并称仍在监控和响应。由于原帖信息有限，这条新闻更像事件的官方口径和公众反应窗口。许多开发者关注的重点不是“客户仓库是否已被直接窃取”，而是 GitHub 自己的内部仓库和员工终端都能被供应链攻击触达，说明核心开发基础设施本身也处在攻击面中心。

原文链接：https://twitter.com/github/status/2056884788179726685

论坛讨论链接：https://news.ycombinator.com/item?id=48201316

这条的可用讨论主要来自 X 回复，而非 HN。反应大多不买账：许多人认为“目前没有客户影响证据”只是事故早期的标准措辞，真正问题是攻击者到底已经走到多深。还有人借机呼吁自托管 Gitea、减少对单一 Microsoft/GitHub 基础设施的依赖，或至少轮换密钥、审计 IDE 扩展和 CI 工作流。评论也出现调侃：世界最大的代码托管平台自己的内部代码被访问，像是一次“非计划开源”。

