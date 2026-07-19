---
title: "LG 显示器被曝借 Windows Update 自动安装推广软件 | Hacker News 摘要 (2026-07-19)"
author: "hacknews"
description: ""
digest: "多名 LG 显示器用户反馈，设备接入 Windows 后会通过 Windows Update 自动安装名为 LG UltraGear Control Center 的组件，并出现 McAfee 订阅推广。Gamers Nexus 用 Ult"
source_url: "https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent"
pubDatetime: 2026-07-19 08:54:38.306+08:00
tags:
  - "AI"
  - "安全"
  - "硬件"
  - "开源创作"
---

---

## 1. LG 显示器被曝借 Windows Update 自动安装推广软件 (LG monitors silently install software through Windows Update without consent)


多名 LG 显示器用户反馈，设备接入 Windows 后会通过 Windows Update 自动安装名为 LG UltraGear Control Center 的组件，并出现 McAfee 订阅推广。Gamers Nexus 用 UltraGear 34GX900A-B 复现了这一行为。争议不只在预装软件本身，更在于用户仅仅接入显示器，就可能在没有明确确认的情况下让第三方厂商软件获得安装入口。现有材料未给出 LG 的完整技术说明，问题仍待厂商解释与修复。

原文链接：https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent

论坛讨论链接：https://news.ycombinator.com/item?id=48956688

讨论认为标题甚至低估了问题：评论者担心软件会在插入显示器后后台安装、随系统启动并拥有联网与系统权限，也可能影响已经连接旧款 LG 显示器的电脑。另一部分观点把责任指向 Windows 的驱动与配套软件分发机制，认为硬件接入不应默认成为推广软件的安装授权。

---

## 2. 把渐进式 JPEG 倒着编码，会发生什么？ (Regressive JPEGs)




作者利用 JPEG 可分多次扫描写入 DCT 系数的特性，构造了一类“回退式”JPEG：文件继续下载时，画面并非单调变清晰，而会在不同扫描阶段呈现有意设计的变化。文章拆解了亮度与色度通道、频率范围和精度如何被分配到十次扫描，并解释为什么浏览器可以逐步显示这些阶段。这既是对 JPEG 渐进编码内部机制的可视化实验，也展示了老格式仍可被拿来做动态媒介创作。

原文链接：https://maurycyz.com/projects/bad_jpeg/

论坛讨论链接：https://news.ycombinator.com/item?id=48954851

评论区把它和 Adam7 交错 PNG、HTTP Refresh 驱动的逐帧图像作比较。讨论集中在如何控制网络传输节奏、让每一段扫描稳定地成为一帧，以及浏览器对渐进图片渲染行为中可利用的边界。

---

## 3. 用 Arch Linux 复活一台 15 年前的上网本 (Reviving a 15-year-old netbook with Arch Linux)





作者把 2009 年购买的 ASUS Eee PC 1000HE 从储藏室重新拿出来，尝试在 Intel Atom N280、1GB 内存的旧机器上安装 Arch Linux 32。文章完整记录了启动介质、联网、分区、引导、桌面环境与内存升级等步骤，并把这台早已跟不上现代网页和软件的上网本重新定位为轻量、可维护的个人设备。重点不是让旧硬件变快，而是通过合适的软件栈恢复它仍能承担的工作。

原文链接：https://parksb.github.io/en/article/41.html

论坛讨论链接：https://news.ycombinator.com/item?id=48907063

不少人回忆 2008 至 2010 年代上网本即使在新品时期也很受限，尤其是 1024x600 屏幕与低性能 CPU。也有人分享把类似设备改造成下载机、Samba 服务或其他 I/O 为主的用途，并提醒先确认旧款 32 位系统的实际 CPU 架构。

---

## 4. 一条提示词与一个 30 年的凸优化问题 (GPT-5.6 used a prompt to close a 30-year gap in convex optimization)


一篇 Reddit 数学讨论帖称，在 OpenAI 公布循环双覆盖猜想证明后，研究者用类似的提示框架让 GPT-5.6 参与一个凸优化复杂度下界问题，并在 Lean 中验证了结果。帖子的核心主张是：一个长期未解的、关于凸 Lipschitz 函数优化的下界缺口被补上。该内容来自社区帖文而非正式论文发布，结论的独立复核、贡献归属和模型实际作用仍应谨慎看待。

原文链接：https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/

论坛讨论链接：https://news.ycombinator.com/item?id=48957779

熟悉该领域的评论者认为，这一命题比循环双覆盖猜想更小众，但如果证明无误仍是实质贡献。讨论解释了上界通常可通过给出算法得到，而非平凡下界必须约束所有可能算法，难度更高；也有人要求区分模型提出思路、形式化验证和人类研究者完成证明之间的角色。

---

## 5. Vagdhenu：能按梵语格律吟诵的语音系统 (Vāgdhenu: A Sanskrit Chanting TTS System)


