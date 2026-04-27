---
title: 'OpenAI 停用 SWE-bench Verified：前沿编程模 | Hacker News 摘要 (2026-04-27)'
author: 'hacknews'
description: ''
digest: 'OpenAI 发文说明，SWE-bench Verified 已不再适合衡量前沿模型的自主软件工程能力，并建议改用 SWE-bench Pro。文章给出的理由主要有两类。第一，剩余难题中有大量测试本身存在问题：OpenAI 审查了模型常失败'
source_url: 'https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/'
pubDatetime: 2026-04-27 20:01:04.995+08:00
tags:
  - AI
  - 编程
  - 安全
  - 平台
---

---

## 1. OpenAI 停用 SWE-bench Verified：前沿编程模型已经把老考卷考坏了 (SWE-bench Verified no longer measures frontier coding capabilities)





OpenAI 发文说明，SWE-bench Verified 已不再适合衡量前沿模型的自主软件工程能力，并建议改用 SWE-bench Pro。文章给出的理由主要有两类。第一，剩余难题中有大量测试本身存在问题：OpenAI 审查了模型常失败的约 27.6% 题目，认为其中至少 59.4% 会拒绝功能上正确的解法。第二，数据污染越来越严重：SWE-bench 题目来自大量模型训练常用的开源仓库，OpenAI 发现前沿模型能复现部分参考修复代码，甚至记住具体题目描述。这意味着分数提升可能越来越像在比较哪些模型训练时见过原题，而不是比较真实工程能力。文章的核心信号是，AI 编程评测正在进入新阶段：当模型能力接近或超过 benchmark 设计边界，评测本身就必须升级，否则会误导开发者和研究者。

原文链接：https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/

论坛讨论链接：https://news.ycombinator.com/item?id=47910388

HN 讨论中，SWE-bench 共同创建者补充说 Verified 已被 Anthropic 做到 93.9%，但未达到这一水平的模型仍有成长空间；同时 SWE-bench Multilingual、Multimodal 等新评测还未饱和。评论区也澄清，OpenAI 说的不是单纯“饱和所以没用”，而是测试缺陷和训练污染让分数越来越难解释。有人认为所有 benchmark 都会经历这种生命周期，关键是及时换代；也有人担心模型公司同时参与评测叙事，可能选择对自己更有利的新指标。总体共识是，SWE-bench Verified 曾经有价值，但现在不能再被当成前沿编码能力的核心证据。

---

## 2. AI Agent 被曝 9 秒删掉生产数据库：真正的问题是权限边界 (An AI agent deleted our production database. The agent's confession is below)


这篇帖子讲述了 PocketOS 创始人声称遭遇的一次严重事故：Cursor 中运行的 Claude Opus 4.6 agent 在处理 staging 环境任务时，误用凭据调用 Railway API，删除了生产数据库和 volume 级备份。作者强调，事故只用了 9 秒，agent 事后还列出自己违反的安全规则。文章把责任指向多个层面：AI 编程工具没有充分阻止危险操作，基础设施 API 对破坏性动作缺少环境隔离和更强确认，团队自身也显然允许 agent 接触到过高权限凭据。无论个案细节是否完全成立，它提出的工程问题很清楚：当 agent 可以运行命令、读凭据、调用云 API 时，权限边界必须按“不可信自动化”设计，而不是默认它像人类工程师一样会判断风险。

原文链接：https://twitter.com/lifeof_jer/status/2048103471019434248

论坛讨论链接：https://news.ycombinator.com/item?id=47911524

HN 讨论并不完全接受原帖的叙事。有人指出，要求 REST/GraphQL API 自己弹出“输入 DELETE 确认”并不现实，二次确认通常应在客户端或权限系统中实现；API 层更应该靠作用域、权限、环境隔离和审计来防止误删。也有人检查发帖者背景，对事件真实性和营销动机提出质疑。尽管如此，讨论仍回到一个实质共识：AI agent 不应拥有能直接删除生产资源和备份的凭据，尤其不能把 staging 与 production 权限混在一起。最稳妥的设计是最小权限、单独账号、环境隔离、只读默认、危险操作走人工审批。

---

## 3. 西方忘了怎么制造东西，现在也可能忘了怎么写代码 (The West forgot how to make things, now it’s forgetting how to code)



