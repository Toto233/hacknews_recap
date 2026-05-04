---
title: 'o1 急诊诊断准确率 67%，但这还不是“AI 替代医生” | Hacker News 摘要 (2026-05-04)'
author: 'hacknews'
description: ''
digest: '《卫报》报道了一项哈佛急诊分诊研究：研究者让 OpenAI 的 o1 推理模型和医生基于同样的电子健康记录做诊断，材料通常包括生命体征、人口统计信息和护士对来诊原因的简短描述。在 76 名波士顿医院急诊患者样本中，o1 给出准确或非常接近的'
source_url: 'https://www.theguardian.com/technology/2026/apr/30/ai-outperforms-doctors-in-harvard-trial-of-emergency-triage-diagnoses'
pubDatetime: 2026-05-04 09:14:21.955+08:00
tags:
  - AI_医疗
  - 模型竞争
  - 工程实践
  - 产品体验
---

---

## 1. o1 急诊诊断准确率 67%，但这还不是“AI 替代医生” (OpenAI's o1 correctly diagnosed 67% of ER patients vs. 50-55% by triage doctors)




《卫报》报道了一项哈佛急诊分诊研究：研究者让 OpenAI 的 o1 推理模型和医生基于同样的电子健康记录做诊断，材料通常包括生命体征、人口统计信息和护士对来诊原因的简短描述。在 76 名波士顿医院急诊患者样本中，o1 给出准确或非常接近的诊断比例为 67%，高于两名医生 50%-55% 的水平；当信息更完整时，AI 准确率升至 82%，专家医生为 70%-79%，但差异未达到统计显著。另一个长期治疗计划任务中，AI 在五个病例上得分 89%，高于使用常规资源的医生。研究者强调，这更像基于文本病历的第二意见工具，不包含医生现场观察病人外观、痛苦程度和互动线索的能力，也不意味着可以直接替代医生。

原文链接：https://www.theguardian.com/technology/2026/apr/30/ai-outperforms-doctors-in-harvard-trial-of-emergency-triage-diagnoses

论坛讨论链接：https://news.ycombinator.com/item?id=47991981

HN 讨论对结论相当谨慎。质疑者认为这类 benchmark 很容易设计偏：医生在真实急诊中并不只读几行记录，而会看病人、追问和做检查；把医生限制在“读文本猜诊断”的任务里，可能测的是非典型能力。也有人认为长期看 AI 在知识整合和模式识别上会超过多数医生，真正问题会转向责任、偏差和如何防止医生过度服从 AI。整体共识是它有潜力做第二意见，但离安全常规临床使用还有制度和验证距离。

---

## 2. Kimi K2.6 赢下编程挑战：这次不是口号，是具体策略赢了 (Kimi K2.6 just beat Claude, GPT-5.5, and Gemini in a coding challenge)


ThinkPol 的 AI Coding Contest 第 12 天任务是 Word Gem Puzzle：模型需要写 bot，在带空格的字母滑块棋盘上移动方块，并声明横向或纵向有效英文单词。短词会扣分，七个字母以上才得分；每对模型在 10x10 到 30x30 五种棋盘上比赛，每轮 10 秒。结果 Kimi K2.6 以 22 个 match points、7-1-0 战绩第一，Xiaomi 的 MiMo V2-Pro 第二，GPT-5.5 第三，Claude Opus 4.7 第五。作者分析日志后认为，Kimi 的关键不是“更聪明”的宣传，而是写出了会积极滑动棋盘的贪心策略：每步寻找能解锁正分长词的移动，没有收益时再 fallback。相比之下，Claude 和 MiMo 基本不滑动，只扫描初始棋盘，遇到 30x30 这种 seed word 被打散的局面就吃亏。

原文链接：https://thinkpol.ca/2026/04/30/an-open-weights-chinese-model-just-beat-claude-gpt-5-5-and-gemini-in-a-programming-challenge/

论坛讨论链接：https://news.ycombinator.com/item?id=47993235

讨论重点不在单场比赛能否证明“谁最强”，而在模型评测的不可避免混乱。有人认为未来一年会持续出现“某模型击败某模型”的帖子，因为模型用途、随机性、价格和约束都不同，不存在统一最佳。另一派认为 Kimi、DeepSeek、MiMo 等开放或低价模型已经接近昂贵闭源模型，这本身就是重大变化：对普通开发者和非大厂企业来说，低成本 AI 可能比美国大模型公司的利润更重要。也有人提醒，开放模型背后也有软实力和产业竞争逻辑。

