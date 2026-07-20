---
title: "Qwen 3.8 宣布上线，称将开放权重 | Hacker News 摘要 (2026-07-20)"
author: "hacknews"
description: ""
digest: "阿里 Qwen 在 X 上宣布 Qwen 3.8 启动发布，并表示后续将开放权重。公告称该模型规模为 2.4 万亿参数、会持续演进，并把 Qwen3.8-Max-Preview 先行提供给 Token Plan、Qoder 与 QoderW"
source_url: "https://twitter.com/Alibaba_Qwen/status/2078759124914098291"
pubDatetime: 2026-07-20 20:21:06.355+08:00
tags:
  - "AI"
  - "开源"
  - "硬件"
  - "互联网"
---

---

## 1. Qwen 3.8 宣布上线，称将开放权重 (Qwen 3.8)



阿里 Qwen 在 X 上宣布 Qwen 3.8 启动发布，并表示后续将开放权重。公告称该模型规模为 2.4 万亿参数、会持续演进，并把 Qwen3.8-Max-Preview 先行提供给 Token Plan、Qoder 与 QoderWork 用户试用。该帖没有给出完整技术报告、训练细节或独立基准，因此当前可确认的是产品预告与预览入口，而不是对其性能定位的独立验证。

原文链接：https://twitter.com/Alibaba_Qwen/status/2078759124914098291

论坛讨论链接：https://news.ycombinator.com/item?id=48966120

讨论很快从模型本身转向开源竞争与地缘政治。有人批评社区对中国模型常先谈政治、后谈架构和实测；也有人要求发布方提供更透明的评测、权重和许可信息。共识是，开放权重若兑现会让第三方更容易验证其真正能力。

---

## 2. 用 1600 美元 ESP32 重做 12 万美元保龄球馆系统 (Show HN: I replaced a $120k bowling center system with $1,600 in ESP32s)


一位 SRE 与家人买下美国中西部一间废弃的八道保龄球馆后，决定重做老旧计分与控制系统。原系统在 2008 年安装时成本达到六位数；作者改用大量 ESP32、传感器与自建软件，将整套替换成本压到约 1600 美元。项目涉及球速与轨迹、球瓶识别、犯规线、动画以及针瓶机控制，展示了廉价微控制器和现代软件工具如何进入传统专用设备领域。

原文链接：https://news.ycombinator.com/item?id=48968606

论坛讨论链接：https://news.ycombinator.com/item?id=48968606

评论区既赞叹项目的工程跨度，也提醒保龄球设备的安全联锁、容错和长期维护比演示复杂得多。有人讨论摄像头识别与传感器方案，也有人关注旧商业系统高价背后的售后、认证和停机风险。

---

## 3. Claude Code 已在生产中使用 Rust 版 Bun (Claude Code uses Bun written in Rust now)


Simon Willison 观察到 Claude Code 2.1.181 及以后版本已经随产品使用 Rust 重写的 Bun。Bun 团队称 Linux 启动速度约快 10%，其余用户几乎无感；作者则通过二进制字符串、内置版本和 Rust 源文件路径验证了这一点。迁移的意义在于，底层运行时更换已进入数百万设备而没有明显扰动，工程上的“无事发生”反而说明兼容性工作做得足够好。

原文链接：https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/

论坛讨论链接：https://news.ycombinator.com/item?id=48966569

讨论认为从 Zig 转向 Rust 的关键收益是更好地处理内存生命周期，减少手工管理导致的一整类错误。也有人把它视为成熟基础设施的取舍：性能增益不一定显眼，但稳定性、可维护性和开发效率会在长期显现。

---

## 4. 卖出 2500 台 MIDI 录音器后，他说硬件没那么难 (What I learned selling 2,500 MIDI recorders: Hardware is not so hard)





Jamcorder 的作者回顾从软件背景进入硬件创业的经历：这款自动记录钢琴演奏的 MIDI 设备已售出 2500 台。出乎预料的是，电子、塑料、制造、履约和供应链没有成为最难的部分；他亲手组装首批 500 台，仅用四天且过程顺利。文章并非否认硬件复杂，而是强调小批量、可控产品和快速原型让个人团队能够把制造风险拆小。

原文链接：https://chipweinberger.com/articles/20260719-hardware-is-not-so-hard

论坛讨论链接：https://news.ycombinator.com/item?id=48966713

评论者指出硬件难度会随规模急剧上升：做十台与做百万台是两种问题，用户误用、跌落、兼容老设备和售后都会带来更多故障模式。大家认可作者的经验，但认为它更适用于目标清晰、规模有限、能够亲近用户的产品。

---

## 5. Transcribe.cpp 想统一本地语音转写的推理栈 (Transcribe.cpp)


Transcribe.cpp 是一个基于 ggml 的语音转写库，目标是支持最新转写模型，并为跨平台桌面与移动应用提供更统一的本地推理方案。作者认为当前开发者主要在 whisper.cpp 与 ONNX 之间选择：前者灵活，后者便于接模型，但纯 CPU 路径可能损失性能。该项目仍是 0.1.0，重点在模型支持、绑定方式和长期维护的可预期性。

