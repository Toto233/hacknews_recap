---
title: "Thinking Machines 发布开放权重模型 Inkling | Hacker News 摘要 (2026-07-16)"
author: "hacknews"
description: ""
digest: "Thinking Machines Lab 发布开放权重模型 Inkling。这是一个 975B 总参数、41B 激活参数的 MoE Transformer，支持最高 100 万 token 上下文，并在文本、图像、音频和视频数据上预训练。"
source_url: "https://thinkingmachines.ai/news/introducing-inkling/"
pubDatetime: 2026-07-16 20:21:06.789+08:00
tags:
  - "开源AI"
  - "本地模型"
  - "科技考据"
  - "数字安全"
---

---

## 1. Thinking Machines 发布开放权重模型 Inkling (Inkling: Our Open-Weights Model)


Thinking Machines Lab 发布开放权重模型 Inkling。这是一个 975B 总参数、41B 激活参数的 MoE Transformer，支持最高 100 万 token 上下文，并在文本、图像、音频和视频数据上预训练。文章强调 Inkling 面向通用推理、智能体编程、工具使用、多模态和可控思考强度，同时还公开较小的 Inkling-Small 预览版。团队把它定位为开放模型家族的起点，并介绍了架构、训练、RL 扩展、安全评估、模型卡和 Hugging Face 获取方式。

原文链接：https://thinkingmachines.ai/news/introducing-inkling/

论坛讨论链接：https://news.ycombinator.com/item?id=48924912

HN 讨论集中在它是否会成为美国开源权重模型的新标杆。有人关注音频能力、本地运行和 GGUF/llama.cpp 支持，也有人拿它和 Kimi、GLM 等模型比较。评论里同时出现两种情绪：一方面欢迎更强开放权重模型进入生态，另一方面也质疑超大 MoE 的真实可用性、成本和基准可信度。

---

## 2. xAI 开源 Grok Build 编程代理 (Grok Build is open source)




xAI 开源了 Grok Build，一个面向代码生成的 agent harness 和终端 UI。仓库说明它支持全屏、鼠标交互和扩展能力，代码里包含终端渲染、Mermaid 图表渲染等组件。项目本身更像一套可运行的编码代理外壳，而不是单个模型，展示了 xAI 对命令行代理体验、代码编辑循环和开发者工具链的实现方式。开源后，外部开发者可以直接研究其终端交互、任务执行和工具集成设计。

原文链接：https://github.com/xai-org/grok-build

论坛讨论链接：https://news.ycombinator.com/item?id=48926590

HN 上最受关注的是代码库里的意外细节，尤其是用 Unicode 方框字符渲染 Mermaid 图的终端渲染器。Simon Willison 还把相关 Rust 代码编译成 WebAssembly 做了浏览器 playground。讨论从“开源本身”转向对 TUI、ASCII/Unicode 图形、agent UI 组件和可移植实现的兴趣。

---

## 3. Stripe 与 Advent 据称报价收购 PayPal (Stripe and Advent have made a joint offer to acquire PayPal – sources)





Reuters 独家报道称，Stripe 与私募股权公司 Advent 已联合提出以超过 530 亿美元收购 PayPal 的报价。文章称这会是一笔重塑支付行业的大交易，涉及 Stripe、PayPal 及其旗下 Venmo、Braintree、Xoom 等业务的潜在整合。报道重点在交易来源、报价规模和监管挑战，并暗示如果推进，反垄断审查会成为核心障碍，因为线上支付和无卡交易市场集中度可能显著上升。

原文链接：https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/

论坛讨论链接：https://news.ycombinator.com/item?id=48915953

HN 讨论几乎立刻转向反垄断。评论者认为 Stripe、PayPal、Venmo、Braintree 和 Xoom 若在同一体系下，线上支付市场集中度会过高，可能需要剥离 Venmo 或 Braintree 才能过关。也有人讨论 HHI 指数、支付基础设施垄断、用户迁移成本，以及 PayPal 近年产品体验下降是否给收购留下空间。

