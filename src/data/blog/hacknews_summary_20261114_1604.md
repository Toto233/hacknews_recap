---
title: "空管通信异常，美国暂停全国航班起飞逾四小时 | Hacker News 摘要 (2026-11-14)"
author: "hacknews"
description: ""
digest: "美东时间 11 月 13 日下午，美国联邦航空管理局（FAA）在多个航路管制中心出现通信问题后，下令全国机场暂缓放行离港航班。通知于 15:54 发出，20:15 解除，历时约 4 小时 21 分钟。已在空中的飞机仍由管制员引导，部分医疗航"
source_url: "https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247"
pubDatetime: 2026-11-14 16:04:04.407+08:00
tags:
  - "航空通信"
  - "本地AI"
  - "智能家居"
  - "开源软件"
---

---

## 1. 空管通信异常，美国暂停全国航班起飞逾四小时 (FAA issues national ground stop – lifted 4.5 hours later)





美东时间 11 月 13 日下午，美国联邦航空管理局（FAA）在多个航路管制中心出现通信问题后，下令全国机场暂缓放行离港航班。通知于 15:54 发出，20:15 解除，历时约 4 小时 21 分钟。已在空中的飞机仍由管制员引导，部分医疗航班获准继续运行。NBC 报道，暂停起飞措施解除前，已有逾 7,000 个航班取消，多家航空公司随后开始恢复运行。

美国交通部长 Sean Duffy 在记者会上表示，老旧空管网络的路由器因数据过载，让多地管制中心的雷达数据和通信出现不稳定。问题在 15:36 被发现，当时仍有雷达和通信能力，FAA 为留出安全余量而暂停起飞。恢复放行后，飞机和机组人员已经偏离原有调度，部分机组也接近执勤时间上限，航班恢复需要时间。FAA 的初步声明确认了受影响的通信范围，设备为何过载仍待进一步调查。

原文链接：https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247

论坛讨论链接：https://news.ycombinator.com/item?id=50489641

HN 起初关注的是怎样知道哪些航班还能走。一位读者查看洛杉矶和纽约机场的离港页面，发现不少航班标着延误，有些预计时间已经过去，旧金山机场页面则一直加载。随后有人转贴媒体对通信网络故障的报道，追问若涉及系统更新，为何选在周五下午。另有人找出美国交通部监察机构关于 2009 年故障的报告，指出当时同一通信基础设施接着新式 IP 服务和传统语音、雷达链路。帖子借这份历史报告解释空管系统如何互连，对本次故障是否重演旧问题仍有疑问。

---

## 2. Edge0 发布 1450 亿参数模型权重，可用单张 NVIDIA 显卡运行 (Edge0-145B: Frontier AI Capabilities on Your Own Computer)





Edge0 发布了面向本地部署的 Edge0-145B 和 Edge0-120B 权重及推理工具。两者源自 Qwen3.8-Flash-Next。145B 版每生成一个词元约动用 101 亿个参数。多个专家共享大矩阵，推理引擎把常用专家留在显存，其余可从系统内存或 SSD 调入，省下常驻显存。

发布博客称内部测试峰值内存为 29 GB、生成速度超过每秒 80 个词元，具体测试配置待技术报告披露。仓库给出了另一组数据。24 GB 显存的 RTX 5090 D 跑 Q3_K 版本，聊天生成每秒 99.7 个词元，代理任务生成每秒 121.2 个。博客提到支持 Mac，官方部署指南目前给出的是 Linux 或 Windows 上的 NVIDIA CUDA 13 构建步骤，把 M2 Ultra 数据列为 Metal 测试成绩。权重采用 Edge0 社区许可证。

原文链接：https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer

论坛讨论链接：https://news.ycombinator.com/item?id=50475713

HN 读者先问，这是不是把 Qwen3.8-Flash-Next 量化后换个名字。有人翻出模型卡的底座标注，确认它源自 Qwen。另一位对照每次推理激活的参数量和总参数量，认为两者的结构有变化。还有人从运行方式解释，常用专家占预留的显存，少用的专家可以留在系统内存，并由 CPU 计算，显存放不下整套权重时仍有办法运行。

讨论也涉及「个人电脑」的门槛。有人觉得 29 GB 的公布数字让高配笔记本有了运行机会，另一位则问，只有 16 GB 普通内存的低端机对普通用户来说是否更常见。

---

## 3. 拆解 Coway 净化器的配网流程，让睡前模式脱离厂商云 (Reverse engineering my Coway air purifier to ditch the cloud)





