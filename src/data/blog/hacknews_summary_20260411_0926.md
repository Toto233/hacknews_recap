---
title: 'Artemis II 的“八核冗余”飞控：NASA 如何做故障容错 | Hacker News 摘要 (2026-04-11)'
author: 'hacknews'
description: ''
digest: 'ACM 报道 Artemis II 的飞行计算体系比阿波罗时代复杂得多。Orion 舱的计算架构负责几乎所有安全关键功能，面对深空辐射与硬件故障，采用“故障静默（fail-silent）+ 多层冗余”策略。系统由两台 Vehicle Man'
source_url: 'https://cacm.acm.org/news/how-nasa-built-artemis-iis-fault-tolerant-computer/'
pubDatetime: 2026-04-11 09:26:52.906+08:00
tags:
  - 系统安全
  - 开发工具
  - 硬件与科学
  - 创意与趣味
---

---

## 1. Artemis II 的“八核冗余”飞控：NASA 如何做故障容错 (How NASA built Artemis II’s fault-tolerant computer)





ACM 报道 Artemis II 的飞行计算体系比阿波罗时代复杂得多。Orion 舱的计算架构负责几乎所有安全关键功能，面对深空辐射与硬件故障，采用“故障静默（fail-silent）+ 多层冗余”策略。系统由两台 Vehicle Management Computer 组成，每台含两块 Flight Control Module，总计 4 个 FCM；每个 FCM 内又是自检成对的处理器，等效 8 个 CPU 并行运行。系统不做传统“三取二”投票，而是按优先级选择仍健康的通道输出；即便 22 秒内失去 3 个 FCM 仍可继续飞行。为避免并行系统“看似分歧”，NASA 还要求严格的确定性架构与时间触发网络。

原文链接：https://cacm.acm.org/news/how-nasa-built-artemis-iis-fault-tolerant-computer/

论坛讨论链接：https://news.ycombinator.com/item?id=47704804

评论认为这种确定性系统的纪律在现代敏捷与 DevOps 文化中被弱化，但在航天与汽车等实时场景仍极其重要。也有人讨论 RTOS 与时间触发网络的价值，感叹“高可靠系统工程”在商业软件里变得稀缺。

---

## 2. macOS 隐私设置并不可靠？作者演示 TCC 授权残留 (You can't trust macOS Privacy and Security settings)


Eclectic Light 作者用自制应用 Insent 演示：在 macOS 13.5+ 上，隐私与安全设置中的“文件与文件夹”开关可能无法真实反映应用权限。流程显示：当用户通过系统对话框选择某个受保护目录（如 Documents）后，即便在设置里关闭该应用对 Documents 的访问，应用仍能继续读取该目录。唯一可靠的撤销方式是运行 `tccutil reset` 并重启。作者认为当前 UI 显示与实际权限存在偏差，容易误导用户。

原文链接：https://eclecticlight.co/2026/04/10/why-you-cant-trust-privacy-security/

论坛讨论链接：https://news.ycombinator.com/item?id=47719602

评论有人认为“用户选择目录即授权”是合理的，但争议在于 UI 未正确显示权限状态且无法通过界面撤销。也有人强调这并非特定 App 的漏洞，而是系统层权限管理的一致性问题。

---

## 3. FBI 用 iPhone 通知数据找回被删 Signal 消息 (FBI used iPhone notification data to retrieve deleted Signal messages)




9to5Mac 报道一起案例：FBI 借助 iPhone 通知系统中的残留数据，恢复了已删除的 Signal 消息。即使应用本身端到端加密，通知内容（或其缓存）可能在系统层留下可取证的文本或元数据。报道强调这不是 Signal 加密被攻破，而是手机操作系统的通知与日志路径带来的侧面泄露。

原文链接：https://9to5mac.com/2026/04/09/fbi-used-iphone-notification-data-to-retrieve-deleted-signal-messages/

论坛讨论链接：https://news.ycombinator.com/item?id=47716490

讨论主要围绕“端到端加密≠端到端隐私”，提醒用户关闭消息通知预览或使用更严格的设备安全配置，以减少系统层泄露风险。

---

## 4. GitButler 融资 1700 万美元：要做“Git 之后”的协作层 (We've raised $17M to build what comes after Git)





GitButler 宣布完成 1700 万美元 A 轮融资，由 a16z 领投，目标是构建“超越 Git 的协作基础设施”。创始人回顾 Git 从小众工具到全行业基础设施的演变，认为当前协作模式被旧工具架构限制，尤其在 AI 与多代理时代，真正难题是“组织、审核、集成变更”而不是写代码。GitButler 推出 CLI 预览，主打堆叠分支、易撤销与人机共用工作流，并可直接接入现有 Git 项目。

原文链接：https://blog.gitbutler.com/series-a

论坛讨论链接：https://news.ycombinator.com/item?id=47712656

评论两极：有人认为 Git 已能支持多分支与非线性工作流，问题在于学习曲线与界面；也有人质疑“重新发明问题只是为了融资”。同时也有人指出 Git 的确缺少更友好的协作层，尤其在 AI 代理涌入后。

---

## 5. DRAM 自 1966 年就有“刷新盲区”，作者展示绕过方法 (DRAM has a design flaw from 1966. I bypassed it [video])



