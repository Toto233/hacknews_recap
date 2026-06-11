---
title: "把网站改回 HTML 优先后，用户量一夜翻倍 | Hacker News 摘要 (2026-06-11)"
author: "hacknews"
description: ""
digest: "这篇文章讲的是一个英国公用事业相关服务的改版经历：原来的站点是典型 React 单页应用，页面加载慢、失败状态多，对低端手机、弱网络和辅助技术都不友好。作者把核心流程改成 HTML 优先，用 Astro 生成静态页面，把表单、跳转和基础交互"
source_url: "https://mohkohn.co.uk/writing/html-first/"
pubDatetime: 2026-06-11 20:06:05.073+08:00
tags:
  - "Web开发"
  - "AI安全"
  - "开发工具"
  - "硬件创新"
---

---

## 1. 把网站改回 HTML 优先后，用户量一夜翻倍 (Building an HTML-first site doubled our users overnight)


这篇文章讲的是一个英国公用事业相关服务的改版经历：原来的站点是典型 React 单页应用，页面加载慢、失败状态多，对低端手机、弱网络和辅助技术都不友好。作者把核心流程改成 HTML 优先，用 Astro 生成静态页面，把表单、跳转和基础交互先交给浏览器原生能力处理，再只在确实需要的地方加少量 JavaScript 做渐进增强。结果上线后，真实完成流程的用户数几乎一夜翻倍。文章的重点不是反 React，而是提醒公共服务、表单和内容型产品不应该默认把所有复杂度推给客户端；在用户设备和网络不可控时，少一点框架，多一点标准 Web，往往就是更高的可达性和转化率。

原文链接：https://mohkohn.co.uk/writing/html-first/

论坛讨论链接：https://news.ycombinator.com/item?id=48475483

讨论集中在为什么“HTML 优先”反而会被团队视为更难。一些人认为很多初中级开发者只熟悉 React/SPA 工作流，不熟悉浏览器原生表单、服务端渲染和渐进增强；也有人指出，公共服务网站必须照顾老手机、弱网络和无障碍场景，工程选择不能只按开发者电脑上的体验判断。

---

## 2. Anthropic：Fable 和 Mythos 模型将保留 30 天数据 (Anthropic requires 30 day data retention for Fable and Mythos)




Anthropic 更新了 Mythos 级模型的数据保留规则：当用户使用 Fable、Mythos 这类前沿模型时，相关提示和输出会被保留最多 30 天，用于信任与安全检测。受影响的范围包括 Claude Console、企业版以及 Bedrock、Google Cloud、Azure 等平台上的零数据保留组织；普通消费者产品不在此次变更范围内。Anthropic 的解释是，前沿模型可能被用于 Best-of-N 越狱、自动化攻击或国家级滥用，短期保留数据能帮助识别跨平台模式。公司同时强调访问权限受限、审计日志不可篡改，并会在 30 天后自动删除，除非样本进入安全调查。对企业用户来说，这意味着最强模型和严格数据边界之间出现了新的取舍。

原文链接：https://support.claude.com/en/articles/15425996-data-retention-practices-for-mythos-class-models

论坛讨论链接：https://news.ycombinator.com/item?id=48464258

HN 讨论一部分在调侃 Claude 近期过度谨慎、简单问候也可能触发降级或冗长安全推理；另一部分则担心“零保留”承诺在前沿模型上被重新定义。大家关注的不只是 30 天本身，而是模型能力越强，供应商越倾向于把安全治理放在客户隐私边界之上。

---

## 3. 安全研究者不满 Anthropic Fable 的网络安全护栏 (Cybersecurity researchers aren't happy about the guardrails on Anthropic's Fable)



TechCrunch 报道称，Anthropic 新的 Fable 模型在网络安全任务上触发了大量护栏，令安全研究者和工程团队不满。根据反馈，模型不仅会拒绝明显危险的请求，也可能拒绝安全代码审查、漏洞分析、加固建议等正常防御工作，或者自动降级到较弱模型。Anthropic 提供了 Cyber Verification Program，让经过验证的研究人员获得更少限制，但这也意味着普通企业和独立研究者需要经过额外流程才能使用完整能力。报道反映出前沿模型的一个现实冲突：越是有能力的模型，越难在“阻止攻击者”和“帮助防守者”之间划出稳定边界，过严会伤害专业工作流，过松则会带来滥用风险。

原文链接：https://techcrunch.com/2026/06/10/cybersecurity-researchers-arent-happy-about-the-guardrails-on-anthropics-fable/

论坛讨论链接：https://news.ycombinator.com/item?id=48478969

