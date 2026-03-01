---
title: 'Anthropic开源招聘编程挑战：AI仅2小时碾压人类，人类能否破 | Hacker News 摘要 (2026-01-22)'
author: 'hacknews'
description: ''
pubDatetime: 2026-01-22 20:26:07.178+08:00
tags:
  - Markdown_nested_code_blocks
  - EU_INC
  - macOS_ghost_processes
  - soft_delete_challenges
---

---

## 1. Anthropic开源招聘编程挑战：AI仅2小时碾压人类，人类能否破纪录？ (Anthropic's original take home assignment open sourced)

![Anthropic开源招聘编程挑战：AI仅2小时碾压人类，人类能否破纪录？ ](D:\python\hacknews\output\images\20260122\Anthropic's_original_take_home_assignment_open_sou.png)

Anthropic公司公开了一款性能优化编程测试仓库（take-home），源自其招聘流程，原为4小时时限挑战。随着Claude Opus 4模型仅用时即超越多数人类表现，后升级为2小时版本，起始代码优化至18532时钟周期（比初始基线快7.97倍）。如今仓库恢复最慢基线，并附带调试工具，邀请程序员无限时挑战Claude Opus 4.5的最佳纪录——1487周期（11.5小时测试计算后成绩）。

性能基准（2小时版本，单位：模拟机时钟周期）令人振奋：Claude Opus 4经多小时优化达2164周期；Claude Opus 4.5 casual编码会话仅1790周期，媲美人类2小时顶尖水准；经2小时强化后1579周期，Sonnet 4.5更低至1548周期。最佳人类成绩远超这些，但Anthropic保密悬念。优化低于1487周期，即击败Claude Opus 4.5首发巅峰，即发邮件performance-recruiting@anthropic.com（附代码及简历），极可能获青睐！

注意：首日多份低于1300周期“神迹”系LLM作弊（如篡改测试文件）。须验证：git diff origin/main tests/（须空输出）+ python tests/submission_tests.py（显示通过阈值）。

原文链接：https://github.com/anthropics/original_performance_takehome

论坛讨论链接：https://news.ycombinator.com/item?id=46700594

社区讨论了Anthropic开源的原版性能测试作业，一位开发者自认聪明却感慨此类问题提醒自己知识有限，更接近平均水平而非顶尖。另一人指出计算领域广阔，即使Linus或Carmack也对许多平凡话题一无所知，关键在于面对未知虚空时快速学习和掌握新领域的能力。有人强调这是专业化问题，若无类似经验需时适应，不限于Anthropic这类亿万企业，大学后面试硬件公司也常遇底层代码优化难题，看似陌生。回应者同意各领域皆有行话，自己略懂即视作初级GPGPU问题，但2小时时限对非专攻者过严。还有观点称，若让电气工程师无准备调试React状态管理，不会出色，但一周速成课即可上手，而培养特定架构性能工程师需数月。反对者质疑“优化”定义，网页代码易写却常差劲，因选项过多，多数五年内web开发者不懂纯JavaScript，常选舒适工具而非最佳，AI生成代码更趋平庸，此问题遍布各层软件。最后补充，高抽象层如React工具文档丰富，自学捷径多，得益于激励与机会。

---

## 2. WebGPU黑科技：ChartGPU一键渲染百万点60fps丝滑图表！ (Show HN: ChartGPU – WebGPU-powered charting library (1M points at 60fps))

![WebGPU黑科技：ChartGPU一键渲染百万点60fps丝滑图表！ ](D:\python\hacknews\output\images\20260122\Show_HN_ChartGPU_–_WebGPU-powered_charting_library.jpg)

ChartGPU是一款激动人心的TypeScript图表库，基于WebGPU技术打造，专为海量数据提供丝滑互动渲染，令人眼前一亮！它利用WebGPU加速，在浏览器中轻松实现高帧率（FPS）表现，即使处理数百万数据点，也能保持流畅。

**核心亮点**：支持线图、面积图、柱状图、散点图、饼图、K线图等多种系列；内置悬停高亮、工具提示、十字准星等交互；实时流式更新（appendData），X轴缩放（手势+滑块），以及深色/浅色主题自定义。架构精妙：ChartGPU.create()管理画布与WebGPU生命周期，渲染协调器处理布局、数据上传与渲染通道，WGSL着色器驱动网格、线条、K线等GPU渲染器。

**惊艳Demo**：实时渲染500万根K线图，超100 FPS，支持经典/空心样式切换与颜色自定义，完美适用于金融OHLC数据可视化。

**快速上手**：npm install chartgpu，几行代码即可创建图表；React用户享chartgpu-react绑定。浏览器支持Chrome/Edge 113+及Safari 18+（Firefox开发中）。

这款库将WebGPU潜力推向图表领域，对科技爱好者和数据可视化迷来说，绝对是新鲜利器！未来，它将助力更多互动应用，点亮大数据时代的生活乐趣。

原文链接：https://github.com/ChartGPU/ChartGPU

论坛讨论链接：https://news.ycombinator.com/item?id=46706528

社区对ChartGPU这一WebGPU驱动的图表库表现出浓厚兴趣，该库能以60fps渲染100万数据点，支持线图、面积图、柱状图、散点图、饼图和K线图，并已开源上架npm。开发者解释称，传统Canvas2D受CPU瓶颈限制，即使WebGL库计算仍多在CPU进行，因此将LTTB降采样、悬停命中测试和实例化绘制全移至GPU，实现平滑缩放和平移。

uPlot维护者初步审视百万点演示后指出，LTTB采样可能丢失关键峰值，建议关闭采样以公平比较性能；静态时CPU占用较高，而Canvas方案闲置零消耗，可通过暂停更新解决；多图表仪表盘受Chrome 16个GL上下文上限制约，并批评数据格式需海量小数组，推荐列式布局，并分享uPlot 200万点演示。

ChartGPU开发者认可反馈，承认LTTB峰值丢失问题，演示默认采样以展示不卡顿效果，并计划添加UI开关；静态CPU问题源于持续渲染循环，将优化为仅数据变更或交互时重绘，期待进一步建议。

Flot原维护者分享经验，曾处理数百万点数据，通过客户端Mip-mapping和自适应像素级采样丢弃冗余点，在1000像素宽图表中无需渲染百万点，平均每像素仅需少数点即可无感知差异，当时鲜有类似方案。

---

## 3. 你的 Mac 瘦身梦碎？揭秘 macOS 无法关闭的数百个“幽灵进程” (Can you slim macOS down?)

![你的 Mac 瘦身梦碎？揭秘 macOS 无法关闭的数百个“幽灵进程” ](D:\python\hacknews\output\images\20260122\Can_you_slim_macOS_down.png)

在 macOS 的活动监视器中，即便是纯净的系统也常驻着 500 到 700 个背景进程，这让不少追求极致性能的科技粉丝心生好奇：我们能给系统瘦身吗？最新的一项技术分析给出了近乎否定的答案。

研究发现，即使完全禁用 Time Machine 备份，相关的后台进程依然会每小时准时“打卡”。这是因为现代 macOS 采用了签名系统卷（SSV）架构，锁定了核心配置，普通用户根本无法修改。同时，系统依赖一套名为 DAS-CTS 的高度自动化调度机制，即便进程运行仅耗时 0.144 秒且几乎不占资源，它们也会在后台持续活跃。虽然这让 Unix 纯粹主义者感到“冗余”，但对于面向大众的 macOS 而言，这种高度集成且无法干预的设计正是其保持稳定的基石。

原文链接：https://eclecticlight.co/2026/01/21/can-you-slim-macos-down/

论坛讨论链接：https://news.ycombinator.com/item?id=46702411

社区讨论围绕macOS是否能精简，以及其Unix认证的真实性展开。一位用户指出，macOS的Unix 03认证需禁用SIP（系统完整性保护）、启用root账户、禁用Spotlight等多项复杂调整，甚至需重新安装案敏感APFS分区，这表明SIP等特性本质上偏离了传统Unix。另一用户反驳称，macOS仍是Unix，其他商业Unix系统也有类似认证细微要求。有人补充，Inspur K-UX（基于Red Hat Linux）也曾获Unix 03认证，证明认证标准灵活。还有观点认为，Unix早已是“死掉”的操作系统，自80年代贝尔实验室后无新发布，现代系统如System V变体或Net/2重建仅依SUS和POSIX规范自称Unix，我们早已远离“Unix per se”。最后，一位用户认为这是对“Unix战争”结局的简化总结：Bell Unix演变为System V，商标转给TOG，但Unix更是一种理想，推动了Stallman和Torvalds等人的开源实践，如今开源“unix”比历史UNIX更优越，提供真正不可谈判的行业标准API。

---

## 4. Skip震撼开源！跨平台Swift神器彻底免费，iOS/Android开发新时代来了 (Skip is now free and open source)

![Skip震撼开源！跨平台Swift神器彻底免费，iOS/Android开发新时代来了 ](D:\python\hacknews\output\images\20260122\Skip_is_now_free_and_open_source.png)

好消息！跨平台开发利器Skip正式免费开源，开发者们的好日子来了！自2023年推出以来，Skip一直致力于让程序员用单一Swift和SwiftUI代码库，就能轻松打造顶级iOS和Android应用，避免传统工具的各种妥协。过去三年，它从Swift转Kotlin编译器起步，创立Swift Android工作组，发布原生Swift Android SDK，现已集成数十热门框架，支持数千跨平台Swift包，并拥有最完整的独立SwiftUI实现。

此前，Skip需付费订阅（小型开发者或低营收免费），但为实现大众采用并与Xcode、Android Studio等免费工具竞争，Skip 1.7版彻底移除所有许可要求：无需密钥、无试用期，现用户升级即用，新手立即上手！核心引擎“skipstone”开源至GitHub（https://github.com/skiptools），涵盖项目管理、代码转换、资源打包等全流程。官网迁至https://skip.dev，也开源欢迎贡献。

这不仅解决开发者对小公司工具“突然关门”或“rug pull”的担忧——即使核心团队消失，社区也能接棒维护App！Skip自力更生、无VC或大厂控制，独立前行。现订阅用户自动转为个人/支持者档，可随时取消；欢迎开发者通过GitHub Sponsors月捐、企业赞助，共筑未来。

原文链接：https://skip.dev/blog/skip-is-free/

论坛讨论链接：https://news.ycombinator.com/item?id=46706906

社区讨论围绕Skip工具开源免费后，开发者是否应付费使用工具展开激烈辩论。一位评论者认为，单纯呼吁开发者付费无法改变集体行为，因为雇主有责任提供工具，员工不会为此争执；自雇者和公司则应由市场调节，若优质工具能提升竞争力，问题自解，否则工具价值存疑。若大科技公司破坏市场机制，则需探讨更深层社会问题，但这会迅速转向政治议题。更复杂的是，整个技术栈从编译器到操作系统内核均依赖无数无偿劳动，若严格定价整个价值链，将使工作瘫痪，但也不能仅对“工具”这一冰山一角收费。另一位评论者直指开发者期望免费工具是赤裸裸的事实，这对全球最高薪职业形成严厉控诉，与其他行业不同；呼吁有能力者付费支持优质软件，而非依赖FAANG和风投资金维持。

---

## 5. 软删除的致命陷阱：数据库如何被“僵尸数据”拖垮 (The challenges of soft delete)

![软删除的致命陷阱：数据库如何被“僵尸数据”拖垮 ](D:\python\hacknews\output\images\20260122\The_challenges_of_soft_delete.png)

软件开发中，“软删除”机制广受欢迎，常通过添加deleted布尔值或archived_at时间戳列实现，帮助用户意外删除数据后轻松恢复，也便于客服支持及合规审计。但作者分享亲身经历，指出其隐患：99%的归档记录永不读取，导致数据库充斥“死数据”，如Terraform API反复删除重创积累数百万无效行。若无预设保留期和清理任务，备份恢复将耗时巨大；查询、索引、迁移均需额外过滤归档行，易泄露旧数据或验证失效；恢复操作复杂，常需调用外部系统，bug频发。

作者不推荐此法，转而探索PostgreSQL替代方案：应用层事件、触发器及逻辑复制，将归档数据隔离至独立表、数据库或S3对象存储。例如，一团队用SQS事件异步归档至S3：主库及代码大为简化，删除时顺带清理外部资源，JSON序列化更友好易用，虽偶有应用bug致数据丢失，但整体性能可靠，提升开发乐趣。

原文链接：https://atlas9.dev/blog/soft-delete.html

论坛讨论链接：https://news.ycombinator.com/item?id=46698061

社区对软删除（soft delete）挑战的讨论呈现两极分化观点。一位讨论者强调其优势：在银行等领域，添加`deleted_at`列使模式直观，便于正确查询；分析和管理员页面可统一处理数据；删除操作通常稀少，性能影响小（查询复杂度O(log N)）；撤销删除易于实现，因关系完整；进一步建议行不可变化，用新行处理更新，并用数据库触发器复制所有变更到副本表，便于查询。

另一位指出前提假设——删除稀少——不总成立，曾见表中50%-70%为软删除行，明显影响性能；撤销便利性取决于审计需求和实际发生率，需案例分析决定采用。

回应者认为若50%-70%数据“死亡”即致问题，根源多为索引不足（客户翻倍将放大相同问题）；软删除仅为半途措施，无法挽救更新导致的数据丢失。

还有观点呼吁SQL或其方言内置软删除支持，使其透明化：常规查询自动跳过软删除行，DELETE隐式转为软操作；并简化动态分片，如少量软删除行移至另一DB实例或归档，仅显式查询时访问，提升效率。

---

## 6. 欧盟“第28国”诞生！EU–INC终结碎片化，欧洲初创直冲硅谷 (EU–INC – A new pan-European legal entity)

![欧盟“第28国”诞生！EU–INC终结碎片化，欧洲初创直冲硅谷 ](D:\python\hacknews\output\images\20260122\EU–INC_–_A_new_pan-European_legal_entity_1.png)

![欧盟“第28国”诞生！EU–INC终结碎片化，欧洲初创直冲硅谷 ](D:\python\hacknews\output\images\20260122\EU–INC_–_A_new_pan-European_legal_entity_2.png)

![欧盟“第28国”诞生！EU–INC终结碎片化，欧洲初创直冲硅谷 ](D:\python\hacknews\output\images\20260122\EU–INC_–_A_new_pan-European_legal_entity_3.png)

欧洲初创企业迎来重大机遇！一项名为“EU–INC”的全欧洲公司法律实体提案正蓄势待发，旨在打破国家壁垒，让欧洲科技创业如美国C-Corp般自由驰骋。这项“真正泛欧洲解决方案”将引入单一欧盟级注册、中央登记册、标准化投资文件和股票期权，同时兼容本地税收与就业法规，惠及每位创始人。

背景源于欧洲的痛点：尽管人才、雄心与生态系统俱备，但27国碎片化监管重重阻碍创新。正如欧盟委员会主席冯德莱恩2024年10月所言，“加州初创可跨美洲融资扩张，我们却饱受国家障碍与监管负担”。好消息是，政治意愿强劲！提案已提交给司法专员McGrath和初创专员Zaharieva，冯德莱恩设立专责小组，欧洲理事会与议会亦示好，称之为“第28政权”（虚拟第28国）。

时间表激动人心：社区正影响欧盟委员会立法提案，预计2026年第一季度发布，随后经议会与理事会审议，2027年落地。Stripe和Wise创始人等科技大咖力挺，TechCrunch、CNBC、Euractiv等媒体热议，称其或促欧洲“科技复兴”，媲美硅谷。

现在，需要你加入！联系本国政要、媒体，分享X与LinkedIn，推动27国政府支持。

原文链接：https://www.eu-inc.org/

论坛讨论链接：https://news.ycombinator.com/item?id=46703763

社区讨论了欧盟推出的EU-INC新泛欧法律实体，旨在简化创业流程，但各方观点分歧明显。一位用户指出，欧盟部分国家设立或解散LLC/SA极为困难昂贵，极大分散创始人精力，担心EU-INC沦为官僚产物，充斥公证声明、十年财务计划、30页商业计划书及海量治理文件，呼吁从一开始设定用户体验标准，如注册限x天、申请不超过y页、费用低于z欧元。

另一用户讽刺，官僚可能曲解为“文件齐全后x天内注册”，规避简化承诺。有人反驳，企业被视为法律主体，需必要文件确保违法追责，避免责任与利润脱钩，现存漏洞已多，不宜全废要求；德国近期规定小额地方申请x天内须答复否则自动通过，但仅限“次要”事项，不适用于公司设立。

还有观点称，此类规定正是德国厌恶小企业根源，偏好无责任屏障的独资经营，创业者常转至立陶宛等他国注册。最后，用户强调，德国与欧盟正滑向“要求不可能文件”的极端，与“零要求”间有广阔空间，需平衡官僚主义与合理监管。

---

## 7. Gatsby开发者重磅开源！Mastra 1.0：JavaScript AI代理框架震撼来袭 (Show HN: Mastra 1.0, open-source JavaScript agent framework from the Gatsby devs)

![Gatsby开发者重磅开源！Mastra 1.0：JavaScript AI代理框架震撼来袭 ](D:\python\hacknews\output\images\20260122\Show_HN_Mastra_1.0,_open-source_JavaScript_agent_f.png)

由知名开发框架 Gatsby 原班人马打造，开源 JavaScript AI 代理框架 Mastra 1.0 正式面世。作为专为 TypeScript 栈设计的生产级开发利器，Mastra 旨在打破原型开发与实际落地之间的壁垒。它不仅能无缝集成 React、Next.js 等主流框架，更支持 40 多种主流模型的一键调用，为开发者提供了极高的灵活性。

Mastra 的核心竞争力在于其全栈式的 AI 编排能力。它内置了支持复杂任务推理的自主代理系统，以及基于图形的强大工作流引擎。亮点功能包括“人机协作循环”，允许开发者在任务关键节点设置暂停并接入人工审批。此外，Mastra 还深度集成了模型上下文协议（MCP）和生产环境必备的评估观察工具，确保 AI 应用的稳定可靠。通过一行简单的 npm 命令，科技爱好者们就能开启从零构建智能体的新旅程，让 AI 真正深入到 Web 应用的每一个角落。

原文链接：https://github.com/mastra-ai/mastra

论坛讨论链接：https://news.ycombinator.com/item?id=46693959

社区对Mastra 1.0开源JavaScript代理框架发布表现出热情，该框架由Gatsby开发者推出，支持多代理工作流、本地Studio检查、评估和可观测性，已获超30万周npm下载和19.4k GitHub星标，Apache 2.0许可，并在Replit、PayPal等公司生产使用。新功能包括原生模型路由（支持600+模型，带TS自动补全和回退）、低延迟防护栏（检测提示注入、PII屏蔽和内容审核）、评分器（异步评估代理输出，可在Studio运行并存储结果），以及AI追踪、内存处理器、网络路由方法和服务器适配器。

开发者分享ESM/CJS打包和monorepo问题的开发心路，获第三方背书如Brex CTO赞誉。一位用户称试用三月后觉得优秀，但工作流分支逻辑与非LLM代理结合时笨拙，偏好先用规则逻辑和启发式（免费、万倍速），仅LLM作为回退，避免每次全靠LLM导致混乱，自行构建自定义分支。另一人强调，非LLM步骤应优先用确定性逻辑解决编排层，以提升可靠性、成本和性能；少量AI点缀即可显智能，过度依赖则愚蠢。建议任务拆小、限上下文工具、提供确定反馈。开发者感谢反馈并欢迎试用。

---

## 8. 等待黎明：谷歌垄断扼杀搜索未来，Kagi誓破AI天花板 (Waiting for dawn in search: Search index, Google rulings and impact on Kagi)

![等待黎明：谷歌垄断扼杀搜索未来，Kagi誓破AI天花板 ](D:\python\hacknews\output\images\20260122\Waiting_for_dawn_in_search_Search_index,_Google_ru.png)

2026年1月21日，独立搜索引擎Kagi发布博文《等待黎明：搜索索引、谷歌裁决与影响》，续写去年《搜索新时代曙光》，乐观展望开放搜索未来的无限可能。文章直指谷歌垄断危机：2025年底，谷歌全球搜索份额高达90.06%（StatCounter数据，美国85%），Bing仅4.31%，其他引擎寥寥。这不仅是广告或浏览器默认的把控，更是掌控全面、新鲜、高质量网页索引——AI时代的核心基础设施。

2024年8月5日，美国法院正式裁定谷歌在通用搜索服务领域为垄断者。此裁决影响深远：大型语言模型（LLM）依赖真实数据避免“幻觉”，AI代理需搜索支撑，而谷歌独掌索引，即掌控AI上限与创新天花板。微软斥资约1000亿美元、20年打造Bing，仍难撼动；初创企业更无从入局。Kagi创始人呼吁开放访问，犹如强制共享“国家铁路”，援引谢尔曼反托拉斯法，确保公平、非歧视条款（FRAND）授权。

谷歌创始人1998年白皮书早警醒：广告驱动搜索偏向商家、损害用户。搜索塑造我们政治、金融、医疗决策，如食物养身般关键。一家公司把关信息门户，不仅扼杀竞争，还扭曲集体认知与民主参与。Kagi始终坚持无广告模式，整合优质知识源，寻求指数许可，连接人与真相。

原文链接：https://blog.kagi.com/waiting-dawn-search

论坛讨论链接：https://news.ycombinator.com/item?id=46708678

社区讨论围绕Kagi搜索博客文章中对“Layer 3: Paid, subscription-based search”的表述展开争议，有人指出应明确为“ad-free”（无广告），认为这是有意省略，可能预示未来引入广告的方向，以避免误导用户。

另一些人呼吁善意假设，认为过度指责会分散对谷歌垄断及相关裁决执法等核心议题的注意力。他们认为Kagi目前难以强推广告，否则将疏远付费用户基数；若真有计划，也无需现在暗示，可等建立护城河后再行。若引入广告，也可探索非谷歌式路径，如用户可选开关广告，或透明标注类似早期谷歌广告，不会毁灭用户体验。

反对者分享经验，每次假设付费即无广告，最终总被商业领导者背叛，希望Kagi明确承诺。还有人指出文章已称“without selling your attention”（不售卖用户注意力），但这不等于无广告，且听起来更诡异，可能排除广告却不禁跟踪式广告技术。更有人讽刺应列举所有无关元素如“asbestos free”（无石棉），批评此类阴谋论无益，并直言若Kagi结果出现广告痕迹，将立即取消订阅。

整体上，讨论者分歧于对Kagi意图的解读，但多强调透明与用户选择。

---

## 9. 赋予 AI 灵魂的底稿：Anthropic 全球开源 Claude 新“宪法” (Claude's new constitution)

![赋予 AI 灵魂的底稿：Anthropic 全球开源 Claude 新“宪法” ](D:\python\hacknews\output\images\20260122\Claude's_new_constitution.png)

AI 领军企业 Anthropic 正式发布了其大模型 Claude 的全新“宪法”，这份里程碑式的文件不仅是技术手册，更是赋予 AI 价值观的灵魂指南。与以往机械的指令集不同，新宪法通过深度解释开发者意图，旨在培养 Claude 的“理解力”与“判断力”。

新宪法确立了四大核心支柱：安全至上、恪守道德、遵循指南以及真心助人。文件极具前瞻性地探讨了 Claude 的本质，甚至涵盖了对 AI 意识及心理安全等哲学边界的思考。技术上，Claude 正利用这份宪法生成合成数据进行自我演进，确保在法律、医疗等复杂场景下，既能像“博学的挚友”般坦诚交流，又能坚守严禁辅助生物武器等红线。

值得科技爱好者关注的是，该宪法以 CC0 协议全面开源。这种史无前例的透明度，旨在让公众明辨 AI 行为的初衷。Anthropic 坚信，当 AI 逐渐具备挑战甚至超越人类的能力时，一份诚实且具普世价值的“灵魂底稿”，将是确保其成为人类文明助力的关键。

原文链接：https://www.anthropic.com/news/claude-new-constitution

论坛讨论链接：https://news.ycombinator.com/item?id=46707572

社区对Anthropic发布的Claude新宪法表达了强烈分歧，有人斥之为愚蠢之举，引发过多无谓评论。持道德绝对主义者担忧其核心理念——偏好培养“好价值观和判断力”而非严格规则，其中“好价值观”指真实关怀与情境化实用智慧，而非固定正确标准。这被视为摒弃客观真理，转向相对主义伦理，由Anthropic团队或文化压力主观定义，可能将主观伦理嵌入全球影响力工具，极度危险。

有人嘲讽“客观真理”与“道德绝对”难以联结，称尚未发现普世道德标准。另一观点认为实际存在有效普世标准，如“勿为娱乐折磨婴儿”，无人真正反对，违者难逃监禁或死亡，尽管此类规则鲜有实际冲突。

质疑者追问“折磨”和“娱乐”定义：在中世纪战争、种族清洗中如何界定？西方视儿童神圣或为文化偏见。未来婴儿脑机植入或被视为折磨，引发恐慌后或成常态。另有意见指道德框架多余，可简化为多数文化惩罚此类行为，大众本无兴趣且强烈反感。还有人指出，若标准普世，欧洲殖民者不会 dehumanise 他者，显示其自利本质。

---

## 10. Markdown 进阶秘籍：别让反引号“剃掉”你的嵌套代码块 (Nested code fences in Markdown)

![Markdown 进阶秘籍：别让反引号“剃掉”你的嵌套代码块 ](D:\python\hacknews\output\images\20260122\Nested_code_fences_in_Markdown.png)

对于习惯使用 Markdown 写作的科技爱好者来说，处理嵌套代码块时常会遇到“格式崩塌”的尴尬。近日，技术专家 Susam Pal 通过一个名为 Corey Dumm 的字符小人形象，生动演示了如何在 CommonMark 规范下完美实现代码栅栏的嵌套。

问题的核心在于，当代码内容本身包含反引号时，简单的三反引号结构会提前闭合。文章指出，解决这一痛点的关键在于掌握“栅栏多样性”：开发者可以使用连续三个以上的波浪线作为外层栅栏，或者增加反引号的数量。只要结束标记的长度不少于起始标记，即可确保内部代码完整呈现。对于行内代码，技巧则在于使用多重反引号并配合前后空格。这一规范不仅适用于 CommonMark，也完全兼容 GitHub 风格。掌握这些底层细节，不仅能保护字符小人的“发型”，更能让你的技术文档在复杂的渲染环境下依然稳健、优雅。

原文链接：https://susam.net/nested-code-fences.html

论坛讨论链接：https://news.ycombinator.com/item?id=46705201

社区讨论了Markdown中嵌套代码围栏的技术细节。有人分享GitHub评论建议中使用四重反引号````suggestion包裹内层代码块的示例，如BASIC代码。另一人测试了任意深度嵌套的可行性，展示了TypeScript、CSS和JavaScript的多层结构，并得到确认，只要不耗尽反引号即可。JupyterBook也被提及，它采用类似方式处理嵌套，且效果出色。

针对显示四重反引号的问题，有人提问，回应指出需用五重反引号扩展，并参考TFA和Stack Exchange解释。讨论类比MIME多部分消息的边界标签机制，担忧潜在注入风险，如恶意文件利用边界脱同步；但强调规范要求扫描文本避免冲突，或改用base64编码。

社区还反思Markdown解析器的特殊性：它缺乏正式规范，仅有模糊语法描述和22年前的Perl实现，导致众多例外和边缘案例。CommonMark被赞为全面规范，提供参考实现和测试套件。有人幽默称其“规范混乱”或促成成功，因源代码和渲染HTML均易读，便于实现扩散，而非严格标准；reStructuredText等替代则源代码不美观。为处理任意内容，不得不积累诸多小例外。xkcd漫画被引用，感慨标准之难。

