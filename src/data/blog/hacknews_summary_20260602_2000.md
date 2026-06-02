---
title: 'Instagram 被曝离谱接管漏洞：AI 客服把验证码发给攻击者 | Hacker News 摘要 (2026-06-02)'
author: 'hacknews'
description: ''
digest: '作者 0xsid 说，近期一批 Instagram 账号疑似被接管，其中包括 Obama White House 等高关注账号，而攻击流程“蠢到几乎不真实”。按他的描述，攻击者只需要目标用户名，然后用 VPN 或代理靠近目标所在城市，降低 '
source_url: 'https://www.0xsid.com/blog/meta-account-takeover-fiasco'
pubDatetime: 2026-06-02 20:00:01.269+08:00
tags:
  - 安全漏洞
  - AI教育
  - 本地推理
  - 数字生活
---

---

## 1. Instagram 被曝离谱接管漏洞：AI 客服把验证码发给攻击者 (The newest Instagram “exploit” is the goofiest I've seen)


作者 0xsid 说，近期一批 Instagram 账号疑似被接管，其中包括 Obama White House 等高关注账号，而攻击流程“蠢到几乎不真实”。按他的描述，攻击者只需要目标用户名，然后用 VPN 或代理靠近目标所在城市，降低 Meta 风控的怀疑。接着攻击者告诉 Meta 支持 AI：账号被黑了，请把验证码发到自己控制的任意邮箱。关键问题在于，这个高权限恢复流程似乎没有验证该邮箱是否曾属于账号所有者；AI 把安全码发给攻击者后，攻击者再把码交回系统，即可拿到新的密码重置链接。因为系统把这视为“真正所有者”的账号恢复，原有 2FA 也会被绕过，旧 session 被踢下线，邮箱和手机号被改成攻击者控制的信息。文章还提到，黑产 Telegram 群已经出现收费接管服务。

原文链接：https://www.0xsid.com/blog/meta-account-takeover-fiasco

论坛讨论链接：https://news.ycombinator.com/item?id=48359102

HN 讨论把这当作 AI agent 安全的反面教材。有人提出一个简单原则：评估 agent 安全时，先忽略 agent，把它能调用的工具当作攻击者可以完全访问的工具；如果工具链本身不安全，agent 必然不安全。也有人提醒，不能只看工具权限，agent 的训练数据、提示词和 RAG 上下文也可能泄露或被投毒。讨论总体认为，账号恢复是高风险流程，不应交给无法可靠区分身份的 AI 支持系统；至少要把“用户能和 agent 对话”视为用户能操纵整套恢复工具。

---

## 2. Red Hat Cloud Services 多个 npm 包被植入恶意版本 (Malicious npm packages detected across Red Hat Cloud Services)




RedHatInsights/javascript-clients 仓库出现安全 issue，称 `@redhat-cloud-services/` scope 下多个 npm 包发布了恶意版本。受影响列表很长，包括 `chrome`、`compliance-client`、`frontend-components`、`frontend-components-*`、`hcc-*-mcp`、`host-inventory-client`、`insights-client`、`notifications-client`、`rbac-client`、`remediations-client` 等，很多包都有多个 compromised versions。issue 引用了 StepSecurity 的分析和 oss-security-feed 查询。由于这些包属于 Red Hat Cloud Services 前端/客户端生态，影响面可能覆盖依赖这些包的构建、开发和部署流程。文章本身是 GitHub issue，重点是汇总受影响包和版本，提醒用户排查 lockfile、缓存、CI/CD 产物和内部镜像。它也再次说明，npm 供应链攻击不再只针对小包，组织 scope 和企业生态包同样会成为目标。

原文链接：https://github.com/RedHatInsights/javascript-clients/issues/492

论坛讨论链接：https://news.ycombinator.com/item?id=48356625

HN 讨论重点转向“cooldown”机制：忽略刚发布不到 N 天的新包版本。评论者认为 axios、TanStack、Red Hat Cloud Services 等近期 npm 供应链攻击，大多在数小时内被发现和下架；如果默认延迟 1-3 天安装新版本，就能躲过很多攻击。有人提到 pnpm 已加入默认 1 天 cooldown，也推荐 depsguard、cooldowns.dev 或自己配置 npmrc。反对点主要是紧急修 CVE 时可能需要绕过冷却期，但支持者认为这可以作为例外流程处理。整体共识是，依赖更新速度和供应链安全之间需要显式折中。

