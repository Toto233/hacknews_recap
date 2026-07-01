---
title: "Claude Code 被指用隐藏标记识别请求来源 | Hacker News 摘要 (2026-07-01)"
author: "hacknews"
description: ""
digest: "作者逆向检查 Claude Code 2.1.196 后发现，客户端会根据 `ANTHROPIC_BASE_URL`、API 主机名和系统时区，改变系统提示词中日期句子的细节：例如把 `Today's` 的撇号替换成外观近似的 Unicod"
source_url: "https://thereallo.dev/blog/claude-code-prompt-steganography"
pubDatetime: 2026-07-01 20:14:45.793+08:00
tags:
  - "AI模型与工具"
  - "开发者信任"
  - "开放硬件"
  - "数字公共基础设施"
---

---

## 1. Claude Code 被指用隐藏标记识别请求来源 (Claude Code is steganographically marking requests)



作者逆向检查 Claude Code 2.1.196 后发现，客户端会根据 `ANTHROPIC_BASE_URL`、API 主机名和系统时区，改变系统提示词中日期句子的细节：例如把 `Today's` 的撇号替换成外观近似的 Unicode 字符，或在特定时区下把日期分隔符从横线改成斜线。文章认为这是一种把环境分类信息藏进普通文本的 prompt steganography。作者推测 Anthropic 可能想识别 API 网关、代理、转售或蒸馏攻击管线，但批评点在于这种行为没有用显式 telemetry 字段或公开说明，而是通过混淆域名列表和不可见式标记完成。对一个拥有文件系统、Shell、Git 和浏览器能力的本地开发工具来说，这会削弱开发者对客户端行为的信任。

原文链接：https://thereallo.dev/blog/claude-code-prompt-steganography

论坛讨论链接：https://news.ycombinator.com/item?id=48734373

HN 讨论集中在“是否严重”和“是否合理”之间分裂。批评者认为，供应商在用户机器上运行的工具不应隐蔽地标记请求来源，即使业务上要防转售或滥用，也应公开披露；有人进一步担心这说明客户端还有其他未说明的数据采集。另一部分评论则认为，如果目标是识别恶意代理，公开字段很容易被绕过，隐蔽标记有现实动机。讨论也延伸到 Anthropic 服务条款、模型研究限制和供应商对用户行为的控制边界。整体情绪不是单纯技术漏洞，而是对高权限 AI 开发工具透明度的信任争议。

---

## 2. Anthropic 发布更偏 Agent 工作流的 Claude Sonnet 5 (Claude Sonnet 5)





Anthropic 发布 Claude Sonnet 5，定位为目前最具 agentic 能力的 Sonnet 系列模型。官方称它在规划、工具使用、浏览器/终端操作、编码和知识工作上明显强于 Sonnet 4.6，部分场景接近 Opus 4.8，但价格更低。Sonnet 5 成为 Free 和 Pro 的默认模型，也进入 Max、Team、Enterprise、Claude Code 和 Claude API；API 在 2026 年 8 月 31 日前有启动价，之后恢复更高的常规定价。文章还强调安全评测：相比 Sonnet 4.6，不良行为率更低，更适合 agentic 场景；同时其危险网络能力低于 Opus 级模型。官方用合作伙伴反馈展示它能更完整地执行多步骤工程、业务自动化、法律研究和数据分析任务。

原文链接：https://www.anthropic.com/news/claude-sonnet-5

论坛讨论链接：https://news.ycombinator.com/item?id=48736605

HN 评论主要质疑它和 Opus 的定位差异。有人认为，如果高 effort 的 Sonnet 5 单任务成本接近甚至超过 Opus，为什么不直接用低 effort Opus；也有人希望有实时成本估算工具，能比较不同模型和 effort 设置的输入输出成本。另一个讨论点是模型是否越来越倾向于“过度执行”：有用户抱怨 Opus 会把简单任务复杂化，怀疑模型优化目标更多是提高 token 消耗而不是解决问题。也有评论把 Anthropic 的 tokenizer、订阅限制和收入模式联系起来，认为价格/能力曲线比官方图表更需要实测。

---

## 3. Claude Science beta 面向科研数据分析与可复现工作流 (Claude Science)





