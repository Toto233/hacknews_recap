---
title: 'VS Code 想默认给 Copilot 加共同作者，开发者直接炸锅 | Hacker News 摘要 (2026-05-03)'
author: 'hacknews'
description: ''
digest: 'VS Code 仓库中的一个 PR 引发了强烈反弹：它试图默认启用 AI co-author 行为，在提交信息中插入 “Co-Authored-by Copilot”，即使用户并不一定明确使用了 Copilot 参与这次提交。页面本身是 G'
source_url: 'https://github.com/microsoft/vscode/pull/310226'
pubDatetime: 2026-05-03 09:12:13.798+08:00
tags:
  - AI_开发工具
  - 开源维护
  - 系统性能
  - 工程细节
---

---

## 1. VS Code 想默认给 Copilot 加共同作者，开发者直接炸锅 (VS Code inserting 'Co-Authored-by Copilot' into commits regardless of usage)


VS Code 仓库中的一个 PR 引发了强烈反弹：它试图默认启用 AI co-author 行为，在提交信息中插入 “Co-Authored-by Copilot”，即使用户并不一定明确使用了 Copilot 参与这次提交。页面本身是 GitHub PR，但反应数字已经说明问题，反对票远高于支持票。争议核心不是一行 footer，而是开发者对工具越界的警惕：代码提交记录是项目历史、责任归属和审计线索，IDE 如果默认替用户声明 AI 参与，很容易混淆真实贡献者、影响合规判断，也会把营销叙事塞进版本控制。这个事件再次暴露 AI 编程工具在产品增长和开发者自治之间的冲突。

原文链接：https://github.com/microsoft/vscode/pull/310226

论坛讨论链接：https://news.ycombinator.com/item?id=47989883

HN 讨论集中在“默认开启”这件事是否越界。很多人认为，如果 AI 确实参与了提交，可以由用户主动标注，但 IDE 不应替用户决定身份归属。也有人把它看成微软推动 Copilot 进入开发流程每个角落的又一个例子，担心未来提交历史会变成产品指标和合规噪音。支持方较少，主要认为共同作者标记能提高透明度，但多数评论认为透明度必须建立在明确同意之上。

---

## 2. 开源维护者为什么会耗尽：一份报告把问题讲得很直白 (A report on burnout in open source software communities (2025) [pdf])


这份关于开源软件社区倦怠的报告结合学术文献和社区材料，系统梳理了 OSS 维护者为什么容易被消耗。报告把倦怠定义为体力和心理能量耗竭，并拆成动力、情绪和认知三个维度：不想再投入、情绪被抽干、开始疏离和否定工作。它指出开源里的主要诱因包括难以获得报酬、工作量和时间承诺失控、维护工作缺少正反馈、社区有毒行为、过度责任感，以及维护者必须不断证明自己。建议也很直接：支付维护者、建立尊重和认可文化、扩大贡献者群体，并为维护者争取制度性支持。报告强调，忽视维护者倦怠不仅伤害个人，也会威胁整个依赖开源的软件生态。

原文链接：https://mirandaheath.website/static/oss_burnout_report_mh_25.pdf

论坛讨论链接：https://news.ycombinator.com/item?id=47981669

讨论里不少维护者把问题落到“如何证明影响力”上：下载量、GitHub stars 这类指标容易被刷，也难以反映真实业务价值，但组织预算又常常依赖这些信号。有人指出，企业使用开源却很少回馈案例、资金或人力，导致维护者既要支撑关键基础设施，又缺少可见的组织支持。也有人提醒，不能把开源浪漫化成无限志愿劳动，长期稳定的软件维护需要资源、边界和可持续激励。

---

## 3. macOS 虚拟机在 Apple Silicon 上有多快？单核几乎贴着宿主机跑 (How fast is a macOS VM, and how small could it be?)


