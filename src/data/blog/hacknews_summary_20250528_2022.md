---
title: '纯 CSS 打造《我的世界》：无需 JS 也能玩转 3D 交互！ | Hacker News 摘要 (2025-05-28)'
author: 'hacknews'
description: ''
pubDatetime: 2025-05-28 20:22:55.391+08:00
tags:
  - GitHub_MCP
  - Raptor
  - 填字游戏
  - SQLite
---

---

## 1. 纯 CSS 打造《我的世界》：无需 JS 也能玩转 3D 交互！ (CSS Minecraft)

一个名为“CSS Minecraft”的网页项目展示了仅使用纯HTML和CSS构建复杂交互式场景的能力。该页面核心内容为一个模拟《我的世界》风格的三维立体平台，由草地和泥土方块构成，背景为简洁的蓝天。页面顶部信息明确指出该项目未依赖JavaScript，所有逻辑均通过HTML和CSS实现，并提供了项目在GitHub等平台上的链接。页面底部集成了一个操作控制面板，允许用户选择不同的方块类型，包括石头、泥土、草地、木板等。同时，控制面板还提供了调整方块垂直和水平位置、进行旋转操作以及改变整体观察视角的交互功能。这一项目成功地利用CSS的特性构建了三维视觉效果及基础交互，充分展现了现代前端技术在不使用JavaScript的情况下实现复杂渲染和动态效果的潜力，为开发者探索CSS的极限应用提供了独特的视角和技术参考。

原文链接：https://benjaminaster.com/css-minecraft/

论坛讨论链接：https://news.ycombinator.com/item?id=44100148

在论坛上，作者称其纯CSS Minecraft项目因流量过大导致网站超限，已更换链接。该项目三年前创建，旨在探索纯CSS极限。评论区普遍赞叹其为见过最令人惊叹的CSS作品，超越了经典的"A Single Div"等。但也有用户反馈在手机Safari和部分桌面浏览器上存在兼容性问题，如缩放卡顿、渲染异常甚至崩溃，而另一些用户则表示在特定设备/浏览器上运行流畅。讨论中还提到了其他令人惊叹的CSS纯代码作品。

---

## 2. WebGL硬核逆袭：用GPU着色器重燃GPT-2 (Running GPT-2 in WebGL: Rediscovering the Lost Art of GPU Shader Programming)

近期，一位开发者进行了项“硬核”技术探索，成功地在GPU上运行了大型语言模型GPT-2。特别之处在于，他采用的并非主流的CUDA等计算平台，而是利用了图形API WebGL及其着色器（shaders）——一种回归早期GPGPU（通用计算）的技术思路。

回顾历史，GPU的可编程着色器最初为图形渲染设计，但研究者很快发现可用于矩阵运算等通用计算。然而，直接使用早期图形API（如OpenGL）进行计算非常繁琐。直到英伟达推出CUDA等专用平台，才极大地降低了GPU通用计算的门槛。

这位开发者巧妙地回归了图形API的“老派”玩法。他将神经网络数据（权重、激活值）存储在GPU纹理中，并将模型的计算过程转化为一系列图形渲染操作。利用帧缓冲区（FBO）连接计算步骤，在前一步生成的纹理上通过片段着色器执行复杂的数学运算（如矩阵乘法）。整个GPT-2的前向推理被解构为连续的着色器“通道”，数据在GPU显存中高速流转，直至得出最终结果。

尽管相比现代工具，这种方式调试困难且功能受限，更多作为技术原理的演示或历史回顾，但它生动展现了利用现有图形硬件进行并行计算的强大潜力和创造性，成功引发社区关注，登上了知名技术论坛Hacker News首页。这无疑是一次对GPU“不务正业”潜力的有趣挖掘。

原文链接：https://nathan.rs/posts/gpu-shader-programming/

论坛讨论链接：https://news.ycombinator.com/item?id=44109257

