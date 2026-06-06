---
title: "AI PR 太多，Ladybird 停止接受公开代码贡献 | Hacker News 摘要 (2026-06-06)"
author: "hacknews"
description: ""
digest: "Ladybird 项目宣布改变代码进入方式：从现在起不再接受公开 pull request，代码变更只会由项目维护者引入。Andreas Kling 解释，Ladybird 正进入面向首个 alpha release 的新阶段，需要更紧的开"
source_url: "https://ladybird.org/posts/changing-how-we-develop-ladybird/"
pubDatetime: 2026-06-06 08:23:03.509+08:00
tags:
  - "开源治理"
  - "AI代码审查"
  - "系统编程"
  - "科学与安全"
---

---

## 1. AI PR 太多，Ladybird 停止接受公开代码贡献 (Changing how we develop Ladybird)



Ladybird 项目宣布改变代码进入方式：从现在起不再接受公开 pull request，代码变更只会由项目维护者引入。Andreas Kling 解释，Ladybird 正进入面向首个 alpha release 的新阶段，需要更紧的开发流程、更清晰的安全模型，以及更小、更可负责的代码入口集合。过去开源项目常通过补丁建立信任：一个人持续提交、承担责任、修正问题，时间久了信任自然出现。但 AI 工具改变了这个信号。一个很大的补丁不再意味着提交者投入了大量心力，也不再能很好代表善意或理解深度。对浏览器项目来说，这尤其敏感，因为浏览器要运行来自整个互联网的不可信输入，代码审查和供应链信任边界都不能只靠传统 PR 机制维持。

原文链接：https://ladybird.org/posts/changing-how-we-develop-ladybird/

论坛讨论链接：https://news.ycombinator.com/item?id=48409191

HN 讨论集中在 AI 生成 PR 对维护者的冲击。有人以 Godot 为例，说大型开源项目近期出现大量完全由 AI 生成的 PR，包括代码和描述；项目明确禁止这种行为，但部分提交者被拒后反而指责维护者不感激。评论认为，很多人还没意识到“生成一大坨代码”本身已经没有以前的价值，因为生成成本骤降，审查和承担责任的成本却没有消失。也有人担心 Ladybird 的决定会牺牲社区参与，但更多评论理解浏览器项目对安全和代码所有权的要求。

---

## 2. 研究者追踪到欧洲 GNSS 强干扰的太空来源 (Tracing a powerful GNSS interference source over Europe)


一篇 arXiv 论文分析并识别了一个太空中的 GNSS 干扰源。该源自 2019 年以来在欧洲大陆、格陵兰和加拿大造成多次强烈、短暂、广域的干扰事件。论文指出，近年来全球 GNSS 干扰上升主要来自地面或近地源，但太空干扰源更令人担忧，因为覆盖范围更大，也意味着 GNSS 干扰可能发生质变升级。研究基于 2019 到 2026 年间地面 GNSS 参考站网络的数据，建立按接收功率检测的框架，刻画干扰事件的空间、时间和频谱模式，并推断来源。对航空、海事、测绘和基础设施来说，这类干扰不只是局部噪声，而是会影响跨国范围定位可靠性的安全问题。

原文链接：https://arxiv.org/abs/2606.03673

论坛讨论链接：https://news.ycombinator.com/item?id=48409664

HN 讨论中，很多人对论文能识别具体卫星感到惊讶，并追问既然知道来源，现实中能做什么。有用户提到自己在罗马尼亚海岸和波兰水域项目中每天遭遇 GNSS jamming，尤其靠近乌克兰和加里宁格勒方向。评论也讨论这类干扰是否会影响俄罗斯本国居民和民用设施，答案多半是“他们未必在乎”。另一些人关注抗干扰方案、惯导备份和多源定位。整体讨论把论文从学术识别问题拉回到欧洲现实安全环境。

---

## 3. Quanta：量子“魔性”或许给时空带来引力 (Entanglement Builds Space-Time. Now "Magic" Gives It Gravity)





Quanta Magazine 报道，物理学家在全息理论中继续探索量子纠缠如何构建时空，以及一种名为“magic”的量子资源是否能解释时空的可弯曲性。文章从 Wheeler 对广义相对论的概括讲起：空间告诉物质如何运动，物质告诉空间如何弯曲。过去十多年，理论物理中一个重要思路是纠缠可能生成空间结构，但仅有纠缠还不足以让空间与物质按广义相对论要求互动。新研究把注意力转向 magic，即量子态中超出稳定子计算、难以经典模拟的“量子性”度量。在某些全息模型里，magic 似乎与引力动力学和时空 pliability 相关。它仍是高度理论化结果，但为量子信息与量子引力之间的关系提供了新线索。

原文链接：https://www.quantamagazine.org/entanglement-builds-space-time-now-magic-gives-it-gravity-20260603/

论坛讨论链接：https://news.ycombinator.com/item?id=48409675

