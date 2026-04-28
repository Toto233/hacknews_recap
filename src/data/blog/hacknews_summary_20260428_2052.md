---
title: 'GitHub Copilot 转向按量计费：AI 编程助手开始回到真 | Hacker News 摘要 (2026-04-28)'
author: 'hacknews'
description: ''
digest: 'GitHub 宣布 Copilot 所有计划将在 2026 年 6 月 1 日转向 usage-based billing。原先的 premium requests 计数会被 GitHub AI Credits 取代，每个计划包含一定月度额'
source_url: 'https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/'
pubDatetime: 2026-04-28 20:52:32.310+08:00
tags:
  - AI
  - 安全
  - 开源
  - 硬件
---

---

## 1. GitHub Copilot 转向按量计费：AI 编程助手开始回到真实成本账本 (GitHub Copilot is moving to usage-based billing)





GitHub 宣布 Copilot 所有计划将在 2026 年 6 月 1 日转向 usage-based billing。原先的 premium requests 计数会被 GitHub AI Credits 取代，每个计划包含一定月度额度，付费用户可购买额外用量。用量按 token 消耗计算，包括输入、输出和 cached tokens，并参考各模型 API 费率。GitHub 的解释是，Copilot 已从编辑器里的补全助手，变成能运行长时间、多步骤编码任务的 agentic platform，成本结构也随之变化。5 月初 GitHub 会先上线 preview bill experience，让用户和管理员提前看到预估成本。这个变化的实际含义是，Copilot 不再只是固定月费订阅，而是开始更接近云资源和模型 API 的计量逻辑；对重度 agent 用户、企业管理员和预算控制来说，计费可见性会变得和功能本身一样重要。

原文链接：https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/

论坛讨论链接：https://news.ycombinator.com/item?id=47923357

HN 评论对这个变化反应强烈。很多人质疑，为什么同样花 10 美元，Copilot 的额度必须当月用完，而直接买 API 或经由 OpenRouter 一类服务则更灵活。也有人指出 GitHub 公布的“API pricing”接近底层模型供应商价格，用户可能会降级 Copilot Pro，再用外部 API 处理超额需求。另一类讨论关注未来是否还会有进一步涨价或限制，因为一旦 Copilot 变成按 token 计费，用户对长任务、agent 循环和缓存命中都会更敏感。总体共识是，AI 编程工具的无限量订阅窗口正在关闭，真正的模型成本会逐步传导给用户。

---

## 2. 4TB 语音样本据称从 Mercor 泄露，AI 承包商的生物识别风险被摆到台面上 (4TB of voice samples just stolen from 40k AI contractors at Mercor)


ORAVYS 报告称，勒索组织 Lapsus$ 在 2026 年 4 月 4 日发布了 Mercor 数据泄露信息，数据量约 4TB，涉及超过 4 万名 AI 承包商的语音样本，并且可能与政府身份证件绑定。文章强调，这类泄露不同于普通录音泄露：干净的朗读语音、身份文件和平台账户关系组合在一起，会形成可被长期滥用的生物识别资料。受影响者可能面临声音克隆、身份冒用、语音验证绕过和诈骗素材训练等风险。文中还提到，已有承包商提起诉讼，认为平台以“训练数据”为名收集语音，却没有充分说明这些声音也可能成为永久性 biometric identifier。即使具体泄露细节还需要独立验证，这条新闻指出了 AI 数据劳工的新风险：他们交出的不是普通劳动成果，而是难以更换的身体特征。

原文链接：https://app.oravys.com/blog/mercor-breach-2026

论坛讨论链接：https://news.ycombinator.com/item?id=47919630

评论区最强烈的反应是对 ORAVYS 提供“免费分析前三个可疑样本”的讽刺：如果受害者担心 AI 公司持有自己的声音，现在又要把声音发给另一家 AI 安全公司。有人指出，Mercor 很可能也有“明确同意”的法律条款，问题不只是有没有 consent，而是承包商是否真正理解语音和身份证组合后的长期风险。讨论还提到，数据标注和验证任务本不一定需要如此高质量、可归因的声纹材料，但平台为了风控、培训或未来模型能力收集了过多敏感信息。总体共识是，AI 数据供应链里的工人隐私保护严重落后。

---

## 3. pgBackRest 停止维护：关键开源基础设施再次撞上赞助现实 (Pgbackrest is no longer being maintained)


