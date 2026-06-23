---
title: "Codex 日志 bug：本地 SSD 可能被写爆 | Hacker News 摘要 (2026-06-23)"
author: "hacknews"
description: ""
digest: "这条 GitHub issue 指出，Codex 的本地 SQLite 反馈日志可能持续写入大量 TRACE、INFO 和 websocket/SSE 事件，导致 `~/.codex/logs_2.sqlite` 及 WAL 文件产生极高写"
source_url: "https://github.com/openai/codex/issues/28224"
pubDatetime: 2026-06-23 21:00:05.241+08:00
tags:
  - "AI工具"
  - "开发者生态"
  - "隐私监管"
  - "能源基础设施"
---

---

## 1. Codex 日志 bug：本地 SSD 可能被写爆 (Codex logging bug may write TBs to local SSDs)


这条 GitHub issue 指出，Codex 的本地 SQLite 反馈日志可能持续写入大量 TRACE、INFO 和 websocket/SSE 事件，导致 `~/.codex/logs_2.sqlite` 及 WAL 文件产生极高写放大。报告者给出的样本显示，21 天运行后估算写入可达数十 TB，按年外推可能接近 640 TB，对 1TB 消费级 SSD 的寿命很不友好。issue 中还列出高频来源，包括 responses websocket、otel log 镜像和文件系统事件日志。后续更新显示，相关 PR 已合并，预计可减少约 85% 日志量，并给出一个 SQLite trigger 临时阻止写入的 workaround。这个问题的价值不只在 Codex 本身，也提醒本地 AI agent 的遥测、调试日志和持久化策略必须有明确边界。

原文链接：https://github.com/openai/codex/issues/28224

论坛讨论链接：https://news.ycombinator.com/item?id=48626930

HN 讨论明显带有情绪：不少人把这个问题扩展为对 Codex/Claude Code 等 AI 编程工具工程质量的批评，也有人抱怨 UI spinner、GPU 占用、AGENTS.md/CLAUDE.md 等生态碎片。更有建设性的观点集中在两点：第一，AI 工具虽然快速迭代，但基础资源消耗和本地隐私日志不能靠用户事后发现；第二，日志默认级别、保留策略和可关闭性应当作为产品质量的一部分，而不是隐藏实现细节。

---

## 2. Deno Desktop：Deno 也要做桌面应用运行时 (Deno Desktop)


Deno 文档新增 Desktop apps 页面，预告 Deno 2.9 中的 `deno desktop`。它试图把 Web 技术栈变成更直接的桌面应用开发方案：用 Deno.serve 启动本地 HTTP 服务，编译后的二进制打开本地窗口；同时强调小体积、Node 兼容、框架自动检测、HMR、进程内 bindings、跨平台编译、二进制差分自动更新等能力。它的定位是回应 Electron、Tauri、Electrobun 等方案的取舍：Electron 体积大，Tauri 依赖系统 WebView 带来平台差异，其他方案在生态、更新、框架集成上各有短板。Deno 的路线看起来是用 CEF/浏览器运行时和 Deno 自身权限/工具链整合，给 JS/TS 开发者一条更完整的桌面发布路径。

原文链接：https://docs.deno.com/runtime/desktop/

论坛讨论链接：https://news.ycombinator.com/item?id=48626137

讨论主要围绕 CEF 与系统 WebView 的取舍。有人关注“共享 CEF runtime”是否真能让每个应用只占几 MB，还是最后仍会因为版本差异退化成每个应用捆绑一份浏览器。Tauri 用户则争论系统 WebView 的现实成本：Windows 体验较好，macOS 旧 WebKit 和 Linux 支持可能带来大量野外 bug。也有人认为 Web 开发本来就要处理平台差异，不应夸大。整体看，社区期待 Deno 能给 Electron 之外的桌面开发带来新选择，但关键仍在包体、更新、运行时兼容和跨平台一致性。

---

## 3. Moebius：2 亿参数修图模型挑战 100 亿级效果 (Moebius: 0.2B image inpainting model with 10B-level performance)





