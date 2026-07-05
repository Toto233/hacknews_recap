---
title: "Leanstral 1.5：Mistral 把形式化证明能力做进小模 | Hacker News 摘要 (2026-07-05)"
author: "hacknews"
description: ""
digest: "Mistral 发布 Leanstral 1.5，一个 Apache-2.0 许可、6B active parameters 的模型，面向 Lean 形式化证明和代码验证。官方称它在 miniF2F、PutnamBench、FATE-H、F"
source_url: "https://mistral.ai/news/leanstral-1-5/"
pubDatetime: 2026-07-05 09:04:26.911+08:00
tags:
  - "AI推理"
  - "数据库架构"
  - "安全漏洞"
  - "科学教育"
---

---

## 1. Leanstral 1.5：Mistral 把形式化证明能力做进小模型 (Leanstral 1.5: Proof abundance for all)





Mistral 发布 Leanstral 1.5，一个 Apache-2.0 许可、6B active parameters 的模型，面向 Lean 形式化证明和代码验证。官方称它在 miniF2F、PutnamBench、FATE-H、FATE-X 等基准上有显著提升，并在真实代码库验证中发现 5 个此前未知 bug。训练流程包括 mid-training、监督微调，以及使用 CISPO 的强化学习，目标是让模型能作为 proof engineering agent：调试证明、补全定理、与 Lean LSP/MCP 配合操作项目。文章还给出通过 Mistral Vibe 安装和使用 Leanstral 的步骤。它的意义不在于通用聊天能力，而是把高质量、可本地或低成本调用的专门数学/验证能力开放出来。

原文链接：https://mistral.ai/news/leanstral-1-5/

论坛讨论链接：https://news.ycombinator.com/item?id=48780801

讨论里有人为 Mistral 辩护：它未必能和最大通用模型竞争，但擅长把特定能力做进便宜小模型，例如 OCR、文件分析和形式化任务。也有人认为质量比价格更重要，便宜模型如果错误率高并不划算。评论共识偏向实际 benchmark：不同任务差异很大，公共榜单只能参考，真正要看自己的样本和工作流。

---

## 2. AMD MI355X 上跑 GLM-5.2：推理性价比正在变化 (Performance per dollar is getting faster and cheaper)


Wafer 介绍他们在 AMD MI355X 上服务 GLM-5.2 的优化结果，声称在比 NVIDIA Blackwell 便宜两倍以上的硬件上，达到单节点 2626 tok/s、单流 213 tok/s 的表现。文章背景是前沿模型发布越来越快，推理需求激增，而 Blackwell 供应紧张、价格高。AMD 芯片硬件规格接近，但长期受 ROCm、day-0 支持和生态成熟度影响，通常需要额外工程优化才能跑好新模型。Wafer 使用 AMD Quark 做 MXFP4 量化，调整调度和部署栈，强调这次甚至没有写自定义 kernel。结论是 CUDA 护城河仍在，但 AMD 的差距正从“软件不可用”变成“支持速度和工程成熟度”问题。

原文链接：https://www.wafer.ai/blog/glm52-amd

论坛讨论链接：https://news.ycombinator.com/item?id=48780417

HN 讨论主要要求加入 performance per watt 指标。有人指出在美国之外，数据中心更关心供电、能效和可获得性，而不只是 GPU 单价；NVIDIA 难以大规模采购时，AMD 可能有机会。也有人说硬件电费占八年总拥有成本并非最大头，真正限制是机房可用功率，因此能效直接影响可部署密度。

---

## 3. Databricks 的 Lakebase：把 Postgres 存储拆到 Parquet 和 S3 上 (Postgres data stored in Parquet on S3: LTAP architecture explained)





Databricks 解释 Lakebase/LTAP 架构：从传统数据库把计算、事务日志、缓存、页面存储和长期数据耦合在一起的 monolith，转向把 WAL、PageServer、对象存储和列式数据分层。Lakebase 类似 Neon，把写入路径中的 WAL 交给 SafeKeeper，把读取工作集通过 PageServer 缓存在 NVMe 上；历史数据则异步物化为 Parquet 存到 S3。这样 OLTP 热数据仍以 Postgres 页面格式服务事务查询，较冷和历史数据则可以被分析引擎以列式方式读取。文章称这种 LTAP 目标是在一份逻辑数据上同时支持事务和分析，避免传统 HTAP 中把数据复制到另一套仓库后再同步的复杂性。

原文链接：https://www.databricks.com/blog/lakebase-ltap-rethinking-database-storage

论坛讨论链接：https://news.ycombinator.com/item?id=48745855

HN 讨论直接质疑“这和多存一份数据有什么区别”。Lakebase 工程师解释，PageServer 缓存层本来就是架构必需，改成在 S3 上用 Parquet 表示历史数据并不额外引入一套复制系统；热数据仍是 Postgres page，历史数据才列式。评论者把它类比为 Lambda architecture，也追问未来是否会形成开放 LTAP 协议。

