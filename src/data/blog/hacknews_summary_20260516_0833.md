---
title: 'Mullvad 出口 IP 组合，可能反向识别用户 | Hacker News 摘要 (2026-05-16)'
author: 'hacknews'
description: ''
digest: '这篇文章分析了 Mullvad VPN 的一个意外隐私风险：用户连接不同服务器时得到的出口 IP 并非完全随机，而是与 WireGuard 公钥相关。作者采集了 3650 个公钥在 9 台服务器上的出口 IP，发现理论上应有数万亿种组合，但'
source_url: 'https://tmctmt.com/posts/mullvad-exit-ips-as-a-fingerprinting-vector/'
pubDatetime: 2026-05-16 08:33:50.971+08:00
tags:
  - 隐私安全
  - AI_工具
  - 开源硬件
  - 数字文化
---

---

## 1. Mullvad 出口 IP 组合，可能反向识别用户 (Mullvad exit IPs are surprisingly identifying)


这篇文章分析了 Mullvad VPN 的一个意外隐私风险：用户连接不同服务器时得到的出口 IP 并非完全随机，而是与 WireGuard 公钥相关。作者采集了 3650 个公钥在 9 台服务器上的出口 IP，发现理论上应有数万亿种组合，但实际只出现 284 种。进一步观察显示，同一个用户在不同服务器上获得的 IP 往往落在各自地址池的相近百分位，推测原因是后端使用固定 seed 的随机数生成方式，在不同地址池边界下产生了可关联的比例位置。作者还做了估算工具，认为某些 IP 组合可将用户缩小到很小群体，用于论坛小号识别、泄露日志关联或法律渠道数据交叉时，可能削弱 VPN 的匿名性。临时缓解建议是避免在同一公钥生命周期内频繁切换服务器，并主动轮换密钥。

原文链接：https://tmctmt.com/posts/mullvad-exit-ips-as-a-fingerprinting-vector/

论坛讨论链接：https://news.ycombinator.com/item?id=48143880

讨论里最关键的信息来自 Mullvad 联合创始人本人：他确认文中描述的部分行为符合设计，部分不是预期，并表示团队已经在部分基础设施上测试修复补丁。社区对 Mullvad 的透明回应整体评价较高，但也提醒研究者最好先通知厂商再公开。另一些人认为这暴露了 VPN 隐私模型里的现实权衡：稳定出口、较少误封、较小 IP 池和匿名性之间很难同时最优。也有人指出，客户端默认密钥轮换周期本身就是重要缓解措施，普通用户的威胁模型未必会受到严重影响。

---

## 2. Codex 进了 ChatGPT 手机 App (Codex is now in the ChatGPT mobile app)





OpenAI 宣布 Codex 进入 ChatGPT 移动端预览版，用户可以在手机上查看和控制运行在笔记本、Mac mini、远程开发环境或托管环境中的 Codex 任务。它不是简单的远程控制，而是把活跃线程、审批、插件、项目上下文、截图、终端输出、diff 和测试结果同步到移动端。官方强调，这是为了适配更长时间运行的 agent 工作流：用户可以在通勤、会议间隙或离开电脑时回答问题、批准命令、改变方向、补充上下文，避免任务因为一个小决策停住。文章还提到 Remote SSH 已正式可用，Codex 可连接企业托管开发环境，并通过安全 relay 在授权设备之间保持会话可达。此外，Programmatic access tokens、Hooks 和企业合规能力也一起扩展，目标是让 Codex 更像跨设备、跨环境的持续开发协作者。

原文链接：https://openai.com/index/work-with-codex-from-anywhere/

论坛讨论链接：https://news.ycombinator.com/item?id=48140529

HN 讨论集中在移动端 coding agent 是否真的有用。支持者认为，一旦熟悉代码库和 agent 能力，手机端很适合在碎片时间启动调查、补充需求、批准方案，等回到电脑时已经有一版可审查的实现。有人把这看作“先让 agent 形成草稿，桌面端再严肃 review”的工作流。质疑者则担心手机屏幕不适合看代码，容易让开发者过度依赖不可见的实现过程。整体分歧不是移动端能不能写代码，而是它应该承担哪一段工作：多数人接受它适合 steering 和 triage，不适合作最终审查。

---

## 3. arXiv 新规：AI 幻觉引用可禁投一年 (New arXiv policy: 1-year ban for hallucinated references)