Claude Science beta 是 Anthropic 面向科研工作流的新应用，定位为“严谨科学的研究伙伴”。它不仅是聊天界面，而是把数据分析、数据库搜索、代码执行、图表、表格、Notebook、Markdown/LaTeX 写作和科学对象渲染整合在一起。官方强调每个 artifact 都带有生成历史、代码、环境和对话记录，便于复现、修改和答辩；系统还能查看蛋白质、结构、基因组轨道、化学结构和 PDF，并通过后台 reviewer 检查引用、数字来源和图表是否与代码一致。它还可以管理本地、远程 Linux、HPC 集群或 Modal 上的计算环境，提交批处理任务，并保持 Python/R kernel 状态，减少科研分析中的环境和数据管线摩擦。

原文链接：https://claude.com/product/claude-science

论坛讨论链接：https://news.ycombinator.com/item?id=48735770

HN 中有参与相关工具集成的评论者说明，这类产品的价值不只是画图或写论文，而是把研究数据库、计算工具、机构集群和领域 API 接到 LLM 能够操作的工作流里。对计算生物学等领域，很多数据库仍停留在 FTP 或特殊工具链，集成成本很高，因此为 LLM 建好 API 本身就有长期价值。但也有人指出，把 AI 直接连到数据源会带来机构政策、法律、数据访问和存储要求，尤其是 NIH 等数据仓库和受限研究数据，可能需要机构与 AI 供应商之间的法律协议。讨论整体认可方向，但认为科研场景落地会强烈依赖合规和数据边界。

---

## 4. LongCat-2.0 开源：1.6T MoE 与国产算力训练实践 (LongCat-2.0, a large-scale MoE model with 1.6T total and 48B Active)


LongCat 团队发布并开源 LongCat-2.0，一个总参数 1.6 万亿、每 token 激活约 480 亿参数的 MoE 模型。文章强调它的训练和部署全部使用国产算力集群，预训练在 5 万余片国产芯片上运行月余、消耗超过 35 万亿 token，并保持无回滚、无不可恢复 loss 突刺。架构上，LongCat-2.0 继承 LongCat-Flash，并引入 LongCat 稀疏注意力（LSA）和 N-gram Embedding：前者用流感知索引、跨层索引、层级化索引优化长上下文效率，后者在 MoE 之外扩展稀疏参数，提高局部上下文表达和大 batch 解码效率。文章还介绍了国产算力上的确定性算子、6D 并行、超节点、显存优化、Muon 优化器、百万上下文训练和 prefill/decode 分离部署。

原文链接：https://longcat.chat/blog/longcat-2.0/

论坛讨论链接：https://news.ycombinator.com/item?id=48727116

讨论集中在模型指标、国产算力训练可信度和实际可用性。评论者关心 1.6T 总参、48B 激活参数与现有闭源模型相比的成本和延迟，也有人关注它深度适配 Claude Code、OpenClaw、Hermes 等 harness 后，对代码 agent 和自动化工作流意味着什么。另一类评论更关注评测表：Terminal-Bench、SWE-bench、FORTE、BrowseComp 等指标是否可复现，外部公开数据和内部评测混用会不会影响比较。由于正文是人工补齐内容，发布时需要保留 `human_supplied` 来源标记。

---

## 5. 零硬件经验作者 2.5 周做出容错八旋翼无人机 (Building a custom octocopter from scratch with no prior hardware experience)





作者记录了从零开始设计和制造一台自定义八旋翼无人机的过程：没有硬件经验，使用 Fusion 360 设计结构，用 G10 玻纤和碳纤维 CNC 加工并手工组装，目标是训练一个强化学习控制器，使无人机在单个、两个甚至部分三个电机失效时仍能维持飞行。项目日志显示，作者先在仿真中训练小型 MLP 策略，经历了探索率、课程学习、残差动作、训练进程冲突等一系列失败，最后发现关键问题是动作被裁剪卡住以及“存活”没有奖励。修正后，策略在约 950 万步时能处理悬停、单电机和双电机故障，并对未训练过的三电机失效有一定泛化。下一步是把仿真策略迁移到真实硬件。

