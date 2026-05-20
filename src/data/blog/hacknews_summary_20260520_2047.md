---
title: 'CISA 承包商把 GovCloud 密钥泄露到 GitHub | Hacker News 摘要 (2026-05-20)'
author: 'hacknews'
description: ''
digest: 'KrebsOnSecurity 披露，美国 CISA 一名承包商长期维护的公开 GitHub 仓库“Private-CISA”暴露了大量敏感资料，包括 AWS GovCloud 管理员密钥、内部系统令牌、明文密码、构建和部署资料以及日志。安'
source_url: 'https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/'
pubDatetime: 2026-05-20 20:47:39.473+08:00
tags:
  - 网络安全
  - AI智能体
  - 搜索变革
  - 软件考古
---

---

## 1. CISA 承包商把 GovCloud 密钥泄露到 GitHub (CISA Admin Leaked AWS GovCloud Keys on GitHub)




KrebsOnSecurity 披露，美国 CISA 一名承包商长期维护的公开 GitHub 仓库“Private-CISA”暴露了大量敏感资料，包括 AWS GovCloud 管理员密钥、内部系统令牌、明文密码、构建和部署资料以及日志。安全公司 GitGuardian 发现后尝试联系仓库所有者未果，随后通知媒体和 CISA。研究人员称，部分 AWS 密钥可登录三个高权限 GovCloud 账号，仓库里还有内部 artifactory 等关键系统凭据，足以被攻击者用于横向移动或供应链植入。CISA 表示正在调查，暂未发现敏感数据被利用，但文章指出仓库创建于 2025 年 11 月，密钥在通报后仍有效约 48 小时。

原文链接：https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/

论坛讨论链接：https://news.ycombinator.com/item?id=48190454

HN 讨论几乎一致认为这不是普通疏忽，而是严重失职。评论者尤其震惊于仓库被提醒后无人响应、明文 `passwords.csv`、弱密码和关闭 GitHub secrets 防护等细节。也有人把问题放到 CISA 预算和人员流失背景下看，但多数人认为即使资源紧张，密码管理器、密钥轮换和最基本的 secret scanning 也不该缺位。部分评论进一步猜测这类泄露可能暴露更深层的政府 IT 外包和内部安全文化问题。

---

## 2. Simon Willison 用 5 分钟回顾近半年 LLM (The last six months in LLMs in five minutes)




Simon Willison 发布了 PyCon US 2026 闪电演讲的注释版幻灯片，试图用五分钟总结过去六个月 LLM 的主要变化。他把 2025 年 11 月称为重要拐点：顶级模型位置在 Anthropic、OpenAI 和 Google 之间多次易手，但真正改变体验的是编程智能体跨过“日常可用”的门槛。文章用他长期使用的“鹈鹕骑自行车 SVG”测试串起模型变化，也回顾了假期里开发者对新模型和 coding agent 的过度兴奋、OpenClaw 等个人 AI 助手概念的流行，以及 Gemini 3.1、Opus 4.5 等模型带来的能力跃迁。它不是一篇基准论文，而是一份开发者视角的半年 AI 生态速写。

原文链接：https://simonwillison.net/2026/May/19/5-minute-llms/

论坛讨论链接：https://news.ycombinator.com/item?id=48188183

讨论集中在 Simon 的“鹈鹕骑自行车”测试是否有意义。有人批评这类 SVG 绘图 prompt 更像营销和趣味展示，不具备科学评测价值；也有人认为它虽然不是严谨基准，但能直观暴露模型对组合、空间关系和常识假设的处理能力。另一个分歧是 LLM 是否真的更懂“人类默认假设”：评论者用“老人骑车过河”等例子说明，模型常能满足字面条件，却未必自动补上人类会默认想到的桥、道路和场景约束。

---

## 3. Google 发布 Gemini 3.5 Flash，主打智能体和代码 (Gemini 3.5 Flash)


