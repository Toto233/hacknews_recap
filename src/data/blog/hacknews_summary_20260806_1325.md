---
title: "Google 重组 DeepMind：哈萨比斯转任主席，Jeff D | Hacker News 摘要 (2026-08-06)"
author: "hacknews"
description: ""
digest: "Google 宣布调整 AI 领导层：Demis Hassabis 卸下 Google DeepMind 日常运营职责，转任 DeepMind 主席兼 Alphabet 首席科学家，专注 AGI、科学研究和外部协作；Koray Kavukc"
source_url: "https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/"
pubDatetime: 2026-08-06 13:25:12.051+08:00
tags:
  - "人工智能"
  - "软件工程"
  - "开发工具"
  - "隐私安全"
---

---

## 1. Google 重组 DeepMind：哈萨比斯转任主席，Jeff Dean 离职创业 (Changes at Google DeepMind: Demis Hassabis from CEO to Chair, Jeff Dean departs)



Google 宣布调整 AI 领导层：Demis Hassabis 卸下 Google DeepMind 日常运营职责，转任 DeepMind 主席兼 Alphabet 首席科学家，专注 AGI、科学研究和外部协作；Koray Kavukcuoglu 将承担更多团队运营工作。另一项更大的人员变化是，Google Senior Fellow Jeff Dean 与 Sanjay Ghemawat 将离开，成立独立的公益公司 Discovery Loop，以自动化机器学习、科学与工程中的实验循环。Google 将作为其创始投资者和云合作方继续合作。这一重组一面显示 Google 希望把研究前沿与大规模产品推进分开，一面也意味着几位奠定搜索、分布式系统和现代 AI 基础的核心人物开始转向新机构。

原文链接：https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/

论坛讨论链接：https://news.ycombinator.com/item?id=49184755

HN 最热烈的讨论围绕 Google 的人才流失与创新节奏。有人将近年离开的研究者列成长名单，认为这反映组织对前沿研究不够友好；也有人反驳，Google 本来就能培养出知名研究者，离职本身不等于衰退。关于 Gemini 的争论则聚焦“预览版是否算正式发布”、Google 是否愿意为企业客户长期背书，以及它面对 OpenAI、Anthropic 时的迭代速度。评论没有形成定论，但普遍把这次人事变动视为 AI 竞争格局中的重要信号。

---

## 2. Cloudflare OS：让每个 AI 应用实例都可安全改造 (Cloudflare OS: an open platform for agents, apps, and work)





Cloudflare 发布 Cloudflare OS，定位为面向代理、应用与团队协作的开放平台。其核心不是单纯做一个带连接器的聊天机器人，而是把每个应用实例放进细粒度隔离的沙箱中：平台控制访问权限，用户拥有各自的应用副本，并可以让代理直接按需求修改该副本。Cloudflare 以 Workers 基础设施承载这种模式，强调非技术用户也能在受控边界内“vibe code”，同时避免一个应用的权限或漏洞扩散到其他实例。它延续了 Sandstorm 的“每份应用独立隔离”思路，试图把 AI 改软件从开发者专属能力变成可治理的日常工作流。

原文链接：https://blog.cloudflare.com/cloudflare-os/

论坛讨论链接：https://news.ycombinator.com/item?id=49182996

HN 读者认为产品真正的卖点是“每人一份可安全修改的应用实例”，而不是公告开头较泛的 AI 知识库叙述。Cloudflare 负责人也承认博客要同时面向多个受众，因而没有把这一点放在最前。讨论进一步比较了 MCP 暴露大量工具、代码模式只开放搜索与执行两种能力，以及如何让代理的权限边界可验证。整体评价是理念很有吸引力，但产品文案过于抽象，反而掩盖了它与普通 AI 聊天产品的区别。

---

## 3. 软件工程与生成式 AI 的八个常见误区 (Eight Myths on Software Engineering and GenAI)


六位微软研究者梳理生成式 AI 在软件工程中的八个常见误区。文章指出，开发者真正写代码的时间只约占工作周的 14%，因此即使代码生成提速，也未必解除设计、理解遗留系统、测试、评审和协作等外部瓶颈；用 AI 生成代码行数衡量效果既缺乏统计效度，也会诱导错误激励。作者还强调，效果受任务类型、代码库熟悉度、工程师经验与组织环境影响，并不会把每个人都变成“10 倍工程师”。要获得生产率收益，企业需要调整流程与支持体系，而不是只采购许可证；信任、学习成本、去技能化担忧及合规和遗留系统，也会阻碍工具落地。

原文链接：https://queue.acm.org/detail.cfm?id=3807963

论坛讨论链接：https://news.ycombinator.com/item?id=49176830

评论对“反正很快会有更强 AI，所以现在的研究或工作没必要做”的流行说法提出反驳：若所有人都等待未来工具，推动技术进步的人反而会消失。有人把 LLM 看成会迁移并复制部分工作、却不自动消除系统性瓶颈的工具；也有人提醒，研究者与工程师仍须判断问题、验证结果和塑造使用场景。讨论与同日的“LLMs Can't Jump”文章相互呼应，但没有把局限理解成不用 AI，而是主张避免用夸张预期替代实际测量。