讨论里很多人认为 Anthropic 先把部分安全策略做成不可见降级，后来又改为更可见的护栏，已经损害信任。也有人把这和企业级 AI 产品常见的“先承诺能力，再因合规和安全收紧”联系起来。争议核心在于：安全研究本身就接近攻击技术，简单关键词拦截很容易误伤。

---

## 4. 奔驰开始量产电动轴向磁通电机 (Mercedes‑Benz starts large‑scale production of electric axial flux motor)


奔驰宣布在柏林 Marienfelde 工厂启动电动轴向磁通电机的大规模生产，这是其电驱动战略中的关键一步。该产线覆盖约 3 万平方米、3 个生产大厅和 7 条生产线，包含 98 个工艺步骤，并引入 35 项全球首创工艺和 30 多项专利。轴向磁通电机的特点是体积更薄、功率密度更高，适合高性能电动车平台；奔驰计划首先把它用于新一代 AMG GT 四门 Coupe。生产过程中还使用矩形铜线绕组、自动化装配和 AI 视觉质检等技术。新闻的价值不只是单个电机，而是说明传统车厂正在把高功率密度电机从实验室和小批量阶段推进到稳定量产。

原文链接：https://media.mercedes-benz.com/en/article/bebac2af-acdc-465a-9538-adb0bf3d8ccf

论坛讨论链接：https://news.ycombinator.com/item?id=48472877

HN 讨论提到奔驰收购 Yasa 后终于把轴向磁通电机推向规模化生产，也有人关心这种电机是否适合改装车或老车电动化。另一条线索是电池重量：电机变小变强只是整车效率的一部分，真正限制很多电动车体验的仍是电池包成本、重量和能量密度。

---

## 5. Apache Burr：用状态机方式构建可靠 AI Agent (Apache Burr: Build reliable AI agents and applications)


Apache Burr 是一个 Python 框架，目标是把 AI Agent 和复杂应用拆成明确的 action、state 和 transition，而不是把全部逻辑塞进提示词和回调。它提供状态持久化、分支、并行执行、人工介入、重放、测试和可观测 UI，能和 OpenAI、Anthropic、LangChain、Hamilton、FastAPI、Postgres 等工具配合。它的核心主张是：Agent 不是一次性聊天，而是会跨步骤、跨工具、跨失败重试运行的状态化程序，因此需要像普通软件一样有可检查的执行图、状态快照和回放能力。对于需要审计、调试和稳定交付的 AI 应用来说，这类框架试图把“魔法感”压回工程边界内。

原文链接：https://burr.apache.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48477400

讨论对 Agent 框架保持谨慎。一些人认为核心逻辑其实不复杂，框架可能制造抽象负担；另一些人则指出，真实生产系统很快会遇到上下文管理、任务队列、状态恢复、评测、沙箱和人工审核等问题，这些横切能力如果都手写，复杂度并不低。

---

## 6. PgDog 获融资，想把 Postgres 横向扩展做成代理层 (PgDog is funded and coming to a database near you)




PgDog 宣布获得 550 万美元融资，并继续推进其开源 Postgres 代理产品。PgDog 的目标是在应用和数据库之间提供连接池、负载均衡、故障转移和分片能力，让 Postgres 可以支撑更高吞吐和更大数据规模。项目方称现有部署已经达到每秒 200 万次以上查询、20TB 以上分片数据，并计划推出企业版。它的吸引力在于不要求开发团队立即放弃 Postgres 或重写到专用分布式数据库，而是用代理层承接一部分横向扩展复杂度。当然，真正难点仍在分片键、跨分片查询、迁移和一致性语义上，代理只能把工程入口变窄，不能让分布式问题消失。

原文链接：https://pgdog.dev/blog/our-funding-announcement

论坛讨论链接：https://news.ycombinator.com/item?id=48476466

HN 讨论主要围绕分片策略和高可用能力展开。有人批评简单 modulo 分片不如虚拟分片灵活，也有人追问 PgDog 是负载均衡器还是扩展数据库。项目作者回应称健康检查、故障转移和负载均衡已经支持。更大的分歧是：该继续强化 Postgres，还是在高规模场景转向 DynamoDB 等专用系统。

---

## 7. 软件黑客松死了，硬件黑客松该回来了 (RIP software hackathons. Long live the hardware hackathon)


作者认为，AI 编程工具正在改变黑客松的意义：过去参赛者需要在短时间内真的写出软件原型，现在很多项目可以由模型快速生成代码、幻灯片和演示文稿，导致软件黑客松越来越像包装能力和提示词能力的比赛。相比之下，硬件黑客松重新引入了物理限制、焊接、外壳、传感器、设备兼容和现场调试，让作品必须和真实世界发生关系。作者举了自己把旋转拨号电话、树莓派、AI 音乐和 Spotify Agent 结合起来的例子，强调有些有趣的东西不是因为代码优雅，而是因为它荒唐、可摸、会出错但最终真的动起来。文章不是否定 AI，而是呼吁把创造力从纯屏幕里拉出来。