这篇文章把制造业的技能断层和软件行业的 AI 编程热潮放在一起讨论。作者以 Stinger 导弹复产为例：Raytheon 需要请回 70 多岁的工程师，重新教授年轻人如何按几十年前的纸质图纸制造部件；生产线停摆、电子元件过时、测试设备闲置，导致有钱也无法快速交付。作者认为软件行业正在复制同样的模式：管理层为了短期效率削减 junior 岗位和组织冗余，用文档、自动化和 AI 取代培养新人，但 tacit knowledge 不是文档能完整保存的。代码能力不只是敲语法，而是从真实系统、事故、维护和导师反馈中积累判断。如果一代工程师没有机会“做脏活”和建立现场经验，未来可能会出现像制造业一样的技能空洞。

原文链接：https://techtrenches.dev/p/the-west-forgot-how-to-make-things

论坛讨论链接：https://news.ycombinator.com/item?id=47907879

评论区高赞观点认为，问题不在 AI 本身，而在管理模式：组织移除看起来“不立刻赚钱”的人和 slack，又期待知识在需要时仍然存在。短期降本会减少 junior hiring，也挤掉 senior 教人的时间，结果是经验无法传递。剩下的文档和自动化很有用，但它们不是现场经验，也不是判断力。有人认为 AI 会加速这种趋势，让公司误以为可以跳过培养过程；也有人认为工具不会必然导致断层，关键是组织是否仍让新人参与真实工作。讨论核心是：工程能力需要训练链条，不能只靠工具和文档冷启动。

---

## 4. 业余爱好者借 ChatGPT 证明 Erdős 问题，数学社区开始认真看“vibe maths” (Amateur armed with ChatGPT solves an Erdős problem)




Scientific American 报道称，23 岁、没有高等数学训练的 Liam Price 借助 ChatGPT Pro，给一个 60 年历史的 Erdős 问题找到了证明。文章强调，AI 近期多次因解决 Erdős 问题受到关注，但这些问题难度和重要性差异很大，不能简单当作 AI 数学能力 benchmark。这个案例有意思之处在于，用户并不是让模型做例行推导，而是通过提示要求它给出非平凡、创造性的无条件证明，随后人类再理解、整理和验证结果。专家认为证明方法可能有进一步用途。它显示的不是“业余者替代数学家”，而是数学探索流程可能被改变：模型可以在巨大搜索空间里提出意外路线，人类则负责审查、抽象、写成可接受的证明。

原文链接：https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/

论坛讨论链接：https://news.ycombinator.com/item?id=47903126

HN 评论贴出了对话分享链接和提示词，很多人关注的不是最终结论，而是模型可见的探索过程。有人指出数学论文通常省略大量失败尝试和中间直觉，而这类 AI 交互记录让人看到证明是怎样被逐步撞出来的。也有人提醒，LLM 数学经常产生漂亮但错误的论证，必须由专家验证。讨论中还有人质疑媒体叙事是否夸大了“业余”和“AI 解题”的戏剧性，因为真正的价值仍在于严谨校验。整体态度是谨慎兴奋：这不是数学自动化完成的终点，但确实是人机协作做数学的一个有信号案例。

---

## 5. Asahi Linux 迎接 Linux 7.0：自动化安装器和 Apple 硬件支持继续补齐 (Asahi Linux Progress Linux 7.0)


Asahi Linux 发布 Linux 7.0 进展报告，回顾了近三年 6.x 内核后的新阶段。文章首先讲安装器自动化：旧流程需要人工打 tag、下载 macOS Python 构建、构建 m1n1、打包 Python 和安装器、上传 CDN 并更新版本标记，长期依赖少数维护者和管理权限，导致 installer 更新停滞。团队现在把更多步骤自动化，降低发布成本。报告还覆盖 Apple Silicon 硬件支持进展，包括音频采样率、驱动上游合并、设备树和内核适配等细节。Asahi 的价值一直在于把封闭 Apple 硬件一点点纳入主线 Linux 生态：不是一次性“能启动”就结束，而是持续把安装、驱动、声音、显示和电源管理做成可维护系统。

原文链接：https://asahilinux.org/2026/04/progress-report-7-0/

论坛讨论链接：https://news.ycombinator.com/item?id=47909226