---

## 3. Mercury 的两百万行 Haskell：类型系统不是审美，是生产约束 (A couple million lines of Haskell: Production engineering at Mercury)


Haskell 官方博客刊登 Mercury 工程师 Ian Duncan 的长文，讲述这家金融科技公司如何在生产环境维护约两百万行 Haskell。Mercury 服务超过 30 万家企业，2025 年处理 2480 亿美元交易量，并在申请美国 OCC national bank charter。文章的核心不是“函数式语言优雅”，而是 Haskell 在高风险业务中的工程价值：把操作知识编码进 API，用类型系统把危险路径包起来，让安全路径成为最容易走的路径。Mercury 的工程团队大量招聘未接触过 Haskell 的通才工程师，因此真正挑战不只是语言能力，而是怎样让快速增长的团队在文档、边界、可靠性和业务规则上持续保持一致。文章把可靠性从“枚举失败并加检查”扩展为理解系统为什么通常能工作。

原文链接：https://blog.haskell.org/a-couple-million-lines-of-haskell/

论坛讨论链接：https://news.ycombinator.com/item?id=47991802

HN 讨论抓住了“把流程和前置条件编码进类型”的价值。有人举例说，类似 User -> LoggedInUser -> AccessControlledLoggedInUser 的类型转换可以避免常见授权漏洞，这种模式在 Haskell 最强，但 Rust、TypeScript 甚至动态语言也能部分实践。争议点在于编译期保证和运行期包装的差别：静态语言里的 newtype 往往可以零成本消除，而动态语言需要额外对象或约定。多数评论赞同，这种思路在工业界仍被低估，尤其适合金融和权限敏感系统。

---

## 4. Specsmaxxing：别再让 AI 猜需求，把验收标准写进 YAML (Specsmaxxing – On overcoming AI psychosis, and why I write specs in YAML)



这篇文章讨论作者如何从“AI 写代码一轮又一轮修补”的混乱中走向 spec-driven 工作流。典型场景是 Claude 先生成一个看似可用的功能，然后用户不断发现遗漏：分页方式不对、N+1 查询、边界条件没覆盖。作者认为“Peak Slop”已经过去，下一阶段关键不是更会聊天，而是把需求规格写清楚，让 AI 围绕明确验收标准工作。其开源工具 acai.sh 使用 `feature.yaml` 记录 acceptance criteria，流程是先指定规格，再让 agent 实现、评审和迭代。作者强调 spec 不会消失：即使不写下来，它也存在于人脑、会议和团队默契里；既然团队最终总会关心软件应该是什么样，不如一开始就把规格显式化。

原文链接：https://acai.sh/blog/specsmaxxing

论坛讨论链接：https://news.ycombinator.com/item?id=47994012

评论区很多人表示自己独立走向了类似流程：先写用户故事、实现计划、接口边界和产品手册，再让 agent 写代码，并在代码和文档之间检查一致性。有人把这称为重新发现“软件分析师”这个旧职业：在 LLM 时代，写清楚需求、拆分边界、维护一致事实反而更重要。也有人提醒，规格本身会漂移，文档如果不进入开发循环也会腐烂。总体观点是，AI 提升速度后，工程质量的瓶颈会更集中到规格、测试和审查。

---

## 5. Ladybird 四月进展：PDF、历史记录、增量解析和更快 JS 引擎 (This Month in Ladybird – April 2026)





Ladybird 浏览器 2026 年 4 月合并了 333 个 PR，来自 35 位贡献者，其中 7 位是首次提交。新功能包括通过 bundled pdf.js 实现内联 PDF 查看器，支持页码导航、文本选择、缩放和文档内搜索；地址栏加入带 favicon、标题、访问次数和最后访问时间的历史感知补全，并用 SQLite 持久化 HistoryStore；HTML 解析器改为增量消费 response body，不再等完整 body 下载后才开始解析；同时实现 speculative HTML parser，在主解析器被同步脚本阻塞时提前扫描 `<script>`、stylesheet、preload 和图片资源。性能方面，JavaScript 顶层脚本字节码生成移到后台线程，iframe 也开始独立线程栅格化，为未来 iframe 进程隔离做准备。JS 引擎还优化了 AsmInt 调用、O(1) bytecode register allocator 和 for-in 缓存。

原文链接：https://ladybird.org/newsletter/2026-04-30/

论坛讨论链接：https://news.ycombinator.com/item?id=47990318

