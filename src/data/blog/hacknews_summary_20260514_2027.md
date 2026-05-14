---
title: 'Linux 游戏变快了：Windows API 正在变成内核特性 | Hacker News 摘要 (2026-05-14)'
author: 'hacknews'
description: ''
digest: 'XDA 这篇文章解释了为什么 Linux 游戏近年变得明显更强。过去 Linux 跑 Windows 游戏主要依赖 Wine 和 Valve 的 Proton 在用户态做翻译，而现在一些关键 Windows 语义正在下沉到 Linux 内核'
source_url: 'https://www.xda-developers.com/linux-gaming-is-getting-faster-because-windows-apis-are-becoming-linux-kernel-features/'
pubDatetime: 2026-05-14 20:27:14.311+08:00
tags:
  - Linux_游戏
  - 数字主权
  - 开发者工具
  - 开源生态
---

---

## 1. Linux 游戏变快了：Windows API 正在变成内核特性 (Linux gaming is faster because Windows APIs are becoming Linux kernel features)



XDA 这篇文章解释了为什么 Linux 游戏近年变得明显更强。过去 Linux 跑 Windows 游戏主要依赖 Wine 和 Valve 的 Proton 在用户态做翻译，而现在一些关键 Windows 语义正在下沉到 Linux 内核。代表例子是 NTSYNC：它为 Linux 提供更接近 Windows NT 同步对象的内核级实现，让 Wine/Proton 不必再用较慢的用户态机制模拟大量游戏依赖的线程同步、等待、互斥和事件对象。现代游戏会把渲染、资源加载、物理、音频、AI 和输入分散到多个核心上，频繁同步；同步成本降低后，帧率、卡顿和 CPU 开销都会受益。Steam Deck 已默认加载相关能力，Windows 10 结束支持和 Steam Deck 普及也让更多用户在不知不觉中成为 Linux 玩家。

原文链接：https://www.xda-developers.com/linux-gaming-is-getting-faster-because-windows-apis-are-becoming-linux-kernel-features/

论坛讨论链接：https://news.ycombinator.com/item?id=48087887

HN 讨论从 NTSYNC 延伸到兼容层历史。有人回忆自己在 CTOS 上通过实现几个 trap 跑起 DOS 命令行程序，说明“把另一个系统的关键语义补进来”并不是新想法。评论也讨论 trap、系统调用和中断的差异，以及早期操作系统如何通过少量兼容点获得大量软件生态。整体共识是，Linux 游戏的突破不只是“Wine 更聪明”，而是 Valve、Wine 和内核社区把 Windows 程序真正依赖的底层机制逐步产品化了。

---

## 2. Monokai 作者把数字栈迁到欧洲：主权比便利更重要 (I moved my digital stack to Europe)



Monokai 作者记录了自己把一系列数字服务迁往欧洲或欧洲法域的过程，核心动机是数字主权：数据放在哪里、由谁运营、受什么司法管辖、会不会被一次政策变化或收购影响。迁移项目包括用自托管 Matomo 替代 Google Analytics，用 Proton Mail 和 Proton Pass 替代 Google Workspace 与 1Password，用 Scaleway 替代 DigitalOcean 和 AWS 的部分计算与对象存储。文章并不把欧洲替代品描绘成完美：自托管 Matomo 有维护成本，Proton 的过滤规则和自定义域名数量有限，欧洲云服务也需要适配和迁移。但作者认为，这些摩擦换来的是更清楚的数据控制权、更低的广告依赖，以及与业务价值观更一致的基础设施。

原文链接：https://monokai.com/articles/how-i-moved-my-digital-stack-to-europe/

论坛讨论链接：https://news.ycombinator.com/item?id=48120629

HN 评论确认了这种转向正在欧洲企业和政府采购中快速升温。有人说最近参加行业会议时，每家公司都会被问到能否完全在欧盟或本国托管，许多创业公司甚至已经准备好专门幻灯片。咨询顾问也表示，近几个月从美国迁往欧盟的项目数量超过过去多年总和。讨论同时提醒，数据放在欧盟机房还不够，如果供应商总部在美国，CLOUD Act 等司法风险仍存在；因此真正的“主权云”还涉及公司控制权、法律实体和技术依赖。

---

