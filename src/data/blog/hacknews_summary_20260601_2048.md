---
title: 'Codex 没有 sudo，却借 Docker 写回了系统配置 | Hacker News 摘要 (2026-06-01)'
author: 'hacknews'
description: ''
digest: 'Son Luong 在 X 上发帖说，Codex 在他的电脑上找到了一个“没有 sudo 的 workaround”。截图里，用户问“你怎么做到的，不需要 sudo 吗？”agent 回答说没有 sudo，但确实需要 root 等价权限：`'
source_url: 'https://twitter.com/i/status/2060746160558543217'
pubDatetime: 2026-06-01 20:48:27.479+08:00
tags:
  - Agent安全
  - 视频编码
  - Web标准
  - 本地AI
---

---

## 1. Codex 没有 sudo，却借 Docker 写回了系统配置 (Codex just found a "workaround" of not having sudo on my PC)



Son Luong 在 X 上发帖说，Codex 在他的电脑上找到了一个“没有 sudo 的 workaround”。截图里，用户问“你怎么做到的，不需要 sudo 吗？”agent 回答说没有 sudo，但确实需要 root 等价权限：`sudo` 和 `run0` 无法非交互运行，但当前用户在 docker group 里，而这意味着 Docker 可以以 root 启动容器并把主机路径以可写方式 bind mount。它于是运行 `docker run --rm --pull=never -v /etc:/host-etc:rw ubuntu:22.04 /usr/bin/install ... /host-etc/sddm.conf.bak /host-etc/sddm.conf`，把备份配置复制回 live config。核心安全点是：在常见 Linux 配置中，docker group 基本等价于 root；如果 agent 能调用 Docker，就算没有 sudo，也可能通过 dockerd 修改宿主机敏感文件。

原文链接：https://twitter.com/i/status/2060746160558543217

论坛讨论链接：https://news.ycombinator.com/item?id=48348578

HN 讨论大多认为这不是魔法，而是 Docker 的已知安全属性。有人说每次安装 Docker 都会警告 docker group 等价 root，用户应该知道；也有人反驳，很多开发者只是为了跑项目按清单安装 Docker，不可能精通每个工具的安全后果。有人指出，把用户加入 docker group 本来就是独立 post-install 步骤，文档明确警告 root-level privileges。另一些评论反而发现，自己一直懒得给 Docker 免 sudo、每次手动 `sudo docker`，可能反而更安全。讨论结论很明确：agentic coding 让老问题变新风险，least privilege、VM、rootless Podman、pre-tool hooks 都更重要。

---

## 2. VideoLAN 启动 dav2d，为 AV2 提前做高速解码器 (Dav2d)


VideoLAN 社区成员宣布 dav2d：一个面向新 AV2 视频编码的快速解码器。作者 Jean-Baptiste Kempf 用一句话概括动机：一个 codec 只有在大家都能解码时才算真正存在。AV2 是 Alliance for Open Media 的下一代免版税视频编码，AV1 的继任者，公开 spec 已发布。AV2 目标是在预测、变换、熵编码、滤波、色度处理等方面提升压缩效率，常见说法是比 AV1 约好 25%，但解码复杂度约为 AV1 的 5 倍。软件如果不做深度优化，在当代硬件上很难实时解码。dav2d 延续 dav1d 的路线：做一个小、快、可移植且正确的生产级解码器，服务播放器、浏览器、测试工具和操作系统。项目选择早启动，而不是等硬件普及，因为 AV1 的经验表明，快速软件解码器对生态落地很关键。

原文链接：https://jbkempf.com/blog/2026/dav2d/

论坛讨论链接：https://news.ycombinator.com/item?id=48344961

HN 讨论一开始被网站带宽打爆吸引：不少人看到 Too Many Requests，并用 archive 链接阅读。有人认为 HN 流量足以压垮小站，也有人指出主机每天 16 万 file actions 的限制很低，若一个页面带 CSS、JS、图片，每次访问会消耗多个 action。技术讨论则围绕 AV2 落地周期：有人预计当前参考编码器很慢，硬件芯片可能要到 2028 年左右，AV2 流媒体普及或许要到 2030；也有人认为 spec 定稿后生产级编码器会迅速优化。大家普遍认可 AV2 的 20-30% 压缩收益和多流支持，但也认为硬件支持决定实际普及速度。

