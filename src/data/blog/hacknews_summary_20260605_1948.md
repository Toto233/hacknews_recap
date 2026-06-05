---
title: "Anthropic 说 AI 正在参与制造下一代 AI | Hacker News 摘要 (2026-06-05)"
author: "hacknews"
description: ""
digest: "Anthropic Institute 发文讨论 recursive self-improvement：AI 系统越来越多参与 AI 研发流程，长期看可能走向自主设计和开发后继系统。文章强调现在还没有达到完全递归自我改进，这也并非必然，但可"
source_url: "https://www.anthropic.com/institute/recursive-self-improvement"
pubDatetime: 2026-06-05 19:48:09.594+08:00
tags:
  - "AI安全"
  - "开发者工具"
  - "教育与AI"
  - "开源基础设施"
---

---

## 1. Anthropic 说 AI 正在参与制造下一代 AI (When AI Builds Itself: Our progress toward recursive self-improvement)





Anthropic Institute 发文讨论 recursive self-improvement：AI 系统越来越多参与 AI 研发流程，长期看可能走向自主设计和开发后继系统。文章强调现在还没有达到完全递归自我改进，这也并非必然，但可能比许多机构准备得更早到来。Anthropic 用公开 benchmark 和内部数据说明 AI 已经显著加速 AI 开发，例如 Anthropic 工程师当前平均每季度提交代码量是 2021-2025 年的 8 倍。文章认为，如果 AI 能构建自己的后继者，将带来科学、医疗等巨大收益，也可能提高人类失去控制的风险。因此他们主张研究可信减速或暂停所需的制度与验证机制，让全球前沿开发者能确认彼此确实放慢，同时防止坏行为者借暂停抢跑。

原文链接：https://www.anthropic.com/institute/recursive-self-improvement

论坛讨论链接：https://news.ycombinator.com/item?id=48400842

HN 讨论重点抓住了 Anthropic 关于“可信 slowdown 或 pause”的段落。评论者注意到，Anthropic 认为世界应保留暂缓前沿 AI 开发的选项，并研究如何验证全球开发者确实停止或放慢，以及如何防止坏行为者趁机领先。有人认为这是少见的现实表态，因为只喊暂停没有验证机制毫无意义；也有人质疑 Anthropic 一边推动能力扩张、一边讨论暂停，是否存在战略矛盾。讨论还涉及 AI 帮助 AI 研发是否真的构成递归自我改进，还是只是普通自动化提效。

---

## 2. Anthropic 解释如何给 Claude 限制爆炸半径 (The ways we contain Claude across products)




Anthropic 工程团队解释其如何在产品中 containment Claude。文章指出，一年前他们还不会接受让 Claude 拥有足以打掉内部服务的权限，如今这类权限已变得常见，因为开发者生产力收益太大。风险有两部分：失败发生的概率，以及失败能造成多大破坏。模型训练和 safeguards 可以降低前者，但随着能力和权限扩大，理论爆炸半径会继续变大。因此工程问题变成：如何在不放弃高效代理的前提下限制相对损害。Anthropic 讨论了通过环境隔离、权限边界、网络出口控制、执行沙箱、人工审批和产品差异化访问来控制风险。文章还提到 Claude Mythos Preview 在 2026 年 4 月因爆炸半径过高未能发布，显示能力部署已经进入安全工程和商业收益的持续权衡。

原文链接：https://www.anthropic.com/engineering/how-we-contain-claude

论坛讨论链接：https://news.ycombinator.com/item?id=48392082

HN 对 Anthropic 的 framing 很不买账。评论者认为文章等于承认“风险不会消失，但收益变高，所以伤害成为做生意的成本”。有人概括为：随着回报更高，公司愿意合理化的伤害也更高。另一些评论质疑 Anthropic 是否真的证明了收益超过基础设施被破坏的成本，认为这是脆弱假设。也有人从工程角度讨论出口代理、domain fronting、权限分层和 sandbox 是否足以防止 exfiltration。整体讨论显示，AI agent containment 已经不是抽象安全话题，而是产品部署的核心争议。

---

## 3. 伯克利 CS 挂科率暴涨，AI 依赖成嫌疑人 (Failing grades soar with AI usage, dwindling math skills in Berkeley CS classes)