Google DeepMind 发布 Gemini 3.5 系列，首发的是 3.5 Flash，并称其面向复杂、长期运行的智能体工作流。官方表示 3.5 Flash 在编码和 agentic benchmark 上超过 Gemini 3.1 Pro，例如 Terminal-Bench 2.1、GDPval-AA、MCP Atlas 和多模态推理指标，同时保持 Flash 系列的高速度，输出 token 速度约为其他前沿模型的四倍。它已面向 Gemini App、Google Search 的 AI Mode、Antigravity、Gemini API、Android Studio 和企业平台开放，3.5 Pro 计划下月推出。Google 还展示了它在多智能体协作、代码迁移、文档处理、财务流程和交互式 UI 生成中的使用场景。

原文链接：https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/

论坛讨论链接：https://news.ycombinator.com/item?id=48196570

HN 上最受关注的评论没有直接复述发布稿，而是尝试根据 TPU 8i 的显存、带宽、推理速度和已知服务约束反推模型规模。评论者估计 3.5 Flash 可能约有 250B 到 300B 总参数、10B 到 16B 活跃参数，且大量使用 FP4/FP8 等量化方案；也有人补充 TurboQuant 等技术可能让上限更高。讨论体现出社区对官方不披露模型细节的不满，也说明开发者越来越关注模型服务成本、延迟和可并发性，而不只是榜单分数。

---

## 4. Google 搜索框迎来 25 年来最大 AI 改版 (Google changes its search box)


Google 在 I/O 上宣布重塑搜索体验，把 Gemini 3.5 Flash 作为 AI Mode 的默认模型，并推出新的智能搜索框。这个搜索框不再只是关键词入口，而是可以动态展开、接收文本、图片、文件、视频和 Chrome 标签页等多模态输入，并用 AI 建议帮助用户组织问题。Google 还引入 Search agents：信息智能体可 24 小时监控网页、新闻、社交和实时数据，在条件满足时推送综合更新；订阅用户将率先使用。搜索还将扩展到预订、本地服务、购物和生成式 UI，可根据问题现场生成图表、模拟器、追踪面板甚至小型应用。

原文链接：https://blog.google/products-and-platforms/products/search/search-io-2026/

论坛讨论链接：https://news.ycombinator.com/item?id=48197370

讨论焦点是“Google Zero”：如果 Google 直接抓取网站内容并在搜索页生成答案，网站为什么还要允许 Googlebot 爬取？站长和开发者担心，AI 摘要会进一步截断流量，把内容生产者变成无偿数据供应商。有人把这比作大型零售商压榨供应商：不合作就被替代，合作也会损失议价权。社区并不否认新搜索体验对用户方便，但普遍担心 Web 的激励结构被改写。

---

## 5. Cursor 推出 Composer 2.5，继续押注自训编程模型 (Cursor Introduces Composer 2.5)





Cursor 发布 Composer 2.5，称其相比 Composer 2 在智能、长任务执行、复杂指令遵循和协作行为上都有明显提升。它仍基于 Moonshot 的 Kimi K2.5 开源检查点，但 Cursor 通过更大规模训练、更复杂 RL 环境和新的学习方法做了强化。文章重点介绍了“基于文本反馈的定向 RL”：在长 rollout 中，当模型出现错误工具调用、解释混乱或风格不当时，训练系统会在局部上下文插入改进提示，把对应分布作为教师信号，让学生模型更精确地修正局部行为。Cursor 还将合成任务数量提升到 Composer 2 的 25 倍，并披露了奖励作弊、缓存逆向和字节码反编译等训练中发现的问题。

原文链接：https://cursor.com/blog/composer-2-5

论坛讨论链接：https://news.ycombinator.com/item?id=48182516

