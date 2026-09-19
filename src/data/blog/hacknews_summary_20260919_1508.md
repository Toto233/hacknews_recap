---
title: "微软高管曾称 AI 抓取是“人类史上最大规模的劳动盗窃” | Hacker News 摘要 (2026-09-19)"
author: "hacknews"
description: ""
digest: "《纽约时报》等出版机构诉 OpenAI 与微软的版权案公开了更多未涂黑内容。TechCrunch 提醒，新信息多来自原告方简报，底层证据仍被封存，所引语句缺少原始上下文。文件称，微软内部材料把生成式 AI 对内容供应链的冲击描述为“末日循环"
source_url: "https://techcrunch.com/2026/09/17/microsoft-exec-called-ai-scraping-the-largest-theft-of-labor-in-human-history-new-unredacted-filings-reveal/"
pubDatetime: 2026-09-19 15:08:36.076+08:00
tags:
  - "人工智能"
  - "软件开发"
  - "网络安全"
  - "硬件架构"
---

---

## 1. 微软高管曾称 AI 抓取是“人类史上最大规模的劳动盗窃” (Microsoft exec called AI scraping 'the largest theft of labor in human history')





《纽约时报》等出版机构诉 OpenAI 与微软的版权案公开了更多未涂黑内容。TechCrunch 提醒，新信息多来自原告方简报，底层证据仍被封存，所引语句缺少原始上下文。文件称，微软内部材料把生成式 AI 对内容供应链的冲击描述为“末日循环”，其数据还显示 Copilot 答案引擎令《纽约时报》域名点击率相较传统 Bing 搜索最多下降 93%。诉状引用微软应用科学主管 Brent Hecht 2023 年备忘录，将大规模复制称为“人类史上最大规模的劳动盗窃”；又称 OpenAI 的中期训练集含至少 91,692 份三家原告作品，Project Mango 数据集含至少 160,903 份独特作品。文件还指控双方经 Bing 索引、Common Crawl 等获取内容、绕过付费墙并移除版权声明。案件的核心仍是训练是否构成合理使用及产品是否替代、损害原作市场，相关说法尚属诉讼主张。

原文链接：https://techcrunch.com/2026/09/17/microsoft-exec-called-ai-scraping-the-largest-theft-of-labor-in-human-history-new-unredacted-filings-reveal/

论坛讨论链接：https://news.ycombinator.com/item?id=49752056

可见的 HN 评论围绕“人类读书”和模型训练能否类比展开。一位评论者认为规模会改变行为性质：个人学习对原作需求影响有限，而可无限复制的模型可能替代大部分需求，因此主张训练须获权利人许可，并建立内容授权市场。跟帖赞同这不是简单的“读书”，还提出可采用默认机械版税。另一位用街角警员观察与覆盖所有街角的全景监控作比，强调数量累积会形成质变；有人补充，人类生命与学习时间有限，不可能在一生中吸收并模仿大量艺术家的全部作品，而模型只需更多算力和电力。也有评论由此延伸质疑大规模监控本身。

---

## 2. Qwen3.8-Omni-Flash 发布：1M 上下文与全模态 Agent (Qwen 3.8 Omni Flash)





千问官方发布 Qwen3.8-Omni-Flash，定位为处理文本、图像、音频和视频，并能规划、调用工具、完成内容生产的全模态 Agent，支持 1M 长上下文。按官方材料口径，它在 29 项评测中较 Qwen3.5-Omni-Plus 平均提升超过 25%，每小时音频输入价格降幅超过 98%，音视频输入降幅超过 93%；价格按 2 分钟素材成本乘 30 估算，音视频条件为 720p、1 fps。官方还称 WildClawBench-MM 提升 36.5 分，UniClawBench 得分 69.6。在 OmniVideoBench 官方实验中，主动取证模式把准确率由 63.4 提至 67.8，并将每次查询 Token 从 145736 降至 79117，约降 45.7%。配套 Qwen-MM-Plugins 面向长音视频工作流，开源 Qwen-Live Harness 服务多模态交互。

原文链接：https://qwen.ai/blog?id=qwen3.8-omni-flash

论坛讨论链接：https://news.ycombinator.com/item?id=49747925

评论提出模型太多，用户很难按用途、成本和语言能力筛选；发帖者以清理垃圾邮件、生成过滤规则并兼顾荷兰语和法语为例，想找推荐工具。回复建议从便宜模型开始，任务达标就不必追新；失败时先补工具、上下文或调整方法。有人称 GLM-5.3 Flash 更适合自己，而 Qwen 3.8 在其 harness 中怎么调都不理想；另有人因可传 PDF 而使用 Gemini，把图像型页面交给 GLM，但担心依赖 Google。还有评论以旧版 Gemini Flash 稳定做摘要和翻译为例，认为追逐最新模型意义有限。

