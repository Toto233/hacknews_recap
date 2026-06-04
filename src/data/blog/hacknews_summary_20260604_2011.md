---
title: '点一下链接，github.dev 里的 GitHub Token 就 | Hacker News 摘要 (2026-06-04)'
author: 'hacknews'
description: ''
digest: '安全研究者 Ammar Askar 披露一个 VSCode / github.dev 相关漏洞：攻击者可通过诱导用户点击链接，窃取拥有读写仓库权限的 GitHub token，包括私有仓库权限。github.dev 是 GitHub 在浏览'
source_url: 'https://blog.ammaraskar.com/github-token-stealing/'
pubDatetime: 2026-06-04 20:11:46.567+08:00
tags:
  - 安全漏洞
  - AI工具成本
  - 编程语言
  - 隐私与工作场所
---

---

## 1. 点一下链接，github.dev 里的 GitHub Token 就可能被偷 (1-Click GitHub Token Stealing via a VSCode Bug)





安全研究者 Ammar Askar 披露一个 VSCode / github.dev 相关漏洞：攻击者可通过诱导用户点击链接，窃取拥有读写仓库权限的 GitHub token，包括私有仓库权限。github.dev 是 GitHub 在浏览器中运行的轻量 VSCode，用户可直接查看代码、提交修改和发 PR。为实现这些能力，github.com 会把 OAuth token 传给 github.dev，而该 token 并不只限定当前仓库，可能拥有用户可访问仓库的广泛权限。研究者利用 VSCode webview 安全模型中的缺陷，实现 token 外传。文章详细解释了 VSCode Webview 隔离机制、漏洞成因、PoC、用户如何保护自己，以及 Microsoft/GitHub 在响应流程中做得好的地方。核心问题不只是单个 bug，而是浏览器 IDE 持有高权限 token 后带来的巨大攻击面。

原文链接：https://blog.ammaraskar.com/github-token-stealing/

论坛讨论链接：https://news.ycombinator.com/item?id=48371562

HN 讨论普遍认为文章质量很高，但也把问题上升到架构层面。很多评论指出，浏览器版 VSCode 默认登录 GitHub 并持有广泛权限 token，是防御深度上的原罪；理想设计应使用临时、单仓库、最小权限 token，只允许对当前 repo 做必要操作。有人类比这是把 god-permission GitHub API token 明文放在本地机器上，等恶意 npm 包来偷。也有评论讨论 OAuth scope、webview sandbox、GitHub 产品便利性与安全边界之间的矛盾。共识是：修 bug 重要，但权限最小化才是根本缓解。

---

## 2. Meta 员工每次只能暂停 30 分钟行为追踪 (Meta workers can opt out of being tracked at work up to 30 min)



BBC 报道称，Meta 正在缩减一项追踪员工电脑活动以训练 AI 的计划。此前公司内部宣布 Model Capability Initiative，将记录员工的键盘输入和鼠标点击，用真实办公行为训练能帮助人完成电脑任务的 AI agent，引发员工强烈反弹和超过 1500 人签名的请愿。根据 Reuters 看到的内部 memo，Meta 新增控制项允许员工每次暂停数据收集最多 30 分钟，也可以申请完全豁免。Meta 曾表示数据不会用于其他目的，并设有敏感内容保护措施，但员工仍认为这很“反乌托邦”，尤其是在公司持续裁员背景下。事件展示了 AI agent 训练数据需求与员工隐私、劳动关系之间的直接冲突。

原文链接：https://www.bbc.com/news/articles/c93x0k194yno

论坛讨论链接：https://news.ycombinator.com/item?id=48383220

HN 评论大量联想到《雪崩》中对工作场所量化监控的讽刺：连阅读 memo 花了多久都会被统计并评价。很多人认为 30 分钟暂停并没有解决问题，反而凸显公司默认持续监控员工行为的立场。也有人从企业安全角度讨论，如果记录键盘和鼠标，如何避免捕获密码、客户数据、内部机密和个人信息。部分评论认为 Meta 的动机可以理解：训练电脑操作 agent 需要真实工作流数据；但在雇佣关系中，这种同意很难被视为自愿。整体情绪明显偏负面，认为这是 AI 时代工作场所监控升级的代表案例。

---

