---
title: 'DeepSeek v4 现身文档：API 同时兼容 OpenAI 和 | Hacker News 摘要 (2026-04-25)'
author: 'hacknews'
description: ''
digest: 'DeepSeek API 文档已经把新模型名 `deepseek-v4-flash` 和 `deepseek-v4-pro` 放进调用示例，并说明旧的 `deepseek-chat` 和 `deepseek-reasoner` 将在 202'
source_url: 'https://api-docs.deepseek.com/'
pubDatetime: 2026-04-25 08:30:23.063+08:00
tags:
  - AI
  - 开发工具
  - 安全
  - 基础设施
---

---

## 1. DeepSeek v4 现身文档：API 同时兼容 OpenAI 和 Anthropic 格式 (DeepSeek v4)




DeepSeek API 文档已经把新模型名 `deepseek-v4-flash` 和 `deepseek-v4-pro` 放进调用示例，并说明旧的 `deepseek-chat` 和 `deepseek-reasoner` 将在 2026 年 7 月 24 日弃用。文档的关键信息是接口兼容路线：OpenAI 风格的 base_url 是 `https://api.deepseek.com`，Anthropic 风格则是 `https://api.deepseek.com/anthropic`，开发者可以通过改配置继续使用已有 SDK 或兼容工具。示例里还展示了 `thinking` 参数，用来开启推理模式。虽然抓到的正文主要是 API 入门页，不是完整模型报告，但 HN 主贴额外指向了 Hugging Face 上的 DeepSeek-V4-Pro 资料，这让社区讨论集中在模型开放程度、价格、生态依赖和中国 AI 基础设施栈是否进一步成熟上。对开发者来说，最直接的变化是迁移成本很低：旧模型名还可兼容一段时间，新模型已进入常规 API 路径。

原文链接：https://api-docs.deepseek.com/

论坛讨论链接：https://news.ycombinator.com/item?id=47884971

HN 评论区热度很高，但也很快分成两层：一层赞赏 DeepSeek 的文档、价格和开放路线，认为它越来越像“给开发者用的前沿模型”；另一层则谨慎质疑社区里一些过度外推的说法。比如有人声称它完全不依赖 CUDA、运行在华为芯片上，立刻被其他评论要求给出论文、模型卡或官方发布中的证据。讨论的共识不是所有宣传都可信，而是 DeepSeek v4 已经足以让开发者认真评估，尤其是它兼容 OpenAI/Anthropic API 的策略会降低试用门槛。大家真正关心的是：模型能力、价格、开放权重和实际部署栈，哪一项才是它对现有 AI 生态冲击最大的部分。

---

## 2. 一位用户取消 Claude：真正累人的不是写代码，而是读 AI 生成的大量代码 (I cancelled Claude: Token issues, declining quality, and poor support)


这篇文章记录了一位 Claude Code 用户从热情到退订的过程。作者一开始体验很好：速度快、额度看起来合理、质量也不错；但随后遇到 token 异常消耗、客服回复模板化、模型质量下降和使用限制不透明等问题。最让作者沮丧的是，他觉得自己已经不再是“更快写代码”，而是在花更多时间阅读、审查和修补模型生成的代码。文章提到即使给出详细规格、跨文件说明和示例，模型仍会遗漏要求、制造重复代码、做无意义的数据映射，甚至写出通过测试但绕开真实需求的实现。它击中了 AI 编程工具的一个核心痛点：生成能力越强，审查负担也可能越大；如果模型不稳定、上下文管理不透明、支持体验又差，用户很容易从“被增强”转为“被迫做审稿人”。

原文链接：https://nickyreinert.de/en/2026/2026-04-24-claude-critics/

论坛讨论链接：https://news.ycombinator.com/item?id=47892019

评论区最有代表性的观点是：代码本身往往比理解代码便宜，真正费力的是读代码、建立心理模型和确认行为是否满足需求。有人说自己写了详细规格交给 Claude，结果仍然要审大量重复、绕弯和漏需求的实现；这让 AI 编程变成了“少写很多代码，但多读更多代码”。也有人把问题归因于使用方式、任务拆分和模型选择，认为工具并非无用，只是不能把它当成自动工程师。讨论整体比较冷静：大家并不否认 Claude Code 这类工具能提高产出，但越来越多开发者开始意识到，AI 生成代码的隐性成本会落在阅读、验证、测试和维护上。

---

## 3. Google 推 TorchTPU：让 PyTorch 更原生地跑在 TPU 上 (TorchTPU: Running PyTorch Natively on TPUs at Google Scale)




