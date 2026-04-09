---
title: 'VeraCrypt 维护者被微软停用签名账号，Windows 更新受 | Hacker News 摘要 (2026-04-09)'
author: 'hacknews'
description: ''
digest: 'VeraCrypt 维护者 Mounir Idassi 在 SourceForge 发帖称其用于 Windows 驱动与引导签名的微软账号被直接终止，未收到任何通知或解释，且提示无法申诉。此举导致 VeraCrypt 无法发布新的 Wind'
source_url: 'https://sourceforge.net/p/veracrypt/discussion/general/thread/9620d7a4b3/'
pubDatetime: 2026-04-09 20:34:36.986+08:00
tags:
  - 加密安全
  - AI进展
  - 系统工程
  - 社会与文化
---

---

## 1. VeraCrypt 维护者被微软停用签名账号，Windows 更新受阻 (Veracrypt project update)


VeraCrypt 维护者 Mounir Idassi 在 SourceForge 发帖称其用于 Windows 驱动与引导签名的微软账号被直接终止，未收到任何通知或解释，且提示无法申诉。此举导致 VeraCrypt 无法发布新的 Windows 版本（Linux/macOS 仍可），对大多数用户影响巨大。帖中还提到 2011 年签名 CA 即将过期，一旦被撤销，系统加密相关更新会面临更大障碍。作者表示已尝试多渠道联系微软但只得到自动回复，希望社区提供解决路径。

原文链接：https://sourceforge.net/p/veracrypt/discussion/general/thread/9620d7a4b3/

论坛讨论链接：https://news.ycombinator.com/item?id=47686549

讨论里有人表示 WireGuard 也遇到类似的“无预警停用”问题，担忧关键安全软件无法及时修补漏洞。部分评论提出将此类平台服务视为“公共基础设施”需要监管，也有人猜测强加密项目可能面临政治压力。整体情绪偏焦虑，期待微软尽快恢复账号。

---

## 2. Meta 发布 Muse Spark，迈向“个人超智能”路线图 (Muse Spark: Scaling towards personal superintelligence)




Meta Superintelligence Labs 发布 Muse Spark，这是 Muse 系列首个模型，定位为原生多模态推理模型，支持工具调用、视觉链式推理与多代理编排。官方称其在多模态理解、推理、健康与代理任务上具竞争力，并推出“Contemplating mode”以并行多代理推理，接近前沿模型的极限推理模式。Muse Spark 已在 meta.ai 与 Meta AI 应用上线，同时开放小范围 API 预览。文章还介绍了面向“个人超智能”的三条扩展轴：预训练、强化学习与测试时推理，并强调将通过数据中心与基础设施投入持续扩展。

原文链接：https://ai.meta.com/blog/introducing-muse-spark-msl/?_fb_noscript=1

论坛讨论链接：https://news.ycombinator.com/item?id=47692043

讨论认为若 Muse Spark 能对标 Opus 等前沿模型，意味着 Meta 在模型能力上已接近第一梯队，长期成本与生态有优势；也有人质疑其“基准刷榜”与真实能力之间的差距，引用媒体报道称 Meta 内部模型仍不及最新竞争对手。整体评价在“追赶成功”与“仍需验证”之间分化。

---

## 3. MegaTrain：在单张 GPU 上全精度训练 100B+ 参数模型 (MegaTrain: Full Precision Training of 100B+ Parameter LLMs on a Single GPU)


arXiv 论文提出 MegaTrain：把参数与优化器状态放在 CPU 内存，GPU 仅作为流式计算引擎，从而在单卡上进行 100B+ 模型的全精度训练。系统采用双缓冲流水线与多 CUDA stream 预取/回写，尽量隐藏 CPU-GPU 带宽瓶颈；同时用“无状态层模板”替代常驻计算图，动态绑定权重以降低元数据开销。作者称在 H200 + 1.5TB 内存上可训练至 120B，并在 14B 训练上比 ZeRO-3 offload 提升 1.84 倍吞吐，还支持 7B 模型 512k 上下文训练。