---

## 4. David Siegel 呼吁资助免费开源 AI (Governments, companies, nonprofits should invest in free, open source AI [pdf])


David Siegel 在文章中从自己早年与 Richard Stallman 关于自由软件的争论讲起，说明为什么开源不仅是商业模式选择，更是知识增长方式。文章把这一逻辑延伸到 AI：如果模型、工具和基础设施只被少数公司封闭掌握，社会会失去共享、审计、教育和创新的能力。因此他呼吁政府、公司和非营利组织投资免费、开放源码的 AI，建立公共可用的模型和生态，而不是完全依赖封闭平台。

原文链接：https://www.siegelendowment.org/wp-content/uploads/2026/07/fortune-david-siegel-open-source-ai.pdf

论坛讨论链接：https://news.ycombinator.com/item?id=48927095

HN 讨论把话题推向政策和激励机制。有人主张高风险私有 AI 公司应释放开放权重，也有人建议用奖金、基金或定向资助推动开放模型突破关键基准。分歧在于开放权重是否会带来安全风险，以及公共资金应资助模型本身、数据集、评测体系还是应用生态。

---

## 5. 13 年前 Xeon 无 GPU 跑 Gemma 4 26B (Running Gemma 4 26B at 5 tokens/sec on a 13-year-old Xeon with no GPU)



作者在一台约 13 年前的 HP StoreVirtual 存储服务器上运行 Google Gemma 4 26B-A4B 模型，全程没有 GPU。机器使用双路 Xeon E5-2690 v2、DDR3 内存，只支持 AVX1，没有 AVX2 和 FMA3。通过合适的量化和运行配置，模型达到约 5.2 tokens/s 的解码速度、约 16 tokens/s 的 prompt eval。文章的重点不是炫耀性能，而是说明理解模型、硬件限制和推理路径，比单纯租 GPU 更能体现实际 AI 工程能力。

原文链接：https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/

论坛讨论链接：https://news.ycombinator.com/item?id=48922434

讨论里很多人分享本地模型运行经验，并预测未来更大的 MoE 模型会在普通消费硬件上可用。有人提到 16GB MacBook Air 上跑 Qwen 类模型的速度，也有人调侃什么时候树莓派能跑顶级模型。评论的共同兴趣是低成本硬件、量化、MoE 稀疏激活和本地 AI 可及性。

---

## 6. 《侏罗纪公园》电脑道具逐帧考据 (Jurassic Park computers in excruciating detail)





Fabien Sanglard 逐帧考据《侏罗纪公园》中出现的电脑、外设和软件界面，从 Apple PowerBook 100 到控制室里 Dennis Nedry 与 Ray Arnold 的桌面设备，再到 SGI 工作站和电影中的图形界面。文章不仅列出型号和规格，还分析这些机器在场景中的位置、用途和时代特征。它把电影美术、90 年代硬件史和 UNIX/图形工作站文化串起来，解释为什么这些道具在影迷和计算机史爱好者中仍有吸引力。

原文链接：https://fabiensanglard.net/jurrasic_park_computers/index.html

论坛讨论链接：https://news.ycombinator.com/item?id=48915709

HN 讨论延续了考据气氛。有人补充 Motorola Envoy 道具来源，称 frogdesign 负责人曾在飞机上向 Spielberg 展示原型；也有人感慨这类冷门细节正是社交互联网的美好之处。随后讨论转向 AI 是否会取代这类人肉考据，以及电影中 SGI、Mac 和 90 年代笔记本屏幕的时代记忆。

---

## 7. Telegram 数据中心分布之谜 (Mysteries of Telegram Data Centers (2022))





这篇 2022 年文章梳理 Telegram 五个数据中心的传闻与用户观察：DC1、DC3 在美国迈阿密，DC2、DC4 在荷兰阿姆斯特丹，DC5 在新加坡。作者重点讨论中文用户熟悉的 DC5 频繁故障现象，以及用户如何通过 bot 查询账号所在 DC。文章还解释账号注册后通常固定在某个 DC，不会轻易迁移，因此不同地区用户对稳定性的感知差异很大。它更像社区观察和基础设施推理，而不是官方技术文档。

