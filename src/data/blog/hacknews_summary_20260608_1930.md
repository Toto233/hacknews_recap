---
title: "OpenAI：让 Codex 写完整产品，工程师转向搭系统 | Hacker News 摘要 (2026-06-08)"
author: "hacknews"
description: ""
digest: "OpenAI 分享了一次内部实验：一个团队在五个月内交付了一款内部 beta 产品，代码、测试、CI、文档、可观测性和内部工具都由 Codex 生成，人类只负责设定目标、设计环境和审查反馈回路。文章强调，真正的瓶颈不再是“写代码”，而是让代"
source_url: "https://openai.com/index/harness-engineering/"
pubDatetime: 2026-06-08 19:30:36.938+08:00
tags:
  - "AI编程"
  - "工程效率"
  - "开源工具"
  - "软件开发"
---

---

## 1. OpenAI：让 Codex 写完整产品，工程师转向搭系统 (Harness engineering: Leveraging Codex in an agent-first world)




OpenAI 分享了一次内部实验：一个团队在五个月内交付了一款内部 beta 产品，代码、测试、CI、文档、可观测性和内部工具都由 Codex 生成，人类只负责设定目标、设计环境和审查反馈回路。文章强调，真正的瓶颈不再是“写代码”，而是让代码库、文档、日志、指标、浏览器调试和 PR 流程都变得对智能体可读、可操作、可验证。团队把 AGENTS.md 变成入口地图，把设计文档、产品规格、执行计划和质量规则沉淀进仓库，再用 linter、CI 和定期清理任务约束漂移。其核心经验是：智能体优先的软件工程并不是放弃纪律，而是把纪律前移到工具、抽象、文档结构和反馈系统里，让 Codex 能长时间独立推进并修复问题。

原文链接：https://openai.com/index/harness-engineering/

论坛讨论链接：https://news.ycombinator.com/item?id=48416264

HN 讨论主要围绕吞吐量和代码膨胀展开。有人被“三名工程师驱动 1500 个 PR、约百万行代码”的速度震动，追问传统团队的合理基线以及这种速度是否真的改善了软件质量。也有人用 Firefox 的代码规模做类比，质疑 1500 个 PR 产生百万行代码是否意味着 LLM 天然更冗长，未来维护、token 成本和回到人工开发都会面临负担。整体态度是认可实验很有冲击力，但对 LOC、可维护性和真实产品价值保持警惕。

---

## 2. LLM 正在侵蚀软件工程师的核心护城河 (LLMs are eroding my software engineering career and I don't know what to do)


作者是一名有十年经验的后端工程师，长期把金融支付领域知识、复杂系统调试能力和代码架构品味视为职业护城河。但在使用企业级 LLM、Claude Code、Codex 和可观测性 MCP 后，他发现这些优势正在被快速压缩：模型可以辅助写设计文档、串联支付系统的实现取舍，也能在带有 Sentry 或 Datadog 上下文时一次性修复过去需要一两天排查的分布式问题。作者认为，AI 把很多工程师重新拉回“通用工程师”赛道，削弱了深耕某一业务域的差异化价值。最后还剩代码质量和架构判断，但当代码越来越多由机器阅读和维护时，行业对高等级代码整洁度的需求也可能下降。这篇文章不是技术教程，而是一篇关于软件工程职业安全感被重估的长文。

原文链接：https://human-in-the-loop.bearblog.dev/llms-are-eroding-my-software-engineering-career-and-i-dont-know-what-to-do/

论坛讨论链接：https://news.ycombinator.com/item?id=48434312

评论区反驳声很强。多位金融和监管行业工程师认为，作者低估了专业知识的作用：模型可以生成看似合理的方案，但在法规、合规和业务边界上经常会自信地犯错，只有真正懂领域的人才能识别风险。有人举例称前沿模型曾错误判断代码违反监管要求，而相关逻辑其实已由法律团队审查。讨论的共识更接近“AI 放大专家，而不是替代专家”，但也承认岗位定义和市场供需正在改变。

---

## 3. Linear 为什么这么快？关键是把数据库搬进浏览器 (How's Linear so fast? A technical breakdown)