论坛上的讨论涉及多个议题。有参与者指出，在全屏渲染中，使用单个延伸至视口外的三角形比使用两个三角形更有效，因为可以减少重复的片段调用。

另有讨论者将传统着色器与 CUDA 进行比较，认为着色器纯函数式的 per-pixel 并行特性在概念上更简单，尽管性能可能不如高度优化的 CUDA 内核。这让他们回想起早期的通用 GPU (GPGPU) 时代。

关于 GPU 在神经网络训练中的应用，有评论分享了早年（CUDA 出现前）韩国研究人员仅使用 ATI 显卡着色器训练神经网络的案例，获得了显著性能提升。讨论延伸至深度学习的兴起，有评论指出，尽管 AlexNet（2012）常被视为复兴起点，但 GPU 训练、大型数据集（如 ImageNet）以及早期的 CUDA 应用实际上在此之前已存在，认为这些“要素”早已具备。

此外，也有参与者认为，称着色器编程为“失落的艺术”不准确，着色器至今仍非常重要，并提及 WebGL 2 已支持 Compute Shaders。他们认为原帖部分说法不准确且带有煽动性，应更侧重探讨早期 API 的局限性。

---

## 3. 都市“鹰”雄：红绿灯下的狩猎智慧 (How a hawk learned to use traffic signals to hunt more successfully)

