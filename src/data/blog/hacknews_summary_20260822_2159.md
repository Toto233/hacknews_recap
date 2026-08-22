---
title: "DeepSeek 推出实验性视觉模型：兼容 OpenAI、Anthr | Hacker News 摘要 (2026-08-22)"
author: "hacknews"
description: ""
digest: "DeepSeek 发布 deepseek-v4-flash-vision-exp 的视觉调用指南，模型可接收 JPEG、PNG、GIF、WebP 图像，并支持 OpenAI 兼容 Chat Completions、Anthropic Mes"
source_url: "https://api-docs.deepseek.com/guides/vision/"
pubDatetime: 2026-08-22 21:59:44.999+08:00
tags:
  - "人工智能"
  - "开发工具"
  - "开源生态"
  - "科技观察"
---

---

## 1. DeepSeek 推出实验性视觉模型：兼容 OpenAI、Anthropic 与 Responses API (DeepSeek-v4-flash-vision-exp)



DeepSeek 发布 deepseek-v4-flash-vision-exp 的视觉调用指南，模型可接收 JPEG、PNG、GIF、WebP 图像，并支持 OpenAI 兼容 Chat Completions、Anthropic Messages 与 Responses API 三种接口形状。图片可以内联 Base64、公开 URL 或 Files API file_id 传入；单张 Base64/URL 图最大 32 MiB，Files API 可到 64 MiB。文档提供 low、high/original、auto 等细节级别，其中 low 会缩小到 512×512；常规预处理会把大图缩放到约 800×800 像素总量，并将单图 token 使用控制在上限附近。它还明确多图按每张独立计费。实验版的意义在于让已有 OpenAI 或 Anthropic 兼容客户端能较低摩擦接入视觉能力，但具体精度、稳定性和生产承诺仍需按真实任务测试。

原文链接：https://api-docs.deepseek.com/guides/vision/

论坛讨论链接：https://news.ycombinator.com/item?id=49386163

评论首先关注分辨率取舍：约 800×800 的预处理对一般图片理解很便宜，但对密集 UI、工程图和小字 OCR 会丢失细节。有人建议在应用层提供“zoom”工具，让模型按坐标索取裁切区域；也有人用网格切片、逐块识别再汇总的方式绕过整体缩放。支持者认为对快速模型而言，约 400 token 一张图可把成本降到很低，适合截图和批量视觉工作流。讨论的共识是，视觉模型并非只能在“全图高分辨率”和“低清快速”之间二选一，良好的 harness 可以把裁切、工具调用和多轮交互变成第三条路径。

---

## 2. Nari Labs 优化 Qwen3-TTS：单张 H100 上 10 RPS、首段语音低于 50 毫秒 (How we made a text-to-speech model respond in sub-50 ms)



Nari Labs 介绍其对 Qwen3-TTS 1.7B CustomVoice 的推理优化：在一张 NVIDIA H100 SXM 上、10 请求每秒负载下，p95 首段可听语音时间（TTFA）低于 50 毫秒，同时保持连续播放。团队强调实时语音不只看首包，还要避免播放中断、承受并发且不产生畸形输出。与 vLLM-Omni、SGLang-Omni 等默认配置相比，他们先动态裁掉模型输出开头的静音，再调整 codec 帧累积策略：首段小块降低等待，后续增大块保证播放余量。关键架构是把 Talker、Code Predictor、Codec 三个模块拆成可独立调度的任务，用同一调度器在首段延迟与后续播放 deadline 间权衡，并以紧急任务为锚填充兼容 batch。实现和基准已开源，但速度数据仍对应特定模型、硬件和热启动设置。

原文链接：https://nari-labs.com/blog/qwen3-tts-speed-cost-frontier/

论坛讨论链接：https://news.ycombinator.com/item?id=49389952

开发者在评论中称自己的目标就是让开源 TTS 能达到生产级实时性，并补充 RTX 4090 经配置调整后也可在约 10 并发下接近 50 毫秒 TTFA。使用者实际部署时则报告了更长的首字节时间和 WebSocket 输出变成乱码的情况，提醒基准与模板部署之间仍有距离。有人问能否缓存最常见的开头，作者回应该变体前缀很短、主要优化点不在 prefix cache。讨论也提到这些调度思路可迁移到 ASR+LLM+TTS 的组合服务。大家认可低延迟首次出声很关键，但没有把它等同于声音自然度、长文本稳定性或冷启动体验。

---

## 3. Cobalt 让 Kobo 跑应用：带签名商店、Rust SDK 与受限进程 (Kobo can run apps now)