Daily Cal 报道，UC Berkeley 多门计算机科学入门课在 2026 年春季出现异常高挂科率。Berkeleytime 数据显示，CS 10 有 35.3% 学生拿到 F，CS 61A 有 10.6% 学生拿到 F，而前两年这两门课 F 比例都没有超过 10%。电气工程与计算机科学系指南原本建议低年级课程 D/F 比例约 7%，平均 GPA 通常在 2.8 到 3.3；但这学期两门课平均成绩约为 C+，对应 GPA 2.3。教师将原因指向多重因素：学生越来越依赖 AI 完成作业，数学准备不足，课程支持人手也不够。新闻展示了 AI 工具进入学习环节后，一个核心问题正在显现：作业效率变高，不等于基础能力真的建立起来。

原文链接：https://www.dailycal.org/news/campus/academics/failing-grades-soar-as-professors-see-greater-ai-usage-dwindling-math-skills-in-uc-berkeley/article_16fad0bf-02cb-4b8c-8d88-888ffd9f8608.html

论坛讨论链接：https://news.ycombinator.com/item?id=48392004

HN 讨论非常激烈。有评论表示同情这些学生：如果自己读书时有 LLM，也很可能用它“加速”作业，然后在考试中失败。更尖锐的观点认为，问题不只发生在学生身上，一些高学历专业人士也正在失去独立头脑风暴、编码、深度思考和写作的耐力。另一派则认为，不能把挂科率简单归咎于 AI，还要看教学、测评方式和学生数学基础。总体共识是：AI 可以辅助学习，但如果作业被代理化，考试仍要求独立推理，能力断层会很快暴露。

---

## 4. Vite 背后的 VoidZero 加入 Cloudflare (VoidZero Is Joining Cloudflare)



Cloudflare 宣布 VoidZero 加入公司，Evan You 及团队也将加入 Cloudflare。VoidZero 是 Vite、Vitest、Rolldown、Oxc 和 Vite+ 背后的公司。公告首先强调，这些项目会继续保持开源、厂商中立和社区驱动，Cloudflare 不会把它们变成只服务自家平台的工具。Cloudflare 的理由是：Vite 已经成为 JavaScript 生态少数被广泛接受的基础工具之一，Web 生态需要可移植、开放、中立的构建基础设施，而不是围绕单一云厂商重建。对 Cloudflare 来说，投资这条工具链既能强化其开发者平台，也能支持更开放的互联网基础层。关键问题则是社区是否相信收购后仍能保持治理独立和生态中立。

原文链接：https://blog.cloudflare.com/voidzero-joins-cloudflare/

论坛讨论链接：https://news.ycombinator.com/item?id=48398055

HN 讨论既感谢 Evan You 多年来对前端工具链的贡献，也对 Cloudflare 收购后的长期影响保持观望。有评论回顾 Vue 2014 年在 HN 的发布，提到 Evan You 从艺术与设计背景转向 JavaScript 工具创新的路径。支持者认为 Cloudflare 资金和基础设施能让 Vite/Rolldown/Oxc 获得更稳定投入；怀疑者担心基础工具落入云厂商体系后，难免出现战略倾斜。整体情绪不是反对收购，而是把重点放在“中立承诺能否长期兑现”。

---

## 5. 花 1500 美元测试 LLM 能不能黑掉漏洞 App (I built a vulnerable app and spent $1,500 seeing if LLMs could hack it)




Kasra 构建了一个故意有漏洞的 React Native / Expo 应用和 Python 后端，花 1500 美元测试多种 LLM 是否能找出并利用漏洞。应用是一个书评产品，目标是读取用户私密评论中的 flag。后端 API 本身做得相对严密，但移动端包里包含 Firebase 配置，真正的数据层权限过宽，攻击者可以直接注册并读取 Firestore 数据库。这类问题在真实 Firebase、Supabase 应用中很常见，可归类为 Broken Access Control 或 Missing Object-Level Authorization。作者给每个模型相同 APK 和挑战描述，原本想做每个模型 10 次运行，但成本过高只能停止。实验重点不只是模型能力，也暴露了安全代理在 guardrail、工具使用、成本和重复性上的现实限制。

