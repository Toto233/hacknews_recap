---
title: '量子计算进展逼近：加密工程师呼吁加速迁移后量子算法 | Hacker News 摘要 (2026-04-07)'
author: 'hacknews'
description: ''
digest: '加密工程师 Filo Sottile 表示对“可破坏现有公钥体系的量子计算机（CRQC）”时间线的判断已大幅提前。近期 Google 与 Oratomic 的论文降低了破解 256 位椭圆曲线所需的逻辑/物理量子比特与门数估计，在特定架构下'
source_url: 'https://words.filippo.io/crqc-timeline/'
pubDatetime: 2026-04-07 20:54:39.708+08:00
tags:
  - 量子安全
  - AI工程
  - 安全与犯罪
  - 开源文化
---

---

## 1. 量子计算进展逼近：加密工程师呼吁加速迁移后量子算法 (A cryptography engineer's perspective on quantum computing timelines)




加密工程师 Filo Sottile 表示对“可破坏现有公钥体系的量子计算机（CRQC）”时间线的判断已大幅提前。近期 Google 与 Oratomic 的论文降低了破解 256 位椭圆曲线所需的逻辑/物理量子比特与门数估计，在特定架构下甚至可能接近分钟级。作者强调风险评估不能赌“2030 前绝不会出现 CRQC”，因为协议、标准、证书轮换与全网部署需要多年；如果等到信号确定再行动，迁移窗口将来不及。他因此主张尽快推进后量子算法迁移，甚至包括签名体系，而非仅限于密钥协商。

原文链接：https://words.filippo.io/crqc-timeline/

论坛讨论链接：https://news.ycombinator.com/item?id=47662234

讨论中有人指出 ML-KEM（FIPS 203）用于密钥协商的部署已经可行，应优先替换 Diffie-Hellman；但作者回应称时间线收紧到 2029 左右后，认证与签名体系也必须同步规划，否则轮换周期会拖慢整体迁移。社区关注点集中在“先 KEM 后签名”的节奏是否还能成立。

---

## 2. Claude Code 被指 2 月更新后“退化”：用户用日志分析质疑思考深度 (Issue: Claude Code is unusable for complex engineering tasks with Feb updates)


一位重度用户在 Claude Code 的 GitHub issue 中称 2026 年 2 月更新后，模型在复杂工程任务上明显退化：忽略指令、给出错误“最简修复”、甚至执行与要求相反的操作。作者分析 6,800+ 会话文件和 17,000+ 思考块统计，指出 3 月初“思考可见度”被逐步 redaction 的时间线与质量下降高度吻合，并用签名字段估算思考深度，认为相较 1 月中位长度下降 60% 以上。结论是长链路工程任务需要更充足的推理预算，若被压缩将导致工具使用从“研究优先”转向“编辑优先”。

原文链接：https://github.com/anthropics/claude-code/issues/42796

论坛讨论链接：https://news.ycombinator.com/item?id=47660925

讨论中，Claude Code 团队成员回应称 redaction 只是 UI 隐藏思考内容，不会削减推理预算；同时 2 月引入自适应思考与 3 月默认 effort=85 的设置变更，可能影响可见的“思考长度”。他们提示可通过 `showThinkingSummaries` 或禁用自适应思考来对比。社区则讨论如何用日志与行为指标评估质量回归，以及是否需要更可控的推理开关。

---

## 3. 德国警方点名 GandCrab/REvil 头目，披露双重勒索细节 (German police name alleged leaders of GandCrab and REvil ransomware groups)





德国联邦刑警局（BKA）公布两名俄罗斯公民为 GandCrab 与 REvil 勒索软件组织的负责人：31 岁的 Daniil Shchukin（UNKN）与 43 岁的 Anatoly Kravchuk。BKA 指其 2019-2021 年间在德国涉 130 起攻击，造成超 3,500 万欧元损失，并通过双重勒索模式牟利。文章回顾 GandCrab 依靠加盟分成快速扩张、2019 宣布“退场”，随后 REvil 被视为其重组版本；美国此前也曾通过加密货币追缴动作将 Shchukin 与收益钱包关联起来。