这篇技术拆解从前端体验角度解释 Linear 的速度感。作者认为，Linear 最关键的基础不是某个小优化，而是从一开始就把用户界面读取的数据放在浏览器本地：用 IndexedDB 和内存状态作为前端事实来源，用户操作先同步更新本地，再由同步引擎异步批量推送到服务器，并通过 WebSocket 分发增量。这样用户点击、改标题、创建 issue 时不必等网络往返，也就没有传统 CRUD 应用常见的 spinner 和冻结感。文章还提到首屏加载、同步引擎、动画和整体产品设计都围绕“隐藏网络请求”展开。对普通应用来说，不必复制 Linear 的完整架构，也可以用 TanStack Query、SWR 等乐观更新模式显著改善体感性能。

原文链接：https://performance.dev/how-is-linear-so-fast-a-technical-breakdown

论坛讨论链接：https://news.ycombinator.com/item?id=48437609

HN 讨论并不完全买账。很多长期用户说 Linear 早期确实简单且快，但现在随着功能增加，搜索、加载、通知流和多标签页体验都变得笨重，甚至有人认为它正走向功能膨胀。也有人把 Jira 作为反面参照，认为 Linear 的快主要来自早期产品取舍，而不是每个场景都领先。另一条讨论线转向本地优先和同步协议，有人推荐 Zero、Replicache 等工具，认为这种架构适合追求即时响应的复杂 Web 应用。

---

## 4. Lathe：用 LLM 生成教程，但让你亲手学会 (Show HN: Lathe – Use LLMs to learn a new domain, not skip past it)





Lathe 是一个 Go CLI 加 LLM 技能组合，目标不是让模型替你完成任务，而是为你生成可动手实践的多章节技术教程。用户可以在 Claude Code、Cursor 或 Codex 中输入类似“构建一个 Erlang 3D slicer”的提示，Lathe 生成带来源、目录、旁注和练习的教程，再通过本地 Web UI 阅读并手动敲代码。它还支持提问、验证教程能否运行、续写新章节和管理教程库。作者强调，Lathe 不是要替代人类写的优质教程，而是在某些小众技术主题缺少好教程时填补空白；因为学习者仍要自己输入、运行和理解代码，反而更容易发现 LLM 输出里的问题。这是一个把 LLM 用作学习脚手架，而不是认知外包的工具。

原文链接：https://github.com/devenjarvis/lathe

论坛讨论链接：https://news.ycombinator.com/item?id=48433756

讨论集中在“LLM 如何促进学习而不是削弱学习”。有人提出类似的苏格拉底式问答技能，让模型不断追问，逼用户自己推理，从而降低所谓认知债务。也有人担心严肃主题不能只靠 LLM 教程，传统资料、课程和原始来源仍更可靠。作者和支持者则认为，Lathe 的定位是补充：当没有好的人类教程时，用模型生成一个起点，再通过手打、验证和追问把学习过程留给人。

---

## 5. 智能体编程最烧 token 的环节，不是写代码 (Tokenomics: Quantifying Where Tokens Are Used in Agentic Software Engineering)


这篇 arXiv 论文研究 LLM 多智能体系统在软件开发生命周期中的 token 消耗分布。作者分析 ChatDev 框架用 GPT-5 reasoning model 完成 30 个软件开发任务的执行轨迹，并把内部流程映射到设计、编码、代码补全、代码审查、测试和文档等阶段。初步结果显示，token 成本主要不在首次代码生成，而在反复的代码审查、修正和验证阶段：迭代式 Code Review 平均占总 token 的 59.4%，输入 token 又占平均 53.9%。这说明 agentic software engineering 的实际开销来自协作协议和反馈循环，而不仅是模型输出代码的长度。论文的价值在于给成本预测和流程优化提供了一个度量框架，也提醒团队设计更节省 token 的智能体协作方式。

原文链接：https://arxiv.org/abs/2601.14470

论坛讨论链接：https://news.ycombinator.com/item?id=48430923

