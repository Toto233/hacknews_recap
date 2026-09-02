---
title: "Anthropic 发布 Claude Fable 5.1 与 My | Hacker News 摘要 (2026-09-02)"
author: "hacknews"
description: ""
digest: "Anthropic 推出 Claude Fable 5.1 与 Mythos 5.1：两者底层是同一个模型，区别在安全策略和开放范围。Fable 面向普通用户、Claude Code、云平台与 API 全面提供，重点提升编程、知识工作、长时"
source_url: "https://www.anthropic.com/claude-fable-and-mythos-5-1"
pubDatetime: 2026-09-02 20:47:29.896+08:00
tags:
  - "人工智能"
  - "开源生态"
  - "移动平台"
  - "软件工具"
---

---

## 1. Anthropic 发布 Claude Fable 5.1 与 Mythos 5.1 (Claude Fable 5.1 and Claude Mythos 5.1)





Anthropic 推出 Claude Fable 5.1 与 Mythos 5.1：两者底层是同一个模型，区别在安全策略和开放范围。Fable 面向普通用户、Claude Code、云平台与 API 全面提供，重点提升编程、知识工作、长时代理任务和科研能力；Mythos 则通过可信访问计划，仅向经过审核的网络防御和生命科学机构开放，以允许更敏感的专业任务。Fable 5.1 的普通输入、输出价格仍为每百万 token 10 美元和 50 美元，但缓存读取降至 0.25 美元，官方估算典型工作负载可节省约 25%，上下文和工具调用密集的代理任务可节省约 45%。新版还调整了企业零数据保留和网络安全拦截策略，称 Claude Code 每次会话受安全措施干预的次数平均减少约 60%。这些数字均来自 Anthropic 自测和客户早期反馈，实际收益仍取决于任务、effort 档位与缓存命中率。

原文链接：https://www.anthropic.com/claude-fable-and-mythos-5-1

论坛讨论链接：https://news.ycombinator.com/item?id=49525378

讨论没有只盯着基准分数。Anthropic 员工认为 Fable 5.1 更明显的改进是写作语气自然、遵循风格指令更稳定，并特别强调其 Terminal-Bench-Science 成绩相较 Fable 5 翻倍，可能预示数学之外的科研突破。其他读者却把话题转向模型之间越来越浓的固定文风：有人猜测代理正在为其他代理压缩信息，也有人反驳最终输出并不精炼，长会话留下的交接文字反而晦涩、难以判断行动项。社区期待能力提升，但“模型更会写”是否真的意味着人更容易读懂，仍没有共识。

---

## 2. Google Play 逼 AnkiDroid 移除捐款链接 (AnkiDroid: Google Play no longer allowing Open Collective donation link)




AnkiDroid 团队称，自 8 月 28 日起，Google Play 持续拒绝包含 Open Collective 捐款链接的新版本；若未在 9 月 11 日前解决，应用可能被商店移除。AnkiDroid 是下载量超过一千万的免费开源记忆卡应用，应用内不销售功能，Open Collective 是志愿者维护和开发的唯一资金来源。争议集中在 Google 支付政策对“经验证的免税组织”的解释：项目提交了 Open Source Collective 的美国 501(c)(6) 认定文件，但 Google 回复仍称收款组织并非免税机构，没有说明为何该身份不合格。为保住绝大多数依赖 Play Store 的用户，团队准备在 2.24.x 商店版本中立即删除捐款入口，同时保留抗议；Google 给出的其他路径包括应用内购买、替代支付或外部内容链接计划。

原文链接：https://github.com/ankidroid/Anki-Android/issues/21656

论坛讨论链接：https://news.ycombinator.com/item?id=49520022

HN 读者把事件视为应用商店权力问题，举出 WireGuard 曾被下架的旧例，认为单一分发者可以用含糊规则切断开源项目触达用户和获得资助的渠道。有人提醒 AnkiDroid 仍可通过 F-Droid 或直接下载安装，反方则指出“理论上可以侧载”没有解决默认商店控制绝大多数普通用户的现实；每次都用复杂绕路安慰用户，只会让限制逐步常态化。讨论也比较了苹果更封闭的生态，但多数人认为另一个平台更糟，并不能替 Google 的决定辩护。

---

## 3. 67 美分训练的小型 Transformer 拿下 ARC-AGI-1 44% (I trained a small transformer in 1.5hrs and it beats many LLMs)