原文链接：https://krebsonsecurity.com/2026/04/germany-doxes-unkn-head-of-ru-ransomware-gangs-revil-gandcrab/

论坛讨论链接：https://news.ycombinator.com/item?id=47660954

评论提到德国 CCC 社群早年已追踪到相关线索，讨论执法部门是否吸收了外部安全研究成果。同时也引发关于德国“黑客条款”与双用途工具的法律争议：一方认为法律过严限制了白帽研究，另一方指出司法实践已对双用途工具做出狭义解释，但改革进展缓慢。

---

## 4. 微软桌面 UI 为何长期缺乏统一路线？一篇回顾从 Win32 到 WinUI 的混乱史 (Microsoft hasn't had a coherent GUI strategy since Petzold)




作者回顾 Windows GUI 的 30 年演进，认为自 Petzold 时代的 Win32 之后，微软就再未给开发者一个“明确答案”。从 MFC、COM/ActiveX 到 Longhorn/WPF 的愿景崩塌，再到 WPF、Silverlight、UWP、WinUI 与 Electron 并行，生态长期处于“多套框架、无一长期承诺”的状态。结果是企业与开发者每隔几年就要重新押注技术栈，学习成本高且路线风险大。文章呼吁微软给出清晰的 UI 战略与兼容承诺，避免让开发者在不确定性中消耗生产力。

原文链接：https://www.jsnover.com/blog/2026/03/13/microsoft-hasnt-had-a-coherent-gui-strategy-since-petzold/

论坛讨论链接：https://news.ycombinator.com/item?id=47651703

评论区抱怨现代 UI 规则被不断打破，桌面时代的可预期性与“设计习语”被 Web/移动端稀释。也有人认为跨平台需求迫使设计趋同，导致密度与效率被牺牲。讨论集中在“平台一致性 vs. 原生体验”的长期张力，以及微软是否愿意重新做出明确的框架选择。

---

## 5. GuppyLM：9M 参数小模型，5 分钟从零训练的“鱼语”LLM (Show HN: I built a tiny LLM to demystify how language models work)



作者发布 GuppyLM：约 8.7M 参数、6 层 Transformer 的微型语言模型，用一条“会说鱼话”的人格来展示 LLM 的完整训练流程。项目提供 60K 合成对话数据集、BPE 词表与训练/推理代码，在 Colab T4 上约 5 分钟即可训练出可用权重，并能导出 ONNX 通过 WebAssembly 在浏览器本地运行。模型刻意限制词表大小和 128 token 上下文，输出更稳定，也更便于理解从数据生成、tokenizer、训练循环到推理部署的每个环节，目标是把“训练 LLM”从黑箱变成可复现实验。

原文链接：https://github.com/arman-bd/guppylm

论坛讨论链接：https://news.ycombinator.com/item?id=47655408

讨论聚焦于教学价值与文档需求：有人认为代码足够简单却仍难懂多头注意力、LayerNorm 等概念，呼吁补充高层说明；也有人表示把代码交给 LLM 辅助解读可行，但不能替代“为什么这样设计”的文档。另有评论拿它与 Karpathy 的 minGPT/microgpt 对比，认为这种极简模型像 Minix 之于操作系统，是很好的学习基座。

---

## 6. 被欠款与烂项目教育的一课：我在北京 AR 巴士项目的踩坑记 (What being ripped off taught me)


作者回忆被邀赴北京协助一项 AR 巴士项目的经历：抵达后发现团队缺乏版本控制、部署靠 U 盘、硬件散热与镜头标定问题严重，渲染管线层层叠加、可维护性极差。项目多年延期且过度承诺，团队对专业建议抵触，导致基础问题始终得不到解决。作者尝试重建流程、引入标准化和工程规范未果，最终遭遇拖欠与被“切割”。文章总结了从技术评估、项目治理到合同条款和付款节奏的教训，强调遇到无视现实成本与工程纪律的客户要尽早止损。