Moebius 是一个轻量级图像修补/补全框架，项目页宣称用 0.2B 参数实现接近 10B 级工业模型的 inpainting 表现。它的核心思路不是继续堆大模型，而是重构 diffusion backbone，引入 Local-λ Mix Interaction 模块，把局部空间上下文和全局语义先验压缩进固定大小的线性矩阵，以缓解极端压缩下的表示瓶颈。项目强调部署实用性：大模型虽然效果强，但算力和延迟成本太高；如果一个任务专用的小模型能在质量上接近大模型，就更适合浏览器、本地工具和边缘设备。页面提供论文、代码和可视化样例，重点展示低参数量下的修图质量。

原文链接：https://hustvl.github.io/Moebius/

论坛讨论链接：https://news.ycombinator.com/item?id=48630171

HN 上最有价值的反馈来自实际试跑：Simon Willison 已把模型转成 ONNX，并做了一个完全在浏览器运行的交互 demo，但需要约 1.3GB 下载。讨论随后转向权重量化和浏览器部署，有人问是否尝试 fp16 或更低精度，也有人关心 unet 权重大小。整体氛围偏正面：大家认可小模型在特定任务上的实用意义，尤其当它能脱离云端、在用户设备上运行时，会同时降低成本和隐私风险。

---

## 4. Flock 滥用案：车牌识别为什么需要搜查令 (Flock-Powered Police Chiefs Stalking Women Shows Why Warrants Are Needed)




IPVM 报道了多起警察使用 Flock 车牌识别系统追踪前伴侣、恋爱对象或私人对手的案例，并以此论证 LPR 使用应先取得搜查令。文章核心反驳 Flock 的公关说法：它追踪的是车辆而不是人。现实中，当警察为了找某个人反复查询车牌时，车辆只是机制，人才是目标。报道提到伊利诺伊一名警察局长被控用 Flock 和州警数据库追踪六名私人认识的人，其中三名是有过恋爱关系的女性；类似案例还出现在多地。IPVM 承认 LPR 能帮助破案、找回失车和寻找失踪者，但认为真正紧急情况已有例外规则，日常查询必须有外部司法监督。

原文链接：https://ipvm.com/reports/police-chiefs-track

论坛讨论链接：https://news.ycombinator.com/item?id=48634694

评论区普遍把问题视为“强力监控工具 + 内部自律不足”的必然结果。有人指出，系统一旦能被用于私人目的，就不能只靠培训和事后处分；也有人把它类比为广告追踪、GPS 定位和数据库权限滥用。少数讨论更关注制度设计：不要把普通人放在巨大诱惑和零监督的位置上，流程和授权门槛既保护公众，也保护执法者不越界。整体共识是，Flock 这类技术不是完全不能用，但不能在无搜查令、无审计的状态下常态化查询。

---

## 5. Steam Machine 今日开放预约：Valve 用随机队列防黄牛 (Steam Machine launches today)




Valve 宣布 Steam Machine 今日启动发售/预约流程。抓取到的页面正文较少，但 HN 正文链接和讨论显示，这次重点在 Steam Machine 新硬件发布，以及 Valve 采用随机预约顺序而不是固定开抢时间。Valve 的解释是，固定时间开售会奖励 bot、网速、刷新的手速和能准点守候的人；改成几天内开放报名、之后随机排序，可以减少抢购摩擦，让真实玩家更公平地获得首批机器。页面还关联到 Steam Machine 销售页、LTT Labs 关于硬件的文章和视频。作为 Valve 再次进入客厅/小型游戏 PC 赛道的产品，这次发售机制本身也成为讨论焦点。

原文链接：https://store.steampowered.com/news/group/45479024/view/685257114654870245

论坛讨论链接：https://news.ycombinator.com/item?id=48632884