HN 讨论主要围绕模型来源和 Cursor 的自训路线。有人赞赏 Cursor 明确给 Moonshot/Kimi 署名，并期待 Kimi 系模型继续追近闭源前沿模型；也有人认为如果模型来自蒸馏或强合成数据，超越教师并不容易。另一个话题是 Cursor 与 SpaceXAI/xAI 基础设施合作训练更大模型是否现实：支持者认为 Cursor 拥有稀缺的真实编码数据，反对者则质疑其是否有足够的前沿预训练能力。

---

## 6. Apple 用 Apple Intelligence 强化无障碍功能 (Apple unveils new accessibility features)





Apple 预告了一组将在今年晚些时候推出的无障碍更新，把 Apple Intelligence 接入 VoiceOver、Magnifier、Voice Control 和 Accessibility Reader 等功能。对盲人和低视力用户，VoiceOver 的 Image Explorer 可提供更详细的图像、账单、记录和屏幕内容描述，用户还能通过 iPhone Action Button 对摄像头画面自然语言提问并追问。Voice Control 将支持“说你看到的”式自然语言导航，不必记住精确按钮名称；Accessibility Reader 可处理多栏论文、图片和表格，并提供摘要和翻译。Apple 还发布了设备端生成字幕、Vision Pro 眼动控制兼容电动轮椅，以及 Hikawa 自适应 MagSafe 握把的新配色。

原文链接：https://www.apple.com/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/

论坛讨论链接：https://news.ycombinator.com/item?id=48192224

评论区从无障碍功能延伸到 Apple 的技术试探方式。有人认为 Apple 常把新技术先放进看似小众的场景公开测试，例如 Touch Bar、RealityKit 或早期专用芯片，因而把 agentic AI 放到无障碍里也很符合 Apple 风格。反对者认为这是过度解读，很多例子只是商业化失败或寻找问题的方案。讨论最终落到 Apple 是否真有长期路线图：一方强调 Cook 时代的谨慎布局，另一方提醒不要把每个失败功能都事后解释成战略伏笔。

---

## 7. Karpathy 加入 Anthropic，回到前沿模型研发 (I’ve joined Anthropic)


Andrej Karpathy 在 X 上宣布加入 Anthropic，称未来几年将是前沿 LLM 发展的关键时期，他很高兴回到研发工作，同时仍会继续关注教育方向。讨论中补充的信息显示，他将加入 Anthropic 的 pre-training 团队，负责探索如何用 Claude 加速预训练研究本身。这个方向与他此前公开的 AutoResearch 思路相关：构建评测和反馈闭环，让模型在可验证指标下自动提出、尝试和积累改进方案。虽然原帖很短，但事件本身具有信号意义：曾在 OpenAI、Tesla 和教育项目中积累影响力的 Karpathy，重新进入一家前沿模型公司的核心训练团队。

原文链接：https://twitter.com/karpathy/status/2056753169888334312

论坛讨论链接：https://news.ycombinator.com/item?id=48194352

HN 讨论把焦点放在 Karpathy 将做什么，而不只是跳槽新闻。有人把“用 Claude 加速预训练研究”戏称为在做奇点；也有人质疑 AutoResearch 目前看起来更像低效的超参数优化，而不是产生真正新思路。支持者则认为，只要有可靠评测 harness 和可积累的实验数据库，LLM 在测试时扩展中确实可能找到非平凡改进。评论普遍认为，Karpathy 在组织内部带团队做长期研发，可能比个人项目和公开观点更有影响力。

---

## 8. 有人做了一个可运行 570 多种系统的虚拟 OS 博物馆 (I’ve built a virtual museum with nearly every operating system you can think of)




Virtual OS Museum 是一个把操作系统和独立应用打包进可运行虚拟机的保存项目，支持 QEMU、VirtualBox 和 UTM。作者提供了与模拟器无关的启动器，预装并配置了大量系统，还带有快照功能，方便用户把损坏的安装恢复到可工作状态。项目覆盖从 1948 年 Manchester Baby、CTSS、早期 Unix，到 Xerox Star、MVS、VM/370、Multics、SunOS、IRIX、NeXTSTEP、Plan 9、DOS、OS/2、BeOS、Windows 早期版本、Classic Mac OS、PalmOS、Symbian、Newton OS、QNX 等系统。页面称目前包含 1700 多个安装、250 多个平台、570 多种不同 OS，目标是让普通电脑用户无需折腾模拟器也能亲手体验计算史。