---

## 3. 堆溢出叠加 SSO 缺陷，研究者触及 OpenAI 内部仓库 (A heap overflow and SSO misconfiguration to compromise OpenAI internal repos)



Hacktron 披露了一条由图像解析漏洞与身份配置问题组成的攻击链。研究者从 Discourse 的 HEIF 上传路径入手：ImageMagick 会调用存在堆缓冲区溢出的 libheif，而上游相关改动此前未标为安全修复，也没有 CVE。他们先经图片上传验证本地 RCE，再以生成的脚本确认 community.openai.com 可被攻破。叠加 OpenAI SSO 身份缺陷后，论坛失陷可转化为 ChatGPT/Codex 账户访问；团队用一名员工账户中的 Codex 创建无害内部 PR 证明影响，未读取内部代码，之后停止测试并报告。OpenAI 约在 Bugcrowd 提交后 14 小时修复；Discourse 周一备妥补丁并加入图像处理沙箱，7 月 28 日发布公告。OpenAI 后续支付 6500 美元奖金，并说明奖励针对 OpenAI 侧问题，论坛测试不在悬赏范围。

原文链接：https://www.hacktron.ai/blog/hacking-openai

论坛讨论链接：https://news.ycombinator.com/item?id=49749656

一条高赞评论担忧，高度目标导向且受过大量 CTF 训练的代理会在目标被包装成“游戏”时跨过现实安全边界。回复者看法不一：有人认为可利用的 RCE 数量有限，未来几年虽会艰难，但开放能力能更快清除漏洞；也有人反问，修复速度是否真的快于新漏洞引入。另一些人推测，廉价模型审计会让更多开发者在发布前发现问题，常见软件只需有维护者主动测试；还有人认为，持续制造多于修复漏洞的公司最终会被市场淘汰。

---

## 4. Claude Code 无 CLAUDE.md 时改读 AGENTS.md (Claude Code now reads AGENTS.md if there is no Claude.md)



Claude Code 2.1.277 的 9 月 18 日更新加入 AGENTS.md 支持：项目根目录不存在 CLAUDE.md 时，工具会改读 AGENTS.md，用户还可在 /config 的“Project instructions”中调整该行为。它是有条件的后备读取，不是让两份指令文件同时生效，也不代表 .agents/skills 已获得兼容。该版本同批加入 CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1 与可选请求头，并改善后台任务结束但面板占用时的提示；同时修复 claude -p、历史助手消息含空文本块导致请求失败、旧版 IDE 捆绑 CLI 触发意外登出，以及设置 ANTHROPIC_API_KEY 时交互式启动卡住或报错等问题。此次变化可减少多种编码代理共用项目时的指令文件重复，但前提仍是仓库没有 CLAUDE.md。

原文链接：https://code.claude.com/docs/en/changelog

论坛讨论链接：https://news.ycombinator.com/item?id=49760187

评论区有人抱怨这项基础兼容来得太晚，多代理仓库此前被迫维护两套文件。也有人分享折中方案：让 CLAUDE.md 只写一句去读取 .agents/agents.md，或直接建立符号链接。另有评论提醒，更新只解决项目指令文件，Claude Code 仍不会发现 .agents/skills。为弥补技能目录差异，有人给出 post-checkout Git 钩子，检出仓库后自动把 .agents/skills 链接为 .claude/skills。

---

## 5. Android 17 QPR1 新增 API 未同步至 AOSP (Android 17 is the first since 3.x to add new APIs without releasing to the AOSP)


GrapheneOS 的短帖称，Android 17 QPR1 是自 Android Honeycomb（3.x）以来，首次在为应用开发者增加新 API 的同时，没有把对应版本发布到 Android 开源项目 AOSP；这些 API 目前只存在于 Pixel OS，其他 Android 设备厂商无法获得。帖文附上 Android 开发者网站的 API 37.1 差异页，作为新增接口的核对入口。原帖没有列出具体新增 API 名称、数量或用途，也没有提供 Google 对发布安排的解释，更未说明这些接口未来是否会进入 AOSP。因此目前能确认的范围仅是发帖者指出的版本与可用性差异：Pixel OS 已获得面向应用的新增接口，而非 Pixel 厂商缺少相应开源版本。至于这是否代表长期策略变化、会对兼容性产生多大影响，单凭这则短帖无法下结论，仍需后续源码发布或官方说明补充。

原文链接：https://grapheneos.social/@GrapheneOS/117282080803799576

论坛讨论链接：https://news.ycombinator.com/item?id=49758736