原文链接：https://arxiv.org/abs/2604.05091

论坛讨论链接：https://news.ycombinator.com/item?id=47689174

评论者认为“把 GPU 变成流式计算器”很有启发，尤其对显存有限的个人设备有吸引力。也有观点讨论未来可否把更多能力从权重转移到工具与工作流，降低对显存与带宽的极端依赖。

---

## 4. 我把 Mac OS X 10.0 移植到了任天堂 Wii (I ported Mac OS X to the Nintendo Wii)





作者把 Mac OS X 10.0（Cheetah）移植到 Nintendo Wii，并详细记录从可行性评估到启动链路、内核补丁与驱动编写的过程。Wii 采用 PowerPC 750CL，与早期 G3 架构接近，作者用 QEMU 先验证内存限制可行，再研究 Open Firmware 与 BootX 的启动流程，最终让 Darwin/XNU 在 Wii 上运行。项目还涉及 USB Gecko 串口调试、帧缓冲视频输出、SD 卡引导与 IOKit 适配等难点，并开放了自制 bootloader 供他人尝试。文章强调这是一次“面向未知的系统工程学习”。

原文链接：https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html

论坛讨论链接：https://news.ycombinator.com/item?id=47691730

评论称赞写作与工程深度，并对 IOKit 抽象层的可移植性印象深刻；也有人讨论 NeXT/Apple 的驱动模型演进，认为这种“老内核还能跑在新硬件上的实验”很能体现系统设计的长寿命价值。

---

## 5. 美国多城停用 Flock 车牌监控系统，隐私争议升温 (US cities are axing Flock Safety surveillance technology)



CNET 报道多座城市终止与 Flock Safety 的合作。Flock 以车牌识别摄像头起家，近年来扩展到更广泛监控体系与“无人机第一响应”计划，引发对隐私与数据共享的担忧。报道指出，部分地方执法部门与联邦机构共享数据的边界模糊，且社区往往在不知情下被部署 ALPR 系统。随着公众反对和民权团体施压，部分城市选择中止合同，Ring 也在争议中取消与 Flock 的合作。

原文链接：https://www.cnet.com/home/security/when-flock-comes-to-town-why-cities-are-axing-the-controversial-surveillance-technology/

论坛讨论链接：https://news.ycombinator.com/item?id=47689237

评论提到 Benn Jordan 的系列视频对 Flock 技术与政府合作的批评，强调社区安全更依赖“邻里关系”而非监控堆叠。也有类比“囤积装备的预备派”，认为过度监控是控制焦虑的体现，而非真正的韧性建设。

---

## 6. 《机器学习将变得极其诡异》：一篇对“废话机器”的长文 (ML promises to be profoundly weird)


Aphyr 发表长文《The Future of Everything is Lies, I Guess》，以“bullshit machines”视角讨论现代 ML/LLM 的风险与社会后果。作者回顾 ML 如何通过规模化训练与推理成为“即兴生成器”，在概率上擅长“听起来像真的”，却经常脱离现实。文章强调训练数据的版权、生态与信息公地问题，认为 AI 让“数字时代的工业化采掘”成为可能，可能破坏创作者与公众之间的脆弱平衡。作者坦言文章是立场鲜明的批判性综述，并非中立预测。

原文链接：https://aphyr.com/posts/411-the-future-of-everything-is-lies-i-guess

论坛讨论链接：https://news.ycombinator.com/item?id=47689648

讨论中有人把当下与工业革命类比：当资源突然可被工业化开采时，制度与产权不得不重建；AI 正在让信息世界经历类似震荡。也有人反驳历史类比的细节，但整体认同“法律与社会制度需要追上技术扩张”的主线。

---

## 7. 用雷达例子讲清卡尔曼滤波：从直觉到可实现 (Understanding the Kalman filter with a simple radar example)





