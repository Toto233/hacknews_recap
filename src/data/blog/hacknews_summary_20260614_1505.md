---
title: "美国政府要求 Anthropic 暂停 Fable 5 和 Myth | Hacker News 摘要 (2026-06-14)"
author: "hacknews"
description: ""
digest: "Anthropic 发布声明称，美国政府以国家安全权限下达出口管制指令，要求暂停所有外国国民访问 Fable 5 和 Mythos 5，无论这些人位于美国境内还是境外，甚至包括 Anthropic 内部的外籍员工。由于实际执行上很难只按国籍"
source_url: "https://www.anthropic.com/news/fable-mythos-access"
pubDatetime: 2026-06-14 15:05:26.360+08:00
tags:
  - "AI监管"
  - "AI安全"
  - "隐私统计"
  - "本地模型"
---

---

## 1. 美国政府要求 Anthropic 暂停 Fable 5 和 Mythos 5 访问 (Statement on US government directive to suspend access to Fable 5 and Mythos 5)


Anthropic 发布声明称，美国政府以国家安全权限下达出口管制指令，要求暂停所有外国国民访问 Fable 5 和 Mythos 5，无论这些人位于美国境内还是境外，甚至包括 Anthropic 内部的外籍员工。由于实际执行上很难只按国籍精确限制，公司选择临时关闭所有客户对这两个模型的访问，其他 Anthropic 模型不受影响。政府信函没有给出详细理由，Anthropic 理解为相关部门认为 Fable 5 存在某种可被绕过安全护栏的 jailbreak。公司回应称，演示中识别的是少量已知、较轻微漏洞，且其他公开模型也能发现类似问题；Fable 发布前已经经过美国政府、英国 AISI、第三方和内部团队数千小时红队测试。文章核心不是模型能力本身，而是前沿 AI、网络安全、出口管制和商业可用性第一次以非常直接的方式撞在一起。

原文链接：https://www.anthropic.com/news/fable-mythos-access

论坛讨论链接：https://news.ycombinator.com/item?id=48511072

HN 讨论规模很大，很多人认为 Anthropic 长期强调自家模型危险性，最终可能被监管者按危险品对待。有人把它视为政府惩罚性动作，也有人怀疑是公关或政策博弈。争议集中在两个问题：Fable/Mythos 是否真的构成独特风险，以及一家美国 AI 公司是否能在没有清晰细节的情况下被迫全球关停前沿模型。

---

## 2. Fable 被禁后，开发者感到一片阴影压了下来 (There is a shadow hanging over this Fable thing)



这篇个人文章从用户侧记录了 Fable/Myt​​hos 被暂停访问的冲击。作者原本只是周五晚上让 Agent 帮自己做一些 HTML 小游戏，突然发现模型报错“不存在”。他起初以为是登录、额度或自研 Rust Agent harness 出了问题，直到朋友提醒“政府禁了 Fable”。文章引用 Anthropic 声明，指出美国政府要求禁止任何外国国民访问 Fable 5 和 Mythos 5，这在全球 SaaS 和跨国团队语境下几乎无法精细执行，结果就是模型被整体关停。作者担心的不是某一次工具不可用，而是这种先例会给 AI 开发生态投下长期阴影：如果前沿模型可以因为模糊的国家安全理由突然消失，开发者就很难把工作流、产品和个人创造力稳定建立在其上。

原文链接：https://12gramsofcarbon.com/p/tech-things-there-is-a-massive-shadow

论坛讨论链接：https://news.ycombinator.com/item?id=48513536

讨论一开始被作者提到的 AI 小游戏引向 game design：不少人认为 LLM 能快速生成代码，但不等于能设计好玩的游戏。随后话题回到 Fable，被禁事件让很多人重新审视依赖闭源模型的风险。有人认为这是政策噪音，有人认为这是前沿模型商业化必然遇到的国家能力边界。

---

