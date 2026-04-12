---
title: 'Artemis II 安全溅落：人类首个深空载人任务回归 | Hacker News 摘要 (2026-04-12)'
author: 'hacknews'
description: ''
digest: 'CBS 报道 Artemis II 完成 9 天游月任务并在太平洋安全溅落，四名宇航员经海军回收并送上 USS John P. Murtha 进行体检。这是 50 多年来人类首次载人绕月飞行，任务包括高速度重返与通信黑障阶段。NASA 表示'
source_url: 'https://www.cbsnews.com/live-updates/artemis-ii-splashdown-return/'
pubDatetime: 2026-04-12 08:49:17.149+08:00
tags:
  - 航天与科学
  - AI安全
  - 数字社会
  - 游戏与创意
---

---

## 1. Artemis II 安全溅落：人类首个深空载人任务回归 (Artemis II safely splashes down)





CBS 报道 Artemis II 完成 9 天游月任务并在太平洋安全溅落，四名宇航员经海军回收并送上 USS John P. Murtha 进行体检。这是 50 多年来人类首次载人绕月飞行，任务包括高速度重返与通信黑障阶段。NASA 表示将从该任务数据中总结经验，为后续更深入月球任务做准备。

原文链接：https://www.cbsnews.com/live-updates/artemis-ii-splashdown-return/

论坛讨论链接：https://news.ycombinator.com/item?id=47725583

讨论对高风险载人任务的可接受死亡率提出质疑，也有人强调这是半个世纪以来最公开的高风险任务，并对商业载人项目的后续贡献表示期待。

---

## 2. 小模型也能找出 Mythos 漏洞？AISLE 质疑“模型即护城河” (Small models also found the vulnerabilities that Mythos found)



AISLE 在 Mythos 发布后复现实验，称在若干关键漏洞案例中，小型开源模型也能复现大部分分析结论，且不同任务的“最强模型”排序极不稳定。作者认为 AI 安全能力的“护城河”更多在系统与流程，而非单一模型规模。AISLE 介绍其自 2025 年起运行的漏洞发现与修复管线，并强调模型本身只是链条的一环，真正价值在可复现的扫描、验证与补丁协作流程。

原文链接：https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier

论坛讨论链接：https://news.ycombinator.com/item?id=47732020

评论指出对比并非完全等价：Mythos 需要在全量代码库上自动搜索，成本与假阳性控制才是关键。也有人质疑 Anthropic 是否披露了假阳性比例，认为“可运行的系统”比“单次命中”更具意义。

---

## 3. 韩国推出“基础移动数据”方案：超额后 400kbps 不限量 (South Korea introduces universal basic mobile data access)


韩国政府宣布“普遍基础移动数据”方案：当用户套餐用尽后仍可获得 400kbps 无限速率接入。该政策由 SKT、KT、LG U+ 配合执行，属于在多起安全事故后重建社会信任的措施之一。同时政府要求推出低价 5G 套餐，并提升老年群体流量与公共交通 Wi‑Fi 覆盖。

原文链接：https://www.theregister.com/2026/04/10/south_korea_data_access_universal/

论坛讨论链接：https://news.ycombinator.com/item?id=47730407

评论将其类比公共基础设施，认为基本联网能力在现代社会应具备“公用事业”属性；也有人关注政策出台的社会背景与成本分摊。

---

## 4. Show HN：Pardonned.com，美国赦免记录可检索数据库 (Show HN: Pardonned.com – A searchable database of US Pardons)


Pardonned.com 提供美国赦免记录的可检索数据库，汇总总统与州级赦免信息，支持搜索与筛选。该项目希望降低赦免信息的获取门槛，让研究者与公众更容易理解赦免历史与趋势。

原文链接：https://news.ycombinator.com/item?id=47727960

论坛讨论链接：https://news.ycombinator.com/item?id=47727960

评论关注数据来源与更新频率，以及赦免记录在司法透明度与公共讨论中的价值。

---

## 5. 我把几乎所有 Firefox 扩展都装了一遍 (Installing every* Firefox extension)





作者尝试通过 AMO API 抓取并安装几乎全部 Firefox 扩展：先用多种排序拉取列表，再用 exclude_addons 机制翻页突破 6 万数量级限制，最终获得接近 99.94% 的扩展集合。文章记录了数据抓取、去重与自动安装流程，也指出部分扩展下架或缺失导致无法完全覆盖。