原文链接：https://karolina.mgdubiel.com/drone/

论坛讨论链接：https://news.ycombinator.com/item?id=48704289

评论区整体很欣赏这个项目的动手能力和透明日志，作者本人也出现回应，表示没想到项目会被发到 HN，并欢迎提问。专业背景用户提到自己曾研究 NASA 相关的容错八旋翼控制，并分享无人机物理和论文资料。也有人质疑“没有 CAD 经验一天学会 Fusion 360 设计零件”是否可信，随后被其他评论反驳，认为有高质量教程、导师指导和明确目标时完全可能。讨论还延伸到八旋翼控制、旋翼布局、强化学习控制器和真实硬件从仿真迁移的难点。

---

## 6. Google DeepMind 推出低延迟低成本图像模型 Nano Banana 2 Lite (Nano Banana 2 Lite)


Google DeepMind 页面介绍 Gemini 3.1 Flash-Lite Image，也被称为 Nano Banana 2 Lite，定位为最快、最省成本的 Gemini 图像生成与编辑模型。它主打低延迟和规模化成本，适合快速探索、批量生成和高频迭代，同时声称保留 Nano Banana 系列在角色一致性、精确编辑和真实世界视觉任务中的控制能力。页面展示它属于 Google DeepMind 新一代模型体系的一部分，与 Gemini、Veo、Imagen、Lyria、Genie、Gemini Robotics、Gemma 等模型同列。由于采集页面包含大量导航文本，核心信息集中在“高速、低成本、不明显牺牲质量”的产品定位。

原文链接：https://deepmind.google/models/gemini-image/flash-lite/

论坛讨论链接：https://news.ycombinator.com/item?id=48735444

评论没有只讨论模型指标，而是迅速转向 AI 图像在现实商业中的误用。首条评论批评房地产中介把破旧房源用 AI 滤镜生成宜家风效果图，用户必须翻过一堆虚假理想图才能看到真实状态。随后有人认为这应当属于误导或虚假广告，也有人提到加州已对房地产 AI 图片做出规定：允许光照修正和裁剪，但显著修改应提供原图链接。讨论还涉及“原图”在相机内置 AI 增强时代如何界定、MLS 对虚拟布置和改图的既有规则，以及消费者保护是否还有执行力。

---

## 7. 欧洲数字身份钱包被批依赖 Google 与 Apple 安全服务 (European digital ID wallets rely on safety services of Google and Apple)




Waag 文章批评欧洲数字身份钱包在实现上依赖 Google Play Integrity、Apple App Attest 等平台安全服务，可能把公共数字身份基础设施绑定到大科技生态。文章以 Google Play Integrity 为例说明，它不仅检查 app 是否被篡改，还把 Google 授权 Android、Play Store 安装路径和 Google 账号作为可信基础，排斥 GrapheneOS、/e/OS 等去 Google 化系统。Waag 认为这与欧盟希望通过 DMA 限制平台垄断、建设基于公共价值的数字基础设施相冲突。文章建议采用更开放的 Android Hardware Attestation API 或更深层的开放栈设计，避免政府服务反过来强化私有平台政策。

原文链接：https://waag.org/en/article/european-digital-id-wallets-are-gift-google-and-apple/

论坛讨论链接：https://news.ycombinator.com/item?id=48730729

HN 评论补充了具体项目：有人指出欧盟钱包参考实现严格要求 Google Play Services，意大利 IO app 也拒绝 GrapheneOS 支持，认为只有诉讼和消费者组织压力才可能改变。另一些评论认为问题不止是技术依赖，还包括公民被迫购买少数平台设备，并接受不对称的商业条款和追踪。也有人从政府能力角度辩护，认为如果不用 Google/Apple，政府就要投入大量资金维护安全、可用和无障碍能力，而且政府服务本身也可能更侵入。讨论核心是公共服务安全、反垄断和用户自由之间的实际取舍。

---

## 8. 运输政治 zine 被判 30 年引发言论自由警报 (30-year sentence for transporting zines is a five-alarm fire for free speech)