## 3. 安全 Agent 在 FFmpeg 中发现 21 个零日漏洞 (Twenty One Zero-Days in FFmpeg)




Depthfirst 称其生产级自主安全 Agent 在 FFmpeg 中发现了 21 个零日漏洞，并能生成可复现的 PoC 输入来验证发现，成本约 1000 美元，低于传统深度分析的量级。FFmpeg 是全球部署最广的软件组件之一，浏览器、流媒体和各种后端系统都会用它处理复杂、非可信媒体文件，因此一直是零点击攻击的重要目标。它同时也是一个安全研究硬骨头：约 150 万行高优化 C 代码，支持大量格式，经历了二十多年 fuzzing 和人工审计。文章把安全 Agent 和普通 coding Agent 区分开来：后者是交互式写代码，前者要从威胁建模开始，识别攻击面、追踪攻击者可控输入、审计解析器，并产出具体触发样本。Depthfirst 还声称探索了部分问题的可利用性，并开发了 RCE exploit primitive。

原文链接：https://depthfirst.com/research/21-zero-days-in-ffmpeg

论坛讨论链接：https://news.ycombinator.com/item?id=48510046

HN 评论一方面承认这是 LLM 安全能力的有力演示，另一方面提醒 FFmpeg 长期就是内存破坏漏洞高发区，任何处理不可信媒体的部署都应该沙箱化。还有维护者视角的讨论：开源项目经常收到漏洞披露，却缺少足够多人帮忙修补，AI 扫出更多 bug 之后，修复和协调压力会更大。

---

## 4. 美国商务部禁用 Census 统计产品中的噪声注入 (Noise infusion banned from statistical products published by Census Bureau)


这篇文章解释美国商务部下令禁止 Census Bureau 和 Bureau of Economic Analysis 在统计产品中使用“noise infusion”意味着什么。统计机构要从保密原始数据中发布有用数字，同时不能泄露个体信息，传统方法包括抑制、泛化、抽样、交换、贡献限制和加噪声。其中，贡献限制加上精心校准的噪声是差分隐私的重要组成部分，也是科学界广泛认可的隐私保护金标准。作者回顾说，美国人口普查曾长期依赖数据交换，但后来发现用公开统计重建个体记录并不难，于是 2020 年 Census 采用差分隐私，不是因为数学好看，而是在能抵御重建攻击的方案中保留了最多数据效用。禁用噪声听起来像提高准确性，实际可能让统计机构在隐私和可发布性之间失去关键工具。

原文链接：https://desfontain.es/blog/banning-noise.html

论坛讨论链接：https://news.ycombinator.com/item?id=48517377

讨论里有参与人口普查的人担心，缺少隐私保护会进一步削弱公众信任，尤其是在对政府不信任已经很高的社区。也有人认为 Census 应该只做人头统计，但反驳者强调这些数据是公共政策、研究和资源分配的重要基线。争议核心是：没有可靠隐私保护，更多人可能拒答或提供低质量数据，最终反而伤害统计质量。

---

## 5. Google 支持用退役手机搭低碳计算集群 (A low-carbon computing platform from your retired phones)


Google Research 介绍了 UC San Diego 在做的“phone cluster computing”项目：把退役智能手机的主板拆出并组成集群，重新部署为通用计算平台。计算的碳足迹不仅来自运行时用电，也来自硬件制造阶段的 embodied carbon；提高能效和使用清洁能源主要解决前者，而延长设备寿命可以减少后者。Google 支持该校建设一个由 2000 台 Pixel 手机组成的数据中心，为数百名研究人员和学生提供低成本、低碳云计算。文章指出，现代手机的单线程性能已经接近甚至超过一些服务器核心，但每台手机的核心数、内存和 I/O 都有限，因此适合的任务必须能拆分、能适应 8 到 12GB 内存约束。项目价值在于把消费电子废弃物重新纳入计算基础设施，而不是把旧手机只看成回收材料。

