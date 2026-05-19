---
title: 'Cloudflare 试用 Mythos：AI 已能串起漏洞利用链 | Hacker News 摘要 (2026-05-19)'
author: 'hacknews'
description: ''
digest: 'Cloudflare 分享了在 Project Glasswing 中试用 Anthropic Mythos Preview 的经验。他们把这个面向安全研究的 frontier model 跑在 50 多个自有代码仓库上，用来寻找潜在漏洞，'
source_url: 'https://blog.cloudflare.com/cyber-frontier-models/'
pubDatetime: 2026-05-19 19:53:39.102+08:00
tags:
  - AI_安全
  - AI_平台
  - 开发工具
  - 开源生态
---

---

## 1. Cloudflare 试用 Mythos：AI 已能串起漏洞利用链 (Project Glasswing: what Mythos showed us)



Cloudflare 分享了在 Project Glasswing 中试用 Anthropic Mythos Preview 的经验。他们把这个面向安全研究的 frontier model 跑在 50 多个自有代码仓库上，用来寻找潜在漏洞，也借此观察攻击者很快会具备什么能力。Cloudflare 认为 Mythos 的关键变化不是单点 bug 检测，而是两件事：一是能把多个低严重度原语串成完整 exploit chain，例如把 use-after-free 转成读写原语、控制流劫持和 ROP 链；二是能自动生成 proof，写触发代码、编译、运行、根据失败调整假设再试。它把“可疑漏洞”推进到“可验证可利用”的闭环。文章也指出，模型的拒答并不稳定：同一合法研究任务换个上下文可能从拒绝变成执行。Cloudflare 的结论是，安全团队不能只把这类模型当聊天工具，而要用沙箱、权限边界、日志和正式漏洞管理流程来承接它们。

原文链接：https://blog.cloudflare.com/cyber-frontier-models/

论坛讨论链接：https://news.ycombinator.com/item?id=48179732

HN 讨论对文章的营销味很敏感。很多人觉得 Cloudflare 说“这是一种不同工具”但描述的使用方式仍像普通模型加自动化 harness，实质内容没有比 Anthropic Mythos 公告多太多。也有人认为他们可能受 NDA 限制，无法写清模型差异。另一些评论指出，即便文章偏宣传，核心趋势仍重要：模型已经能从多个小问题推导可利用链，防守方和攻击方都会受益。讨论焦点从“这篇博客是否够硬核”转向“安全团队是否准备好把模型输出放进可审计、可复现、可修复的流程”。

---

## 2. Anthropic 收购 Stainless，补上 Agent 连接层 (Anthropic acquires Stainless)


Anthropic 宣布收购 Stainless，一家专注 SDK、CLI 和 MCP server 生成工具的公司。Stainless 自 2022 年成立以来，已经为 Anthropic 官方 SDK 提供生成能力，也服务许多公司把 API spec 转成 TypeScript、Python、Go、Java、Kotlin 等语言的原生 SDK、命令行工具和 MCP 连接器。Anthropic 给出的逻辑很明确：AI 正从“回答问题的模型”转向“能执行任务的 agent”，而 agent 的能力取决于它能可靠连接哪些系统。Anthropic 自己创建 MCP，是为了让 agent 连接数据和工具；把 Stainless 团队纳入平台工程，意味着 Claude 平台会更重视 API 可达性、开发者体验和连接器生态。换句话说，这不是单纯买一个 SDK 生成器，而是在补齐 agent 真正进入企业系统所需的“管道工”基础设施。

原文链接：https://www.anthropic.com/news/anthropic-acquires-stainless

论坛讨论链接：https://news.ycombinator.com/item?id=48182281

HN 讨论把这次收购看作 AI 公司招揽顶级工程团队的一种方式：与其公开招聘“年薪千万的极强工程师”并被简历淹没，不如收购一家已经证明能力的基础设施公司。Stainless 创始人也出现在评论区，解释公司名字来自“不锈钢管件”，最早 slogan 是为 REST API 提供高质量 fittings，说明他们本来就热爱这种看似无聊但关键的 API plumbing。评论者普遍认为，AI 时代真正值钱的不只是模型本身，还有让模型可靠使用 HubSpot、Stripe、内部系统和各类 API 的 boring infrastructure。

---

## 3. Musk 诉 OpenAI 败诉，关键是起诉太晚 (Elon Musk has lost his lawsuit against Sam Altman and OpenAI)