HN 讨论首先纠正文章中常见的“床垫和保龄球”引力类比：它依赖地球重力来解释重力，本身会误导读者。评论者认为这种类比虽直观，但容易让人以为物体是被外部向下拉进凹陷，而不是沿弯曲时空测地线运动。也有人讨论 entanglement、magic、holography 等概念对普通读者很难，科普文章在简化时很容易制造错误直觉。整体讨论并不深入验证论文数学，而更关注量子引力科普如何在可读性和准确性之间取舍。

---

## 4. C++ 纪录片上线：一门复杂语言的四十年 (C++: The Documentary)


Herb Sutter 发布《C++: The Documentary》相关内容，视频回顾 C++ 从 Bjarne Stroustrup 试图把低层硬件控制与 Simula 式抽象结合开始，到今天成为支撑全球关键系统的复杂语言。片中受访者谈到早期编程环境的原始：没有现代 IDE、语法高亮、重构和代码导航，许多机器甚至只有行编辑器。C++ 的核心张力也贯穿其中：它既是贴近硬件的系统语言，又不断吸收抽象、泛型、对象、并发和现代安全需求；它由委员会演进，任何不兼容改动都可能影响数十万开发者。纪录片不是单纯赞歌，而是呈现 C++ 为什么仍在、为什么可怕、为什么难改，以及为什么它仍支撑大量最重要的软件系统。

原文链接：https://herbsutter.com/2026/06/04/c-the-documentary-released-today/

论坛讨论链接：https://news.ycombinator.com/item?id=48408016

HN 评论延续了经典 C++ 争论。有评论引用 Ken Thompson 对 C++ 的批评，认为它复杂、不连贯，是各种想法的堆积；也有人说 C++ 若不是搭上 C 的生态和兼容性，未必会有今天的使用规模。批评者认为语言复杂度迫使开发者花大量时间用 Coverity、Valgrind 等工具弥补编译器无法保证的安全；支持者则强调 C++ 的价值正来自其兼容性、性能和长期工业沉淀。讨论整体没有新结论，但再次显示 C++ 的地位来自历史路径依赖与工程现实，而不是语言纯粹性。

---

## 5. 阿里开源 AI 代码审查 CLI：Open Code Review (Open Code Review – An AI-powered code review CLI tool)


Alibaba 开源 Open Code Review，一个 AI-powered code review CLI 工具，来自阿里内部官方 AI 代码审查助手，过去两年服务了数万开发者并发现数百万代码缺陷。它读取 Git diff，把变更文件交给可配置 LLM endpoint，通过带工具调用能力的 agent 生成结构化、行级别评论。项目强调它不是泛用代理的简单 prompt 包装，而是混合架构：确定性 pipeline 加 LLM agent。它能读取完整文件、搜索代码库、查看其他变更文件来获得上下文，目标是解决通用代理做代码审查时常见的问题：覆盖不完整、行号漂移、质量不稳定、难以调试。内置规则覆盖 NPE、线程安全、XSS、SQL 注入等，也兼容 OpenAI 和 Anthropic。

原文链接：https://github.com/alibaba/open-code-review

论坛讨论链接：https://news.ycombinator.com/item?id=48406358

HN 讨论来自不少已经在内部做自动代码审查的人。有人表示公司内部已有自动 review，并取得正向效果，但 code review 仍是瓶颈，所以愿意尝试是否有更好的开源工具。也有人推荐 Cursor 的 code review skill、Thermonuclear 等类似方案。讨论重点在于 AI code review 是否能可靠落到行级评论，而不是泛泛建议；以及确定性规则、上下文检索和 LLM 结合是否比单纯 Claude Code prompt 更稳定。整体反馈偏实用：大家不期待替代人审，而是希望减少低级问题和审查积压。

---

## 6. Scott Young 为什么不相信“革命化学校” (I'm skeptical about efforts to revolutionize schooling)





Scott H. Young 写文解释自己为何对“彻底革命化学校”的方案保持怀疑。虽然他写过《Ultralearning》，经常被问学校应该如何改进，但他承认自己没有课堂教学和教育系统工作经验，不适合提出宏大改革方案。他认为，教育当然有可改进之处：比如 phonics 应该被教授，认知负荷要管理，技能要完整教学并提供足够练习。但许多讨论者想要的是更激进的答案：学校是否该少教事实、多教批判性思维；是否该用项目制、真实世界协作和实验取代传统课程。Young 的怀疑在于，这些听起来合理的口号往往低估了教学现实、基础知识、练习和学生差异，也高估了“像现实生活一样学习”的普适效果。

原文链接：https://www.scotthyoung.com/blog/2026/05/27/revolutionize-schooling/

论坛讨论链接：https://news.ycombinator.com/item?id=48376008

HN 评论普遍认同教育改革很容易被外行简化。有人说几乎每个人都以为自己知道正确教学方式，但多数人并不知道；他自己当过两学期兼职讲师，发现教学远比想象难，而且大学大概还比中小学简单。还有人提到，聪明学生也可能因为不复习、不做作业而失败，这不是“课程不够真实”能解决的。讨论不是反对改进学校，而是反对把复杂学习问题包装成一句改革口号。很多评论强调，教育系统的问题往往在执行细节和激励结构，而不只是教学理念落后。