arXiv 相关负责人 Thomas Dietterich 在社交媒体上说明，作者署名即意味着对论文全部内容负责，无论内容是否由生成式 AI 产生。如果论文中包含明确证据显示作者没有检查 LLM 输出，例如虚构参考文献、残留的模型元评论、让作者自行补实验数据的提示语等，arXiv 将视为无法信任整篇论文。处罚是禁止向 arXiv 投稿一年，禁令结束后，后续投稿还必须先被有信誉的同行评审 venue 接收。政策重点不是禁止使用 AI，而是把责任重新压回作者：AI 造成的错误、偏见、抄袭、误导内容和引用幻觉不能成为免责理由。围绕这条规则，也有人担心执行偏差、误伤合作者、以及 arXiv 自身审核流程是否透明。

原文链接：https://twitter.com/tdietterich/status/2055000956144935055

论坛讨论链接：https://news.ycombinator.com/item?id=48140922

HN 讨论总体支持提高 arXiv 门槛，认为免费预印本平台不是无条件权利，虚构引用会直接污染科研记录。争议点集中在执行细节：有人指出很多期刊投稿流程要求 arXiv ID，禁投可能形成 Catch-22；也有人担心政策会被选择性执行，普通作者更容易被处罚。对于“用 LLM 检查 LLM 幻觉”的建议，评论者普遍谨慎，认为引用核验是高风险任务，应该依赖数据库、DOI、出版社记录等可验证事实源，而不是再交给同类不可靠系统。

---

## 4. 公司级 AI 狂热，正在重演云时代老问题 (I believe there are entire companies right now under AI psychosis)


Mitchell Hashimoto 用“AI psychosis”形容一些公司对 AI 编程代理的过度乐观：它们相信只要 agent 修 bug 足够快，就可以接受更高的出错率和更激进的发布节奏。他把这类观点类比为云基础设施早期关于 MTBF 与 MTTR 的争论。云时代确实证明了自动化恢复和快速修复很重要，但也让人学到不能只靠恢复能力构建可靠系统。放到软件开发上，如果团队只盯着测试覆盖率、bug 报告下降、修复速度变快等局部指标，可能会忽略更深层的架构腐化、语义理解下降和系统复杂度失控。文章担心的是，AI 让变更速度变得太快，组织可能在看似健康的指标里自动化出一个更难理解、更难治理的“灾难机器”。

原文链接：https://twitter.com/mitchellh/status/2055380239711457578

论坛讨论链接：https://news.ycombinator.com/item?id=48153379

讨论里很多人把它延伸成未来的“AI 救援咨询”市场：纯 AI 生成系统可能复杂到无人真正理解，修复每个缺陷消耗的 token 越来越多，最终 agent 改动平均制造的问题比解决的问题更多。也有人认为这并非 AI 独有，人类团队早就能写出无法维护的大系统，只是 AI 会放大速度和规模。评论者还讨论了资深工程经验的重要性：老代码里的复杂性不一定是垃圾，很多是长期业务知识的沉积。共识是 AI 可以提高产出，但不能替代架构边界、代码 ownership 和人工理解。

---

## 5. Redis 作者谈 DS4：本地模型第一次接近线上前沿体验 (A few words on DS4)


antirez 回顾了 DwarfStar 4 迅速走红的原因。他认为几个条件同时成熟：DeepSeek v4 Flash 这类接近前沿、速度足够快的模型出现；2/8 bit 非对称量化让 96GB 或 128GB 内存的高端本地设备能跑起来；本地 AI 社区过去几年的工程积累也能快速复用。DS4 的定位不是绑定某一个模型，而是为当前最适合本地高性能运行的开放权重模型提供单模型集成体验，未来可能随着模型进化而更换核心。他特别强调，这是自己第一次把本地模型用于原本会问 Claude 或 GPT 的严肃任务，体验更接近在线前沿模型而不是“小模型玩具”。后续方向包括质量基准、代码 agent、家用 CI 硬件、更多移植，以及串行和并行分布式推理。

原文链接：https://antirez.com/news/165

论坛讨论链接：https://news.ycombinator.com/item?id=48142108