原文链接：https://research.google/blog/a-low-carbon-computing-platform-from-your-retired-phones/

论坛讨论链接：https://news.ycombinator.com/item?id=48515336

HN 讨论很快转向手机被迫报废的根因：专有固件、锁定系统、短安全更新周期和不可维修设计。有人指出，如果 Google 能把旧手机刷成安全的集群节点，为什么普通消费者不能获得同样能力。另一个问题是 I/O 和运维细节：这些主板如何联网、供电、散热和更新，原文讲得还不够具体。

---

## 6. RTX 5080 加 3090，本地 Qwen 3.6 跑到 80 tok/s (RTX 5080 and RTX 3090 Setup: 80 Tok/s on Qwen 3.6 27B Q8)


作者分享了一套混合 GPU 本地 LLM 配置：RTX 5080 加翻新的 RTX 3090，用来运行 Qwen 3.6 27B Q8，并达到 80 tokens/s 左右。起初他只有 5080，后来发现 16GB 显存限制明显，于是买了 24GB 的 3090，先用 Q4 量化跑到约 30 tok/s，再借助 MTP 提升到 50 到 60 tok/s。为了同时利用两张不同代际显卡，他选择支持 PCIe x16 拆成 2x8 的 Asus Prime X570-Pro，用 PCIe 4 riser 安装 5080，并在 BIOS 中关闭 CSM、打开 Above 4G Decoding 和 ReSize BAR。文章还记录了 NVIDIA 驱动、不同显卡无法使用某些 P2P 优化、nvidia-open、拓扑检查和实际推理调参。它不是一篇产品评测，而是一份本地高性能推理的硬件踩坑笔记。

原文链接：https://imil.net/blog/posts/2026/rtx-5080-+-rtx-3090-setup-80+-tok-s-on-qwen-3.6-27b-q8/

论坛讨论链接：https://news.ycombinator.com/item?id=48515454

讨论中有人表示类似配置已经让本地 Qwen Agent 在简单任务上比 Claude Code 更顺手，因为失败方式更直白，不会用华丽措辞掩盖胡说，也不太会把问题越搞越复杂。也有人指出，本地模型在上下文充足、任务边界清晰时很有竞争力，但开放式复杂任务仍然是 Claude/ChatGPT 更快到达目标。

---

## 7. Every Frame Perfect：任何一帧截图都应该说得通 (Every Frame Perfect)



Tonsky 借 Wayland 的“every frame is perfect”理念讨论 UI 细节：如果在应用运行的任意时刻截图，这一帧都应该有意义。用户看不到代码，只能通过界面判断软件质量；如果 UI 在加载、切换、动画中出现白屏、半成品内容、跳动布局、状态不一致或奇怪过渡，就会削弱信任。文章举了多个例子：动画起点和终点看似正常，但中间帧图标、占位符、光标或边框不同步；照片应用切换模式时图片和裁剪框运动不同步，让用户误以为内容发生了变化；YouTube 等复杂 DOM 架构下简单矩形移动也可能变得反直觉。作者的主张不是反动画，而是要求动画像精密工具一样帮助理解，而不是制造虚假的视觉感觉。

原文链接：https://tonsky.me/blog/every-frame-perfect/

论坛讨论链接：https://news.ycombinator.com/item?id=48516251

讨论对“逐帧完美”有保留。图形和影视背景的评论指出，人眼感知运动和静止帧不同，单独截图看起来错误的运动模糊或变形，可能在实时观看中最自然。因此大家更倾向于把文章理解为反对 jank、不同步和无意义过渡，而不是要求每个中间帧都像静态设计稿。

---

## 8. 计算机科学学位没死，坏的是入门招聘管道 (The computer science degree isn’t dead)