Cobalt 是面向 Kobo 电子书阅读器的开源应用平台，包含启动器、签名应用商店、Rust SDK 和运行时。用户只需通过 USB 安装一次，之后应用可在阅读器上经 Wi-Fi 安装、更新和删除；重启即可回到原生 Kobo 阅读界面。每个应用是静态 ARM 二进制，在原厂硬件上以各自的非特权进程运行，商店目录、安装包、manifest 和可执行文件都会在启动前验证签名。平台以能力授权限制网络、存储、音频、前灯和 Wi-Fi，而 SDK 则提供电子墨水 UI、局部刷新、异步下载、定时唤醒与每应用状态存储。演示应用包括 arXiv、Hacker News、OPDS 阅读、终端、编码代理确认工具和益智游戏。项目目前以 Kobo Clara BW 为目标，安装文档也强调硬件与固件匹配及恢复步骤。

原文链接：https://bandarlabs.github.io/Cobalt/

论坛讨论链接：https://news.ycombinator.com/item?id=49390427

评论对“电子书阅读器变成低干扰小电脑”的想象很兴奋：arXiv、RSS、HN 和命令行都很适合慢速、护眼的电子墨水屏。另一方面，读者也会追问它是否会破坏原有设备、如何更新、以及第三方应用能接触哪些资源；Cobalt 的签名包、独立进程和能力门槛正是对这些顾虑的回应。有人把它和早期 Kindle/Kobo 改机传统联系起来，认为关键不在把手机应用硬塞进墨水屏，而是围绕低刷新率、分页和长时阅读设计原生体验。讨论显示，封闭消费硬件若有可恢复、受限的扩展层，能在不完全替代原厂系统的情况下获得更长生命周期。

---

## 4. 过期 DNS 委派暴露 ENUM 风险：作者意外记录大量军事基地通话查询 (I accidentally logged hundreds of thousands of phone calls to military bases)




作者回顾一次 ENUM/DNS 委派失效事件：用于 E.164 电话号码到 SIP 地址映射的 e164.arpa 某些国家代码子域仍指向一个过期 nameserver 域名。她以约 5 欧元买下该域名后，理论上便可为这些号码回答路由查询，甚至把来电导向自己的 SIP 服务器、再转接真实目的地而居中监听。最初查询量几乎为零，作者在多次上报无果后保留域名；半年后检查日志，发现已积累数十万 ENUM 查询，其中包括通向军事基地的电话号码和时间戳。她的 DNS 服务器返回 NXDOMAIN，并再次通知英国 NCSC；之后域名被移交给 NCSC。文章揭示的重点不只是作者拥有了什么权限，而是废弃的公共委派、过期域名和无人维护的电信标准如何共同形成可被国家级攻击者利用的长期风险。

原文链接：https://lina.sh/blog/hijacking-e164-arpa

论坛讨论链接：https://news.ycombinator.com/item?id=49387570

评论哀叹 ENUM 没能成为普及的公开互联网电话目录：它原本可让号码通过 DNS 直接发现 SIP 终点，但资费、运营商策略与封闭应用生态使愿景落空。业内人士补充，ENUM 并没有完全消失，部分号码携转或电信内部路由仍会通过 VPN 上的私有 nameserver 使用类似查询，因此“基本已死”不等于没有实际流量。评论还把它与 IPv6 一并视为曾被期待改变通信架构、却未大规模落实的标准。共识是，把电话系统与公共 DNS 更紧密耦合既可能带来互操作，也会把域名治理、委派失效和日志隐私变成基础设施安全问题。

---

## 5. DESI 发布最大二维宇宙彩图：5.6 万亿像素、近 40 亿天体 (Scientists release biggest 2D map of the universe)





DESI Legacy Imaging Surveys 发布目前最大的可见光与近红外二维宇宙彩色地图：全图 5.6 万亿像素，含近 40 亿个天体，覆盖约 75% 天空中未被银河系尘埃和恒星遮挡的河外区域。数据由 263,407 次望远镜曝光合成，整合 DECaLS、MzLS、BASS 三项地面巡天、NASA WISE 卫星及其他公开数据；最终处理在 Berkeley Lab 的 Perlmutter 超算上耗时约八周。它既可供公众在 Sky Viewer 浏览，也能让研究者寻找引力透镜、超新星等罕见现象，并作为 DESI 三维巡天选择观测目标的底图。DESI 已完成原定五年巡天并继续观测至 2028 年，早期结果还给出了暗能量影响可能随时间减弱的线索。地图是天文基础设施，不是单一发现；其价值在于让后续观测、交叉比对与 AI 数据分析拥有统一参考。