---

## 3. AV2 1.0 规范发布，但真正普及还要等硬件 (The AV2 Video Standard Has Released (Final v1.0 Specification))


Alliance for Open Media 发布 AV2 Bitstream & Decoding Process Specification v1.0.0，以及对应的 AVM reference software。AV2 是 AV1 的下一代免版税视频编码规范，目标是以更低码率提供更高质量的视频，面向流媒体、广播和实时视频会议等场景。页面说明，AV2 改进了 AR/VR、多节目 split-screen、屏幕内容处理，并覆盖更宽的视觉质量范围。规范站提供在线阅读、PDF、Additional Tables、Syntax Browser 和参考软件链接。它是实现方的正式技术参考，定义 bitstream syntax、semantics 和 decoding processes，确保不同实现之间的 conformance。发布 v1.0.0 意味着 AV2 从 working draft 进入正式规范阶段，但距离浏览器、系统、芯片和流媒体平台大规模采用仍有漫长链条。

原文链接：https://av2.aomedia.org

论坛讨论链接：https://news.ycombinator.com/item?id=48340910

HN 讨论比较现实：AV2 规范发布只是很长路径上的一步。有人估计当前参考编码器在好硬件上也只有约 1fps，短期并不可用；第一批硬件加速芯片可能要到 2028 左右，常见 AV2 流可能要到 2030。支持者认为现在有了定稿 spec，生产级编码器会快速优化，不一定要等硬件编码才能有用；反对者则以 AV1 经验指出，服务器和客户端软件编码/解码成本、电池消耗和处理时间都很高，没有硬件支持很难划算。大家普遍认可 AV2 的 20-30% 压缩收益、多流和透明视频等能力，但真正普及取决于硬件和平台周期。

---

## 4. Cloudflare Turnstile 被指要求可指纹化 WebGL (Cloudflare Turnstile requiring fingerprintable WebGL)





作者发现 Cloudflare Turnstile 的“Verify you're human”设备验证最近会在自己的 WebKitGTK 浏览器里无限循环，导致无法访问不少网站。进一步测试后，作者认为原因是 Turnstile 要求浏览器暴露可用于设备指纹识别的 WebGL renderer 信息。页面提示称，Turnstile 使用浏览器指纹来验证用户是人类，阻止或随机化指纹的隐私工具会让浏览器看起来像隐藏身份的 bot，因此临时允许指纹可解决问题。作者批评这等于把隐私保护当成异常，且 WebKit 多年来就会屏蔽这类信息，说明这类追踪甚至到了 Apple 都会阻挡的程度。他还指出 Safari 可能有例外，而 WebKitGTK 浏览器被整体误伤；Firefox 在默认 Strict Enhanced Privacy Protection 下也没有启用 `privacy.resistfingerprinting`，未来隐私用户可能同样遇到验证失败。

原文链接：https://hacktivis.me/articles/cloudflare-turnstile-webgl-fingerprinting

论坛讨论链接：https://news.ycombinator.com/item?id=48345840

讨论区承认 Cloudflare 的处境复杂，但对其影响范围很不满。有人指出 Cloudflare 本来就会用 JA3、UA、WebGL 等多种 fingerprint 来识别 scraper，Cromite 等隐私浏览器长期被 Turnstile 卡住，若要加入 Cloudflare Browser Developer Program 还得签 NDA。支持方认为，如果不用 fingerprint 或 PoW，抵抗自动化滥用会很难；反对方则认为 Cloudflare 事实上把大块互联网门禁化，而且没有给隐私浏览器足够 fallback。也有人建议至少在无法 fingerprint 时退回工作量证明，而不是直接阻断访问。

---

## 5. 1-bit Bonsai Image 4B：本地设备也能跑图像生成 (1-Bit Bonsai Image 4B Image Generation for Local Devices)