---

## 3. 斯坦福 CS336：从零开始做语言模型 (CS336: Language Modeling from Scratch)





Stanford CS336《Language Modeling from Scratch》是 2026 春季课程，由 Tatsunori Hashimoto 和 Percy Liang 等人授课。课程目标不是简单介绍 LLM，而是让学生从头走完整个语言模型开发流程：数据收集与清洗、预训练、Transformer 构建、训练、优化、评估和部署。页面明确说，这门课借鉴操作系统课程“从零写一个 OS”的思路，要让学生理解现代语言模型的每个环节。先修要求也很硬：熟练 Python、深度学习、系统优化，以及能在 GPU 和多机环境中让模型高效运行。作业的 scaffolding 很少，学生要写的代码量比一般 AI 课程高一个数量级。课程页面提供讲义、YouTube 录制、office hour、Slack 规则和历史版本链接。

原文链接：https://cs336.stanford.edu/

论坛讨论链接：https://news.ycombinator.com/item?id=48357075

一位完成过 2025 版课程的 HN 用户说，这门课工作量很大，前两个作业就需要大量思考和调试，即便有深度学习基础，也花了几个月用业余时间完成大部分内容。他认为课程设计、slides 和 assignment 都非常用心，能让人从小模块开始构建真实 LM，并亲眼验证 pipeline 如何拼起来，成就感很强。但他也指出，环境要求可以讲得更清楚，尤其是作业 harness 在 Linux + NVIDIA GPU 环境下表现最好。讨论虽然评论不多，但对课程质量评价很高。

---

## 4. 斯坦福 CS336 给 AI 助手写规则：当助教，不准写答案 (AI Agent Guidelines for CS336 at Stanford)


CS336 作业仓库里的 `CLAUDE.md` 给 ChatGPT、Claude Code、Copilot、Cursor 等 AI coding assistant 定义了明确边界：它们应该作为 teaching assistant，而不是 solution generator。允许做的事包括解释概念、指向课程材料和官方文档、review 学生已经写出的代码、指出 edge cases/invariants/debugging checks、解释 Python/PyTorch/CUDA/Triton/distributed training 错误、建议 sanity checks 和 toy examples。禁止做的事则很严格：不能写 Python 或 pseudocode，不能完成 TODO，不能编辑学生 repo，不能运行 bash 命令，不能把 assignment requirements 转成可运行代码，不能实现 tokenizer、transformer blocks、optimizer、training loop、Triton kernel、distributed training、scaling-law pipeline 等核心组件，也不能指向第三方实现。核心原则是：保留学生从零实现语言模型的学习体验。

原文链接：https://github.com/stanford-cs336/assignment1-basics/blob/main/CLAUDE.md

论坛讨论链接：https://news.ycombinator.com/item?id=48359232

HN 讨论集中在这类 AGENTS/CLAUDE 规则文件到底怎么写才有效。有老师说自己也在课程里尝试 AGENTS.md，但觉得 CS336 版本可能太长，容易掉出上下文窗口；他测试后发现 30 行以内、短而清晰的规则效果更好。他还要求学生如果使用 AI，就生成 `.history` 文件记录每次 prompt 和回应摘要，便于回顾和反馈。也有人提醒，LLM 场景下“只告诉它做某事”并不可靠，如果真的需要保证记录，应使用 hook script 或直接解析工具已有 transcript。讨论表明，教育场景里的 AI 规则需要同时考虑行为边界、可审计性和执行机制。

---

## 5. 10 年前的 Xeon 也能跑 Gemma 4，前提是你愿意调到很细 (A 10 year old Xeon is all you need)



作者用一台 2016 年的单路 Intel Xeon E5-2620 v4 服务器跑起 Gemma 4 Drafter 模型，硬件看起来并不适合现代 LLM：8 核 16 线程、AVX2、没有 AVX-512/VNNI/BF16、128GB DDR3 内存，没有 GPU。文章重点不是“随便装个 Ollama 就能跑”，而是解释为什么 mainstream 工具暴露的旋钮不够，必须用特定 fork 和大量底层参数调优。作者强调，LLM 解码阶段常常受内存带宽限制，而不是纯算力限制：每生成一个 token 都要把大量权重从内存搬到 CPU cache，老 DDR3 会成为核心瓶颈。文章还讨论线程数、MoE expert 调度、量化、MTP drafter 和 verifier 搭配等细节，目标是让一个现代 26B MoE 模型在旧服务器上达到接近阅读速度的本地推理。

