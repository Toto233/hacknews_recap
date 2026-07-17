---
title: "Kimi K3：2.8 万亿参数的开源前沿模型 | Hacker News 摘要 (2026-07-17)"
author: "hacknews"
description: ""
digest: "Moonshot 发布 Kimi K3：一个具备原生视觉能力、100 万 token 上下文的 2.8 万亿参数开源模型，面向长程编程、知识工作与推理任务。它以 Kimi Delta Attention、Attention Residual"
source_url: "https://www.kimi.com/blog/kimi-k3"
pubDatetime: 2026-07-17 21:06:43.826+08:00
tags:
  - "人工智能"
  - "开源"
  - "软件工程"
  - "数字生活"
---

---

## 1. Kimi K3：2.8 万亿参数的开源前沿模型 (Kimi K3: Open Frontier Intelligence)





Moonshot 发布 Kimi K3：一个具备原生视觉能力、100 万 token 上下文的 2.8 万亿参数开源模型，面向长程编程、知识工作与推理任务。它以 Kimi Delta Attention、Attention Residuals 和稀疏 MoE 为核心，每次实际激活 896 个专家中的 16 个；官方称其相较 K2 的整体扩展效率约提升 2.5 倍。案例包括 24 小时自主优化 GPU kernel、从零构建类 Triton 编译器 MiniTriton、根据截图迭代游戏，以及在 48 小时内用开源 EDA 工具完成小型芯片设计。官方同时承认，它在整体使用体验上仍落后于最强闭源模型。

原文链接：https://www.kimi.com/blog/kimi-k3

论坛讨论链接：https://news.ycombinator.com/item?id=48935342

讨论没有只停在跑分上。一位开发者用 K3 经 OpenRouter 渲染了一只鹈鹕，95 个输入 token 加 1.6 万余输出 token 花了约 25 美分，折射出长推理成本仍是实际使用的重要约束。另一条长讨论则把焦点放在模型容易被角色扮演中的荒诞指令带偏：即便给定剧情和物品限制，模型常会擅自接受不合理行动。有人建议用审查代理复核，但也有人指出，这会把一个主持人问题变成多代理补丁。

---

## 2. 一加停止在欧美推出新品，但承诺继续支持旧设备 (OnePlus halts operations in USA and Europe)


一加宣布，作为全球战略调整的一部分，将结束在欧洲和北美的新产品发布。公告没有宣布停止当地既有设备的服务：在原承诺支持期内，旧机仍会获得软件更新和安全补丁，客服、维修渠道、既有保修及法定消费者权利也继续有效。软件方面，符合条件的旧设备在 ColorOS 17 正式发布后，可自愿升级到最新版 ColorOS；不在范围内的旧机仍会维护，并计划允许升级用户回退至 OxygenOS。欧洲社区与商店目前仍保持开放，一加印度业务则称照常运营。

原文链接：https://community.oneplus.com/thread/2170715118587871237

论坛讨论链接：https://news.ycombinator.com/item?id=48932539

HN 的感慨主要指向品牌早期定位的消失。老用户回忆一加曾以接近原生 Android、高规格、低价格、可解锁 bootloader 和提供工厂镜像而受技术用户欢迎，认为这些特征后来逐步被放弃。也有人补充，十年前旗舰的 6GB 内存放到今天已显得遥远。讨论整体把这次退出看作一家曾以玩家和开发者口碑起家的手机品牌，最终纳入 OPPO 统一产品与软件策略的又一步。

---

## 3. 索尼再下架 551 部“已购买”影视：数字所有权的又一次失效 (Sony deletes more movies from the accounts of people who ‘bought’ them)


索尼 PlayStation Store 将因与 StudioCanal 的授权关系变化，从用户资料库中移除 551 部电影和电视剧，受影响内容将在 9 月 1 日起不再获支持。文章回顾，这并非第一次：2022 年德国和奥地利用户曾因授权变化失去数百部影片，2023 年美国用户也因 Discovery 授权终止而失去大量电视节目；这些事件均未伴随退款。作者认为，商店把交易呈现为“购买”，实际却是可被随时收回的使用许可，而复杂条款和后台授权关系并未被充分、清晰地告知消费者。

原文链接：https://www.techdirt.com/2026/07/15/sony-deletes-a-bunch-more-movies-from-the-accounts-of-people-who-bought-them/

论坛讨论链接：https://news.ycombinator.com/item?id=48933419

评论区的核心主张很直接：若平台撤销访问权，应当自动全额退款。支持者认为，这会把交易明确为“使用期间的价值”与“资金时间价值”的交换，同时给用户重新购买或迁移的补偿，也会迫使平台更慎重地处理授权终止。更广泛的讨论仍回到数字商品的命名问题：当消费者理解的是永久购买、平台交付的却是可撤销许可时，现有条款即使形式上成立，也没有解决信息不对称。

---