Mithil Vakde 用一张 RTX 5090 从零训练一个小型自回归 Transformer，约 1.5 小时、折算 0.67 美元，就在 ARC-AGI-1 公开评测取得 44%，ARC-2 得分为 7%。目标不是做通用语言模型，而是研究极少样本下的推理和元学习效率：ARC 只有约一千道训练谜题，每题规则不同，却共享颜色、形状等概念。模型在测试时对题目样本重新训练，使用任务嵌入、三维 RoPE、颜色和二面体变换增强，再提交最常见的两个输出。相较上一版，主要增益来自 SwiGLU、RMSNorm、八层网络、更丰富的数据和更好的打乱；成本下降来自减少增强、改用 Normuon，以及可变长度 Flash Attention。作者还只对输出 token 计算损失，使成绩从约 40% 升到 44%，并谨慎过滤 ARC-2 与 ARC-1 重叠题，避免数据泄漏。

原文链接：https://mvakde.github.io/blog/44-on-arc-1/

论坛讨论链接：https://news.ycombinator.com/item?id=49519939

作者在 HN 特别澄清，这不是 LLM，而是从零训练的小型自回归 Transformer；他想证明复杂任务未必都需要巨型预训练模型，也把样本效率而非参数规模视为核心问题。他承认更强成绩尚未公开证明，并称自己最初只是借 ARC 学习机器学习。读者认为有意识地整理训练数据本身就是重要贡献，因为多数实验直接沿用现成数据集；也有人追问为何没有尝试 MAML 等元学习算法，以及方法能否扩展到交互式 ARC-AGI-3。作者判断可以尝试，但会需要更大模型和显著改造。

---

## 4. Dan Luu 逐条核验一位 AI 怀疑论者的预测 (How accurate have Ed Zitron's AI skeptic predictions been?)


Dan Luu 整理 Ed Zitron 自 2024 年以来关于生成式 AI 和大型科技公司的公开判断，再用后来发生的营收、利润、用户规模、融资和产品表现逐条核验。文章先详查“Meta、Google、Microsoft 正在衰亡、押注 AI 是因为无法增长”的说法：Luu 列出的财报数据显示，三家公司随后仍保持显著增长，例如 Meta 2025 年营收 2010 亿美元，2026 年上半年营收同比增速达到 30%；Alphabet 和 Microsoft 的收入、营业利润也没有呈现濒死状态。后续清单还检查 GPT-5 是否显著进步、Gemini 用户规模、OpenAI 增长、CoreWeave 上市等预测，并把尚未到期或无法证伪的说法单独标记。作者并非据此断言 AI 投资必然合理，而是批评一种论证习惯：预测失败后不断移动标准，却继续用确定语气发布下一次崩盘预告。

原文链接：https://danluu.com/zitron/

论坛讨论链接：https://news.ycombinator.com/item?id=49526069

评论区没有因此全盘否定 AI 怀疑论。支持 Zitron 部分观点的读者认为，OpenAI 和 Anthropic 的收入未必足以覆盖长期算力承诺，企业内部也存在管理层为了“AI 优先”而强推的低价值项目；如果模型商品化、价格下降，今天由订阅补贴制造的高用量可能迅速消失。有人举出用多个订阅榨取远高于付费金额的 API 等价用量，认为当前需求被补贴放大。分歧由此从“模型有没有用”转向“现有收入、使用量和数据中心投资能否在取消补贴后成立”。

---

## 5. Firefox iOS 加入内置广告拦截器 (Introducing Ad Blocker for Firefox on iOS)



Mozilla 为 Firefox iOS 推出内置 Ad Blocker，利用苹果 WebKit Content Blocker 与 EasyList，在页面加载前阻止大量第三方广告、广告网络及相关追踪器，不需要安装独立扩展。功能默认关闭，用户可在 Settings > Browsing > Ad Blocker 中自行启用，并与 Firefox 原有的增强型跟踪保护同时工作。受 iOS 浏览器机制和过滤范围限制，它并不是完整替代桌面版 uBlock Origin：网站自己直接投放的第一方广告、搜索结果页广告仍会显示，Firefox 新标签页中的赞助快捷方式和赞助内容也不受影响。Mozilla 把它定位为减少弹窗、遮罩和页面干扰的可选工具，并承认无法覆盖所有广告技术；功能仍处于逐步推送阶段，并非所有用户都会立即看到入口。

原文链接：https://blog.mozilla.org/en/firefox/ad-blocker-on-ios/

论坛讨论链接：https://news.ycombinator.com/item?id=49521973