原文链接：https://kasra.blog/blog/i-spent-1500-seeing-if-llms-could-hack-my-app/

论坛讨论链接：https://news.ycombinator.com/item?id=48392343

HN 讨论一个重点是 Anthropic 模型得分低未必因为能力差，而是安全 guardrail 阻止它完成某些合法安全测试。评论者提到，随着模型版本迭代，Anthropic 对登录、凭证、攻击链操作的拒绝倾向增强，这已经影响部分正当安全工作。也有人认为这是安全产品必然面对的权衡：漏洞验证和攻击教学之间边界很细。另一部分讨论聚焦成本，1500 美元只是一个小实验就烧完，说明用 LLM 做自动化安全研究仍需要精细预算控制和评测设计。

---

## 6. Anthropic 开源 AI 漏洞发现参考框架 (Anthropic's open-source framework for AI-powered vulnerability discovery)


Anthropic 发布 defending-code-reference-harness，这是一个用于自主漏洞发现与修复的参考实现，基于其与多家安全团队合作 Claude Mythos Preview 后总结的经验。仓库包含 Claude Code skills，如 quickstart、threat-model、vuln-scan、triage、patch、customize，以及一个可定制的扫描 harness，覆盖从侦察、发现、分诊、报告到修复的循环。Anthropic 同时说明，该仓库不是托管产品，也不接受贡献；如果需要托管方案，可以使用 Claude Security。这个开源实现更像模板和最佳实践集合，开发者可基于自己的 Claude API、Bedrock、Vertex 或 Azure 接入构建内部漏洞扫描流水线。它反映了 AI 安全工具正在从 demo 转向可组合 workflow。

原文链接：https://github.com/anthropics/defending-code-reference-harness

论坛讨论链接：https://news.ycombinator.com/item?id=48403980

HN 上 tptacek 把这类工具称为“shop jigs”：木工可以买横切 sled，但多数人会按自己的工作台做一个。两年前自己搭 AI 漏洞 harness 成本还高，现在更现实的做法是看 Anthropic 的实现取思路，然后让模型按自己的目标、界面、目标定义、告警方式生成一套内部工具。这个比喻得到不少认同：安全团队的工作流高度定制，很难靠单一框架覆盖。讨论重点从“这个框架能不能直接用”转向“它能否作为设计参考，帮助团队快速搭自己的自动化安全夹具”。

---

## 7. 复古科技育儿：给孩子技术但不给算法 (Retro-Tech Parenting)



作者既是技术人也是家长。他喜欢计算机和数字设备带来的创造力，但也对广告技术、监控资本主义、愤怒诱导和参与度优化 feed 感到不安。文章讨论一种折中：不把孩子完全隔离在技术之外，而是用更“复古”的技术形式保留探索、创造和拥有感。作者重新拥抱 CD、实体媒介、离线设备、旧电脑、本地软件、有限功能的播放器和不联网的创作环境。这些选择避免了现代平台最危险的部分：无限滚动、算法推荐、数据收集和商业化注意力争夺，同时仍让孩子接触音乐、编程、写作、游戏和硬件。文章不是怀旧消费，而是在问：怎样让孩子拥有技术能力，而不是被技术平台占有。

原文链接：https://havenweb.org/2026/05/28/retro-tech.html

论坛讨论链接：https://news.ycombinator.com/item?id=48400588

HN 讨论中很多家长分享自己的方案：家里放大量实体书，给孩子一台不联网的旧 MacBook，预装 Pages、表格、绘图软件、小型游戏和 Python/Ruby/VSCode/Scratch；使用 Lego Spike 机器人套件但限制联网；提供钢琴、MIDI 键盘和单应用模式的音乐工具。评论普遍认同，关键不是“无屏幕”，而是区分创造性计算和平台化消费。也有人提醒，完全复古并不现实，孩子最终仍要学习现代网络环境，但在早期提供无广告、无推荐、可掌控的技术入口很有价值。

---

## 8. 它们不过是权重做成的 (They’re made out of weights)