TechCrunch 报道，Elon Musk 针对 Sam Altman、Greg Brockman、OpenAI 和 Microsoft 的诉讼在加州陪审团前失败。Musk 指控 OpenAI 通过建立营利附属实体“偷走慈善机构”，但 9 名陪审员一致认为他的索赔已经超过法律允许期限。OpenAI 的核心抗辩是 statute of limitations：如果 Musk 认为自己受损，相关事实早在 2019 或 2021 年 Microsoft 交易时就已经发生，而不是等到 2023 年才形成可诉伤害。法官 Yvonne Gonzalez Rogers 表示，有充分证据支持陪审团判断。此案结束后，OpenAI 面临的一个重大重组威胁暂时解除，也有利于其传闻中的 IPO 路径。Musk 则在判决后称会向第九巡回上诉，继续主张 Altman 和 Brockman 通过“偷走慈善机构”获利。

原文链接：https://techcrunch.com/2026/05/18/elon-musk-has-lost-his-lawsuit-against-sam-altman-and-openai/

论坛讨论链接：https://news.ycombinator.com/item?id=48182754

HN 上一位法律背景评论者解释了这次判决的真正意义：陪审团只回答了诉讼是否过期这个前置问题，因此没有必要判断 Musk 在实体争议上是否正确。若 2019 和 2021 年 Microsoft 交易已经足以让 Musk 提起同类诉讼，那么 2023 年再告就太晚。评论者还指出，上诉成功概率很低，因为诉讼时效是否被触发通常是事实问题，上诉法院会高度尊重陪审团事实认定。许多人也认为 Musk 的慈善信托理论很弱，因为邮件记录显示他曾接受 OpenAI 转向营利、非营利加营利附属，甚至并入 Tesla 的多种路径。

---

## 4. Semble：给 Agent 用的省 token 代码搜索 (Show HN: Semble – Code search for agents that uses 98% fewer tokens than grep)



Semble 是一个面向 coding agent 的代码搜索工具，目标是替代 agent 在大型代码库里盲目 grep、read 全文件或启动子 agent 的高 token 消耗模式。它支持 MCP server、CLI 和 AGENTS.md/CLAUDE.md 集成，让 Claude Code、Codex、Cursor、OpenCode 等工具用自然语言查询代码，例如“authentication flow”或“save model to disk”，返回相关代码片段而不是整文件。作者声称它比 grep+read 节省约 98% token，平均仓库索引约 250ms、查询约 1.5ms，全部在 CPU 上运行，无需 API key、GPU 或外部服务。技术上，它结合静态 Model2Vec embedding、BM25、RRF 融合和 code-aware rerank，在约 1250 个查询/文档对、63 个仓库和 19 种语言的 benchmark 上达到 0.854 NDCG@10，接近 137M 参数代码 transformer 的 99% 检索质量，但索引快约 200 倍。

原文链接：https://github.com/MinishLab/semble

论坛讨论链接：https://news.ycombinator.com/item?id=48169874

HN 讨论既有兴趣也有怀疑。作者在主贴中强调，Semble 解决的是 agent 找不到上下文时高成本乱读文件的问题，而不是替代精确字符串搜索。评论者关心 benchmark 是否足够代表真实代码库、自然语言查询是否会漏掉符号级需求，以及 MCP 集成在不同 agent 里的实际体验。也有人认为这种工具代表 coding agent 下一阶段的基础设施：不只是让模型更聪明，而是给模型更便宜、更精确的 repo memory。比较务实的共识是，grep 仍适合精确匹配；语义检索适合先定位区域，再决定是否读完整文件。

---

## 5. Files.md：本地 Markdown 笔记，反对第二大脑过度复杂化 (Show HN: Files.md – Open-source alternative to Obsidian)




Files.md 是一个开源、local-first 的 Markdown 笔记应用，定位为 Obsidian 的极简替代。它强调数据不离开设备，所有内容都是普通 .md 文件，可保存笔记、文档、项目、日记、习惯、任务和清单。使用方式可以是本地文件夹、iCloud/Dropbox/Google Drive 云文件夹同步、自托管 Go 单文件服务器，或托管版 app.files.md。项目作者反复强调“安静”和“必要功能”：不追求复杂插件、模板和 AI workflow，而是用一条笔记一个想法、少结构、手动连接、反复回看，逼迫用户真正思考。README 里还引用了对“第二大脑”的批评：知识管理工具很容易制造掌控感，把真正的思考工作推迟给未来的自己。Files.md 的卖点不是功能最多，而是代码简单、LLM 也能理解和改造，数据长期可迁移。

原文链接：https://github.com/zakirullin/files.md

论坛讨论链接：https://news.ycombinator.com/item?id=48179677

