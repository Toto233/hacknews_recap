---
title: "OpenAI称AI证明Navier–Stokes可在有限时间爆破 | Hacker News 摘要 (2026-09-09)"
author: "hacknews"
description: ""
digest: "OpenAI在官方研究页面宣布，其内部系统给出Navier–Stokes存在性与光滑性问题的解析证明，并公开论文及Lean形式化版本。该公司称，三维不可压缩、恒密度流体即使从静止且光滑的状态出发，在光滑外力作用下也能于有限时间形成速度无界的"
source_url: "https://openai.com/index/navier-stokes-solution/"
pubDatetime: 2026-09-09 20:16:12.874+08:00
tags:
  - "人工智能"
  - "科学研究"
  - "开发工具"
  - "数字生活"
---

---

## 1. OpenAI称AI证明Navier–Stokes可在有限时间爆破 (On the Navier–Stokes Millennium Prize Problem)


OpenAI在官方研究页面宣布，其内部系统给出Navier–Stokes存在性与光滑性问题的解析证明，并公开论文及Lean形式化版本。该公司称，三维不可压缩、恒密度流体即使从静止且光滑的状态出发，在光滑外力作用下也能于有限时间形成速度无界的奇点，同时保持总能量有限，对应Clay官方问题表述的C与D情形。构造的核心是不断向内螺旋、轴向拉长的涡旋，让加速度、压力梯度、输运和黏性等大项精确抵消。OpenAI称约一万名并发代理用88小时得到结果，随后GPT-6 Astra用17小时完成Lean验证，过程产生约270万条消息和1300亿输出token。它承认Buckmaster与Alpöge在受迫Euler工作上的优先性，并表示不申领奖金；目前这些仍是发布方主张，尚需数学界独立审查与Clay认可。

原文链接：https://openai.com/index/navier-stokes-solution/

论坛讨论链接：https://news.ycombinator.com/item?id=49613262

HN讨论没有只盯着证明本身，许多人更震惊于OpenAI称一个训练不足两周的内部模型在数学上显著强于刚发布的Astra。质疑者认为“能力翻倍”缺少统一量尺，可能只是针对Astra暴露的弱点继续强化训练，因此应按宣传中最保守的含义理解。另一派把近期研究文章解读为递归自我改进的信号，也有人以自己过去数月突然能完成复杂3D流程的体验反驳“只是公关”。争论最终落在两点：真实能力进步是否已经跨过临界点，以及即使算法进步，算力仍会不会成为主要瓶颈。

---

## 2. Buckmaster与Alpöge公开三项受迫流体爆破解答 (Navier-Stokes – Tristan Buckmaster [pdf])


数学家Tristan Buckmaster与Levent Alpöge公开三项结果：不可压缩多孔介质、Boussinesq方程以及三维不可压缩Euler方程在光滑外力下的有限时间爆破。他们还相信已得到次耗散Navier–Stokes的爆破解，但因Lean验证未完成且尚无可读论文，本次没有发布；这些结果并不等于那项百万美元Navier–Stokes千禧年难题的证明。Buckmaster把基本路线归功于Diego Córdoba与Luis Martínez-Zoroa多年研究，称自己与Alpöge借助Claude、Codex及GPT-5.6 Sol推进，Astra仅用于写作和审计；8月15日得到Euler等结果，8月22日完成Lean验证。声明还详述与OpenAI围绕同期研究、用户数据疑虑及署名安排的交涉，但明确说自己没看过OpenAI证明，也不指控对方使用其数据。

原文链接：https://cims.nyu.edu/~tristanb/statement.pdf

论坛讨论链接：https://news.ycombinator.com/item?id=49605915

HN评论者把数学成果和公司冲突拆开：Buckmaster与Alpöge证明的是受迫Euler等问题，并未解决千禧年题；合作属于个人研究，不是Anthropic项目，且混用了Claude与OpenAI模型。争议集中在时间线：OpenAI得知传闻后启动研究，几天内走向相似的受迫路线；Buckmaster询问Codex会话是否进入训练时未获明确答复，并称对方提出由他改写OpenAI证明但排除Alpöge。评论者认为这种署名条件比单纯抢功更可疑，不过相关说法仍来自当事人声明与公开回应。

---

## 3. Meta推出个人AI代理Muse：能跨应用持续办事 (Muse – Meta’s personal AI agent)


