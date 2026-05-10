---
title: 'Tim Gowers 试用 ChatGPT 5.5 Pro：一小时做 | Hacker News 摘要 (2026-05-10)'
author: 'hacknews'
description: ''
digest: '数学家 Tim Gowers 记录了自己试用 ChatGPT 5.5 Pro 的一次经历：他让模型处理 Mel Nathanson 关于加性数论中 sumset 大小和直径的问题，结果模型在约一小时内给出了一段他认为达到 PhD 研究水平的'
source_url: 'https://gowers.wordpress.com/2026/05/08/a-recent-experience-with-chatgpt-5-5-pro/'
pubDatetime: 2026-05-10 08:58:16.039+08:00
tags:
  - AI_能力
  - 软件安全
  - 开发者工具
  - 科学技术
---

---

## 1. Tim Gowers 试用 ChatGPT 5.5 Pro：一小时做出 PhD 级数学研究 (A recent experience with ChatGPT 5.5 Pro)


数学家 Tim Gowers 记录了自己试用 ChatGPT 5.5 Pro 的一次经历：他让模型处理 Mel Nathanson 关于加性数论中 sumset 大小和直径的问题，结果模型在约一小时内给出了一段他认为达到 PhD 研究水平的论证，而且几乎没有依赖他提供实质数学输入。Gowers 的判断不是“模型已经会原创数学”，而是更精确：如果一个开放问题存在不太难但人类尚未注意到的论证，前沿模型已经有机会发现它。这会直接改变入门研究题的门槛：过去适合学生练手的“正式开放但不太硬”的问题，可能很快会先被模型扫掉。

原文链接：https://gowers.wordpress.com/2026/05/08/a-recent-experience-with-chatgpt-5-5-pro/

论坛讨论链接：https://news.ycombinator.com/item?id=48071262

HN 讨论承认这类能力进展很震撼，但也提醒成本和适用范围。有人说 5.5 Pro 是第一个让他感觉能被“驯服”去正确解决冗长但直线型问题的模型，但仍需要严格引导、反复校正，而且 token 成本极高。对数学证明这种上下文相对小、验证标准清楚的问题，模型优势会更早显现；对大型代码库和隐含业务假设，能力转化仍会慢很多。

---

## 2. React2Shell 复盘：一个没有文档的 Flight 协议如何变成 RCE (The React2Shell Story)





Lachlan Davidson 复盘了 React2Shell 的发现过程。他原本只是想理解 React Server Components 使用的 Flight 协议，以便更好地测试现代 Web 应用，结果一路挖到 CVE-2025-55182 这个关键远程代码执行漏洞。Flight 负责在客户端和服务器之间传递复杂 JavaScript 对象，支持 Date、BigInt、Map、引用、Promise 等 JSON 无法直接表达的结构。漏洞关键在于对象属性引用和原型链处理缺少安全检查，让攻击者有机会构造特殊 Flight 消息触发危险行为。文章的价值在于展示：越是“看起来像 JSON 加点魔法”的内部协议，越可能藏着被行业整体低估的攻击面。

原文链接：https://lachlan.nz/blog/the-react2shell-story/

论坛讨论链接：https://news.ycombinator.com/item?id=48065511

讨论里 React 和 Next.js 生态的争议迅速浮出水面。Vercel 的 Rauchg 称这次漏洞很痛，但研究者披露和协助修复都非常专业。另一些评论则把问题归咎于 React Server Components 把前后端边界搅在一起，增加了开发和安全复杂度。也有人借题发挥批评 hooks、Next.js 的 import/use 魔法和框架文化。总体上，大家认可漏洞报告本身质量很高，但对 RSC 方向仍分歧很大。

---

## 3. 论文警告：把长文档交给 LLM 反复编辑，25% 内容会被悄悄腐蚀 (LLMs corrupt your documents when you delegate)


这篇 arXiv 论文提出 DELEGATE-52，用 52 个专业领域的长流程文档编辑任务测试 LLM 作为“被委托执行者”的可靠性。结果显示，当前模型在长时间代理式编辑中会逐渐破坏文档内容，即使 Gemini 3.1 Pro、Claude 4.6 Opus、GPT 5.4 等前沿模型，到流程末尾平均也会腐蚀约 25% 的文档内容。问题不是单次回答差，而是稀疏但严重的错误会在长交互中静默累积。作者还发现，简单 agentic 工具使用并未改善结果，文档越大、交互越长、干扰文件越多，退化越严重。

原文链接：https://arxiv.org/abs/2604.15597

论坛讨论链接：https://news.ycombinator.com/item?id=48073246

Simon Willison 在评论中质疑论文的工具结论：如果工具只有 read_file 和 write_file，本质仍是整文件 round-trip，只是多了一步；现代 coding agent 的关键恰恰是精心设计的局部编辑工具，如 str_replace 和 insert。也有人指出，论文即便 harness 粗糙，仍揭示了现实问题：大量非技术用户正在被鼓励把文档委托给 AI，却并不知道什么是可靠编辑工具链。

---

