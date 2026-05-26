---
title: '加州拟豁免 Linux，不再强制系统级年龄验证 | Hacker News 摘要 (2026-05-26)'
author: 'hacknews'
description: ''
digest: 'Tom's Hardware 报道称，加州立法者正在修改此前引发 Linux 和开源社区强烈反弹的年龄验证法案。原来的 Digital Age Assurance Act 试图把在线年龄验证从网站和应用下沉到操作系统层面，要求系统在设备设置'
source_url: 'https://www.tomshardware.com/software/linux/california-moves-to-exempt-linux-from-its-upcoming-age-verification-law-after-backlash-over-forcing-operating-systems-to-collect-users-ages-amendment-proposed-by-the-same-lawmaker-who-wrote-the-original-law'
pubDatetime: 2026-05-26 20:27:34.218+08:00
tags:
  - 开源监管
  - AI治理
  - 隐私安全
  - 计算机史
---

---

## 1. 加州拟豁免 Linux，不再强制系统级年龄验证 (California moves to exempt Linux from its age-verification law after backlash)


Tom's Hardware 报道称，加州立法者正在修改此前引发 Linux 和开源社区强烈反弹的年龄验证法案。原来的 Digital Age Assurance Act 试图把在线年龄验证从网站和应用下沉到操作系统层面，要求系统在设备设置时收集用户年龄或生日，并向应用和应用商店提供年龄段信号。问题在于，Linux 发行版往往是社区维护、可自由分叉、没有统一账号体系或遥测基础设施的开源项目，按原文义可能也会被视为操作系统提供者。新提出的 AB 1856 修正案把允许复制、再分发和修改的软件排除在“操作系统提供者”之外，实际可能豁免 Debian、Fedora、Ubuntu、Arch、Mint 等主流发行版。但它并未废除原法，带有专有应用生态的商业平台仍可能继续受约束。

原文链接：https://www.tomshardware.com/software/linux/california-moves-to-exempt-linux-from-its-upcoming-age-verification-law-after-backlash-over-forcing-operating-systems-to-collect-users-ages-amendment-proposed-by-the-same-lawmaker-who-wrote-the-original-law

论坛讨论链接：https://news.ycombinator.com/item?id=48269961

HN 讨论的核心不是“Linux 赢了”，而是系统级年龄验证是否本身就是错误方向。有人提出更轻量方案：浏览器默认检查家长控制，成人内容网站只需设置 RTA 之类的标记，由本地设备和监护人决定是否拦截，而不是让所有操作系统收集年龄。也有人用 cookie banner 作为反例，认为立法者很少能把技术细节做简单，最后往往制造长期烦人的合规基础设施。评论普遍支持豁免开源系统，但也担心监管会继续把身份、年龄和设备绑定起来，形成更大的在线追踪体系。

---

## 2. 教皇发布 AI 时代的人类尊严通谕 (Magnifica Humanitas)



梵蒂冈发布了教皇 Leo XIV 的通谕《Magnifica Humanitas》，主题是“在人工智能时代守护人”。这是一篇极长的社会训导文本，从基督教人类观、共同善、社会正义、工作尊严、传播生态、民主、战争和多边主义等角度讨论 AI 带来的权力集中和制度挑战。通谕并不把 AI 视为单纯危险，而是称其为需要警惕和治理的有价值工具；关键在于不能让技术官僚范式、后人类叙事或商业化依赖削弱人的尊严、自由和劳动价值。文章特别强调透明、责任、教育、公共沟通和外交合作，反对把无限制的技术力量正常化，也反对用所谓现实主义为战争和压迫辩护。它的技术含量不在实现细节，而在把 AI 放进宗教伦理和社会制度框架中审视。

原文链接：https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html

论坛讨论链接：https://news.ycombinator.com/item?id=48265206

讨论区从一个更基础的问题展开：社会是否真的能主动“驯服”技术，使其服务共同善，还是总被技术自身的权力结构牵着走。有人举电力、爆炸物和枪支作为例子，认为社会契约、法规和稳定秩序确实能限制某些技术的滥用；也有人认为中产阶级兴起、可再生能源替代等进步更多来自经济结构变化，而非集体道德选择。评论没有围绕神学细节展开，反而把通谕当成 AI 治理问题的入口：当技术自然集中权力时，社会有没有足够强的制度能力把它重新拉回公共利益。

---

## 3. 挪威国家图书馆用 2PB 华为闪存训练主权 LLM (Norway's 2 petabytes of Huawei flash storage and LLM training)