pgBackRest 作者在项目 README 中发布 obsolete notice，宣布这个 PostgreSQL 备份恢复工具将不再维护，并请求后续 fork 选择新的项目名。pgBackRest 已维护 13 年，长期被用于可靠的 PostgreSQL 本地和云端备份恢复。作者说明，过去有企业赞助支持，但 Crunchy Data 被出售后，他一直在寻找能继续维护项目的岗位或赞助，都没有成功。维护 pgBackRest 需要处理 bug、PR、issue、用户支持和新功能，已经无法靠业余时间持续。与其让项目表面活着、实际无人负责，不如明确宣布停止维护。这个案例再次说明，数据库备份这类“没人想出事时才想起”的关键基础设施，经常依赖极少数维护者和不稳定赞助。

原文链接：https://github.com/pgbackrest/pgbackrest

论坛讨论链接：https://news.ycombinator.com/item?id=47919997

HN 评论里很多用户表达遗憾，有人提到自己刚用 pgBackRest 为 PostgreSQL 本地和云备份写了详细指南，实际使用体验很好。讨论很快转向开源维护的经济问题：关键工具承担生产风险，但维护者很难从中获得稳定收入。有人还把当前 AI 时代的压力带进讨论，认为开发者时间和预算都被更激进的交付预期和 token 成本挤压。也有人指出，企业收购后优先级变化、裁员和赞助中断，会直接影响这些底层项目。共识是，用户感谢作者多年投入，但也必须尽快评估替代方案、fork 可能性和备份策略风险。

---

## 4. SVG 清洗为什么这么难：Scratch 多年漏洞史说明黑名单路线走不通 (The woes of sanitizing SVGs)


这篇文章回顾 Scratch 长期遭遇的 SVG sanitization 问题。Scratch 会把用户生成的 SVG 内容解析到 `<svg>` 元素并短暂插入主文档，用于测量 bounding box 等操作；但只要攻击者控制的 SVG 进入主文档，就存在 XSS 和信息泄露风险。Scratch 过去的策略是不断增强解析和清洗逻辑，移除 `<script>`、危险属性、外部请求和各类边缘情况。作者认为这条路线本质上是 doomed，因为 SVG 是复杂、可执行、可联网、可引用外部资源的文档格式，靠不断追加黑名单很难覆盖全部浏览器行为。真正可行的方向是隔离和默认拒绝：用 sandbox、CSP、独立上下文、明确禁用网络和脚本，把不可信 SVG 当作主动内容处理，而不是假设它只是图片。

原文链接：https://muffin.ink/blog/scratch-svg-sanitization/

论坛讨论链接：https://news.ycombinator.com/item?id=47922957

HN 评论认可文章把 CSP 作为 HTTP 泄漏问题的可信修复路径。Simon Willison 提到一个实用细节：CSP 通常通过 HTTP header 设置，但在 `iframe srcdoc` 里也可以用 meta 标签设置，并且现代浏览器会把这些规则锁定，不允许不可信脚本再删除或篡改它。讨论还扩展到 sanitizer 的常见失败模式：开发者容易低估 SVG 的主动能力，把它当成图片处理；而浏览器特性、命名空间、外部引用和历史兼容行为会不断制造绕过。共识是，安全处理 SVG 不应依赖“清洗到安全”，而应优先隔离渲染环境。

---

## 5. FDA 批准首个遗传性听力损失基因疗法 (FDA approves first gene therapy for treatment of genetic hearing loss)


FDA 批准 Otarmeni（lunsotogene parvec-cwha），用于治疗由 OTOF 基因双等位变异导致的重度至极重度感音神经性听力损失患者。这是首个双 AAV 载体基因疗法，也是在 Commissioner’s National Priority Voucher 试点项目下获批的首个基因治疗产品。FDA 称，该疗法在 BLA 提交后 61 天获批，并与现代 FDA 历史上最快 BLA 批准速度并列。OTOF 相关耳聋此前没有疾病修饰治疗；Otarmeni 适用于保留外毛细胞功能且同侧未植入人工耳蜗的患者。其意义在于，它不是单纯放大声音的辅助设备，而是尝试通过基因递送恢复部分听觉通路功能。对遗传性耳聋治疗来说，这是从辅助补偿走向病因干预的重要节点。

原文链接：https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher

论坛讨论链接：https://news.ycombinator.com/item?id=47919733

