---
title: "Shopify 用 MySQL 替代 Redis 做库存预约，反而扛 | Hacker News 摘要 (2026-08-10)"
author: "hacknews"
description: ""
digest: "Shopify 的结账链路需要在付款期间暂占库存，既不能超卖，也不能误报售罄。旧方案用 Redis 做计数、MySQL 记账，两边无法放进同一事务，也缺少多仓位语义。新方案借 MySQL 8 的 `SKIP LOCKED`，把可售单位拆成行"
source_url: "https://shopify.engineering/scaling-inventory-reservations"
pubDatetime: 2026-08-10 20:09:49.505+08:00
tags:
  - "AI与学习"
  - "基础设施"
  - "软件工程"
  - "数字生活"
---

---

## 1. Shopify 用 MySQL 替代 Redis 做库存预约，反而扛住了峰值 (We replaced Redis with MySQL for inventory reservations and it scaled)





Shopify 的结账链路需要在付款期间暂占库存，既不能超卖，也不能误报售罄。旧方案用 Redis 做计数、MySQL 记账，两边无法放进同一事务，也缺少多仓位语义。新方案借 MySQL 8 的 `SKIP LOCKED`，把可售单位拆成行，并为每个商品—地点组合维持最多 1,000 行的有界池；预约和最终扣减于是能与库存台账保持 ACID 一致。团队又通过复合主键、READ COMMITTED、统一锁顺序和 UNION ALL 批量查询控制锁与往返。压测中真正卡住的并非 CPU 或查询，而是连接被其他结账流程长时间占用；给 SQL 标上业务标签后，他们清理了 50% 读取和 33% 主库事务，并以双写 shadow mode、逐 pod 切流和 kill switch 完成迁移。

原文链接：https://shopify.engineering/scaling-inventory-reservations

论坛讨论链接：https://news.ycombinator.com/item?id=49226536

评论最热的话题意外落在文风，而非数据库：有人认为小标题、条目和“连接而非 CPU”式对比句很像 LLM 生成，担心技术博客变得低密度；反方指出使用 AI 辅助写作不等于没有工程工作，且不能仅凭文体断言。讨论也延伸到一个更实用的问题：即使表达被工具润色，文章给出的锁、连接池和可观测性细节是否足以让读者验证其工程价值。

---

## 2. 我的服务器现在是一部手机 (My server is a phone now)



作者把闲置的 CMF Phone 1 变成家用服务器，替代了跑个人服务和远程浏览器的 VPS。最初刷 postmarketOS 后发现 Wi‑Fi、蓝牙和硬件加速等驱动不可用，甚至一度软砖，遂保留 Android，把 Termux 当宿主控制平面。Termux:Boot、runit、Tailscale、Caddy 和 Cloudflare Tunnel 组成开机恢复、私网管理与公网入口；应用起初在 PRoot Debian 中运行，Chrome 因用户态路径转换开销太大，最终 root 后改为真实 chroot。作者用 Ansible 管理镜像 digest、服务、节电策略、密钥和健康检查，部署到版本目录再原子切换；高延迟敏感的远程浏览器则把自身 TLS 流套进 WebSocket 穿过 Cloudflare。手机没有 Docker 或 systemd，但在可恢复性、移动性和成本之间形成了可用的个人基础设施。

原文链接：https://seg6.space/posts/phone-server/

论坛讨论链接：https://news.ycombinator.com/item?id=49226636

评论一方面讨论这种做法的可行性，另一方面集中吐槽标题的歧义：不少读者先理解成“服务器获得了电话功能”，也有人认为英语里已知信息与新信息的排列使原题语法上说得通。技术层面，读者认可手机 SoC、内置电池和移动网络带来的性价比，但也提醒这不是安全隔离环境：PRoot、chroot 与 Android 共享内核和网络，适合个人服务而非多租户。

---

## 3. 我如何用 LLM 学习复杂主题：先建模拟，再去验证 (How I use LLMs to learn complex topics)



作者不喜欢 LLM 常见的简化讲解和表情化叙述，于是把学习复杂主题改成一条制作流程：先让模型在计划模式中搭建某主题的基础知识，再要求复核准确性，随后把过程做成低多边形、类似《过山车大亨》的可交互模拟，并部署到 GitHub Pages。以芯片制造为例，学习者可跟随材料在工厂步骤中的变化，把抽象概念映射成场景和物体；作者还建议加入回顾题和直觉式谜题，加强记忆。文中展示了芯片、火箭发动机、LLM、F1 发动机和 EUV 设备等主题的尝试，核心主张是：让模型帮助搭建可探索的表征，比反复读搜索结果或摘要更容易形成结构化理解。

原文链接：https://laurentiugabriel.github.io/blog/articles/how-i-use-llms-to-learn/

论坛讨论链接：https://news.ycombinator.com/item?id=49234675