---

## 4. MSI Center 漏洞：普通用户可秒变 SYSTEM 权限 (MSI Center – How to gain SYSTEM privileges in seconds)




研究者分析 MSI Center，发现其 Notebook Foundation 服务在启动时创建了一个任意认证用户都能访问的 named pipe。该服务暴露注册表读写删除、WMI 操作、以 LocalSystem 运行程序、杀进程等高危命令。虽然 MSI 用自定义协议和 3DES 加密做了“安全性”，但客户端只需注册任意名称，再构造加密消息触发 PC:REXE，就能让服务以 SYSTEM 执行 payload。研究者通过下载离线安装包、innoextract 解包、ilspycmd 批量反编译 C# 组件、IDA 分析 C++ 组件定位问题。好的一面是 MSI 收到报告后两天内准备补丁，并在 2.0.70.0 修复；坏的一面是这类厂商控制中心软件权限巨大、质量普遍差，而且漏洞报告没有 bounty。

原文链接：https://mrbruh.com/msicenter/

论坛讨论链接：https://news.ycombinator.com/item?id=48781688

讨论者意外于 MSI 响应还算顺利，也吐槽这类厂商控制中心常是为了关灯效才不得不装的臃肿软件。有人建议逆向并写开源替代品，举例自己曾通过抓 USB 包重写 Clevo 键盘 LED 控制工具。评论还延伸到 ACPI/WMI 逆向、OpenRGB 支持和 AI 辅助分析固件/厂商工具的实际帮助。

---

## 5. 韦布望远镜的新宇宙：小红点、早期黑洞与过大的星系 (Astrophysicists Puzzle over Webb’s New Universe)





Quanta 文章梳理 JWST 观测早期宇宙后带来的理论挑战。韦布发现了大量“little red dots”、年龄看似过大的早期黑洞，以及在宇宙诞生后不久就显得过于成熟的星系。最初这些观测似乎和既有模型不符，现在出现了多种解释：小红点可能是被浓厚气体包裹的黑洞，甚至是一种类似恒星大气发光的“black hole star”；早期星系和黑洞也可能来自更高效的气体塌缩、不同的恒星形成机制或原初黑洞等路径。文章强调，JWST 没有简单推翻宇宙学，而是把以前看不见的早期结构暴露出来，迫使天体物理学家区分哪些新理论是真实宇宙，哪些只是拟合数据的可能故事。

原文链接：https://www.quantamagazine.org/astrophysicists-puzzle-over-webbs-new-universe-20260702/

论坛讨论链接：https://news.ycombinator.com/item?id=48783948

HN 讨论围绕 little red dots 的候选解释。有人提到部分目标可能与银河系内棕矮星混淆，但随即查到论文指出棕矮星污染已有校正，比例约 5% 到 25%。也有人对“黑洞星”概念感到惊讶：如果大量物质围绕黑洞形成高压外壳，辐射压力甚至可能触发类似恒星核心的聚变。讨论还延伸到 Eddington limit、黑洞并合和科普读物推荐。

---

## 6. 会议效率的瓶颈，可能是房间里的二氧化碳 (The bottleneck might be the air in the room)




文章提出一个容易被忽略的团队效率变量：会议室空气。作者带着便携 CO₂ 监测器参加会议，发现封闭会议室在一两个小时内就可能升到 1000 ppm 甚至 2000 ppm 以上，而研究显示这种水平会影响决策、注意力和认知表现。问题在于人在房间里通常不会感到“空气变差”，只会觉得疲惫、迟钝、会议太长或别人太啰嗦。远程办公的小书房也有同样物理问题。作者建议像监控构建流水线、缺陷率和周期时间一样监控空气：先测量，再开窗、换房间或改善通风，避免把环境问题误判为人不投入或团队不会思考。

原文链接：https://blog.mikebowler.ca/2026/07/03/co2-and-decision-making/

论坛讨论链接：https://news.ycombinator.com/item?id=48783117

讨论集中在 CO₂ 监测是否适合内置到手机或手表。有人希望 Apple 等厂商普及传感器，让公众意识到教室、影院、会议室通风差的问题；也有人指出手腕和桌面离呼吸气流太近，容易产生高读数和误报。评论进一步区分 CO₂、氧气不足、睡眠问题和普通疲劳，认为监测有价值，但传感器位置和解释方式很关键。

---

## 7. htop/top 每一栏到底是什么意思 (Explanation of everything you can see in htop/top on Linux (2019))