印度理工学院班加罗尔相关研究者展示 Vagdhenu，一个面向梵语诗句的文本转吟诵系统。用户可以输入多种印度文字，系统会检测诗句格律，再生成对应的吟唱；页面同时提供模型、数据集、代码和示例音频。它的目标不是普通朗读，而是把节拍、重音和传统吟诵的韵律纳入合成过程，可服务于经文学习、保存与辅助诵读。

原文链接：https://prathosh.in/vagdhenu/

论坛讨论链接：https://news.ycombinator.com/item?id=48896149

评论者首先好奇它的使用场景是否主要是宗教和礼仪，也惊讶于系统似乎能为任意梵语句子安排可吟诵的形式。懂相关语言的用户则指出，复杂词汇对不熟悉的人很难自然念准，带有格律的语音参考比平铺直叙的朗读更有帮助。

---

## 6. TP-Link Kasa 摄像头被曝 6 年来可泄露家庭 GPS (TP-Link Kasa cameras leaked home GPS via unauthenticated UDP for 6 years)


公开漏洞研究指出，TP-Link Kasa EC71 摄像头曾通过未认证 UDP 通信暴露家庭 GPS 位置，问题持续约六年。研究材料描述了设备发现与网络通信链路中的认证缺失，以及攻击者在可接触相关网络流量时可能取得的位置数据。这个案例再次说明，消费级联网摄像头的风险不仅是账户安全，也包括设备协议设计、默认联网行为和长期补丁覆盖范围。

原文链接：https://github.com/BadChemical/IoT-Vulnerability-Research-Public/blob/main/TP-Link_Kasa_EC71/Kasa_EC71.md

论坛讨论链接：https://news.ycombinator.com/item?id=48952565

讨论普遍建议把 IoT 设备隔离在受限网络中，优先选择不依赖公网服务也能工作的产品，并在路由器侧限制外连。也有人反对把问题简单归咎于某个产地，认为不安全的消费级联网设备是跨厂商、跨地区的系统性工程问题。

---

## 7. 在 NP 难题上，/goal 指令真的有用吗？ (Fable 5 vs. GPT-5.6 Sol on an NP-Hard Problem: Does /goal help?)





作者以光纤网络设计问题 KIRO 为基准，比较 Fable 5 与 GPT-5.6 Sol 在一个 NP 难组合优化任务上的表现，并专门考察 /goal 指令。结果中 Fable 5 给出了最好的解和更稳定的表现；文章进一步指出，同名的 /goal 在不同编程代理里可能代表完全不同的系统机制，例如独立评估器，或带持久状态与生命周期工具的任务管理。提示词命中不等于方法本身可泛化。

原文链接：https://charlesazam.com/blog/fable-5-gpt-5-6-sol-goal/

论坛讨论链接：https://news.ycombinator.com/item?id=48956879

评论区一部分人把话题延伸到不同编码代理的实际可用性和团队迁移体验，另一部分人提醒基准规模有限、不同产品的命令语义并不相同。较有价值的共识是：评价代理不能只看一次最好成绩，还要拆开看搜索、评估、持久记忆与复现条件。

---

## 8. 给自己一本可以乱写的“泥巴笔记本” (I started a “dirt notebook”)


作者发现自己总会把笔记本越写越整齐：开始分门别类、改善字迹、加封面，最后反而舍不得随手记。为打破这个循环，他专门启用一本纸张差、难摊平的旧本子，叫作“排水沟”，让它容纳播客摘录、故事点子、生活备忘和零碎想法。刻意降低载体质量，反而降低了记录门槛，并让回看时出现更自然的线索与联想。

原文链接：https://pinewind.bearblog.dev/i-started-a-dirt-notebook/

论坛讨论链接：https://news.ycombinator.com/item?id=48954149

评论者把它联系到目标导向的效率系统：人容易把注意力放到设计复杂系统上，而不是做真正要做的事。有人认同保留一层尽可能少的记录介质有助于行动，也分享自己用随手本、便签或不分类日志来对抗完美主义。

---

## 9. Stenchill：把 Gerber 文件变成可 3D 打印的钢网 (Stenchill: 3D Printable Solder Paste Stencil Generator)





Stenchill 是一个面向 PCB 制作的在线工具：上传 Gerber 文件后，它生成可 3D 打印的焊膏钢网文件，并提供预览与参数调整。对于 0603 及更大尺寸的被动元件和较大焊盘，这类塑料模板可让小批量贴装更均匀、更快，替代用针筒逐点上锡膏的繁琐过程。项目来自创客社群讨论，强调把传统需要订购的制造辅助件变成可快速自制的文件。

原文链接：https://www.stenchill.com/en/

论坛讨论链接：https://news.ycombinator.com/item?id=48953981

硬件爱好者称赞这个方向实用，并延伸设想能否用改装 3D 打印机直接在 PCB 上沉积锡膏。也有人分享在创客空间用透明片激光切割模板的经验，认为纸张垫层可减少塑料受热变形，但耐用性仍不如金属钢网。