---

## 7. Branchless Quicksort 在多平台跑赢 std::sort (Branchless Quicksort faster than std:sort and pdqsort with C and C++ API)


tiki.li 发布 Branchless Quicksort，实现了带 C 和 C++ 接口的快速分支消除 quicksort，使用 sorting networks 和 branchless programming 来减少现代 CPU 上昂贵的分支预测失败。作者给出 5000 万个 double 的排序 benchmark：在 Apple M1 上，std::sort 和 pdqsort 约 1.33 秒，单线程 blqsort 约 0.97 秒；在 AMD Ryzen 3 Linux/GCC 上，std::sort 5.56 秒，pdqsort 2.81 秒，blqsort 2.06 秒。项目提供单线程和多线程 C/C++ header 实现。文章说明了 branchless 技巧：用条件结果更新数组长度，而不是 if 分支，从而让 CPU pipeline 更稳定。对底层性能工程来说，这是一个展示现代排序算法如何利用硬件特性的案例。

原文链接：https://tiki.li/blog/blqsort

论坛讨论链接：https://news.ycombinator.com/item?id=48375445

HN 上 pdqsort 作者 orlp 参与讨论，提到自己后来与 Lukas Bergdoll 为 Rust 标准库提供了 ipnsort 和 driftsort。用同一仓库 benchmark 在 Apple M2 上测试，Rust 的 ipnsort 排 5000 万 double 约 0.79 秒，blqs 0.90 秒，driftsort 1.13 秒，std::sort 1.22 秒。这个结果把讨论从“某个 C++ 实现是否最快”扩展到现代标准库排序实现的整体演进。评论也讨论 benchmark 公平性、数据类型差异、稳定排序与不稳定排序，以及 branchless 技巧在不同 CPU 上收益差异。

---

## 8. Mouseless：用键盘控制全系统鼠标 (Mouseless – keyboard-driven control of macOS/Linux/Windows)


Mouseless 是一个跨平台工具，目标是在 macOS、Linux 和 Windows 上用键盘高速控制鼠标。它的核心交互是把屏幕映射成坐标或可输入的目标，让用户无需伸手拿鼠标即可点击、移动和操作界面。官网主打“Lightning-fast mouse control with the keyboard”，提供 Windows 版下载、14 天试用和跨平台授权。用户评价集中在提升生产力、减少手腕疼痛和保持心流：对视频编辑、键盘重度用户、手部不适用户尤其有吸引力。它并不是传统快捷键替代品，而是试图把所有 GUI 操作纳入键盘路径，补上很多应用没有原生键盘导航或 accessibility 支持不足的空白。

原文链接：https://mouseless.click

论坛讨论链接：https://news.ycombinator.com/item?id=48383667

HN 讨论把 Mouseless 与 ShortCat、Homerow、Vimium 等工具对比。有人喜欢 ShortCat 类似 Vimium 的模式：识别界面元素并分配动态热键；但也有人觉得动态热键慢，且不利于长期肌肉记忆。Mouseless 的坐标式思路可能更稳定，因为同一屏幕位置长期对应相似按键。评论还提到很多应用 accessibility 做得差，导致 ShortCat/Homerow 不总是可靠，因此另一种屏幕定位方案有价值。Linux 用户则在寻找类似工具，甚至表示若某个桌面环境支持好，愿意更换 DE。

---

## 9. ISS 宇航员因俄罗斯舱段漏气短暂避入飞船 (Astronauts told to return to ISS after sheltering over air leak repairs)




BBC 报道，国际空间站五名宇航员在俄罗斯舱段进行新漏气点维修期间，被要求进入飞船采取“elevated safety posture”，随后又被告知可返回 ISS。问题发生在 Zvezda 服务舱转移通道，NASA 表示该舱段裂缝和泄漏已存在一段时间。俄罗斯 Interfax 引述 Roscosmos 称发现了两个泄漏点，其中一个已修复；Tass 也称机组和 ISS 系统没有危险。NASA 发言人 Bethany Stevens 表示，结构修复工作在评估测量和数据时暂停，因此宇航员被要求返回空间站。虽然事件没有造成直接危险，但再次凸显 ISS 老化、俄方舱段维护和长期漏气问题的复杂性。

原文链接：https://www.bbc.com/news/live/c4g44ew3g1kt

论坛讨论链接：https://news.ycombinator.com/item?id=48413464

HN 讨论中有人提到 NASA RELL（Robotic External Leak Locator），这是一种遥控机器人外部泄漏定位工具，使用质谱仪和离子真空压力计协同检测氨泄漏，并快速确认修复是否成功。评论也联想到科幻电影里的维修机器人。更多讨论围绕 ISS 老化：Zvezda 舱段漏气已不是第一次，长期运行的轨道基础设施不可避免面临材料疲劳、密封老化和维修受限的问题。也有人关心美俄航天合作在当前地缘政治下如何继续维护共同系统。