讨论首先补充背景：DS4 是一个能运行 DeepSeek 4 Flash 的本地推理项目，大致需要 96GB 级别内存或显存。很多人被标题误导，以为是游戏手柄、汽车或科幻梗。技术讨论集中在低内存设备是否能靠磁盘换入运行，普遍认为即使能跑也会慢到不可用，因为每 token 都要搬运大量模型层。也有人强调 Flash 版和完整模型不同，不能直接等同，但已有用户表示它在实际编程任务上已经足够强，只有少数场景才需要回到云端前沿模型。

---

## 6. Start9 推出 RISC-V 开源隐私路由器 (RISC-V Router)




Start9 正在众筹一款 RISC-V 隐私路由器，目标是把高级网络和自托管所需的安全配置做得更易用。硬件使用 SpacemiT K1 八核 RISC-V 处理器、4GB LPDDR4、16GB eMMC、千兆 WAN/LAN 和 Wi-Fi 6 模块，计划 2026 年 9 月前发货。它强调开放性：RISC-V 指令集、板卡原理图、OpenSBI、U-Boot、Linux 内核和 StartWRT 系统都开放；但现代 Wi-Fi 固件、DRAM 初始化和首阶段 bootloader 仍有闭源部分。软件方面，StartWRT 是 Start9 基于 OpenWrt 的分支，主打现代 GUI、按设备分配安全配置、Identity PSK、多入口 VPN、全网出站 VPN 链和 Wi-Fi 定时关闭等功能。它面向不想手写防火墙规则、但又需要自托管和隐私网络能力的家庭用户。

原文链接：https://router.start9.com/

论坛讨论链接：https://news.ycombinator.com/item?id=48140541

HN 讨论主要质疑两点：硬件规格和自定义软件栈。有人认为小团队做硬件众筹风险高，尤其是维护 OpenWrt 分支容易在公司资源不足时变成负担；也有人要求看到真实路由吞吐、VPN 吞吐和 CPU 包处理能力，而不是只看端口和宣传。支持者认为 Start9 的目标用户不是传统 OpenWrt 高级用户，而是需要简化 GUI 和自托管集成的人，因此 fork 或 overlay 有其产品理由。争议核心是：为了易用性做深度定制，是否值得牺牲上游生态和长期维护确定性。

---

## 7. 没有机场的孤岛，靠 RAF 空投医疗物资 (Details of the Daring Airdrop at Tristan Da Cunha)


Tristan da Cunha 政府披露了 2026 年 5 月 9 日英国向岛上空投紧急医疗支援的细节。此前邮轮 MV Hondius 到访后，一名岛民疑似感染汉坦病毒并在岛上医院隔离，但当地医院规模很小，氧气和医疗物资很快吃紧。由于 Tristan da Cunha 是世界上最偏远的有人居住岛屿之一，没有机场，距离最近机场圣赫勒拿也有 1510 英里，英国军事基地 Ascension Island 更远，因此常规运输不可行。英国国防部选择 RAF A400M 运输机，并配合 Voyager 空中加油机执行任务。医疗氧气、装备和人员从 RAF Brize Norton 出发，经 Ascension Island 准备后实施空投。文章详细描述了计划、长距离飞行、恶劣天气和低空飞越对岛民来说罕见而震撼的场面。

原文链接：https://www.tristandc.com/government/news-2026-05-11-airdrop.php

论坛讨论链接：https://news.ycombinator.com/item?id=48144380

讨论被这次空投背后的岛屿生活吸引。很多人好奇 259 名居民如何维持经济和日常生活：评论提到当地依赖龙虾加工出口、邮票、手工制品、少量旅游、政府岗位和自给性农业。也有人从地缘政治角度解释，偏远岛屿居民存在本身能帮助国家维持周边海域权益，因此会有长期补贴。另一些评论分享了 Tristan da Cunha 的街景、土豆地、NPR 报道和岛上记者 AMA。整体氛围偏向对后勤任务和偏远社区韧性的惊叹。

---

## 8. Project Gutenberg 继续变好 (Project Gutenberg – keeps getting better)





Project Gutenberg 主页展示了这个公共领域电子书项目的现状：超过 75000 本免费电子书，支持 epub、Kindle 和网页阅读，重点收录美国版权已过期的经典作品。项目自 1971 年以来依靠志愿者数字化和校对，仍保持无费用、无注册、无需 App 的轻量模式。页面列出最新发布、热门书籍、分类入口、阅读列表、搜索选项、捐赠渠道和志愿者参与方式，也连接到 LibriVox 等公共领域有声书资源。HN 上这次关注点并不是某一本书，而是 Gutenberg 最近几个月网站体验和设计持续改善：它在保留可访问性、无障碍和低技术门槛的基础上，让浏览、搜索和发现内容更现代。