## 3. Elixir 1.20 正式进入渐进类型时代 (Elixir v1.20: Now a gradually typed language)




Elixir 1.20 发布，完成了其类型系统路线图的第一个重要开发里程碑：在不要求开发者添加类型注解的前提下，对所有 Elixir 程序进行类型推断和渐进式类型检查。José Valim 介绍称，这套基于集合论类型的系统目标是 sound、practical、incremental，能在动态语言代码中发现“verified bugs”，也就是只要执行就一定会在运行时失败的问题，同时保持极低误报率。Elixir 团队从 2022 年宣布研究计划，2023 年发表设计论文，如今开始把研究成果落到编译器和日常开发中。新版本还展示了在类型收窄 benchmark 中的表现，说明它能从普通 Elixir 代码中恢复相当精确的类型信息。对 Elixir 社区来说，这是在保留动态语言生产力的同时，引入静态检查收益的重要一步。

原文链接：https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/

论坛讨论链接：https://news.ycombinator.com/item?id=48388324

讨论区围绕“动态语言是否需要静态类型”展开。很多 Elixir 用户表示，过去选择 Elixir 时最大的顾虑就是缺少静态类型；虽然不可变数据、模式匹配和社区风格已经减少了不少类型错误，但静态检查仍然有价值。也有人认为渐进类型最难的是平衡：如果要求太多注解，会破坏 Elixir 的轻量体验；如果太弱，又难以提供足够安全感。整体上，评论对不强制注解、先找确定运行时错误的策略比较认可，认为这是动态语言引入类型系统时更现实的路径。

---

## 4. Google 发布 12B 本地多模态模型 Gemma 4 (Gemma 4 12B: A unified, encoder-free multimodal model)


Google 发布 Gemma 4 12B，定位是在笔记本等本地设备上运行的中等规模多模态模型，介于更轻量的 E4B 和更强的 26B MoE 之间。它的核心特点是统一、无编码器架构：视觉和音频输入直接进入 LLM 主干，而不是先经过独立多模态编码器。这使模型在较小内存占用下支持图像、音频和文本任务，也首次把原生音频输入带到 Gemma 中等规模模型。Google 称 Gemma 4 系列下载量已超过 1.5 亿次，新模型面向 agentic multimodal intelligence，强调本地推理效率、移动优先设计和高级推理能力。对开发者而言，它补上了本地多模态模型在尺寸、能力和部署便利性之间的一个中间档位。

原文链接：https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/

论坛讨论链接：https://news.ycombinator.com/item?id=48385906

HN 讨论主要集中在实际跑分和本地体验。有用户用 Q4 量化版跑自己的 minesweeper vibe-coding benchmark，认为结果不错，甚至在输出质量上接近或好于 GPT-4.1 的旧结果，但也出现了多余括号、函数定义间错误逗号等低级语法问题。评论区总体认可它作为本地编码/多模态模型的潜力，同时也提醒 benchmark 与真实工程体验仍有差距。还有人关注无编码器多模态架构是否会成为趋势，以及 Google 是否能在开放权重、本地部署和 Gemini 产品线之间找到清晰定位。

---

## 5. Uber 给 AI 编程工具设每月 1500 美元上限 (Uber's $1,500/month AI limit is a useful signal for AI tool pricing)


Simon Willison 评论 Uber 为员工使用 AI 编程工具设定每月 1500 美元 token 花费上限一事，认为这是企业从早期狂热转向成本管理的信号。根据 Bloomberg 报道，Uber 的限制适用于 Cursor、Claude Code 等 agentic coding software，且每个工具分别计额，也就是说一个工具的花费不影响另一个工具。Willison 认为，相比鼓励员工拼命“tokenmaxxing”的排行榜，这种上限更理性。若假设工程师同时活跃使用两个工具，每年上限就是 3.6 万美元；以 Uber 美国软件工程师约 33 万美元年总包估算，AI 工具预算约占 11%。这暗示企业已经开始用明确美元预算衡量编码代理的生产力价值，也说明个人订阅价格仍处在严重补贴阶段。

原文链接：https://simonwillison.net/2026/Jun/3/uber-caps-usage/

论坛讨论链接：https://news.ycombinator.com/item?id=48383056