原文链接：https://belief.horse/notes/what-being-ripped-off-taught-me/

论坛讨论链接：https://news.ycombinator.com/item?id=47660286

评论区大量讨论如何防止被赖账：分享了延迟付款利息、分期里程碑、逾期自动加速到期、交付前不给下载链接等条款，以及通过控制每次交付金额以便走简化诉讼流程的策略。也有人提到对客户信用评级和付款习惯的实际统计，认为“愿意接受严格条款的客户往往更可靠”。

---

## 7. 法国将最后一批存美黄金撤回本土，换标金条获利 150 亿美元 (France pulls last gold held in US)




法国央行宣布已将存放在纽约联储的最后 129 吨黄金撤回，并在欧洲市场购买符合现代标准的金条替换，约占其黄金储备的 5%。该行动源于 2024 年内部审计对“非标准金条”升级的建议，执行期为 2025 年 7 月至 2026 年 1 月。受金价上涨影响，此举带来约 130 亿欧元资本收益，使法国央行 2025 财年由亏转盈。法国黄金储备总量仍约 2,437 吨，目前全部存放在巴黎地下金库，仍有 134 吨计划在 2028 前完成换标。

原文链接：https://www.mining.com/france-pulls-last-gold-held-in-us-for-15b-gain/

论坛讨论链接：https://news.ycombinator.com/item?id=47658146

讨论围绕布雷顿森林体系与戴高乐时期的“兑金”历史展开，有人认为法国当年大规模换金加速了体系崩溃，也有人指出其根源在于美元作为储备货币的结构性缺陷。还有观点争论“金本位是否天生不稳定”，以及美国货币政策与黄金流出的关系。

---

## 8. 开源回合制策略《战斗为韦斯诺斯》：跨平台、可模组的老牌项目 (Battle for Wesnoth: open-source, turn-based strategy game)




《Battle for Wesnoth》是一款高幻想主题的开源回合制策略游戏，支持单人战役与在线/本地多人对战。项目拥有 200+ 单位、7 大阵营与大量地图，核心玩法强调地形与单位能力的战术组合。引擎可通过 WML 与 Lua 高度扩展，官方附加服务器提供丰富的玩家自制战役与模组内容。游戏跨 Windows/macOS/Linux 发布，提供稳定版与开发版下载，也可在 Steam 与 itch.io 获得，并依靠社区与捐助持续维护。

原文链接：https://www.wesnoth.org

论坛讨论链接：https://news.ycombinator.com/item?id=47664186

评论区意外聚焦到项目核心维护者的就业问题，有人主动为其引荐岗位，也有人感慨当下新毕业生和开源贡献者在就业市场的处境。讨论延伸到“开源贡献是否等价于可被雇佣的经验”、安全许可岗位的门槛，以及在经济低迷期个人投入开源的 ROI。

---

## 9. 《反模因部》书评：把“不可记忆”的概念写成系统工程式恐怖 (Book review: There Is No Antimemetics Division)


书评聚焦科幻小说《There Is No Antimemetics Division》。作者认为其恐怖感源自工程师熟悉的“静默故障”：信息在无日志、无警报的情况下悄然消失。小说源于 SCP 基金会条目，核心概念是“反模因”——一旦不再观察就会被遗忘的存在。主角靠“记忆药物”维持对威胁的认知，在一个以信息为本体、能够改写记忆与历史的“概念生态”中作战。评论称作品以极具创意的方式把系统工程的脆弱性放大为宇宙尺度，兼具悬疑与哲学意味。

原文链接：https://www.stephendiehl.com/posts/no_antimimetics/

论坛讨论链接：https://news.ycombinator.com/item?id=47660853

读者反应两极：有人批评文风生硬、比喻俗套，认为“整页遮黑的删节技巧”过度使用；也有人认为这种自我消除的叙述正是主题的一部分，带来独特沉浸感。讨论还触及 SCP 社群的影响力，以及长篇扩写是否能延续短篇条目的神秘感。