原文链接：https://blog.oscars.dev/posts/rip-software-hackathons-long-live-the-hardware-hackathon/

论坛讨论链接：https://news.ycombinator.com/item?id=48468766

讨论里不少人对“AI 生成软件黑客松项目”感到疲劳，认为评审很容易被漂亮 README、演示视频和幻灯片吸引，而非真实完成度。也有人提醒硬件比赛同样可能被展示技巧影响，但物理约束至少提高了造假的成本，并迫使团队解决材料、接口和现场可靠性问题。

---

## 8. 《精益创业》作者 Eric Ries 谈新书：如何让组织不被腐化 (I'm Eric Ries, author of "The Lean Startup" and new book "Incorruptible" – AMA)


Eric Ries 在 HN 做 AMA，讨论新书《Incorruptible》以及他对组织治理的看法。相比《精益创业》关注如何验证产品和商业假设，这本新书关注公司、机构和社区为什么会在规模化后逐渐偏离初衷。Ries 使用“financial gravity”来描述资本、激励和组织惯性对决策的拉扯：如果没有结构性设计，理想主义领导者也很难长期抵抗。对话中涉及长期证券交易所、Answer.AI、Anthropic 治理以及创业公司如何建立反腐化机制。文章的价值在于把“好人掌权”之外的问题摆出来：组织能否保持使命，最终取决于权力、激励、透明度和问责机制是否被写进系统。

原文链接：https://news.ycombinator.com/item?id=48477135

论坛讨论链接：https://news.ycombinator.com/item?id=48477135

讨论中有人推荐 Knapp Commission 等历史案例，提醒反腐败不是新问题；也有人用 Costco 热狗价格等例子争论领导者个人信念是否足够。整体分歧在于，组织堕落究竟主要来自结构失灵，还是来自关键人物失去原则。Ries 的回答更倾向于前者：要设计能抵抗坏激励的制度。

---

## 9. 用动画看完日本 9300 个火车站的开通史 (All 9,300 Japanese train station, animated by the year it opened (1872–2026))


这个可视化项目把日本 9,321 个火车站按开通年份从 1872 年一路动画展示到 2026 年。页面上的站点会随着时间推进逐步出现，用户还可以用汉字过滤站名，数据来自 Wikidata 的 CC0 条目。它展示的不只是铁路迷会喜欢的地图，而是日本近 150 年城市化、地方交通和铁路网络扩张的空间轨迹：早期干线先连接主要城市，随后支线和地方站点不断填补空白。项目本身轻量，但信息密度很高，很适合说明开放结构化数据和前端可视化结合后，可以用很短的交互把一个国家的基础设施历史讲清楚。

原文链接：https://jivx.com/eki

论坛讨论链接：https://news.ycombinator.com/item?id=48475100

HN 讨论一边感叹“日本加火车”天然适合这个社区，一边提出希望增加缩放、点击站点、查看铁路公司和线路详情等功能。也有人提到，LLM 和现代前端工具让这类小型数据可视化更容易被个人快速做出来，但好的数据整理和交互取舍仍然关键。

---

## 10. πFS：把所有文件都“存”进圆周率里的玩笑文件系统 (πFS)


πFS 是一个带有经典黑客幽默的项目：它声称不真正保存文件内容，而是在圆周率的小数展开中寻找对应字节序列，然后只记录位置元数据；读取时再从 π 中把数据“取回”。这个想法依赖一个未经证明但常被拿来开玩笑的直觉：如果 π 是 normal number，那么任意有限序列都应该在其中出现。项目当然不是实用压缩方案，因为定位信息本身通常会和原数据一样大，甚至更大；真正有意思的是它把信息论、压缩、无限序列和文件系统接口放在一起，做成一个能运行的笑话。它提醒人们：有些项目的价值不在效率，而在把一个荒诞概念实现到足够认真。

原文链接：https://github.com/philipl/pifs

论坛讨论链接：https://news.ycombinator.com/item?id=48480978

讨论自然延伸到巴别图书馆、信息压缩和“地址是否比内容更短”等问题。有人把它和把 LLM 看成有损文本压缩器作类比，也有人说科学理论本身就是用较短规则压缩大量观察。大多数评论都明白这是玩笑，但借题发挥出了不少关于信息和表示方式的认真讨论。

