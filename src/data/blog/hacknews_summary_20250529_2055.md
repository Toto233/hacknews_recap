---
title: '神经网络炼成C代码，速度狂飙1744倍！ | Hacker News 摘要 (2025-05-29)'
author: 'hacknews'
description: ''
pubDatetime: 2025-05-29 20:55:19.575+08:00
tags:
  - Compiler_Explorer
  - digital_archaeology
  - Level_Design
  - 数字地址
---

---

## 1. 神经网络炼成C代码，速度狂飙1744倍！ (Compiling a neural net to C for a speedup)

![神经网络炼成C代码，速度狂飙1744倍！ ](https://slightknack.dev/content/conway-tui.png)

最近，一位充满好奇心的程序员完成了一个酷炫的实验：他用神经网络学会了经典游戏“康威生命游戏”的演化规则，并找到了让它快到飞起的秘诀！受谷歌研究启发，他构建了一种特殊的神经网络，用逻辑门取代了传统的激活函数，成功让AI掌握了游戏规则。训练过程虽有挑战，但在解决网络接线和初始化等关键问题后，AI表现出色。更巧妙的是，他将学到的逻辑电路提取出来，巧妙地编译成精简高效的C语言代码，并利用了C语言的位并行处理能力和优化技术。结果令人惊喜：在512x512的网格上，这个C语言实现的逻辑电路比原始Python JAX实现快了整整1744倍！这项突破性实践展示了通过神经网络学习并“固化”为高效底层逻辑的可能性，为AI与传统优化结合加速计算开辟了新思路，未来或许能应用于更复杂的模拟等有趣领域。

原文链接：https://slightknack.dev/blog/difflogic/

论坛讨论链接：https://news.ycombinator.com/item?id=44118373

论坛上，关于可微分逻辑门网络的讨论聚焦于固定接线问题。发帖者认为其有趣但固定接线是缺点，并表示尝试学习可变接线但遇阻。有评论建议采用稠密连接辅以惩罚实现稀疏，或将电路视为可微分“场”求解。一位参与者称已找到可伸缩学习接线方法，希望能交流。另一位也曾尝试扩展学习接线规模，但在深层网络上遭遇收敛难题。还有人提到Weight Agnostic Neural Networks技术或许适用。讨论最后指出该技术已被申请专利，并对其创新性提出疑问。

---

## 2. 关卡设计宝典：3D游戏世界的幕后指南，等你来探索！ (The Level Design Book)

有一个名为“The Level Design Book”的网站。该网站旨在系统性地整理3D电子游戏关卡设计领域的知识，以易于理解、保持更新且具有批判性的方式呈现，适合不同经验水平和使用各种游戏引擎的设计师参考学习。网站醒目位置标明该项目“正在大规模建设中”，提示结构和内容可能变动较大。首页提供了阅读入口，涵盖了从关卡概念到制作流程、案例分析、实用工具、资源链接及针对教育者的指南等多个方面内容，结构清晰，便于用户快速查阅。

原文链接：https://book.leveldesignbook.com

论坛讨论链接：https://news.ycombinator.com/item?id=44086973

论坛上关于“level design”的讨论主要围绕其在游戏领域的含义。有用户指出，该词容易与电子工程或组织层级设计混淆。一些评论者认为，现代游戏关卡设计已成为复杂的工业流程，不如早期《毁灭战士》或《半条生命》时期有趣。然而，也有观点认为，关卡设计仍是一项迷人的爱好，以前景广阔的Quake 1社区及精彩的Arcane Dimensions项目为例，说明业余爱好者依然可以创作出富有艺术性和乐趣的作品，并且当前可获得的工具和资源比以往任何时候都多。但另一位用户指出，除了《反恐精英》等少数例外，现代AAA级第一人称射击游戏已不再普遍支持用户地图和模组，这与《反恐精英1.6》等老游戏时代的用户创作环境已有很大不同。

---

## 3. Rust 重写 Electron Mac 应用：性能飞跃还是重复造轮子？ (Show HN: I rewrote my Mac Electron app in Rust)

![Rust 重写 Electron Mac 应用：性能飞跃还是重复造轮子？ ](https://cosmos-media-content.s3.us-east-1.amazonaws.com/public-content/desktop-docs/dd_image_search_couple_273.webp)

![Rust 重写 Electron Mac 应用：性能飞跃还是重复造轮子？ ](https://cosmos-media-content.s3.us-east-1.amazonaws.com/public-content/desktop-docs/dd_search_street_art_cropped.webp)

![Rust 重写 Electron Mac 应用：性能飞跃还是重复造轮子？ ](https://cosmos-media-content.s3.us-east-1.amazonaws.com/public-content/desktop-docs/dd_search_golden_hour.webp)

科技界最近亮相一款有趣的新工具——专为Mac用户打造的AI文件探险家Desktop Docs。它彻底改变了文件查找方式，不再依赖文件名，而是通过强大AI引擎直接解析图片和视频的实际内容。用户可用自然语言轻松搜索“夕阳下的照片”或“有狗的视频”，甚至上传参考图查找相似文件，搜索结果快如闪电，通常不到0.3秒即可呈现。更令人安心的是，所有AI分析都在你的Mac本地设备上完成，确保数据100%私密安全。Desktop Docs已赢得全球数千名创意人士和50多家制作工作室的信赖，支持HEIC、MP4等多种主流格式。该应用采用一次性购买模式，售价99美元，告别订阅烦恼，目前仅支持搭载Apple Silicon（M1/M2/M3）芯片的Mac。它正帮助专业人士们摆脱文件管理的繁琐，将数字世界的混乱转化为有序，让创意和工作更聚焦、更高效，生活也因此更有趣。

原文链接：https://desktopdocs.com/?v=2025

论坛讨论链接：https://news.ycombinator.com/item?id=44118023

论坛上的一场讨论围绕软件开发的“绿地效应”展开。有观点认为，重写应用，特别是首次进行大型重写，无论采用何种新技术，通常都能带来更好的体验和技术改进。这源于开发者能基于经验做出更优决策，清理旧有技术债务和不佳设计，以及从全新开始所带来的积极能量。这种效应即使在小规模项目或尝试新语言/框架时也普遍存在。

反驳声音则强调技术选择的决定性作用，例如，有评论者断言，将任何 Rust 应用改写为 Electron 应用，即便精心重构，其在体积、速度和资源消耗上都会比原版更差。

对此，另一方反驳称结果并非必然。对于桌面应用，UI 表现至关重要，Electron (基于 Chrome) 在图形渲染和系统集成方面的深厚优化使其具有优势，虽然理论上 Rust 可避免 Electron 开销以求更快，但典型的 Rust UI 工具包从用户感知上看未必一定超越 Electron。

还有参与者分享 Rust 图形开发经验，称现代硬件下即使 CPU 渲染也能实现低延迟，并推测这因 Rust 直接绘制屏幕避免了 web 技术的复杂中间层；但同时也有评论质疑 UI 渲染绕过 GPU 的可能性，认为所有 UI 最终都需要通过 GPU 呈现。

---

## 4. 告别键盘：资深开发者最重要的工具竟是笔和纸 (As a developer, my most important tools are a pen and a notebook)

![告别键盘：资深开发者最重要的工具竟是笔和纸 ](https://hamatti.org/assets/img/posts/as-a-developer-my-most-important-tools-are-a-pen-and-a-notebook/1.png)

![告别键盘：资深开发者最重要的工具竟是笔和纸 ](https://hamatti.org/assets/img/posts//as-a-developer-my-most-important-tools-are-a-pen-and-a-notebook/as-a-developer-my-most-important-tools-are-a-pen-and-a-notebook-cover.png)

资深软件开发者Juha-Matti Santala近日分享了他的独门秘籍：一支笔和一本笔记本是他最重要的工具。他认为，虽然写代码在电脑上完成，但更关键的是思考“写什么”。离开屏幕、用笔和纸构思和解决问题效率更高，能将抽象想法转化为具体草图或流程图，有效发现思维盲点。通过书写来解释代码，也能帮助优化设计、找出错误。这些手写笔记不仅是思考过程的载体，更是宝贵的知识积累，方便日后回顾。这种结合传统工具的方式，为现代科技工作者提供了新思路。

原文链接：https://hamatti.org/posts/as-a-developer-my-most-important-tools-are-a-pen-and-a-notebook/

论坛讨论链接：https://news.ycombinator.com/item?id=44113210

论坛讨论了改变工具或环境如何提升注意力和创造力。核心观点是，切换模式会强制大脑以不同方式思考，打破惯性。有用户提到“不流畅性”概念，即增加摩擦能使人脱离自动驾驶。具体方法包括：从数字转向纸笔规划；改变软件主题或关闭语法高亮，迫使大脑更专注代码；将代码打印出来用笔批注，或远离电脑阅读；甚至通过切换操作系统增加新鲜感和摩擦。这些都表明，关键在于如何通过变化唤醒大脑，促进更深入的思考和认知参与。

---

## 5. Rust 新伙伴：寄居蟹 Terres 引爆技术圈！ (Visualize and debug Rust programs with a new lens)

![Rust 新伙伴：寄居蟹 Terres 引爆技术圈！ ](https://firedbg.sea-ql.org/img/FireDBG.png)

![Rust 新伙伴：寄居蟹 Terres 引爆技术圈！ ](https://firedbg.sea-ql.org/img/Terres.png)

![Rust 新伙伴：寄居蟹 Terres 引爆技术圈！ ](https://firedbg.sea-ql.org/img/FireDBG logo.png)

科技圈又添新萌物！继Rust语言可爱的螃蟹吉祥物Ferris之后，我们迎来了它的好朋友——官方新吉祥物Terres。Terres是一只寄居蟹，也是Rustacean大家庭的一员。这只小小的寄居蟹，正用它独特的方式，为Rust社区注入新的活力与趣味，展现了这个技术社群的友好与创新精神。

原文链接：https://firedbg.sea-ql.org/

论坛讨论链接：https://news.ycombinator.com/item?id=44086429

在论坛上，一款用于调试Rust程序的工具引发了热议。许多用户对其可视化所有权、借用以及异步并发问题的能力表示期待，认为其时间旅行调试功能有望节省大量时间，并赞扬其用户界面优秀，联想到Pythontutor或Glamorous Toolkit等运行时程序解释工具。然而，也有用户指出该工具的局限性，例如目前无法用于调试在QEMU中运行的Rust操作系统内核。讨论还延伸至对类似数据库查询分析工具的需求，并有人推荐了Dequery等工具。与此同时，部分用户持保留意见，认为Rust作为原生代码，标准调试器已足够，特定的Rust调试工具可能言过其实，并强调该工具需要在实际复杂的程序中证明其价值。对此，也有用户反驳说，工具的特定功能和便利性本身就是其价值所在。

---

## 6. 日本邮政推出“数字地址”：搬家不愁，一码搞定！ (Japan Post launches 'digital address' system)

![日本邮政推出“数字地址”：搬家不愁，一码搞定！ ](https://cdn4.premiumread.com/?url=https://www.japantimes.co.jp/japantimes/uploads/images/2025/05/27/471584.jpg?v=3.1&w=1000&q=100&f=jpg&t=1.52)

![日本邮政推出“数字地址”：搬家不愁，一码搞定！ ](https://cdn4.premiumread.com/?url=https://www.japantimes.co.jp/japantimes/uploads/images/2025/05/23/470687.jpg?v=3.1&w=400&q=100&f=jpg&t=1.52)

![日本邮政推出“数字地址”：搬家不愁，一码搞定！ ](https://cdn4.premiumread.com/?url=https://www.japantimes.co.jp/japantimes/uploads/images/2025/05/25/471103.jpg?v=3.1&w=400&q=100&f=jpg&t=1.52)

日本邮政于周一（5月27日）正式推出了名为“数字地址”的创新系统。该系统将用户的实际住址与一串独有的七位数字与字母组合进行绑定。今后，用户在访问在线购物网站或其他需要填写地址的平台时，只需输入这组简单的七位数字码，其详细的物理住址便会自动填充显示，极大简化了输入流程。

用户可以通过注册日本邮政的Yu ID会员服务来获取自己的专属数字地址。这项服务的亮点在于，即使用户搬家，这串七位数字地址码也不会改变。用户只需向邮局提交地址变更通知，新的实际地址就会与原有的数字地址码关联起来，避免了在各个平台重复更新地址的麻烦。

日本邮政正将这一数字地址系统向电商等第三方平台开放。目前，日本电商巨头乐天等公司已在积极考虑采纳此系统。日本邮政计划在未来十年左右的时间里，全力推广这一数字地址的广泛应用，以期提升日本民众的线上生活便利度和整体物流效率。

原文链接：https://www.japantimes.co.jp/business/2025/05/27/companies/japan-post-digital-address/

论坛讨论链接：https://news.ycombinator.com/item?id=44117779

论坛上，针对一项新的日本“地址跟踪”系统，讨论者们展开了热烈讨论。有用户对该系统表示欢迎，认为通过注册代码，用户搬家后能轻松更新地址，在线购物下单更便捷。他们设想，如果物流公司在派送前才查找实际地址，即使下单后搬家，包裹也能“跟人走”；未来配送将更加智能，可按用户需求调整送货地点（如工作地、亲友处），甚至由智能储物柜或动态路由实现包裹“找人”，这比固定地址配送更先进且有隐私优势。

另有评论介绍了波兰大规模普及包裹储物柜的成功经验，指出储物柜在当地无处不在，极大地方便了用户取件，并减少了包裹失窃，即使在小村庄也很普遍，步行可达，是解决包裹配送问题的好方法。

然而，也有人质疑包裹储物柜的局限性，认为它们仅适用于小型轻便的物品，对于大件或多个包裹，用户自行从储物柜搬回家很不方便。他们认为新的日本“地址跟踪”系统相比之下是更先进的想法，称“储物柜已经是过时的技术了”。此外，还有评论简单提到亚马逊的储物柜运行良好且常被使用。

---

## 7. 宇宙结构起源新解：黑洞“喷枪”理论挑战暗物质模型 (The Blowtorch Theory: A new model for structure formation in the universe)

![宇宙结构起源新解：黑洞“喷枪”理论挑战暗物质模型 ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F21b8bac7-3f74-4b3e-8df6-a3c103c17080_1500x1696.jpeg)

![宇宙结构起源新解：黑洞“喷枪”理论挑战暗物质模型 ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F62dce4fd-aa01-4fcf-9cbe-e194035968b0_1516x1493.jpeg)

![宇宙结构起源新解：黑洞“喷枪”理论挑战暗物质模型 ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51e99226-448f-47e8-8411-c014c9f95c0f_6000x5143.jpeg)

宇宙大尺度结构（空洞、丝状结构）如何形成是未解之谜。主流ΛCDM模型依赖引力与暗物质，但难以解释詹姆斯·韦布望远镜发现的早期巨大星系。新提出的“喷枪理论”认为，宇宙极早期（大爆炸后约5000万年）大量超大质量黑洞的持续喷流是主要塑造者。这些“喷枪”通过电磁作用开辟空洞，形成丝状结构并留下磁场。此理论无需暗物质，与新观测吻合，为理解宇宙结构起源提供全新视野。

原文链接：https://theeggandtherock.com/p/the-blowtorch-theory-a-new-model

论坛讨论链接：https://news.ycombinator.com/item?id=44115973

论坛上，关于“喷枪理论”的讨论热烈。有评论指出，该理论与ΛCDM模型截然不同，不依赖暗物质，认为早期宇宙的能量流而非量子涨落驱动结构形成，是巨大的范式转变，但需解释ΛCDM已成功解释的观测。文章作者本人参与讨论，对文章受关注表示惊讶。焦点之一在于文章对ΛCDM的批评语气。有评论认为，这种“贬低”方式不专业，有损理论可信度。作者回应称理解批评，但坚持认为ΛCDM存在严重问题，未能预测近期早期宇宙观测结果，而其理论做到了，因此有必要指出问题所在并给出诊断。另有评论认为，指出ΛCDM的问题可以，但应以专业中立的态度，而非贬低其提出者。也有读者认为文章并未“贬低”ΛCDM。讨论反映了对新理论及其论述方式的不同看法。

---

## 8. Compiler Explorer的“链接永存”承诺：一场与时间赛跑的数字考古 (Compiler Explorer and the promise of URLs that last forever)

![Compiler Explorer的“链接永存”承诺：一场与时间赛跑的数字考古 ](https://xania.org/202505/sqlite.png)

知名在线编译器工具Compiler Explorer近日分享了一段其链接缩短功能的有趣故事。早期为分享复杂的编译状态，URL曾长得惊人，于是2014年开始使用Google goo.gl服务生成短链接。不料，第三方短链因安全问题受限，且Google计划于2025年8月彻底关闭goo.gl。这意味着大量依赖其跳转的godbolt.org/g/旧链接将面临失效风险。这段经历让团队意识到，关键基础设施不能过度依赖第三方。他们早已转向自建链接存储方案，通过哈希等技术生成新的短链格式（godbolt.org/z/）。

现在，为了不让散落在互联网上的旧链接成为“数字古董”，Compiler Explorer团队正进行一场“数字考古”，积极抓取并搜寻基于goo.gl的旧链接并将其数据迁入自建系统，目前已抢救超过1.2万条。他们呼吁用户尽快点击手中收藏的godbolt.org/g/旧链接，帮助系统发现并收录，确保这些承载着珍贵代码示例和知识交流历史的链接，能在服务关停后继续有效，兑现“链接永存”的承诺。这不仅是技术上的应对，也是对数字时代分享文化的守护。

原文链接：https://xania.org/202505/compiler-explorer-urls-forever

论坛讨论链接：https://news.ycombinator.com/item?id=44117722

论坛上讨论了如何应对网页链接失效（linkrot）问题。用户最初尝试打印PDF或复制粘贴内容，但发现效果不佳。有用户推荐使用SingleFile浏览器扩展离线保存网页，尽管这会占用大量存储空间（有用户存档达1.1TB）。讨论延伸至如何高效管理这些文件，包括隐私顾虑（SingleFile默认按需保存）以及如何搜索和整理大量存档。有用户推荐自建应用KaraKeep，它能接收SingleFile存档并提供搜索、LLM摘要和标签功能。对于海量存储，讨论探讨了去重、压缩、优化存储格式（如只存Markdown）及利用全文搜索和嵌入技术。也有人认为存储成本不高，主要挑战在于管理这些数据所需的精力。

---

## 9. Tesseral：开源认证神器，赋能B2B SaaS开发者 (Show HN: Tesseral – Open-Source Auth)

![Tesseral：开源认证神器，赋能B2B SaaS开发者 ](https://github.com/tesseral-labs/tesseral/raw/main/.github/img/rbac.png)

![Tesseral：开源认证神器，赋能B2B SaaS开发者 ](https://github.com/tesseral-labs/tesseral/raw/main/.github/img/passkeys.png)

![Tesseral：开源认证神器，赋能B2B SaaS开发者 ](https://github.com/tesseral-labs/tesseral/raw/main/.github/img/hosted_custom_login_pages.png)

旧金山初创公司 Tesseral 近日推出同名的开源认证基础设施，专为B2B SaaS（企业级商业软件）开发者设计。构建复杂的企业软件时，用户认证和授权管理往往耗时耗力，Tesseral 的出现正是为了解决这一痛点。

Tesseral 的核心理念是提供一个 API 优先、多租户的云原生服务，帮助开发者轻松处理用户管理的一切需求。其最大亮点在于技术栈无关性，不像传统的认证库那样绑定特定语言或框架，Tesseral 可以与任何技术栈无缝集成，为开发者带来极大的灵活性。

开发者可以选择使用 Tesseral 的托管服务，快速上手；对于有特殊需求的企业，也支持私有化部署。项目提供多种常用Web开发框架的SDK，如 React 和 Flask，更多SDK（包括 Next.js）正在积极开发中。通过简单的几行代码集成前端和后端，开发者就能利用 Tesseral 完成复杂的认证流程，显著提升开发效率，将更多精力聚焦于核心业务创新。

Tesseral 团队曾成功打造开源 SAML SSO 中间件 SSOReady，在企业级软件领域积累了丰富经验。作为开源项目，Tesseral 鼓励社区参与，同时也强调安全性和稳定性。它的推出，无疑为正在打造下一代 B2B SaaS 应用的开发者们，提供了一个强大且灵活的认证基础设施新选择。

原文链接：https://github.com/tesseral-labs/tesseral

论坛讨论链接：https://news.ycombinator.com/item?id=44117059

论坛上关于用户与组织关系模式展开讨论。有人指出，Tesseral用户管理系统文档描述用户专属于一个组织，但实际流程中用户需选择组织，似乎是多对多关系。Tesseral联合创始人解释称，系统中的用户概念确实是组织专属（一对一），但同一个自然人可在不同组织拥有多个用户实例以参与不同项目。对此，有讨论者批评该模式（一个人对应多个用户实例）令人困惑且不便，尤其在需并行访问多个组织的场景，不应如此分片用户ID。另有人指出，组织间数据隔离十分重要，而为需广泛权限的角色（如客服）提供方便访问仍是难题。也有人提到FusionAuth等系统采用全局用户加租户注册的方式，更接近多对多模式。

