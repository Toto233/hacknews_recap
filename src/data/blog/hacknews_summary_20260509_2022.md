---
title: 'Canvas 遭 ShinyHunters 威胁泄露学校数据，期末周 | Hacker News 摘要 (2026-05-09)'
author: 'hacknews'
description: ''
digest: 'The Verge 报道称，Instructure 旗下学习管理平台 Canvas 在一次安全事件后短暂下线，随后恢复大部分用户访问。事件中，学生和教师登录页面曾出现自称 ShinyHunters 的勒索信息，声称已入侵 Instructu'
source_url: 'https://www.theverge.com/tech/926458/canvas-shinyhunters-breach'
pubDatetime: 2026-05-09 20:22:27.860+08:00
tags:
  - 系统安全
  - AI_可信度
  - 开发者工具
  - 离线网络
---

---

## 1. Canvas 遭 ShinyHunters 威胁泄露学校数据，期末周的老师先炸了 (Canvas online again as ShinyHunters threatens to leak schools’ data)




The Verge 报道称，Instructure 旗下学习管理平台 Canvas 在一次安全事件后短暂下线，随后恢复大部分用户访问。事件中，学生和教师登录页面曾出现自称 ShinyHunters 的勒索信息，声称已入侵 Instructure，并威胁在 2026 年 5 月 12 日前泄露学校数据。受影响信息包括学生姓名、邮箱、ID 号和消息等。Instructure 表示攻击者利用了 Free-For-Teacher 账户相关问题，因此临时关闭该类账户，并继续维护 Canvas Beta、Canvas Test 等系统。真正的风险不只是数据泄露，还在于学校把作业、考试、成绩册和教学流程高度集中在单一 SaaS 平台上。

原文链接：https://www.theverge.com/tech/926458/canvas-shinyhunters-breach

论坛讨论链接：https://news.ycombinator.com/item?id=48055913

HN 评论里最有价值的是一位大学教师的现场反馈：事故发生时正值期末考试，校方只能让学生把 Canvas 上交过的作业直接发邮件给老师，说明他们也不确定系统何时恢复。对很多把考试、测验、成绩册都放进 Canvas 的教师来说，这相当于教学材料和记录突然被锁在失火的大楼里。讨论重点因此从黑客组织转向教育系统对单一平台的依赖。

---

## 2. 新 reCAPTCHA 卡住去 Google 化 Android：证明你是人，先装 Google 服务 (Google broke reCAPTCHA for de-googled Android users)





Reclaim The Net 报道称，Google 新一代 reCAPTCHA 在 Android 上把验证流程绑定到 Google Play Services。若系统判断用户行为可疑，会让用户扫描 QR code；但这个流程要求设备运行特定版本以上的 Play Services，并与 Google 服务器通信。GrapheneOS 等去 Google 化 Android 系统因此可能无法通过验证。文章把这件事放在 Google Cloud Fraud Defense 的背景下看：reCAPTCHA 正从传统验证码变成一种设备信任和远程证明机制。争议点在于，访问大量网站所需的“证明你是人”，正在变成“证明你运行了 Google 的专有组件”。

原文链接：https://reclaimthenet.org/google-broke-recaptcha-for-de-googled-android-users

论坛讨论链接：https://news.ycombinator.com/item?id=48067119

讨论集中在远程证明和匿名性。有人指出，如果新 reCAPTCHA 本质上依赖设备 attestation，那么 Google 理论上可以把一次次验证追踪到设备级身份，从而削弱跨网站匿名性。也有人反驳说，年龄验证或设备证明并非技术上必然侵犯隐私，可以用更隐私友好的方式实现。但评论整体担心的是现实部署：当控制浏览器、移动系统、广告和验证码的公司也是验证中介，技术选择很容易变成生态锁定。

---

## 3. Cliff Stoll 亲自辟谣：AI 评论已经开始给活人造讣告了 (Rumors of my death are slightly exaggerated)


《The Cuckoo's Egg》作者、Klein bottle 商店经营者 Cliff Stoll 在 HN 发帖称，有人来信询问他去世后商店是否还在运营，他才发现 Facebook 上流传的一篇 AI 生成书评声称他已于 2024 年 5 月去世。Stoll 用马克·吐温式的幽默回应：“我还没死。”这件事看起来荒诞，但也很典型：AI 生成内容不只是编错细节，而是可以把一个仍然活跃的人写成已故，并在社交网络里传播。它提醒读者，模型幻觉进入人物传记、书评和搜索摘要后，会直接影响真实个人的声誉和可信信息环境。