---

## 4. 立场论文：大语言模型还不会完成科学发现的“跳跃” (Position: LLMs Can't Jump)


这篇获 ICML 2026 接收的立场论文把科学发现拆为归纳、演绎与溯因。作者认为，LLM 已擅长统计匹配，也越来越能在既有前提下做形式推理，但缺少从稀疏感知经验提出全新解释性公理的“跳跃”。论文以爱因斯坦形成广义相对论为例，质疑把创造力等同于数据压缩的解释：当观测数据不足时，仅靠语言与已有符号空间难以导出新的基础假设。作者提出，具备物理一致性、可运行反事实实验的多模态世界模型，或许能提供这种溯因所需的感知基础。审稿意见认可问题设置，但要求将绝对化措辞改为可检验的理论主张。

原文链接：https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DklU4737opt

论坛讨论链接：https://news.ycombinator.com/item?id=49181083

HN 的讨论从“语言是否是人类经验的有损编码”切入。评论者认为，人类能以难以言传的直觉模拟世界，而主要从语言训练的模型或许难以越过这一层；也有人指出，代码语义更紧、歧义更少，或可解释模型在代码任务上往往更稳定。参与者没有把论文的结论当成已经证实的模型能力边界，而是将其视为一个开放实验：世界模型、感知和反事实模拟是否会缩小这种差距，仍需实证回答。

---

## 5. WebKit 的三处代理绕过会泄露真实 IP 与 DNS 请求 (IP and DNS Leaks in WebKit Affecting Proxy Browsers and iCloud Private Relay)




Mysk 的安全研究发现，iOS 与 macOS 上基于 WebKit、并通过 WKWebsiteDataStore 配置代理的浏览器，存在三类可能绕过代理的网络路径：DNS 预取、WebAuthn Related Origin Requests 和 WebTransport。前两者可让 DNS 请求或操作系统发起的验证请求直接离开设备，WebTransport 也可能在代理路径外建立连接，从而暴露真实网络地址；Apple 的 iCloud Private Relay 同样会受这些路径影响。研究者强调系统级 VPN 不受影响，并在自家 Psylo 1.3.1 中默认阻止 DNS 预取和 WebTransport、关闭 WebAuthn，同时允许用户按站点重新启用。

原文链接：https://mysk.blog/2026/08/04/webkit-proxy-icloud-private-relay-ip-leak/

论坛讨论链接：https://news.ycombinator.com/item?id=49176697

HN 评论普遍肯定 DuckDB 在单机上的实用性：它能直接查询压缩 JSON 日志、CSV 和多种外部数据源，让不少原本会启动 Spark 集群的分析任务回到一台机器和一段脚本中。Clojure 生态用户则讨论 tmducken 与较新的 ducktape，尤其在插入和查询复杂类型、批量数据路径上的取舍。有人追问为何不用 JDBC；回应指出 JDBC 的行列转换和非批量 API 难以发挥 DuckDB 的高吞吐接口。评论还提到 DuckDB 的扩展系统可连通 PostgreSQL、SQLite、数据湖和对象存储。

---

## 6. 无状态 MCP 让 Simon Willison 重新看好这一协议 (Stateless MCP has recaptured my interest)



Simon Willison 认为 2026 年 7 月的无状态 MCP 规范显著降低了协议实现与部署复杂度。旧式 HTTP MCP 需要初始化会话、保存 Mcp-Session-Id，并在后续请求中维持会话路由；新方式可用一次请求表达工具调用，不必让服务器保存会话状态，更适合可横向扩展的 Web 服务。作者借此写了 mcp-explorer，用于交互查看远端 MCP 工具的 schema 并调用它们；也发布了 datasette-mcp，以三个低层 SQL 工具向代理开放 Datasette 数据库。对他而言，MCP 的价值还在于权限与能力边界比给代理一整个 shell 和网络更容易推理。

原文链接：https://simonwillison.net/2026/Jul/31/stateless-mcp/

论坛讨论链接：https://news.ycombinator.com/item?id=49131438

讨论的焦点是 MCP 工具数量与上下文占用。有人认为把 API 的几十或上千个动作全塞进工具列表会妨碍组合，转而赞成“搜索 API + 执行代码”的 code mode；也有人指出客户端工具搜索与渐进发现已经能避免把全部 schema 预加载进上下文，因此 Skills 的优势并非协议层独有。几方共识是，真正决定体验的是代理宿主怎样发现、启停和组合能力，而不只是 MCP 是否无状态。

---

## 7. Discovery Loop：用 AI 自动运行科学与工程的实验循环 (Discovery Loop)




由 Jeff Dean、Sanjay Ghemawat、Quoc Le 和 Oriol Vinyals 等人创办的 Discovery Loop，目标是把“提出实验、实现并运行、读取结果、再迭代”的完整循环交给 AI 与大规模计算基础设施。公司会先从机器学习研究与工程入手，把自己的自动化能力当作第一位客户，再扩展到有可测量目标的科学与工程问题，并把国家工程院十四项重大挑战列为长期愿景。创始团队强调自己同时拥有芯片、基础设施、模型和产品经验，设想少量人能借由自动化实验循环取得原本大团队才有的研究速度与质量。