作者更新了 Kalman Filter 教程首页，使用“雷达跟踪目标”的简化场景解释滤波的预测与更新过程，强调以数值示例与直觉说明替代纯公式推导。教程提供三条学习路径：单页概览、逐步例子网页教程、以及更完整的书籍版本，覆盖从线性 KF 到 EKF/UKF、传感器融合与实现细节。目标是让具备基础统计与线代知识的读者也能理解滤波核心思想，并能自行实现。

原文链接：https://kalmanfilter.net

论坛讨论链接：https://news.ycombinator.com/item?id=47693153

评论整体肯定清晰度，但指出过程噪声矩阵 Q 的来源“像凭空出现”，希望至少给出构造思路或限定条件，避免读者误认为 Q 具有通用固定形式。作者回应将在教程中补充简要解释。

---

## 8. 读代码前先看 Git：一组快速体检代码库的命令 (Git commands I run before reading any code)



作者分享自己接手新代码库时会先跑的一组 Git 命令，用历史数据快速判断风险与团队状态。包括统计最近一年改动最多的文件来定位“高变更且没人敢碰”的风险点；用 shortlog 看贡献者集中度与“巴士系数”；用带 fix/bug 关键词的提交统计定位高故障文件；按月统计提交量判断团队节奏是否衰退；用 revert/hotfix 频率观察发布是否常回滚。作者强调这些命令不能替代代码阅读，但能在几分钟内给出“哪里最可能出问题”的方向，并提醒合并策略与提交信息质量会影响结论。

原文链接：https://piechowski.io/post/git-commands-before-reading-code/

论坛讨论链接：https://news.ycombinator.com/item?id=47687273

评论有人给出 Jujutsu 的等价命令，展示 revset 语法的表达力；也有人认为 jj 像“VCS 版 Nix”，强大但复杂，未必值得从 Git 迁移。讨论点集中在“工具表达力 vs 心智负担”，以及这些诊断命令更适合作为“初步雷达”而非最终判断。

---

## 9. Škoda DuoBell：能穿透 ANC 耳机的自行车铃 (Škoda DuoBell: A bicycle bell that penetrates noise-cancelling headphones)





Škoda 与索尔福德大学合作推出 DuoBell，一种针对主动降噪耳机（ANC）优化的自行车铃。研究通过声学测试找到 750–780 Hz 的“安全频段”，该频段更容易穿透 ANC 滤波，从而提升行人对铃声的可听性。项目旨在减少城市中骑行者与行人碰撞风险，并承诺公开研究发现，推动更广泛的交通安全讨论。DuoBell 仍是机械结构，但通过频谱设计达到“对抗算法”的效果。

原文链接：https://www.skoda-storyboard.com/en/skoda-world/skoda-duobell-a-bicycle-bell-that-outsmarts-even-smart-headphones/

论坛讨论链接：https://news.ycombinator.com/item?id=47687248

评论质疑这类项目是否只是“品牌视频营销”：真正的产品价值不明，却能获得大量曝光。也有人认为此类视频把设计过程戏剧化、表演化，容易让人误解创新的真实路径。

---

## 10. 《它们是肉做的》：一则反转式科幻短篇再度走红 (They're made out of meat (1991))




Terry Bisson 的短篇《They’re Made Out of Meat》发表于 1991 年，通过两位外星观察者的对话，反复强调人类“是肉做的”，把智慧与肉身之间的关系写成荒诞又诗意的反转笑话。故事以极简对白推动，核心梗在于外星文明无法接受“有意识的肉”这一事实，最终决定不与人类接触。作者在页面提醒作品版权仍属本人，未经许可请勿改编或转载。

原文链接：http://www.terrybisson.com/theyre-made-out-of-meat-2/

论坛讨论链接：https://news.ycombinator.com/item?id=47688678

评论区多是怀旧与延伸阅读推荐，例如《Bears Discover Fire》等同作者作品；也有人表示没看懂或觉得“不是传统科幻”，引发对“静谧、带转折的微型故事”价值的讨论。

