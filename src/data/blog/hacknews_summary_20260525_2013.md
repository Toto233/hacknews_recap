---
title: '微软内部账号被骗子用来发垃圾链接 | Hacker News 摘要 (2026-05-25)'
author: 'hacknews'
description: ''
digest: 'TechCrunch 报道称，骗子数月来一直在滥用微软内部通知邮箱 msonlineservicesteam@microsoftonline.com 发送垃圾和钓鱼链接。这个地址本来用于发送账号提醒、双因素验证码等正式通知，因此邮件天然带有'
source_url: 'https://techcrunch.com/2026/05/21/scammers-are-abusing-an-internal-microsoft-account-to-send-spam/'
pubDatetime: 2026-05-25 20:13:25.581+08:00
tags:
  - 安全风险
  - AI基础设施
  - 开发工具
  - 复古计算
---

---

## 1. 微软内部账号被骗子用来发垃圾链接 (Scammers are abusing an internal Microsoft account to send spam links)



TechCrunch 报道称，骗子数月来一直在滥用微软内部通知邮箱 msonlineservicesteam@microsoftonline.com 发送垃圾和钓鱼链接。这个地址本来用于发送账号提醒、双因素验证码等正式通知，因此邮件天然带有较高可信度。攻击者似乎可以创建新的微软账号，并借由某种可自定义通知内容的漏洞，把官方通知系统变成垃圾邮件通道。邮件主题伪装成欺诈交易提醒或私密消息通知，正文则指向诈骗网站。Spamhaus 也确认观察到该账号被滥用数月，并已通知微软。微软回应称正在调查、加强检测和拦截，并移除违反条款的账号。事件的关键不在单封垃圾邮件，而在于攻击者借用了大型平台的合法发送基础设施，让用户很难只靠发件域名判断真伪。

原文链接：https://techcrunch.com/2026/05/21/scammers-are-abusing-an-internal-microsoft-account-to-send-spam/

论坛讨论链接：https://news.ycombinator.com/item?id=48253186

HN 讨论集中在“大公司自己把域名和通知系统搞得太复杂”这个问题上。有人指出，微软的 microsoftonline.com 是否可信，本身就很难让普通用户判断；公司一边要求用户检查域名防诈骗，一边又不能公开、清晰维护所有官方发信域名。讨论还延伸到银行和运营商的反诈骗流程：有用户称监管要求银行统一号码后诈骗电话明显减少，也有人吐槽客服仍会索要短信验证码，等于训练用户违背安全常识。总体看，大家认为平台级通知系统必须限制自定义内容，否则官方通道会反过来成为钓鱼放大器。

---

## 2. HBM 已占 AI 芯片成本近三分之二 (Memory has grown to nearly two-thirds of AI chip component costs)


Epoch AI 的数据分析显示，在英伟达、AMD、Google 和 Amazon 设计的 AI 芯片中，高带宽内存 HBM 在总组件支出中的占比从 2024 年第一季度的 52% 上升到 2025 年第四季度的 63%。同期逻辑裸片占比大致维持在 13% 左右，先进封装从 19% 降至 15%，辅助组件从 15% 降至约 9%。按绝对金额看，四家公司在 HBM 上的支出从 2024 年约 120 亿美元增长到 2025 年约 320 亿美元，是增长最快的成本项。文章认为，2026 年 HBM 占比可能继续上升，因为内存供应紧张和价格上涨已经反映在超大规模云厂商的资本开支指引中。这意味着 AI 算力成本越来越受内存供应链约束，而不只是 GPU 逻辑芯片本身。

原文链接：https://epoch.ai/data-insights/ai-chip-component-cost-shares

论坛讨论链接：https://news.ycombinator.com/item?id=48258684

讨论区把这组数据解读为 AI 成本下降的一条现实路径：如果 DRAM/HBM 供应跟上需求，即使没有模型或芯片架构突破，训练和推理硬件成本也可能明显回落。但也有人认为内存厂商不会激进扩产，因为该行业长期依赖供给偏紧维持价格，过度扩产会引发下一轮过剩。随后话题转向中国可能通过政策和产业投入增加 DRAM 供给，打破当前供应格局。支持者认为更多竞争有利于降低 AI 基础设施成本，怀疑者则提醒 HBM 与普通 DRAM、先进封装和良率之间仍有较高门槛。

---

## 3. AMD Vivado 免费版将取消 Linux 支持引发反弹 (Why is Vivado 2026.1 dropping Linux support for free tier?)