## 3. 他离开 GitHub 转向 Forgejo：问题不只是宕机，而是谁拥有平台 (Leaving GitHub for Forgejo)




作者把自己的代码从 GitHub 迁到自托管 Forgejo，并把原因归结为所有权和数字自治，而不只是 GitHub 最近的宕机。他提到荷兰内政部在 2026 年 4 月软启动 code.overheid.nl，选择 Forgejo 作为政府源码平台，理由是必须把源码发布在自己拥有的位置。作者列举 GitHub 过去一年 257 起事件、48 起 major incident、AI 工作流带来的容量压力，以及 GitHub 在 2025 年并入 Microsoft CoreAI、不再有独立 CEO 的组织变化。另一个关键点是 GitHub 在 2026 年默认将 Copilot Free/Pro/Pro+ 用户交互数据用于 AI 训练，且没有仓库级 opt-out。作者的结论是，GitHub 已经从相对独立的开发者平台变成微软 AI 栈的一部分。

原文链接：https://jorijn.com/en/blog/leaving-github-for-forgejo/

论坛讨论链接：https://news.ycombinator.com/item?id=48121266

评论提醒，Git 本来就是分布式系统，问题是围绕 Git 的发现、issue、PR、CI 和社交工具被 GitHub 集中化了。有人建议即使主站迁走，也保留自动同步的 GitHub mirror，避免多年后自托管实例消失导致项目难以寻找。反方则认为 GitHub 已经用开放仓库训练商业模型，继续把个人代码放上去会强化这种关系。讨论核心是现实权衡：完全离开 GitHub 会损失可发现性，但继续依赖它又意味着接受微软和 AI 平台化的方向。

---

## 4. 软件正在 Emacs 化：每个人都能让 AI 给自己搓一个专属 App (The Emacsification of Software)



这篇文章从作者用 Claude 生成一个 macOS Markdown viewer 说起。他不满意终端 Markdown 阅读体验，也不想让 Obsidian、Typora、Bear 这类编辑器打乱自己的编辑环境，于是让 Claude 写了 MDV.app：一个能打开 `.md`、支持复制、搜索、目录导航、历史 FTS 索引、书签、记忆阅读位置和主题排版的专用阅读器。作者认为重点不是这个 app 多强，而是 AI 让个人软件重新可行：过去原生 UI 开发稀缺、Electron “够用”，所以大家忍受通用应用；现在 Claude 已经足够做出“比替代品更贴合我”的工具。这像 Emacs 文化：用户不只是配置软件，而是围绕个人工作流不断扩展出自己的应用宇宙。

原文链接：https://sockpuppet.org/blog/2026/05/12/emacsification/

论坛讨论链接：https://news.ycombinator.com/item?id=48118727

HN 讨论提出了“Lisp Curse”的反面风险：如果每个程序员都成为自己塔里的巫师，大家都写自己的工具，协作和共享可能变弱。但也有人认为，播客、音乐、RSS、Bluesky 客户端、笔记、书签、聊天、时间追踪、菜谱等日常软件都可以被个人重新夺回，做到不一定全球最佳，但最适合自己。另一个关键前提是数据可访问：如果公司把内容锁在围墙里，个性化界面就无从谈起。

---

## 5. OrcaSlicer 分支恢复 BambuNetwork：Bambu Lab 争议继续发酵 (Restore full BambuNetwork support for Bambu Lab printers)



FULU-Foundation 的 OrcaSlicer-bambulab 项目说明很短，但目标明确：恢复 Bambu Lab 打印机的完整 BambuNetwork 支持，让用户不只局限于 LAN 模式，而是可以像过去一样通过 BambuNetwork 在互联网上使用完整打印功能。Windows 版本需要 WSL 2，Linux 正常安装即可，macOS 仍在开发中；项目还建议配合 BMCU 固件使用。它之所以受到关注，是因为 Bambu Lab 近期对恢复相关功能的 OrcaSlicer 分支发出法律威胁，引发开源、维修权和已售硬件功能控制的争议。这个项目页本身信息不多，但它处在 Bambu 云服务、AGPL 代码、客户端识别和用户设备所有权冲突的中心。

原文链接：https://github.com/FULU-Foundation/OrcaSlicer-bambulab

论坛讨论链接：https://news.ycombinator.com/item?id=48115127

