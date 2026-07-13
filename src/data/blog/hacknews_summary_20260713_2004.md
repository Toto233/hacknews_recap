---
title: "Claude Code 的 token 开销有多大 | Hacker News 摘要 (2026-07-13)"
author: "hacknews"
description: ""
digest: "Systima 对 Claude Code 和 OpenCode 做了一次代理编码工具的线级测量：在同一模型、同一机器和同一任务下，Claude Code 在真正读取用户提示前就发送了约 3.3 万 token，而 OpenCode 约为 "
source_url: "https://systima.ai/blog/claude-code-vs-opencode-token-overhead"
pubDatetime: 2026-07-13 20:04:34.776+08:00
tags:
  - "AI"
  - "开发者工具"
  - "网络"
  - "科技文化"
---

---

## 1. Claude Code 的 token 开销有多大 (Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k)


Systima 对 Claude Code 和 OpenCode 做了一次代理编码工具的线级测量：在同一模型、同一机器和同一任务下，Claude Code 在真正读取用户提示前就发送了约 3.3 万 token，而 OpenCode 约为 7000 token。文章把差异拆成固定 harness 开销、工具调用、指令文件、MCP 服务器、框架模板、subagents 和 extended thinking 等因素，并特别强调缓存策略差异。OpenCode 的请求前缀在多次运行中保持字节级一致，因此更容易复用 prompt cache；Claude Code 则会在会话中反复写入大量 cache token，导致成本和用量表增长更快。作者也承认这不是质量评测，而是成本、缓存稳定性和 harness 透明度审计。

原文链接：https://systima.ai/blog/claude-code-vs-opencode-token-overhead

论坛讨论链接：https://news.ycombinator.com/item?id=48883275

社区讨论集中在代理工具的 token 经济学。有用户指出 subagents 是预算燃烧器，同一任务如果让主代理顺序完成还能接受，自动派出多个子代理则很快耗尽额度。也有人关心比较是否公平：Claude Code 可能加载了更多上下文、规则和安全提示，因此不能只看 token 数。另一些评论把重点放在缓存稳定性，认为如果请求前缀不稳定，再便宜的缓存价格也救不了总成本。

---

## 2. Grok Build CLI 到底上传了什么 (What xAI's Grok build CLI sends to xAI: A wire-level analysis)


这篇 gist 对 xAI 官方 Grok Build CLI 0.2.93 做了可复现实验，作者在自己的机器和含假密钥的临时仓库中抓包，记录 endpoint、HTTP 方法、状态码、字节数和证据哈希。核心发现是，CLI 会向 xAI 发送它读取的文件内容，包含 .env 一类敏感文件；还会向 /v1/responses 发送 session_state，并向 /v1/storage 上传 grok-code-session-traces。作者进一步声称，即使命令只是“reply OK, do not read any files”，也观察到整个仓库被上传。文章把证据、未证明事项和缓解方式分开列出，重点不是攻击模型，而是要求代理编码工具对代码上传、遥测和默认权限边界给出更清楚的说明。

原文链接：https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547

论坛讨论链接：https://news.ycombinator.com/item?id=48877371

讨论明显偏安全实践。有人给出环境变量和配置项作为临时缓解方案，但也指出用户很难确认它们是否真正阻止上传。多位评论者建议把编码代理和模型提供商分离，并用 bubblewrap、容器或只读挂载限制工具能看到的目录，隐藏 .git、密钥和无关文件。也有人从价值观角度表示干脆不用 Grok。整体共识是，代理 CLI 默认拥有整个代码库视野时，网络行为必须可审计。

---

## 3. 一次生产 AI 代理迁移到 GPT-5.6 (Migrating a production AI agent to GPT-5.6: 2.2x faster, 27% cheaper)




Ploy 介绍了把生产网站构建代理从 Claude Opus 迁移到 GPT-5.6 Sol 的过程。该代理需要规划页面、读取代码库、写组件、生成图片、截图自检，并决定何时完成，因此评测不是简单问答，而是跑真实 fixture 工作区并用视觉 judge 评分。文章称 GPT-5.6 在完成质量不低于旧默认模型的同时，让构建墙钟时间缩短到原来的约一半，并降低 27% 成本。迁移并非直接替换模型：团队先修正评测 harness，再调整工具 schema、缓存和 reasoning replay，处理了新模型与旧模型在工具调用、缓存匹配和推理输出格式上的差异。文章的实用价值在于提醒团队，模型升级首先要校准评测和工具协议。

原文链接：https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6

论坛讨论链接：https://news.ycombinator.com/item?id=48882716

社区一方面认可文章里关于 eval harness、工具 schema 和缓存的经验，另一方面对文风很不耐烦，认为短句堆叠和营销口吻像未经编辑的 LLM 文案，削弱了可信度。有人说 AI 公司如果连文章都带明显模型腔，会让读者怀疑他们是否足够熟悉模型输出。也有人把重点拉回技术细节，认为真正值得读的是缓存策略变化、迁移成本和生产代理评测方法，而不是模型发布本身。

---