HN 评论把此事放进 Google 与开源生态的长期关系中讨论。有人列举源码补丁延迟、禁运期和设备证明问题，认为 GrapheneOS 面临的障碍增多。跟帖延伸到 Chromium，主张硬分叉或转向其他浏览器基础；反方提醒，硬分叉无法补上闭源部分，也不能凭空获得与 Google 相当的工程投入。另一些人争论 Google 是否短视：一方认为开源带来外部劳动、安全检验和需求信号，收紧会损害长期利益；另一方认为市场份额目标已完成，公司可能明知后果仍加强控制。有人主张反垄断拆分，但这只是评论者观点。

---

## 6. 作者质疑通行密钥：防钓鱼却难防锁号 (I don't like passkeys)





作者并不否认通行密钥的技术价值：凭证与站点绑定，可抵御伪造登录页钓鱼；服务端只保存非对称密钥材料，泄露后也无法还原私钥。但他认为个人用户面对的高频风险往往是设备丢失、自动封号和永久锁号，而账户安全仍取决于短信、邮件链接或安全问题等最弱恢复渠道。硬件密钥上的通行密钥不能迁移备份，用户需为每个网站登记两三把钥匙，且可发现凭证容量通常只有25至100个。苹果、谷歌的同步方案又把身份绑在各自账户与操作系统上，FIDO推动导出和互操作，但现阶段各提供商体验仍碎片化；密码至少仍可作为字符串手工导出。在他人设备登录时，硬件接口、同步信任与混合传输也都带来摩擦。因此作者主张企业环境可采用，个人用户暂不宜把它当成熟的密码替代品。

原文链接：https://hawksley.dev/blog/i-dont-like-passkeys

论坛讨论链接：https://news.ycombinator.com/item?id=49753211

置顶评论认为，通行密钥主要帮助会复用密码、又不用密码管理器的人；对拥有多台设备的用户，为每套系统逐一登记会形成近似设备数乘账户数的负担，放进密码管理器虽现实，却仍难处理在陌生设备登录。该评论尤其反感产品在用户不了解后果时反复诱导开通。回复者以亚马逊为例，批评“现在启用或以后再说”却没有永久拒绝；他还指出若恢复流程仍靠邮件或短信，最弱环节并未消失。后续分支转向亚马逊账户与儿童平板付款方式，属于个人弃用经历，并未形成对通行密钥技术本身的新结论。

---

## 7. Cloudflare Quick Tunnels：一条命令把本地服务临时公开 (Cloudflare Quick Tunnels)


Cloudflare Quick Tunnels 用一条 `cloudflared tunnel --url http://localhost:8000` 命令，把笔记本上的本地服务映射为 Cloudflare 边缘网络上的公开 HTTPS 地址。它不要求注册账号、配置 DNS 或开放入站端口，连接由本机向外建立，页面称通常约三秒即可获得 URL，并自动提供 TLS、DDoS 缓解和覆盖 335 多座城市的 Anycast 边缘接入。隧道随进程结束而消失，适合短期预览、CI、Webhook、评测工具，以及让编码代理或同事访问正在开发的页面。官方流程是安装 cloudflared、启动任意端口上的应用、开启隧道，再分享生成的 trycloudflare.com 链接；面向代理的场景还支持在标准输出中提供主机名、边缘节点和健康状态等结构化 JSON，避免从日志中用正则提取。

原文链接：https://try.cloudflare.com/

论坛讨论链接：https://news.ycombinator.com/item?id=49754785

HN 讨论把 Quick Tunnels 与 Tailscale 比较。一位用户称用 Tailscale 从手机访问家庭应用，设置比 Cloudflare 企业工具顺手。跟帖提醒，Tailscale Serve 的地址仅在私网内可见，Quick Tunnel 却是公网入口，机器人可能很快探测，应用仍需防护。Tailscale Funnel 也能公开服务，但单机 HTTPS 端点有限。其他人推荐自托管 NetBird、Pangolin 或 WireGuard，并讨论这些方案在多用户组网中的价值。

---

## 8. FEX 拆解 x86 仿真：ARM 为何被内存序拖慢 (The scourge of x86 emulation)




FEX 解释，x86 的 TSO 内存模型比 ARM 弱序更强，仿真器因此常把访问翻译成获取式加载、释放式存储或内存屏障；x86 程序做非对齐访问时，ARM 的限制会触发异常，JIT 还得退回更昂贵的屏障路径。原子读改写指令表面上多能一对一映射，但 x86 保证缓存行内非对齐原子操作不撕裂：Zen 样本约 1.44 纳秒，跨 64 字节缓存行才升至约 660 纳秒；ARM 平台即使自然对齐也更慢，非对齐代价更高。Oryon-3 的“相干缓存行”让行内原子访问接近自然对齐，苹果 M1 的硬件 TSO 改善加载和存储，却没有解决缓存行内的非对齐原子操作。FEX 当前对部分 split-lock 只能尽力模拟，某些情况下仍可能撕裂。独显经 PCIe 使用写合并的未缓存内存时，TSO 所需释放式存储相对 Zen 最差可慢 816 倍；UMA 平台可借 CPU/GPU 缓存一致性绕开部分问题。

