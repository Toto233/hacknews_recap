---
title: '开源神模型Step 3.5 Flash：推理97.3分碾压GPT，闪 | Hacker News 摘要 (2026-02-20)'
author: 'hacknews'
description: ''
digest: '一款名为Step 3.5 Flash的开源基础模型在多项基准测试中表现出色，其平均得分达到81.0分，在核心推理能力方面，该模型得分高达97.3分，甚至在PaCoRe版本中达到99.9分，超越了包括GPT-5.2 xhigh在内的多个领先模'
source_url: 'https://static.stepfun.com/blog/step-3.5-flash/'
pubDatetime: 2026-02-20 10:57:54.241+08:00
tags:
  - AI_developer_boredom
  - Pebble_Time_2_waterproof
  - Minecraft_Java_Vulkan
  - Bidirectional_typing
---

---

## 1. 开源神模型Step 3.5 Flash：推理97.3分碾压GPT，闪电速飙300 token/s！ (Step 3.5 Flash – Open-source foundation model, supports deep reasoning at speed)

一款名为Step 3.5 Flash的开源基础模型在多项基准测试中表现出色，其平均得分达到81.0分，在核心推理能力方面，该模型得分高达97.3分，甚至在PaCoRe版本中达到99.9分，超越了包括GPT-5.2 xhigh在内的多个领先模型，并接近于GPT-5.2 xhigh的100分。Step 3.5 Flash拥有1960亿参数，采用稀疏专家混合架构，每处理一个令牌（token）仅激活110亿参数，实现了“智能密度”，使其在推理深度上能与顶尖的专有模型媲美，同时保持了实时交互所需的敏捷性。该模型通过三向多令牌预测技术，实现了每秒100至300个令牌的生成吞吐量，能够处理复杂的多步推理。

原文链接：https://static.stepfun.com/blog/step-3.5-flash/

论坛讨论链接：https://news.ycombinator.com/item?id=47069179

社区对Step 3.5 Flash开源基础模型的发布给予高度评价，认为这是过去几个月最被低估的LLM之一。在本地4-bit量化测试中，它超越了Minimax 2.5和GLM-4.7等模型，尤其在Mac上表现出色：M1 Ultra达36 t/s生成和300 t/s预填充，上下文扩展至256k时速度衰减缓慢，仅降至20 t/s和129 t/s。该模型默认支持SWA高效上下文，在128G Mac上可运行完整256k或双128k流；专为代理式编码训练，与Claude代码兼容，也适用于pi.dev等CLI框架，是首个200B参数本地LLM在代理编码中实用。使用者反馈其代理编码体验最佳，但存在生成过长推理链和无限循环bug，希望StepFun尽快修复。公司还曾发布优秀音乐生成模型ACEStep。

另一讨论者推荐尝试Qwen3 Coder Next，在OpenCode框架下工具调用合理，温度设为1时不易卡住；Nemotron 3 Nano工具使用不足，常依赖shell工具如sed编辑文件，而非专用工具。开源代理模型普遍犹豫调用陌生工具，除非明确指示。原讨论者表示将测试Qwen3 Coder Next于编码框架。

还有人提问：未来一两年，用M3 Ultra 512GB配置跑开源模型，是否比付费Claude/Codex更便宜？寻求成本计算。

---

## 2. 十五载FP64性能“阉割”：Blackwell Ultra将如何打破英伟达的“潜规则”？ (15 years of FP64 segmentation, and why the Blackwell Ultra breaks the pattern)

近十五年来，英伟达消费级图形处理器（GPU）的单精度（FP32）与双精度（FP64）计算性能比率持续扩大，形成了消费级和企业级硬件之间的显著差距。例如，当前的RTX 5090拥有104.8万亿次浮点运算的FP32性能，但其FP64性能仅为1.64万亿次浮点运算，两者差距高达64:1。这种差异并非技术限制，而是英伟达出于市场细分的策略。