原文链接：https://point.free/blog/gemma-4-on-a-2016-xeon/

论坛讨论链接：https://news.ycombinator.com/item?id=48353348

作者在 HN 里说明，这是因为现有工具对新 Gemma 4 drafter 支持不足、性能旋钮被隐藏，才写了这篇实践记录。他承认自己不是 ML 工程师，但链接了量化模型和所需 fork。评论主要追问技术细节：既然 workload 受内存带宽限制，为什么不用 SMT 线程填补等待时间；`--cpu-moe` 如何减少 cache thrashing；4GB expert 参数远大于 20MB L3 cache，优化 expert 顺序到底能缓存什么。讨论很技术化，核心价值在于展示“旧硬件能跑”不是魔法，而是对带宽、线程、MoE、量化和工具链的细致权衡。

---

## 6. Nvidia RTX Spark：把 AI、RTX 和统一内存塞进 Windows PC (Nvidia RTX Spark)


Nvidia RTX Spark 是一款面向轻薄笔记本和小型桌面的新平台/芯片方案，主打把 NVIDIA AI 和 RTX 图形能力融合到 Windows PC。页面称 RTX Spark Superchip 最高包含 6,144 Core Blackwell RTX GPU、20 Core ultra-efficient CPU、1 Petaflop FP4 AI performance、最高 128GB unified memory，并支持 CUDA 原生运行。Nvidia 把它包装成“agent PC”：本地 AI agent 可以在用户旁边执行任务、生成素材、写代码。创作者侧强调 FP4 Tensor Cores、统一内存、RT Cores、DLSS、4:2:2 硬件编解码、AV1 encoder 和 NVIDIA Broadcast；开发者侧强调 CUDA AI development/prototyping stack 和本地 fine-tune/inference；游戏侧则继续卖 RTX、ray tracing、DLSS、Reflex 和 G-SYNC。整体定位接近“带 CUDA 的 Windows Arm/轻薄 AI 工作站生态”。

原文链接：https://www.nvidia.com/en-us/products/rtx-spark/

论坛讨论链接：https://news.ycombinator.com/item?id=48352939

HN 讨论的关键不是参数本身，而是兼容性和生态。有人指出 Nvidia 的影响力足以推动大量创意软件和游戏发布 Arm 原生版本：Adobe Photoshop/Premiere、Blackmagic、Blender、CapCut、ComfyUI、OTOY，以及 Riot、KRAFTON、Remedy、NetEase、Xbox 等都被提及。也有人说 Switch 本来就是 Nvidia/Arm 游戏设备，游戏厂商并非完全没有经验。怀疑者则担心 Windows on Arm、驱动、游戏反作弊、CUDA/RTX 兼容和实际功耗。整体看，RTX Spark 的成败不只看芯片规格，而看 Nvidia 能否把 Windows Arm 软件生态拉起来。

---

## 7. 作者故意把新 iPhone 变慢，用延迟对抗刷手机 (I made my phone slow on purpose)





Guilherme Campos 写道，他买了全新 iPhone 17 后，立刻做了一个让它“变慢”的工具 VineWall，因为自己长期受 doomscrolling 困扰。传统冷 turkey、app blocker 等方法要么没有处理 craving，要么容易绕过。作者用“口袋里的饼干机”类比手机：如果随时能得到新鲜饼干，人会不断吃；如果饼干很远或不新鲜，欲望就会下降。因此他选择降低特定 app 的网速，而不是完全封锁。VineWall 会把 Instagram、TikTok、Reddit、X、Threads 等应用的连接逐步变慢：一开始视频变 blocky，继续刷时图片变灰框，最后加载 spinner 占据更多时间。这个过程不是强制禁止，而是把即时奖励变得低质量、低速度，让用户在等待中重新意识到自己是否真的想继续。

原文链接：https://vinewallapp.com/notes/i-made-my-phone-slow-on-purpose/

