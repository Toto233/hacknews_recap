---
title: 'dnsmasq 一次放出 6 个严重漏洞，维护者说 AI 报告洪水还 | Hacker News 摘要 (2026-05-13)'
author: 'hacknews'
description: ''
digest: 'dnsmasq 维护者 Simon Kelley 在邮件列表宣布，CERT 正式发布 6 个 dnsmasq 严重安全漏洞的 CVE。这些都是长期存在、影响几乎所有非古老版本的 bug，已经提前通知发行版和供应商。维护者发布了带补丁的 2.'
source_url: 'https://lists.thekelleys.org.uk/pipermail/dnsmasq-discuss/2026q2/018471.html'
pubDatetime: 2026-05-13 20:57:44.117+08:00
tags:
  - 软件安全
  - 开源生态
  - AI_编程
  - 图形技术
---

---

## 1. dnsmasq 一次放出 6 个严重漏洞，维护者说 AI 报告洪水还会继续 (CERT is releasing six CVEs for serious security vulnerabilities in dnsmasq)


dnsmasq 维护者 Simon Kelley 在邮件列表宣布，CERT 正式发布 6 个 dnsmasq 严重安全漏洞的 CVE。这些都是长期存在、影响几乎所有非古老版本的 bug，已经提前通知发行版和供应商。维护者发布了带补丁的 2.92rel2 稳定版，也会把修复提交到开发分支；部分补丁只是回移植，部分则是更全面的重写以解决根因。他特别提到，AI 驱动的安全研究带来了一场“革命”：过去几个月收到大量 bug 报告，需要去重、判断哪些要走供应商预披露、哪些应公开后立即修复。由于“好人”能反复找到这些漏洞，坏人也可能做到，过长 embargo 的意义变弱。接下来 dnsmasq 会优先尽快发布 2.93，而不是无限等待下一批 AI 报告。

原文链接：https://lists.thekelleys.org.uk/pipermail/dnsmasq-discuss/2026q2/018471.html

论坛讨论链接：https://news.ycombinator.com/item?id=48112042

HN 讨论再次转向 C 和内存安全语言。有人认为这已经到达临界点，DNS/DHCP 这类基础组件很难再为继续使用内存不安全语言辩护，Rust 或 Go 重写应变得更紧迫。反方指出，Rust 重写也不是免费午餐，uutils 等新项目同样会有大量 CVE，而且 TOCTOU、逻辑错误和新代码成熟度问题不会被内存安全自动消灭。也有人强调真正稀缺的是愿意长期维护这类基础设施的人才，而不是语言本身。

---

## 2. Jeff Geerling 批评 Bambu Lab：别拿开源代码反过来压制开源用户 (Bambu Lab is abusing the open source social contract)


Jeff Geerling 发文批评 Bambu Lab 正在滥用开源社区的社会契约。背景是 OrcaSlicer 是 Bambu Studio 的开源 fork，而 Bambu Studio 又源自 PrusaSlicer 和 slic3r，均受 AGPLv3 约束。近期一个 OrcaSlicer-bambulab fork 尝试让用户在不经过 Bambu 云服务的情况下完整控制打印机，却收到 Bambu 的法律威胁。Bambu 称该 fork 通过伪造身份元数据冒充官方客户端，可能给云基础设施带来风险。Geerling 反驳说，开发者使用的是 Bambu 自己开源 Linux 客户端中的上游代码，如果系统安全主要靠 user agent 或客户端身份字符串区分，就不应把责任推给一个小型开源 fork。他认为 Bambu 正在用法律和公关压力压制极少数想真正拥有自己设备的高级用户。

原文链接：https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/

论坛讨论链接：https://news.ycombinator.com/item?id=48109224

评论里很多人把 Bambu 与 Prusa 等替代方案对比。Bambu 的优势是接近“开箱即用”，多色、校准和消费级体验仍然强；但代价是云依赖、封闭控制和厂商策略风险。Prusa 更贵，但支持、开放性、长期升级和社区信任更强。也有人提醒，其他 3D 打印机通常需要用户理解更多机械和调参细节，不能简单把 Bambu 用户迁移过去。讨论核心不是某个 fork 是否完美，而是硬件厂商能否在受益于开源后，把云接口和法律威胁变成控制用户的工具。

---