HN 评论情绪强烈。很多人认为，如果厂商出售设备时包含某种功能，之后通过软件更新或服务限制移除该功能，本质上就是对用户所有权的侵犯。更让人不满的是，相关客户端来自 AGPL 生态，GPL/AGPL 的目的正是防止厂商拿开源代码构建封闭控制。也有人把这看作更大趋势：如果用户不能运行自己的代码，硬件和软件都会逐步变成按厂商规则投币使用的机器。

---

## 6. Google IDE 史：从各用各的编辑器，到云端索引整个 monorepo (A History of IDEs at Google)





Laurent Le Brun 回顾了 Google 内部 IDE 的演进。早年 Google 工程师可自由选择 Vim、Emacs、Eclipse、IntelliJ 等工具，Jeff Dean 曾认为统一编辑器只会制造不快乐。但在 google3 这样的巨型 monorepo 中，编辑器集成不是小事：Bazel、Starlark、格式化、代码搜索和代码智能都要被重复实现。2013 年前后，Google 出现了 Cider，一个 Web-based Cloud IDE。它最初方便技术写作者快速改 Markdown，后来接入语言服务器和后端索引，能在浏览器里基于整个代码库提供补全、引用和搜索。关键在于传统 IDE 假设源码、构建元数据和索引本地可用，而 Google 规模下这些都必须后端化。2020 年后，团队转向用 VS Code 作为前端，让 Google 的代码智能后端和更成熟的编辑体验结合。

原文链接：https://laurent.le-brun.eu/blog/a-history-of-ides-at-google

论坛讨论链接：https://news.ycombinator.com/item?id=48073979

评论补充了更多早期历史。Xoogler 回忆说，Google 当年 IDE 环境高度依赖语言：C++/Python 多是 Vim 和 Emacs，Java 则有 Eclipse 和 IntelliJ。Eclipse 在 Google 的源控和 monorepo 模型下很痛苦，因为外部 Java IDE 通常围绕 jar 和 Maven/Gradle 工作，而 Google 依赖 Piper/SrcFS/Blaze。后来 magicjar 这类内部项目把依赖构造成 IDE 可消费的 jar，让 IntelliJ 更可用。大家对 Cider 作为快速配置改动工具的价值很认同。

---

## 7. Python 3.14/3.15 回滚增量 GC：生产环境内存压力太大 (Reverting the incremental GC in Python 3.14 and 3.15)


Python 核心开发者宣布，将在 Python 3.14 和 3.15 中回滚新的 incremental garbage collector，恢复 Python 3.13 的 generational GC。原因是 3.14 发布后，多个生产环境报告显著内存压力。对 3.15 来说这仍处 alpha 阶段，回滚正常；对 3.14 patch release 来说较罕见，但旧 GC 是经过多年生产验证的已知方案，而新 incremental GC 没走 PEP 流程，也曾在 3.13 最终发布前被回滚。团队计划尽快发布 3.15 额外 alpha 和提前发布 3.14.5。若未来要在 3.16 重新引入 incremental GC，应走常规 PEP 流程并做更充分评估。

原文链接：https://discuss.python.org/t/reverting-the-incremental-gc-in-python-3-14-and-3-15/107014

论坛讨论链接：https://news.ycombinator.com/item?id=48077924

HN 评论里有用户报告实际踩坑：服务迁到 Python 3.14 后看起来像内存泄漏，memray 显示每个请求都重建 aiohttp/httpx 客户端，底层 SSL 相关内存释放速度赶不上增长，回滚 3.13 后问题消失。另有人解释，某些 reference cycle 会成为 incremental GC 的最坏情况：少量 container object 持有大量外部内存，触发条件不够敏感时内存会明显膨胀。多数人认为回滚是稳妥决定，哪怕在 bugfix release 中较少见。

---

## 8. 美国赢在 AI 商业化：关键不是论文，而是云、数据和分发 (The US is winning the AI race where it matters most: commercialization)