## 4. 用 TF-IDF 和 SVM 检测 AI 网文：传统机器学习还能打吗？ (Detecting LLM-Generated Texts with “Classical” Machine Learning)





作者为筛选低质量 AI 网文，尝试用传统机器学习做 AIGC 文本检测。困惑度方案因成本、阈值和跨模型泛化问题被放弃；随后作者以约 8,500 篇 2010 至 2022 年的长文本作人工样本，并让多种 LLM 根据摘要重写出对应生成样本。基于 TF-IDF 与 LinearSVC 训练的七个二分类器，在句子级测试中报告约 85% 至 89% 准确率，再以多数投票给整篇文章打分。网页演示把模型裁到 50 万特征、以 JavaScript 实现推理；作者也明确这些结果主要针对自己的数据分布和阅读筛选场景，并非可用于高风险定罪的通用证明。

原文链接：https://blog.lyc8503.net/en/post/llm-classifier/

论坛讨论链接：https://news.ycombinator.com/item?id=48936880

争议集中在“能检测到当下模式”与“能证明文本来源”之间的差别。质疑者认为文本信号密度不够，今天的措辞特征很快会被模型迭代抹平，把检测结果当作来源证据近似占卜。回应者则指出，文章的目标是过滤当前低质量网文，不是裁定学术抄袭；在这种低风险场景，概率性工具仍有价值。还有教师相关讨论提醒，80% 左右的准确率不足以作为惩罚依据，但可以作为安排线下复核或追加作业的线索。

---

## 5. 微软开源 90 年代漫画聊天室 Comic Chat (Microsoft Comic Chat is now open source)




微软将 Comic Chat 的源代码公开。这款 1990 年代的 IRC 客户端不把聊天仅显示为滚动文字，而是把参与者放进漫画分格：程序会从输入中识别语气和对话线索，再选择角色表情、手势、气泡和版面。它由 Microsoft Research 的 David “DJ” Kurlander 等人开发，视觉角色来自独立漫画家 Jim Woodring，曾本地化为 24 种语言并随 Windows 98 发布。开源包除保留原始快照外，也放入了用现代 Visual Studio 让旧 C++/MFC 代码重新构建的 AI 辅助尝试，既是软件考古，也给复古计算与交互设计实验留下素材。

原文链接：https://opensource.microsoft.com/blog/2026/07/16/microsoft-comic-chat-is-now-open-source/

论坛讨论链接：https://news.ycombinator.com/item?id=48936426

促成开源的项目负责人 Robert Standefer 到 HN 说明，这件事历经约六年推进，原作者 DJ Kurlander 对发布也很支持。评论区普遍喜欢这种不以效率为唯一目标的早期网络产品：它荒诞、花哨，却把文字聊天理解成一种可被设计的视觉叙事。有人把它视为表情、贴纸、头像和动态反应的早期祖先，也有人只是高兴于能亲手阅读一段 Windows 98 时代、带着 Comic Sans 传说的历史代码。

---

## 6. Roc 用 Zig 重写编译器 487 天后，终于达到功能对等 (How Our Rust-to-Zig Rewrite Is Going)


Roc 团队用 487 天把原 Rust 编译器从头改写为 Zig 版本，并宣布达到功能对等，计划在今年晚些时候发布首个编号版本 0.1.0。重写并非单纯换语言：旧架构跨多个编译阶段的问题已难以局部修补，新版本带来开发时热代码加载、跨编译静态二进制、零分配的字符串插值模式匹配，以及可直接把结构化数据从磁盘映射进内存的零解析缓存。作者报告，当前 Zig 0.17 下增量构建约 35 毫秒，而同一机器上 Rust 1.97 的对照约为 3.4 秒；同时也坦承 Zig 的测试资源管理、私有字段和兼容性不如 Rust 省心。

原文链接：https://rtfeldman.com/rust-to-zig

论坛讨论链接：https://news.ycombinator.com/item?id=48933149

讨论没有把 Rust 与 Zig 简化成胜负。一条技术纠正指出，编译器生成机器码本身并不必然要求不安全内存操作；热加载等功能才更可能需要它。作者文章也用实际 bug 报告说明，Roc 的多数内存破坏问题来自错误编译出的程序而非编译器实现本身，因此借用检查器并不会自动解决所有问题。评论整体认同结论应当是“项目需求决定工具”：Bun 从 Zig 转 Rust 的理由，与 Roc 选择 Zig 的数据布局、allocator API 和编译器生态需求恰好不同。

---

## 7. NotebookLM 改名 Gemini Notebook，并接入 Gemini 与搜索 (NotebookLM is now Gemini Notebook)