Blocks & Files 报道，挪威国家图书馆正在建设理解挪威语的主权大模型，并在 AI 数据管线中使用 2PB 华为 OceanStor Dorado 全闪存储。项目负责人表示，商业 LLM 供应商不会优先为挪威语、挪威历史和本地文化训练模型，而国家图书馆拥有全国最大的数字化馆藏，包括书籍、报纸、网页、音视频和图像等。图书馆自 2005 年起持续数字化，拥有约 20PB 唯一数据，并按 3-2-1 形式保存，总量约 60PB。难点不是算力，而是把长期保存用的高延迟归档系统，转化为能支持清洗、去重、格式规范化、验证和训练准备的高吞吐数据管线。训练阶段则接入挪威 Sigma2 Olivia 超算系统。项目还面临挪威语双书面形式、方言、历史语料评估和模型治理问题。

原文链接：https://www.blocksandfiles.com/flash/2026/05/22/norways-2-petabytes-of-huawei-flash-storage-and-llm-training/5244910

论坛讨论链接：https://news.ycombinator.com/item?id=48270770

HN 上很多挪威用户把讨论带回国家图书馆本身。有人说 nb.no 的检索界面和文本搜索能力非常好，日常经常使用；也有人抱怨版权限制导致大量内容只能从挪威 IP、图书馆或研究机构访问，甚至部分报纸访问需要人工申请 8 小时权限。评论对“主权 LLM”的技术实现兴趣不小，但更关注公共文化资产如何开放：国家图书馆拥有极高价值的本地语料，却必须在版权、访问权和国家 AI 能力之间做平衡。也有人询问非挪威人能否访问，得到的答案是公版内容可直接访问，受版权保护内容分层限制。

---

## 4. Mullvad 修复跨 VPN 服务器的出口 IP 指纹问题 (Exit IP VPN servers mitigation rollout)


Mullvad 披露并开始部署一项缓解措施，修复用户在不同 VPN 服务器之间切换时可能被关联的问题。问题并不会泄露用户真实身份，但某些网站或服务可能根据出口 IP 分配规律，较有把握地推断“这个从新服务器连来的用户，就是刚才在另一个服务器上的同一个人”。原因在于每台 VPN 服务器有一组出口 IP，同一设备的 WireGuard key 和内部隧道地址通常相关；当用户切换服务器但内部地址相同时，系统可能把它分配到不同服务器出口 IP 范围中相近的相对位置。Mullvad 建议高威胁模型用户在切换服务器时登出再登录，以重新生成 WireGuard key 和内部 IP。新的分配方法会让一个服务器上的出口地址不再暴露另一个服务器上的出口地址信息，目前已开始在部分节点 rollout。

原文链接：https://mullvad.net/en/help/exit-ip-vpn-servers-mitigation-rollout

论坛讨论链接：https://news.ycombinator.com/item?id=48269580

讨论区首先指出 HN 链接其实指向 rollout 服务器列表，而更有价值的是 Mullvad 的背景博客。技术讨论随后集中在示例 IP 使用上：有人称 Mullvad 的文章应该使用 RFC5737 规定的文档示例地址，而不是看起来像真实公网地址的例子。部分用户认为这些保留网段不好记，所以实际文档中常被忽略；另一些人反驳说，写网络技术文档就应该掌握 TEST-NET-1 等基本语义，否则会让软件和文档越来越随意。还有评论吐槽页面按钮图标不开 JavaScript 就无法加载，话题从隐私问题延伸到现代前端复杂性。

---

## 5. 写替代 C 编译器时，真正难的是现实世界的头文件 (C extensions, portability, and alternative compilers)


这篇文章从作者实现 C 编译器的经验出发，说明“可移植 C”在现实中远比标准文本复杂。真正的 C 代码很少只依赖 ISO C，系统头文件、libc、编译器内建头文件和平台扩展交织在一起，很多非标准特性不是为了炫技，而是为了绕过不同编译器和库的缺口。作者举 glibc 为例：一个想跑 hello world 的编译器必须能预处理和解析 stdio.h，而 glibc 的 sys/cdefs.h 会根据 __GNUC__、__clang__、__TINYC__ 等宏决定是否启用属性语法。即使实现了 __attribute__((packed))，如果你不是这些被识别的编译器，头文件也可能直接把 __attribute__ 定义为空，导致 ABI 布局错误。文章还讨论 limits.h、include_next、POSIX 常量、Windows 和 BSD 等环境差异，结论是替代编译器必须面对大量“事实标准”和脆弱探测逻辑。

原文链接：https://lemon.rip/w/6-c-extensions-compilers/

论坛讨论链接：https://news.ycombinator.com/item?id=48267126