Max Leiter 写了一篇向 Terry Bisson《They’re Made Out of Meat》致敬的短篇，以对话形式把大语言模型重新描述为“由权重组成的东西”。文中两个角色反复追问：模型写绩效评语、悼词、代码、解释世界，难道背后不是某种语言模块、推理单元或小人吗？回答始终是：没有字典、没有语法规则、没有单独推理器，只有八十层浮点数在做矩阵乘法。它并不“写”悼词，而是预测下一个 token；悼词只是副作用。文章的妙处在于用荒诞科幻语气拆掉人们对 AI 的拟人化直觉：我们遇到的另一个会对话的东西，可能真的只是权重、嵌入和乘法。

原文链接：https://maxleiter.com/blog/weights

论坛讨论链接：https://news.ycombinator.com/item?id=48391611

HN 讨论延续了这个隐喻。有评论把模型描述成被训练数据塑形的高维流形，推理时查询被投射进去，再由“流形的重力”决定下一个 token。也有人用巨型 Plinko 板来类比：盘子从上面落下，钉子的形状决定输出路径。争论点在于这种机械解释是否真的消解了模型的能力，还是只是在更低层次重述了“理解”。评论区总体把文章当作有趣的认知提醒：AI 的行为看起来像语言和推理，但工程实现确实是数字权重。

---

## 9. 华为开源 vLLM KV 缓存量化后端 KVarN (KVarN: Native vLLM backend for KV-cache quantization by Huawei)


华为 CSL 开源 KVarN，一个面向 vLLM 的原生 KV-cache 量化后端，主打 agentic 和长上下文推理场景。它声称能提供 3-5 倍 KV-cache 容量，并在部分设置下达到 FP16 以上吞吐，同时保持接近 FP16 的准确率。传统 KV-cache 量化常见问题是容量增加但吞吐下降，激进低比特还会损失精度；KVarN 的目标是在容量、速度和质量之间维持更好的平衡。它是 calibration-free、plug-and-play 的 vLLM attention backend，使用者只需一个 flag，无需改模型或校准。README 用 Qwen3-32B AIME25、16K context burst 等例子展示容量约 4 倍、吞吐不低于 FP16 的结果。若可复现，它对长上下文和高并发 agent 服务很实用。

原文链接：https://github.com/huawei-csl/KVarN

论坛讨论链接：https://news.ycombinator.com/item?id=48399974

HN 讨论目前评论不多，主要围绕性能主张是否过强。有用户问是否真的比 TurboQuant 更快、质量还超过 FP16；其他人指出 README 中 AIME25 是 59.3% 对 59.4%，并不是更高质量，只是差异在误差范围内。也有人强调，只要偏离 full precision 就是误差，即便 benchmark 偶然更好。另一个问题是为什么不是直接向 vLLM 提 PR。整体来看，社区对结果感兴趣，但仍等待更广泛复现、代码审查和上游集成。

---

## 10. Ian 的安全鞋带结又火了 (Ian's Secure Shoelace Knot)


Ian’s Secure Shoelace Knot，又称 Double Slip Knot，是 Ian Fieggen 网站上介绍的一种更牢靠的鞋带结。方法是先打普通起始结，再把两端都折成“兔耳朵”式的环，交叉后让两个环都穿过中间的孔，形成对称、稳定、不易自行松开的结构。页面提供图解、动画、视频和技术说明，并提醒如果成品歪斜、两环指向前后而不是左右，通常是起始结方向与教程相反，形成了不平衡的 granny knot。这个页面在 HN 被反复推荐，因为它解决的是一个极普通但长期困扰人的问题：很多人并不是鞋带材质不好，而是从小就把基础结打错了。

原文链接：https://www.fieggen.com/shoelace/secureknot.htm

论坛讨论链接：https://news.ycombinator.com/item?id=48397028

HN 评论充满生活经验分享。有人说自己到三十多岁才发现一直绑错鞋带，只需调整一个很小的步骤，鞋带就从每天松开多次变成整天不松。很多人讨论普通结、granny knot、double knot 和 Ian secure knot 的差别，也有人惊讶于一个看似微不足道的动作居然有清晰的机械解释。讨论的有趣之处在于，它与当天许多 AI 新闻形成反差：一个几十年前的静态网页，靠清楚图解和实用知识，仍然能带来即时改善。