原文链接：https://jack.cab/blog/every-firefox-extension

论坛讨论链接：https://news.ycombinator.com/item?id=47724118

评论里有人讨论 AMO API 的分页与排序策略，认为这类“极限实验”揭示了平台数据访问的边界与结构，也有人好奇安装与运行成本、以及扩展生态是否存在大量“僵尸扩展”。

---

## 6. Connect 4 最优策略解析：弱解与强解的边界 (Optimal Strategy for Connect 4)


作者解释了 Connect 4 的最优策略，介绍弱解（从初始局面必胜/必败）与强解（任意局面最优走法）的区别，并给出可视化与算法思路。文章强调强解规模巨大，但在特定约束下仍可压缩存储与快速查询。

原文链接：https://2swap.github.io/WeakC4/explanation/

论坛讨论链接：https://news.ycombinator.com/item?id=47695213

评论指出已有研究用极小的压缩表即可覆盖大量局面，并讨论“强解”与“可用强解”的定义是否过于严格。

---

## 7. Bevy 教程合集：Rust 游戏引擎的“Rails Guides” (Bevy game development tutorials and in-depth resources)


taintedcoders 提供一套 Bevy 0.18 的系统教程与资源汇总，从 ECS 基础到渲染、输入、插件、物理与项目组织均有独立页面，目标是成为“Bevy 的 Rails Guides”。站点还提供入门 Pong 教程、TLDR 汇总，以及 Bevy 相关资源库。

原文链接：https://taintedcoders.com/

论坛讨论链接：https://news.ycombinator.com/item?id=47698111

评论里有人抱怨 Bevy 编译慢、二进制体积大，也有人认为 ECS 带来的结构化收益值得付出。整体评价认为教程质量不错，但 Rust 生态在游戏开发上的“迭代速度 vs 体验成本”仍待优化。

---

## 8. 一位乐迷录下上万场演出，志愿者整理成在线宝库 (Volunteers turn a fan's recordings of 10K concerts into an online treasure trove)



美联社报道：志愿者把一位乐迷累计录制的约一万场演出整理成可检索的在线档案库。项目通过分类、元数据整理与修复，提升了这些历史录音的可访问性，形成音乐爱好者的数字遗产仓库。

原文链接：https://apnews.com/article/aadam-jacobs-collection-concerts-internet-archive-chicago-b1c9c4466a2db409a83523ad84b79d62

论坛讨论链接：https://news.ycombinator.com/item?id=47687443

讨论集中在录音合法性、版权与文化保存之间的张力，也有人赞赏志愿者对“民间档案”的长期维护价值。

---

## 9. 卡尔维诺：不确定世界中的旅行者 (Italo Calvino: A traveller in a world of uncertainty)





History Today 评述卡尔维诺作品与思想转变，聚焦《如果在冬夜，一个旅人》的“迷失感”如何映照 20 世纪后期的历史不确定性。文章回顾他从“科学式历史观”到对历史与叙事的怀疑与探索，认为其作品一直在追问：在变动时代，我们如何理解过去与自我。

原文链接：https://www.historytoday.com/archive/portrait-author-historian/italo-calvino-traveller-world-uncertainty

论坛讨论链接：https://news.ycombinator.com/item?id=47725403

评论多为书迷交流与推荐，提及 Oulipo 传统与卡尔维诺其他作品，整体氛围偏文艺讨论。

---

## 10. Starfling：单 HTML 文件做出的“一键轨道弹弓”小游戏 (Starfling: A one-tap endless orbital slingshot game in a single HTML file)


Starfling 是一款极简超休闲网页游戏：点一下释放、借引力弹弓飞向下一颗星。作者将玩法、音效（Web Audio）与逻辑全部封装在单一 HTML 文件中，无需安装或注册，加载约 2 秒。游戏难度随节奏与角度提升而快速上升，并在结束时生成轨迹图作为视觉“彩蛋”。

原文链接：https://playstarfling.com

论坛讨论链接：https://news.ycombinator.com/item?id=47698455

玩家反馈集中在“重开节奏太慢”，希望一键快速重启或长按重开。也有人提供脚本优化操作体验，整体评价认为玩法简单但上瘾。