自2010年费米架构首次亮相以来，英伟达消费级GPU的FP64:FP32性能比率呈现下降趋势，从费米架构的1:8逐渐恶化至2020年安培架构的1:64。在此期间，尽管FP32性能大幅提升了约77倍，但消费级GPU的FP64性能仅增长了约9.65倍。这种策略旨在区分消费级市场（如游戏、3D渲染）与高性能计算市场（如流体动力学、气候建模、金融计算），后者对FP64的数值稳定性和精度要求更高。

原文链接：https://nicolasdickenmann.com/blog/the-great-fp64-divide.html

论坛讨论链接：https://news.ycombinator.com/item?id=47068890

社区讨论了NVIDIA在图形芯片领域的发展历程及其对计算领域的深远影响。早期NVIDIA的成功源于图形渲染需求，但意外催生了通用GPU（GPGPU）和CUDA生态系统，这得益于其对HPC（高性能计算）工作负载的支持。加密货币的繁荣进一步推高了GPU价格，而如今，机器学习（ML）的崛起改变了FP64（双精度浮点数）在GPU中的地位，Blackwell Ultra的出现打破了原有模式。

评论者认为，NVIDIA的成功并非纯粹运气，而是积极响应市场变化和客户需求的结果。他们通过拓展和耕耘新的市场，避免了像英特尔那样因固守原有领域而错失机会的困境。有人指出，NVIDIA早期就将公司定位为高性能计算的参与者，其在计算领域的探索和执行力是必然成功的关键。

另有观点强调，NVIDIA在深度学习兴起前探索了大量“死胡同”式应用，其成功并非偶然。但也有人认为，深度学习的出现是一个“幸运”的契机，因为它恰好能发挥NVIDIA现有架构的优势，并最终超越了图形处理本身，成为其重要的增长引擎。这种观点认为，并非所有架构都能找到如此成功的“杀手级应用”。

---

## 3. Gemini 3.1 Pro 震撼发布：推理性能翻倍，重新定义 AI 逻辑巅峰 (Gemini 3.1 Pro)

![Gemini 3.1 Pro 震撼发布：推理性能翻倍，重新定义 AI 逻辑巅峰 ](D:\python\hacknews\output\images\20260220\Gemini_3.1_Pro.png)

继上周发布专注于科研与工程突破的 Gemini 3 Deep Think 后，谷歌今日正式推出了其核心性能的大幅升级版——Gemini 3.1 Pro。作为 Gemini 3 系列的最新进化，该模型旨在处理那些无法用简单答案解决的复杂任务，将更强大的逻辑推理能力带入用户的日常生活与工作流中。

在衡量模型解决全新逻辑模式能力的 ARC-AGI-2 严苛基准测试中，Gemini 3.1 Pro 取得了 77.1% 的认证高分，其推理性能较前代 3 Pro 实现了翻倍增长。除了智力跃升，3.1 Pro 在创意应用上也极具亮点：它能直接通过文本指令生成可交互、代码级的动画 SVG，这种格式在保持极小体积的同时能无限放大且不失真，为开发者提供了全新的创作维度。

目前，Gemini 3.1 Pro 已通过 API 开启预览，并同步登陆 Google AI Studio、Vertex AI 及 NotebookLM 等平台。订阅了 AI Pro 和 Ultra 计划的用户即刻便能体验到这一更聪明、更高效的“逻辑大脑”，通过它来合成复杂数据或驱动宏大的智能体工作流。

原文链接：https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/

论坛讨论链接：https://news.ycombinator.com/item?id=47074735

社区讨论者对Gemini 3.1 Pro表达了谨慎期待与实际失望。一位前谷歌员工指出，Gemini 3.0 Pro在开发中虽擅长推理、设计和生成代码，但执行时常崩溃，尤其不如Claude Opus：在VS Code Copilot中，Gemini过度依赖思考令牌而不清晰报告行动，常陷入循环、工具使用不当，且不主动澄清问题，导致“计划用Gemini、执行用Claude”的尴尬策略，实际体验远逊Claude，认为Anthropic在实用性上领先，呼吁谷歌团队真实项目测试。