Meta发布个人AI代理Muse，定位不是只回答问题，而是把目标变成计划并持续代办事务。用户可在Muse应用或WhatsApp中像聊天一样交代发送邮件、预订旅行、填写表单、协商与购物等任务；较长工作可在应用关闭后继续，情况变化或涉及敏感动作时再请求批准。Muse由Muse Spark模型驱动，每位用户拥有独立的Muse Secure VM及浏览器，连接凭据进入代理不可见的安全存储；同机隔离的Sentinel代理负责审核所有联网动作。Meta称用户可细分每个应用的读写权限、查看完整审计轨迹、随时断开服务或删除记忆，也可拒绝交互用于训练，VM数据不进入广告系统。产品正在美国登陆iOS、Android和muse.ai，基本用途免费，另有订阅；未来还计划推出连Meta也无法解密的Confidential VM。

原文链接：https://ai.meta.com/muse/

论坛讨论链接：https://news.ycombinator.com/item?id=49615537

HN最有代表性的判断是：Muse瞄准的不是天天追模型榜单的技术用户，而是只会说“我用ChatGPT”、甚至不知道LLM和厂商区别的大多数人。支持者认为默认入口和现成社交渠道足以让数百万人采用，易用性本身就是Meta的优势。反方则由前员工描述内部人才流失、组织混乱和高额投入，质疑公司是否真有一致战略；回应者指出Meta广告业务持续产生巨额利润，完全负担得起多条实验线。讨论因此更像渠道与组织能力之争，而不是模型参数对比。

---

## 4. AlphaGenome Atlas绘制全基因组变异影响预测图谱 (AlphaGenome Atlas: a high-resolution map of human DNA)


Google DeepMind推出AlphaGenome Atlas，称其为目前最全面的遗传变异分子影响预测目录。人类基因组约有30亿个碱基对，蛋白质编码区只占约2%，其余98%的非编码区如何调控蛋白质生产等过程仍有大量空白。Atlas把AlphaGenome对编码区和非编码区的预测汇总为AlphaGenome Variant Impact（AVI）分数，让研究者先筛选更值得实验验证的变异，而不用逐项浏览大量输出。Google把应用场景指向罕见遗传变异和复杂性状研究，并通过网页门户向研究人员与生物学家开放。它本质上是帮助确定研究优先级的预测工具，不是把DNA直接翻译成人体性状的定论；实际价值仍取决于独立实验、不同人群数据和具体疾病场景的验证。

原文链接：https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/

论坛讨论链接：https://news.ycombinator.com/item?id=49611251

HN的主要分歧是该图谱能否跨过“序列到功能”模型的现实限制。有评论引用对简单病毒逐位突变的实验：多种专用AI仍难预测大量真实结果，因此担心在人类基因组上不确定性只会更大。反方提醒，别把其他模型的失败直接算到AlphaGenome头上，应按它自己的数据和任务评测。更广泛的质疑认为DNA不是独立指令集，表型还受物理环境、细胞状态与复杂生物相互作用共同决定，需要极其庞大的实证样本。共识并非图谱无用，而是预测分数应当作为实验导航，不能替代实验。

---

## 5. 这栋房子把20台游戏主机藏进墙里办LAN派对 (We built our house for LAN parties (2024))




Kenton Varda与Jade Wang把住宅设计成可随时开局的LAN派对空间：地下室墙内嵌12个可折叠电脑位，楼上桌面还能翻出6个游戏位，地板装有DDR跳舞毯；机房则放置20台规格相同的游戏主机。所有机器从服务器共享镜像进行网络启动，每台使用会后删除的写时复制层，主人只需更新一份系统与游戏。游戏机通过独立10G网络连接，住宅另有2Gbps光纤、140个网口、PoE无线接入点与摄像头；35至100英尺的光纤DisplayPort和USB线把主机与房间隔开，专用空调处理机架热量。设计重点不是堆硬件，而是消除搬电脑、装补丁和统一版本的数小时准备，让只来一两小时的朋友也能加入合作或团队游戏，并保留房间平时的生活用途。

原文链接：https://lanparty.house/

论坛讨论链接：https://news.ycombinator.com/item?id=49579443

HN大多把这栋房子视为少见的“技术梦想成真”：硬件固然昂贵，更难得的是成年后仍有足够稳定的朋友群和同好伴侣。有人提醒这也依赖财富、职业机会与家庭支持，不应只归功于个人选择；也有人担心食物、清洁、孩子和长时间社交会让设想难以持续。亲历过大型LAN派对的评论者指出，最耗时的往往正是头两小时的联网、更新与排错，内置且统一镜像的机器恰好解决了核心摩擦。争论虽涉及特权与实用性，整体仍欣赏主人坦率承认幸运和工程失误。