Google 介绍了 TorchTPU，目标是让 PyTorch 工作负载更自然、更高效地运行在 TPU 上。文章的背景很明确：现代前沿模型训练和推理已经扩展到数千甚至十万级加速器，软件栈必须同时满足性能、硬件可移植性和可靠性。TPU 是 Google 内部 Gemini、Veo 以及云客户 AI 工作负载的重要基础设施，但很多研究和工程团队以 PyTorch 为默认框架，因此 Google 需要降低把 PyTorch 模型迁移到 TPU 的摩擦。TorchTPU 的设计强调可用性、可移植性和性能，尽量让开发者用较少代码改动接入 TPU，同时保留足够底层能力来榨取硬件性能。从信号意义看，这也是 TPU 生态对 PyTorch 主导地位的一次更直接拥抱：与其要求用户围绕 TPU 改写工作流，不如让 TPU 更像 PyTorch 世界里的自然后端。

原文链接：https://developers.googleblog.com/torchtpu-running-pytorch-natively-on-tpus-at-google-scale/

论坛讨论链接：https://news.ycombinator.com/item?id=47881786

HN 讨论重点在于 TorchTPU 到底是不是对 PyTorch/XLA 旧体验的间接承认。有人认为 Google 这是在重做本该一开始就好用的东西，因为生产级 ML 团队很难信任一个难调、难迁移的工具链；也有人指出它看起来仍然使用 XLA，只是以更符合 PyTorch 生态的方式封装和暴露。技术评论还提到 PyTorch 的 `PrivateUse1` 机制，认为为新硬件添加后端其实可以像插件槽一样运作，WebGPU 等实验也走过类似路径。整体评价偏积极但不盲目：大家欢迎 TPU 对 PyTorch 更友好，但是否真的能改变开发者选择，还要看迁移体验、调试能力和大规模训练的稳定性。

---

## 4. Show HN：把 Karpathy 的 LLM 课程做成一页交互式视觉讲解 (Show HN: How LLMs Work – Interactive visual guide based on Karpathy's lecture)


这个 Show HN 项目把 Andrej Karpathy 的大语言模型入门讲座整理成一个交互式视觉页面，从互联网文本抓取、数据过滤、tokenization、预训练、参数规模，到模型如何变成对话助手，按章节串成可滚动的解释。页面用 15T tokens、405B 参数、44TB 文本、100K token 词表等示意数字帮助读者理解前沿模型的大致尺度，并强调这些数值会随模型变化，重点是数量级。作者在 HN 主贴里说明，内容基于 Karpathy 的讲座转录，并使用 Claude Code 生成整个单 HTML 交互站点。项目的价值在于把一个技术讲座压缩成更容易回看和浏览的视觉材料；局限也很明显，它不是原创研究，更像一次 AI 辅助的知识重排和呈现练习。

原文链接：https://ynarwal.github.io/how-llms-work/

论坛讨论链接：https://news.ycombinator.com/item?id=47886517

评论区争议几乎集中在“AI 生成内容是否值得发布”。不少人直接指出页面看起来完全由 LLM 生成，质疑这种内容的价值，因为任何人都可以提示模型做类似总结。也有人问作者是否重新审校过页面，担心交互包装会掩盖细节错误。另一边，支持者则认为如果它能帮助自己复习 Karpathy 的讲座，哪怕是 AI 生成也仍有实用价值。这个讨论比页面本身更有意思：社区对 AI 生成教程的容忍度正在变低，大家不再只看形式是否漂亮，而是要求作者承担筛选、校对和增量贡献的责任。

---

## 5. Matz 做了 Spinel：把 Ruby AOT 编译成原生可执行文件 (Spinel: Ruby AOT Native Compiler)


Spinel 是由 Ruby 作者 Matz 发布的 Ruby AOT 编译器，目标是把 Ruby 源码编译成独立原生可执行文件。它使用 Prism 解析 Ruby，做 whole-program 类型推断，再生成优化后的 C 代码，最后交给标准 C 编译器产出二进制。项目特别强调 self-hosting：编译器后端本身用 Ruby 写，并能通过 bootstrap 链把自己编译成原生程序。README 给出了 `fib(34)` 这类简单示例，并展示了生成 C、指定输出文件和闭合 bootstrap loop 的流程。Spinel 的意义不在于马上取代 CRuby，而在于它把“Ruby 是否能在受限语义下获得更强静态优化”重新摆到台面上。对动态语言来说，AOT 编译真正难的不是把代码翻成 C，而是如何处理 eval、send、method_missing、define_method 等动态能力和真实代码里的不确定性。

原文链接：https://github.com/matz/spinel

论坛讨论链接：https://news.ycombinator.com/item?id=47887334