一段视频解释 DRAM 的“刷新停机”问题：存储电容会泄漏，因此每隔微秒级别必须刷新。刷新期间内存控制器会阻断读写（TRFC），导致读延迟从几十纳秒跃升到数百纳秒，累计成可观的 CPU 等待开销。作者回顾 Dennard 在 1966 年提出 1T1C DRAM 的历史，并指出这一刷新机制带来的“盲区”是体系结构的根本限制。视频展示了如何通过访问模式与时序安排绕过部分刷新惩罚，以减少性能损失。

原文链接：https://www.youtube.com/watch?v=KKbgulTp3FE

论坛讨论链接：https://news.ycombinator.com/item?id=47680005

讨论关注“刷新盲区”的真实影响是否被低估，以及是否可以通过调度或控制器策略进一步缓解。也有人对视频的叙事方式与历史细节表达出兴趣。

---

## 6. 法国启动政府 Linux 桌面计划，逐步替换 Windows (France Launches Government Linux Desktop Plan as Windows Exit Begins)




法国数字事务部门宣布推进政府桌面“去 Windows 化”计划，强调数字主权与减少非欧依赖。方案将推动 Linux 桌面与开源软件在政府机构内逐步落地，配套迁移路径与培训。官方称此举旨在降低供应链风险、提升可控性，并减少对单一商业平台的长期锁定。

原文链接：https://www.numerique.gouv.fr/sinformer/espace-presse/souverainete-numerique-reduction-dependances-extra-europeennes/

论坛讨论链接：https://news.ycombinator.com/item?id=47716043

评论关注迁移成本、兼容性与人员培训难度，也有人指出政府采购中的长期锁定问题需要更早解决。整体对“数字主权”方向表示理解，但担心执行细节。

---

## 7. 作者称更偏爱 MCP 而非 Skills：连接器优于脚本手册 (I still prefer MCP over skills)




作者主张 Model Context Protocol（MCP）比“Skills + CLI”更适合作为服务接入层。理由包括：远程 MCP 无需本地安装、更新即刻同步、OAuth 等认证更规范、跨设备可用、接口受限更易沙箱化；同时工具搜索可按需加载，减少上下文成本。作者承认技能型文档对知识与规范有用，但当技能必须依赖本地 CLI 时，会在 ChatGPT、Claude Web 等无执行环境的场景中失效，带来部署与密钥管理负担。

原文链接：https://david.coffee/i-still-prefer-mcp-over-skills/

论坛讨论链接：https://news.ycombinator.com/item?id=47712718

讨论中有人认为不应纠结偏好，而应按任务复杂度设计“先造工具，再写技能说明”的两步法：简单任务直接技能，复杂系统先做专用 CLI/接口再文档化。也有人提出应区分一次性与持续性访问场景，MCP 并非万能但在持续集成上更合理。

---

## 8. 生成艺术回顾：从算法美学到今天 (Generative art over the years)


作者回顾个人多年生成艺术实践，展示从早期算法图形到近年作品的演变，强调“随机性与意图”的平衡：算法提供无限变化，但艺术家需要控制规则与参数以塑造审美。文章也回应“生成艺术被 AI 抢走话语”的现状，主张更准确的称呼是 Algorithmic Art，以突出其核心是系统设计而非模型生成。

原文链接：https://blog.veitheller.de/Generative_art_over_the_years.html

论坛讨论链接：https://news.ycombinator.com/item?id=47675906

评论里有创作者分享自己从 GWBasic 到现代 JS 的生成艺术经历，也讨论区块链/NFT 对“保存具体输出”的意义与争议。

---

## 9. Unfolder：把 3D 模型自动展开成纸模的 Mac 工具 (Unfolder for Mac – A 3D model unfolding tool for creating papercraft)


Unfolder 是一款 Mac 端纸模展开工具，可将 3D 模型自动生成可打印的 2D 展开图，并支持手动分割/合并零件、编辑折页、调整切割线与折线样式。支持多种导出格式，面向纸模玩家与 CNC/激光切割场景。官方提供试用与付费版，强调其“面向纸模优化的自动展开算法”。

原文链接：https://www.unfolder.app/

论坛讨论链接：https://news.ycombinator.com/item?id=47706140

评论对 30 美元的一次性定价评价不一：有人认为对纸模爱好者很合理，抱怨“应用必须很便宜”的心理是历史遗留；也有人希望软件提供示例 OBJ 以便上手测试。

---

## 10. 1D Chess：在一维棋盘上玩国际象棋 (1D Chess)


1D Chess 将棋盘压缩为一条直线，仅保留王、马、车三种棋子，规则简化但仍能形成将杀与和棋。网站提供人机对弈，并给出一条参考胜线。该变体源自 Martin Gardner 在 1980 年《Scientific American》的数学游戏专栏。

原文链接：https://rowan441.github.io/1dchess/chess.html

论坛讨论链接：https://news.ycombinator.com/item?id=47719740

评论区延伸出“Mind Chess”等无棋具玩法，顺带掀起“我又输了 The Game”的梗。整体氛围轻松，强调“一维限制也能产生策略趣味”。