讨论里很多人首先意识到 Obsidian 本身并不开源，只是数据格式开放、插件开源、核心应用闭源。有人认为这已经足够，因为 vault 是 Markdown，随时可被其他编辑器接管；也有人担心闭源核心仍能读取本地数据。另一个争论点是 PWA：有人不愿在桌面上安装“假装桌面应用”的 Web app，宁可要原生应用。也有人觉得 Files.md 的简单性很吸引人，因为许多笔记软件最后都会膨胀成 productivity OS。整体分歧不是 Markdown 本地文件是否正确，而是用户更看重插件生态、原生体验，还是极简和可维护性。

---

## 6. AI 垃圾 PR 泛滥，他们用 Git author 旗标挡住了 (We stopped AI bot spam in our GitHub repo using Git's –author flag)





Archestra 描述了他们如何处理 GitHub 仓库里的 AI bot spam。团队原本给 issue 设置 900 美元 bounty，希望吸引真实贡献者实现 MCP Apps 支持，结果大量 AI 账号涌入，制造空洞“实现计划”、攻击维护者、提交未测试 PR 和幻觉 issue。某个 x.ai provider support issue 收到 27 个 PR，多数没有真正测试。维护者每周要花半天清理垃圾，真实贡献者的讨论被埋没。最初他们尝试 contributor reputation bot 和“AI sheriff”，但效果有限且误伤。最终他们启用 GitHub 的 “Limit to prior contributors”：只有曾经提交到 main 的账号才能评论、开 issue 或 PR。为避免锁死新贡献者，他们设计了 onboarding 流程，利用 git commit 的 `--author` flag 让通过审核的人先成为“prior contributor”。这是一个激进的门禁方案，牺牲开放便利来保护开源协作质量。

原文链接：https://archestra.ai/blog/only-responsible-ai

论坛讨论链接：https://news.ycombinator.com/item?id=48181125

HN 讨论很快指出这个方法的安全副作用：GitHub 对 prior contributor 往往给予更高信任，例如 fork PR 运行审批要求可能降低。恶意用户可以先让一个小改动被合入，随后获得更多权限。作者回应说，他们认为外部贡献者都应默认需要审批，GitHub 应把“所有外部贡献者都需 approval”作为默认。评论者进一步提醒，真正的安全边界还取决于是否误用 `pull_request_target`、是否暴露 secrets、是否信任组织成员。讨论的核心不是 AI spam 是否烦人，而是开源项目在低门槛参与、安全、质量和维护者注意力之间已经进入新平衡。

---

## 7. Bitwarden 的安静改造，让老用户不安 (The quiet renovation at Bitwarden)



这篇文章追踪 Bitwarden 近期一系列低调变化。作者此前批评 Bitwarden 将 Premium 价格翻倍，却把涨价埋在功能公告里，并用“月费”表达一个从不按月计费的产品。现在又出现更多信号：长期 CEO Michael Crandell 在 2 月转为顾问，公司没有正式公告；新 CEO Michael Sullivan 的履历突出并购和私募股权经验，曾参与 Acquia 被 Vista Equity Partners 收购、Insightsoftware 获 Hg 投资等交易；CFO 也在 4 月更换。产品页面中“Always free”的承诺消失；公司价值观 GRIT 中的 Inclusion 和 Transparency 被 Innovation 和 Trust 替换；一篇 2022 年旧博客被半更新，正文前后价值观还互相矛盾。作者认为，这些变化共同指向 Bitwarden 从社区信任驱动的密码管理器，逐步转向更典型的商业化和可能的退出路径。

原文链接：https://blog.ppb1701.com/the-quiet-renovation-at-bitwarden

论坛讨论链接：https://news.ycombinator.com/item?id=48163389

HN 讨论里很多用户提到 Vaultwarden 作为开源兼容替代，认为即使 Bitwarden 走坏，社区也有退路。但也有人提醒，自托管密码管理器不是随便跑个容器就完事：这是长期保存核心秘密的系统，必须认真处理备份、恢复演练、异地副本和访问安全。另一些评论认为，Bitwarden 数据格式和客户端生态仍相对开放，最坏情况可能是客户端与 Vaultwarden 不兼容，届时社区会 fork。讨论情绪总体不是立即恐慌，而是对“安静删承诺、安静换管理层、安静改价值观”这种沟通方式不满。

---

## 8. jank 为 Clojure 方言打造了自己的 IR (Jank now has its own custom IR)



jank 是一个 Clojure 方言项目，作者宣布它已经拥有自定义中间表示 IR，并计划用它把性能优化到能与 JVM Clojure 竞争。过去 jank 主要把代码交给 C++ 或 LLVM IR，再依赖 LLVM 做底层优化；但 LLVM IR 太低层，不理解 Clojure 的 var、transient、persistent data structure、lazy sequence、动态调用和多态语义，因此很难优化真正的 Clojure 程序。新 IR 则直接以 jank/Clojure 语义为中心，可表达 lifted vars、常量、函数、block、truthy、branch、dynamic-call 等高层结构。这样编译器可以在降到 LLVM 前做更懂语言的优化。作者也强调，jank 即使用 C++ 写，也无法逃避 Clojure 动态类型、GC 和多态语义；如果最终快于 JVM Clojure，那会是因为 AOT 编译后启动就快，而不是像 JVM 那样靠长时间运行的 JIT 逐步变快。