讨论最大的质疑不是“能否少看几条广告”，而是它明确放过搜索广告。有读者指出，搜索结果顶部的诈骗广告会诱导用户拨打假客服、交出银行信息，因此这恰恰是最需要拦截的区域；他们怀疑 Mozilla 与 Google 的搜索合作限制了处理空间。另一批人不满 Firefox 自己的新标签页赞助内容也被排除，认为这是一款经过阉割的拦截器；反方提醒这些赞助项可在设置中单独关闭。话题最终回到 Mozilla 对 Google 资金的依赖，以及用户是否愿意直接为浏览器付费。

---

## 6. ChatGPT 桌面运行时带着一套 LibreOffice (The ChatGPT/Codex app bundles a full copy of LibreOffice)


Simon Willison 检查本机缓存时发现，桌面版 Codex——现已更名为 ChatGPT——在 `codex-primary-runtime` 目录保存了约 1.7 GB 的运行环境。里面不只有完整的 Python 和 Node.js，还包括 Poppler、Git、图像处理组件及无界面的 LibreOffice；截图显示 `libreoffice-headless` 单项约占 429.7 MB。运行时的插件目录同时包含文档处理 Skill，用来告诉 Agent 如何寻找并调用这些原生程序。这解释了桌面应用生成、读取、转换和视觉检查 Word、Excel、PowerPoint、PDF 等文件时，并非单靠模型输出格式，而是组合了成熟的开源工具和本地执行环境。原帖只记录作者机器上的发现，尚不能证明所有平台都在安装包内预置同样组件，还是首次启动相关功能时再下载。

原文链接：https://simonwillison.net/2026/Sep/1/codex-libreoffice/

论坛讨论链接：https://news.ycombinator.com/item?id=49527396

HN 很快把“带着 LibreOffice”拆成两个问题。技术上，有人确认全新安装后首次启动会出现相同目录，也有人在 Windows 上看不到 LibreOffice，因此更可能是运行时按平台或首次初始化下载，而非所有安装包静态捆绑。用途方面，开发者表示自己也会用无界面 LibreOffice 读取旧 XLS 等难处理格式，认为体积换兼容性很现实。另一条争论则是商业公司是否应向 LibreOffice 捐款：有人认为这是回馈志愿者生态的正确做法，也有人强调宽松许可证没有法律上的付费义务。

---

## 7. Aurora Store 匿名下载全面报错 (Play Store blocks AuroraStore, hurting GrapheneOS users)


Aurora Store 的 GitLab 问题单记录了一次影响匿名账户的集中故障：稳定版和 2026 年 8 月 31 日 Nightly 在安装任何应用时都会返回“Server busy, please try again later”。报告者没有 Google 账户，换 VPN、清缓存、刷新匿名账户、强制停止应用和重启设备均无效，因此怀疑问题出在匿名访问链路，而非本机网络或单个 APK。现有材料只确认用户侧症状，没有提供 Google 主动封锁 AuroraStore 的官方说明、服务端错误码或维护者根因分析；因此更准确的结论是匿名安装能力当时失效，而“Play Store 封杀”仍是 HN 标题对现象的解释。对依靠 AuroraStore 获取 Play 应用、同时不愿把设备登录到 Google 账户的用户，这类故障会直接切断安装和更新渠道。

原文链接：https://gitlab.com/AuroraOSS/AuroraStore/-/work_items/1566

论坛讨论链接：https://news.ycombinator.com/item?id=49523754

评论首先纠正标题对 GrapheneOS 的描述：该项目官方更推荐沙盒化 Google Play，而不是 AuroraStore；用户也可以创建不承载邮件、通讯录等数据的专用 Google 账户。反方指出 AuroraStore 的核心价值恰恰是无需登录即可下载，并能导出 APK；一旦改用官方商店，设备就必须绑定账号。进一步的讨论认为“专用账户”很难真正与身份隔离，因为 IP、设备和浏览器特征仍可关联。

---

## 8. Fastpotify 用原生 Rust 重做 Spotify 客户端 (Fastpotify)



Fastpotify 是面向 Linux、macOS 和 Windows 的轻量 Spotify 桌面客户端，以 Rust、egui 和 librespot 构建，不嵌入浏览器引擎。项目称程序可在一秒内启动，典型内存占用约 100–250 MB，并支持本地播放、无缝衔接和最高 320 kbps 音质，也能通过 Spotify Connect 控制手机、音箱或电视。它覆盖歌单、喜欢的歌曲、专辑、艺人、播客、搜索和歌单编辑，提供明暗主题与从专辑封面取色的播放器。比较特别的部分是可加载经典 Winamp 2 皮肤的迷你播放器，以及基于 projectM 的 MilkDrop 可视化窗口；Linux 还支持 MPRIS，关闭主窗口后也可由托盘继续播放。项目采用 MIT 许可证，并公开连接方式和凭据存储说明，目标是用本地应用替代 Spotify 官方客户端的迟缓与界面负担。