Scott J. Goldman 想让家里的 Apple Home 睡前场景关灯时，顺手把 Coway Airmega IconS 净化器的风速调高。原有 Home Assistant 集成要通过 Coway 云端收发指令，遇到服务故障或接口变化就会失灵。他在隔离网络里观察设备流量，发现净化器用未加密的 HTTP 下载后续连接所信任的根证书，这让他能在测试中换上自己的证书，看清设备通过 MQTT 收发控制指令的过程。随后他借助 AI 对照安卓蓝牙日志与反编译后的应用，发现蓝牙配网消息本身就能指定证书与配置服务器的地址。他由此让设备在配网时认自己的服务器。最终他做成 Home Assistant 自定义集成，用笔记本靠近设备，通过浏览器的蓝牙功能配网。配好后净化器经 Wi-Fi 与家里的 Home Assistant 直接通信，睡前场景也接回了 Apple Home。

原文链接：https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/

论坛讨论链接：https://news.ycombinator.com/item?id=50474959

HN 有人把注意力放在明文下载根证书上，认为这类设计问题原本就能发现，过去只是逐步搭环境、看流量太费时间。现在熟悉技术的人可以把重复工作交给模型，在业余时间做更多验证。回复者把问题追溯到赶进度的开发习惯，也提醒生成得快仍可能产出粗糙代码。另一位读者分享了改造海尔空调的做法。他从 Wi-Fi 模块的串口接入，让模块跑 ESPHome，除了能控制空调，还能在本地记录盘管温度和阀门位置等原来不易看到的数据。

---

## 4. Claude 多项服务出现登录错误，Anthropic 两小时后标记解决 (Elevated errors on claude.ai, Claude Code, and platform.claude.com)


Anthropic 的服务状态页显示，11 月 13 日 Claude 出现认证问题。官方在 09:58 UTC 发布调查公告，提到部分 Claude 网页端和 Claude Code 用户无法完成身份验证。事后列出的受影响组件还包括开发者控制台 Claude Console 和 Claude Cowork。11:05 UTC，Anthropic 表示已经部署修复，进入恢复监测。11:58 UTC，事故页标记为已解决，距首条调查公告正好两小时。末条通知称 Claude 网页端和 Cowork 的问题已修复，状态页没有给出每个组件的单独恢复时间。

同一天的状态记录还列出另一项与 Microsoft 365 有关的故障。Anthropic 明确把 Claude 中邮件、日历和搜索连接器出现的错误归因于微软服务事故。那条公告有独立的影响时段。这次 Claude 登录故障未公布根因与影响请求数。

原文链接：https://status.claude.com/incidents/nn11wk485zfn

论坛讨论链接：https://news.ycombinator.com/item?id=50481187

HN 有读者说，自己好几个 Claude 会话突然要求重新登录，一开始还能进去，后来授权请求也报错。有人看到微软服务同期出问题，猜测 Claude 的登录是否也依赖相关系统，讨论里没有能确认这层关系的资料。另一批读者谈的是停工成本。有人把这当成临时休息，也有做过企业运维的人说，即使故障在外部服务商，内部团队仍得解释为什么买来的工具不能用。还有人提议把任务迁到本地模型，回复追问，普通用户的硬件能否支撑接近 Opus 5.5 的效果。

---

## 5. Microsoft 365 多项云服务中断，LibreOffice 用「365 天」开了个玩笑 (LibreOffice actually works 365 days a year)



11 月 13 日，LibreOffice 官方账号发帖，说自己的办公套件一年 365 天都能用。微软当时正在处理一场波及多地的 Microsoft 365 云服务故障，这句短帖恰好拿产品名里的数字做了双关。微软服务通报显示，部分用户访问 Exchange Online 邮箱遇到连接问题，Teams 日历安排、SharePoint 外部分享和 Copilot 聊天等功能也受到影响。LibreOffice 提供可装到 Windows、macOS 和 Linux 的桌面应用，用户可以用 Writer、Calc 和 Impress 打开和编辑本机的文档、表格与演示文件。官网帮助也说明了如何读写常见的 Word、Excel 和 PowerPoint 格式，以及复杂文件转换时可能碰到的排版差异。同周，维护方发布了 26.8.3 修订版，修复了若干崩溃问题和导入 PPTX 时编号重复的问题。

原文链接：https://twitter.com/LibreOffice/status/2121205272479998268

论坛讨论链接：https://news.ycombinator.com/item?id=50486482