Eclectic Light 重新测试了 Apple Silicon 上的 macOS 虚拟化性能。测试主机是 Mac mini M4 Pro，运行 macOS 26.4.1，拥有 14 核 CPU、48GB 内存和 2TB SSD；虚拟机分配 5 个虚拟核心和 16GB 内存。Geekbench 结果显示，VM 单核 CPU 得分 3855，宿主机 3948，约为宿主机 98%；Metal GPU 得分也达到宿主机约 95%。真正短板是虚拟神经引擎，半精度和量化测试明显落后。作者还测试了“最小可用规格”：4 核 8GB、3 核 6GB、甚至 2 核 4GB 都能完成 Safari 和轻量日常任务。磁盘方面，macOS VM 最好给 60GB 以上空间；APFS 稀疏文件让 100GB 虚拟磁盘实际大约占 54GB。

原文链接：https://eclecticlight.co/2026/05/02/how-fast-is-a-macos-vm-and-how-small-could-it-be/

论坛讨论链接：https://news.ycombinator.com/item?id=47984852

评论主要围绕内存和核心数量关系展开。有人认为核心越多会带来更多内核和用户态服务开销，因此减少虚拟核心可能会降低基础内存占用；也有人认为这只是系统根据可用内存自适应缓存行为，不能简单归因于每核数据结构。另一条讨论线是并行任务的真实内存需求：编译 Chromium、flash-attn 等项目时，每个线程可能消耗大量内存，因此“能跑轻量任务”和“适合重负载开发”是两回事。

---

## 4. 为什么黑色猫扇总是晚来？Noctua 把注塑工程讲明白了 (Why does it take so long to release black fan versions?)




Noctua 解释了为什么 chromax.black 黑色版本风扇通常比经典棕色版本晚发布。原因不是简单“换个颜色”，而是高精度注塑工程里的材料变量变化。NF-A12x25、NF-A12x25 G2、NF-A14x25 G2 等风扇使用 Sterrox LCP，并把叶尖间隙压到 0.5mm 或 0.7mm，以减少叶轮和框架之间的漏流。在这种公差下，颜料会影响塑料熔体的黏度、吸热、结晶和冷却行为。黑色常用的炭黑颗粒比棕色/米色金属氧化物颜料更小、表面积更大，对材料流动和尺寸稳定影响更明显。因此 Noctua 通常先让标准色模具和量产稳定，再为黑色版本单独调模并重跑长期高温验证，最少也会带来约 6 个月延迟。

原文链接：https://www.noctua.at/en/expertise/blog/how-can-it-take-so-long-to-release-black-fan-versions

论坛讨论链接：https://news.ycombinator.com/item?id=47983352

HN 读者普遍认为这是一篇质量很高的工程型内容营销：既解释了真实制造难点，也顺带展示了产品差异化。争议点在于 Noctua 对注塑公差的说法是否表述过宽，有评论指出普通注塑和高精度注塑可以做到比 0.5mm 更小的公差，怀疑问题关键其实在 LCP 材料、长期旋转、热变形和寿命验证，而不是单纯成型精度。也有人补充，风扇长期在高转速和热环境下承受离心力，制造出来只是第一步，稳定工作多年才是真正难点。

---

## 5. 微软开源 lib0xc：给 C 标准库旁边补一层更安全的 API (Lib0xc: A set of C standard library-adjacent APIs for safer systems programming)


lib0xc 是微软推出的一组 C 标准库相邻 API，目标是在不要求开发者彻底放弃 C 的前提下，提供更安全、更现代的系统编程基础设施。从项目定位看，它不是替代 libc，而是围绕字符串、内存、容器、错误处理等常见危险区域提供更稳妥的抽象和约束，尽量减少越界、生命周期和隐式失败带来的漏洞。对大型 C/C++ 代码库来说，这类库的价值在于渐进迁移：可以在现有 ABI、工具链和工程习惯中引入更好的默认接口，而不是要求所有项目一次性改写到 Rust 或其他内存安全语言。它也反映出大型厂商对 C 生态现实主义的一面：存量代码不会很快消失，所以需要可落地的安全加固层。

原文链接：https://github.com/microsoft/lib0xc

论坛讨论链接：https://news.ycombinator.com/item?id=47978834