原文链接：https://dev.moe/en/3025

论坛讨论链接：https://news.ycombinator.com/item?id=48920475

HN 讨论很快从 DC5 宕机转向 Telegram 基础设施信任问题。有人引用调查报道，称 Telegram 的基础设施管理与俄罗斯安全机构相关人员存在联系；也有人泛化到各国情报机构可能通过普通雇佣渠道进入关键公司。另一些评论则继续讨论不同 DC 服务俄罗斯、中国等用户时的稳定性和透明度。

---

## 8. 温哥华警局网站的快速逃离按钮 (Vancouver PD website features Quick Escape button that wipes itself from history)



温哥华警局网站上有一个面向受害者安全的 Quick Escape 按钮，用户可在浏览家庭暴力、人身贩运等敏感页面时快速离开，并尽量清除浏览痕迹。采集到的正文显示网站包含受害者服务、亲密伴侣暴力、人身贩运、诈骗防范等栏目。HN 标题关注的是这个按钮会把自己从历史记录中清掉，体现公共服务网站在高风险场景下对用户现实处境的考虑。

原文链接：https://vpd.ca/

论坛讨论链接：https://news.ycombinator.com/item?id=48914644

HN 讨论把它和英国 gov.uk 的“Exit a page quickly”设计模式联系起来。评论者提到 gov.uk 允许连续按 Shift 触发快速离开，并解释选择这个交互的原因。大家关注的不只是按钮本身，而是如何在浏览器历史、广告追踪、共享设备和施暴者监控等限制下，为脆弱用户设计真正可用的安全出口。

---

## 9. 睡眠规律性比时长更能预测死亡风险 (Sleep regularity is a stronger predictor of mortality risk than sleep duration (2023))


这项发表在 SLEEP 的前瞻性队列研究使用 60,977 名 UK Biobank 参与者超过 1,000 万小时的加速度计数据，计算睡眠规律指数，并追踪最长 7.8 年后的死亡情况。公开摘要显示，更高睡眠规律性与更低的全因死亡、癌症死亡和心血管代谢死亡风险相关，且在模型比较中，睡眠规律性比睡眠时长更能预测全因死亡风险。作者认为，规律的睡眠-觉醒时间可能是改善健康和生存率的简单目标。

原文链接：https://academic.oup.com/sleep/article/47/1/zsad253/7280269

论坛讨论链接：https://news.ycombinator.com/item?id=48919363

HN 评论没有集中在统计方法，而更多转向个人睡眠经验。置顶评论讲述补镁改善失眠，并批评医生倾向用安眠药处理症状而非寻找原因。讨论由此延伸到压力、营养、作息、补剂和医学建议的边界，也有人提醒个体经验不等于普遍证据。

---

## 10. 一名开发者写下抑郁与沟通的重要性 (Prioritize mental health, and why communication is so important)


作者 Ramon van Sprundel 写下自己与严重抑郁共处的经历：从实习、学生工作到正式职业发展，他反复经历开始时充满信心、几周后迅速失去动力的循环。他承认职业正在受影响，也反思自己过去没有及时沟通、没有让同事和团队理解真实状态。文章的重点不是提供简单解决方案，而是提醒技术工作者优先照顾心理健康，并在无法完成任务、犯错或陷入低谷时更早、更诚实地沟通。

原文链接：https://ramones.dev/posts/mental-health/

论坛讨论链接：https://news.ycombinator.com/item?id=48919198

HN 讨论里，评论者提醒作者如果受到神经多样性或心理健康问题影响，不能指望某天靠更好的计划系统突然恢复。有人指出 HN 评论不适合“调试”心理状态，真正需要的是专业支持、现实支持网络和可持续的工作安排。整体氛围比普通技术讨论更谨慎，也更关注边界和同理心。