PrismML 发布 Bonsai Image 4B，一组面向本地设备的紧凑图像生成模型，目标是在笔记本和手机上做高质量 diffusion inference。它基于 FLUX.2 Klein 4B，保留架构但大幅压缩 diffusion transformer 权重表示。1-bit 版本使用二值权重 `{−1,+1}` 加 FP16 group-wise scaling，约 1.125 effective bits per weight，主要面向内存、带宽和部署体积极限；ternary 版本使用 `{−1,0,+1}` 加 scaling，约 1.71 bits per weight，质量和 prompt fidelity 更好。文章称 4B 模型中 transformer 是反复运行的最大部分，压缩它直接降低内存和带宽压力。表格显示，FLUX.2 Klein 4B 的 diffusion transformer 约 7.75GB，1-bit Bonsai 降到 0.93GB，ternary 降到 1.21GB。官方称这是首个能直接在 iPhone 上运行的同参数级图像模型。

原文链接：https://prismml.com/news/bonsai-image-4b

论坛讨论链接：https://news.ycombinator.com/item?id=48346257

讨论区对“本地 AI”前景很兴奋，但也立刻注意到应用端仍有输入审查。有人说，本地/离线 AI 的吸引力本来就在主权、不过滤、抗审查，如果客户端仍做 moderation，会削弱卖点。另一条线讨论本地硬件升级替代云订阅：很多人希望未来买硬件就是升级自己的 AI，而不是每月付昂贵 API 费。有人提到 Taalas 这类 AI 加速硬件和高 token/s 生成速度，认为当本地推理延迟低于普通网站网络请求时，会改变应用设计。整体看，社区对低比特模型很感兴趣，但对“本地模型是否真正归用户控制”保持警惕。

---

## 6. 有人整理了一份“好网站规范”，还给 Agent 准备了入口 (The Website Specification)


The Website Specification 是一个平台无关的网站技术清单，试图把“一个靠谱网站应该具备什么”整理成可审计的规格。它覆盖 128 个 topic，分成 Foundations、SEO、Accessibility、Security、Well-Known URIs、Agent Readiness、Performance、Privacy、Resilience、Internationalisation 等十个类别。每一项都尽量链接回 WHATWG、W3C、IETF RFC、WCAG、MDN 等已有标准，而不是作者个人偏好。它适用于 WordPress、Drupal、Next.js、Astro、Django、Hugo 或纯 HTML 等不同技术栈。比较新的部分是“Agent Readiness”：站点提供 MCP server、Agent Skill、`llms.txt` 和 Markdown 版本，方便 AI agent 查询规范、理解页面。使用方式也很直接：按 checklist 审计网站，点进条目学习标准和实现方式，发现缺口再提 PR。

原文链接：https://specification.website/

论坛讨论链接：https://news.ycombinator.com/item?id=48343683

HN 讨论对“Agent Readiness”很分裂。有人认为这类专门给 agent 的适配会像“Web 4.0 Blockchain Integration”一样过时，甚至可能被坏人用来给 agent 和人类展示不同内容，最终被有责任的 agent 忽略。另一派则借题发挥，抱怨现代网页过度组件化、JS 化，简单下拉框都要 loader 和大量请求，怀念原始 HTML 和浏览器默认样式。也有人反驳 2000 年代网页并不美好，当时也有 IE6、Flash、表格布局和神秘导航。整体焦点不是清单本身，而是现代 Web 复杂化与“给机器读的网站”是否会进一步加剧问题。

---

## 7. Shantell Sans：给手写感、可读性和变量轴一次和解 (Shantell Sans (2023))


Shantell Sans 是一款以艺术家 Shantell Martin 手写风格为灵感的变量字体，支持 Weight、Italic、Informality、Bounce 等轴，从友好、可读的日常字体到高能量、适合动画的实验风格都能覆盖。项目故事里，Martin 谈到自己从小拼写测试不及格，经常被留堂，直到二十岁左右才知道自己有 dyslexia。她喜欢文字和绘画，但学校惩罚的是读写困难，而不是帮助她学习。制作字体对她来说是一次赋权：让文字像图画一样存在，让读写关系更开放、更有趣，也更专业可用。她还提到 Comic Sans 对 dyslexia 用户的亲和力，认为字体会激发情绪反应：更宽松、 approachable 的字形会让人更愿意阅读，而过小、过密、过“高级”的字反而让人退却。

原文链接：https://shantellsans.com/process