AMD/Xilinx 社区论坛中，用户质疑 Vivado 2026.1 为什么在 Basic 免费层级中取消 Linux 支持，而 Windows 仍可使用。发帖者认为 Linux 支持仍存在于更高付费层级，因此从技术维护成本看，很难解释为什么免费层级必须移除 Linux。AMD 论坛代表回应称，Basic 层级预期只服务简单入门需求，更高级和生产型工作流应迁移到付费 Core 及以上层级；不愿升级的用户可以继续使用 2026.1 之前的 Vivado ML Standard Edition，2025.2 也可以继续使用且不需要 Webpack 许可证。用户的核心不满在于，这不是单纯的功能分层，而是按操作系统区分免费资格，会直接影响学生、业余 FPGA 开发者和依赖 Linux 工作流的小团队。

原文链接：https://adaptivesupport.amd.com/s/question/0D5Pd00001YQLdMKAX/why-is-vivado-20261-dropping-linux-support-for-free-tier-?language=en_US

论坛讨论链接：https://news.ycombinator.com/item?id=48254309

HN 用户普遍认为 AMD 的官方回应没有回答真正问题：为什么 Basic 层级在 Windows 上仍支持，而 Linux 被排除。很多评论认为这会伤害生态，因为 FPGA 学习者、开源硬件爱好者和许多嵌入式开发者本来就大量使用 Linux。也有人把这看作供应商锁定的典型案例：硬件已经购买，工具链却可以通过许可层级改变开发成本。讨论中也有人为客服设定边界辩护，认为论坛代表不应承受辱骂；但主流观点仍是，限制 Linux 免费使用不太可能显著增加收入，却会降低 AMD/Xilinx 平台的长期吸引力。

---

## 4. DeepSeek 原生编程 Agent 主打高缓存低成本 (DeepSeek reasonix, DeepSeek native coding agent with high caching and low cost)


Reasonix 是一个面向终端的 DeepSeek 原生编程 Agent，直接对接 api.deepseek.com，并围绕 DeepSeek 的 prefix-cache 机制设计运行循环。项目强调 append-only 会话结构：消息、工具结果和执行记录只追加不重排，避免时间戳、marker 或历史压缩破坏字节级前缀稳定，从而在长会话中保持 90% 以上缓存命中，并把命中缓存的输入 token 成本降到原价约五分之一。它提供 TypeScript + Ink 的 TUI、默认 V4-Flash 和可切换 V4-Pro、MCP 接入、沙箱工具、/plan 只读审计门、Markdown skills、事件回放和成本统计等功能。定位不是通用 IDE 插件，而是一个专门利用 DeepSeek 定价和缓存特性的终端工作台。

原文链接：https://esengine.github.io/DeepSeek-Reasonix/

论坛讨论链接：https://news.ycombinator.com/item?id=48256953

讨论区对“是否真的需要 DeepSeek 原生 Agent”存在分歧。有人说自己用一个简单桥接层把 DeepSeek V4 Pro 接到 Codex，也能看到大量缓存命中，因此怀疑 Reasonix 的差异化是否足够强。支持者引用项目文档回应说，许多 Agent 循环会重排消息、插入新时间戳或改写历史，导致 prefix-cache 命中率很低，而 Reasonix 的价值正在于把整个循环设计成缓存友好。也有人提到某些工具会故意破坏非原厂模型缓存，进一步凸显开放 Agent 框架中的经济激励问题。总体讨论更关注工程实现是否可验证，而不只是网页上的成本数字。

---

## 5. 微软开源迄今发现最早的 DOS 源码 (Microsoft open-sources “the earliest DOS source code discovered to date”)




微软开源了“迄今发现最早的 DOS 源码”以及相关文档和开发笔记。这批代码早于 MS-DOS 品牌，包含 86-DOS 1.00 kernel、若干 PC-DOS 1.00 kernel 开发快照，以及 CHKDSK 等早期工具。86-DOS 最初由 Tim Paterson 为 Seattle Computer Products 的 8086 计算机套件编写，微软在为 IBM PC 提供操作系统时先授权、后买断该系统，并以 PC-DOS 授权给 IBM，同时保留向其他厂商销售 MS-DOS 的权利。此次发布的特殊之处在于，代码原本并非数字保存，而是由 DOS Disassembly Group 根据 Paterson 提供的纸质打印件扫描和转录。由于老旧打印质量不佳，现代 OCR 难以直接识别，整个过程更接近计算机史文献整理。

原文链接：https://arstechnica.com/gadgets/2026/04/microsoft-open-sources-the-earliest-dos-source-code-discovered-to-date/