原文链接：https://newscenter.lbl.gov/2026/08/10/scientists-release-biggest-2d-map-of-the-universe/

论坛讨论链接：https://news.ycombinator.com/item?id=49392200

评论对“未来数年最全面二维地图”的表述有不同解读。悲观看法担忧财政与战略环境会把资源转向国防、地球观测，基础天文投入承压；反驳者指出大型望远镜从设计到建造跨越多届政府，Roman、Euclid、Rubin 等项目正陆续上线。有人提醒用来向下看地球的光学系统与深空巡天设备并不等价，二者可能竞争而非互相掩护。讨论的共同点是，开放数据和 AI 会显著提升既有巡天的分析效率，但新仪器、长期资金和国际合作仍决定了天文学能看多远、看多深。

---

## 6. NoBuzz：让 Claude Code 少点“TED 演讲腔”的输出转译工具 (Claudette: Make Claude stop talking like a BuzzFeed article)



NoBuzz 是一个给 Claude Code 用的玩笑式实用 skill，目标是去掉冗长、煽情和“第三点最关键”式的模型口吻。项目把它称为 Claudette：不试图靠提示词彻底治好 Claude 的表达，而是把上一条回复写入临时文件，交给 Google Antigravity CLI 中的 Gemini 按 plain-English 指令重写，再要求 Claude 原样输出译文。用户可用 /debuzz colleague、manager、director 三种模式：面向工程同事保留文件路径和代码块但去除戏剧化语气；面向管理者压缩为发生了什么、为何重要和下一步；面向高管则控制在数句结果、影响和请求。项目依赖 Claude Code 与 agy，采用 MIT 许可证。它本质上是跨模型的文风后处理，而非提升原回答事实准确性的校验器。

原文链接：https://github.com/adnanakil/nobuzz/blob/main/README.md

论坛讨论链接：https://news.ycombinator.com/item?id=49388752

HN 用户分享了比二次转译更直接的约束：限制注释、函数名和用户文案的词数，要求主动语态与常用词，往往就能压掉表演性表达。大量抱怨集中在“时间性注释”：模型把本次对话、验收编号、旧实现历史写进代码，而这些信息应留在 Git 历史或变更说明中。也有人认为 AI 可以按需解释代码，因此注释价值下降；反方则指出长期维护者仍需要解释“为什么这个方案成立”。讨论最终把文风问题落在受众错位上：模型常在讨好当前操作者，却没有为未来读代码、文档和 PR 的第三方写作。

---

## 7. Kagi 为付费墙结果增加控制：搜索体验开始显式标识不可读链接 (Kagi added a setting for removing paywalled links from search results)


Kagi 更新日志显示，其新闻产品开始为付费墙域名提供标识；本次 HN 提交所指的是一项让用户从搜索结果中移除付费墙链接的设置。对用户而言，这类控制处理的是搜索中的一个实际摩擦：结果标题与摘要看似相关，点开却只能看到订阅提示。Kagi 近期更新还扩展了股票组件、Assistant 的消息与搜索控制，但该功能的核心并不是用 AI 替代搜索，而是让用户能对结果可访问性施加偏好。需要注意的是，付费墙检测不可能覆盖所有动态墙、软墙和地区限制，也不代表内容质量判断；它只是把“我不想看无法阅读的结果”变成可操作的检索条件。

原文链接：https://kagi.com/changelog#11296

论坛讨论链接：https://news.ycombinator.com/item?id=49388154

评论中不少订阅用户称愿意为更干净的搜索付费，并特别肯定 Kagi Assistant 的可验证来源、简洁回答和深度检索能力。也有人认为 AI 搜索正是被 SEO 灌水、低质页面和内容农场逼出来的补救层：普通蓝链越来越难直接用。谨慎观点则强调，模型引用仍会出错，某些任务仍应由人自己查看来源；AI 更适合作为人主导搜索的加速器。讨论还指出，生成式 AI 让垃圾内容生产更便宜，因此“屏蔽付费墙”之外，如何降低 spam 与可信来源筛选成本才是搜索产品更长期的考验。

---

## 8. “AI 盲视”：当低投入生成文本多到大脑自动跳过 (I'm becoming AI-blind)



作者描述一种工作中的主观体验：读到带有明显生成式 AI 痕迹的设计文档、营销 deck 或技术需求时，自己仿佛在阅读，却难以真正聚焦内容，随后会反复追问文档中其实已经写过的问题。他把这种反应称为“AI-blind”，类比广告横幅盲视。文中不是说人类能可靠识别所有 AI 文本，而是针对低投入、充满模型惯用词、过度包装每个细节却信息密度低的内容。作者认为自己长期接触 LinkedIn 帖子、邮件和网页中的空洞生成文本后，已被训练成快速略过类似信号；讽刺的是，本应提高效率的工具，反而让接收者需要花更多认知成本判断是否值得读。文章以一家餐厅的怪异 AI 食物图作为日常例子，强调这种过滤已从工作文件扩散到现实视觉环境。