讨论一边认可 Ladybird 越来越可用，另一边强调安全和兼容性距离主流浏览器仍有很大差距。有评论指出，现阶段用 AI 工具在 Ladybird 中找到可利用 RCE 仍不困难，用户规模小使攻击动机有限，但这不能等同于安全成熟。也有人把浏览器开发类比游戏模拟器：修复一个特性会让某些网站突然可用。另一条线讨论新浏览器的现实阻力，包括网站按 User-Agent 或浏览器特性强行拒绝非 Chromium 浏览器，以及“看起来能用”和“能托付密码与日常数据”之间的鸿沟。

---

## 6. Windows 承诺少打扰、少乱塞 Copilot，但用户要的是先别坏 (Windows quality update: Progress we've made since March)



微软 Windows Insider 团队发布质量更新，称过去两个月重点回应用户对透明度和产品自豪感的诉求。具体改动包括简化 Insider Program 为 Experimental 和 Beta 两个主渠道，Beta 取消 controlled feature rollouts，Experimental 增加 feature flags，让用户更清楚自己会收到什么；Windows Update 将 OS、.NET 和驱动更新合并到单次月度重启，并改善暂停控制和电源菜单；AI 体验方面，Snipping Tool 和 Photos 移除 “Ask Copilot” 按钮，Notepad 把泛化 Copilot 图标换成更明确的 “Writing Tools”；File Explorer 则继续做架构和响应性优化。微软还提到 Widgets 和 Discover feed 会默认更安静，减少不必要提醒。

原文链接：https://blogs.windows.com/windows-insider/2026/05/01/windows-quality-update-progress-weve-made-since-march/

论坛讨论链接：https://news.ycombinator.com/item?id=47980279

HN 讨论几乎没有按微软稿件节奏庆祝，而是集中吐槽 Windows 的基础可靠性。头部评论讲述 Microsoft Account 绑定导致本机登录失败，恢复控制台加管理员用户后仍无法本地重置原账户密码的经历，并表示自己不需要 Copilot 管邮箱，只想系统坏了还能修。随后讨论转向 Windows 与 Linux 的“认知负担”比较：有人认为 Windows 不断增加账户、更新、注册表等问题；也有人指出 Linux 发行版升级同样会出事故，软件世界没有谁垄断愚蠢。

---

## 7. 把 Apple SHARP 搬进浏览器：单张图生成 3D Gaussian Splat (Show HN: Apple's SHARP running in the browser via ONNX runtime web)



这个 Show HN 项目 `ml-sharp-web` 把 Apple 的 SHARP 单图 3D Gaussian splatting 模型通过 ONNX Runtime Web 跑在浏览器中。用户上传一张图片，就能在本地生成 Gaussian splats、页面内预览结果并下载 `.ply` 文件。作者说明，Apple 原始 SHARP 是 PyTorch 和较重的 pipeline，他将 predictor 导出为 ONNX，并用 WebGPU execution provider 在浏览器端执行，图像不会离开本机 tab。主要限制是模型很大：导出的 ONNX sidecar 约 2.4GB，首次冷加载很慢，对桌面 Chrome/Edge、内存和磁盘都有要求。项目还明确提醒，Apple 发布的 SHARP 权重受研究用途许可证限制，代码许可证和模型许可证分开。

原文链接：https://github.com/bring-shrubbery/ml-sharp-web

论坛讨论链接：https://news.ycombinator.com/item?id=47995037

讨论对“本地浏览器跑 3D 生成”很感兴趣。有人提到自己也用 SHARP 做了一个本地图片文件夹到近似体积 3D 场景的 VR 浏览器，预计算缓存后体验很强。技术讨论集中在 2.4GB ONNX 文件和浏览器运行时限制：有人惊讶 ONNX 可以承载如此大的神经网络，也有人提到 iOS WebKit 内存限制让浏览器端 ML 很难稳定。总体看，社区把它视为很酷的实验原型，但离普适在线工具还受模型体积、WebGPU/WASM 兼容性和许可证限制。

---

## 8. 一个只给自己用的桌面：AI 让“极度个人软件”变现实 (A desktop made for one)