## 3. 如果 AI 写代码，为什么还要用 Python？ (If AI writes your code, why use Python?)


这篇文章提出一个挑衅性判断：过去十年选择 Python 或 TypeScript，是因为它们生态大、招聘容易、能快速交付；Rust、Go、C++ 等更快的语言虽然性能高，但人类学习、构建和维护成本更高。现在 AI 让这个计算发生变化，尤其是 Rust、Go、Swift 这类有强类型、快编译反馈和明确错误信息的语言，反而更适合 agent 反复自我修正。作者举了几类例子：TypeScript 编译器迁往 Go 获得约 10 倍速度提升；Anthropic 研究员用多个 Claude agent 写出 Rust C 编译器；Steve Klabnik 用 Claude 更快推进新系统语言；Ladybird 的 JS 引擎被 AI 辅助从 C++ 移植到 Rust。文章的核心不是“Python 已死”，而是当 AI 降低硬语言使用成本后，默认选慢语言的理由会变弱。

原文链接：https://medium.com/@NMitchem/if-ai-writes-your-code-why-use-python-bf8c4ba1a055

论坛讨论链接：https://news.ycombinator.com/item?id=48100433

HN 讨论对文章结论很谨慎。反方认为 Python 仍有极强优势：可读性接近伪代码、训练数据多、生态成熟，而且使用 LLM 时更应选自己能读懂和维护的语言。有人指出 Python 局部可读性强，但大型系统里的跨模块交互和动态类型会增加全局推理成本；Haskell、Rust 等强类型语言更容易先理解“它是什么”，再理解“它做什么”。也有人提醒，AI 快速生成大量代码可能让 Python 的宽松性放大结构复杂度。

---

## 4. Obsidian 重建插件生态：自动审查、风险记分和未来权限声明 (The Future of Obsidian Plugins)





Obsidian 发布新的 Community 站点和开发者仪表盘，用来管理 4000 多个插件和主题、超过 1.2 亿次下载的社区生态。新站点支持按类别、下载量、流行度、更新时间浏览插件，每个项目有详情页、截图和安全 scorecard。更重要的是，Obsidian 引入自动审查系统，不只审初次提交，而是扫描每个版本的安全和代码质量。此前小团队人工审核初始提交已经跟不上节奏，尤其 coding agents 让插件生成更快；新系统会检查开发者政策、最佳实践、已知漏洞和恶意代码迹象。人工审核仍会保留，但重点转向热门插件、精选插件和社区举报。未来还会加入网络、文件系统、剪贴板等能力披露、作者验证、团队工具和更透明的安全信息。

原文链接：https://obsidian.md/blog/future-of-plugins/

论坛讨论链接：https://news.ycombinator.com/item?id=48109970

Obsidian CEO 在评论中说明，这个系统做了近一年，目标是在不破坏现有工作流的情况下提升安全和可发现性。用户最关心的是权限模型：插件是否需要像 Android 那样请求磁盘、网络、剪贴板等权限，而不是只做事后声明。Obsidian 的回应是，disclosures 是通往权限系统的第一步。也有人借 Android 早期网络权限的历史提醒，如果几乎所有插件都请求网络，权限列表会很快失去信号价值。

---

## 5. Show HN：把 Gemini 工具调用蒸馏成 2600 万参数小模型 (Show HN: Needle: We Distilled Gemini Tool Calling into a 26M Model)



Cactus 开源了 Needle，一个 2600 万参数的单次 function calling 模型，目标是在手机、手表、眼镜等小设备上完成工具调用。团队认为 agentic 体验的很多基础动作不是复杂推理，而是“检索和组装”：匹配用户意图到工具名，抽取参数，然后输出 JSON。因此他们采用 Simple Attention Network，整个模型主要由注意力和门控组成，没有 MLP/FFN。Needle 先在 16 个 TPU v6e 上预训练 200B tokens，再用 Gemini 合成的 2B tokens 单次函数调用数据后训练。项目称它在个人 AI 工具调用任务上超过 FunctionGemma-270M、Qwen-0.6B、Granite-350M、LFM2.5-350M，并提供本地 playground，让开发者在自己的工具 schema 上测试和微调。

原文链接：https://github.com/cactus-compute/needle

论坛讨论链接：https://news.ycombinator.com/item?id=48111896

