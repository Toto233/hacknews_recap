---
title: "JOB 最佳十五选一：4B 模型查询计划快 81% | Hacker News 摘要 (2026-09-17)"
author: "hacknews"
description: ""
digest: "作者用 4B 参数的 Qwen 3.8 蒸馏模型学习为 Postgres 的 pg_hint_plan 生成连接顺序、算法和扫描提示，目标是优化反复执行的分析查询，而非取代一次性规划器。训练先用约 500 条 GPT-6 Astra 代理轨"
source_url: "https://rohanbansal.com/qorl"
pubDatetime: 2026-09-17 20:11:27.294+08:00
tags:
  - "人工智能"
  - "软件开发"
  - "硬件"
  - "数字文化"
---

---

## 1. JOB 最佳十五选一：4B 模型查询计划快 81% (Training a 4B model to produce 81% faster query plans than Postgres)



作者用 4B 参数的 Qwen 3.8 蒸馏模型学习为 Postgres 的 pg_hint_plan 生成连接顺序、算法和扫描提示，目标是优化反复执行的分析查询，而非取代一次性规划器。训练先用约 500 条 GPT-6 Astra 代理轨迹做离策略监督微调，再以 Postgres 实测候选计划，通过带 5% 噪声区间、超时与重复计划惩罚的改造版 GRPO 更新。测试采用 IMDb 的 JOB 113 条连接密集查询，训练用拓扑不重叠的 CEB；数据库约 8.5GB，shared_buffers 调到 2GB 以降低噪声。最终每条查询运行三条轨迹，从最多 15 个候选中按反馈选最好计划，几何平均和总工作负载速度均为 Postgres 默认计划的 1.81 倍，即快 81%，汇总延迟下降 44.7%，68 条胜出且无回退。该成绩限于最佳十五选一、预热过的只读基准，并非任意生产负载结论。

原文链接：https://rohanbansal.com/qorl

论坛讨论链接：https://news.ycombinator.com/item?id=49731285

讨论主要质疑成绩能否外推。首条评论肯定实验，但提醒测试是约 8GB、可装进内存的数据集，查询预热且只有只读 SELECT；这种画像引导优化可能过拟合，未必适用于更大规模或真实 OLTP。围绕成本，一方提出不如用 CUDA 加速 Postgres；有人反驳磁盘未必总是瓶颈，数据常驻内存后排序、哈希和连接会受 CPU 限制，好计划也能减少 I/O。另有人设想只在初期调用模型并复用查询形状，但回复指出 Postgres 会按实际参数和统计改变计划；也有人认为查询提示机制或可让它做成扩展。

---

## 2. Apple Reference Image：从传感器到云端验证的可信摄影方案 (Apple Reference Image: A New Approach for Verified Photography)



Apple Reference Image 要证明的不是“图片看起来真实”，而是照片由 iPhone 传感器在界定的时间段拍下。iPhone 18 Pro 系列传感器进入参考模式后，直接对像素和元数据签名并禁止固件修改；Secure Enclave 再签署机外元数据。设备利用平均约每 15 分钟取得的加密时间戳作下界，拍摄后请求上界，并把像素、签名及设备清单保存为 DNG 安全底片。开发参考图时，底片上传至 Private Cloud Compute；PCC 验证传感器与 SEP 属于同一设备，在可公开审计的软件中完成去马赛克、色调映射与 JPEG 压缩，并检查传感器物理特征。最终 JPEG 由 RSA-3072 与 ML-DSA-87 的混合后量子签名保护。系统可撤销单张照片或特定传感器，同时不公开摄影者身份，也不让 Apple 读取图像；底片开发后默认进入“最近删除”，30 天后清除。

原文链接：https://security.apple.com/blog/apple-reference-image/

论坛讨论链接：https://news.ycombinator.com/item?id=49721322

抓取内容只展示一条 HN 评论，不能据此声称社区形成共识。该评论者认为新闻摄影只是醒目的宣传场景，真正容易落地的可能是保险理赔与身份、年龄验证：这些业务已通过手机应用采集传感器元数据，无需抵御国家级对手，只要提高普通欺诈者的造假成本就有价值。但他担心这会把“正常生活需要智能手机”推向“需要 iPhone”，形成平台依赖。对新闻场景，他指出传播链仍有缺口：很多人只会看验证界面截图或转发副本，不会检查原图；国家级攻击者也可能绕过系统。这是对应用边界与社会后果的个人判断，并非对苹果安全保证的独立验证。

---

## 3. 一个月为 M4 Mac mini 从零构建 Linux GPU 驱动 (Building a Linux GPU Driver for the M4 Mac Mini in One Month)





