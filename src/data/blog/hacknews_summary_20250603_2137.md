---
title: '大学生妙手：自制“玩具版”Wireshark，代码致敬国际学生！ | Hacker News 摘要 (2025-06-03)'
author: 'hacknews'
description: ''
pubDatetime: 2025-06-03 21:37:38.696+08:00
tags:
  - Wireshark
  - student_project
  - AI
  - skepticism
---

---

## 1. 大学生妙手：自制“玩具版”Wireshark，代码致敬国际学生！ (Show HN: A toy version of Wireshark (student project))

一个来自普通大学生的创新：一款名为Vanta的轻巧快速命令行网络行为分析工具诞生了。它能精准重构HTTP、DNS、TLS等协议流程，提取结构化网络活动，与功能全面的Wireshark不同，Vanta追求简洁和易于脚本化。更有趣的是，这款工具在MacBook Air M1上开发完成，是开发者对那些在政治压力下支持国际学生的大学（如哈佛、MIT、CMU）的特殊感谢和回应。开发者表示，这是他用代码而非请愿书来表达心声的方式。Vanta或许是“玩具版”，但它真实而充满心意，展现了技术爱好者的独特情怀。

原文链接：https://github.com/lixiasky/vanta

论坛讨论链接：https://news.ycombinator.com/item?id=44159758

论坛上关于 Vanta 项目的讨论中，有评论者赞扬其意义非凡，并将其与 Linus Torvalds 发布 Linux 的首次公告类比。作者回应称自己只是中国一名非计算机专业的本科生，创建此工具是为感谢勇敢的学校，感谢大家的肯定。论坛管理员为减少关于项目名称的跑题，编辑了部分评论，作者对此表示感谢。其他评论者赞扬 Vanta 目标清晰、无依赖性，认为这在同类工具中很罕见。有人建议添加 PCAP 实时捕获功能，使其成为 Wireshark 的命令行补充，还有人分享 Go 语言适合构建此类工具的经验，认为其定制和调试灵活性优于通用工具。作者认可 Go 的优势，并对未来实现实时捕获和调试控制等功能表示兴趣。也有评论指出“轻量版 Wireshark”可能是一个潜在的市场需求。作者表示，最初只是想做力所能及且有意义的事，填补空白是意外收获。

---

## 2. AI怀疑论者都是疯子 (My AI skeptic friends are all nuts)