HN 讨论从论文延伸到多智能体工作流实践。有人介绍自己做的个人多智能体系统：先用便宜模型追问澄清问题，再让不同策略并行求解，最后由元评审汇总，并展示不同策略之间的差异。评论者对成本结构、模型选择和 harness 设计很感兴趣。一个有共鸣的观点是，“Refine”步骤可能比直接 Plan 或 Agent 更有价值，因为很多用户最初的问题表达并不充分，先澄清需求能减少后续浪费。

---

## 6. IOCCC 2025 获奖名单公布：混乱 C 代码继续整活 (The 29th International Obfuscated C Code Contest (IOCCC) 2025 Winners)


第 29 届 International Obfuscated C Code Contest 公布了 2025 年获奖作品。主办方表示，在经历 2020-2024 年中断后，IOCCC 已连续第二年回归，本届投稿数量和质量仍接近历史高位。页面列出所有获奖条目，并建议读者查看每个 entry 的 index.html、源码和作者说明，尝试理解这些 C 程序到底做了什么。今年还为获奖作品加入了 fun challenge，鼓励读者在理解程序后提交替代实现、解释或改进。组织层面，评委也记录并改进了比赛关闭、评审、获奖发布和视频展示流程。值得注意的获奖作品包括 Subleq computer、黑洞打孔卡 Fortran、patch/diff quine、类 roguelike 游戏、Dr. WHO sequence，以及多位作者的三连作品。

原文链接：https://www.ioccc.org/2025/

论坛讨论链接：https://news.ycombinator.com/item?id=48432199

HN 用户最关注的是一个代码外形像 GameBoy 的 GameBoy 模拟器。作者 Nick Craig-Wood 解释说，IOCCC 的大小限制极其严苛，入口只允许 2503 个非空白字符和 4K 总代码体积；他先写了完整模拟器，再花约 100 小时缩小到限制内，并为了跑 Tetris 删除不必要硬件特性，还研究规则检查程序寻找空间。讨论里既有人惊叹这种工程量，也有人吐槽“让代码看起来像图片”是混淆竞赛老梗，但整体氛围很欢乐。

---

## 7. Linux 用户催 Anthropic：请给 Claude Desktop 官方版 (Anthropic, please ship an official Claude Desktop for Linux)


这是一条 Anthropic Claude Code 仓库里的功能请求，要求 Anthropic 给出 Claude Desktop 的 Linux 支持路线，最好发布一方官方构建。提案指出，Claude Code CLI 已能在 Linux 原生运行，但桌面扩展、Computer Use、桌面听写和 Cowork 等能力仍依赖 Claude Desktop，而官方目前只提供 macOS 和 Windows 版。作者认为这不仅影响 Linux 用户体验，也影响 Claude Code 插件开发，因为插件需要在 Desktop extensions 上测试。文中还提到，Anthropic 已经为 Claude Code 分发 Linux apt、dnf、apk 仓库和多架构二进制，Cowork 内部也运行 Linux VM，因此问题不是完全没有 Linux 能力，而是缺少公开、签名、受审计的桌面发布目标。否则用户只能信任第三方 Electron 重打包版本处理凭据和本地文件访问。

原文链接：https://github.com/anthropics/claude-code/issues/65697

论坛讨论链接：https://news.ycombinator.com/item?id=48434436

评论区由非官方 Linux 构建维护者现身说明现实难点：Linux Electron 桌面应用一旦超过网页壳，就会陷入发行版、桌面环境、Wayland/X11、全局快捷键、托盘图标和 portal 后端的兼容性泥潭。其他人也分享了商业软件发布 Linux 客户端的经历：用户基数小，但问题分布极广，支持成本很快失控，而且用户往往非常 vocal。讨论并未否认官方构建的安全价值，只是提醒“能构建 Linux 二进制”和“稳定支持 Linux 桌面应用”是两回事。

---

## 8. 公共领域图片档案：一万多张历史图像可自由浏览复用 (Public Domain Image Archive)



Public Domain Image Archive 是 The Public Domain Review 推出的公共领域图像档案，收录超过 10,000 张经过策展的无版权历史图片，覆盖 2000 多年的视觉文化。它既是一个实用素材库，也是一个适合漫游发现的图像入口，支持按艺术家、世纪、风格、主题和标签浏览，还提供目录视图、无限视图和随机浏览。项目图像来自 200 多个美术馆、图书馆、档案馆和博物馆，许多图片曾出现在 PDR 的文章中，并附有指向来源机构和相关背景文章的链接。网站强调，团队会尽量确认作品和数字副本的权利状态，只收录他们认为可无障碍复用的图像，但仍提醒不同司法辖区的公共领域规则不同，严肃商业使用最好自行核验来源。