评论对“看起来在学习”与“真正能解决问题”作了尖锐区分。质疑者担心 LLM 把复杂知识压成流行科学比喻，继续追问只会在错误框架中钻得更深；支持者则描述用 Claude/GPT 拆解 Rudin 的句子、索要例子与反例，最后以完成习题检验掌握。较有共识的观点是，模型的价值不在替代练习，而在提供类似教师的即时、个性化反馈闭环；正确性核验和可被外部检验的任务仍不可省略。

---

## 4. 人人都可能被录音：AI 可穿戴设备催生反监听军备竞赛 (Everything you do is being recorded)





文章认为，带麦克风的眼镜、胸针和吊坠正把隐蔽录音从情报人员和犯罪组织的顾虑，变成普通人的日常隐私问题。传统白噪声或超声波干扰器会被新一代语音恢复模型削弱：这些模型可从嘈杂环境中分离语音，甚至依上下文补全缺失音节，原本服务于助听器、会议和播客的去噪技术也因此可帮助录音设备抵消干扰。新创公司 Deveillance 展示的 Spectre I 与研究者的 MicFrozen 等方案，转而尝试以类似人声的混杂信号迷惑恢复算法，而不只是压高频噪声。作者把它放进雷达、窃听与加密的历史军备竞赛：防护方资源有限，面对由大公司和整个语音产业推动的 AI 听觉能力，未来可能长期处于劣势。

原文链接：https://www.theatlantic.com/technology/2026/05/ai-wearable-surveillance-countermeasures/687203/

论坛讨论链接：https://news.ycombinator.com/item?id=49230477

HN 讨论把文章的担忧外推到数字隐私与法律风险：有人认为若想在线保持匿名，如今已需采用近似情报行动的持续 OPSEC；也有人用 GrapheneOS、强制指纹解锁和胁迫密码等例子讨论设备被控制时的选择。回复者提醒自动擦除可能构成毁灭证据，花哨的技术手段未必能绕过法律意图认定。整体情绪是：防录音设备很难单独解决问题，隐私保护需要技术、行为习惯和制度边界共同支撑。

---

## 5. os8088：在 IBM XT 上重造可抢占多任务的 Mac 式桌面 (Os8088: A powerful Mac-like OS for the IBM XT, 286, 386)





os8088 是一个从软盘启动、完全不用 DOS 的图形操作系统，目标是 8086/8088 的 IBM PC/XT 及 286。它以实模式 NASM 汇编实现，在 256KB 内存里提供类 Macintosh System 1 的窗口、菜单、串口鼠标、可加载程序和任务管理器；内核约 80KB，利用 PC 默认 18.2Hz 时钟中断进行抢占式切换，最多容纳 12 个任务。系统会探测 VGA、Hercules 或 CGA，程序从第二张软盘装入各自内存段，包含文件管理器、画板、文本编辑、扫雷、MOD 播放器等。作者强调它没有内存保护、网络或 DOS 兼容性，是一个完整但非产品化的爱好项目；项目源码由 AI 辅助编写，并已在 1981 IBM 5150 等真机上验证。

原文链接：https://os8088.com/

论坛讨论链接：https://news.ycombinator.com/item?id=49226923

评论补充了 1980 年代 PC 图形界面的真实谱系：Visi On、GEM、DesQview/X 等都曾在 XT 级硬件上探索窗口系统，Apple 与 Digital Research 的诉讼也影响了 GEM 后来的界面。作者现身说明项目由 AI 编写，引发另一轮争论：批评者认为这样难以获得传统意义的技艺、教程价值或同行认可；也有人更关注结果本身，认为复现旧硬件约束、公开构建过程和真机运行仍具实验与展示价值。

---

## 6. 经典重读：好 URL 不该随着网站改版而消失 (Cool URIs Don't Change (1998))


Tim Berners-Lee 1998 年的短文再次强调：HTTP URI 的持久性并非协议问题，而是组织是否愿意长期维护映射。网站改版、人员变动、从 CGI 换成二进制程序、把文件迁走，都不应成为旧链接失效的理由；服务器应把稳定、抽象的 URI 映射到可变化的文件系统和实现。文章建议 URI 尽量不包含作者、主题、部门、访问状态、文件扩展名、软件机制、磁盘名等会变化的信息；日期在确实有归档意义时可以保留，但“latest”这类明确短生命周期的入口是例外。维护者还应记录文档的发布范围、创建与失效日期、版本关系和校验信息。核心不是追求漂亮命名，而是把二十年甚至两百年的可引用性当作设计约束。

原文链接：https://www.w3.org/Provider/Style/URI

论坛讨论链接：https://news.ycombinator.com/item?id=49231809

读者用现实反例证明文章仍未过时：Windows 内置链接跳到泛化落地页，新闻站改版后清空旧地址，甚至新鼠标包装卡印出的厂商短 URL 在部分地区直接 Forbidden。围绕 Logitech 的例子，评论发现链接在不同国家、VPN 与重定向链下表现不同，说明“没 404”也不等于可稳定访问。还有人批评大公司依赖短链虽可改目标，却常用它掩盖文档消失；共识是迁移与地域策略都应保持旧入口语义。