HN 讨论中，D 语言作者 Walter Bright 提到自己实现 ImportC 时也被各种头文件里的混乱兼容逻辑折磨过。另一些用户从平台可移植性角度抱怨，很多 C 项目实际上只是“在作者机器上能跑”，Linux 作者常忽略 Windows 和 FreeBSD，Windows 和 BSD 用户则会踩到 systemd、非 POSIX 行为或 GNU 扩展依赖。也有人反过来认为 POSIX 不该成为束缚，Linux 的特性好用就应该充分使用。争论背后是一个老问题：C 语言名义上很可移植，但真实生态早已由编译器、libc 和平台约定共同定义。

---

## 6. Gnutella：那个比时代活得更久的 P2P 协议 (Gnutella: A Protocol Outliving the World That Created It)


Rick Carlino 写了一篇给 Gnutella 的长篇“情书”。Gnutella 是早期文件共享协议，常被 LimeWire 等客户端遮蔽在背后。它最初是 AOL 内部 demo，被取消后泄露到公众手里，因为无中心服务器设计，已经无法被收回。作者认为，说 Gnutella 失败并不公平：它曾支撑数百万并发用户，流行近十年，今天仍以长尾形式存在。它的成功不是因为用户关心去中心化理念，而是因为它在当时解决了真实问题：音乐行业没有适应 MP3，宽带和流媒体尚未成熟，普通用户仍愿意管理文件系统和下载目录。协议本质上是一个 P2P blob 搜索系统，可以搜索文件、元数据甚至其他资源，但历史记住的是 MP3 下载。文章也解释了查询传播、peer discovery、GWebCache、ultrapeer 等机制和它被 BitTorrent 取代的原因。

原文链接：https://rickcarlino.com/notes/p2p/gnutella-explanation.html

论坛讨论链接：https://news.ycombinator.com/item?id=48231247

讨论区有早期 Gnutella 客户端和 GWebCache 的参与者现身，认为 Gnutella 的架构成本收益最终不够好，尤其是隐私和搜索效率：用户暴露自己的机器来服务文件和路由流量，查询也不会覆盖所有节点。BitTorrent 保留了去中心化文件传输的优点，却把搜索和发现交给网站或 tracker，反而更实用、更容易隐藏风险。很多评论带着怀旧情绪回忆 LimeWire、Gnucleus 和在全网搜索文件的“掷骰子”体验，但也承认现代用户已经不再像当年那样管理本地文件系统，Gnutella 所服务的那类用户本身正在消失。

---

## 7. White Rabbit：让分布式系统做到亚纳秒同步 (White Rabbit – sub-nanosecond synchronization for large distributed systems)


White Rabbit 是一个面向大型分布式系统的精密同步项目，可以提供亚纳秒级准确度和皮秒级同步精度，同时在同一网络中传输确定性、可靠的数据。它基于以太网，目标场景包括数千节点、典型 10 公里节点距离、千兆速率数据传输、时间戳测量和同步触发采集。项目强调硬件、固件和软件完全开放，并已有多厂商商业硬件。White Rabbit 起源于 CERN 等高能物理场景，对实验装置来说，不同节点必须知道事件发生的精确时间，同时还要把数据可靠传回。页面本身较短，但讨论补充了关键技术背景：这不是普通以太网简单跑 NTP，而是在物理层同步时钟，并通过双向时间传输测量和补偿链路延迟。

原文链接：https://ohwr.org/projects/white-rabbit/

论坛讨论链接：https://news.ycombinator.com/item?id=48245916

HN 评论对“10 公里还能亚纳秒同步”很感兴趣。有人指出 White Rabbit 使用的千兆以太网并非日常理解的独立网卡自由运行时钟，而是所有物理层在 layer 1 同步；千兆以太网即使空闲也持续发送 idle symbol，因此可以用于精密同步。实验室用户称，在 50 公里光纤和温度变化条件下，WR client 与 master 的相位锁定抖动可做到约 10 皮秒，并会主动补偿光纤伸缩。讨论还解释了为什么同步精度可以好于光传播绝对时间：双向时间传输测量的是往返延迟并进行补偿，不需要提前知道物理距离。

---

## 8. 吹迪吉里杜管，竟能缓解睡眠呼吸暂停 (Didgeridoo playing as alternative treatment for obstructive sleep apnoea (2006))


这篇 2006 年 BMJ 随机对照试验研究了演奏迪吉里杜管是否能作为中度阻塞性睡眠呼吸暂停和打鼾的替代治疗。研究纳入 25 名成年人，要求呼吸暂停低通气指数在 15 到 30 之间并主诉打鼾。干预组接受迪吉里杜管课程，并在家每日练习四个月；对照组则等待课程。结果显示，干预组平均每周练习 5.9 天、每天约 25 分钟。与对照组相比，干预组日间嗜睡评分显著下降，呼吸暂停低通气指数也显著改善，伴侣报告的睡眠干扰明显减少；但总体睡眠质量评分和健康相关生活质量没有显著差异。作者推测，迪吉里杜管训练可能强化上气道相关肌肉，降低睡眠时气道塌陷风险。研究样本很小，但作为非药物、非 CPAP 的行为干预很有趣。