评论最关心模型的判别力和边界：天气查询这类例子很简单，真正难的是大量相似工具、参数歧义、错误工具拒绝、以及工具描述不完整时是否可靠。团队主张 Needle 适合单次工具调用，其他小模型在对话和通用任务上仍更强。讨论也对“无 FFN”很感兴趣：如果事实和工具 schema 都在输入里，模型是否真的不需要大量参数记忆事实？这可能对本地端 RAG、工具调用和可穿戴设备 AI 有意义，但需要更多公开评测。

---

## 6. 如何实时渲染天空、日落和行星大气 (Rendering the Sky, Sunsets, and Planets)





Maxime Heckel 写了一篇长文，演示如何用 shader 在浏览器里实时渲染接近真实的天空、日落和行星大气。灵感来自航天飞机 Endeavour 在低地球轨道日落中的照片：地球大气从深橙到蓝再到太空黑色的层次，背后是 atmospheric scattering。文章从基础 sky dome 做起，用 raymarching 在透明大气体积中采样，计算 optical depth、transmittance 和 scattering，再引入 Rayleigh scattering、Mie scattering、ozone absorption 等物理近似，解释天空为什么蓝、日落为什么红。之后作者把效果扩展到行星外壳，并尝试实现 Sebastian Hillaire 的 LUT 方法以提升性能。文章兼具科普和工程教程，展示了真实自然现象如何一步步变成实时图形效果。

原文链接：https://blog.maximeheckel.com/posts/on-rendering-the-sky-sunsets-and-planets/

论坛讨论链接：https://news.ycombinator.com/item?id=48107997

HN 评论主要是赞赏和补充。有人提到 Sebastian Lague 的行星大气视频，同样把复杂视觉算法讲得很直观；也有人指出 demo 里的日落模型还有一个细节不够真实：太阳落到地平线下后，天空不应立刻变黑，因为高层大气仍被太阳照亮，直到太阳低于地平线约 18 度才进入天文暮光结束。做过游戏引擎散射实现的人表示，仅靠 Rayleigh 和 Mie 就能得到相当不错的日出日落循环，这类视觉编程很有成就感。

---

## 7. 为什么资深开发者说不清自己的价值：他们在对抗复杂度 (Why senior developers fail to communicate their expertise)





这篇文章从 copywriting 角度解释资深开发者为什么难以向业务方说明自己的专业价值，尤其在“AI 会让开发者过时”的叙事中。作者把公司拆成两个循环：第一个循环是市场、销售、产品和 CEO 面对的不确定性，需要快速把东西推向市场并获得反馈；第二个循环是已有客户和正在运行的服务，需要稳定、可理解、可调试、可修复、可教学。资深开发者常常处在第二个循环里，他们的核心敌人不是速度慢，而是复杂度：特殊分支、更多表、更多组件、更多条件都会降低系统稳定性。因此好资深开发者常问“真的需要吗”“不做会怎样”“能不能先少做”。问题是，业务侧听到的是保守和阻碍，而资深开发者实际承担的是持续服务客户的责任。

原文链接：https://www.nair.sh/guides-and-opinions/communicating-your-expertise/why-senior-developers-fail-to-communicate-their-expertise

论坛讨论链接：https://news.ycombinator.com/item?id=48109460

评论把“表达专业能力”进一步解释成世界模型问题。有人认为，资深开发者的关键不是事实知识，而是多年形成的内部世界模型：知道哪些知识如何连接，能在不完整信息下更常做出正确判断。文字能传递事实，却不能直接把这种世界模型复制给别人，只能给出学习方向和经验线索。也有人说，优秀初级开发者和普通初级开发者的差别，就在于能否快速形成准确的软件“物理学”模型，而不是只背 recipe。

---

## 8. Googlebook 亮相：Gemini 要成为新笔记本规格 (Googlebook)




Googlebook 官网展示了一款面向 2026 年秋季的 Gemini-first 笔记本概念/产品页面，口号是“Intelligence is the new spec”。页面强调“最好的 Gemini 遇上最先进的笔记本”，核心功能包括 Magic Pointer，允许用户选中任何内容后立即用 Gemini 提问、比较或创作；Create My Widget，可以通过自然语言生成自定义小组件；以及和 Android 手机更紧密的协同，如 Cast My Apps 在笔记本上打开手机应用、Quick Access 像访问本地文件一样访问手机文件。页面信息较营销化，技术细节不多，但 HN 热度很高，因为它被视为 Android 桌面模式、ChromeOS、Gemini 和手机/PC 融合的一次新尝试。