## 4. 陶哲轩用编码代理复活旧数学小程序 (Old and new apps, via modern coding agents)


Terence Tao 写到，他把 1999 年以来散落在个人网页和博客里的旧 Java 数学 applet 迁移到更可维护的仓库，并借助现代编码代理让两打左右的小程序重新可用。这些 applet 多数是教学和研究中的可视化辅助，不是数学证明本身，因此对缺陷容忍度更高。Tao 发现代理移植过程中只出现一个轻微拖拽 bug，反而还发现了原始代码里的两个旧 bug。顺利迁移后，他又让代理帮助实现新的可视化工具，包括一个特殊相对论方向的老想法，以及为 Gilbreath 猜想论文配套的可视化应用。文章展示了编码代理在“低风险但耗时的可视化和遗产代码维护”场景中的高杠杆。

原文链接：https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/

论坛讨论链接：https://news.ycombinator.com/item?id=48880170

讨论者普遍把数学和计算机教学可视化视为 LLM 的强项。有教师说自己一直想做的课堂 demo，现在能在几天内完成；也有人强调这类工具不必有完美架构，只要视觉结果足够正确、方便迭代，就能创造价值。不过也有人提醒，“正确视觉输出”依赖专业判断，面向本科生的可视化可能让专家觉得粗糙，代理生成结果仍需要懂领域的人验收。

---

## 5. 用 iroh 把闲置 GPU 编成 LLM 网格 (Mesh LLM: distributed AI computing on iroh)



Iroh 的 Mesh LLM 试图把团队或公网中的多台机器组织成一个可运行模型的计算网格。它的目标是让用户不必把所有推理请求交给大厂 API，也不必为更大模型一次性购买更大 GPU。系统通过 iroh endpoint 发现和连接节点，并提供与 OpenAI API 兼容的本地入口。请求可以在本机 GPU 上运行，也可以路由到已经加载模型的 peer，或者把单台机器放不下的大模型按层切成多个阶段进行 pipeline。插件系统负责声明能力，catalog 包含从小模型到 235B MoE 的多种选择。文章承认这仍然是早期方向，但主张企业和团队可以用它把办公室、机房和个人设备里的闲置算力变成可控的私有 AI 基础设施。

原文链接：https://www.iroh.computer/blog/mesh-llm

论坛讨论链接：https://news.ycombinator.com/item?id=48876505

社区反馈一半是兴奋，一半是性能怀疑。一位用户说在 MacBook Pro 上运行 join 命令就能加入 swarm，模型下载、选择和服务都自动完成，体验异常顺滑。另一位则指出文章缺少性能数据，跨消费级网络拆分模型可能远慢于本地 RAM 或磁盘换页，关心 split model 是否只有每秒一个 token 甚至更低。讨论的核心问题是：易用的分布式推理已经很吸引人，但吞吐和延迟决定它能否实用。

---

## 6. 互联网之父 Vint Cerf 从 Google 退休 (Vint Cerf, “father of the Internet”, is retiring)




TechCrunch 报道，83 岁的 Vint Cerf 将卸任 Google chief internet evangelist，结束其在 Google 超过 20 年的正式角色。Cerf 与 Robert Kahn 被认为是 TCP/IP 协议的关键设计者，这套让不同网络互联的基础规则构成了现代互联网的核心。他的贡献获得过总统自由勋章、图灵奖和多所大学荣誉学位。文章的宣布发生在 Open Frontier 会议上，当时 Cerf 与 David Patterson、François Chollet、John Ousterhout、Matei Zaharia 等长期参与开放系统和开源项目的计算机科学家同台，讨论如何构建能长期存活的软件基础设施。报道也暗示，Cerf 的“退休”更像是离开 Google 职位，而不是停止参与技术和公共事务。

原文链接：https://techcrunch.com/2026/06/30/the-father-of-the-internet-is-finally-retiring/

论坛讨论链接：https://news.ycombinator.com/item?id=48854168

社区里有不少人分享与 Cerf 接触的个人经历，称他温和、好奇、愿意做记录员、认真提问而不摆架子。也有人认为这个新闻有些公关味，因为像 Cerf 这样的人很难真正停下来，只是改变贡献场域。另一些评论则提醒他已经 83 岁，离开正式岗位本身就是值得纪念的节点。整体氛围是尊敬多于八卦，讨论焦点落在他对互联网和延迟容忍网络等后续工作的长期影响。

---

## 7. Google 用协作式路由缓解交通拥堵 (How we can reduce traffic congestion)


Google Research 这篇文章讨论如何通过协作生态减少交通拥堵。它把交通系统类比为需要协调的网络：单个司机、地图应用、城市道路管理者和公共机构各自优化，可能导致局部最优和整体拥堵。文章主张将研究、数据、建模和实际部署结合起来，在不只是给个人推荐最快路线的前提下，帮助城市识别瓶颈、调整信号、平衡需求并提升系统吞吐。它强调“协作”而非单一算法：研究机构、政府和产品团队需要共同定义目标，例如减少总延误、提高可靠性、降低排放，而不是让所有车辆都争夺同一条看似最快的路。文章代表 Google 希望把 AI、优化和地图能力更多用于公共基础设施。

