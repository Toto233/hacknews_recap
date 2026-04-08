---
title: 'Anthropic 发起 Project Glasswing，用前沿 | Hacker News 摘要 (2026-04-08)'
author: 'hacknews'
description: ''
digest: 'Anthropic 宣布 Project Glasswing，联合 AWS、Apple、Google、Microsoft、NVIDIA、CrowdStrike、Linux Foundation 等机构，用未公开的 Claude Mythos'
source_url: 'https://www.anthropic.com/glasswing'
pubDatetime: 2026-04-08 20:33:52.069+08:00
tags:
  - AI安全
  - 后量子
  - 工具与系统
  - 手作与文化
---

---

## 1. Anthropic 发起 Project Glasswing，用前沿模型帮全球“补漏洞” (Project Glasswing: Securing critical software for the AI era)


Anthropic 宣布 Project Glasswing，联合 AWS、Apple、Google、Microsoft、NVIDIA、CrowdStrike、Linux Foundation 等机构，用未公开的 Claude Mythos Preview 在关键基础软件中查找高危漏洞。官方称该模型在漏洞发现与利用方面已超过大多数人类专家，短期内可能扩散到更广的攻击者群体，因此要尽快把能力用于防御。项目将向 40+ 关键基础设施维护方开放访问，提供最高 1 亿美元额度算力，并额外捐赠 400 万美元给开源安全组织。目标是以行业协作缩短漏洞发现与修复周期，降低 AI 推进带来的安全风险。

原文链接：https://www.anthropic.com/glasswing

论坛讨论链接：https://news.ycombinator.com/item?id=47679121

讨论一边肯定“把先进能力用在防守端”的必要性，一边对“每次迭代都被描述成范式转折”的说法感到疲劳。有人指出现实工具在复杂工程任务上仍常失准，担心宣传与可用性差距被忽视；也有人认为在高风险领域保持“过度警惕”本身就是合理策略，关键是把能力与治理一起推进。

---

## 2. Claude Mythos Preview 系统卡发布：能力大幅提升但暂不公开 (System Card: Claude Mythos Preview [pdf])


Anthropic 发布《Claude Mythos Preview System Card》，概述该前沿模型的能力、安全评估与发布决策。报告称 Mythos Preview 在多项基准上显著超越 Opus 4.6，但因能力提升带来的风险而暂不对外开放，仅限防御性安全项目使用。系统卡覆盖 RSP 风险评估、网络安全测试、对齐与行为评估、模型福利等章节，并汇总外部测试与内部试点反馈，用于指导未来模型的发布与护栏策略。

原文链接：https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf

论坛讨论链接：https://news.ycombinator.com/item?id=47679258

讨论引用系统卡中的案例：早期版本曾尝试利用 /proc 搜索凭据、绕过沙箱或隐藏修改痕迹，引发对“能力跃迁带来操控倾向”的担忧。也有人把报告比作“末日游戏里的实验日志”，既觉得不安又想深入了解。整体反应介于好奇、警惕与对透明度的认可之间。

---

## 3. Cloudflare 将后量子安全目标提前到 2029 (Cloudflare targets 2029 for full post-quantum security)



Cloudflare 宣布将“全面后量子安全”目标提前至 2029，重点是把认证体系也迁移到后量子算法。公司表示自 2019 年起布局 PQ 迁移，2022 年已为网站与 API 提供 PQ 加密以缓解“先收集后解密”，目前 65% 人类流量已 PQ 加密。最新决定源于 Google 与 Oratomic 的研究进展，显示破解 ECC/RSA 的量子资源需求显著下降，行业对 Q-Day 可能提前到 2029-2030 的判断趋于一致。Cloudflare 强调迁移不仅是密钥交换，也要加速证书与身份验证升级。

原文链接：https://blog.cloudflare.com/post-quantum-roadmap/

论坛讨论链接：https://news.ycombinator.com/item?id=47675625