原文链接：https://googlebook.google/

论坛讨论链接：https://news.ycombinator.com/item?id=48111545

HN 讨论重点不是 AI 功能本身，而是它到底是不是 Android desktop mode 加 Gemini。有人推测这会像 Chromebook 一样由不同 OEM 推出 x86 和 ARM 设备，也可能让社区做出可启动的通用镜像。大量评论吐槽顶部面板，认为 GNOME 和这类桌面复制 macOS 顶栏却没有应用菜单集成，只是在浪费垂直空间；也有人为顶栏辩护，说时钟和状态图标总要放某处。整体情绪是好奇但怀疑：Android 桌面和 Gemini 结合能否比 Chromebook 或 Samsung DeX 更好还不清楚。

---

## 9. 老桌面系统截图集：从 Visi On、SunTools 到 RISC OS 和 GEM (Screenshots of Old Desktop OSes)


Typewritten Software 的 Retrotechnology Media 页面收集了大量老桌面操作系统和应用截图，覆盖 1980 年代以来的 VisiCorp Visi On、SunTools、HP-UX、GEM、Arthur/RISC OS、Amiga、DEC VWS、SGI IRIS、FrameMaker、Ventura Publisher 等。页面不仅给出图片，还记录分辨率、运行硬件、显示模式和修正说明。例如有些截图经过 line-doubling 以恢复 CRT 上的真实纵横比；Amiga 的 HAM 多屏组合要分别解释画布、菜单和工具栏的不同逻辑屏幕；GEM 的历史则涉及 Apple 对 DRI 的“look and feel”诉讼。它不是一篇传统文章，更像一个精心注释的图形界面考古档案，让人看到早期桌面环境在硬件限制、显示模式和交互想象之间的取舍。

原文链接：http://www.typewritten.org/Media/

论坛讨论链接：https://news.ycombinator.com/item?id=48104428

评论里怀旧和吐槽并存。有人说看这些旧 Unix GUI 会以为它们只是和现代相比差，其实当年用起来也很糟；另一些人则为 CDE、NeWS、NeXTSTEP、RISC OS、AfterStep、WindowMaker、早期 GNOME 和 KDE 辩护。RISC OS 用户尤其怀念它在当时的速度、响应性和灵活性。讨论也提醒，早期图形环境常常是软件愿景超前于硬件，导致性能差、配色怪、交互不成熟；但没有现代膨胀和复杂层之后，某些系统也确实非常轻快。

---

## 10. They Live 风格广告拦截器：把广告位换成 OBEY 和 CONSUME (They Live (1988) inspired Adblocker)




这个项目是 uBlock Origin Lite 的一个趣味 fork：它不把被 cosmetic filtering 命中的广告元素直接隐藏，而是替换成白底黑字的《They Live》式标语，例如 OBEY、CONSUME、WATCH TV、SLEEP、SUBMIT、CONFORM、STAY ASLEEP、NO INDEPENDENT THOUGHT 等。由于 uBO Lite 默认 Basic 模式会在网络层直接阻断广告，页面上不会留下可替换的 DOM 元素，所以用户需要把相关站点设置为 Optimal 或 Complete，才能看到这些标语块。实现上，它修改 uBO Lite 注入 CSS 的位置，用 `::after` 覆盖层和 `data-ubol-they-live` 属性给匹配元素随机分配短语，并用 MutationObserver 处理延迟加载广告。项目明确说明只是个人 hobby fork，不是官方 uBlock 产品。

原文链接：https://github.com/davmlaw/they_live_adblocker

论坛讨论链接：https://news.ycombinator.com/item?id=48102700

HN 评论主要围绕电影和互联网文化展开。有人一开始误读成《They Live》启发了广告拦截概念，并提到它确实影响过早期 Mozilla logo。更多人是在怀旧 John Carpenter 的电影、短篇小说《Eight O'Clock in the Morning》和那段“戴上眼镜”的打斗戏。也有人把这些标语和当代广告、社交媒体、政治传播联系起来，说明这个小插件的趣味点不只是屏蔽广告，而是把广告位变成对广告本身的讽刺。