---

## 7. 把照片藏进二维码：用误差扩散兼顾图像与可扫描性 (Dithered QR Codes)





二维码由定位等功能模块和承载数据的数据模块组成；前者必须清晰，后者因纠错能力可被有限改动，因此常被用来放品牌图案。本文从普通阈值化和 Bayer 抖动讲起，说明 Floyd–Steinberg 误差扩散会把像素量化误差分摊给后续邻点，以较少规则条纹保留灰度。作者的关键做法是两次误差扩散：第一次先把已知黑白的数据模块强制写入，并把可能很大的误差扩散到周围；第二次再对整体图像抖动，从而把二维码的盐胡椒噪点融入照片。生成器也可借二维码纠错预算改动少量数据模块，但这会降低扫描鲁棒性。结论是视觉效果始终与容错、留白、输出尺寸和实际介质条件交换，手机上能扫不代表印在易皱传单上也可靠。

原文链接：https://www.andrewt.net/dithered-qr-codes/wtf/

论坛讨论链接：https://news.ycombinator.com/item?id=49226742

评论将方案与 Russ Cox 的 QArt 对照：QArt 从编码层选择数据以嵌入图像，不依赖事后挪用纠错余量；也有人给出彩色二维码和扩散式 AI 二维码实例。更多人提醒商业设计常把容错预算吃光，例如把超大 Logo 拉出中心，或塞入冗长带参数 URL，导致实体广告根本扫不出。讨论认为二维码应像任何交付物一样做真实设备与距离的 QA，而不是只在生成器预览里判断。

---

## 8. Windows 11 天气应用占用逾 1GB 内存，WebView2 成了代价 (Windows 11's built-in Weather app wastes more than 1 GB of RAM)



Notebookcheck 援引 Windows Latest 与 Wccftech 的测试称，Windows 11 内置天气应用仅显示预报也可占用超过 1GB 内存；空闲时约 500–600MB，缩放或切换界面时可能升至 1.5–1.6GB。相近条件下 macOS 原生天气应用据称少于 250MB。原因在于 Windows 版并非完全原生程序，而是基于 WebView2 的 MSN 天气网页，任务管理器中会出现多个 Chromium 子进程。对 32GB 以上设备影响有限，但在 8GB 或 16GB 机器上，单个天气应用就可能增加内存压力并诱发分页；文章还指出应用内预报流混入赞助内容，这与微软近期改善低内存设备体验的叙事形成反差。

原文链接：https://www.notebookcheck.net/Windows-11-s-built-in-Weather-app-wastes-more-than-1-GB-of-RAM.1364205.0.html

论坛讨论链接：https://news.ycombinator.com/item?id=49232138

评论以讽刺口吻回忆 2006 年一台只有 1GB 总内存的游戏 PC 仍能同时运行游戏、聊天、邮件和音乐软件，并把问题归因于“所有功能都包进浏览器引擎”、依赖膨胀和广告遥测。有人借机争论 Rust、Go 与 C/C++ 的资源效率，另有人提醒原帖本就是讽刺，别把语言大战当数据结论。较一致的批评是：简单系统工具应先有明确性能预算和剖析，而不该把高资源占用视作现代 UI 的默认成本。

---

## 9. Dark Hours 作者致歉：AI 生成的应用竟高度撞车开源项目 (Mea Culpa – Dark Hours)


作者上周用 Claude 做了一个名为 Dark Hours 的网页工具，用于展示当晚天空可见内容。随后他发现已有 DarkHours.app 开源项目，不仅名称相近，自己生成的产品连对方后来修复过的 bug 都复现了。作者曾联系原项目开发者，表示会显著区分功能、改名并介绍对方作品；确认相似度后，他决定直接把域名重定向给原作者，放弃 iOS 版本计划，并呼吁用户改用真正的开源项目。文中承认自己此前从未见过该项目，但认为这种结果说明用 AI 快速拼装网页的方式不负责任；今后不会再以此方式制作 Web 产品，iOS 开发中只保留提问和调试等较有限的用途。

原文链接：https://blog.terrygodier.com/2026/08/09/mea-culpa-dark-hours.html

论坛讨论链接：https://news.ycombinator.com/item?id=49231154

评论对这份道歉的可信度非常怀疑，并补充前因：据转述，作者早先的占星应用被 App Store 拒绝，后换成极像开源天文应用的内容，媒体报道又因遗漏关键信息而撤回，因此“Claude 意外克隆”难以说服部分读者。讨论还把“AI 做的”视为新的甩锅话术，类比品牌被揭发使用 AI 音乐后层层推卸责任。少数回复没有否定道歉本身，但认为署名、来源核查和发布前相似性检查应是使用生成工具的基本责任。