这篇 2019 年文章系统解释 Linux htop/top 中能看到的几乎所有信息。作者从 uptime、load average、进程数、PID、进程树、用户、进程状态、CPU 时间、nice/priority、VIRT/RES/SHR/MEM 等字段讲起，并通过 `/proc` 文件、`strace`、源代码和示例说明这些数字来自哪里、如何计算、为什么会被误解。文章价值在于把日常运维里“看起来熟悉但其实不懂”的界面拆开：load average 不等于 CPU 百分比，RSS/VIRT/SHR 各自代表不同内存视角，进程状态里的 D/Z/T 等有具体内核含义。对 Linux 初学者和长期靠经验看 top 的人，它都是一份实用参考。

原文链接：https://peteris.rocks/blog/htop/

论坛讨论链接：https://news.ycombinator.com/item?id=48784777

讨论里很多人推荐 btop，认为它界面现代、信息密度高，还能显示功耗、网络、GPU 和磁盘。但也有人指出 btop 缺少 zram/zswap、ZFS、Arc GPU 支持，磁盘条形图也会挤压 I/O 图。另有评论分享 htop 常用设置，例如隐藏 user threads，让进程列表更清晰。整体讨论是传统工具解释与现代监控界面的取舍。

---

## 8. 也许你该学点什么：成年人自学的现实预期 (Maybe you should learn something)


文章鼓励成年人重新学习一项技能：像素画、触摸打字、3D 建模、音乐、木工、编织、语言等都可以。作者强调学习不需要宏大计划，通常每天 30 到 45 分钟的持续练习就够，但要有正确预期：刚开始不会感觉好，练习时甚至会觉得退步，因为大脑是在收集材料，睡眠后才整合改进。进入中级后会遇到漫长平台期，但那时技能已经开始有实际用途。作者反对一边刷手机一边抱怨没时间，也提醒不要过早研究高级技巧或把资源收集当学习。长期学习的价值不只是技能本身，还包括建立“我可以改变处境”的控制感。

原文链接：https://www.marginalia.nu/log/a_135_learn/

论坛讨论链接：https://news.ycombinator.com/item?id=48782435

讨论补充说，问题往往不是时间，而是精力、心理状态和不被打断的时间。有人认为把学习替代刷手机听起来简单，但如果拖延来自焦虑，学习也会带上负罪感和压力。作者回应说，学习像锻炼一样既消耗也回馈能量，关键不是一天投入很多小时，而是减少媒体饮食带来的时间错觉和注意力耗散。

---

## 9. John Baez 的应用范畴论课程：从序集到协同设计 (Applied Category Theory Course (2018))


这是 John Baez 基于 Fong 和 Spivak《Seven Sketches in Compositionality》的应用范畴论课程页面。页面结构很朴素，列出 77 讲，覆盖四大部分：有序集、资源理论、数据库和协同设计。应用范畴论试图把范畴论从纯抽象数学拉向系统建模、程序、数据库、资源流和组合设计，用统一的结构语言描述不同领域中的关系、组合和映射。虽然抓取文本很短，但课程本身适合想从工程、编程或系统角度理解范畴论的人：它不是只讲定理，而是强调 compositionality，也就是如何把复杂系统拆成可组合、可推理的部分。

原文链接：https://math.ucr.edu/home/baez/act_course/index.html

论坛讨论链接：https://news.ycombinator.com/item?id=48779723

讨论者认为这门课和配套书在“抽象废话”和“程序员可能用得上”之间取得了不错平衡，但完全理解仍需要先遇到相关概念。评论推荐 Lawvere 的《Conceptual Mathematics》、Eugenia Cheng 的《The Joy of Abstraction》、Emily Riehl 的《Category Theory in Context》和 Bartosz Milewski 面向程序员的系列。有人特别提到开头的 Galois Connections 很值得学。

---

## 10. Mir Books：苏联时代科普与数学书的在线档案 (Mir Books – Books from the Soviet Era)


Mir Books 是一个整理苏联时代出版社图书的网站，持续发布 Mir、Progress、Raduga 等出版社的数学、物理、工程、外语、儿童文学和科普书目，并链接到可获取的电子版本。今天 HN 链接的是站点首页，近期更新包括多本中文儿童图画故事和民间故事，也提供 Internet Archive、GitLab、社交账号等入口。这个站点的价值不只是怀旧：苏联出版体系曾把大量高质量科学、数学和工程教材以低价翻译发行到印度、东欧、亚洲等地区，许多读者通过这些书接触系统性理工教育。它更像一个面向旧书、公共知识和教育史的民间保存项目。

原文链接：https://mirtitles.org

论坛讨论链接：https://news.ycombinator.com/item?id=48739018

HN 讨论里很多人回忆 Mir Publishers 的书：在印度等地，西方教材昂贵，而苏联和中国书便宜、质量高，成为中产以下家庭接触数学、物理和国际文学的重要渠道。也有人推荐 Archive.org 的 Mir titles 汇总，讨论 Landau-Lifshitz 等经典教材，以及苏联教育体系、数学竞赛和理论训练为何培养出许多强研究者。