论坛讨论链接：https://news.ycombinator.com/item?id=48253386

HN 评论对微软这次开源多持正面态度，认为这类早期源码对理解 PC 生态形成很有价值。有人提到微软早期其实长期是开发工具公司，DOS 只是拿下 IBM 合同的关键入口，而同时开源的 BASIC 源码同样重要。许多评论围绕“49 年前的 commit”展开怀旧和考据，也有人分享自己在 Commodore 64、BASIC 和早期家用电脑上的经历。讨论的重点不是代码能否实际复用，而是这些材料如何把个人记忆、商业史和软件考古连接起来。

---

## 6. 16 字节 x86 程序同时画出分形并发声 (Wake up! 16b)



“Wake up! 16b”是一段只有 16 字节的 x86 real-mode DOS 汇编程序，发布于 2026 年 5 月的 Outline Demoparty。作者把它描述为“算法密度”的实验：程序先通过 BIOS 中断进入文本模式，再把数据段指向 0xb800 显存；随后在循环中读取、移动、异或显存字节，并把结果输出到 PC speaker。由于屏幕清空后显存并非真正全零，而是由空格字符和颜色属性组成，这段极短代码会在内存中形成类似 Sierpinski 三角形的结构，同时把同一数学模式转成声音。文章详细解释了为什么 XOR、步长、段地址回绕和 8 位寄存器共同产生这种效果，也展示了 tiny intro 圈子如何把极端限制转化为数学、声音和视觉的共同作品。

原文链接：https://hellmood.111mb.de/wake_up_16b_writeup.html

论坛讨论链接：https://news.ycombinator.com/item?id=48253060

讨论区的反应主要是惊叹和怀旧。有人表示一开始误以为“16b”是 16 billion 参数模型，结果发现是 16 byte demo，反而更酷。许多评论把它和 Sierpinski 三角形、递归 PowerPoint、早期 demoscene 作品联系起来，认为这种作品展示了编程作为艺术的一面。作者也在评论中补充说，另一个 16 字节作品 Rainbow Surf 重新激活了他的兴趣，让 size coding 社区意识到 cellular automaton 的技巧并未被完全挖尽。也有人用 Electron 300MB 下载包开玩笑，强化了 16 字节极限美学和现代软件膨胀之间的对比。

---

## 7. 为了手绘一张折线图，他花了 50 小时 (I spent 50 hours drawing a line graph)


艺术家 Doug MacDowell 写了一篇关于手工绘制数据可视化的长文。他用尺子、铅笔、墨水、绘图板、圆模板和字模等传统工具，花 50 小时完成了一张本可由软件在 20 分钟内生成的折线图。文章并不是反技术，而是借此回到计算机普及前专业制图的流程：先固定纸张和 T 型尺，画边距和网格，逐步建立坐标、刻度、线条和文字。作者列出 Tufte、W.E.B. Du Bois 数据肖像、Willard Brinton 1914 年的《Graphic Methods for Presenting Facts》等参考资料，强调手绘数据图能让人重新理解线条、比例、误差和工具触感。它最终讨论的是数据可视化与艺术之间的关系：慢下来亲手画图，会让制图从“输出结果”变成一种观察和制作过程。

原文链接：https://www.dougmacdowell.com/50-hours-to-draw-some-lines.html

论坛讨论链接：https://news.ycombinator.com/item?id=48223997

HN 评论区延续了手工制图和工具经验的主题。有做家具的用户分享，自己虽然给远程客户用数字工具设计，但工坊图纸仍手绘，并推荐用硬铅做浅色辅助线、用 2mm 自动铅和 erasing shield 控制修改范围。另一位用户提醒，过硬铅芯可能因为用力过大压伤纸面，反而更难擦除，自己更偏好 4B 这类软铅。讨论没有争论“手工是否比软件好”，而是集中在工具选择、纸张、铅芯、描图纸和制图手感上，说明这篇文章击中的不是效率，而是工艺和注意力。

---

## 8. Greg Brockman 复盘 OpenAI 最危险的 72 小时 (Greg Brockman interview [video])




Knowledge Project 对 OpenAI 联合创始人兼总裁 Greg Brockman 做了一次长访谈，主题包括 OpenAI 的技术路线、AGI 竞赛、组织结构变化，以及 Sam Altman 被董事会解雇后的 72 小时。页面摘要称，Brockman 回顾了 OpenAI 早期 Napa offsite 如何形成此后十年的三步技术计划，也解释了为什么 OpenAI 最终不得不放弃纯非营利结构。访谈重点之一是 2023 年危机：他如何接到董事会电话、为什么当天辞职、第二天在 Sam 家里设计“Phoenix”备用公司，以及 Ilya Sutskever 的推文如何改变局面。后半部分转向未来：OpenAI 代码中有多少由 AI 编写、为什么 ChatGPT 不再展示推理过程、算力受限时 AGI 访问权如何分配，以及 AI 对工作的影响。