IEEE Spectrum 这篇职业文章反驳“CS 学位已经没用”的流行说法。作者承认近期美国 CS 毕业生失业率看起来比一些人文学科更高，但认为只看失业率会误导：如果同时考虑 underemployment 和早期收入，CS 与计算机工程仍是总体就业结果最强的专业之一。真正坏掉的是 entry-level 软件工程岗位的招聘管道。职位广告看似增长，但实际入门招聘大幅下降，ghost jobs 进一步制造市场繁荣假象。作者建议新毕业生不要只投冷申请，而要动用现实网络和推荐；接受创业公司这类风险对称的第一份工作；通过真实部署项目、开源贡献或为小企业解决问题来制造经验；并学习实际 AI 工程能力，如 RAG、embedding、向量数据库和生产集成，而不只是会用 Copilot 或 Cursor。

原文链接：https://spectrum.ieee.org/computer-science-degree-isnt-dead

论坛讨论链接：https://news.ycombinator.com/item?id=48470152

讨论里很多人强调学位的社会资本功能。没有学位直接入行的人提醒，学历不只是知识证明，也传递家庭资源、稳定性、圈层和“会玩游戏”的信号；这些在当下技术行业反而更重要。也有人认为大学的价值在于系统训练和人脉，而不是保证第一份工作。整体共识是：学位不是万能门票，但完全绕开它会失去很多隐性通道。

---

## 9. 开放源码 AI 必须赢，否则智能会变成租赁品 (Open source AI must win)


这个宣言式页面主张开源 AI 必须胜出，因为 AI 正在成为工作、教育、科学、软件、创造力、公共服务和国家能力的基础设施。如果智能只能从少数封闭机构租用，公众失去的不只是软件自由，而是操作自由：无法自由研究、构建、修复、部署、审计、适配、教学、保存和本地运行智能系统。作者担心闭源 API、远程平台、不断变化的服务条款、 opaque moderation、模型下架和价格调整，会让认知能力变成订阅经济。文章强调开放 AI 应保持可用、可理解、可复现、可本地部署、经济可行并由社区治理，即使今天的主导实验室、云平台、硬件商或开放权重提供者改变方向，也不应让社会失去运行智能基础设施的能力。

原文链接：https://opensourceaimustwin.com/?share=v2

论坛讨论链接：https://news.ycombinator.com/item?id=48511908

讨论从去中心化训练展开。有人设想用志愿者机器训练模型，但很快指出通信带宽、能效、互联和数据投毒都是巨大障碍；专业 AI 硬件不仅更快，也更省电、更适合大规模互连。支持者仍认为，哪怕无法快速训练 Fable 级模型，长期拥有分布式可访问能力也比永远只能租用封闭模型强。

---

## 10. Show HN：每天一洞的浏览器迷你高尔夫 (Show HN: Putt.day a daily mini golf game)



Putt.day 是一个每日迷你高尔夫网页游戏。截图显示它采用俯视 3D 风格，球道是绿色平台，周围有木质边框、水域、洞口和一些高低落差。玩法很直接：抓住球，向后拖动再松手击球；拖得越远力度越大。拖动球以外的位置可以转动视角，捏合或滚轮可以缩放。目标是在尽可能少的杆数内把球打进洞里；如果球落水，会回到之前的位置。游戏每天提供一个新球洞，第一次完成会计入成绩，过去日期可以在日历中回看。它可以理解为 Wordle 式每日挑战的另一种形式：不是文字谜题，而是一个轻量物理小游戏，每天给玩家一个固定关卡和可分享的成绩。

原文链接：https://putt.day/

论坛讨论链接：https://news.ycombinator.com/item?id=48510341

HN 讨论主要是玩法反馈。有人觉得滚动阻力太大，即使路线正确也很难打够远；默认摄像机角度有时会限制最大拉杆距离。也有玩家分享从墙面反弹、穿过城堡等路线。作者在评论里回应正在调整。另一些建议包括改进成绩卡展示、标记前进方向、减少进洞后视角迷失等。