原文链接：https://pmc.ncbi.nlm.nih.gov/articles/PMC1360393/

论坛讨论链接：https://news.ycombinator.com/item?id=48243666

评论区自然先开起玩笑：有人说迪吉里杜管练习对伴侣睡眠的干扰可能不比打鼾小，建议试试风笛；马上又有人反驳，风笛可能是恶作剧失控。更严肃的讨论集中在机制上：目标未必是循环呼吸本身，而可能是吹奏阻力对保持气道开放肌肉的训练。有人提到箱式 didgeridoo 声音更小，也有人讨论瑜伽呼吸法是否有类似证据，但提醒互联网上相关内容良莠不齐。总体氛围是半怀疑半好奇：小样本研究不能替代标准治疗，但它提供了一个可解释、低成本、相对安全的训练思路。

---

## 9. 日本 7-Eleven 缔造者铃木敏文去世 (Toshifumi Suzuki, founder of Seven-Eleven Japan, has died)


HN 链接到一篇铃木敏文的商业传记，并以其去世为背景重新讨论他对日本零售业的影响。铃木敏文 1932 年出生于长野，毕业于中央大学，1963 年加入 Ito-Yokado，1973 年成为 Seven-Eleven Japan 首任总裁。他把便利店和特许经营模式引入日本，并将其发展成上万家门店的网络。文章强调，他并非简单复制美国 7-Eleven，而是利用日本消费者高频、小量、重视新鲜度的购物习惯，改造供应链、库存和商品开发方式。Seven-Eleven Japan 的核心创新之一是高度集成的数据系统，能实时掌握销售、顾客、库存和供应链信息，从而提高门店效率和响应速度。1991 年，日本 7-Eleven 还反向拯救了美国原品牌公司，成为全球便利店史上的重要转折。

原文链接：https://www.referenceforbusiness.com/biography/S-Z/Suzuki-Toshifumi-1932.html

论坛讨论链接：https://news.ycombinator.com/item?id=48268609

讨论区更多是用户对日本 7-Eleven 的体验回忆。很多游客说，日本便利店的咖啡、饭团、三明治、甜点和联名商品质量远超自己预期，甚至成为旅行日常的一部分。也有人提醒，便利店在日本本地收入水平下并不便宜，只是对美元游客来说显得划算。随后话题转向日本工资、购买力和过去十年的通胀变化。评论整体不是商业战略复盘，而是从消费者感受侧面证明铃木敏文改变了便利店的定位：它不只是“应急买东西”的地方，而是一套高频、可靠、服务细密的城市基础设施。

---

## 10. Firefox 开始支持直接构建 Adafruit 硬件项目 (Build Adafruit projects right from Firefox)


Mozilla 推出面向 Adafruit 用户的 Firefox 落地页，主打通过 Web Serial 在浏览器中直接连接、编程和控制兼容硬件设备。页面称，Firefox 现在可作为 Adafruit Web Serial 编程的推荐浏览器，让用户无需额外桌面应用或复杂安装，就能从网页工具直接与开发板通信。这个功能面向 maker、教育和硬件原型场景：打开 Firefox，连接设备，就可以开始编码、烧录或与板子交互。页面本身信息不多，但它标志着 Mozilla 对 Web Serial 的态度发生了可见变化。过去 Mozilla 对 WebUSB、WebBluetooth、WebMIDI 等“原始设备访问”API 一直非常谨慎，担心权限提示无法向普通用户解释硬件访问风险；这次与 Adafruit 的合作说明 Web Serial 至少在特定设备和受众场景下被重新接受。

原文链接：https://www.firefox.com/en-US/landing/adafruit/

论坛讨论链接：https://news.ycombinator.com/item?id=48231547

HN 讨论主要围绕 Web Serial 的安全模型。有人引用 Mozilla 2020 年对 WebUSB、WebBluetooth、WebNFC 和 WebMIDI 的反对意见，称原始设备访问风险难以通过权限弹窗向用户解释。其他人指出，当前链接讨论的是 Web Serial，不应直接套用蓝牙键盘、USB 设备或 MIDI 的风险；普通用户通常不会随便插着串口设备，目标人群更明确。也有人认为这仍然暴露了浏览器平台的长期矛盾：开放 Web 想替代专用桌面工具，就必须碰硬件能力；但能力越底层，权限提示越难让用户真正理解后果。