HN 讨论重点是 AI 工具真实成本和定价是否可持续。有人质疑 Anthropic、OpenAI 是否会长期维持当前 API 价格，还是会被中国开源模型和推理成本下降压低。也有人认为企业愿意支付高额预算，说明 coding agent 已经能带来可观生产力提升，但预算上限是必要的治理工具。部分评论提到个人用户每月几十美元的订阅显然无法覆盖重度 token 消耗，未来可能出现更细分的企业计费、内部审批和用量审计。整体看，这条新闻被视为 AI 编程工具进入企业采购和成本控制阶段的标志。

---

## 6. 蓝牙音箱可被远程变成 BadUSB 攻击工具 (Pwnd Blaster: Hacking your PC using your speaker without ever touching it)





研究者在逆向 Creative Sound Blaster Katana V2X 固件时发现多个漏洞，使攻击者可在约 15 米范围内、无需配对或接触设备，把这款 USB 连接的音箱变成隐蔽监听工具和 Rubber Ducky 式 BadUSB 攻击载体。Katana V2X 通过 Creative 自定义 CTP 协议与应用通信，USB 命令需要 challenge-response 认证，但密钥是静态的，可从官方应用二进制中导出。更严重的是，固件更新和蓝牙路径可被滥用，攻击者能写入自定义固件，让音箱作为连接到电脑的 USB HID 设备输入按键。厂商最初不认为这构成网络安全风险，引发研究者和社区强烈质疑。文章展示了外设固件、蓝牙和 USB 信任边界叠加后产生的现实攻击面。

原文链接：https://blog.nns.ee/2026/06/03/katana-badusb/

论坛讨论链接：https://news.ycombinator.com/item?id=48382310

HN 讨论几乎一致认为厂商回应离谱：无线写入别人音箱固件，并让连接电脑的 USB 设备模拟键盘输入，显然是安全漏洞。评论质疑还有多少外设厂商没有真正安全团队，类似问题可能广泛存在于音箱、键盘、鼠标、耳机和灯光设备中。有人分享蓝牙音箱被陌生人连接播放声音的经历，说明消费级外设常把便利性放在安全之前。也有人从 USB HID 的根本信任模型出发，认为电脑很难区分“合法键盘”和“被攻陷外设”。

---

## 7. 斯坦福研究称 AI 回答法律问题胜过法学教授 (AI outperforms law professors in Stanford Law study)




斯坦福法学院 Julian Nyarko 领导的一项研究称，在合同法课程学生问题的盲评中，法学教授更偏好 AI 生成的回答，而不是其他教授写的回答。研究由 16 位美国法学院教授参与，进行了近 3000 次匿名两两比较，结果显示 AI 在 75% 的 head-to-head matchup 中胜出。研究者认为，法律教育不同于有标准答案的学科，它涉及判断、细腻推理和处理模糊性，因此结果挑战了人们对 AI 法律推理能力的假设。研究重点不是让 AI 替代教师，而是探讨大语言模型能否作为合同法课程中的有效 tutor，帮助学生获得更及时、清晰和可扩展的解释。

原文链接：https://law.stanford.edu/press/ai-outperforms-law-professors-in-stanford-law-study/

论坛讨论链接：https://news.ycombinator.com/item?id=48377761

HN 对研究方法质疑很强。有评论指出样本只有 16 位教授，但产生 3000 次比较，个体差异很大，可能统计功效不足；图表中教授间评价分布差异明显，说明结果可能受评审者偏好影响。还有人质疑主结果为何主要展示 Google 模型，而其他模型只在别处出现，担心选择性呈现。支持者则认为，即便研究有缺陷，也说明 AI 在生成教学式解释上已经相当强。讨论重点从“AI 是否会取代法学教授”转向“如何设计更可靠的教育 AI 评估”。

---

## 8. DaVinci Resolve 21 把照片和 AI 工具带进剪辑套件 (DaVinci Resolve 21)