另一讨论者赞同此观，强调模型表现高度依赖调优、框架和工具，Claude明显训练了编码过程而非仅代码，受益于用户提示反馈机制，使其在编码任务中胜出；Codex类似但稍好，而谷歌追求通用性导致“博而不精”。

第三位分析谷歌困境：为对抗OpenAI保广告业务，必须竞争，却在编码、企业和代理流程上让位Anthropic；Gemini比ChatGPT更不稳定，Anthropic的编码/推理进步正反哺其聊天机器人。目前Anthropic强势，OpenAI靠心智份额稳住，谷歌竞争混乱。

---

## 4. Pebble量产倒计时：Time 2游泳防水大突破，挑战重重却势不可挡 (Pebble Production: February Update)

Pebble公司发布最新生产更新，Pebble Time 2、Pebble Round 2和Index 01三款新硬件产品即将进入量产阶段，目前整体进展顺利，尽管临近生产时仍面临成本、质量和速度的权衡，以及一些突发调整，如额外测试设备和软件升级等挑战，与软件不同，硬件问题发货后难以修复。公司强调生产过程充满不确定性，但团队已有效应对。Pebble Time 2目前处于生产验证测试阶段，这是大规模生产前的最后一步，通过制造数百块手表进行测试，发现并修复多项问题，尤其聚焦一月份的防水性能优化，重现去年夏季Pebble 2 Duo的改进经验。公司负责人亲赴工厂监督，成功通过生产线扬声器防水测试，最终实现30米或3大气压防水认证，用户可放心在游泳时佩戴，但避免热水浴、桑拿、高压水或高温水环境，并非潜水表。

原文链接：https://repebble.com/blog/february-pebble-production-and-software-updates

论坛讨论链接：https://news.ycombinator.com/item?id=47073112

社区对Pebble Production二月更新的讨论热烈，主要聚焦软件修复与生态复兴。许多人赞赏Pebble移动应用拦截旧天气API请求，转而使用Open-Meteo数据，确保老旧表盘正常运行，这被视为极佳的用户体验优化。Open-Meteo团队强调其API将永久免费开放，避免Yahoo和OpenWeatherMap等封闭服务的命运，多位用户表达感激与惊喜，认为这是优秀开源选项，尤其适用于其他项目。

另一亮点是com.getpebble.android.provider.basalt组件回归，瞬间复活遗留插件生态，无需原开发者更新；应用商店本土化及iOS天气WebSockets切换显著降低延迟。有人好奇Google Play包ID回收机制，质疑闲置开发者账户是否永久“烧毁”命名空间，回应指出Pebble包ID归Google所有，便于回收，但pebble.com域名仍指向Google智能手表。

此外，有用户幻想将Apple Watch健身传感器移植到Pebble式简易电子墨水显示设备，仅需心率监测、通话短信通知与超长续航，不追求复杂应用。回应指出Pebble Time 2已支持心率、步数和睡眠追踪，基本满足需求，但用户追问数据是否同步Apple Health、日健身目标及后台监测（如高血压）功能是否可实现。

---

## 5. 我的世界Java版重磅升级：告别OpenGL，拥抱Vulkan时代！ (Minecraft Java is switching from OpenGL to Vulkan)

![我的世界Java版重磅升级：告别OpenGL，拥抱Vulkan时代！ ](D:\python\hacknews\output\images\20260220\Minecraft_Java_is_switching_from_OpenGL_to_Vulkan_.png)

Mojang开发者于2月18日宣布，备受期待的Minecraft Java版“Vibrant Visuals”更新将进行一项重大技术变革：其渲染引擎将从传统的OpenGL切换至现代的Vulkan。这项转变旨在充分利用最新的图形功能，为玩家带来显著的视觉改进和更卓越的游戏性能。尽管这是一项复杂的工程，需要一定时间才能完成，但Mojang坚信其最终价值将体现在更流畅、更沉浸的游戏体验中。开发者明确表示，他们的目标是确保Minecraft Java版在包括macOS和Linux在内的几乎所有个人电脑操作系统上都能保持可玩性。对于macOS用户，由于苹果公司不直接支持Vulkan而采用其自有的Metal图形应用程序接口，Mojang将通过一个翻译层来实现兼容。对于广大的模组开发者社区，Mojang建议他们提前做好准备，逐步将其模组从OpenGL迁移。