讨论围绕“安全 C”是否现实展开。支持者认为，大量底层项目仍会继续使用 C，能够用库级别改善边界检查、错误处理和 API 设计就有实际价值。怀疑者则指出，库无法从语言层面解决所有内存安全问题，尤其是悬垂指针、并发和复杂所有权仍然需要纪律或工具配合。也有人把它和 Rust、Checked C、Annex K 等历史尝试对比，认为真正的关键不只是 API 设计，而是能否被现有项目接受并长期维护。

---

## 6. Ask.com 关站：那个会回答问题的 Jeeves 时代正式结束 (Ask.com has closed)


Ask.com 宣布关闭搜索业务。页面公告称，随着母公司 IAC 继续聚焦业务，Ask.com 已在 2026 年 5 月 1 日正式结束，告别 25 年的搜索和问答服务。公告感谢曾经构建和维护 Ask 的工程师、设计师和团队，也感谢多年来使用它提问的用户，并用一句 “Jeeves’ spirit endures” 为品牌收尾。Ask.com 曾从 Ask Jeeves 起步，以自然语言问答和管家 Jeeves 形象被很多早期互联网用户记住，后来在搜索广告、工具栏和内容分发时代几经转型。它的关闭本身不是搜索市场格局的震动，但象征着早期 Web 搜索品牌进一步退出历史舞台。

原文链接：https://www.ask.com/

论坛讨论链接：https://news.ycombinator.com/item?id=47983226

HN 讨论很快转向早期搜索广告和数据中心往事。有评论回忆 Ask.com 曾经通过外部广告服务商接入 Google 或 Yahoo 广告源，系统需要在极低延迟内请求、合并并返回广告。另一些人借此回忆 2000 年代机房环境，包括 Google 早期高密度服务器、冷热通道设计不成熟以及相邻机柜被热量影响的经历。相比怀旧品牌本身，社区更感兴趣的是那个搜索广告基础设施尚未完全平台化的时代。

---

## 7. Dotcl：把 Common Lisp 编译到 .NET JIT 上运行 (Dotcl: Common Lisp Implementation on .NET)


Dotcl 是一个运行在 .NET 上的 Common Lisp 实现。它把 Lisp 源码编译成 CIL，再交给 .NET JIT 执行，因此同一个 Lisp 镜像可以在 Windows、macOS、Linux，以及 x86-64、ARM64 上运行。项目声称大体符合 ANSI Common Lisp，并通过 ansi-test suite 验证。它的主要用途包括把 Common Lisp 嵌入 .NET 应用、用 Lisp 编写 .NET 代码，以及从 Lisp 直接访问 NuGet 生态。dotnet 包提供创建对象、调用方法、访问静态成员和定义 .NET 类的能力，因此 MAUI、ASP.NET Core、MonoGame 等框架可以把 Lisp 生成的类当作普通 .NET 类型。项目先用 Roswell/SBCL 交叉编译引导，之后可以自举重建自身。

原文链接：https://github.com/dotcl/dotcl

论坛讨论链接：https://news.ycombinator.com/item?id=47964957

讨论首先关心性能：有人希望看到 benchmark，因为 .NET JIT 在 F# 等语言上能把热点循环优化到接近 Rust 的水平。社区也把 Dotcl 和 IronScheme、Clojure、Coalton 等 Lisp 系语言放在一起比较，讨论 Common Lisp 的实用性、语法亲和力和推广困难。部分评论认为 Lisp 思想很强，但传统生态和默认体验对新用户不够友好；也有人认为 Clojure 是把 Lisp 带入主流工程环境的更成功路径。

---

## 8. Artemis II 照片时间线：用 220 张影像重走一次绕月任务 (Artemis II Photo Timeline)


Artemis II Photo Timeline 是一个交互式照片和视频时间线，用来浏览 2026 年 3 月至 4 月 Artemis II 任务相关影像。页面提供 220 个媒体条目，并支持按日期、媒体类型、相机和拍摄位置筛选。用户可以只看宇航员照片、只看飞船外部影像，也可以区分 Nikon D5、Nikon Z9、GoPro、iPhone 等设备来源。界面还显示时间、距离地球、距离月球、摄影师、位置、相机设置等元数据，并引用 NASA Flickr、JPL Horizons、DVIDS、Astronomy Live 和 GitHub 等来源。它更像一个任务影像浏览器，而不是普通相册：用户可以按时间顺序跟随任务推进。