Cody Ho 与 Niklas Sheth 借助 macOS 虚拟机监控器，在约一个月内逆向苹果 AGX GPU，并为 M4 Mac mini 等新芯片做出 Linux 驱动。内核侧通过观察、重放 macOS 与 RTKit 固件的共享内存交互，重建固件 ABI、异步提交与 fence；为摆脱 GUI 干扰的巨型捕获，他们改在单用户模式运行小型 Metal 程序，取得纯计算轨迹，再攻克 compute 和 partial render。用户态则以小型 Metal 实验拆解新描述符及指令集，建立着色器编译器和命令流，并借 Mesa、NIR 与 Khronos CTS 迭代到 OpenGL ES 3.0 合规。作者称 Minecraft 可达约 200 fps，但代码仍需测试、人工审查和重构；Vulkan、桌面 OpenGL、OpenCL、Proton、光追及上游化仍是后续工作。

原文链接：https://codyho.dev/blog/gpu-driver/

论坛讨论链接：https://news.ycombinator.com/item?id=49717638

HN 讨论的焦点不是“能不能跑”，而是主要由大模型生成、再由人引导验证的逆向成果离可维护生产代码还有多远。一方认为，让没有驱动开发背景的人在数周内把黑盒苹果硬件推进到可工作的 Linux 驱动，本身就是罕见突破；即使未达生产级，也值得公开并逐项核验。另一位评论者把 AI 逆向比作先给未知函数贴上可能的语义标签：这能改善导航和起步速度，但每个判断仍须人工确认。也有人追问“生产就绪”的定义，认为在缺乏官方规格与长期支持时，关键应是代码能否经严格审查后进入上游。

---

## 4. Dream-RSI：让代理从历史搜索树中改进探索策略 (Dream-RSI: Recursive Self-Improvement through Evolving Worlds)


Dream-RSI 把自主代理的探索策略本身作为递归改进对象。在线阶段，当前策略指导固定的编码代理扩展发现树并保存每次执行与评测结果；随后系统把历史树转换为 replay simulator，让策略开发代理无需重跑底层代理，就能离线试验不同的分支选择、探索顺序、并发数与停止规则。较好的策略再部署到下一轮在线探索，新历史继续扩充模拟器池，底层模型、评测器和接口保持不变。论文在算法工程、数学优化和 GPU kernel 工程共八项任务上测试。作者报告：Lasso 任务相对 SimpleTES 最多减少 162 倍代理调用；三项数学优化在 1,000 次生成内达到或超过强基线、节省超过 50 倍预算；KernelBench 达到目标速度所需生成数少 1.79 至 2.43 倍，或在同预算下最多提升 2.09 倍。这些是论文设定内的实验结果，并非所有任务的普遍保证。

原文链接：https://arxiv.org/abs/2609.14858

论坛讨论链接：https://news.ycombinator.com/item?id=49726955

eggbrain 用手写字符识别作假设：三个代理各有十次改进机会，最终准确率为 90%、80% 和 89%；若第一条路径第二步就停滞、第三条持续上升，控制器可按过程重分配算力。他同时质疑这种策略能否迁移到新问题。作者之一 xidong_wu 称其理解基本正确，目标是让元代理设计更好的代理。tiffanyh 追问没有客观可验证结果的领域是否适用；另一位评论者主张不缩减单条路径，而应重复“并行搜索—汇总”，把前一轮成果交给下一轮。分歧在于动态分配能否跨任务泛化，以及它是否优于固定预算的多轮整合。

---

## 5. 小米公开 MiMo 2.6 后训练实时看板 (Xiaomi Mimo 2.6 live post-training dashboard)


小米 MiMo 官方公开页面把 mimo-v2.6-pro 与 mimo-v2.6-flash 的后训练过程放到实时看板中。2026 年 9 月 17 日截图显示，两项任务都仍在进行：Pro 位于 step 14，下一阶段 step 15 正在 rollout；Flash 位于 step 18，step 19 正在 training。公告披露，Flash 曾因一个数据集上的基础设施错误未及时发现而从 step 15 重启，Pro 也因单节点显存问题重启。看板以 DeepSWE v1.1、mini-swe-agent、avg@3 曲线展示阶段表现，截图中的最新显示值分别为 Pro 65.78、Flash 60.77，并列出 dynsam、critic rewards、actor entropy loss 等指标。团队会随离线评测继续更新；这些数值只是动态中间结果，不能当作最终模型成绩。

原文链接：https://mimo.xiaomi.com/rl/

论坛讨论链接：https://news.ycombinator.com/item?id=49732270

HN 讨论主要围绕上一代 MiMo 2.5 的实际性价比，并未把看板中间分数当作 2.6 定论。有开发者称其在多种软件项目中能力强、价格极低，偶发的幻觉循环可用停止再继续缓解；也有人欣赏它的服从性，会先让别的模型规划，再交给 MiMo 实现。反方认为它只适合基础脚本，相比 Qwen 或 GLM 容易犯后期才暴露的低级错误。评论还提醒，编码模型几个月就可能明显跃迁，拿它与去年模型相比很快会过时；另有人看重 Qwen 可本地运行及 MiMo 的低价或免费渠道。