作者描述自己二十五年来第一次坐在一台几乎所有常用程序都由自己设计的电脑前。底层是纯 x86_64 汇编写的 CHasm，负责窗口管理、状态栏、锁屏、终端、shell 和文件查看；应用层是 Rust 写的 Fe₂O₃ 和 TUI 库 crust，替代了 Vim、ranger、mutt、RSS、日历、IMDB 查询等工具。最有象征意义的是 Vim：作者从 2001 年开始用 Vim，几乎所有邮件、文章、代码和书稿都经过它，但在 Claude Code 辅助下三天写出 scribe 后就停用了 Vim。scribe 没有 Vim 九成作者不用的功能，却有软换行、阅读模式、AI prompt、HyperList 高亮和跨 session register 等完全贴合个人工作流的特性。作者认为，Rust、AI coding agent 和成熟 TUI 知识让“为自己做工具”的成本大幅下降。

原文链接：https://isene.org/2026/05/Audience-of-One.html

论坛讨论链接：https://news.ycombinator.com/item?id=47997947

评论把它归入“Extremely Personal Software”：未来几年为 1 到 10 个人写的软件数量可能大幅增加，而且很多会是隐藏的个人工具。支持者说 AI 让自己也开始写原本永远没时间做的定制应用，甚至直接替代商业产品。也有人提醒，个人软件仍有维护、部署和可观测性问题；未来重要的可能是约定代理默认使用 SQLite、纯文本和开放标准，减少孤岛。另一个现实提醒是：即使没有外部用户，也要给未来的自己写文档。

---

## 9. 奔驰把实体按键请回来：触屏万能主义开始退潮 (Mercedes-Benz commits to bringing back physical buttons)


Drive 报道称，Mercedes-Benz 承诺在未来车型内饰中重新引入更多实体按键。抓取到的正文主要是站点导航和简短页面信息，文章细节不足，但标题和讨论显示，核心变化是奔驰承认全触屏/少按钮内饰并不总能提供最佳驾驶体验，准备回到更可触摸、更少分心的控制方式。这个方向与近几年汽车行业的用户反馈一致：空调、音量、驾驶模式等高频操作如果藏在屏幕菜单里，会增加驾驶时认知负担，也可能影响安全。实体按键的回归不是复古，而是承认车内 HMI 与手机 UI 不同，驾驶场景需要盲操作、即时反馈和稳定位置记忆。

原文链接：https://www.drive.com.au/news/mercedes-benz-commits-to-bringing-back-phycial-buttons/

论坛讨论链接：https://news.ycombinator.com/item?id=47997418

HN 讨论怀疑奔驰并非突然理解用户体验，而是受到中国市场监管和消费者偏好的现实压力。有评论指出，中国可能要求或推动关键功能保留实体控制，奔驰不愿失去重要市场。随后讨论扩展到德国汽车软件和 UX 的长期问题：有人批评德国车企过度相信自研车机，却在软件、信息架构和设计决策上被委员会流程拖累。也有人补充，德国工业强项仍在高端机械和工程系统，而不是纯软件产品；汽车 HMI 正好暴露了这两种能力的边界。

---

## 10. 日本养老院和酒店连环停业，背后可能是签证生意 (Care homes and hotels in Japan shut as expansion strategy unravels)



News On Japan 报道，日本多地酒店和养老护理设施在同一经营方扩张后陷入停业。千叶县铫子市的 Hotel New Daishin 曾以海鲜、庭园露天浴池和日本最早日出视角吸引游客，但 2025 年末突然停业，直到 2026 年 4 月仍未见装修复工。调查发现，该公司自 2020 年以来收购了至少 37 家酒店和护理设施，主要位于关东地区，其中至少 24 家已经关闭或停止运营。一些养老机构被收购后迅速出现房租、水电、工资等费用拖欠，最终居民被迫转移。前员工称，公司以 100 万到 500 万日元低价购入设施，再以 4000 万到 1 亿日元卖给中国买家，同时继续掌握运营；宣传材料显示，这可能与日本 Business Manager 签证相关。

原文链接：https://www.newsonjapan.com/article/149075.php

论坛讨论链接：https://news.ycombinator.com/item?id=47992446

HN 评论直接把事件概括为签证骗局，认为原标题“扩张策略失败”淡化了问题。有人提到瑞典二十年前也出现过类似来自中国的投资/签证项目：承诺地方投资，吸引当地政客，最终核心价值是签证而非真实经营。另一条讨论集中在资产价格：为什么酒店和养老院能以低到像二手车的价格被买下？熟悉日本的人解释，乡村空置物业和衰退温泉街资产可能极便宜，但真正成本在维修、债务和运营义务。所谓 40 倍转卖，买家买的很可能不是物业价值，而是商业经营签证入口。