原文链接：https://artemistimeline.com/#artemis-ii-walkout-nhq202604010003

论坛讨论链接：https://news.ycombinator.com/item?id=47954394

评论对交互体验评价很高，很多人建议开启“Crew Photos Only”后用方向键按时间顺序浏览，能更直观地感受到任务过程。有人特别喜欢照片和短视频混合带来的临场感，觉得不少影像未经修饰，反而显得真实。也有小的交互反馈，例如说明文字打开时左右按钮位置会跳动。另一条讨论集中在月面影像的视觉错觉：没有大气散射、所有物体都清晰对焦，让月球表面看起来像游戏里关闭了真实感渲染效果的场景。

---

## 9. 为什么 Windows 同时有 TMP 和 TEMP？答案要从 CP/M 讲起 (Why are there both TMP and TEMP environment variables? (2015))


Raymond Chen 回顾了 TMP 和 TEMP 两个环境变量并存的历史。CP/M 时代没有环境变量，程序配置常常靠直接 patch 可执行文件里的字节。MS-DOS 继承了很多 CP/M 设计，同时引入环境变量，但早期从 CP/M 移植来的程序并不会使用它们。后来 MS-DOS 原生程序开始用环境变量存配置，市场混乱中 TEMP 和 TMP 都成为临时目录候选。MS-DOS 2.0 支持管道时，因为系统本身单任务，只能通过临时文件模拟管道，于是 COMMAND.COM 选择 TEMP。另一方面，Windows 的 GetTempFileName 函数又优先看 TMP。结果就是不同程序按各自作者选择检查顺序，两个变量一直共存到今天。

原文链接：https://devblogs.microsoft.com/oldnewthing/20150417-00/?p=44213

论坛讨论链接：https://news.ycombinator.com/item?id=47984522

讨论最感兴趣的是 CP/M 和早期 PC 软件“通过 patch 配置程序”的做法。很多年轻开发者第一次听说 WordStar 这类软件会预留 patch 空间，用户甚至可以写机器码子程序来适配打印机或提升键盘、显示性能。有人把它类比成游戏 mod 或 BASIC 里的 poke：配置、修补和改造之间界限很薄。也有人借题回忆 ZX81、ZX Spectrum 等早期家用机生态，说明当时软硬件资源极少，直接改内存或机器码并不罕见。

---

## 10. 修复岛屿生态，科学家先从真菌下手 (To Restore an Island Paradise, Add Fungi)





Yale E360 报道了一项利用真菌帮助恢复岛屿生态的研究和实践。面对海平面上升、土壤退化和极端环境压力，一些低洼岛屿的恢复不能只靠种树或搬运土壤，还要重建地下微生物网络。真菌，尤其是与植物根系共生的菌根真菌，可以帮助植物吸收养分和水分，提高幼苗在贫瘠、盐分高或受扰动土壤中的成活率。文章把生态恢复重点从可见的植被扩展到土壤生命系统：如果地下网络没有恢复，地表绿化很可能只是短期景观工程；如果微生物和植物重新建立互利关系，岛屿抵御侵蚀和气候压力的能力才可能更稳定。

原文链接：https://e360.yale.edu/digest/atoll-islands-sea-level-rise-fungi

论坛讨论链接：https://news.ycombinator.com/item?id=47949794

HN 讨论把这个话题延伸到土壤健康和农业方式。有人指出，现代大规模单一种植会让土地长时间裸露，并依赖大量外部投入维持产量；如果减少杀虫剂和除草剂，土壤生物网络可能更丰富，但也需要更多精细管理。也有人讨论机械除草、覆盖作物和保持地表覆盖对保水与防止退化的意义。整体观点是，恢复生产力不能只看化肥或单一作物产量，而要理解不同地区、不同作物下土壤生态如何形成。