原文链接：https://virtualosmuseum.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48195009

讨论区对策展工作普遍赞赏，但也有老用户指出，某些展示版本选择了“最后、最完整”的版本，未必能代表历史上最有特色的体验。例如 Apollo DomainOS、SunOS/OpenWindows 等系统在被后续桌面环境覆盖后，反而容易失去原始设计价值。还有人提到 Pick OS 等缺失项，说明这个项目不仅是怀旧合集，也会激发社区用自己的职业经历补全软件史。评论整体很技术考古，关注点在可运行性、版本选择和保存语境。

---

## 9. 明尼苏达成美国首个禁止预测市场的州 (Minnesota becomes first state to ban prediction markets)


NPR 报道，明尼苏达州州长 Tim Walz 签署美国首个全面禁止预测市场的法律，目标包括 Kalshi 和 Polymarket 等平台。新法把面向消费者押注未来结果的系统定义为预测市场，禁止运营和广告推广，甚至覆盖可帮助规避地域限制的 VPN 等支持服务；违反者可能面临重罪指控，法律计划 8 月生效。特朗普政府下的 CFTC 已提起诉讼，主张预测市场属于联邦监管范围，州政府无权将合法运营者变成罪犯。文章指出，农业等行业长期使用天气和作物相关合约进行风险对冲，修订版也为天气合约留下例外；同时已有十多个州提出类似限制，围绕州赌博监管与联邦商品监管的冲突还会继续升级。

原文链接：https://www.npr.org/2026/05/19/nx-s1-5821265/minnesota-ban-prediction-markets

论坛讨论链接：https://news.ycombinator.com/item?id=48197980

HN 讨论的关键分歧是预测市场到底是金融合约还是赌博。有人指出明尼苏达本来就全面禁止体育博彩，因此比允许体育博彩的州更容易为禁令辩护；也有人认为法律经常区分实现细节，允许某些赌博并不意味着必须允许任何平台开赌场。另一些评论强调，押注体育比赛和押注战争、选举、灾难并不具备同样的伦理风险。整体来看，社区并不统一支持禁令，但普遍承认预测市场正在挑战现有监管边界。

---

## 10. 一个草莓的高斯泼溅模型火了 (Show HN: Gaussian Splat of a Strawberry)


这个 Show HN 项目展示了一个草莓的 Gaussian Splat 3D 场景。作者从 90 个视角拍摄，每个视角使用 88 张焦点堆叠照片，设备包括 Nikon Z8 全画幅相机、Laowa 180mm 微距镜头、LED 灯和蓝幕，最终得到约 22.94 MB 的场景文件。训练使用 slang-splat 完成，模型可在 CC BY 许可下下载，作者也提供了 COLMAP 数据集。项目本身很小，但它展示了高斯泼溅从研究演示走向普通浏览器互动体验的状态：用户可以直接在网页中围绕草莓移动视角，观察细节、遮挡和渲染伪影。

原文链接：https://superspl.at/scene/84df8849

论坛讨论链接：https://news.ycombinator.com/item?id=48191602

讨论区的气氛偏轻松，PlayCanvas 作者调侃自己 2011 年做游戏引擎，没想到 2026 年用来驱动草莓。很多人惊讶于它在手机上也能流畅运行，也有人从其他 SuperSplat 场景一路玩下去。技术讨论解释了 Gaussian Splatting 并不是传统三角网格，而是用大量半透明“斑点”建模光场，因此在视角外推、碰撞、动画和编辑方面仍有限制。评论者认为，谁能把 splat 与可动画、可编辑、可响应的动态 3D 桥接起来，可能会打开新的设计空间。

