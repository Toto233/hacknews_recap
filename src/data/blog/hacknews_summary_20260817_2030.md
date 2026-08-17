---
title: "DuckDB 2.0 将引入异步 I/O：远程查询最高提速近 20  | Hacker News 摘要 (2026-08-17)"
author: "hacknews"
description: ""
digest: "DuckDB 计划在 2026 年秋季发布的 2.0 版本中，为 Parquet 与可随机访问的未压缩 UTF-8 CSV 加入异步读取。远程对象存储场景里，同步读取会让工作线程在 HTTP/S3 响应期间空转；新设计将计算线程与大量异步读"
source_url: "https://duckdb.org/2026/07/31/asynchronous-io"
pubDatetime: 2026-08-17 20:30:12.912+08:00
tags:
  - "人工智能"
  - "开发工具"
  - "开源生态"
  - "科技产品"
---

---

## 1. DuckDB 2.0 将引入异步 I/O：远程查询最高提速近 20 倍 (Asynchronous I/O in DuckDB: Work, Thread, Work)




DuckDB 计划在 2026 年秋季发布的 2.0 版本中，为 Parquet 与可随机访问的未压缩 UTF-8 CSV 加入异步读取。远程对象存储场景里，同步读取会让工作线程在 HTTP/S3 响应期间空转；新设计将计算线程与大量异步读取线程分开，并通过预读队列让解码与下载并行。内存治理会根据并发算子压力缩放预读深度，避免吞吐换来失控的内存占用。文中在 EC2/S3 上测试 22GB Parquet：查询从 8.230 秒降至 2.844 秒；80GB CSV 从约 878 秒降至 45 秒。对本地冷读也有效，但收益较小；热缓存时差异有限。

原文链接：https://duckdb.org/2026/07/31/asynchronous-io

论坛讨论链接：https://news.ycombinator.com/item?id=49243061

评论区有人在小规格开发环境用约 7000 万行、576 个 row group 的文件测试，预览版将一次查询从 31.89 秒降至 4.42 秒。讨论集中在异步池按设计超配线程是否会带来调度问题；作者回应，I/O 线程多数等待网络，实测性能代价很小，内存治理也会约束它们。也有人指出网卡队列、CPU 限额及极大内存机器的基准代表性，作者说明可通过 DuckDB 的内存和线程设置在较小环境复现不同压力。

---

## 2. AI 推理额度转售正在形成“代币经纪”市场 (The AI Credit Resale Economy)





文章追踪一个逐渐商业化的 AI 推理额度灰色市场：创业者收到以大幅折扣买卖 Anthropic 等服务额度的邀约，卖方通常不直接交付 API 密钥，而是以代理形式从密钥池转发请求。作者通过邮件接触经纪人，看到对方声称每天可供应 10 万美元额度；公开网站也开始充当额度交易入口。文章的重点不是给出合法性背书，而是揭示这种转售如何从创始人社群里闲置额度互换，发展为不透明的中介业务，并带来账户、使用条款、真实模型与支付来源难以核验的风险。

原文链接：https://vectoral.com/blog/who-are-the-token-brokers

论坛讨论链接：https://news.ycombinator.com/item?id=49320611

评论者认为低折扣的闲置额度转让与极低折扣的“API”应区别看待：高达 98% 的折扣更可能涉及盗用密钥、盗刷卡或批量试用账户，也可能承诺某家模型却转发到另一家。另有讨论指出订阅制与 API 的计价、时间窗口限额和训练成本并不等同；API 定价还受企业采购和市场承受能力影响。共识是，这类交易的供给来源和交付质量难以验证，买卖双方都有封号与合规风险。

---

## 3. 开发者称 Cloudflare 切换 DNS 后默认注入分析脚本 (Tell HN: Cloudflare silently injects its analytics when you switch nameservers)


一位使用纯 HTML、无 JavaScript 网站的开发者称，为了把 R2 存储桶接到自定义子域名而切换到 Cloudflare 名称服务器后，发现页面被加入了一段分析脚本。其描述称，必须进入 Analytics 面板先添加站点，再关闭该脚本；因此他质疑这种默认启用、要求用户自行退出的体验过于侵入。该帖是个人经历与提醒，并非对 Cloudflare 产品行为的独立验证。它把注意力放在代理层拥有响应内容读写能力时，站点运营者如何发现、审计和控制页面变更。

原文链接：https://news.ycombinator.com/item?id=49322107

论坛讨论链接：https://news.ycombinator.com/item?id=49322107