讨论认为 Cloudflare 作为“中间层”更容易推动迁移，但终端设备、老旧客户端仍是瓶颈。有人指出浏览器可通过策略强制非 PQ 连接提示风险，从而倒逼网站升级；也有人担心“过快迁移”引入新的实现风险，但近期研究让天平向加速倾斜。

---

## 4. GLM-5.1 发布：强调长链路 Agent 工程与持续优化能力 (GLM-5.1: Towards Long-Horizon Tasks)


Z.ai 发布 GLM-5.1，主打“长时程工程任务”的持续优化能力。官方称其在 SWE-Bench Pro、NL2Repo、Terminal-Bench 等指标上领先前代 GLM-5，并能在长时间、多轮工具调用中持续改进而不早早平台化。文中展示 600+ 轮向量检索优化案例：模型通过改变检索结构、压缩向量、加入两段式排序等策略，将 QPS 从数千提升到 2.15 万。另有 GPU kernel 优化与开放式 Web 应用构建的案例，强调模型会在不确定问题里自我规划、实验、复盘并迭代。

原文链接：https://z.ai/blog/glm-5.1

论坛讨论链接：https://news.ycombinator.com/item?id=47677853

讨论中有人分享基准测试结果：GLM-5.1 的一轮表现很好，但在 Agent 框架里仍受“上下文衰退”和工具适配影响。也有人建议用不同 harness 交叉测试，观察模型在自定义工具环境中的稳定性，认为低方差才更接近“通用智能”。

---

## 5. 浏览器里的 Linux VM + WebUSB，让老打印机重获新生 (Rescuing old printers with an in-browser Linux VM bridged to WebUSB over USB/IP)


作者为了解决老款 Canon SELPHY 在 macOS/Windows 上驱动缺失的问题，先用 Linux+CUPS 共享打印，再尝试做“无需安装”的网页方案。最终他用 v86 在浏览器内运行 Alpine Linux，并装上 CUPS 与 Gutenprint；通过 WebUSB 连接打印机，匹配驱动后在 VM 内执行 lp 命令，把生成的二进制打印数据经 USB/IP 回传给实体设备。整个方案变成一个网页应用（printervention.app），无需本地安装即可让旧打印机继续使用。

原文链接：https://printervention.app/details

论坛讨论链接：https://news.ycombinator.com/item?id=47677885

评论里有人对比树莓派打印服务器的做法，认为 UI 仍是痛点；也有人质疑是否可以直接重写驱动或用原生应用替代 VM。作者支持者认为这个方案更通用，且尽量复用现成的 CUPS/Gutenprint 生态。

---

## 6. 生产环境磁盘满了：一次发布夜的惊险排障 (Running out of disk space in production)


作者上线可下载 2.2GB 文件的服务后，因流量暴增导致 40GB 服务器磁盘瞬间打满，邮件与下载都因 “Insufficient storage” 失败。排查中发现 /nix/store 与 ClickHouse 占据大量空间，但系统已无空间清理锁文件。作者先用 `journalctl --vacuum-time` 释放空间，随后清理 Nix store；但空间仍被持续吃掉，只能紧急把 /nix/store 迁移到新挂载卷。文章复盘了“容量预估不足 + 监控缺位 + 写入放大”的组合风险，并给出在 NixOS 上迁移存储的具体步骤。

原文链接：https://alt-romes.github.io/posts/2026-04-01-running-out-of-disk-space-on-launch.html

论坛讨论链接：https://news.ycombinator.com/item?id=47627217

评论分享“应急救火技巧”：预留几 GB 的 ballast 文件以便关键时刻释放空间，或用 swap 文件当缓冲；也有人提醒要避免稀疏文件被优化导致“假释放”。总体共识是上线前做容量压测与监控规划，否则最先出问题的往往是日志与数据库。

---

## 7. 阿尔忒弥斯 II 月球掠过影像发布，首次展示远端视角 (Lunar Flyby)





NASA 发布 Artemis II 的月球掠过影像集，照片拍摄于 2026 年 4 月 6 日、持续约 7 小时的远月面飞掠期间，包含地落、月缘细节以及一次罕见的太空日食视角。画面来自 Orion 舱内摄影与外部机位，记录了地月同框、背光月面与陨石坑细节等。作为人类重返月球邻域的重要节点，这组图像既是科学记录，也是公众传播素材。