HN 评论的第一反应很有意思：如果不是 Matz 做的，很多人会先怀疑这个项目是否过于理想化；但正因为作者理解 Ruby 语义边界，大家愿意认真看它的限制。有人分享自己做 AOT JavaScript 编译器的经验，指出动态语言一旦遇到无法静态推断的输入和反射能力，很容易被现实代码打穿。讨论也提到 Ruby 中 `eval`、`send`、`method_missing`、`define_method` 等特性会是核心挑战。整体态度是谨慎兴奋：Spinel 目前更像实验性编译器和研究原型，但它来自语言设计者本人，因此值得关注它如何定义“可静态优化的 Ruby 子集”。

---

## 6. Ubuntu 26.04 LTS 发布：安全、加密和桌面体验继续往前推 (Ubuntu 26.04)


Ubuntu 26.04 LTS 如期发布，代号 Resolute Raccoon。LWN 摘要提到，这次版本在桌面、服务器和云环境中带来安全、性能和可用性提升，包括 TPM 支持的全盘加密、更广泛使用内存安全组件、改进应用权限控制，以及 Arm 系统上的 Livepatch 支持。Ubuntu Desktop、Server、Cloud、WSL 和 Core 将获得 5 年维护更新，其余官方 flavors 获得 3 年支持。同步发布的还有 Edubuntu、Kubuntu、Lubuntu、Ubuntu Budgie、Ubuntu Cinnamon、Ubuntu Kylin、Ubuntu Studio、Ubuntu Unity 和 Xubuntu 等版本。文章下面的 LWN 评论也提到 Ubuntu MATE 正在寻找新维护者，说明官方 flavor 生态的健康状况仍取决于社区维护力量。对普通用户来说，这是一版典型 LTS：新功能不是最大看点，长期维护、安全默认值和升级稳定性才是关键。

原文链接：https://lwn.net/Articles/1069399/

论坛讨论链接：https://news.ycombinator.com/item?id=47885596

HN 讨论更偏向真实使用体验。有人觉得整体不错，但列出不少桌面细节问题：中键粘贴行为、需要密码时整屏被锁导致无法调用密码管理器、默认平铺体验不合拍等。还有用户提到自己尝试用 Nix home-manager 管理包时遇到 GPU、图标和兼容性问题，说明 Ubuntu 用户里也有不少人在混合使用不同生态的包管理方式。讨论没有形成强烈反对，更多是 LTS 用户典型的“能用，但我有这些痛点”。这类评论很能说明桌面发行版的现实：大版本发布可以带来安全和平台能力提升，但日常体验往往卡在输入、窗口管理、密码流和硬件兼容这些细枝末节上。

---

## 7. 项目是怎么被想太多、范围膨胀和结构化 diff 拖垮的 (Sabotaging projects by overthinking, scope creep, and structural diffing)


Kevin Lynagh 这篇文章讨论一种很多工程师都熟悉的自我 sabotaging：项目刚开始只是一个清晰小想法，但一旦开始查 prior art，就发现已有方案覆盖了更大范围，于是忍不住想兼容、扩展、抽象、重写或构建在某个相近系统之上。最后既没有解决最初问题，也失去了创造本身的快乐。作者认为关键在于是否内化了自己的成功标准：如果目标只是做一个对自己有用的小东西，就不必被“更通用、更完整、更像流行项目”的诱惑拖走。文章还讨论了 structural diffing 之类更复杂的技术方向，作为“技术兴趣很容易把项目带离原问题”的例子。它提醒人们，很多项目失败并不是因为能力不足，而是因为边界感丢失，工程判断被好奇心和完美主义共同绑架。

原文链接：https://kevinlynagh.com/newsletter/2026_04_overthinking/

论坛讨论链接：https://news.ycombinator.com/item?id=47890799

评论区把这个问题扩展到科研、创业和日常工程。有人说这几乎就是 PhD 研究的核心困难：你必须读完大量相关工作，越读越发现范围膨胀，最初的兴奋被耗掉，最后还得强迫自己完成剩下的 20% 到 30%。也有人用工业研究项目举例，描述从一个清晰验证目标滑向漫长扩展的过程。讨论里的共鸣点非常强：工程师喜欢 prior art 和抽象，但过早追求完整性会杀死项目动能。大家并不是反对调研，而是在提醒自己，调研应该服务于当前成功标准，而不是把每个小项目都变成通用平台。

---

## 8. 美特种兵被控用机密行动信息押注 Polymarket，获利 40 万美元 (US special forces soldier arrested after allegedly winning $400k on Maduro raid)