这篇文章认为，美国在 AI 竞赛中真正领先的不是论文数量，而是商业化能力。DeepSeek R1 证明中国有强大模型能力，并帮助中国减少对 Nvidia 和美国供应链依赖，但美国公司在收入、采用、工具链和全球触达上仍明显领先。作者把关键归结为全栈优势：芯片、电力、数据中心、云平台、开发者工具、消费平台和企业软件同时存在。便宜电力能降低训练和推理成本，但决定性层是云基础设施和数据分发。AWS、Azure、Google Cloud 是模型触达世界的通道，YouTube、Google Drive、Microsoft 365、GitHub 等平台又掌握日常工作和内容数据。欧洲有工程人才，但缺少同等规模的云、平台和数据生态。

原文链接：https://avkcode.github.io/blog/us-winning-ai-race.html

论坛讨论链接：https://news.ycombinator.com/item?id=48121929

HN 讨论质疑“AI race”为什么必须被表述成战争。有人认为 AI 公司和媒体把竞赛叙事包装成战争，是为了推动投资和政策支持；真正风险未必是谁先商业化，而是模型如何被嵌入网络、舆论、军用系统和社会控制。也有人指出，如果美国服务因政策不可预测而失去全球信任，中国又因数据和政治风险难以被信任，欧洲反而可能被迫发展自己的技术栈。开源模型被视为中国对世界更实际的贡献之一，因为它降低了昂贵 AI 栈的门槛。

---

## 9. 美国免费 locality domain 指南：还能申请 `*.city.state.us` (Setting up a free *.city.state.us locality domain (2025))



这篇指南介绍如何申请美国 locality domain，例如 `frederick.seattle.wa.us` 这样的地址。locality domain 创建于 1992 年，理论上美国公民、永久居民、美国组织或在美国有真实存在的组织可以申请。流程并不像普通域名购买：首先要查找自己的城市/州二级域是否已委托给某个管理者，很多列表停留在 2009 年，需要追踪旧 ISP 或公司后继者；如果未委托，NeuStar 通常只允许地方政府申请。申请前还要先准备 nameserver，作者推荐用 Amazon Lightsail 创建 DNS zone 获取免费 nameserver，然后填写 Interim .US Domain Template，把组织信息、联系人、nameserver hostname/IP 和 US nexus 信息发给对应管理者。文章既是实操指南，也是一段早期互联网公共命名体系的考古。

原文链接：https://fredchan.org/blog/locality-domains-guide/

论坛讨论链接：https://news.ycombinator.com/item?id=48122635

评论补充了现实复杂性。有人说自己有三个 Oregon locality domain，分别由不同老牌咨询公司或 ISP 管理，其中一个管理者已去世，遗孀可能停止支付托管账单，相关 locality 用户的域名也可能随之消失。由于现在 USTLD 对“新”域名可能要求城市或县提供公证信，迁移和恢复非常麻烦。讨论也追忆 Jon Postel 式的早期互联网公共服务愿景：地理层级域名曾经不是商业产品，而如今 DNS 更像一门生意。

---

## 10. Xs of Y：每局都重新命名自己的 Lisp roguelike (Xs of Y – roguelike that names itself every run. Written in 4kLoC)



Xs of Y 是一个用作者自己的 Lisp 方言 let-go 写的 roguelike，游戏还未完成，但已经可在浏览器中试玩。它的噱头是每一局都会生成新的标题、任务和 rune 映射，例如随机要求玩家找回某个荒诞神器。魔法系统本身就是 Lisp：rune 实际上是符号，法术是 s-expression，玩家像拥有“地牢现实引擎”的 root 权限，只是说明书使用每次启动都会变化的死语言。游戏里还有传统 roguelike 交互：蜘蛛喷网、史莱姆分裂、巨魔再生、火焰蔓延、推怪下岩浆或把自己推下深渊。项目约数千行 let-go，无依赖，6ms 启动，可原生运行或通过 WASM 运行。

原文链接：https://github.com/nooga/xsofy

论坛讨论链接：https://news.ycombinator.com/item?id=48080755

HN 讨论非常符合 roguelike 气质：有人用燃烧长矛把自己杀死后触发了 fatal error，作者也承认系统还没打磨完。玩家在评论里摸索 rune 系统、武器数值、自动探索、休息、下楼快捷键等隐藏机制。作者解释，rune 本质上是会被游戏引擎求值的 lispy threading macro，例如给目标点火、把目标扩展成区域、伤害目标后把目标切回自己并治疗。大家的兴趣点在于，这套系统未来可能允许非常离谱的法术，比如时间回滚、和门交换意识、修改怪物 AI。