The Intercept 文章讨论 Daniel “Des” Sanchez Estrada 因运输一箱自己并未撰写的反法西斯 zine，被判 30 年联邦监禁。作者认为，这标志着美国政府对信息和政治表达的刑事化进入新阶段：检方把多年以前公开流通的无政府主义或反政府小册子，解释为与 Prairieland 抗议相关的证据或犯罪线索，从而把拥有或移动政治材料近似处理成参与恐怖组织。文章进一步联系到政府曾试图获取媒体 YouTube 订阅者名单、把记者收到的文件称为“违禁品”等做法，认为这会让人们因为害怕被调查而清理或隐藏自己的阅读记录，反过来又可能被指控为销毁证据。

原文链接：https://theintercept.com/2026/06/26/daniel-sanchez-estrada-zines-prairieland-free-speech/

论坛讨论链接：https://news.ycombinator.com/item?id=48711981

评论区对案件事实和量刑合理性有明显争论。有人认为，如果仅仅因为隐藏已公开多年的 zine 就被判 30 年，这像是大坝裂缝，说明法院开始接受极端法律推理；他们希望看到更完整案情。反方评论强调，联邦检方赢得定罪的叙事是被告群体用烟花诱导警察进入伏击，并涉及枪击，隐藏证据是整体犯罪的一部分。随后又有人反驳“伏击”说法过度，把噪音示威、烟花和政治材料都放进恐怖主义框架是政府扩大化。讨论最终落在刑事事实、政治表达和选择性执法之间的界线。

---

## 9. Open Source Low Tech：用回收材料做基础设施 (Open Source Low Tech)





Open Source Low Tech 是 Daniel Connell 的开放项目，目标是让普通人用回收材料和简单工具，自己构建并维护基础基础设施，包括小型风力发电、太阳能灶、火箭质量加热器、太阳能热水板和 Wi-Fi 抛物面天线等。项目强调所有设计开源、免许可、可用于任何目的，并提供完整教程和制作说明。它的理念不是追求高性能工业设备，而是把能源、食物、清洁水、通信等基本能力尽量转化为低成本、可修复、可复制的技术。页面本身也说明项目没有外部资助，依靠支持者维持。

原文链接：https://opensourcelowtech.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48683098

评论区把这个项目放进更长的“适用技术”和 DIY 工具传统里讨论。有人回忆 Gingery Books 的《从废料建造自己的金工车间》系列，尤其是自制车床、铸造和可复制机床的魅力，也提到 Multimachine、Open Source Ecology、3D 打印混凝土机床等相近方向。其他人从现实约束切入，讨论在法国等国家，学校购买风扇或私人安装空调都可能遇到制度限制，DIY 反而不是最难的部分。整体关注点是：低技术开源方案的价值不只在便宜，也在可维护性、自治和对复杂供应链的替代。

---

## 10. Knoppix：一代人的 Linux Live CD 记忆 (Knoppix)


Knoppix 页面介绍这个经典的可启动 Live Linux 系统，可从 CD、DVD 或 USB 闪存盘运行，包含一组代表性的 GNU/Linux 软件，常被用作无需安装即可体验 Linux、救援系统或便携工作环境。页面内容较简短，主要提供 Knoppix 9.1 发布说明、下载、订购、链接和 Knopper.Net 新闻入口。尽管页面本身信息不多，Knoppix 在技术史上的意义在于它降低了用户尝试 Linux 的门槛：不必改动硬盘、不必承担双系统风险，就可以在 Windows 机器上临时进入完整 Linux 环境。

原文链接：https://www.knopper.net/knoppix/index-en.html

论坛讨论链接：https://news.ycombinator.com/item?id=48732056

HN 评论几乎变成怀旧现场。有人回忆 2001–2003 年在印度学校机房第一次通过 Knoppix Live CD 接触 Linux 和 gcc，此前只知道 Windows 和 Borland C++；也有人说大学时期随身带 Slackware USB，在 Windows 机房启动自己的环境。更多评论讲到小时候因为双启动弄坏分区表被父母禁止折腾电脑，后来靠 Knoppix、Puppy Linux、BackTrack、Slackware 等 Live CD 继续学习。讨论里的共同点是：Live CD 不只是工具，更是很多人进入 Linux、编程和系统维修世界的安全入口。