原文链接：https://jank-lang.org/blog/2026-05-08-optimization/

论坛讨论链接：https://news.ycombinator.com/item?id=48151251

HN 讨论认为这是长期基于 LLVM 的编译器自然演化：很多项目最后都会在 LLVM 前面加入自己的 IR，用来做语言级优化，而不是替换 LLVM 后端。有人问既然 LLVM 的价值是免费后端，为什么还要自建 IR；回答是自定义 IR 负责高层语义转换和优化，LLVM 仍负责低层代码生成。也有人建议 benchmark 不应只和 OpenJDK 21 比，还应纳入更新 Java、OpenJ9、GraalVM，以及 Common Lisp、Scheme 编译器。评论总体认可这是扎实工程，也祝作者能找到继续全职开发 jank 的资金支持。

---

## 9. 333 小时宇航员问答，变成可语义搜索档案 (Ask an Astronaut: 333 hours of Q&A footage with astronauts)


Ask an Astronaut 是一个可搜索的 NASA 宇航员问答档案，汇集了国际空间站二十多年飞行采访、新闻发布会和学生 Q&A 中的真实问题与回答，总时长约 333 小时。项目由 ISS in Real Time 和 Apollo in Real Time 的创作者 Ben Feist、David Charney 制作。他们的问题是：孩子们能问宇航员的问题，是不是几乎都已经被问过了？系统从 NASA Johnson Space Center 在 Internet Archive 上的公开视频出发，先用元数据和本地 LLM 筛出可能包含 ISS Q&A 的视频，再用 WhisperX 转录、做音素级时间对齐和 speaker diarization。随后用规则和模型提取问答对，并让用户用自然语言描述兴趣点，搜索引擎会找到最接近的真实问题并跳到视频对应时间。匹配在浏览器本地 AI 模型里完成，搜索 query 不离开设备。

原文链接：https://askanastronaut.issinrealtime.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48152754

项目作者在 HN 评论区补充说，灵感来自和合作者聊天时想到“孩子们能问宇航员的问题是否已经都被问过”。很多评论者称赞 About 页面里的技术细节，尤其是把公开视频、语义搜索、WhisperX 时间戳和浏览器本地模型结合起来。有人表示希望小时候就有这样的工具，也有人联想到用类似管线处理语言课程、提取外语片段或为长视频建立精确时间索引。讨论整体比较正面，大家把它看作 AI 用在公共档案和教育场景的好例子：不是生成新内容，而是让已有的人类问答变得可发现。

---

## 10. 一台显示器切两台电脑，不再折腾线缆 (Two computers, one monitor, zero fiddling (2025))


这篇文章讲述如何让一台 Mac 笔记本和一台 Linux 台式机共享同一套显示器、键盘、鼠标和音频，而且切换时不用摸线缆或显示器按钮。作者的方案基于两件事：选择内置 KVM 的显示器，让 USB 外设跟随当前视频输入；再用 DDC（Display Data Channel）通过 HDMI/DisplayPort/USB-C 向显示器发送命令，直接切换输入源、音量、亮度等。作者使用 MSI MPG 321URX，MacBook 走 USB-C，Linux desktop 走 DisplayPort，键鼠接到显示器 USB hub。macOS 上用 m1ddc，Linux 上用 ddcutil，再把命令绑定到快捷键。最终效果是按键即可在工作机和个人桌面之间切换，外设也自动跟随，避免 USB-C switch、拔插线和显示器菜单的摩擦。

原文链接：https://alexplescan.com/posts/2025/08/16/kvm/

论坛讨论链接：https://news.ycombinator.com/item?id=48156186

讨论里有人推荐 Level1Techs KVM，用独立硬件处理多电脑多显示器切换。虽然价格约 500 美元，但优点是不依赖显示器特定功能，视频和 USB 切换几乎无延迟，升级显示器时只需关心面板本身，不必追求 KVM、刷新率、接口和显示技术的完美组合。也有人更喜欢 USB switch 加显示器输入切换的简单方案。整体讨论说明多设备桌面没有唯一最优解：内置 KVM + DDC 最整洁、成本取决于显示器；独立 KVM 更灵活但贵；USB switch 更便宜但视频切换仍需另想办法。