HN 讨论非常热，焦点不是硬件规格本身，而是随机预约能否有效反黄牛。支持者认为，如果每个真实玩家账户都有相似概率，而黄牛控制的账号占比远小于真实玩家，随机队列会显著降低首批机器被抢走的比例。也有人提出可进一步按配送地址、支付方式、会员年限等做过滤，减少同地址批量下单。反方担心黄牛仍可用大量账号、地址和“人肉 mule”绕过限制。整体看，社区认可随机队列优于定时开抢，但仍认为账户质量验证和发货前风控同样重要。

---

## 6. 从 Claude 切到开源模型，代价真的很低吗？ (There is minimal downside to switching to open models)


这篇文章提出一个判断：切换到开放模型的下行风险正在变小。作者类比早期使用 Linux 的职业风险：过去放弃主流商业软件会牺牲效率和兼容性，但今天 Web 应用、成熟开源生态和更强工具链让这种牺牲小得多。开放模型也在经历类似变化，虽然通过第三方 API 使用会带来隐私和数据共享顾虑，自托管又可能昂贵、复杂、偏慢，但模型能力和工具链已经足够让作者认真考虑停止依赖 Claude。文章更像一篇行动前的判断：如果开放模型已经能覆盖大多数个人/专业工作流，就有理由减少对封闭供应商的依赖，把迁移成本、隐私和长期控制权纳入决策。

原文链接：https://www.marble.onl/posts/cancel_claude.html

论坛讨论链接：https://news.ycombinator.com/item?id=48622518

评论区对标题非常不买账。最高赞观点指出，文章标题断言“切换代价很低”，但正文其实没有展示作者已经完成迁移，结尾更像“希望代价很低”。因此很多人把它视为愿望而非证据。也有人补充，开放模型的真实问题在于隐私、托管方可信度、硬件成本、延迟、工具链成熟度和闭源模型质量差距。讨论的价值在于把“开源模型可用”拆成几个具体问题：模型能力、部署方式、数据控制、生态工具和迁移验证，只有逐项成立，低代价切换才有说服力。

---

## 7. 加拿大押注核电复兴：2040 年前最多建 10 座反应堆 (Canada plans 'nuclear renaissance' with up to 10 reactors built by 2040)


CBC 报道称，加拿大联邦能源部长计划推动一场“核电复兴”，目标是在未来约 15 年内建设最多 10 座新核反应堆，其中至少一座位于安大略省之外。官员估计，新联邦核战略成本可能超过 1000 亿美元。加拿大具备若干基础条件：丰富铀资源、CANDU 反应堆经验，以及达灵顿等项目的建设和翻新经验；同时，安大略等地区在增加风能、太阳能之后仍需要稳定基荷电源。文章的关键问题是执行能力：大型核电项目常因监管、定制化设计、成本超支和周期拖延而失败，若想在 2040 年前落地，必须解决标准化、审批和供应链组织。

原文链接：https://www.cbc.ca/news/politics/federal-nuclear-strategy-9.7244509

论坛讨论链接：https://news.ycombinator.com/item?id=48634585

HN 讨论基本认可加拿大发展核电的战略逻辑，但对“最多 10 座、15 年”是否现实存在分歧。支持者认为加拿大有铀矿、成熟 CANDU 技术和既有运维经验，核电是少数可与可再生能源互补的低碳基荷。质疑者强调项目管理：如果每座反应堆都像美国经验那样变成定制工程，成本和培训都会失控；如果能把它作为一个标准化大项目推进，共用设计、零部件、模拟训练和认证体系，成功概率才更高。

---

## 8. Mitchell Hashimoto 再捐 40 万美元给 Zig 基金会 (Pledging another $400k to the Zig software foundation)


Mitchell Hashimoto 宣布其家庭将再次向 Zig Software Foundation 承诺捐赠 40 万美元。文章的重点不只是捐款金额，还包括他对 Zig 技术项目和社区文化的认可。近期 Zig 因严格禁止 LLM 贡献的政策再次成为争议焦点，尤其与 Bun 的 Zig fork、Rust 重写讨论交织在一起。Mitchell 表示自己大量使用 AI，也公开写过 AI 辅助开发的经验和限制；他的观点并不完全等同于 ZSF，但他仍尊重 Zig 的选择，并认为互联网之所以有价值，正是因为不同项目可以坚持不同的怪异路线。捐款因此被表达为对技术与社区独立性的支持，而不是对某个争论阵营的表态。