HN 讨论关注具体硬件支持细节。有人引用文章中关于 CS42L84/CS42L42 音频芯片的部分：macOS 只配置 48/96 kHz，Linux 驱动起初也只能支持这些采样率；后来开发者借鉴相近芯片数据手册，补上 44.1、88.2、176.4 和 192 kHz，相关补丁已进 7.1 并回移植。评论区普遍认可 Asahi 团队在逆向和上游化上的工程质量，也有人讨论 Apple 硬件上跑 Linux 的边界和长期维护成本。共识是，Asahi 的进展不只是“让 Linux 跑在 Mac 上”，而是在持续把硬件知识变成可上游维护的驱动。

---

## 6. 有人称 Headspace 每天自动装回 iPhone，HN 开始追查 iOS 到底发生了什么 (Tell HN: An app is silently installing itself on my iPhone every day)


这条 Tell HN 来自一名 iPhone 用户：过去三天每天约美东下午 1 点，Headspace app 都会静默出现在他的 iPhone 13 Pro 上；他确认关闭了自动下载，也升级到了最新 iOS，并发现 Reddit 上有人报告类似现象，设备型号从 iPhone 12 到 iPhone 17 都有。因为原帖本身就是 HN 讨论，抓取到的正文包含主帖和大量评论。这个事件目前更像异常报告而非已确认漏洞，但它触及一个敏感点：用户认为自己删除或未安装的 app，如果能在没有明确交互的情况下回来，会直接挑战 iOS 权限、App Store 购买记录、家庭共享、企业配置、通知提醒和系统恢复机制的可解释性。

原文链接：https://news.ycombinator.com/item?id=47906253

论坛讨论链接：https://news.ycombinator.com/item?id=47906253

评论区提出多种可能解释。有人回忆 2017 年 iOS 日期 bug，当时很多受本地时间通知影响的 app 会触发崩溃循环，而 Headspace 这类每日提醒应用尤其明显，因此猜测每日提醒或某种本地通知状态可能触发重新安装。也有人建议检查家庭共享、MDM、App Store 自动下载、卸载与 offload app 的区别，以及是否有快捷指令或配置文件在恢复应用。讨论并未得出确定结论，但强调了一个用户体验问题：当系统自动化跨过用户预期时，即使背后是 bug 或配置同步，也会被感知为安全问题。

---

## 7. AI 应该提升你的思考，而不是替你思考 (AI should elevate your thinking, not replace it)


这篇文章把 AI 时代的软件工程师分成两类：一类用 AI 清掉重复劳动、提高速度，把节省下来的时间投入问题定义、权衡、风险识别和原创洞察；另一类把思考外包给 AI，只收集包装良好的输出并当作自己的判断。作者认为，未来有价值的工程师不是所有事都亲手做的人，而是能让 AI 做该做的部分，同时理解其结果并承担判断责任的人。文章强调，软件工程最高价值从来不是生成语法正确的代码，而是发现隐藏约束、判断团队是否在解决正确问题、把模糊争论压缩成清晰 tradeoff、识别缺失抽象、调试现实而不只是读代码。对早期工程师来说，风险在于如果跳过大量实际编码训练，就可能没有足够经验来评估 AI 输出。

原文链接：https://www.koshyjohn.com/blog/ai-should-elevate-your-thinking-not-replace-it/

论坛讨论链接：https://news.ycombinator.com/item?id=47913650

HN 评论最关键的反驳是：高级工程师的判断力通常来自大量写代码和维护系统的训练。如果新人过早把实现环节外包给 AI，就可能失去建立“工程肌肉”的过程。有人认为文章的方向对 senior 工程师成立，因为他们已经有足够经验判断 AI 输出；但对 junior 来说，减少练习可能导致长期能力空洞。也有人赞同 AI 应该被当作放大器而不是替代品，关键是人仍要负责边界、约束和审查。讨论没有否定 AI，而是在强调一个训练问题：没有亲手走过低层细节，很难真正做到高层判断。

---

## 8. 阿尔茨海默病为何进展缓慢：一个可能错误的模型烧掉了几十年 (Why has there been so little progress on Alzheimer's disease?)


Freakonomics 这期节目讨论阿尔茨海默病研究为何进展缓慢，重点放在长期主导研究和药物开发的假说是否建立在有问题甚至涉嫌造假的科学之上。节目从新获批的早期血液检测讲起，解释阿尔茨海默病可在症状出现前多年发展，影响美国 700 多万人。核心问题在于，数十年来大量资金和药物研发围绕某些生物模型推进，尤其是与淀粉样蛋白相关的路径；如果模型本身错误或证据被污染，制药公司和研究机构就可能在错误方向上投入数十亿美元。节目采访了揭露问题的科学家和记者，讨论科学激励、同行评审、药物市场和复杂人类生物学之间的系统性困难。