Blackmagic Design 发布 DaVinci Resolve 21，新增 Photo page，把其电影级调色工具扩展到静态摄影管理和编辑。新版本还加入一批 AI 功能，包括按画面内容和对白搜索素材、识别场记板信息、去龄化、瑕疵移除、AI 语音生成等。Edit 和 Cut 页面改进关键帧和图形格式支持，Color 页面引入 MultiMaster trim passes、layer list node graphs 和 group versions，Fusion 集成 Krokodove 工具集带来 70 多个动态图形功能，Fairlight 也加入文件夹式音轨管理。整体看，Resolve 21 不只是视频剪辑更新，而是在照片管理、动态图形、音频和沉浸式/VR 工作流上继续扩张，试图覆盖更多创意生产链路。

原文链接：https://www.blackmagicdesign.com/products/davinciresolve/whatsnew

论坛讨论链接：https://news.ycombinator.com/item?id=48384482

讨论区对这次更新评价很高，甚至有人认为即使去掉 AI 功能也很重要，因为 Resolve 基本加入了类似 Lightroom 的照片管理/编辑能力，尤其对 Linux 用户很有吸引力。评论还提到新增动态图形工具可能覆盖很多 After Effects 的基础使用场景，而这些功能不少也在免费版中提供。有人提醒 Blackmagic 的免费版已经非常强，Studio 一次性买断价格也比订阅制友好。争议点主要在 AI 功能是否可靠，以及 Resolve 是否会因为功能越来越多而变得臃肿。

---

## 9. BurntSushi 公开自己的抗 NMDA 脑炎诊断 (I was recently diagnosed with anti-NMDA receptor encephalitis)


知名 Rust 开发者 Andrew Gallant（BurntSushi）写文说明自己最近被诊断为 anti-NMDA receptor encephalitis。这是一种自身免疫性疾病，抗体异常攻击大脑，引发脑部炎症。文章面向依赖其开源工作的用户，解释他近期无法维持过去工作节奏的原因。症状最初像流感，包括心跳加速、盗汗、寒战和失眠，但很快出现严重心理和神经症状：前所未有的焦虑、惊恐发作、下颌疼痛、平衡障碍、自杀意念、精神病性症状、妄想和幻听。最终他接受检查并开始治疗，文章也说明预后和恢复需要时间。它既是个人病情说明，也是对开源维护者可用性和人身脆弱性的提醒。

原文链接：https://burntsushi.net/encephalitis/

论坛讨论链接：https://news.ycombinator.com/item?id=48384355

HN 讨论中，很多人分享自己或亲友遭遇罕见病、免疫疾病和长期误诊的经历。评论强调，神经免疫类疾病常常以心理症状起步，容易被误判为焦虑、压力或精神问题，导致诊断延迟。也有人表达对 BurntSushi 多年开源贡献的感谢，希望社区降低对个人维护者的持续产出预期。整体氛围较为支持和克制，重点不在技术，而在提醒大家：开源基础设施背后是具体的人，健康危机可能突然中断任何人的工作。

---

## 10. PlayStation 架构长文拆解初代 3D 主机 (PlayStation Architecture)





Rodrigo Copetti 的 PlayStation Architecture 是一篇极长的主机架构分析，系统拆解初代 PlayStation 的硬件设计、CPU、GPU、SPU、内存映射、总线接口、I/O、图形流水线和开发环境。文章从 Sony 选择 MIPS R3000A 系列 CPU 的历史背景讲起，解释它如何在 1990 年代以相对简单实用的架构进入 3D 游戏时代。PlayStation 的设计没有像后来主机那样追求复杂可编程流水线，而是围绕固定功能 GPU、专用音频处理、CD-ROM 存储和开发者可掌控的硬件路径展开。文章配有大量主板、芯片和架构图，适合想理解早期 3D 游戏机如何在有限资源下实现多边形渲染、音频和游戏逻辑协同的人阅读。

原文链接：https://www.copetti.org/writings/consoles/playstation/

论坛讨论链接：https://news.ycombinator.com/item?id=48382142

讨论区补充了不少底层开发经验。有评论提到 PS1 内存映射存在多个虚拟区域指向同一物理内存，并回忆自己参与《合金装备》PSX 到 PC 移植时遇到 Konami 程序员利用指针高位区分 C4 炸弹贴墙或落地状态的技巧。也有人讨论 BIOS、存储卡 bootloader 和硬件 bug 如何被游戏或 homebrew 利用。整体评论偏怀旧和工程细节，显示早期主机开发大量依赖对硬件行为的直接理解，而这些技巧在现代抽象层更厚的平台上已经不常见。