---

## 6. DaVinci Resolve 21.1加入AI助手与完整照片工作流 (DaVinci Resolve 21.1)


Blackmagic Design发布DaVinci Resolve 21.1，官方称更新加入AI助手集成，并为剪辑师和调色师新增一百多项工具与控制。新的Photo页面把节点式非破坏编辑、主色校正、曲线、Power Window、Resolve FX、LUT、Magic Mask、相册管理、RAW批处理和Blackmagic Cloud协作带到静态摄影。AI工具可按人物、物体或对白搜索素材，从十秒声音样本生成可调语速、音高与语调的语音，读取场记板，并提供CineFocus、年龄变换、面部重塑、瑕疵修复、超锐化与运动去模糊。剪辑页扩展关键帧、HTML图形和Lottie动画；Color新增HDR/SDR多版本交付与节点图层视图，Fusion整合七十多项Krokodove动态图形，Fairlight加入音轨文件夹、六段EQ和效果链，同时强化沉浸视频与竖屏输出。

原文链接：https://www.blackmagicdesign.com/media/release/20260908-03

论坛讨论链接：https://news.ycombinator.com/item?id=49610181

HN对AI整合的态度比标题预想温和。长期用户认为Resolve功能强但学习门槛高，代理若能代办素材整理、项目或时间线初始化，并展示操作过程，会把时间留给真正依赖经验与审美的调色和剪辑，而不是取代创作者。讨论很快转向Blackmagic的商业模式：Studio仍是一次性约295美元授权，多年免费升级，可在macOS、Linux和Windows间迁移。评论者把这种跨平台、非订阅定价与Adobe式订阅对照，甚至有人表示即使没有剪片需求也愿意购买以支持厂商。

---

## 7. Mistral融资30亿欧元，估值突破210亿欧元 (Mistral raises €3B)





法国AI公司Mistral完成30亿欧元D轮融资，投后估值超过210亿欧元，公司称这是欧洲科技企业规模最大的股权融资。三星电子领投，EQT管理的Scaleup Europe Fund与老股东PSG Equity共同领投；BlackRock旗下基金、卢森堡大公国等成为新投资者，ASML、英伟达、Salesforce Ventures、a16z等继续参与。资金将扩充前沿模型训练算力、基础设施、商业增长与国际布局。Mistral目前在20个国家运营，称已支持包括Airbus、ASML和HSBC在内的125多家大型企业。它把差异化押在“主权AI”全栈：开放权重模型、自有或可控算力与生产工具共同提供，让客户的数据留在组织边界内，模型可定制，算力可预测，部署系统可审计，并减少对单一美国云或模型供应商路线与定价的依赖。

原文链接：https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/

论坛讨论链接：https://news.ycombinator.com/item?id=49605767

HN不少人认为Mistral刻意避开榜单军备竞赛，转而为欧洲政府和大型企业提供主权部署，是受资金约束下的理性差异化；本地人才、工程经验和供应链能力本身也有长期战略价值。有人把它类比苹果等待市场成熟，但反对者指出苹果靠硬件与服务赚钱，可以购买模型，而Mistral本身就是模型供应商，不能完全退出能力竞争。另一项疑问是开放权重如何盈利，可能仍要靠托管、定制与基础设施。支持者的回答是，机构客户购买的并非绝对最强基准，而是控制权、安全性和可信交付。

---

## 8. I-have-ADHD技能让编程代理先给答案再解释 (I-have-ADHD: A skill to stop coding agents from burying the answer)



开源项目I-have-ADHD把一套“注意力友好”的输出规则封装成编程代理技能，目标是阻止助手用长前言、旁支解释和礼貌收尾埋掉真正答案，使用者不需要有ADHD诊断。它要求先给下一项动作，多步骤任务编号，结尾只留一个具体下一步；同时压制离题内容、每轮重述当前状态、给出具体分钟级时间估计、显式展示已完成成果，以平实语气报告错误，并把列表限制在五项以内。README用依赖升级示例对比：旧式回答先铺陈认证流程，新式回答直接列出安装命令、文件行号、替换动作与测试命令。项目提供Claude、Codex、Cursor、OpenCode等多种插件或技能目录，允许用户分叉并修改SKILL.md，采用MIT许可。它改变的是交互格式，不会提升模型本身的代码正确率。