原文链接：https://pdimagearchive.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48430539

HN 讨论主要围绕版权来源证明。有人称很多网站都宣称图片是 public domain，但真正用于书籍封面、商业项目或平台发布时，最需要的是 provenance documentation，而 PDIA 至少比很多站点更坦诚地说明权利状态只是指导，不构成法律意见。Standard Ebooks 的贡献者介绍了更严格的做法：要求版权过期出版物扫描，或可信博物馆明确 CC0 声明。也有人提醒公共领域并非全球统一，数字复制品是否产生新权利也因国家而异。

---

## 9. 以色列 Steam P2P 游戏延迟异常，玩家怀疑区域网络问题 (Major P2P issues in Israel and possibly other Middle East countries)


一名用户在 Valve GameNetworkingSockets 仓库报告，以色列及可能其他中东国家的 Steam Networking P2P 游戏出现系统性延迟问题。自 3 月 13 日左右开始，使用 Steam P2P 网络的游戏在以色列 PC 玩家之间延迟约 120ms，而与欧洲玩家连接反而只有 60-80ms；同一款游戏在 PC 到 PS5 跨平台连接时延迟仅 5-10ms。受影响玩家覆盖多个 ISP，社区尝试联系 ISP、调整端口转发和排查本地网络都没有结果，且 Tekken 8 等不使用 Steam Networking 的 P2P 游戏没有同类问题。报告者怀疑这可能不只影响以色列，也有埃及玩家反馈类似现象，希望 Valve 或相关维护者能调查 Steam P2P 路径、NAT 穿透或区域中继配置是否出现异常。

原文链接：https://github.com/ValveSoftware/GameNetworkingSockets/issues/398

论坛讨论链接：https://news.ycombinator.com/item?id=48431461

评论区从技术和地缘网络两条线分析。有人猜测这可能不是 Valve 单点故障，而是中东冲突外溢到网络空间，导致 STUN、UDP 或 NAT 穿透流量被过滤、干扰或降级。其他人解释 STUN/TURN 在 WebRTC 和 P2P 建连中的角色：STUN 只是帮助发现公网 IP 和端口，TURN 才会中继流量；如果 STUN 失败，连接可能被迫走更集中、更慢的路径。也有人认为更普通的原因可能是 CGNAT、安全策略或 ISP 配置错误。

---

## 10. 从成瘾、入狱和重罪记录中重建人生 (Building from zero after addiction, prison, and a felony)



作者 Gavin Ray 写下了自己从少年成瘾、监禁、重罪记录到进入软件和开源社区的经历。他 14 岁因滥用和贩卖处方药被捕，随后在最高安全级别的少年监狱度过两年；释放后短暂读社区大学、做体力劳动，但又因毒品和生活失控多次跌入低谷。文章的重点不是戏剧化苦难，而是说明一个有犯罪记录、贫困和成瘾背景的人如何在少数愿意给机会的人帮助下，通过编程、开源贡献和社区连接重新建立职业与生活。作者说，他写这篇文章是给那些默默觉得自己已经没有未来的人看：糟糕的起点会带来长期后果，但并不等于人生没有修复空间。

原文链接：https://gavinray97.github.io/blog/building-from-zero-after-addiction-prison-felony

论坛讨论链接：https://news.ycombinator.com/item?id=48437406

HN 讨论变成了许多非传统技术从业者的互相回应。有人分享自己从辍学、街头生活、偷窃和底层工作一路进入 Linux/FOSS 公司、远程工作并建立家庭的经历；也有人提到其他从成瘾、战争或社会边缘重新建立人生的故事。评论整体少有技术争论，更多是对第二次机会、开源社区的入口作用、冒名顶替感和背景污名的讨论。许多人认为，这类故事的价值在于让处在低谷的人看到一条可行路径。