讨论围绕内容安全策略能否约束这类注入展开：有人建议用 CSP 限制脚本来源或用 script-src 'none'，但反方指出代理若能改写响应，也可能改写 meta 标签或忽略请求性头部。评论进一步把问题扩大到反向代理的信任边界：把 DNS 与流量交给服务商意味着它具备内容控制能力。还有人提到 Cache-Control: no-transform，但同样被质疑无法强制一个掌控链路的服务商遵守。

---

## 4. 来自特立尼达的工程师：RISC-V 的价值在可得性而不只 ISA 优雅 (A third world engineer responds to “RISC-V: They should have known better”)




作者回应一篇批评 RISC-V 的文章，承认压缩指令偏移、Zicsr 扩展等设计摩擦，却从特立尼达和多国教学的供应现实出发，强调十美分级芯片、开放工具链和免版税比指令集的理论优雅更能决定谁能动手做嵌入式系统。他认为 RISC-V 的扩展机制虽会带来碎片化，却也让极低端 MCU 与具备 MMU、运行 Linux 或微内核的芯片共享基础架构；同一寄存器模型、调用约定与工具链能让学习从 CH32V003 延伸到 SBC 和安全 SoC。文章的结论是，开放性降低了硬件获取、教育与试验的门槛。

原文链接：https://rvembedded.com/blog_post/12/

论坛讨论链接：https://news.ycombinator.com/item?id=49321717

评论认为两位作者有部分“错位对话”：原批评主要针对 RISC-V 在高性能应用处理器上的性能、效率与二进制发行碎片化，而回应文主要论证它在低端嵌入式的低成本与可定制性。有人补充，所谓“高端”不能把低端 MCU 以上一概而论；VexRISC-V 等核心适合其安全或低功耗目标，却不等同于笔记本、手机或服务器级处理器。也有人指出，高端芯片研发的主要成本并非 ARM 许可费。

---

## 5. AI 时代，软件工程基本功反而更重要 (Software Engineering fundamentals matter more)



作者认为，智能体式编程工具已经跨过“能不能做”的门槛，模型与执行框架是极强的杠杆；但这不会替代软件工程中持续而具体的选择：如何定义问题、设计系统边界、理解依赖和风险、验证结果，以及为长期运行的业务软件负责。文章反对把营销口号当成职业结论，也不否认工具已能显著改变交付方式。核心判断是，生成代码降低了实现成本，却没有消除需求含混、架构权衡、可维护性和责任归属，因此基本功会成为更重要的判断力而非过时技能。

原文链接：https://rhonabwy.com/2026/08/15/software-engineering-fundamentals-matter-more-than-ever/

论坛讨论链接：https://news.ycombinator.com/item?id=49314902

评论把 AI 代码比作宜家家具：它可能稳定地满足大多数普通需求，同时压缩对高端手艺的需求。反驳者指出，软件常常不是可复制的标准商品；企业流程中的定制系统包含大量隐藏决定，若不是一次性脚本，仍需专家监督。另一条评论则提醒，公司往往自认为需求非常特殊，即便实际并非如此。讨论没有否认“够用”会扩大自动化范围，但对复杂业务是否能脱离专业工程判断分歧明显。

---

## 6. Firefox iOS 新增可选原生广告拦截，默认关闭并分批推送 (Firefox for iOS now has a native adblocker)


Mozilla 的支持文档说明，Firefox for iOS 正在通过渐进式推送试验一项原生广告拦截器，部分用户暂未获得功能。它基于 EasyList 过滤列表，在网络层尝试阻断第三方广告网络、广告追踪器、许多第三方广告以及弹窗、浮层等侵入式格式；默认关闭，用户可自行开启。该功能不会拦截 Google、Bing、DuckDuckGo 等搜索结果页广告，也不会处理 Firefox 首页或新标签页的赞助内容。用户可在 Settings 的 Browsing/Content 中切换，也可从站点菜单临时开关。

原文链接：https://support.mozilla.org/en-US/kb/block-ads-firefox-ios

论坛讨论链接：https://news.ycombinator.com/item?id=49319633

评论者肯定 iOS 端终于有原生能力，但希望 Firefox 继续补齐站点数据自动清理等隐私控制。关于 Safari 上的 uBlock Origin Lite，有人指出其受 Manifest V3 与规则限制影响，另一方则认为若干限制被夸大、实际体验已足够好。讨论还区分了 Firefox 对 WebExtensions 的支持与 iOS 浏览器的实际限制：桌面/Android 的能力不能直接外推到 iOS。整体看，读者将它视为实用改进，但仍期待更完整、可配置的隐私工具。