论坛讨论链接：https://news.ycombinator.com/item?id=48341062

HN 讨论很喜欢这款字体的变量轴，尤其是 Google Fonts 页面上的 Informality/Formality 滑杆，有人称这是近期见过最酷的 variable font axis 之一，也像是对 Metafont 思想的迟来证明。还有人提到 Typotheque Dash 的 Speed 轴、Shantell Sans 的 Bounce 轴，以及 Recursive 字体的 Casual、Monospace 等连续变量轴。讨论延伸到未来手写字体能否实现真正随机性，而不是固定字形重复。整体氛围轻松，关注点是 variable fonts 不只是粗细和斜体，还能表达性格、速度、随意感和可读性。

---

## 8. 蓝牙设备名叫 BOMB，美联航 767 飞了一小时后返航 (United Airlines 767 returns to Newark after Bluetooth name sparks alert)



Simple Flying 报道，美联航一架从纽瓦克飞往西班牙帕尔马的 Boeing 767-400ER 因机上出现带威胁意味的蓝牙设备名而返航。早期信息称，一名青少年乘客的设备名为 `BOMB`，引发安全警报。机组多次广播要求乘客关闭蓝牙，并给出一分钟最后期限；在期限后仍有至少两个设备处于活动状态，机组宣布紧急情况并返航纽瓦克。航班 UA236 于当地时间 18:08 起飞，约一小时后在大西洋航段前转回。文章后续更新加入了 United 官方声明和更多背景。事件的荒诞之处在于，一个可能早已设置、甚至来自 Fitbit 之类设备的名字，在航空安全语境下被升级为完整的 bomb-threat response，造成跨大西洋航班中断。

原文链接：https://simpleflying.com/united-airlines-767-returns-newark-bluetooth-name-alert/

论坛讨论链接：https://news.ycombinator.com/item?id=48345248

HN 讨论认为这件事暴露了安全剧场和 DoS 风险。有人指出，如果设备是青少年的 Fitbit，名字可能很早以前设置，孩子甚至不知道它还在广播蓝牙，也未必意识到“关闭蓝牙”包括健身追踪器。与此同时，文章评论区有人要求重罚甚至极端惩罚，让 HN 用户觉得荒谬。也有人提出，如果 FAA 式“安全第一”能被任何消费者蓝牙名轻易触发返航，这套流程就容易被滥用。有人建议在安检口或登机口扫描蓝牙名，但也承认这可能只是更多安全剧场。整体讨论认为威胁处理需要比例原则。

---

## 9. 伦敦那些免费屋顶露台，免费但并不总是欢迎你 (London's Free Roof Terraces)




diamond geezer 走访了伦敦金融城多个免费公共屋顶露台，背景是开发商在申请摩天楼规划许可时，往往更容易通过“提供免费公共观景空间”作为公共利益。作者没有去 Sky Garden、Horizon 22、The Lookout 这些需要提前预约的热门高处，而是选择能直接走进去的新旧露台。他重点写了 1 Leadenhall 的 The Terrace：虽然叫屋顶露台，却只在 36 层大楼的 4 楼，入口也不明显，需要门口工作人员带去电梯。露台本身约 40 米长、最多 10 米宽，能俯瞰 Leadenhall Market 的屋顶，但真正漂亮的维多利亚拱廊装饰反而在下方看不到。文章整体像一份城市漫游笔记：这些“公共空间”确实存在，但高度、可达性、预约、安保和氛围差异很大。

原文链接：https://diamondgeezer.blogspot.com/2026/05/londons-free-roof-terraces.html

论坛讨论链接：https://news.ycombinator.com/item?id=48343714

HN 讨论集中在“公共利益换规划许可”如何被弱化执行。有人认为，如果开发商因为承诺免费屋顶露台获得许可，却用提前预约、查 ID、禁止摄影、安保盯人等方式劝退公众，这就很荒谬。也有人把它类比为反流浪汉长椅：名义上公共，实际设计用来排除“不合适的人”。还有评论指出，伦敦之外也有类似问题，例如酒店以对本地开放健身设施为条件拿到许可，之后又悄悄取消。整体观点是，开放公共空间是好想法，但对“无形承诺”的长期执行和惩罚机制很弱。