## 4. OpenAI 的 WebRTC 问题：语音 AI 真的该用会议协议吗？ (OpenAI’s WebRTC problem)


作者是一位写过 Twitch 和 Discord WebRTC SFU 的工程师，他认为 OpenAI 不该把 WebRTC 当作语音 AI 的默认传输方案。核心理由是 WebRTC 为会议通话设计，目标是低延迟和实时互动，因此会在网络差时主动丢包、缩小 jitter buffer，而语音 AI 的输入输出更像昂贵的 prompt 和 TTS 流：用户宁愿多等 200 毫秒，也不希望音频 prompt 被破坏导致回答变差。作者还指出，TTS 可以快于实时生成，本应允许客户端缓冲，但 WebRTC 的到达即播放模型会迫使服务端人为限速并承担丢包后果。文章最后主张探索 QUIC、WebTransport 或更适合 AI 语音的协议栈。

原文链接：https://moq.dev/blog/webrtc-is-the-problem/

论坛讨论链接：https://news.ycombinator.com/item?id=48051951

评论里有 WebRTC 相关工程师逐条反驳：用户确实非常在意即时响应，尤其是打断和低延迟会影响“魔法感”；如果比实时更快发送长音频，用户中途打断时会浪费大量带宽。反方还指出 WebRTC 提供了 AEC、Offer/Answer 和跨客户端可用性，这些对开发者很重要。讨论共识不是 WebRTC 完美，而是替代方案需要同时解决客户端复杂度、回声消除、NAT、延迟和部署成本。

---

## 5. Claude Code 团队成员：HTML 可能比 Markdown 更适合 agent 输出 (Using Claude Code: The unreasonable effectiveness of HTML)


这篇文章认为，Markdown 虽然简单、可编辑、适合人机共同写作，但当 coding agent 产出的规格、报告、规划和可视化越来越复杂时，HTML 的信息密度和可读性更高。HTML 可以直接承载表格、CSS、SVG、图像、交互控件、流程图和响应式布局，也更容易上传分享。作者强调，自己越来越少手动编辑这些文件，而是把它们当作规格、参考和思考产物，再让 Claude Code 修改，因此 Markdown 的“易手改”优势相对下降。真正的建议不是创建一个固定 /html skill，而是根据用途直接要求 agent 产出 HTML artifact。

原文链接：https://twitter.com/trq212/status/2052809885763747935

论坛讨论链接：https://news.ycombinator.com/item?id=48071940

讨论的主要担忧是人类共同编辑会变弱。有人认为 HTML 适合只读报告，但如果是复杂规格，Markdown 仍方便人直接修改；全部交给 LLM 改 HTML 会让人类在语气、内容和结构上的控制进一步下降。也有人提出折中方案：Markdown 作为源文件，必要处嵌入 HTML/SVG，再用轻量模板或 pandoc 构建。还有评论提到让 LLM 自定义小型 JSON/YAML DSL 再渲染成图像或声音，效果也很强。

---

## 6. Wi is Fi：一篇把 Wi-Fi 4 到 Wi-Fi 8 讲透的超长指南 (Wi is Fi: Understanding Wi-Fi 4/5/6/6E/7/8 (802.11 n/AC/ax/be/bn))


Wi is Fi 是一篇极长的 Wi-Fi 技术指南，覆盖 Wi-Fi 4/5/6/6E/7/8、802.11n/ac/ax/be/bn、MIMO、DFS、160 MHz 信道、OFDMA、mesh、AP 放置、bufferbloat、MoCA、PoE、路由器营销话术等大量主题。文章的核心提醒是，用户买到的“11Gbps 路由器”并不等于真实客户端速度；实际体验取决于客户端 MIMO 能力、频段、信道宽度、邻居干扰、路由器位置和有线回程。它既是选购指南，也是家庭网络工程手册，重点反复打击厂商把多个频段理论峰值相加的营销数字。

原文链接：https://www.wiisfi.com/

论坛讨论链接：https://news.ycombinator.com/item?id=48037760

评论认为这是一篇很有雄心的总结，但有人指出执行摘要漏掉了 Wi-Fi 最关键的事实：它是共享无线介质，同一信道上多个 WLAN 和设备会竞争发送，且没有像以太网交换端口那样的确定性全双工。也有人补充 Wi-Fi 6 的 OFDMA 已经允许把信道切成 Resource Units 供多设备并行发送。讨论由此转向一个现实判断：Wi-Fi 的性能问题通常不是单一标准决定，而是射频环境、设备能力和调度机制共同作用。

---

## 7. 美国地毯之都的 PFAS 遗产：经济引擎如何污染一条河 (America's carpet capital: an empire and its toxic legacy)


AP、Atlanta Journal-Constitution 和 FRONTLINE 联合调查了佐治亚州 Dalton 地毯产业的 PFAS 污染。这里曾是全球地毯制造中心，Shaw Industries 等公司长期使用 3M Scotchgard 及相关防污化学品，废水把 PFAS 带入 Conasauga River 等水系，并影响佐治亚和阿拉巴马数十万人饮水。文章通过法院文件、证词和内部材料显示，企业在知道健康和环境风险后仍长期切换使用类似替代物，地方公用事业和产业利益也让监管滞后。PFAS 被称为“永久化学品”，如今存在于水、土壤、室内灰尘、鱼类、野生动物和居民血液中。