---

## 7. 华硕发布 Oxiis：把普通自行车变成电助力车的摩擦驱动器 (Asus Bike Booster)



华硕 Oxiis E250G1 是装在座管附近的通用摩擦驱动电助力装置，主打无需改动传动或刹车即可把普通自行车升级为智能电助力车。官方列出 250W 额定、500W 峰值功率，158Wh 可拆电池、Eco 模式最高约 50 公里续航、100W USB-C 两小时快充，以及无线踏频传感器、自动感知坡度的助力和刹车尾灯。它兼容 16–29 英寸及 700C、宽度不超过 60mm 的多种轮胎和多类车架，但不适用于全避震车或碳纤座管；并标注地区限速、法规与安装安全责任。

原文链接：https://www.asus.com/accessories/bike-booster/asus-oxiis/oxiis-intelligent-bike-booster/

论坛讨论链接：https://news.ycombinator.com/item?id=49268580

HN 讨论对摩擦驱动的实用性相当保留：有经验者称这类方案容易磨胎，在雨天、脏路或复杂地形下表现差，效率也逊于其他驱动方式。价格被认为是关键问题，有评论估计约 2000 美元时不如直接买一辆合适的电助力车，且安装未必比轮毂电机简单。支持者则看重可拆卸性：在城市把昂贵部件带走、只把廉价自行车留在街头，可能是独特使用场景。

---

## 8. Clamiga：面向 Amiga 的 Common Lisp，实现字节码 VM 与 m68k JIT (Clamiga: Common Lisp for the Amiga)





Clamiga 是为 m68k Amiga 打造的 Common Lisp 实现，采用可移植 C 编写的自包含字节码虚拟机，不依赖运行时编译器、LLVM 或 libffi；同一核心也可在 macOS、Linux 运行，MorphOS 则提供原生 PowerPC 构建。项目试图在极有限内存中保留 Common Lisp 的对象系统、条件与重启机制、宏、REPL、调试器、检查器、线程、网络和 AmigaOS API 访问。作者称完整核心可在约 0.5MB 启动，m68k 上会在定义函数时转译部分字节码为原生代码；示例基准显示计算密集型代码有明显加速，但项目不以替代 C/汇编的游戏性能为目标。

原文链接：https://nnamgreb.de/blog/Clamiga+-+Common+Lisp+for+the+Amiga

论坛讨论链接：https://news.ycombinator.com/item?id=49281352

讨论最初补充了下载地址，并好奇软件包为何被归类到 dev/basic 而非 dev/lang。技术层面，有人关注它和曾支持 AmigaOS 的 CLISP 如何比较，也有人赞赏 MorphOS 原生支持与在旧硬件上运行完整 Lisp 的意义。大量评论则调侃 “Clamiga” 的英文读音容易让人联想到疾病，建议改名为 AmigaCL 等；这些玩笑反而说明项目名称比技术细节更抢眼。

---

## 9. 一篇长期预报称“超强厄尔尼诺”正增强，影响仍需谨慎看待 (Super El Niño Keeps Growing as New Forecasts Reach Record Territory Ahead Winter)





Severe Weather Europe 的文章称，太平洋西风异常与次表层海洋热量共同推动厄尔尼诺快速增强，并据此讨论 2026/2027 秋冬可能对北美和欧洲大气环流造成的影响。它把现象放在 Walker 环流变化的框架中解释：中东太平洋低压与西太平洋高压的调整会影响全球环流。需要注意的是，文章属于季节尺度的专业预报与情景推演，正文也以长期预测模型为基础；它不是对具体地区、具体日期天气或灾害的确定承诺。读者应将其中的潜在影响与后续官方气候监测及当地预警区分开看。

原文链接：https://www.severe-weather.eu/long-range-2/super-el-nino-growth-accelerating-to-record-strength-fall-winter-2026-2027-forecast-impact-united-states-canada-europe-fa/

论坛讨论链接：https://news.ycombinator.com/item?id=49313428

评论把话题带到历史和社会韧性：有人提及 1877–1878 年强厄尔尼诺与大饥荒的关联，另有人认为现代食品体系和国际援助能更早预判干旱、减产与分配需求。反方则提醒，预判能力与资源分配并不自动等于公平保障，也可能被市场参与者利用。围绕期货市场的评论指出，它既能让生产者锁定价格、规划投入，也会把风险和利润沿供应链重新分配。