原文链接：https://workshop.cjpais.com/projects/transcribe-cpp

论坛讨论链接：https://news.ycombinator.com/item?id=48963879

评论者希望它能覆盖少数语言的语音学转写，例如用国际音标记录未知语言，而不仅是把语音转换为已有语义文字。讨论也反映出离线 ASR 工具的长期需求：模型多、硬件多、应用端需要稳定接口。

---

## 6. Minecraft Java 版切换到 SDL3 (Minecraft: Java Edition now uses SDL3)





Minecraft Java Edition 的 26.3 Snapshot 4 更新引入 SDL3，意味着游戏的窗口、输入、音频和跨平台底层接口向新一代 SDL 迁移。对于普通玩家这更像一次幕后更新，但它会影响 Linux、macOS、Windows 与不同硬件上的平台兼容和后续维护。SDL3 的采用也让长期依赖 Java 与 LWJGL 生态的 Minecraft 客户端获得更现代的原生层基础。

原文链接：https://www.minecraft.net/en-us/article/minecraft-26-3-snapshot-4

论坛讨论链接：https://news.ycombinator.com/item?id=48967256

评论者特别提到 LWJGL 的绑定由 GTNH 模组社区成员参与完成，形成从原版到模组再回馈原版的链条。讨论也集中在老版本模组调试的困难，以及社区维护如何补足官方在兼容性和工具链上的空白。

---

## 7. 纽约拟要求 AI 修图房源必须披露 (NYC may require landlords and realtors to disclose the use of AI in listings)




纽约市长 Zohran Mamdani 团队发布“Rental Ripoff Report”，建议要求房东和地产经纪在房源使用 AI 或其他数字工具修改图片时进行披露。该建议属于报告中的监管方向，不等于规则已经生效。报告源于五区租客听证会，除 AI 修图外还涉及租客组织权、执法系统与不透明收费。政策关注点是远程租房者可能因被 AI 美化或虚构的照片而对实际居住条件产生误判。

原文链接：https://petapixel.com/2026/07/16/mayor-mamdani-says-landlords-cant-secretly-use-ai-images-to-advertise-properties/

论坛讨论链接：https://news.ycombinator.com/item?id=48962983

评论者称纽约房源平台已经出现大量 AI 布置图，家具比例甚至会扭曲房间尺度，因此支持至少强制说明。也有人希望披露要求扩大到面积等基础信息，并质疑仅披露是否足以防止误导。

---

## 8. 加入 IndieWeb 之后，我学到的事 (I joined the IndieWeb, here's what I learned)


作者用数月时间实践 IndieWeb，并整理出其三项核心承诺：内容归自己所有、与他人更好连接、自己掌控网站。IndieWeb 并不要求离开社交网络，而是反对把内容和关系完全锁在平台孤岛中。文章记录了作者实际采用、放弃和认为有价值的组件，试图把一组看似零散的协议与个人站点实践还原为更健康网络的一种路线。

原文链接：https://en.andros.dev/blog/0b8e451e/i-joined-the-indieweb-heres-what-i-learned/

论坛讨论链接：https://news.ycombinator.com/item?id=48966984

批评者认为 IndieWeb 的协议、工具和术语太多，要求普通用户接触命令行、Docker 或手写 HTML 反而制造新门槛。支持者则强调自主发布与互操作的重要性。争议焦点不是价值观，而是如何把技术自由变成真正可用的一键体验。

---

## 9. 英国花园 15 年后终于长出香蕉 (Bananas sprout in Rayleigh Garden UK after 15 years)


英国雷利一处花园里，一株栽种了约 15 年的香蕉终于结出果实。英国气候通常不足以让香蕉稳定结果，因此这件小事既与微气候、耐寒品种和长期园艺照料有关，也带着一点对气候变化与极端天气的联想。报道把它作为地方园艺新闻呈现：花园主人多年等待后终于看见热带植物在本地结实。

原文链接：https://www.bbc.com/news/articles/cvg8edqq5g5o

论坛讨论链接：https://news.ycombinator.com/item?id=48968063

评论区从这则趣闻延伸到香蕉如何从原生地被人类长期传播、适应不同环境，并分享相关长篇纪录片。也有人讨论英国园艺条件、温室和品种选择，整体气氛轻松。

---

## 10. Castor：从网页提取视频并实时投到电视 (Better and Cheaper Than IPTV)


Castor 是一个开源工具：给它任意网页地址，它会尝试找到视频、提取流、实时转码并投送到电视，同时可烧录字幕。项目的卖点是绕开传统 IPTV 订阅和笨重客户端，直接利用网页上已经公开可播放的视频流。它涉及网页解析、流媒体协议、实时转码与投屏，实际可用性仍取决于各网站的技术与版权限制。

原文链接：https://github.com/stupside/castor

论坛讨论链接：https://news.ycombinator.com/item?id=48964015

讨论里有人推荐更保守的方案：直接在浏览器播放频道公开的 HLS 流，不做中间提取与转码。也有用户称类似界面反应很快，但会遇到字幕叠层等细节问题；大家普遍关心来源合法性、稳定性和设备兼容性。