论坛讨论链接：https://news.ycombinator.com/item?id=48312443

HN 讨论提到 One Sec 这类习惯打断 app：通过 iOS Shortcuts 在打开成瘾 app 时插入几秒等待和确认，很多人说 4、6、10 秒延迟就足以让自己放弃无意识打开 Instagram 或 YouTube Shorts。有人用 Jonathan Haidt 的“骑象人”隐喻解释：理性意识知道该少刷，但情绪和直觉驱动力更强，因此要改变环境和摩擦，而不是只靠意志。讨论总体支持“增加一点点延迟”这种温和但有效的干预，也承认多数普通用户不会愿意复杂配置 Shortcuts。

---

## 8. 灭菌土壤还在“呼吸”，生命化学或许先是地质现象 (What appear to be biochemical processes may be a natural feature of geology)





Quanta 报道了 Sébastien Fontaine 团队关于“死土壤仍会释放二氧化碳”的实验。Fontaine 原本想测量完全没有生命的土壤会释放多少碳：他们把土壤封进罐子，用伽马辐射灭菌，然后等待 CO2 释放下降。显微镜下看不到生命迹象，但土壤仍持续消耗氧气、释放二氧化碳，而且这一过程持续了六年。团队在 2025 年 Science Advances 论文中提出，某些驱动生命代谢的反应，可能也能在没有活细胞、没有蛋白质组织的地质环境中发生。如果这个解释成立，那么分解富碳糖分子并释放能量的“代谢式”反应不一定是生命独有，可能在生命出现之前就作为地球化学过程存在。这为生命起源中的“代谢先于生命”理论提供了新的实验线索。

原文链接：https://www.quantamagazine.org/the-dirt-that-refused-to-die-20260601/

论坛讨论链接：https://news.ycombinator.com/item?id=48357905

HN 讨论把这放进“地球化学孕育生物化学”的长期猜想里。有人提到海底碱性热液喷口等稳定能量梯度，可能在数十亿年尺度上持续制造有机化合物，并让它们像磁性积木一样组装成更复杂结构。评论里有一个形象比喻：把地球看成一个巨大的、自交互的化学计算机，长期运行耗散式搜索，而生命只是把其中一部分计算能力捕获进代谢、遗传、生态竞争和进化搜索。讨论不多但很宏观，重点是：所谓生命化学可能不是凭空出现，而是地质化学连续体上的一个组织化阶段。

---

## 9. 海盗湾被突袭 20 年后，仍然靠那次备份活了下来 (The Pirate Bay Remains Resilient, 20 Years After the Raid)


TorrentFreak 回顾 The Pirate Bay 2006 年 5 月 31 日第一次重大突袭。当天 65 名瑞典警察进入斯德哥尔摩数据中心，按照刑事调查要求下线 TPB 服务器，背景包括美国政府压力。联合创始人 Gottfrid Svartholm 和 Fredrik Neij 事前已察觉有人跟踪；当警察到达办公室时，Gottfrid 让 Fredrik 前往托管设施处理“incriminating evidence”。Fredrik 出发时突然意识到问题可能与 torrent tracker 有关，于是先做了一份完整备份。事实证明，这个备份成为 TPB 历史上的关键动作：突袭后，团队仅用三天就让网站复活。之后他们以 The Police Bay、自嘲 logo 和凤凰图案回应，突袭反而让网站登上主流媒体，扩大了影响力。文章强调，TPB 后续 20 年的韧性，很大程度始于那次临时备份。

原文链接：https://torrentfreak.com/the-pirate-bay-remains-resilient-20-years-after-the-raid/

论坛讨论链接：https://news.ycombinator.com/item?id=48357154

HN 讨论很快转向正版体验为何仍然常常比盗版差。有人举 Disney+ 上《Malcolm in the Middle》音轨缺失为例：某些 ADR 或墙后对话整段消失，多年报告仍未修复；而 torrent 版本往往由在意质量、metadata 和完整性的发布者维护。评论还提到 AI upscaled 伪 4K、宽屏裁切导致笑点出画、内容因冒犯性被剪掉或剧集被移除等问题。讨论并不是单纯为盗版辩护，而是在说：如果官方渠道质量差、内容不完整、随时消失，用户自然会怀疑“Intended Method”是否真的更好。