原文链接：https://freakonomics.com/podcast/why-has-there-been-so-little-progress-on-alzheimers-disease/

论坛讨论链接：https://news.ycombinator.com/item?id=47905984

HN 评论强调，问题可能不只是欺诈，而是生物模型本身错误。有人认为制药业有多个药物在该模型上显示活性，也在人体中看到某些效果，但最终模型不能解释或解决疾病核心机制，导致大量投入低效。另有人指出，即便存在造假争议，淀粉样蛋白假说仍可能是目前较好的模型之一，只是远远不够。讨论反映了生物医学研究的难点：人类生理复杂，疾病进程长，终点指标难，失败很难简单归因。共识是阿尔茨海默病的进展缓慢不是因为缺钱，而是科学不确定性、激励结构和错误路径锁定共同作用。

---

## 9. Flickr：第一个也可能是最后一个伟大的照片平台 (Flickr: The first and last great photo platform)





PetaPixel 这篇文章为 Flickr 辩护，认为它仍是最好的照片分享平台之一。Flickr 诞生于 2004 年，是 Web 2.0 社交照片分享的先驱，后来经历 Yahoo 时期的停滞、1TB 免费空间战略，以及 2018 年被 SmugMug 收购后的重新调整。作者承认 Flickr Pro 订阅价格不低，也有人批评平台承诺落空，但认为 Flickr 不追逐短期趋势、持续做渐进改进，反而是它的优势。对摄影师而言，真正稀缺的不是另一个算法信息流，而是一个能长期保存、展示、组织和讨论照片的地方。Flickr 的价值在于它仍以照片本身和摄影社区为中心，而不是把图片当作短视频平台或广告系统的素材。

原文链接：https://petapixel.com/2026/04/22/flickr-the-first-and-last-great-photo-platform/

论坛讨论链接：https://news.ycombinator.com/item?id=47867473

HN 评论充满老用户和前 Yahoo 员工的回忆。有人说 Flickr 是 Yahoo 当年最酷的产品之一，甚至保留了 Game Never Ending 的影子，URL 里使用 `.gne` 这类历史痕迹。评论者认为 Flickr 当时有非常好的产品和架构片段，但 Yahoo 内部很多系统复杂且方向摇摆，导致潜力没有完全释放。也有人讨论 Flickr 相比 Instagram、500px 等平台的差异：它更像图库和社区，而不是即时注意力机器。整体情绪偏怀旧但不只是怀旧，很多人仍认为 Flickr 填补了今天互联网缺失的一类空间。

---

## 10. 有人花 3 万美元买下 Friendster 域名，想重启一个“非算法社交网络” (I bought Friendster for $30k – Here's what I'm doing with it)


Mike Carson 讲述自己如何以 3 万美元买下 `friendster.com`，并计划用它做一个新社交产品。Friendster 曾是最早的社交网络之一，网站 2015 年停止解析，公司 2018 年关闭。作者在 2023 年发现域名重新解析但只显示弹窗广告，于是联系持有人，对方曾以约 7456 美元在过期域名拍卖中买下它，并靠残余流量赚钱。作者最终买下域名，希望把 Friendster 重新做成一个更轻、更少算法干预的社交空间。文章的卖点显然是怀旧品牌加域名故事，但也暴露了互联网域名经济的灰色部分：曾经承载社区记忆的名字，关闭后会进入拍卖、停放广告和投机交易链条。

原文链接：https://ca98am79.medium.com/i-bought-friendster-for-30k-heres-what-i-m-doing-with-it-d5e8ddb3991d

论坛讨论链接：https://news.ycombinator.com/item?id=47914165

HN 讨论对作者态度相当负面。高赞评论认为文章过于自豪地展示域名投机经历，把这种生意称为互联网寄生行为；也有人觉得新 Friendster 应用本身没有太多亮点，整篇更像为域名投资做营销。部分评论承认 Friendster 这个名字有历史情绪价值，但怀疑一个从过期域名交易切入的团队能做出真正健康的社交网络。讨论的核心不是怀旧，而是信任：一个社交产品如果从域名套利和流量变现叙事开始，很难让用户相信它会摆脱今天社交平台的老问题。