HN 读者讨论这句玩笑究竟适用于哪些工作。有人说装在本机的 Office 2019 同样能用，一位平时主要使用 LibreOffice 的读者说，和客户交换文件或处理少数复杂表格时仍会用微软的套件。另一位读者指出，当天 Word 和 Excel 照常运行，并问 LibreOffice 是否能接替邮箱和 Teams。有读者认为 LibreOffice 要扩大使用面，应该改善操作界面。回复者则更喜欢 Writer 的界面，即使它还有一些老问题，同时也认为 Excel 在表格功能上更强。

---

## 6. Brave Search API 开放 x402 付费，搜索请求可用 USDC 逐笔结算 (Brave Search API now accepts agentic payments via the x402 protocol)



Brave 给搜索 API 增加了一条按次付费的入口。开发者或 AI 代理用支持 x402 的客户端发请求，无需先开 Brave 账户、选套餐或申请 API 密钥。钱包里需要预先有 Base 区块链上的 USDC。客户端首次发出未付款请求时，服务器返回 HTTP 402 状态码，并附上这次请求的金额及付款条件。钱包按条件为支付签名，客户端带着签名重发请求。据接口文档，Brave 先核验签名，再执行搜索，成功后结算并返回结果和链上交易凭据。

首批支持网页、新闻、图片、视频、本地地点，以及给模型提供搜索上下文的 LLM Context 接口。Brave 公布的费率是每次 0.005 美元，折合每千次 5 美元，具体价格以该请求的 402 响应为准。Brave 暂时承担链上交易手续费。按开发文档，Answers、自动补全和拼写检查仍走 API 密钥入口。

原文链接：https://brave.com/blog/search-api-agentic-payments/

论坛讨论链接：https://news.ycombinator.com/item?id=50477649

HN 上有人算了一笔账，按每千次 5 美元计，一轮对话若触发 30 次搜索，搜索费就是 0.15 美元。他接着问，如果搜索主要由代理发起，以往依靠广告的服务会怎么获得收入。回复有人拿其他搜索 API 做比较，认为还要看结果质量，以及服务商要求套餐还是允许按次付费。

另一位读者说，自己给经常被抓取的网站接入 x402 后，还没有看到付款，也怀疑实现有问题。回复指出，只要抓取程序仍能免费获取内容，就缺少主动付费的动力。

---

## 7. 据报道价值 1140 万美元的英伟达硬件在运输途中失踪 ($11.4M in Nvidia hardware vanishes during shipment from CA to TX)



物流媒体 FreightWaves 报道，一批原定从加州奥克兰运往得州沃思堡的英伟达硬件途中失踪。货物共六托盘，据报道价值约 1140 万美元。按报道转述的车辆行踪，卡车于 8 月 29 日提货，随后向南行驶，中途几次停留数小时。调查人员最后在南加州的圣贝纳迪诺县失去车辆线索。

奥克兰警方向该媒体证实，9 月 13 日收到报案，正在按重大盗窃案调查。报案日期只能确定警方何时收到报告。警方尚未证实报道中的货值，也未公布设备型号、货主、承运商或司机身份。提货车辆挂有食品运输企业标识一事来自当地媒体，目前公开信息无法判断车辆是否冒用了他人身份。FreightWaves 发稿时，警方尚未公布人员被捕或货物找回的消息，英伟达也尚未回应媒体询问。

原文链接：https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas

论坛讨论链接：https://news.ycombinator.com/item?id=50487864

有 HN 读者追问，这么贵的设备为什么交给普通承运商，是否可以让专门的物流公司负责全程安保。回复指出，大宗货运合同可以事先约定何时转移货物所有权和风险，保险也会根据承保的运输方式定价。另一串讨论关心能否靠设备序列号追回货物。有人设想驱动更新时若会上报编号，厂商就可能查到设备去向。也有人提醒，防火墙可以拦截这类回传。还有人问，高价硬件能不能像手机一样经过服务器激活，再交付使用。警方目前没有公布本案货物的具体型号。

---

## 8. Haskell 基金会公布技术愿景，瞄准更快的构建与更稳的升级 (A technical vision for the Haskell ecosystem)



Haskell 基金会技术领导委员会宣布已开始运作，并征集项目提案，也欢迎公司、承包方和志愿者参与实施。委员会提出，Haskell 的类型约束能帮助人审查代码，也可以在关键处给 AI 生成代码设定明确的规则。它希望把编译、交互式试验和测试的等待时间降下来，给出的具体目标之一，是把编译器 GHC 自身持续集成的周期从约六小时缩到两小时。