原文链接：https://www.discoveryloop.com/

论坛讨论链接：https://news.ycombinator.com/item?id=49184960

评论认可“自动化实验循环”是比泛泛的 AI 口号更具体的目标，同时质疑宣传中“少数人完成大团队工作”的表述。批评者担心企业将效率叙事直接等同于减少人类劳动和集中收益；回应者则认为，技术进步往往会扩大可完成的科学工作，而非简单减少就业。讨论的分歧不在自动化是否有价值，而在它应该被设计成放大更多研究者的能力，还是主要压缩组织的人力成本。

---

## 8. Pi 为何主张极简：更少上下文也能更便宜、更高效 (Pi's Minimalism Is Its Advantage)





Earendil 为其编码代理 harness Pi 辩护，主张在 AI 让代码生成变便宜后，工具层不应继续堆叠默认提示词、编排层和上下文。Pi 出厂只带四个工具，重点在扩展性和可自行编辑的工作流。文章引用 Databricks 的多百万行代码库实验：同一模型、同等思考强度在不同 harness 上，单任务成本可相差两倍以上而质量近似；Pi 每轮发送的上下文更少，因而可减少无效运行。Shopify 的 pi-autoresearch 则被作为例子：Pi 不预装一切，而让用户按可测目标自行搭建自动实验循环。作者认为“极简”不是功能少，而是只让复杂度在确有收益时进入系统。

原文链接：https://earendil.com/posts/pi-autoresearch-and-databricks/

论坛讨论链接：https://news.ycombinator.com/item?id=49176038

HN 既有大量 Pi 用户的肯定，也有具体的反对意见。批评者指出，它启动慢、不遵循 XDG 目录规范、部分常用快捷键和配置方式不合习惯，并担心项目虽自称可定制，实际仍受维护者偏好约束。支持者则把 Pi 看成个人工作流的 starter kit：基础足够小，插件和共享总线可以把它拼成自己的工具。讨论最终落在一个工程取舍上：极简框架能否同时保留真正的可替换性、开放性与对通行标准的尊重。

---

## 9. Zed DeltaDB：把提交之间的每一步和代理对话都纳入版本控制 (Zed DeltaDB)



Zed 宣布 DeltaDB 的早期访问计划。这是一套面向 AI 辅助编程的版本控制系统，想记录传统 Git commit 之间发生的每一次编辑，并为每个中间状态赋予稳定身份。它把代码变更与产生变更的代理对话连接起来：可以从代码行追到对话，也可以从对话跳回受影响的代码；任意中间时刻都可作为分支点，借由虚拟化工作树低成本启动新的代理分支。团队成员还可在尚未提交、推送或发 PR 前加入同一线程，与代理和同事共同审阅。

原文链接：https://zed.dev/deltadb

论坛讨论链接：https://news.ycombinator.com/item?id=49187256

评论首先追问为什么要另造版本控制系统，而不是改进 Git、jj 等既有工具；也有人借机批评 Zed 在文件刷新等基础体验尚有问题时又扩展到大项目。另一派认为重新发明并不必然坏，许多新工具来自对旧系统边界的重新定义。具体到 DeltaDB，讨论认可“把工作过程和代理上下文保留起来”确有价值，但认为它需要清楚证明自己解决的不是 Git 工作流中已经可用的问题。

---

## 10. DuckDB 进入 Clojure：在笔记本上处理数亿行数据 (DuckDB – Data power tools for your laptop, now in Clojure (2023))


这篇 2023 年的技术文章介绍 Clojure 与 DuckDB 的集成。作者将约 4 亿行交易数据导入本地 DuckDB，展示在笔记本上执行聚合、连接约 14 亿行结果，并把查询结果以 Clojure 数据集形式流式处理。集成通过 Java/JNI 载入 DuckDB，使开发者可以在 SQL 与 Clojure 的数据处理之间切换，也提供分批结果集和零拷贝路径以避免内存耗尽。文章的重点不是宣称单机替代数据仓库，而是说明列式嵌入式数据库能把过去需要专门平台的交互分析带回开发者电脑，并保留开源、可移植的使用方式。

原文链接：https://techascent.com/blog/just-ducking-around.html

论坛讨论链接：https://news.ycombinator.com/item?id=49175924

HN 用户在概念验证站点上复现了 WebAuthn 真实 IP 泄露，并提醒 WebAuthn 正是 Passkey 的底层 API，因此不是可随意忽略的边缘功能。评论赞赏研究者披露问题并提供可验证页面，也追问他们在公开前给 Apple 留了多久修复窗口。另一位读者分享此前 Private Relay 相关 IP 泄露的报告经历，称 Apple 后来修复并支付了漏洞赏金。讨论还谈到 Private Relay 与 VPN 的兼容限制、站点对 VPN 的风控，以及隐私功能即使有缺陷仍可能在特定网络环境中有用途。