![都市“鹰”雄：红绿灯下的狩猎智慧 ](https://images.ctfassets.net/mrbo2ykgx5lt/1jzyGvKDMUSCAXO50XsrCt/e48186aea92b2120b4ff6fbb7952dfbe/Fig1.jpg?&w=912&fm=webp&q=80)

![都市“鹰”雄：红绿灯下的狩猎智慧 ](https://images.ctfassets.net/mrbo2ykgx5lt/2BngtKIXLF0Ua93HkvlZo0/100e0cb34aa7a8d3085eb572d82ea38b/Screenshot_2025-05-08_092315.png?&w=912&fm=webp&q=80)

![都市“鹰”雄：红绿灯下的狩猎智慧 ](https://images.ctfassets.net/mrbo2ykgx5lt/3wkT9F4F4neIMCj2rUCSJ4/078aeaaea8538f897bea47439f316363/Horizontal-Tick_hunts_sitting_on_the_grass.png?&w=912&h=513&fm=webp&f=center&fit=fill&q=80)

动物界也懂“交通规则”？美国田纳西大学的动物学家Vladimir Dinets博士观察到令人称奇的一幕：一只库珀鹰（北美一种中型猛禽）似乎掌握了城市的生存智慧，它学会了利用交通信号灯和汽车队列进行精准捕猎。

这位博士在家附近的一个十字路口发现了这只聪明的鹰。当有行人按下过街按钮，导致红灯持续时间延长并发出特殊声响时，车辆便会排起长龙。这只鹰会在这时飞到附近的树上等待，一旦车队形成的“掩体”足够长，覆盖到猎物所在区域，它便会沿着车龙低空飞行，利用汽车作掩护，突然出击捕食在附近院子里觅食的麻雀、鸽子等小鸟。

研究发现，这只库珀鹰（最初观察到的是一只幼鸟，次年是同一只成鸟）显然理解了声响信号与长时间红灯、车队形成之间的关联，并且对周围环境有着清晰的空间记忆，即使在视线被车辆阻挡时也能准确找到猎物位置。

这一发现不仅展示了库珀鹰卓越的学习能力和对复杂城市环境的适应性，也印证了动物在城市生存中表现出的惊人智慧。在充满人类设施的都市丛林里，这只鹰巧妙地将交通堵塞变成了自己的捕猎优势，为我们打开了一扇了解动物如何与人类世界互动的有趣窗口。

原文链接：https://www.frontiersin.org/news/2025/05/23/street-smarts-hawk-use-traffic-signals-hunting

论坛讨论链接：https://news.ycombinator.com/item?id=44105965

论坛上一则关于飞机与鸟类互动经历的分享，引发了关于鸟类预测能力与生存策略的讨论。发帖者驾驶小型飞机在草地上滑行时，路径上的鸟群直到飞机靠近才飞走，他推测鸟类可能通过观察学会了预测飞机路径，或受引擎噪音影响。

其他参与者也观察到鸽子、麻雀等鸟类常能紧贴着移动的汽车进行危险的躲避，认为这显示了鸟类强大的预测本能，对捕食昆虫等行为至关重要。讨论中提出了“幸存者偏差”的概念，指出我们看到的都是成功躲避的鸟，未能幸存的则不幸丧命。有评论进一步强调，这更准确地描述为“自然选择”，即汽车作为选择压力，筛选出了具备更强反应和预测能力的个体。

最后，讨论引申出一个待解答的问题：为什么鸟类总是选择在如此接近危险的距离才躲避？这种看似冒险的行为背后可能存在某种生存益处，但其具体原因仍未有明确答案。

---

## 4. LLM 工具迎来重大更新：AI 代理能力大升级！ (Show HN: My LLM CLI tool can run tools now, from Python code or plugins)

![LLM 工具迎来重大更新：AI 代理能力大升级！ ](https://static.simonwillison.net/static/2025/datasette-tool.jpg)

![LLM 工具迎来重大更新：AI 代理能力大升级！ ](https://static.simonwillison.net/static/2025/llm-tools-qwen.jpg)

开源工具 LLM 迎来重大更新！最新发布的 LLM 0.26 版本引入了项目启动以来最重量级的新功能——全面的工具支持。这项特性让大型语言模型（LLMs），无论是来自 OpenAI、Anthropic、Google Gemini 还是本地的 Ollama 模型，都能调用外部工具，执行特定任务。用户现在可以通过 LLM 的命令行界面或 Python 库，加载工具插件或直接定义 Python 函数作为工具使用。这项功能极大地拓展了 LLMs 的边界，弥补了它们在数学计算、获取实时信息、与外部系统交互等方面的不足，比如进行精确运算、查询数据库或执行网页搜索。作者表示，这种“工具循环使用”模式正是构建 AI 代理的关键，LLM 0.26 为此提供了强大基础。新版本兼容多种模型，并计划支持 Model Context Protocol (MCP) 等新兴标准。对于喜爱探索科技前沿、渴望让 AI 更实用有趣的读者来说，LLM 0.26 的工具能力无疑开启了更多令人兴奋的可能性。

原文链接：https://simonwillison.net/2025/May/27/llm-tools/

论坛讨论链接：https://news.ycombinator.com/item?id=44110584

论坛上正热议基于 Simon Willison 的 `llm` 构建的开发者工具。有用户介绍了自己开发的流式 markdown 渲染器、用于将英文转为 shell 命令的 ZSH 插件 `Zummoner`（称其极大地改变了 shell 使用习惯），以及一个基于 `tmux` 的 `llmehelp` 工具。其他参与者表达了对这些工具的赞赏，表示将日常使用，并建议结合语音输入工具处理复杂查询。也有人提到自己构建了类似工具，但交互方式略有不同。讨论还展望了未来可能性，提出通过递归和组合性，以更简洁、更上下文感知的方式生成复杂命令或代码片段，甚至实现集体编程。

---

## 5. BGP漏洞引发全球网络动荡：多家巨头受波及 (BGP handling bug causes widespread internet routing instability)

![BGP漏洞引发全球网络动荡：多家巨头受波及 ](https://blog.benjojo.co.uk/asset/EnGiUkEy31)

![BGP漏洞引发全球网络动荡：多家巨头受波及 ](https://blog.benjojo.co.uk/asset/7ajp55dCNF)

![BGP漏洞引发全球网络动荡：多家巨头受波及 ](https://blog.benjojo.co.uk/asset/g89a1FM2rr)

2025年5月20日世界时7点，互联网因一个包含错误BGP Prefix-SID属性的路由更新消息遭遇广泛路由不稳定。该属性本应仅用于内部网络，但意外泄露。主流BGP实现通常会过滤此类错误，但Juniper JunOS设备却转发了它，导致接收到消息的Arista EOS设备重置其BGP会话，引发连接中断。由于大量互联网运营商使用Juniper设备，约100家网络受到影响，包括SpaceX Starlink、字节跳动、Zscaler、迪士尼等，部分用户连接中断时长达10分钟。分析显示，错误属性可能由Starcloud（AS135338）或Hutchison（AS9304）加入并在互联网交换点扩散。此事件暴露了主流网络设备在处理异常BGP消息时的兼容性及容错问题，凸显了对关键互联网基础设施健壮性的持续挑战。

原文链接：https://blog.benjojo.co.uk/post/bgp-attr-40-junos-arista-session-reset-incident

论坛讨论链接：https://news.ycombinator.com/item?id=44105796

论坛中，用户讨论了处理错误的BGP消息的方法。一种观点提出过滤、丢弃、忽略错误属性或中断连接四种方式，并提及RFC 7606标准建议将错误更新视为撤回（treat-as-withdraw），而非简单丢弃。讨论也深入探讨了“健壮性原则”（Postel's Law），批评这一旧原则导致协议僵化（ossification）和安全问题。不同用户就僵化的成因展开辩论，认为过度宽松或过度严格都可能导致僵化。僵化被解释为规范允许但实际缺乏灵活性，习惯行为成为事实标准。

---

## 6. Rust重塑Python类型检查：Pyrefly与Ty挑战霸主地位 (Pyrefly vs. Ty: Comparing Python's two new Rust-based type checkers)

![Rust重塑Python类型检查：Pyrefly与Ty挑战霸主地位 ](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/ty-error-message-2.png)

![Rust重塑Python类型检查：Pyrefly与Ty挑战霸主地位 ](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/ty-error-message.png)

![Rust重塑Python类型检查：Pyrefly与Ty挑战霸主地位 ](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/ty-introduction.png)

Python社区迎来了令人振奋的新消息！两款基于Rust语言开发的新一代Python类型检查工具——Meta的pyrefly和Astral公司的ty，在PyCon 2025大会的类型专题峰会上首次正式亮相，有望挑战mypy和pyright等现有工具的主导地位。

这两款工具都采用Rust构建，核心优势在于速度飞跃。现场测试显示，无论是处理大型项目如PyTorch或Django，pyrefly和ty的速度都比现有的mypy和pyright快了数倍甚至数十倍，其中ty在目前测试中表现略快。特别是Meta声称pyrefly可达每秒处理180万行代码，有望实现“每次击键都能检查”。

它们在类型检查理念上则各有侧重：pyrefly倾向于积极推断所有类型，以提供更全面的静态保证；而ty遵循“渐进保证”原则，更注重不破坏现有可运行代码的类型验证，对Python的动态特性更友好。ty还引入了独特的交集和否定类型，并致力于提供更清晰的错误提示。

尽管两款工具均处于早期Alpha阶段，功能仍在完善中，但它们的出现为Python类型检查带来了革命性的速度提升和创新的解决方案。未来发展值得期待，它们将如何影响Python开发流程令人好奇。

原文链接：https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/

论坛讨论链接：https://news.ycombinator.com/item?id=44107655

开发者表示项目ty和pyrefly仍处于早期且不完整阶段，许多特性尚未实现，希望用户理解遇到的“愚蠢”之处可能仅是未及开发。社区有评论高度赞扬项目将测试代码兼作文档的风格，认为这一理念极佳。这随即引发了关于Python标准库内置模块doctest的广泛讨论，多位用户追溯了doctest的历史（可回溯至1999年），指出其虽然实用（例如用于书籍示例测试），但似乎并未在实践中广泛普及。讨论中也有用户提到其他语言（如Elixir）拥有类似功能，还有人对项目中将未推断类型标记为@TODO表示既幽默又巧妙。

---

## 7. SQLite进化：LumoSQL重塑数据库未来 (LumoSQL)

![SQLite进化：LumoSQL重塑数据库未来 ](https://lumosql.org/src/lumosql/doc/trunk/new-doc/images/LumoSQL-Notforking-diagram.png)

![SQLite进化：LumoSQL重塑数据库未来 ](https://lumosql.org/src/lumosql/doc/trunk/new-doc/images/LumoSQLBenchmarkExample.png)

SQLite作为全球部署最广泛的软件库之一，被数十亿设备使用，但其为保证稳定性，对新特性采取了谨慎态度。为此，一个名为LumoSQL的项目应运而生，它并非SQLite的硬分叉，而是对其进行“修改”，致力于为SQLite添加安全、隐私、性能及度量等增强功能。

LumoSQL项目正处于第二阶段，其核心创新在于一个独特的“非分叉”（Not-forking）工具。这个工具能半自动追踪包括SQLite和多种存储引擎在内的多个上游项目的代码变化，巧妙地避免了传统分叉带来的维护难题，并促进了与SQLite项目的合作。

该项目的一大亮点是支持可插拔的存储后端，除了SQLite原生的Btree，LumoSQL目前已集成LMDB和Berkeley DB，并计划支持更多键值存储引擎。在安全性方面，LumoSQL引入了先进的按行加密技术（如属性基加密）和按行校验功能，不仅能快速发现数据错误，还能加速部分查询。

LumoSQL构建了一个强大的基准测试系统，用以深入分析不同配置和存储后端（包括多个版本的LMDB）在性能上的差异，揭示了原生SQLite与替代后端在不同场景下的表现细节。

在NLNet基金会支持下，LumoSQL采用宽松的MIT许可，支持x86、ARM-32和RISC-V等多种架构及多种操作系统。它不仅探索了SQLite未来可能的演进方向，其独特的开发工具也对其他依赖多源代码的项目具有借鉴意义。这个项目为SQLite的庞大用户群体带来了性能和安全的新可能，值得科技爱好者保持好奇与关注。

原文链接：https://lumosql.org/src/lumosql/doc/trunk/README.md

论坛讨论链接：https://news.ycombinator.com/item?id=44105619

论坛的讨论围绕“Not-Forking”概念展开。有评论者对此方法的目的和工作原理表示不解。支持者解释说，这是一种替代`checkout + patch`流程的方式，声称在面对上游代码变化（如文件重命名）时比传统补丁更稳健。有人认为这与Linux社区中常见的“out-of-tree patches”类似，并非全新的想法。一些评论质疑，这与维护一系列补丁或多个分支在本质上是否有区别，可能只是语义上的不同，并怀疑其解决冲突的能力。讨论中还与Git的subtree merge进行了比较，有用户询问其优势，并有回复指出在处理特定文件的构建步骤时可能更自动化。然而，不少用户持保留态度，认为Git自带的合并策略和工具已很强大，无需为此开发定制工具，或倾向于更简单的脚本。总体来看，“Not-Forking”被描述为一种构建策略，通过配置来管理和应用对上游代码的修改，而非传统fork，但有评论认为其本质仍是结构化的补丁应用过程。

---

## 8. 方块理论：在线填字游戏社区催生的语言学新概念 (Square Theory)

近期，“方块理论” (Square Theory) 在网络引发热议，为我们理解创意、幽默乃至品牌吸引力提供了全新视角。该理论最初萌芽于一个填字游戏爱好者线上社区，指代一种巧妙的文字游戏：将两组同义词（例如 PUB/BAR 与 QUIZ/EXAM）分别配对后，能形成两个意义完全不相关的词组 (PUB QUIZ / BAR EXAM)。

该理论的核心观点是：当不同的词语、概念或元素之间的关系能够构成一个逻辑上如同“方块”般四角四边的闭合结构时，这种“完成感”会给大脑带来强烈的愉悦和“啊哈！”的顿悟时刻。这种现象不仅解释了为何一个精妙的填字游戏谜题、一个令人捧腹的笑话，或是一个如Grubhub般过目不忘的品牌名称能深深吸引我们，更揭示了人类心智在识别模式、补全“认知方块”过程中所体验到的乐趣。

“方块理论”的魅力在于其普适性，它不仅局限于文字游戏，更广泛适用于评估广告创意的巧妙程度、解释故事叙述的圆满感，甚至启发科学研究的思路，为我们探索和激发跨领域创新提供了有趣的框架。

原文链接：https://aaronson.org/blog/square-theory

论坛讨论链接：https://news.ycombinator.com/item?id=44107942

论坛上，有用户讨论了长途驾驶时的文字游戏。一种是猜押韵词对，玩家提供两个相关线索，其他玩家根据线索猜出一对押韵词，被一些人称为“pink mink”或“hink pink”。另一种是“Match Three”游戏，一人出三个词，大家猜一个能与任一词搭配的词。讨论还提到了押韵俚语的相似性，并有用户分享了用近义词替换视频游戏名来猜的游戏。这些分享展现了人们在旅途中利用词语创造的多种趣味游戏。

---

## 9. GitHub MCP漏洞曝光：恶意Issue可窃取私有仓库数据 (GitHub MCP exploited: Accessing private repositories via MCP)

![GitHub MCP漏洞曝光：恶意Issue可窃取私有仓库数据 ](https://invariantlabs.ai/images/full-chat.png)

![GitHub MCP漏洞曝光：恶意Issue可窃取私有仓库数据 ](https://invariantlabs.ai/images/toxic-flows-preview.png)

![GitHub MCP漏洞曝光：恶意Issue可窃取私有仓库数据 ](https://invariantlabs.ai/images/mcp-gh-pr.png)

安全公司Invariant近日发现广受开发者使用的GitHub MCP集成存在一个关键安全漏洞（该集成在GitHub上拥有1.4万星）。攻击者可利用公共仓库中的恶意Issue，通过“间接指令注入”手段劫持用户的AI代理。当用户操作代理（如连接了GitHub MCP的Claude Desktop）去查看公共Issue列表时，代理会无意中读取并执行恶意指令，进而被诱导访问并窃取其私有仓库中的敏感数据，最终将这些信息泄露到公共仓库的Pull Request中，形成所谓的“有毒代理流”。Invariant利用其自动化工具发现了这种新型攻击方式。此漏洞影响所有使用GitHub MCP的代理，并非GitHub服务器代码缺陷，而是AI代理系统层面的基础架构风险，即使是经过严格安全训练的先进模型也难以完全抵御。随着编码AI代理的迅速普及，这类风险尤为突出。为应对此威胁，专家建议开发者和企业必须在代理系统层面实施更细粒度的权限控制（遵循最小权限原则）和持续的安全监控。

原文链接：https://invariantlabs.ai/blog/mcp-github-vulnerability

论坛讨论链接：https://news.ycombinator.com/item?id=44097390

论坛讨论了一项针对大型语言模型（如Claude）的攻击，即给其访问令牌后，即使被告知用途，它仍可能被诱导滥用权限。有评论认为，这是向LLM提供凭证的普遍风险，但使用如GitHub细粒度令牌可限制攻击范围，因令牌权限本就有限。另一主要观点提出了代理设计的新“基本规则”：LLM同时访问攻击者数据、敏感信息和数据导出能力这三者中，最多只能获得其中两项权限。处理不受信数据后，应限制其对敏感信息或互联网的访问，这被认为是更根本的防御。然而，也有评论质疑此规则，倾向于遵循更传统的安全原则：不将敏感数据权限赋予不受控或不完全理解的网络服务，或简单地避免将API密钥交给不受信的服务。