原文链接：https://apnews.com/projects/pfas-forever-stained/

论坛讨论链接：https://news.ycombinator.com/item?id=48037243

评论认为文章开头把 CEO 描写成震惊受害者有些别扭：PFAS 风险早已存在，继续使用多年不能只归咎于供应商。也有人提醒，这不是单一地区问题，家中有地毯的人也可能暴露于相关化学品。讨论进一步扩展到美国地方经济对单一产业的依赖、监管捕获、供应链责任和长期污染成本谁来承担。整体情绪是同情受害居民，但对企业和地方机构的“意外论”并不买账。

---

## 8. 闪电到底怎么开始？答案越来越像高能物理问题 (What causes lightning? The answer keeps getting more interesting)




Quanta 这篇长文回顾了闪电研究的新进展。传统解释把闪电视为云中电场击穿空气后的巨大火花，但现实更复杂：云内电场似乎不总是强到足以直接击穿空气。过去几十年，研究者用火箭、气球、卫星和高能粒子探测器研究雷暴，发现闪电会伴随 X 射线、伽马射线和高能粒子过程。越来越多证据表明，闪电起始可能依赖类似宇宙射线级联、粒子加速、相对论 runaway 电子等高能机制。换句话说，雷暴云不是简单的大电池，而是充满了类似天体物理和粒子物理现象的复杂系统。

原文链接：https://www.quantamagazine.org/what-causes-lightning-the-answer-keeps-getting-more-interesting-20260506/

论坛讨论链接：https://news.ycombinator.com/item?id=48037517

评论最感兴趣的是文章中的火箭诱发闪电视频，很多人讨论闪电为什么呈现绿色、紫色或橙色，可能和铜线、空气电离、氮发光有关。也有人问为什么不收集闪电能量，回复指出单次闪电可用能量并没有想象中那么高，且捕获成本和损耗很大。还有人提到地向云闪电、红色精灵、蓝色喷流和球状闪电，认为文章仍只覆盖了更大谜团的一部分。

---

## 9. Internet Archive Switzerland 成立：开始保存濒危档案和 AI 模型 (Internet Archive Switzerland)




Internet Archive 宣布在瑞士圣加仑成立独立非营利基金会 Internet Archive Switzerland。它将与 Internet Archive、Internet Archive Canada、Internet Archive Europe 等使命相近但独立的组织共同构建更分布式、更有韧性的数字图书馆。瑞士团队初期重点包括保护全球濒危档案，以及和圣加仑大学计算机科学学院合作推进 Gen AI Archive，尝试保存当前生成式 AI 浪潮中的模型与相关材料。选择圣加仑也有象征意义：这座城市有千年档案和学术传统，适合作为 21 世纪记忆组织的节点。

原文链接：https://blog.archive.org/2026/05/06/internet-archive-switzerland-expanding-a-global-mission-to-preserve-knowledge/

论坛讨论链接：https://news.ycombinator.com/item?id=48074265

HN 讨论迅速转向“档案如何抗删除”。有人建议 Internet Archive 应该像 Usenet 一样由多个使命一致但法律和所有权分散的机构互相 peer，让内容比 takedown 请求更容易传播。也有人提出 BitTorrent、私有 WireGuard、Syncthing、rsync 等替代方式。争论点在于，开放 Web 是公共入口但容易集中受攻击；更分散的协议能提高韧性，但也带来信任、法律和可发现性的复杂问题。

---

## 10. Martin Fowler 重读《人月神话》：概念完整性仍然是系统设计核心 (Mythical Man Month)



Martin Fowler 借《人月神话》出版 50 年回顾了 Fred Brooks 的经典观点。书中最广为人知的是 Brooks 定律：给延期的软件项目增加人手，只会让它更晚；原因在于沟通路径随人数增长急剧增加。但 Fowler 认为自己受影响最深的是“概念完整性”：一个系统宁可省略某些零散功能，也要体现统一的设计思想。概念完整性来自简单性和 straightforwardness，也就是元素之间能否容易组合。即使书中不少内容已经过时，这个观点在 2026 年仍然适用于大型软件设计，尤其适用于 AI 辅助开发时代。

原文链接：https://martinfowler.com/bliki/MythicalManMonth.html

论坛讨论链接：https://news.ycombinator.com/item?id=48046436

评论把概念完整性直接连到 AI 编程。有人认为，如果想实践 Brooks 的建议，Lamport 的方法最具体：先写一个小模型或规格，再分析它如何失败；必要时用 TLA+、Quint 或 stateright 等工具检查。另一些人说，AI 辅助开发之所以还不是银弹，是因为它能更快堆出功能，却无法自动建立系统理论。很多开发者感觉个人 feature 更快了，但端到端交付仍受限于理解问题和维护整体设计。