委员会还希望把单步调试、清楚的调用栈和性能分析报告带进编辑器与命令行，并降低安装和读文档的门槛。安全方面提出加固软件供应链、定期测试基础设施。长期兼容性的愿景是让多年以前的程序更容易在新版 GHC 上编译，拟探索延长支持期、减少升级时的破坏性变更，以及维护稳定的依赖包集合。社区可以评论具体提案或提交替代方案。

原文链接：https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078

论坛讨论链接：https://news.ycombinator.com/item?id=50484235

有人在 HN 上问，缩短构建时间该从哪里下手。一位读者建议优先做增量编译，把重编范围缩到受改动影响的函数和类型，并指出全量构建需要完成大量工作，费时并不奇怪。另一位读者举了使用 Bazel 和 Buck2 构建 Haskell 的现有尝试。做虚拟现实合成器的团队成员则分享了他们在运行中的程序上做交互式调试的经验，认为单步调试的价值在社区里被低估了。还有人问，既然严格类型有助于智能体反复检查代码，为什么 AI 编程很少选 Haskell？回复提到，训练数据里的语言分布也影响模型的选择。

---

## 9. 早期 Macintosh 如何快速切换应用？Switcher 的开发往事 (Switcher (2004))


Andy Hertzfeld 回忆，1984 年他给记者 John Markoff 演示扫描软件时，看到对方在 IBM PC 上用 DOS 工具 Memory Shift 瞬间换到另一个应用。他想到，刚上市的 512K Macintosh 也有空间让多个程序同时留在内存里。从画图软件切到文字处理软件，就能直接接着工作。

Hertzfeld 为各个应用划分独立的内存分配区，让应用少受彼此干扰。切换时还要换回目标程序存放在低地址内存中的状态，因为当时系统把不少应用专用变量放在同一批地址。苹果的软件经理 Bud Tribble 看过原型后建议加上横向滚动动画，让用户看得出屏幕已经换到另一个程序。据 Hertzfeld 回忆，他与苹果谈妥 10 万美元的费用，苹果也决定随 Mac 提供 Switcher。成品于 1985 年 4 月发布，后来由 1987 年推出的 MultiFinder 接班。

原文链接：https://folklore.org/Switcher.html

论坛讨论链接：https://news.ycombinator.com/item?id=50477714

一位 HN 读者用当年的制图流程解释切换速度为何重要。他从 Multiplan 复制一列数据，切到 Cricket Graph 粘贴生成图表，再把图表带到 MacDraw，还能拆开调整饼图和图例。这些应用各自支持剪贴板里的通用格式，因此可以连着用。另一位读者记得把 Mac 从 128 KB 升到 512 KB 后，喜欢 Switcher 整屏翻换的感觉，后来在全屏应用和 Spaces 里也看到类似的体验。也有人提起同在 1985 年问世的 Amiga 1000，可以切换不同分辨率和色深的屏幕。

---

## 10. IceWM 从 1997 年走到今天，任务栏和快捷键都在一个窗口管理器里 (IceWM)


IceWM 是为 X Window System 开发的窗口管理器，由 Marko Maček 在 1997 年用 C++ 创建。它负责摆放、切换和管理应用窗口，自带可选任务栏、应用菜单和工作区切换器。用户可以用鼠标拖动窗口，也可用 Alt+Tab、窗口列表或自定义快捷键快速切换。窗口能缩到任务栏、系统托盘或桌面图标，也能隐藏起来。多个应用窗口可以组合成标签页，使用多块显示器时，IceWM 支持通过 RandR 或 Xinerama 识别屏幕布局。用户可以换主题，也可按习惯设置窗口何时获得键盘焦点。官方网站列出了 Debian、Ubuntu、Arch 等 Linux 发行版和多种 BSD 系统，也提供了手册与源码安装方法。项目仍在 GitHub 维护，官网列出的最新正式版是 2026 年 8 月发布的 4.1.0。

原文链接：https://ice-wm.org/

论坛讨论链接：https://news.ycombinator.com/item?id=50478515

发帖者试过多套平铺式窗口管理器，最终选了 IceWM。他常用终端、文件管理器和 Reaper，也通过 Wine 跑一些 Windows 程序，觉得自由拖放窗口更顺手。有人问音频工作是否需要轻量桌面，还举例自己用 GNOME 也能运行多路现场音频和效果器。发帖者回答，这是操作习惯上的选择。另一位读者把 IceWM 用在无显示器的远程主机上，看重面板、菜单和窗口控制装好就能用。也有常用 X 会话的读者希望它具备把窗口拖到屏幕边缘即可贴靠的功能。