原文链接：https://fastpotify.rocks/

论坛讨论链接：https://news.ycombinator.com/item?id=49517448

评论几乎变成 Spotify 官方客户端的集体吐槽：离线时搜索先等待网络超时、相同外观的歌曲条目却有不同手势、切歌后封面不同步，都被用来说明其状态管理和交互缺乏一致性。有人把问题归因于多团队、微服务和前端模块各自演进，戏称“Spotify 模型”真正留下的是组织方法博客，而不是优秀客户端；也有人反驳这种说法把自治团队过度简化。讨论虽然没有深入审查 Fastpotify 的协议兼容性，却清楚解释了为什么一个启动快、资源少、功能收敛的第三方客户端会获得关注。

---

## 9. 陶哲轩用六个概念串起数学体系 (Terence Tao explains 6 essential mathematical concepts [video])



陶哲轩在 Big Think 访谈中用六个支柱组织数学：数、代数、几何、概率、分析和动力学。它们从计数、符号关系、空间测量、不确定性、连续变化与随时间演化等直觉问题出发，经过数百至数千年发展成为精密语言；数学的价值不只是算出答案，还在于把模糊经验压缩成可推演、可迁移的结构。访谈用历史案例说明数学与科学相互驱动：早期计数先于文字，几何源于土地测量，开普勒研究酒桶容积时触及后来微积分处理的优化问题，而概率、分析和动力学又让人能够描述噪声、极限与复杂系统。陶哲轩也谈到 AI 对研究的影响：模型可以协助寻找模式、验证步骤和扩大实验范围，但可靠数学仍要求可检查的论证，人类需要决定什么问题值得问、什么解释真正带来理解。

原文链接：https://www.youtube.com/watch?v=OOMx2BHHWtE

论坛讨论链接：https://news.ycombinator.com/item?id=49503521

读者最欣赏的是陶哲轩能解释复杂概念而不显得居高临下，有人据此引用“真正理解才能讲清楚”，并建议把几何换成拓扑，或为逻辑与类型论留位置；动力学进入六项名单则获得特别认可。反对意见认为研究能力和表达能力是两种技能，优秀工程师也可能无法说清自己的方案。随后形成的折中是：深刻理解是良好解释的必要条件，却不是充分条件；讲解者还必须理解听众已有的知识、决定哪些细节可以暂时略过，并针对不同受众重新选择问题的“本质”。

---

## 10. Ambient CSS 用 Blender 校准网页光影 (Ambient CSS v3 – Blender meets CSS)


Ambient CSS v3 想把网页阴影从零散视觉预设变成同一物理场景的结果。开发者只需在父容器定义光线方向、主光与补光强度、色相和高度，子元素的投影、边缘高光、内阴影与表面渐变就会同步变化，而不是每张卡片分别套用互不关联的 shadow-sm、shadow-lg。每个控件由五层 `box-shadow` 组合，并可独立选择平面、凹面或凸面，倒角、圆角或沟槽，以及哑光、亮面、玻璃、拉丝、旋纹和喷砂等材质。项目先在配套 ambient3d 中用 Blender 光线追踪生成相同几何与光照的参考图，再拟合 CSS 参数，让浏览器里的 DOM 接近离线渲染。仓库同时提供零依赖 CSS 包、React 控件、交互文档和合成器式演示；它追求的是统一、可调的视觉规律，不是把真正的三维渲染塞进页面。

原文链接：https://ambientcss.vercel.app/

论坛讨论链接：https://news.ycombinator.com/item?id=49523387

HN 的兴趣很快从光照算法转向 AI 生成界面的审美。批评者担心它会强化 Claude 常见的“伪信息密度”：到处是没有业务意义的状态标签、眉题和仪表盘装饰，看似复杂却没有更多信息。也有人期待拟物设计回归，但强调真正吸引人的旧式拟物界面来自逐个元素的意图和细节，而不是模型自动堆阴影。讨论因此给项目划出边界：一致的光照系统能提供更好的材料基础，却不能替代排版、可访问性、性能测试和设计判断；工具是否改善 UI，取决于使用者是否愿意完成最难的取舍。