原文链接：https://news.ycombinator.com/item?id=48037336

论坛讨论链接：https://news.ycombinator.com/item?id=48037336

HN 氛围大多是善意玩笑：大家给“死而复生”的 Cliff 写慰问，要求他拿当天报纸、喝 Klein bottle、伸出正确数量的手指来证明自己仍然活着。玩笑之外，也有人表达对 AI 生成内容污染事实记录的担忧。Stoll 本人在评论中保持幽默，这让帖子成为一次少见的“被 AI 造谣的当事人亲自出现”的案例。

---

## 4. Mojo 1.0 Beta 发布：继续押注“像 Python 一样写，像 C++ 一样跑” (Mojo 1.0 Beta)


Mojo 官网显示 1.0.0b1 已发布，定位依旧是兼具 Python 易用性、Rust 式内存安全、Zig 式编译期元编程和高性能硬件编程能力的语言。它强调面向 CPU、GPU 和 AI 硬件的统一开发体验，不依赖单一厂商库，并提供 Python interop，让开发者可以先把性能瓶颈函数迁移到 Mojo，再逐步扩展。路线图显示 Mojo 仍处于高性能 CPU/GPU 编程阶段，后续才会继续补齐系统应用编程、内存安全模型和更多 Python 动态特性。对它来说，1.0 Beta 更像是稳定承诺的开始，而不是生态成熟的终点。

原文链接：https://mojolang.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48057901

评论里有实际写过 Mojo 的用户给出积极评价，称它的所有权模型接近 Rust，comptime 能力强，类型系统和 SIMD 支持也很有吸引力。与此同时，大家也讨论 Mojo 的现实挑战：语言设计再好，也需要包管理、工具链、文档、生态和长期稳定性。部分人关心它是否会成为 AI/数值计算领域的真正替代方案，也有人谨慎认为，和 Python、C++、Rust 竞争不是靠性能口号就能完成。

---

## 5. Linux 内核漏洞连发之后，也许该暂停安装新软件一周 (Maybe you shouldn't install new software for a bit)


Xe Iaso 的短文很直接：在 copy.fail、Copy Fail 2 和 Dirty Frag 等 Linux 内核漏洞接连出现后，现在是供应链攻击最容易造成大面积伤害的时机。作者建议，除了来自发行版的内核安全补丁，普通用户和团队最好暂时停止安装新软件一周左右。这个建议并不是说所有更新都危险，而是在高风险窗口里减少新的依赖、安装脚本和包管理器入口。尤其是 npm 等生态，便利性本身也意味着攻击面巨大；当大家都急着修漏洞、更新系统、搜解决方案时，投毒包和恶意依赖更容易混进流程。

原文链接：https://xeiaso.net/blog/2026/abstain-from-install/

论坛讨论链接：https://news.ycombinator.com/item?id=48056227

HN 讨论把这篇短文扩展成依赖管理实践之争。有人认为大量包和自动安装脚本早就是灾难，只是便利性让行业忽略了风险。也有人分享过往公司经验：最保守的环境会版本锁定、离线构建、人工审查外部组件；另一些公司则把“永远追最新版本”当成安全最佳实践。评论共识是，频繁升级和长期不升级都有风险，行业真正缺的是更成熟的依赖审查、锁定、构建隔离和安全响应流程。

---

## 6. 把网站跑在 512MB 的 Raspberry Pi Zero 内存里，问题是 TLS 放哪儿 (Serving a website on a Raspberry Pi Zero running in RAM)



作者把自己的微型网站 zero.btxx.org 部署在 Raspberry Pi Zero v1.3 上，系统是 Alpine Linux，并以 diskless 模式运行，网站文件和运行环境都放在内存中。Pi Zero 只有 512MB RAM，其中约 40MB 被系统占用；microSD 卡主要用于启动和持久化配置。文章详细写了硬件、Alpine 安装、lbu 持久化、darkhttpd/nginx/rsync、备份，以及用外部 VPS 或边缘服务处理 TLS 和转发流量的方案。它更像一篇可复现实验教程：用极小硬件托管网站，顺便展示 Linux 的可塑性。

原文链接：https://btxx.org/posts/memory/

论坛讨论链接：https://news.ycombinator.com/item?id=48064312