---

## 6. Mistral 与 Mozilla 为 Firefox Smart Window 引入主打隐私的多语言 AI (Mistral X Mozilla: Private, Multilingual AI Browsing)





Mistral 与 Mozilla 宣布合作，把 AI 带入 Firefox Smart Window，主打隐私、用户控制、供应商选择和多语言体验。Mistral 提供模型能力，Mozilla 借浏览器触达用户；系统会针对各地区的语言、方言和文化语境训练与微调，让回答理解本地语境。公告强调，开放技术还需要开放分发，AI 不应只是把单一公司的产品出口到不同国家；浏览器应允许不同 AI 提供商竞争，并让开源方案拥有位置。Mozilla CEO Anthony Enzor-DeMeo 称浏览器不该成为一家公司的单向漏斗，而应保留探索不同观点和自主选择去向的自由；Mistral CEO Arthur Mensch 重申要把隐私、控制和选择带给 Mozilla 用户。不过这篇三分钟公告未交代 Smart Window 的本地或云端推理架构、默认启用方式、数据流向与保存政策，正文主要是目标和原则声明。

原文链接：https://mistral.ai/news/mistral-x-mozilla/

论坛讨论链接：https://news.ycombinator.com/item?id=49723408

两条评论围绕“本地推理是否现实”形成分歧。首位评论者认为浏览历史私密，适合本地的小模型；他批评营销页未清楚区分本地与云端推理，也未充分说明用户同意上传数据，并指出 Mistral Small 4 的链接错指向 OpenAI 模型卡。回复者也反对不知情上传，却认为设备难以承载好用的本地模型：常见笔记本仅 8GB 或 16GB 内存，本地运行可能额外占约 10GB、拉满 CPU 并损害续航，小模型能力又不足。他主张采用默认关闭的选择加入流程，说明交互发往 Mistral 服务器，并公开处理和保存政策。

---

## 7. 用 FPGA 重现 Voodoo 显卡与 1990 年代末游戏 PC (Recreating Voodoo Graphics and a Late-1990s Gaming PC on an FPGA)





作者在 z486_MiSTer 基础上用 FPGA 实现 zSST，重建 3dfx Voodoo Graphics 的固定功能管线，并接入一台晚 1990 年代风格的 PC。它覆盖三角形绘制、纹理过滤与 mipmapping、深度和 alpha 测试、雾化、混合、抖动、帧缓冲访问和换帧，CPU 与渲染器在 KV260 上均运行于 100 MHz。难点不是像素算术，而是共享 DDR：作者以纹理缓存、最多八条未决取数、重放队列、64 项重排缓冲及写合并来隐藏约 280 纳秒首字延迟。模拟中，纹理三角形达到 78.5 MPix/s，开启深度测试和混合后为 72.8 MPix/s；作者强调，这与 50 MHz Voodoo 1 的 43 和 37 MPix/s 估值负载不同，不能视作实测加速。整机运行《古墓丽影》约每秒换帧 12 次，瓶颈仍在 CPU，共享 DDR 竞争也可能有影响。

原文链接：https://nand2mario.github.io/posts/2026/zsst-voodoo/

论坛讨论链接：https://news.ycombinator.com/item?id=49719938

评论先争论 FPGA 是否等于“精确复刻”。jumploops 认为 MiSTer 把设备逻辑映射到 FPGA，时序比快速软件模拟更准确；mitxela 指出开放总线等行为仍须显式模拟，所以仍是高精度模拟器。ahartmetz 补充，严格时序主要适合较早、约 32 位以前的主机，PC 本就有硬件差异。成本方面，有人提醒文章使用的并非默认 MiSTer，而是约 250 美元的 AMD 板卡；回复称 DE10-Nano 如今约 300 美元，早年不到 150 美元，并更看好 KV260。

---

## 8. 小而实用的编程技巧，如何积累成工程效率 (Small programming tricks)


作者认为，工程效率很大一部分来自无需庞大背景知识、却能派上用场的小技巧。他列举了用 python3 -m http.server 临时共享文件，用 Ctrl+R 配合 fzf 或 atuin 查历史命令，在 SQL 中辨认 NULL 布尔陷阱并使用 EXPLAIN ANALYZE，用正则词边界匹配，以及按数值的十进制对数给指标分桶。其他例子包括 JavaScript 的 flatMap 与 Promise.withResolvers，Git 以 log -S 或 -G 追踪代码变化、checkout - 返回前一分支，以及用 globstar、rg 和 zsh 补全提高搜索效率。公司内部也有高杠杆知识，例如该看哪个数据源、谁熟悉某领域、故障时运行什么命令。作者曾每天在 Slack 分享一条技巧；即使十条只新学一条，也可能节省时间，而且一天一条不易造成信息过载，还能引出讨论。