原文链接：https://research.google/blog/the-power-of-collaboration-how-we-can-reduce-traffic-congestion/

论坛讨论链接：https://news.ycombinator.com/item?id=48881967

社区对“靠路由优化解决拥堵”明显保留。高赞评论认为真正有效的办法是公共交通、地铁、有轨电车、专用公交道和自行车网络，因为汽车的乘客带宽天然低。也有人说人们会选择最方便、成本最低的交通方式，若道路免费、停车无限、开车没有外部成本，大家当然会开车；要转向公交，就必须让公交更有吸引力，或让开车的便利性和成本更接近真实社会成本。

---

## 8. 一组小巧的 8 位机器模拟器 (Tiny Emulators)





Tiny Emulators 是 floooh 的一组浏览器内复古计算机和芯片模拟器集合，页面列出 Visual 6502、Visual Z80、KC85、Amstrad CPC、ZX Spectrum、Commodore VIC-20/C64、Acorn Atom 等多种机器，以及大量 demo scene 和游戏示例。它更像一个可直接试玩的目录：用户能打开不同 UI，观察旧机器、CPU、音视频和 demo 的运行效果。虽然 HN 链接指向的是旧 preview 页面，项目本身展示了作者长期维护的芯片级模拟工作：CPU 不再只是特殊控制器，而是与其他芯片一起按周期 tick，适合研究老硬件行为和复古软件。对喜欢计算机历史、模拟器和 demo scene 的读者来说，这是一个轻量但内容很密的入口。

原文链接：https://floooh.github.io/tiny8bit-preview/index.html

论坛讨论链接：https://news.ycombinator.com/item?id=48884395

作者本人出现在讨论中说明，HN 链接是 2021 年的旧 preview URL，更新地址应是 floooh.github.io/tiny8bit。他补充说，除了 pin-emulation，更有趣的是 CPU 都采用 cycle-stepped 方式，与其他芯片一起推进；Z80 的实现甚至把指令 decoder 拆到每个指令周期。其他评论者翻看 GitHub 仓库，对 chips-test、sokol 和 Dear ImGui 等依赖更新感兴趣。讨论整体偏技术考古和实现细节。

---

## 9. 一个讽刺循环收入的假创业工具 (LARP – Revenue infrastructure for serious founders)


LARP 是一个高度拟真的讽刺网站，包装成“为严肃创始人提供 Series A-ready revenue infrastructure”。它声称可以把两个创始人配对，让双方互相转账，把循环资金各自记作收入，从而制造 ARR、客户列表和增长指标。页面完整模仿 SaaS 官网：有 hero、客户 logo、SOC 2、实时账本、定价、FAQ、交互式“执行循环”工具，以及关于“没有产品、没有客户、没有现金净流动”的夸张说明。它真正讽刺的是创业融资生态里的循环收入、同批公司互买服务、云额度和 AI 交易互相记账等现象：数字看似真实，经济实质可能很薄。网站的完成度越高，讽刺效果越强。

原文链接：https://www.larp.website/

论坛讨论链接：https://news.ycombinator.com/item?id=48882569

社区讨论很快转向创业圈真实存在的循环交易。有人说翻看最近 YC 批次，许多所谓客户列表其实就是同批或近批公司互相购买。评论者算了一笔账：两家公司每月互付一万美元，估值可能都因此增加几十万到上百万。也有人分享非 SaaS 创业公司经历，认为许多 YC 工具价格远超普通团队预算，销售团队又高估创业公司的采购能力。整体共识是，这个玩笑之所以好笑，是因为离现实并不远。

---

## 10. 如何把读书变成默认动作 (How to read more books)




Elia Scotto 分享自己从每年读不到 10 本书，到连续几年大约每周读一本书的经验。文章的核心不是“挤出专门时间”，而是把所有无事可做的碎片时刻从手机切换到书。作者删除社交媒体和流媒体应用，只留下天气、邮件和银行这类无聊入口，让大脑逐渐不再把空闲等同于刷屏。他建议随身携带电子书阅读器，在醒来、睡前、做饭、吃早餐、坐公共交通时读几页；同时用便宜的指针手表减少查看手机的机会。文章强调目标和环境设计比意志力更可靠：如果书总在手边，手机少了诱惑，阅读量自然会增加。

原文链接：https://scotto.me/blog/2026-07-12-how-to-read-more-books/

论坛讨论链接：https://news.ycombinator.com/item?id=48882056

讨论里有人强烈认同“删除吸力应用”的方法，分享自己从屏蔽 X、Reddit、新闻，到进一步屏蔽天气、服务器状态、股票乃至无意义 LLM 聊天的过程。评论者把这看作摆脱设备和算法牵引的练习，而不是单纯追求读书数量。也有人坦承仍保留 HN，因为它提供少量社交连接和幽默感。讨论氛围更像数字极简实践交流：读更多书的前提，是先夺回默认注意力。