原文链接：https://github.com/ayghri/i-have-adhd

论坛讨论链接：https://news.ycombinator.com/item?id=49610631

HN用户最反感的并不只是前言，而是代理反复说明“没有做什么”，导致代码注释和交付总结充满否定句。有人尝试用自定义规则禁止这种习惯，却发现代理声称底层工具框架存在更高优先级、互相冲突的指令；即使写上“覆盖框架”也未必生效。其他人提醒，模型对自己为何这样回答没有可靠记忆，可能只是生成听起来合理的解释，因此这些自述最多是线索，不能当诊断证据。实用建议包括及时用rewind清理上下文，但讨论也表明，格式技能能缓解症状，未必能战胜模型或宿主内置行为。

---

## 9. 独立Wiki陷入“Google监狱”：新域名只显示首页 (There's a new "Google Jail" for independent wikis)




独立游戏Wiki托管方Weird Gloop称，Google在2024年3月核心更新后出现一种针对新域名的异常：站点大量内页已经被抓取并可通过site搜索找到，普通搜索却长期只展示首页。作者观察到约九成在此后启用全新域名的Wiki受影响，持续时间不明，最长接近一年，还可能反复进入和退出；由于游戏Wiki约85%的访问来自Google，这会直接破坏从Fandom迁出的可见度。现象与内容是否重复、首页自身排名高低关系不大，却几乎不影响成熟域名下的新子域名。作者猜测Google可能无法可靠过滤SEO垃圾，因而对新域名整体降权，但强调只是推测。现实策略变成三选一：坚持理想独立域名、争取游戏厂商子域名，或先寄居已有权重的weirdgloop.org，待稳定后再用301和地址变更工具迁回。

原文链接：https://weirdgloop.org/blog/google-jail

论坛讨论链接：https://news.ycombinator.com/item?id=49604870

一位游戏开发者提供了相似经历：其Wiki近一年获得外链且Search Console显示大量页面已收录，搜索结果仍不展示，直到持续从Steam新闻链接内页后才突然放量，这强化了“存在等待区”的判断。有人推测Wiki密集互链与废弃站常被机器人改造成链接农场，可能触发了过度严格的反垃圾规则；也有人以AI摘要引用粉丝虚构内容为例，强调独立Wiki质量确实参差。关于Fandom是否靠广告获得优待的讽刺遭到反驳，评论者最终仍缺少Google内部证据，只能确认收录与实际展示之间存在难解释的断层。

---

## 10. Qwen3.8 27B量化实测：4位基本稳，1位性能崩塌 (Benchmarking Qwen3.8 27B quantizations: 4-bit holds up, 1-bit collapses)





Quesma用GPQA Diamond、IFBench和89项任务的Terminal-Bench 2.1测试Qwen3.8 27B多种GGUF量化，重点不是比较token分布，而是直接看科学问答、指令遵循和代理编程能否完成。结果显示Q4_K_M约四位量化在多数任务上接近BF16，连低于11GB的较好二位版本也保留部分能力；但一位量化在GPQA上跌到随机猜测附近，默认xhigh长推理反而比低推理更差，说明72%的top-1一致率仍可能破坏关键逻辑。作者还比较相同已解任务的轮数和输出token，并用L40S、H100、H200在Modal上花费约3000美元运行测试，其中Terminal-Bench成本约2308美元。建议本地部署选择能与所需上下文共同装入显存的最佳模型，四位通常是稳妥起点，二位需按任务验证，一位不宜只看压缩指标。

原文链接：https://quesma.com/blog/qwen38-27b-quantizations-benchmarked/

论坛讨论链接：https://news.ycombinator.com/item?id=49611128

HN的技术争论集中在误差条。评论者指出Wilson置信区间描述二项抽样不确定性，不能代表同一模型多次运行的波动；一个成绩在60%、100%、80%之间跳动的模型，可能与每次稳定80%的模型得到相似区间，所以图表容易误导。作者承认需要重复运行，但强调Terminal-Bench每次面对同一批任务，其中许多题始终容易或始终太难，单次结果只能记录每题成败，简单套独立伯努利分布也不理想。他倾向贝叶斯方法，其他人建议至少做多轮分布或箱线图。讨论没有推翻四位与一位的巨大差距，却提醒小差异不能过度解读。