HN 评论中有听障用户分享个人经历：从小佩戴助听器，年轻时以为影响有限，但随着年龄增长，越来越意识到在嘈杂环境中理解困难对社交和发展造成了长期影响。其他评论讨论听力损失与认知衰退、社交隔离之间的联系，指出听觉输入减少可能加速痴呆或与其高度相关。也有人关注这种基因疗法适用范围有限，只针对特定 OTOF 基因变异，不会覆盖多数年龄相关听损。整体讨论对进展持积极态度，但也清楚它不是通用“治耳聋”方案，而是精准遗传病治疗的一步。

---

## 6. macOS 27 可能移除 AFP，老 NAS 和 Time Capsule 用户需要提前准备 (Networking changes coming in macOS 27)


Eclectic Light 文章讨论 macOS 27 可能带来的网络变化。Apple 早在 OS X 10.9 Mavericks 就把 SMB 作为主要文件共享协议，并多次预告未来会移除 AFP 支持。随着 macOS Sequoia 15.5 再次出现相关警告，作者认为 macOS 27 可能成为真正切换的节点。受影响最大的是仍在使用 Time Capsule 或只支持 AFP、缺少 SMB3 的老 NAS 用户。移除 AFP 不会影响不升级的旧 Mac，但 Apple silicon Mac 一旦升级到 macOS 27，如果 AFP 被移除，就可能无法继续使用这些网络存储或 Time Machine 备份。文章还提到 TLS 等网络安全变化，整体提醒企业和长期维护环境不要等到 WWDC beta 后才发现兼容性问题。

原文链接：https://eclecticlight.co/2026/04/23/networking-changes-coming-in-macos-27/

论坛讨论链接：https://news.ycombinator.com/item?id=47923010

HN 评论指出 Time Capsule 自 2018 年起已停止支持，最后一代硬件更早在 2013 年发布，但仍有用户依赖 AFP 做 NAS 和 Time Machine 备份。有人解释自己继续用 AFP 的原因：在特定 NAS 上 AFP 比 SMB2/3 更快，SMB 对 symlink 的表示不是真正服务器端符号链接，时间戳精度和 Finder 行为也有差异。讨论说明这不是简单的“旧协议该淘汰”，而是很多家庭和小型办公环境依赖旧协议绕过 SMB 的兼容问题。共识是，AFP 迟早会消失，但 Apple 应该给足迁移提示，用户也需要尽早验证 SMB3 备份链路。

---

## 7. 把 Raspberry Pi Pico 变成完整音频 DSP (Fully Featured Audio DSP Firmware for the Raspberry Pi Pico)




DSPi 是一套面向 Raspberry Pi Pico、RP2040 和 RP2350 板子的音频 DSP 固件。它把廉价微控制器变成 USB 声卡和板载 DSP 引擎，支持房间校正、主动分频、参数均衡、时间对齐、响度补偿、耳机 crossfeed、音量平衡和多通道输出等功能。项目支持 16/24-bit PCM 输入，采样率包括 44.1、48 和 96 kHz，并能通过 S/PDIF 或 I2S 输出多个独立立体声槽位。作者希望 RP2040/RP2350 能成为“不到一杯咖啡价格的音频瑞士军刀”。这个项目的吸引力在于，它把通常需要专用 DSP 硬件或桌面软件完成的音频处理，下放到便宜、可编程、可嵌入的小板上，适合 DIY 音箱、耳机、桌面音频和实验性分频系统。

原文链接：https://github.com/WeebLabs/DSPi

论坛讨论链接：https://news.ycombinator.com/item?id=47901433

评论区很快出现实际音频 DSP 经验。有人讲述自己接手一对高端落地音箱，内置低音炮功放坏了后改用外部功放，并通过 CamillaDSP、CamillaFIR 和 UMIK-1 校准麦克风做房间扫频，再把 FIR 滤波应用到 Raspberry Pi 3B 上的音乐流，最终实现房间和音箱校正，声音明显变好，CPU 占用也不高。讨论说明 DIY 音频 DSP 的门槛正在降低，关键工具包括测量麦克风、滤波生成、低延迟处理和稳定输出。大家对 DSPi 的兴趣主要在于它把这些能力进一步压缩到更便宜、更嵌入式的硬件上。

---

## 8. Flipdisc：有声音、有惯性、不会发光的机械像素墙 (Flipdiscs)