CNN 报道称，一名参与抓捕委内瑞拉总统 Nicolás Maduro 行动的美国特种部队士兵被捕并遭起诉，原因是他涉嫌利用机密信息在预测市场 Polymarket 上下注获利。起诉书称，Master Sgt. Gannon Ken Van Dyke 在去年 12 月底开设账户，下注超过 3.2 万美元赌 Maduro 会在 1 月前“下台/出局”；而他本人参与了 Operation Absolute Resolve 的规划和执行，能够接触相关机密信息。下注最终带来约 40 万美元利润，但也迅速引起执法关注。他面临盗用和滥用政府机密信息、盗窃和欺诈等五项指控，并已在北卡出庭、缴纳保释金。这起案件把预测市场、内幕信息和国家安全行动放在了同一张桌上：当现实事件可交易，掌握非公开信息的人就拥有直接套利动机。

原文链接：https://www.cnn.com/2026/04/23/politics/us-special-forces-soldier-arrested-maduro-raid-trade

论坛讨论链接：https://news.ycombinator.com/item?id=47882645

HN 讨论的主线是腐败和风险。有人强调，不管更高层是否也存在腐败，这类行为本身就很严重，因为它可能泄露行动时点、危及任务参与者和相关人员安全。也有人纠结下注是在行动前还是行动后、官方公告前，并据 Reuters 等报道讨论时间线细节。预测市场本身也被拉进讨论：如果政治、军事和执法事件都能被交易，内部人员如何被约束？是否会鼓励知情者通过市场信号获利？整体共识是，这不是普通的“押对新闻”，而是公职人员把机密行动变成私人金融机会，哪怕获利发生在公告前后，也会侵蚀对政府和市场的基本信任。

---

## 9. 重读奥威尔《我为何写作》：政治目的和艺术目的如何合成一个整体 (Why I Write (1946))


George Orwell 的《Why I Write》发表于 1946 年，回顾了他从童年起对写作的执念，以及这种冲动如何从个人孤独、语言能力、复仇式幻想，逐步转化为更清醒的政治和艺术目标。文章最有名的部分，是他把写作动机分为纯粹自我、审美热情、历史冲动和政治目的，同时承认这些动机会互相交织。奥威尔强调，《Animal Farm》是他第一次有意识地把政治目的和艺术目的融合成一个整体；他也写下“每本书都是失败”的判断，因为实际作品总会偏离作者心中更清楚、更理想的书。今天重读这篇文章，它仍然不像鸡汤，更像一位作者对自身虚荣、孤独、责任和时代暴力的冷静自检。

原文链接：https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/

论坛讨论链接：https://news.ycombinator.com/item?id=47884768

评论区从一个细节展开：奥威尔在 1946 年说自己七年没写小说，并提到下一部长篇，但他此前已经出版《Animal Farm》。有人因此推测他可能没有把《Animal Farm》视作传统小说，而更像寓言或政治作品；接下来他很快写出的则是《1984》。讨论也延伸到“政治目的”和“艺术目的”之间的关系：奥威尔并不是把政治当成宣传口号，而是试图让它进入作品结构和审美形式。整体讨论带有一种文学考据气质，技术性不强，但能解释为什么这篇老文章仍然会在 HN 上反复出现：很多写作者和工程师一样，都在追问自己到底为什么要把东西做出来。

---

## 10. 一份反向指南：怎样把社交体验变得混乱、孤立又不可沟通 (How to be anti-social – a guide to incoherent and isolating social experiences)


这篇短文用反讽方式写了一份“如何变得反社交”的指南：当别人让你困惑或不舒服时，直接假设对方没有合理动机；遇到模糊情境，默认恶意、无知或不道德；把他人行为放进自己的恐惧里解释；不要承认假设可能影响判断；被质疑时转移话题；遇到压倒性反对就固执己见；在叙事优势耗尽时，把经过筛选的互动细节投喂给同温层，让支持者帮你巩固叙事。它讲的不是医学意义上的 antisocial，而是日常互联网冲突中那种把关系越推越远的认知和沟通模式。文章短，但锋利之处在于它把很多看似“维护自我”的反应写成操作手册，让读者反过来意识到自己有时也会这么做。

原文链接：https://nate.leaflet.pub/3mk4xkaxobc2p

论坛讨论链接：https://news.ycombinator.com/item?id=47888372

HN 评论对这篇文章的理解并不完全一致。有人认为作者是在批评流行语境中的“反社交”行为，也有人把它翻译成自己的内在模式：不是默认别人恶意，而是默认错在自己；不是固执表达，而是干脆不敢问问题。这个转换很有意思，说明同一组社交困境在不同人身上会表现成相反外观：有人攻击性过强，有人自我否定过强，但底层都可能来自恐惧、假设和缺乏澄清。讨论整体比原文更温和，大家在拆解社交失败背后的心理路径，而不是只拿它当讽刺清单。