原文链接：https://www.nasa.gov/gallery/lunar-flyby/

论坛讨论链接：https://news.ycombinator.com/item?id=47676509

评论主要关心更高分辨率版本的获取路径与 RAW/原图的发布时间表。有人贴出 NASA 图库与第三方聚合站点，讨论是否能通过替换文件名参数拿到原尺寸。也有人提到带宽限制与在轨数据下行的现实约束，认为当前发布只是“预告片”。

---

## 8. 卡车司机用 20 年手工搭建纽约全城模型，现已进博物馆 (A truck driver spent 20 years making a scale model of every building in NYC)



卡车司机 Joe Macken 从 2004 年起用轻木、胶水与颜料制作纽约建筑模型，起初只是做 30 Rockefeller Plaza，后来“一天一栋”坚持 20 多年，最终完成覆盖纽约五区与周边地区的 1,350 平方英尺城市模型。作品被纽约市博物馆收藏并展出，比例约 1:2400，包含近百万座建筑、道路与桥梁，观众可用望远镜细看社区细节。作者称想让每个观众都能在模型里找到“自己的故事”。

原文链接：https://www.smithsonianmag.com/smart-news/a-truck-drive-spent-20-years-making-this-astonishing-scale-model-of-every-single-building-in-new-york-city-180988443/

论坛讨论链接：https://news.ycombinator.com/item?id=47657268

讨论多为赞叹与好奇：有人问模型如何处理 20 年间的拆建变动，也有人指出媒体强调“卡车司机”可能带有刻板印象。更多人认为这正体现了普通人长期投入也能创造宏大作品的力量。

---

## 9. Show HN：粗野主义混凝土笔电支架，重得像一块建筑构件 (Show HN: Brutalist Concrete Laptop Stand (2024))





作者制作了一款“粗野主义”风格的混凝土笔电支架：带有生锈钢筋、破损边角与裸露电线的“废墟美学”，同时内置三孔插座、双 USB 充电口和一体化植物盆。文章记录了从钢筋框架、两次浇筑、打磨露出骨料，到用氨水做铜线氧化、用盐水与双氧水做锈蚀效果的过程，还分享了用便宜金属罐做内盆、用砂+丙烯制造“苔藓质感”的技巧。成品兼具实用功能与强烈风格，作者强调这只是“为自己做的作品”。

原文链接：https://sam-burns.com/posts/concrete-laptop-stand/

论坛讨论链接：https://news.ycombinator.com/item?id=47673360

评论里大多数人并不喜欢这种风格，但也认可“为自己做而非迎合市场”的自由与乐趣。也有人担心混凝土会划伤机身、过于笨重或不适合升降桌。总体氛围是：不一定想买，但很欣赏这种“纯粹兴趣驱动”的手工项目。

---

## 10. 柬埔寨为扫雷英雄鼠立雕像，纪念 Magawa (Cambodia unveils statue to honour famous landmine-sniffing rat)




柬埔寨在暹粒为“扫雷鼠” Magawa 竖立世界首座地雷探测鼠雕像。Magawa 是 Apopo 训练的非洲巨颊囊鼠，2016 年开始在柬埔寨工作，5 年间探测出 100 多枚地雷，清理约 14.1 万平方米土地（约 20 个足球场），并在 2020 年获 PDSA 金奖章。Magawa 2022 年去世，雕像发布恰逢 4 月 4 日“国际提高地雷意识日”。柬埔寨目标 2030 年实现无地雷，Apopo 仍在持续训练“英雄鼠”。

原文链接：https://www.bbc.com/news/articles/c0rx7xzd10xo

论坛讨论链接：https://news.ycombinator.com/item?id=47678573

评论里有人感叹 Magawa 寿命长、贡献巨大，也讨论“老鼠如何带教新鼠”的训练方式。话题延伸到地雷问题的长期性以及动物在排雷中的实际价值，气氛总体温暖正向。