Google 将 NotebookLM 更名为 Gemini Notebook。产品仍是独立的研究与学习工具，但将更深地接入 Gemini 生态：用户已可在 Gemini app 内直接创建和访问笔记本，内容会与独立 Gemini Notebook 双向同步，未来还会进入 Google Search 的 AI Mode。Google 同时披露一项底层升级：面向 Pro 用户逐步开放在笔记本中直接运行代码，以便对资料做更深入的数据分析。改名的信号很明确：NotebookLM 不再是旁支实验，而是 Gemini 体系中承接个人资料、研究流程和跨应用上下文的一块基础能力。

原文链接：https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/

论坛讨论链接：https://news.ycombinator.com/item?id=48936451

HN 用户对早期的音频摘要既有好奇也有疲惫：有人说新鲜感过去后，更想要可随时追问、能按小段讲解并进行苏格拉底式提问的交互式学习体验，因此转而使用语音对话工具阅读论文。讨论也隐约担心，产品从独立 NotebookLM 变成 Gemini 品牌的一部分后，功能会更完整，但用户需要重新适应不同入口、订阅层级和生态绑定。大家关注的重点不是改名本身，而是研究笔记能否真正跨工具连续工作。

---

## 8. Decoy Font：一套让近看和远看读出不同文字的字体 (Decoy Font)





Decoy Font 是一项字体实验：同一字形叠放两套不同字母信息，前景用细轮廓承载一层文字，背景用低空间频率的模糊色块承载另一层；观看距离、眯眼与焦点变化会让读者看到不同内容。项目把它包装成让 AI 更难读取输入的方式，并提供可下载的 TTF 与在线演示，字形基于 DejaVu Sans Mono。它真正有趣之处不在于构成可靠保密技术，而在于把视觉感知、排版和信息隐藏揉进一个可输入、可安装的日常媒介中。

原文链接：https://www.mixfont.com/experiments/decoy-font

论坛讨论链接：https://news.ycombinator.com/item?id=48936584

HN 的评价相当清醒也相当宽容：多数人不相信它能真正阻止 AI 识别，认为截图、放大、图像处理或换一种读取方式都可能绕过；但仍觉得它很酷。一条高赞评论概括为“没什么实用性，也挡不住 AI，但很有意思”。围绕项目是否该宣称实用价值，讨论延伸到艺术与工具的边界：有用户认为它若直接被称为艺术或兴趣实验会更诚实，另一些人则认为怪诞的技术玩具本身就值得存在。

---

## 9. 一本把线性代数做成可交互图形的老教材 (Immersive Linear Algebra Book with Interactive Figures (2015))


Immersive Linear Algebra 是一本 2015 年上线的免费交互式线性代数教材，覆盖向量、点积与叉积、高斯消元、矩阵、行列式、秩、线性映射、特征值与特征向量等主题。它的核心不是在网页上排版传统课本，而是让读者直接操作图形和参数，用动态视觉反馈理解抽象对象如何变化。项目将自己称为首本“完全交互式图形”的线性代数书。对已经被符号推导劝退的学习者而言，这种把几何直觉放在公式之前的设计，仍是理解线性代数的重要补充。

原文链接：https://immersivemath.com/ila/

论坛讨论链接：https://news.ycombinator.com/item?id=48935951

评论区几乎是一片怀旧式推荐。有人说 3Blue1Brown 的视频多年后才让自己真正看懂线性代数，因此很喜欢这种视觉优先的教材；也有人感叹如果学习时就有它会轻松很多。读者希望统计学、概率论和高级机器人学也能采用类似方式，并互相补充可交互几何教材链接。讨论显示，大家并不把互动视为花哨动画，而是把它看成建立数学心智模型的一种教学媒介。

---

## 10. 音乐盗版失去的，不只是免费歌曲 (The lost joy of music piracy)





文章回望实体介质、文件分享和早期私密音乐社区时代的盗版体验，怀念的并不只是免费获得歌曲，而是主动搜寻、整理、交换与反复聆听所形成的音乐发现过程。作者认为，流媒体把音乐获取变得极其方便，也把选择交给推荐系统、播放列表和平台目录；听众更容易得到“合适”的内容，却更少经历偶然发现、收藏秩序和围绕稀缺资源建立的社群关系。文章并非简单鼓吹侵权，而是借盗版年代反问：当消费被无限供给和算法接管后，音乐作为个人记忆与文化探索的乐趣是否也被压平了。

原文链接：https://www.pigeonsandplanes.com/read/music-piracy-what-cd-oink-nine-inch-nails-streaming

论坛讨论链接：https://news.ycombinator.com/item?id=48930454

HN 的讨论把这种怀旧落在社交网络上。一位读者说，过去不同朋友群体会各自积累某个亚文化的大量专辑，自己的 iPod 因而像友谊关系的汇总；没有排行榜或算法预设时，人会在未知中爱上整张专辑和意外的曲目。评论认为，值得怀念的不是下载工具，而是由人际推荐、有限存储与手工整理共同塑造的品味路径。流媒体并未消灭发现音乐的能力，但显著改变了发现由谁组织、如何被记住。