原文链接：https://will-keleher.com/posts/small-programming-tricks-matter/

论坛讨论链接：https://news.ycombinator.com/item?id=49729000

评论焦点是怎样把“知道”变成习惯。有人早已会 Ctrl+R 和 fzf，却多年仍下意识按上下键，因此把技巧按工具记进随手可查的文档，并提醒自己停止低效操作。回复者建议每次用了旧方法就退回并重做，甚至临时把上箭头绑定成“请用 Ctrl+R”，用阻力改写习惯。另一方认为方向键并非总低效：zsh 可按已输入前缀筛选历史，开启 substring search 后还能匹配任意片段，fish 默认已有类似能力；还有人分享多词过滤历史的 hgrep，以及 bash/readline 的前缀搜索绑定。

---

## 9. 日本图书文化正从书店悄然转向图书馆 (Japan's book scene is moving from bookstores to libraries)





作者认为，日本一些地方图书馆正从安静、乏味的借阅设施，转为无需消费即可进入的社区与旅行目的地。转折案例是茑屋在 2013 年参与改造九州武雄市公共图书馆：馆内加入 Starbucks、书店、文具和商品区，吸引原本对书不感兴趣的人，也带来外地访客。熊本县南关町仅约 9,000 人，翻修后的图书馆却接待了 100,000 名访客；入口先陈列本地历史与人物，再逐步扩展到熊本和日本文化，书架不拘泥于标准分类，而强调偶遇原本不会寻找的书。新潟弥彦的案例则说明建筑并非关键：馆舍朴素，地面层设活动空间和咖啡馆，楼上为阅读与学习区，真正价值来自选书者的判断、空间维护和居民持续使用。作者把这种“软实力”概括为：漂亮建筑可以买到，优秀书架只能长期培育；地方图书馆因公共性聚合知识、居民和旅行者，也让小城自身文化成为访问入口。

原文链接：https://untranslatedjp.substack.com/p/japans-book-scene-is-quietly-moving

论坛讨论链接：https://news.ycombinator.com/item?id=49677916

akman 举出美国圣克拉拉县八馆共享系统，活动包含乐高、作业辅导和《龙与地下城》；Vinnl 又引用荷兰年轻人到馆人数回升的新统计，支持图书馆可能在全球复苏。Loughla 反驳说图书馆一直承担社区中心功能，只是如今重新被看见，并认为人们厌倦所有互动都被货币化。另一组评论谈到西雅图、洛杉矶和布拉格的现实：有人称馆舍兼作无家者庇护所，有人抱怨青少年借免费 Wi-Fi 喧闹玩手机；回复则说，这些使用者同样属于社区。分歧在于所谓“复兴”是新变化、旧功能被发现，还是社会问题集中显现在公共设施中。

---

## 10. 这款飞行模拟器不让你开飞机，只让你当乘客 (Show HN: I made a flight simulator, except you're just a passenger)




InFlightSimulator 把飞行模拟器的主角从飞行员换成商业航班乘客。用户不是坐进驾驶舱操纵飞机，而是像真正登机一样系好安全带、收起小桌板、打开舷窗遮光板，然后选择想去的地方，从起飞一直体验到降落。作者称它可模拟飞往世界任何地点的旅程，途中同时呈现地形、天气以及随现实时间变化的太阳位置，让窗外景色不仅由航线决定，也受到环境和光照影响。最新版本还为乘客加入可见的双腿，不再只是固定在座位上的视角；遇到较长航程，玩家可以起身去洗手间。这个 Show HN 项目刻意舍弃传统飞行模拟器最强调的驾驶操作，把重点放在客舱里等待、观看和移动的乘机过程，以轻松的互动方式还原普通旅客从离地到落地所经历的飞行。

原文链接：https://inflightsimulator.com

论坛讨论链接：https://news.ycombinator.com/item?id=49693971

HN 评论既把它当作有趣作品，也指出乘客视角可能有严肃用途。一位做过二十年飞行模拟器的工程师回忆，机组疏散训练会把真人大小的机身段放在运动平台上，每个窗口后由 FlightGear 从节点生成画面；物理、运动与视觉必须低延迟同步，飞行训练通常要求约 150 毫秒内响应，以免感官错位造成晕动，他还说行业已更多采用电动作动器。另一位有飞行恐惧的用户表示，自己不怕模拟器或驾驶舱，真正害怕的是坐在乘客座位上，因此这种视角或许正能补上恐飞训练缺失的一环。