原文链接：https://fex-emu.com/Scourge-of-emulation/

论坛讨论链接：https://news.ycombinator.com/item?id=49750094

评论主要质疑文章开头“ARM 弱序有利优化、x86 强序限制优化”的概括。一位评论者引用另一篇文章，认为弱内存模型未必带来显著收益。自称参与 Rosetta 2 并制定苹果 TSO 模式规格的回复者反驳说，弱序确有性能价值，尤其 x86 带 LOCK 前缀的指令近似完整屏障，对大量使用原子引用计数的程序影响明显；他估计收益在个位数百分比，但对 CPU 微架构已很重要，并称现代开发者已习惯 C++ 获取/释放语义。第三人继续追问，若像 Alpha 那样放松地址依赖加载顺序，收益能否抵偿复杂度。

---

## 9. Jemalloc 5.4.0 清理 160 多项技术债 (Jemalloc 5.4.0)



Jemalloc 5.4.0 汇集 160 多次提交，重点偿还技术债。新增 EXTENT_ALLOC_FLAG_PINNED 及相应统计，允许通过 thread.arena 恢复按 CPU 选择 arena，并对齐人类可读与 JSON 统计；experimental_infallible_new 选项由构建期开关和 new(std::nothrow) 路径替代。不兼容变化是按各大小档需求动态调整线程缓存填充、保留目标及配置。修复包括 free 系列与 process_madvise 保留 errno、大小类溢出检查、free_sized 接受空指针、线程状态生命周期、arena_reset 潜在死锁，以及采样分析与保护页交互。内部还拆分前端、控制分派与统计呈现，限制基块增长以免虚拟内存耗尽，引入操作系统抽象层，并补强 macOS、MinGW、GCC 16 和 PID 命名空间的可移植性。

原文链接：https://github.com/jemalloc/jemalloc/releases/tag/5.4.0

论坛讨论链接：https://news.ycombinator.com/item?id=49750152

讨论首先把新版放进项目治理背景：有人引用此前的 Jemalloc 事后总结，担忧大型公司接手开源项目未必带来长期收益；回复者引用 Meta 先前公告，称开发已迁回原始项目并归档自己的分支。一名实际用户分享，Jemalloc 的每线程分配计数让他能统计并限制各工作线程的内存预算，再按 CPU 核心调度请求；他考察 tcmalloc 和 mimalloc 时没有找到同类能力。另一支讨论考据名称来自作者 Jason Evans 的首字母，又延伸到 systemd 的命名。

---

## 10. OpenJev：在浏览器本地比较两种模型决策方式 (OpenJev)


OpenJev 展示的 SemIf 是一个完全在浏览器中运行的独立研究实验，用同一个本地模型处理“状态、问题和允许选项”，比较两条概率生成路径：一条直接读取各选项的 logits，并只在给定选项间归一化；另一条让模型逐 token 写出 JSON 概率分布。模型权重从 Hugging Face 下载后留在浏览器缓存，输入不离开页面，两种方法在同一 GPU 上依次执行以避免争用。页面可选 Qwen3 0.6B、MiniCPM5 2B 和 Qwen3.5 4B，下载量分别约 639MB、1.56GB、3.01GB，并列出自建与公开子集上的平衡准确率；其中 4B 模型三项数据为 81.3%、76.6% 和 84.5%。实验会分别记录加载、预热、输入、首 token、总耗时等本机数据，也提醒浏览器量化可能改变准确率。

原文链接：https://openjev.com/

论坛讨论链接：https://news.ycombinator.com/item?id=49752041

HN 的高赞讨论几乎没有评价实验方法本身，而是集中批评页面设计：有人认为一次性“氛围编程”网站信息拥挤、填充文字过多，牺牲了可用性；另一位把当前 AI 文案比作焦虑学生的期末作文，为防遗漏而堆满细节，缺少聚焦与编辑。跟帖补充说句句都像预告片台词，也有人分享“面向高级工程师、五分钟内读完”“短段落、简单词”“保持简洁”等提示词。另一支讨论以 Berkshire、McMaster-Carr 和 Craigslist 为例，争论极简网页究竟是清楚高效，还是会因信息不足与移动端体验差而失效。