原文链接：https://www.gamingonlinux.com/2026/02/minecraft-java-is-switching-from-opengl-to-vulkan-for-the-vibrant-visuals-update/

论坛讨论链接：https://news.ycombinator.com/item?id=47068948

社区讨论了Minecraft Java版从OpenGL转向Vulkan的潜在益处。一位用户希望此举能降低主线程CPU开销，许多游戏从DX11/DX12或OpenGL转向Vulkan时，不仅获益于API，还利用了更高的并行绘制能力。目前Minecraft主线程是瓶颈，无法充分利用GPU，即使添加大量着色器也受CPU限制，模组开发亟需更多CPU资源。

另一用户分享Unigine Heaven基准测试经验，在Linux桌面运行时，通过Proton运行Windows版获得30%性能提升，主要归功于DXVK库的多线程将D3D11调用转换为Vulkan。有人补充，许多游戏可直接放入DXVK DLL提升性能，并推荐较新的Unigine Superposition基准测试。

针对体素渲染，有人建议利用Vulkan的GPU计算特性加速体素计算，但有异议指出Minecraft世界底层虽为块状体素，却三角化成网格渲染，非直接体素渲染如Teardown所示；玩家和敌人等实体直接为低多边形网格，而非体素。另一观点认为选择Vulkan合适，因Java版仅支持桌面，避免移动端Vulkan驱动问题，但微软规模应能开发跨平台RHI，如Windows用DX12、macOS用Metal。

---

## 6. AI让开发者变无聊 (AI makes you boring)

近日，一位开发者在黑客新闻网站上扩展了对“Show HN”投稿现象的评论，该栏目近年来投稿量激增但质量下降，主要归因于人工智能辅助开发的流行。该作者并不反对使用人工智能作为开发工具，认为工具本身中性，但指出此类项目整体乏味，开发者往往投入不足，对问题领域思考浅显，导致讨论缺乏深度。过去，“Show HN”吸引的是深度沉浸问题领域的专家，能带来全新视角和学习机会，而今人工智能改变了编程讨论氛围，引入了众多缺乏原创见解的平庸项目和作者。这种现象不止限于黑客新闻或“Show HN”，而是编程社区普遍存在。一方面，这是非专业人士被构建产品的乐趣吸引所致；但作者进一步论证，人工智能使人变得乏味。大型语言模型在原创思考上极度欠缺，将思考外包给它们往往产生浅层、非原创想法，即便模型能将用户输入奉为天才洞见。这在探索陌生领域时或有助益，但撰写博客、设计产品等原创工作则成致命缺陷。

原文链接：https://www.marginalia.nu/log/a_132_ai_bores/

论坛讨论链接：https://news.ycombinator.com/item?id=47076966

社区讨论围绕“AI使你变得无聊”主题展开，多位参与者辩论AI生成文本与代码的价值。有人认为，人们不愿阅读AI产物，因为写作和编程是通过文字解决问题的方式，能展现优雅形状与创新方向；AI虽擅长生成样板代码，却缺乏创新，无法产生真正优雅的作品。另一观点强调，代码不同于散文，它可执行且无需阅读即可生效，用户更在意功能而非优雅，尤其对闭源软件一无所知却照用不误。针对“开发者阅读代码”的说法，反驳者指出，用户通常不读代码，开发者也未必审视所有依赖工具，如jq，其美丑无关紧要，只要有效即可。更进一步，有人担忧AI代码若无人深读，仅靠黑箱测试，在可靠性关键场景下风险高，可能导致问题无人理解。但持乐观者补充，可靠性并非处处关键，多数软件仅浪费时间而不致命，如邮件和网络协议虽不完美，仍被广泛使用。整体上，讨论分化于AI的实用性与人文欣赏间的张力。