Flipdiscs，也叫 flip dots，是一种用电磁脉冲翻转小圆片来显示两种颜色的机械显示技术，已有 80 多年历史。作者选择它来做办公室的大型互动墙面艺术，因为不喜欢 LED 屏幕的发光感。Flipdisc 的优点是可读性高、寿命长、能达到 25 到 60 fps，而且翻片时会发出类似雨点敲窗的声音。项目使用 9 块 Alfazeta 面板组成 3x3 网格，总计 84x42 个 disc，每块板包含 ATMEGA128、MELF 二极管等较老但可靠的硬件。文章详细记录了构建、软件、设计和后续计划。它的价值不在于实用显示密度，而在于把像素重新变成物理对象：每次刷新都有声音、延迟、机械运动和空间存在感。

原文链接：https://flipdisc.io

论坛讨论链接：https://news.ycombinator.com/item?id=47875795

HN 评论提到艺术家 BREAKFAST 使用 flipdiscs 创作过多件大型 kinetic artwork，也提到其商业化产品价格大约可到每平方英尺 2000 美元，接近中档 LED 墙模块。有人分享类似 “brixel” 旋转砖块像素的作品，把机械显示从平面点阵扩展成雕塑化表面。讨论也指出，这类作品成本高、维护复杂、分辨率低，但正因为它不是普通屏幕，才有独特的吸引力。总体评价偏向欣赏：flipdisc 是低信息密度但高物理质感的显示媒介，适合艺术、空间装置和慢变化可视化。

---

## 9. 盯墙恢复专注：重新给大脑留出无输入时间 (Men who stare at walls)



这篇文章介绍一种简单但困难的专注训练：工作时不使用屏幕娱乐；感到疲惫时，不刷手机、不看视频，而是坐着盯墙几分钟，让注意力恢复。作者把问题归因于现代人的信息过载：2008 年平均每天接收约 34GB 信息，若按论文中的年增长率粗略外推，如今可能达到 87GB。无论数字是否精确，现实感受是多数人长期处在高输入状态，疲劳后又用媒体刺激继续工作，导致更难恢复。盯墙的价值在于刻意制造低刺激间隙，让大脑从信息流中退出。它不是 productivity hack 的复杂系统，而是把被手机和娱乐填满的空白时间重新拿回来。

原文链接：https://www.alexselimov.com/posts/men_who_stare_at_walls/

论坛讨论链接：https://news.ycombinator.com/item?id=47920074

评论区提出一个有用概念：智能手机不只是偷走 attention，也偷走 disattention，也就是那些过去会让思绪自然游走的空白时刻。有人将其对应到 default mode network，认为不让大脑进入这种默认模式，会增加压力并降低长期专注能力。也有人回忆在没有手机的时代，排队、坐车和等待本来就是无结构思考时间。讨论并不认为盯墙能解决所有注意力问题，但认可它指出了一个被低估的成本：持续输入让人失去恢复、联想和整理思路的空间。

---

## 10. “我的蓝色是你的蓝色吗？”一个测量蓝绿边界的网页小实验 (Is my blue your blue? (2024))


Is My Blue Your Blue? 是一个娱乐性质的颜色命名测试，用来测量用户个人的蓝绿边界。网页会让用户连续判断颜色属于蓝还是绿，最后估计你的分类阈值。作者明确说明，这不是严格视觉科学实验：颜色感知需要校准设备，屏幕、手机、环境光、夜间模式和个人显示器差异都会影响结果；更准确的颜色沟通通常需要 Pantone 等物理色卡。尽管如此，在同一设备和光照下重复测试，应有较好的 test-retest reliability。这个项目的意义不在于诊断视力，而在于展示语言、文化和训练如何影响颜色分类。很多人以为颜色边界天然清楚，但实际命名系统会改变我们如何记忆和归类连续色谱。

原文链接：https://ismy.blue/

论坛讨论链接：https://news.ycombinator.com/item?id=47926861

HN 评论里不少人觉得测试有趣但也令人挫败，因为第二个颜色在他们看来明显是 cyan 或 turquoise，而不是必须在蓝和绿之间二选一。有人用橙色类比：如果从小被训练把 orange 当成独立颜色，就很难把它“舍入”为红或黄；同理，某些人对 cyan 有独立分类，某些人则会把它视作偏蓝或偏绿。讨论还涉及不同语言中颜色词的历史、显示器校准和文化训练。整体共识是，这个网页不适合严肃测量，但很好地暴露了颜色命名并非纯粹生理问题，而是感知、语言和习惯共同塑造的结果。