讨论主要质疑“运行在 Pi 上”的边界。许多人指出，文章把 TLS 终止和部分代理工作交给云端或 VPS 后，最重的负载并不在 Pi Zero 上；既然已经用了 VPS，为什么不直接把网站也跑在那里？也有人把它和“在 Wii 上跑博客”“在验孕棒上跑 Doom”类项目比较：概念很酷，但如果关键部分外包，技术含金量会打折。多数人仍承认，这类项目的意义更多是好玩和可学习。

---

## 7. Meshtastic 入门：用 LoRa 搭一个不依赖基站的离线短信网络 (An Introduction to Meshtastic)


Meshtastic 是一个开源、社区驱动的 LoRa mesh 通信项目，目标是在没有可靠通信基础设施的地区，用便宜的 LoRa 无线电设备搭建长距离、低功耗、去中心化的文本通信网络。设备可以通过蓝牙、Wi-Fi 或 USB 与手机连接，并在 mesh 中转发消息；官方介绍列出的特点包括长距离通信、无需手机参与 mesh、本地加密、优秀续航、可选 GPS 位置共享等。它的实际价值不在于替代互联网，而是在露营、灾害、偏远地区、活动现场等场景提供低带宽但高韧性的备用通信层。

原文链接：https://meshtastic.org/docs/introduction/

论坛讨论链接：https://news.ycombinator.com/item?id=48061566

评论里有人比较 Meshtastic 和 Meshcore：两者都基于免执照频段的 LoRa mesh，但 Meshtastic 更偏动态 flood routing，Meshcore 则有固定中继和移动节点分层，可缓存路径、减少带宽浪费。也有人追问真实用途是什么。回复认为它既是实验系统，也是灾备和业余无线电式社区工具；最现实的场景是严重天气或灾害后基础通信中断，用电池节点快速组成临时安全通信网。

---

## 8. 波兰进入全球前 20 大经济体：从后共产主义废墟到欧洲增长样本 (Poland is now among the 20 largest economies)


AP 报道称，波兰经济总量已超过瑞士，年产出超过 1 万亿美元，成为全球第 20 大经济体之一。文章回顾了波兰自 1989 年后从配给经济和高通胀中转型的过程：加入欧盟、获得单一市场和资金支持、建立相对稳健的商业制度、保持跨党派的长期欧洲化目标。按购买力调整后，波兰人均 GDP 从 1990 年的 6730 美元升至 2025 年的 55340 美元，约为欧盟平均水平的 85%。报道也指出，受邀参加 G20 峰会更多是象征意义，但它反映了波兰经济地位的真实上升。

原文链接：https://apnews.com/article/poland-economy-growth-g20-gdp-26fe06e120398410f8d773ba5661e7aa

论坛讨论链接：https://news.ycombinator.com/item?id=48062117

讨论里很多人补充波兰转型的历史背景：圆桌谈判、1989 年部分自由选举、休克疗法、加入 NATO 和欧盟，共同构成了后共产主义转型模板。也有人提醒，不应简单把波兰说成唯一成功者，因为捷克等国家人均更高，东欧多个国家也经历了和平增长。另一个分歧是 GDP 和人均 GDP 能否代表普通人真实生活改善，评论因此转向工资、公共服务、外流人口回流和制度质量。

---

## 9. David Attenborough 100 岁：BBC 自然纪录片时代的活化石还在讲地球 (David Attenborough's 100th Birthday)




BBC 报道，英国自然纪录片主持人 David Attenborough 迎来 100 岁生日，英国国王和王后、威廉王子、哈里王子、David Beckham、Joanna Lumley、Hans Zimmer、Ian McKellen 等纷纷致意。Attenborough 1952 年加入 BBC，此后几十年持续主持和制作自然历史节目，把地球生命、生态系统和环境议题带进大众视野。BBC 在皇家阿尔伯特音乐厅举办 90 分钟特别音乐会，回顾他的职业生涯和自然纪录片经典片段。对许多观众来说，他不仅是主持人，也是把自然世界变得可亲、可信、可敬的公共声音。

原文链接：https://www.bbc.com/news/articles/cp3pww9g0p5o

论坛讨论链接：https://news.ycombinator.com/item?id=48061884

HN 评论充满私人记忆：有人说童年反复看《Trials of Life》的 VHS，是 Attenborough 打开了自己对自然世界的兴趣；也有人正在整理他早期节目和纪录片目录，提到 Internet Archive 上还能找到不少资源。还有本地读者分享伦敦 Richmond 书店售卖签名书的轶事。讨论整体更像集体致敬：许多人把他视作少数跨越代际、仍保持公共信任的科学传播者。