---

## 7. HM与双向类型系统：并非二选一，Bidir兼而有之 (How to choose between Hindley-Milner and bidirectional typing)

在设计新编程语言时，开发者常纠结于选择Hindley-Milner（HM）或双向（Bidir）类型系统，然而这种选择本身可能是一个误导。核心问题并非在于HM和Bidir这两种抽象算法的选择，而是“我的语言是否需要泛型？”。泛型通常需要支持“统一”（unification）机制，即分配和求解类型变量的过程，例如Rust中推导Vec<T>就依赖于此。HM类型系统天然包含统一，而双向类型系统则可以通过在关键位置引入注解来处理复杂的程序，而无需类型变量。虽然许多双向类型系统的例子中没有统一，但这并不意味着它不能或不应使用统一。实际上，双向类型系统可以被看作是HM类型系统的超集，能够支持HM的所有特性，并且支持统一更加自然，就像Vim用户习惯于使用主键盘区一样。双向类型检查是HM的超集，通过引入一个“检查”（check）函数，可以与HM的“推断”（infer）函数协同工作，从而实现更强大的类型系统。

原文链接：https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/

论坛讨论链接：https://news.ycombinator.com/item?id=47025885

该讨论围绕Hindley-Milner（HM）和双向类型系统之间的选择展开。有观点认为，复杂的类型推断并非所有语言都必需，强制类型声明可以简化复杂性，提高可读性和错误信息。另一种观点是，对于倾向于动态语言和原型开发的项目，可以采用渐进式类型，允许所有程序运行，直到程序员决定增加类型约束。

然而，也有人反驳说，HM类型推断实际上是最简单的系统之一，易于实现且有丰富的学习资源，能带来轻量级的编程体验。但如果需要借用检查、高阶类型、重载或类似TypeScript的特性，则需要放弃完全推断，转向双向类型系统。

尽管HM规则本身简单，但其组合可能导致人类难以理解的复杂行为，即使类型检查器的每一步都很清晰。

---

## 8. Anthropic：严禁第三方挪用用户订阅凭证 (Anthropic officially bans using subscription auth for third party use)

Anthropic近日发布了其“Claude Code”服务的详细使用条款与政策，明确区分商业及应用程序接口用户与免费、专业版及高级版消费者用户的不同许可协议。对于应用程序接口用户，其现有商业协议将适用于Claude Code的使用。在医疗合规方面，若客户已签署业务伙伴协议并激活零数据保留功能，该协议将自动扩展覆盖通过Claude Code的应用程序接口流量。使用政策要求所有用户遵守Anthropic的规定，且专业版和高级版计划的使用限制基于普通的个人使用模式。认证机制是核心关注点：OAuth令牌仅限Claude Code和Claude.ai平台使用，严禁在任何其他产品或服务中挪用。开发者若需构建与Claude功能交互的产品或服务，必须使用通过Claude控制台或支持的云提供商获得的应用程序接口密钥进行认证。

原文链接：https://code.claude.com/docs/en/legal-and-compliance

论坛讨论链接：https://news.ycombinator.com/item?id=47069299

社区讨论的焦点是Anthropic公司禁止第三方使用其订阅认证。一些用户认为这是Anthropic试图锁定用户、攫取价值的行为，类似于苹果的生态系统策略，通过构建一个包含各种增值服务的闭环来盈利。他们担忧此举可能阻碍创新，并可能导致用户流失。

然而，也有观点认为，Anthropic的品牌认知度和用户体验是其核心优势。一些开发者表示，在尝试了多种AI编程助手后，Claude因其“不那么令人讨厌”的体验而脱颖而出，即使在处理前沿技术时也表现出优势，这可能与其“臃肿”但“有主见”的特点有关，这种特点反而吸引了部分用户群体。尽管如此，也有人认为模型的可替代性很高，Anthropic此举可能适得其反，损害了模型团队的声誉。