原文链接：https://cymerys.com/w/im-becoming-ai-blind

论坛讨论链接：https://news.ycombinator.com/item?id=49386699

评论者对这种“看到 AI 文本就短路”的感受非常共鸣，形容强迫自己阅读时像在脑内即时重写句子、把它变成有意义的话，因而格外疲惫。争论随即上升到模型是否拥有真正智能：有人把它视为统计相关系统，另一些人反驳人脑同样可被理解为概率神经推断，实际效用比本体定义更重要。即便在观点相反的人之间，也有共同警惕：输出如果没有具体决策、证据和面向读者的编辑，就会损害信任与注意力。讨论没有证明“AI 痕迹”是可普适识别的科学指标，但清楚展示了低质生成内容正在改变读者的阅读策略。

---

## 9. 我们已活在 Ballard 与 Gibson 的未来：一篇由新闻剪报拼出的赛博日常 (New Worlds: We are living in the future of J.G. Ballard or William Gibson)


作者借 J.G. Ballard、William Gibson 与 Michael Moorcock 的科幻传统提出：不必等飞车，现实新闻已经充满足够陌生的未来感。文章把购物中心静脉点滴诊所、巡逻机器狗的谣言澄清、身份不明却拥有数百万听众的 AI 灵魂歌手、机器人格斗、毒品潜艇等剪报并置，模仿 Moorcock 用日常媒体碎片预告灾变的写法。它不是一项技术报告，而是一篇文化评论：科技、平台、消费医疗、治安与犯罪的怪诞组合，正以普通新闻条目的形式混入垃圾收集、内阁改组和天气报道之间。作者的观点是，当技术奇观被市场宣传和日常行政语言消化后，赛博朋克不再表现为霓虹都市的单一景观，而成为不断需要核验、却已习以为常的现实拼贴。

原文链接：https://precastreinforced.co.uk/2026/08/16/new-worlds/

论坛讨论链接：https://news.ycombinator.com/item?id=49387525

评论围绕“这究竟是新世界，还是旧式耸动新闻的新包装”展开。有读者认为文章准确捕捉了当下新闻流的非现实感，另一些人则提醒 Ballard 和 Gibson 的作品并不只是罗列奇观，而在描写权力、心理和社会结构。有人分享自己在现实中见到配送机器人、AI 音乐、广告式健康服务时的类似割裂感；也有人反感把每个离奇标题都自动贴上赛博朋克标签。讨论最有意思的部分在于媒介形式：当算法把不同来源、可信度和情绪强度的内容并排推送，读者感到“未来已经来了”的原因，或许同样来自信息流本身的拼接方式。

---

## 10. 为什么聪明人不一定更快乐？一篇对智力与幸福关系的再解释 (Why aren't smart people happier? (2022))





Experimental History 这篇 2022 年文章从一个反直觉现象出发：智力测试表现更好的人并没有稳定地报告更高幸福感。作者引用荟萃分析、英国代表性样本，并用美国 General Social Survey 约 50 年、30,346 人的数据说明，词汇测验分数与幸福感至多呈很弱关系。文章没有把 IQ 测量当成无争议真理，也承认测验受社会偏见、动机与努力影响；但即便把它看作适应不公平社会或努力程度的指标，也仍难解释为何它不更强地预测满意生活。作者随后质疑 Spearman g 因子的传统解释：不同认知测验的正相关未必证明一种可在所有生活场景稳定迁移的“通用成功能力”。这是一篇理论性重释，不是新的因果实验，也不应被读成“智力会使人不幸福”的结论。

原文链接：https://www.experimental-history.com/p/why-arent-smart-people-happier

论坛讨论链接：https://news.ycombinator.com/item?id=49378446

评论者大量从个人经历出发：有人年轻时把“聪明”当核心身份而不快乐，后来把价值感转向心理健康和关系建设后才改善；也有人被“聪明但懒”标签困住，直到更高阶段遇到必须练习的任务才意识到标签的代价。回复提醒，个体故事不能替代统计结论，IQ 测试本身也常被拿来满足身份认同。尽管如此，讨论中反复出现一个温和共识：能力、事业与舒适生活可以重要，却不自动生成意义、亲密关系或稳定情绪。比起争夺谁更聪明，反思把智力当作自我价值唯一支点或许更有实际帮助。