![AI怀疑论者都是疯子 ](https://fly.io/blog/youre-all-nuts/assets/whoah.png)

![AI怀疑论者都是疯子 ](https://fly.io/blog/youre-all-nuts/assets/code-quad.png?2/3&center)

![AI怀疑论者都是疯子 ](https://fly.io/static/images/thomas.webp)

一位经验丰富的开发者撰文，有力驳斥同行对大模型（LLMs）辅助编程的质疑。他指出，结合智能代理的LLMs已是主流，能自动完成大量重复性编码、测试及环境配置等繁琐工作，极大解放生产力，让开发者聚焦核心价值。尽管存在代码质量和幻觉等问题，但通过工具链和人工审查可控，责任仍在开发者。作者强调，AI将是软件业继互联网后最重要的进展之一，开发者应积极适应这一深刻变革，否则将面临淘汰风险。这不再是遥远的未来，而是正在发生的现实。

原文链接：https://fly.io/blog/youre-all-nuts/

论坛讨论链接：https://news.ycombinator.com/item?id=44163063

关于使用大型语言模型（LLM）辅助编程的讨论在论坛展开。一位评论者分享了他从最初的怀疑到沉迷，再到因代码质量差而失望，最终摸索出新的使用方式的历程。他发现，如果将LLM视为需要严格控制的工具或协作者（而非简单的命令执行者），并辅以测试和明确的意图说明，它能显著提升效率并生成质量不错的代码。他认为，对这项技术持负面看法的人可能忽视了它作为提升工程师生产力潜力的可能性，并将其比作过去的技术变革。

另一位评论者则表示，他对一个问题越熟悉，使用AI助手的频率就越低。他主要在学习新语言或框架时使用AI。对于复杂的代码，为AI提供必要的上下文非常耗时且结果不确定，不如自己动手写。他认为许多负面评论源于AI过度炒作而实际好用的应用不多，并指出提示词编写有时比编程还难，且AI输出结果的可用性存疑。

还有评论提到，这让人想到管理中的一个重要经验：最擅长但最重要的任务往往最难委派（给LLM）。

总的来说，大家普遍认为LLM辅助编程并非万能，需要正确的使用方法和预期，其效用取决于具体场景和用户的引导能力。

---

## 3. 无人问津时如何创作：从梵高到爆红歌手的启示 (How to post when no one is reading)

创意道路往往漫长寂静，许多创作者在成名之前，作品可能经历数年甚至数十年的无人问津期。正如梵高在世时未能得到认可，在默默无闻中坚持创作是巨大的挑战。如何在这种“零反馈”状态下持续输出？歌手Mike Posner的经历颇具启示。他从6岁起坚持写歌十年，作品初期只有家人听过。直到大学时，单曲《Cooler Than Me》意外爆红，冲上Billboard单曲榜第六名。然而，随后的七年里，他试图复制成功却陷入低谷。最终，他醒悟过来：与其追逐热门，不如创作自己真正热爱、认为好的音乐。这种回归初心的转变，不仅让他走出困境，重获成功，也凸显了创作自我认同内容的重要性。文章指出，专注于创作自己喜欢的内容，即使暂无观众也能维持热情、提升质量，并自然吸引志同道合的粉丝。更可将早期作品视为未来的“宝藏库”，当影响力扩大时，新粉丝会回溯这些积累。因此，每一次看似石沉大海的发布，都是为未来的爆发积蓄能量。坚持创作自己热爱的东西，静待被发现。

原文链接：https://www.jeetmehta.com/posts/thrive-in-obscurity

论坛讨论链接：https://news.ycombinator.com/item?id=44155746

一篇论坛讨论围绕个人在互联网上创作的动机与现实展开。最初的发帖者分享说，年轻时曾渴望成名，但后来放弃追逐名声，转而只为兴趣和项目而创作，从中找到了快乐。他认为自己的网站是“旧的、美好的互联网”的一部分，没有广告和功利需求。不过，他也指出这种纯粹的创作自由在他经济稳定之后才得以实现，暗示“做喜欢的事”可能是一种经济上的奢侈。

有回复者认同为自己创作的理念，但提出如今互联网已从当年的“池塘”变成“海洋”，个人创作极难获得关注，甚至认为现实世界的实体推广（如分发传单或独立出版物）可能比网络更有效。另有观点认为，虽然互联网用户和内容激增，内容被看到的机会比例可能没变，只是“成功”的定义被夸大成了巨大的粉丝量。然而，也有评论反驳说，在充斥机器人、大型语言模型和用户极短注意力（只有0.5秒快速划过）的时代，虽然眼球多了，但每个访问者的价值远不如九十年代互联网上来自垂直社区或分类目录的精准访客。讨论中还提及在街头派发实体CD的行为，及其衍生的诈骗问题，并有人类比美国在线（AOL）曾通过邮寄免费CD取得巨大成功的模式，认为实体分发（结合现代技术如二维码）或许仍有可取之处。

---

## 4. 普林斯顿“恶搞”编程语言INTERCAL 原始编译器源代码重见天日 (The Princeton INTERCAL Compiler's source code)

![普林斯顿“恶搞”编程语言INTERCAL 原始编译器源代码重见天日 ](https://esoteric.codes/images/forty-four.png)

![普林斯顿“恶搞”编程语言INTERCAL 原始编译器源代码重见天日 ](https://esoteric.codes/images/logos/CC_logo_hires.jpg)

![普林斯顿“恶搞”编程语言INTERCAL 原始编译器源代码重见天日 ](https://esoteric.codes/uploads/c164fd0b-de22-4dd6-919e-881b023dbe6d/ical-header.png)

计算机世界迎来一个有趣发现：普林斯顿大学1972年诞生的传奇恶搞编程语言INTERCAL，其原始编译器源代码近日被找到并首次公开。这款语言由Don Woods和Jim Lyon为戏谑传统编程而生，堪称首个“深奥编程语言”（esolang），以刻意制造困难、语法怪诞、甚至需要用“请示”（PLEASE）指令与“情绪化”的解释器互动为特色。INTERCAL虽反常规，却深远影响了后续esolang发展。过去我们熟知的多是1990年衍生的C-INTERCAL等版本，与原版（如标志性的“从何而来/COME FROM”语句非原版所有）有所不同。此次公开的源码来自Don Woods偶然发现的旧打印件，经转录后已能在现代系统上运行这枚SPITBOL编写的编译器。其数学运算全靠字符串处理，一次除法需耗时30秒，令人称奇。这批珍贵代码已上传至GitHub，让技术爱好者能近距离感受这位充满个性的esolang鼻祖。

原文链接：https://esoteric.codes/blog/published-for-the-first-time-the-original-intercal72-compiler-code

论坛讨论链接：https://news.ycombinator.com/item?id=44155247

论坛上关于INTERCAL编程语言的讨论始于其原始编译器源代码被找回的消息。有评论者推荐了详细介绍INTERCAL的播客。一位用户认为，尽管INTERCAL常被视为深奥语言，但其某些功能（如“COME FROM”类似事件驱动，“PLEASE”类似Shell的SUDO）在现代编程中有所体现，甚至认为其语法比正则表达式更清晰。

这一观点引发了关于正则表达式语法的辩论。不同于描述正则语言本身，评论指出正则表达式的语法，尤其包含平衡括号等结构时，并非正则语言。讨论深入探讨了为何平衡括号会使语言非正则：识别它们需要记住不同层级的嵌套状态，这超出了有限自动机的能力，相当于需要无限内存或堆栈。多位参与者提到了形式语言理论中的“泵引理”（Pumping Lemma），并简要解释了如何用它来证明包含平衡括号的语言（如简单括号匹配）不是正则语言。讨论从一种历史语言的恢复迅速转向了核心计算机科学理论话题。

---

## 5. Kan：开源项目管理新秀，叫板 Trello (Show HN: Kan.bn – An open-source alterative to Trello)

![Kan：开源项目管理新秀，叫板 Trello ](https://private-user-images.githubusercontent.com/30578846/450249260-5f7b6ad3-f31d-4b45-93dc-0132b3f2afd4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg5NTY0MzksIm5iZiI6MTc0ODk1NjEzOSwicGF0aCI6Ii8zMDU3ODg0Ni80NTAyNDkyNjAtNWY3YjZhZDMtZjMxZC00YjQ1LTkzZGMtMDEzMmIzZjJhZmQ0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjAzVDEzMDg1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWViYTVkMmE1Y2MyNTQzYWYxZjY3YzYxNGRhM2JlYWE4MTdiMWQzOWZhMTI1NDllNTBjMzU2MmYwYWU2ZThjNTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.y7Gxnqi7ga6rC64zzgH60vOY63sCVbG4KpGMA1SIvYc)

![Kan：开源项目管理新秀，叫板 Trello ](https://private-user-images.githubusercontent.com/30578846/419600409-f728f52e-bf67-4357-9ba2-c24c437488e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg5NTY0MzksIm5iZiI6MTc0ODk1NjEzOSwicGF0aCI6Ii8zMDU3ODg0Ni80MTk2MDA0MDktZjcyOGY1MmUtYmY2Ny00MzU3LTliYTItYzI0YzQzNzQ4OGUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjAzVDEzMDg1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVkNDU0Yjc0YmY4OGQ2ZmQ1MDgwNWNlNjc4ZTgxMzJlMTZjN2JlYjljMzY2MDZmY2UzMjM2N2FmOTlkNzU2OGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.A_74nIZW6ZnE9l8pfe9SMRIpX9gbI2XPP7UiQdT-97s)

近日，一款名为 Kan 的全新开源项目管理工具亮相，迅速吸引了寻求 Trello 替代方案的科技爱好者们的目光。Kan 以其开放源代码的特性，提供了高度灵活且可定制的项目管理体验，旨在满足不同团队的需求。作为一款社区驱动的项目，Kan 热烈欢迎全球的技术人员根据贡献指南提交代码或改进建议，共同完善这款工具。该项目在 AGPLv3 许可证下发布，保障了用户的自由使用和修改权利。对于使用者而言，可以通过环境变量对 Kan 进行便捷配置；如在使用过程中需要任何支持或希望与社区交流，可以通过官方提供的电子邮件地址或加入专属的 Discord 服务器获得帮助。Kan 的出现，为开源社区和项目管理领域注入了新的活力。

原文链接：https://github.com/kanbn/kan

论坛讨论链接：https://news.ycombinator.com/item?id=44157177

在论坛上，有用户发布了其开发的开源看板工具 kanbn，表示因未能找到满意的 Trello 开源替代品而自行开发。该工具免费、快速、高度自定义，支持自托管或云服务，并提供了代码仓库、云服务和路线图链接，希望获得反馈和建议。

讨论者们很快就对这款新工具与其他现有开源看板工具（如 Wekan, Taiga, Kanboard）的对比产生了兴趣。一些用户分享了自己寻找自托管看板工具的经历，认为许多开源替代品往往不如 Trello，有时甚至因功能过于丰富而影响使用体验，或更像是通用项目管理工具。

然而，也有讨论者对某些特定工具给予了积极评价，例如有人力赞 Plane 甚至认为其优于 Trello。另有用户提到了 Vikunja，该工具收到了褒贬不一的反馈：一位用户觉得其用户体验、键盘支持和移动版本有待提升；而另一支使用团队则表示，尽管有一些小问题，但 Vikunja 总体运行良好，已使用了数年并打算参与贡献。讨论中还提及了其他开源选项如 plank。

整体而言，讨论反映了开源社区在创建优秀看板工具方面的探索与挑战，以及现有工具的多元化发展和各自的优缺点。

---

## 6. Cloudflare 推出 OAuth 框架：Claude AI 助力，安全先行 (Cloudlflare builds OAuth with Claude and publishes all the prompts)

![Cloudflare 推出 OAuth 框架：Claude AI 助力，安全先行 ](https://avatars.githubusercontent.com/u/196041342?s=64&v=4)

![Cloudflare 推出 OAuth 框架：Claude AI 助力，安全先行 ](https://avatars.githubusercontent.com/u/122797136?s=64&v=4)

![Cloudflare 推出 OAuth 框架：Claude AI 助力，安全先行 ](https://avatars.githubusercontent.com/u/49571477?s=64&v=4)

Cloudflare Workers平台迎来新动向！近日，Cloudflare推出了一款全新的OAuth 2.1 Provider框架库，采用TypeScript开发，支持安全增强的PKCE流程，并专为Workers环境设计。作为一款仍处于非常早期的预发布软件（截至2025年3月），该库旨在简化开发者在Workers上构建OAuth服务提供商的过程。

该库能够帮助开发者处理OAuth认证请求和令牌交换，并与Workers KV存储（需要绑定`OAUTH_KV`命名空间）无缝集成，用于安全管理令牌数据。开发者需要自行实现用户授权同意页面，但库提供了辅助方法来解析请求和完成授权流程。库支持配置API路由、默认请求处理器，并提供令牌交换回调等高级功能，方便处理如上游服务令牌管理等复杂场景。

值得关注的是，该框架库在开发过程中大量使用了AI模型Claude进行辅助，随后经过Cloudflare工程师严格的安全与标准评审。这不仅体现了Cloudflare在开发者工具领域的持续投入，也展示了在确保安全和标准遵从的前提下，对AI辅助开发新模式的积极探索。

原文链接：https://github.com/cloudflare/workers-oauth-provider/

论坛讨论链接：https://news.ycombinator.com/item?id=44159166

论坛上，有用户通过代码提交记录发现Claude代码中存在一个“备份”加密密钥的设计漏洞，质疑其影响端到端加密，并提出非专家难以发现此类问题。由此引发讨论：AI代码助手是否能提高效率？有评论认为专家应使用LLM辅助编写代码，再仔细检查修正，即使代码可能有安全缺陷（如示例中的认证流程），仍比从零开始快。但也有评论反驳，认为调试和指导LLM反而更耗时，甚至称节省时间是“营销谎言”。另有观点指出，AI对某些特定任务（如React组件）效率更高，可能因训练数据充足。同时，也有人强调专家工作核心是思考和规划，而非仅仅打字编写代码。这场讨论反映了开发者对AI辅助编程效率、安全性及使用方式的不同看法。

---

## 7. 别做“工具人”：你的“有用”不等于“被重视” (If you are useful, it doesn't mean you are valued)

![别做“工具人”：你的“有用”不等于“被重视” ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4749ad8a-f117-4dd8-87f2-62f4cf3bbd64_5760x3840.jpeg)

![别做“工具人”：你的“有用”不等于“被重视” ](https://substackcdn.com/image/fetch/w_520,h_272,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4749ad8a-f117-4dd8-87f2-62f4cf3bbd64_5760x3840.jpeg)

职业生涯中，区分“有用”（高效完成任务）与“被重视”（参与战略决策、驱动方向）的差异至关重要。升职加薪等表面信号常令人混淆，需深入辨别。“有用”者擅长执行，是可靠的“补缺”者，报酬源于任务交付。“被重视”则意味着获得成长机会，贡献更具战略性。作者分享：公司裁员时，他因被视为未来（数字化转型）核心人物，获总薪酬50%挽留奖金，体现了被重视。而在另一份工作中，他虽业绩出色、报酬优厚，但未能参与战略，感到停滞，最终离职。认清这一区别，能更好地规划职业道路，不止做个高效的“工具人”。

原文链接：https://betterthanrandom.substack.com/p/if-you-are-useful-it-doesnt-mean

论坛讨论链接：https://news.ycombinator.com/item?id=44156935

论坛上的讨论聚焦于职业发展中“有用”（useful）与“有价值”（valued）的概念。有观点认为，这两个词不够准确，更应理解为个人在不同岗位上的适应性与局限性。商业环境中，大多数人只是基于特定需求的“有用”，这种有用性会随环境改变，即使是资深人士也可能因此失业，说明其价值并非永恒。

另有观点反驳称，“有用”是岗位功能层面的可替代性特质，而“有价值”则指成为领导层信任的战略伙伴，贡献超越职责范围。这种价值体现为信任，是职业生涯初期晋升后的关键驱动力，而非仅仅执行任务的“有用性”。许多初入职场者专注“有用”，但后期发展更依赖“有价值”。

还有讨论者赞同，超越初级阶段的职业发展更依赖于“有价值”。许多资深技术人员止步不前，正是因专注于完成具体任务（“有用”）而非战略思考。仅靠提升执行效率难以持续发展。有趣的是，有时提升“有价值”反而会减少直接的“有用性”，例如通过自动化和知识分享，个人在具体执行层面的角色减少，但整体战略价值提升。

---

## 8. 一块木板造惊喜：网友自制“最简椅”走红 (I made a chair)

![一块木板造惊喜：网友自制“最简椅”走红 ](https://milofultz.com/chair.jpg)

有网友近日分享了一次有趣的DIY经历：他根据网上找到的一份教程，自己动手制作了一把“可能是最简单的椅子”。这把创意椅子仅使用了一块8英尺长、2x12英寸规格的木板，通过几个非常基础的切割完成。令人称奇的是，尽管作者手头只有圆锯和多功能振动工具——他本人认为这些是“完全不合适的工具”——整个制作过程却出奇地迅速，并未花费太多时间。完成切割后，作者还用封边剂处理了木材末端，确保了椅子的耐用性。最终成品效果出人意料地好，功能实用，而且作者本人坦承，相比家里的其他椅子，他竟然更喜欢这把外观朴实的自制椅子。这个小小的成功故事不仅展示了DIY的乐趣与无限可能，也证明了有时最简单的设计和有限的工具，反而能激发出意想不到的创意和令人满意的成果，引发人们对身边各种简易发明的兴趣。

原文链接：https://milofultz.com/2025-05-27-i-made-a-chair.html

论坛讨论链接：https://news.ycombinator.com/item?id=44142259

论坛中，有用户推荐了设计师Enzio Mari的“自设计”家具，只需基础工具和木板即可制作。有评论审阅其设计图后认为，部分设计不够坚固，承重依赖螺钉或木材角落，可靠性不如榫卯。另一款文中提到的简洁椅子也遭质疑耐用性，因铰链和触地处易磨损。但有人反驳称这类椅子很耐用。有用户为Mari辩护，强调其经验和设计有理。另有评论分析，认为老设计可能不适应现代人体重或便宜木材，用钉结构更易失效。讨论还提及了类似Segal方法的简易建造。

---

## 9. 设计师福音：Onlook推出可视化代码编辑器Cursor (Show HN: Onlook – Open-source, visual-first Cursor for designers)

![设计师福音：Onlook推出可视化代码编辑器Cursor ](https://github.com/onlook-dev/onlook/raw/main/assets/code-connect.png)

![设计师福音：Onlook推出可视化代码编辑器Cursor ](https://github.com/onlook-dev/onlook/raw/main/assets/architecture.png)

![设计师福音：Onlook推出可视化代码编辑器Cursor ](https://github.com/onlook-dev/onlook/raw/main/assets/web-preview.png)

知名开源项目Onlook推出了面向设计师的“Cursor”工具，这是一个可视化优先的代码编辑器，旨在革新使用Next.js和TailwindCSS进行网页及原型开发的方式。用户可在浏览器DOM中直接进行可视化编辑，并通过AI聊天辅助创建和修改项目。工具支持代码与设计实时同步、拖拽布局及侧边代码预览等功能。Onlook Cursor作为开源替代方案，正从桌面端转向Web平台，并积极寻求社区贡献者共同打造，为开发者带来高效直观的建站体验。

原文链接：https://github.com/onlook-dev/onlook

论坛讨论链接：https://news.ycombinator.com/item?id=44127653

论坛上围绕一个新型可视化AI开发工具展开讨论。有用户表示，相较于其他封闭式的可视化AI工具，该工具通过在代码之上构建可视化层，并集成了浏览器内代码编辑器，成功弥合了设计与开发的鸿沟。它提供了类似Webflow的实时可视化编辑体验，同时允许用户随时深入代码，这对于习惯于Cursor和Windsurf等工具的用户尤其有吸引力，他们期待未来能导入现有项目。

开发者回应称，平衡满足有经验的程序员（提高效率）和非编码者（轻松创建）的需求是主要挑战。他们努力让可视化层更完善，但指出AI生成的代码（如flexbox）对于不熟悉代码结构的设计师来说可能难以编辑。开发者解释，为了避免UI界面对初学者造成压倒性感觉，他们将部分设计工具移至“次要”交互层，同时确保专业用户仍能方便找到。他们确认工具底部已有终端访问功能，并正努力恢复SSH访问，以便更好地支持外部编辑器用户。

有用户从更宏观角度看，认为该工具代表着将SaaS功能本地化、摆脱超大规模云服务商束缚的积极趋势，并与基础模型的竞争相关联。但也有用户对此提出疑问，指出该工具本身是基于浏览器的。