原文链接：https://fs.blog/knowledge-project-podcast/greg-brockman/

论坛讨论链接：https://news.ycombinator.com/item?id=48255593

HN 评论对访谈质量并不完全满意。有人认为，举“让个人 AI 帮你订演出票”作为 AGI 应用例子很说明问题，也有人抱怨主持人没有真正追问 Ilya Sutskever 当时为何先参与罢免 Sam、随后又签署支持 Sam 的联名信。部分评论转而讨论 Ronan Farrow 关于 OpenAI 内斗的报道，认为那里对董事会动机解释得更充分。还有人厌倦科技媒体把公司权斗当成“真人秀”反复消费，认为这类内幕报道逐渐取代了更技术性的计算机内容。总体看，讨论重点不在产品发布，而在 OpenAI 治理危机是否仍有未解问题。

---

## 9. 一个程序员回忆童年里的纸笔编程 (Childhood Computing)


Susam Pal 回忆了自己 1992 年在印度小工业镇接触电脑的经历。八岁时，他转入一所有计算机实验室的学校，每个月只有大约两小时上机时间。实验室里的机器是工厂淘汰的 IBM PC 兼容机，没有硬盘，只有几百 KB 内存；每次都要先用 5.25 英寸软盘启动 MS-DOS，再插入另一张软盘运行 LOGO.COM。由于无法保存程序，他把代码写在纸质笔记本里，在家用方格纸“运行”和调试 Logo 程序，再等到上机时输入验证。他还回忆了 Moon Bugs、Space Invaders、Bricks、Grand Prix Circuit 和 Digger 等游戏如何激发自己写程序的愿望。文章的核心不是怀旧硬件本身，而是说明稀缺的计算资源如何让学习变得具体、缓慢、可触摸。

原文链接：https://susam.net/childhood-computing.html

论坛讨论链接：https://news.ycombinator.com/item?id=48256597

讨论区充满早期家用电脑记忆。有人从 ZX Spectrum、C64、QBASIC、Turbo Pascal 一路学起，认为早期 BASIC 环境虽然能力有限，但抽象少、反馈直接，比今天面对 Python、JS、云服务和大量框架更容易理解计算机。另一位 C64 用户回忆开机后电路板发热的味道、磁带机磁头没调准导致游戏读不出来，反而促使自己从说明书和图书馆书籍里抄程序，最终对编程本身比玩游戏更着迷。评论共识是，限制和不便有时会迫使孩子理解机器，而不是只消费现成应用。

---

## 10. 《Mastering Dyalog APL》在线新版开放 (Mastering Dyalog APL)


《Mastering Dyalog APL》是学习 Dyalog APL 的经典书籍之一，第一版出版于 2009 年。由于编程语言和 Dyalog APL 本身持续演进，原书内容逐渐过时，因此社区正在基于 Jupyter Notebooks 重做一个更现代、更互动的版本，并提供静态在线阅读页面。当前版本仍是进行中状态，缺少部分章节和小节，内容也可能继续大幅修改；读者可以通过 GitHub issue 或邮件反馈错误和建议。新版由 Rodrigo Girão Serrão 牵头重写，尽可能保留第一版的文字和示例，同时更新解释、示例和新增内容，以覆盖 2009 年 Dyalog APL 12.0 之后才出现的功能。对 APL 学习者而言，这不是简单电子书搬运，而是一次把旧教材重新变成可执行、可实验学习材料的工程。

原文链接：https://mastering.dyalog.com/README.html

论坛讨论链接：https://news.ycombinator.com/item?id=48256475

HN 讨论围绕 APL 的定位、效率和许可展开。有人觉得 Dyalog APL 作为小众且接近 esolang 气质的语言，却并非完全开源、商用门槛也不低，这点很奇怪；他还把 APL 质数例子翻译成 NumPy，认为很多 APL 写法像是在追求谜题式的极简表达。支持者则提醒，APL 的性能不能只看最短写法，解释器在适合的表达上可以映射到高效实现，并给出相关性能资料。争论的实质是：APL 到底是帮助人清晰思考数组问题，还是鼓励为了 terse notation 而解谜。