原文链接：https://mitchellh.com/writing/zig-donation-2026

论坛讨论链接：https://news.ycombinator.com/item?id=48630020

评论区最认同的是“互联网允许人们以不同方式保持怪异”这一点。很多人借此讨论开源社区里的分歧处理：AI 贡献可以有效，也可能伤害维护者体验；项目可以接受 AI，也可以基于质量、信任或文化选择拒绝。有人认为现代社交平台常把不同意见迅速推向互相攻击，而 Mitchell 的文章提供了一种更成熟的姿态：承认多件事可以同时为真，支持一个项目不等于要求它完全复制自己的工作方式。

---

## 9. 我的旧工作，是否只是风投欺诈的副产品？ (Did my old job only exist because of fraud?)





作者回顾早年在英国创业公司 GenieDB 的经历：公司后来被美国风投基金 Frost VP 接手，他也因此来到美国并改变了人生轨迹。多年后，他得知 Frost 因欺诈被 SEC 起诉，于是查阅仲裁和诉讼材料，追问自己的那份工作是否只是基金通过孵化器向组合公司收取过高服务费的工具。材料显示，Frost VP 的商业模式被投资者指控为创建或控制公司，再向其收取高额费用；GenieDB 是否属于其中没有被正式裁定。作者最终的结论较克制：基金经理可能确实在侵占 runway，但 GenieDB 的技术概念早于 Frost，并非完全空壳；同事们也真实地在构建东西。文章把职业经历、资本结构和个人命运的不确定性放在一起反思。

原文链接：https://david.newgas.net/did-my-old-job-only-exist-because-of-fraud/

论坛讨论链接：https://news.ycombinator.com/item?id=48622867

评论区把这篇个人故事扩展到更广泛的组织经济学。有人分享在大银行或外包体系中看到的类似现象：同一个工程师被裁掉后通过供应商高价回流，成本结构对管理层反而更“可解释”。讨论者普遍认为，很多岗位并不是因为一线工作没有价值，而是因为公司治理、采购、税务、融资或会计激励扭曲了资源流向。文章引发共鸣的地方在于，它没有简单把自己描述成受害者或英雄，而是承认真实工作可能同时处在真实价值和可疑资本安排之中。

---

## 10. 手机相册里的意外 Wigglegram (Help I accidentally a wigglegram)





作者发现自己多年拍照时经常从相近角度连拍，手机相册里实际上藏着大量“意外 wigglegram”。Wigglegram 是一种通过循环多个略有视差的画面，制造立体或轻微运动感的 GIF/短动画。作者用感知哈希扫描 iCloud 照片，寻找相似但不完全相同的图片对，再用汉明距离设定阈值，把这些连拍或近似照片自动提取出来。结果不仅包括有明显视差的街景、旅行照、动物，也有更像小电影的 kinescopic 片段。文章技术含量不复杂，但很有趣：它把“相册垃圾”和感知哈希结合起来，把日常犹豫和重复拍摄变成一种意外的视觉档案。

原文链接：https://lmao.center/blog/wiggle-accidents/

论坛讨论链接：https://news.ycombinator.com/item?id=48605561

讨论区补充了 wigglegram 的多种制作方式：一种是使用多镜头相机同时拍摄水平位移画面，80 年代曾有 Nimslo 这类相机用于 lenticular 3D；另一种是从单张图生成深度图，再合成不同视角。有人指出作者的效果较抖，是因为照片不是同时拍摄，曝光和对齐也不稳定；也有人提到 iPhone Live Photos、LiDAR 深度图和生成式 AI 可能让 wigglegram 重新变得容易。整体讨论偏轻松，技术点集中在对齐、稳定、曝光一致性和自动筛选。