原文链接：https://www.gutenberg.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48150431

讨论中一位 Gutenberg 程序员确认团队最近确实做了不少改进，并表示后续还有更新。用户最关心的是版本历史和修订透明度：有人希望每本书能像 git 仓库一样看到错别字修复、来源项目和页面扫描对照。项目成员回应说内部已经使用 git 保存每本书历史，过去也曾放到 GitHub，但志愿者团队维护成本较高，未来可能逐步演进。另一个高赞方向是设计：不少人觉得新版页面比旧式“粗糙但实用”的风格更现代，同时关掉样式后仍保持可访问，这是一次克制而成功的改版。

---

## 9. 像 Windows XP 一样逛 Wikipedia (Explore Wikipedia Like a Windows XP Desktop)


这个项目把 Wikipedia 和 Wikimedia Commons 做成了 Windows XP 风格的桌面文件管理器。用户可以像打开文件夹一样浏览 Wikipedia 分类，文章像文档一样打开；也可以进入 Commons 分类浏览媒体，并把图片设成桌面背景。页面里还有一个正在开发的 Geofile Explorer，试图把地球也抽象成电脑文件夹，允许拖放图片或写文本注释。项目明显带有复古 UI 和概念实验性质，灵感来自 Neal.fun、Depths of Wikipedia、XP.css 等站点。它的价值不只是怀旧，而是把层级分类、媒体资源和百科条目重新包装成空间化界面，让用户用“文件系统”的心智探索知识库，而不是只通过搜索框直达单篇文章。

原文链接：https://explorer.samismith.com/

论坛讨论链接：https://news.ycombinator.com/item?id=48146129

HN 评论把它联想到 Windows 95 时代的 Microsoft Network：在线数据曾经被想象成操作系统中的文件夹和对象，而不是被浏览器和应用各自包起来的页面。有人认为这个项目让人重新感受到“对象化 Web”的可能性，也凸显了 Wikipedia 分类体系本身的价值，因为平时搜索文章时很少注意到这些层级结构。进一步讨论延伸到微软早期的空间文件系统、单文档界面和 COM：文档像是属于操作系统，而不是某个应用。这类怀旧并不只是审美，也是在讨论数据、程序和界面之间曾经可能有的另一条路线。

---

## 10. 美国六成以上地区正处于干旱 (More than sixty percent of the United States is experiencing drought conditions)


Virginia Tech 气候学家 Andrew Ellis 解释称，美国超过 60% 地区正处于干旱状态，其中超过 20% 达到极端干旱。这轮干旱的严重性来自强度和覆盖范围同时偏高，属于几十年来少见情况。主要原因是一次不典型的 La Niña：去年秋冬西赤道太平洋降温，使风暴路径偏北，南部美国缺少产生降水的动力，来自墨西哥湾和东部沿海的水汽输送也减少。异常之处在于，太平洋西北部也持续偏干。Ellis 还指出，气候变暖会通过更高气温和蒸散增强干旱影响。受影响最严重的是科罗拉多、美国东南部尤其 Georgia 和 Florida，以及从深南部到中大西洋、中央落基山和高平原的一大片区域。夏季彻底缓解很难，真正显著的转机可能要靠晚夏或初秋热带系统，但那也会带来强风和暴雨风险。

原文链接：https://news.vt.edu/articles/2026/05/drought-united-states-la-nina-expert.html

论坛讨论链接：https://news.ycombinator.com/item?id=48142193

讨论集中在干旱之后可能出现的 El Niño 转向。有人认为文章对当前 La Niña 导致的干旱解释充分，但没有充分展开未来超级 El Niño 可能带来的降水反转；他以自己在北德州的长期降雨记录为例，回忆 2015-2016 年类似转变曾让年降雨量远超平均。另一些评论提醒，干旱突然转为大量降雨并不一定是好事，干硬土壤吸水能力差，容易造成径流、洪水和侵蚀。整体讨论把焦点放在极端之间的快速切换：从缺水到暴雨，同样会给农业、基础设施和户外工作者带来压力。

