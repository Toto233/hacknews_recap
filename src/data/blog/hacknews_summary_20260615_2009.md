---
title: "Paul Graham：怎样赚到十亿美元 | Hacker News 摘要 (2026-06-15)"
author: "hacknews"
description: ""
digest: "Paul Graham 这篇文章来自他在 Oxford Union 的演讲，核心是在反驳“赚到十亿美元不可能是正当的”这种说法。他以 YC 的经验为基础：过去 21 年 YC 投了约 6500 家公司，其中已经有约 30 位创始人成为亿万富"
source_url: "https://paulgraham.com/earn.html"
pubDatetime: 2026-06-15 20:09:44.576+08:00
tags:
  - "创业财富"
  - "编程未来"
  - "本地AI"
  - "数据库"
---

---

## 1. Paul Graham：怎样赚到十亿美元 (How to earn a billion dollars)


Paul Graham 这篇文章来自他在 Oxford Union 的演讲，核心是在反驳“赚到十亿美元不可能是正当的”这种说法。他以 YC 的经验为基础：过去 21 年 YC 投了约 6500 家公司，其中已经有约 30 位创始人成为亿万富翁。他认为创业公司最常见的财富路径不是直接剥削，而是在早期做出用户真正喜欢的东西，获得指数增长，创始人的股权价值随之快速上升。文章用一个月增长 93% 的创业公司举例，说明当用户自发传播、市场规模足够大、团队持续让用户满意时，财富增长可以非常快。PG 也承认这很难，不是所有公司都能持续指数增长，但他强调“难”不等于“不可能正当”。文章真正挑起的争议是：巨额财富究竟主要来自创造价值，还是也系统性依赖外部性、垄断、规则套利和权力不对称。

原文链接：https://paulgraham.com/earn.html

论坛讨论链接：https://news.ycombinator.com/item?id=48526360

HN 讨论非常激烈。支持者认为评论区太容易把所有财富创造都归为“榨取”，忽视了创业公司确实能创造新工作和新产品。反对者则指出 PG 对指数增长和用户满意的叙述过于理想化：市场有上限，大公司成长常伴随外部性、监管空白、自我交易和平台权力。分歧本质是对创业财富合法性的不同世界观。

---

## 2. Jane Street 改变态度：AI 让形式化方法重新值得投入 (Formal methods and the future of programming)




Jane Street 的 Yaron Minsky 写道，过去 25 年他一直认为公司对完整形式化方法不感兴趣。Jane Street 很重视类型系统这类轻量形式化工具，但对更重的验证手段一直谨慎，因为成本太高：例如 seL4 微内核验证用了约 25 人年，8700 行 C 代码对应大量证明工作。现在 agentic coding 改变了这个成本收益判断。一方面，AI Agent 不能自动解决任意困难证明，但能显著降低使用形式化工具的门槛，让更多工程师写规范、补 lemma、理解证明失败。另一方面，模型越来越能写代码，验证瓶颈反而更重要：如果未来代码生成更便宜，真正稀缺的是能证明它满足关键性质的机制。Jane Street 因此开始组建形式化方法团队，希望让它像高级类型系统一样成为日常软件工程工具。

原文链接：https://blog.janestreet.com/formal-methods-at-jane-street-index/?from_theconsensus=1

论坛讨论链接：https://news.ycombinator.com/item?id=48526633

讨论里有早年做过正确性证明的人提醒，形式化方法失败往往不是因为思想错，而是工具太偏学术、自动化不足、过分追求漂亮形式系统。商业工程真正需要的是大量自动化推理、少量人工洞察，以及能服务“少 bug 代码”的流程。AI 的价值可能正是在这些繁琐证明和工具使用环节降低摩擦。

---

## 3. Kage：把任意网站“影印”成可离线浏览的单文件 (Show HN: Kage – Shadow any website to a single binary for offline viewing)


Kage 是一个 Go 写的离线网页归档工具，名字来自日语“影”。它用真实 headless Chrome 打开网页，等待页面完成加载和动态渲染，抓取人类实际看到的 DOM，然后删除所有 JavaScript，把 CSS、图片、字体等资源下载成本地路径。结果是一个能在本地打开、外观接近原站、但不会再运行脚本或发起网络请求的离线副本。它还支持把站点打包成 ZIM 或单个可执行文件，适合长期保存、分享或在无网络环境中阅读。Kage 针对的是现代网页“保存网页”经常失败的问题：页面依赖脚本、API、analytics 或动态客户端状态，半年后再打开可能只剩空白和转圈。Kage 的路线是先让浏览器把页面跑完，再冻结最终状态，让网页真正归你所有。

原文链接：https://github.com/tamnd/kage

论坛讨论链接：https://news.ycombinator.com/item?id=48529990

讨论最先被 README 里的终端演示 GIF 吸引，Simon Willison 追踪到作者用另一个项目 ascii-gif 生成演示动画，大家还讨论了 animated SVG 是否比 GIF 更小。围绕 Kage 本身，评论关注离线归档、去脚本化、ZIM 打包和长期保存价值。也有人自然联想到 wget、SingleFile 等工具，比较“跑完页面再冻结”与传统抓取的差异。

---

## 4. Postgres 里真正可扩展的删除，是 DROP TABLE (The only scalable delete in Postgres is DROP TABLE)





PlanetScale 的文章解释为什么在 Postgres 中，大规模 DELETE 往往不是“清理工作”，而是给数据库新增大量工作。由于 MVCC，Postgres 删除行时不会立刻释放物理空间，而是留下 dead tuples，等待 vacuum 之后重用页面；DELETE 本身还要写 WAL、参与复制、影响索引扫描，并可能拖慢其他写入。autovacuum 通常只是标记空间可复用，不会把磁盘空间还给操作系统；VACUUM FULL 可以做到，但需要昂贵锁。作者建议，如果业务确实需要周期性删除大量数据，应尽量用 schema 设计把删除表达成 DROP TABLE 或 TRUNCATE，例如按时间分表、分区、把可清理数据隔离到独立表。文章重点不是说 DELETE 不能用，而是大批量行级删除和数据库内部存储模型天然不匹配，真正大规模清理应设计成元数据级操作。

原文链接：https://planetscale.com/blog/the-only-scalable-delete

论坛讨论链接：https://news.ycombinator.com/item?id=48492822

HN 评论认为“DELETE 会增加工作”并不反直觉，删除一行本来就要像插入一样写日志、更新状态、复制并处理索引。大家补充说，这类技巧不只适用于 Postgres，很多关系数据库在删除绝大多数数据时都可以复制保留行到新表、DROP 旧表再改名。争议在于标题里的“scalable”：小事务 DELETE 可扩展，大批量清理需要 bulk 思维。

---

## 5. 用 M1 Max 和本地模型索引 669GB GoPro 视频 (I indexed 669 GB of my GoPro videos using my M1 Max computer and local ML models)


作者有 2207 个 GoPro 视频，想从骑行素材中找出有趣瞬间，于是用 M1 Max 和开源本地 ML 模型做了一个视频索引项目。他实际处理了 628 个视频，总计 668.68GB、约 15 小时 13 分钟素材，目标是让这些片段可以被搜索，并把筛出的最佳片段直接送进 DaVinci Resolve 时间线。虽然抓取到的正文主要来自 HN 主贴和摘要，但项目方向很清楚：本地机器上的视觉/视频模型已经足够实用，可以对个人媒体库做语义索引、片段召回和剪辑辅助，不必把大量私密视频上传到云端。它体现了本地 AI 的一个很现实用例：不是追求通用聊天，而是把个人存档变成可检索、可重用的工作素材。

原文链接：https://news.ycombinator.com/item?id=48528029

论坛讨论链接：https://news.ycombinator.com/item?id=48528029

讨论中有人提到自己几天前也用同样机器和类似技术索引了一整年视频，说明这个方向正在变得可复制。另一些评论联想到 Apple/Google Photos 的自动回忆功能，希望未来能把孩子、旅行、音乐和视频自动整理成小片段。总体情绪偏乐观：本地开源模型正在让个人媒体管理进入一个新阶段。

---

## 6. Honda Civic 车机的 Evil Valet 漏洞 (Honda Civics and the Evil Valet)


作者更新了他对 2021 Honda Civic 车机的逆向研究，最重要发现是车机通过 USB 更新时使用的是类似 Android recovery 的 AOSP 更新包流程，并且可能接受公开已知的 AOSP test key 签名。换句话说，只要攻击者能物理接触车内前置 USB 口，就可能准备一个特殊格式的 U 盘，签名并安装任意更新包，在车机上获得任意代码执行，而无需常规 root 或 su。作者把这种攻击称为 EvilValet：如果记者或敏感人士把车交给酒店代客泊车，恶意 valet 就可能趁机植入修改过的车机系统。文章还发布了 ota-builder 工具，帮助研究者构建可被车机接受的更新文件。它不是远程攻击，但说明车载娱乐系统的供应链和更新验证经常存在被低估的物理安全风险。

原文链接：https://juniperspring.org/posts/honda-evil-valet/

论坛讨论链接：https://news.ycombinator.com/item?id=48523080

讨论里作者补充说，10 代 Civic 的更新包本质上是 Android 4.2.2 时代 recovery package，加了 Honda 版本检查但可伪造，签名用公开 AOSP test key。评论称赞这种车机逆向揭露了厂商偷懒，也有人询问 Acura 等同年代车机是否类似。大家还提到，许多汽车 infotainment 系统也可能有相同弱点。

---

## 7. 里约“自研”大模型疑似只是现有模型合并 (Rio de Janeiro's "homegrown" LLM appears to be a merge of an existing model)


这个 GitHub issue 指出，里约热内卢官方发布的 Rio-3.5-Open-397B 被宣传为 IplanRIO 训练的原创 397B 模型，但 Nex-AGI 认为它并非真正自研，而是由 Nex-N2_pro 和官方 Qwen3.5-397B-A17B 做权重线性合并，大约 0.6 Nex 加 0.4 Qwen。issue 给出两类证据：移除 Rio 硬编码的“You are Rio”系统提示后，部署模型有 79% 概率自称“Nex, from Nex-AGI”，甚至复述 Nex 的组织背景；逐层分析权重张量后，Rio 在所有 60 层和主要组件上都接近同一 0.6/0.4 插值。作者称没有看到独立训练证据。事件反映出开源权重时代的一个新问题：模型合并、微调、蒸馏和自研之间的边界很容易被包装话术模糊。

原文链接：https://github.com/nex-agi/Nex-N2/issues/4

论坛讨论链接：https://news.ycombinator.com/item?id=48528371

HN 讨论里有人提出更温和解释：官方可能确实基于 Qwen 和 Nex 做了权重合并，再计划进行 on-policy distillation，但上传的版本缺少蒸馏结果；也可能是传播时被市长和媒体夸大。其他人强调，无论动机如何，如果没有披露 Nex 来源，就会误导公众和资助方。大家认为此事很容易验证，关键看团队是否上传正确模型和训练细节。

---

## 8. 你的 EPUB 没坏，是 Kobo 的 Adobe 引擎不认 (Your ePub Is fine)


作者讲述自己发布一本通过 epubcheck 3.3 全部校验的 DRM-free EPUB 后，却收到读者反馈：在多台 Kobo 设备上都显示“corrupted”。他又提供了兼容 EPUB2 的版本，仍然失败；而同一文件在 Kindle、Apple Books、Thorium 等阅读器中正常。进一步排查后，他发现 Kobo 使用 Adobe 的 RMSDK，也就是 Adobe Digital Editions 背后的专有渲染引擎。问题不在 EPUB 标准校验，而在 Adobe/Kobo 对某些合法 EPUB 特性的实现不完整或行为怪异。作者把 epubcheck 类比成出版领域的类型检查器：能保证文件符合标准，却不能保证所有封闭、陈旧或有 bug 的阅读引擎都正确实现标准。文章最后是一种开发者熟悉的挫败感：你按规范做对了，用户仍然会被某个事实标准实现卡住。

原文链接：https://andreklein.net/your-epub-is-fine-kobo-disagrees-blame-adobe/

论坛讨论链接：https://news.ycombinator.com/item?id=48533848

讨论很快变成对 Adobe 长期软件质量和生态影响的吐槽。有人回忆 Flash 时代的崩溃、难复现 bug 和缺乏支持，认为 Adobe 浪费了巨大市场份额；也有人提到 Steve Jobs 拒绝 iPhone 支持 Flash 加速了它的消亡。对 EPUB 读者来说，问题是标准合规和实际兼容之间仍有落差，尤其当设备依赖封闭旧引擎时。

---

## 9. zeroserve 兼容 Caddyfile：吞吐 3 倍、延迟降 70% (Caddy compatibility for zeroserve: 3x throughput and 70% lower latency)


zeroserve 是一个高性能 HTTPS 服务器，特点是在用户态运行 eBPF 脚本，并通过 io_uring 事件循环处理请求。新版本加入 Caddy 兼容模式：给它一个 Caddyfile，它会把配置 JIT 编译成 eBPF，再编译成本地 x86_64/ARM64 机器码运行。作者给出的 HTTPS 反向代理基准显示，在 2 线程 Ryzen 7 3700X 上，zeroserve-clang 达到约 38948 req/s，p50 1.45ms、p99 3.91ms；Caddy 是约 12529 req/s、p50 4.74ms、p99 13.11ms；nginx 接近 37424 req/s。文章还展示了通过 zeroserve_call 调用自定义 eBPF middleware，比如给 S3 兼容请求加 AWS SigV4 签名。它是一个偏底层的性能实验：把熟悉的 Caddy 配置前端接到更激进的编译执行引擎上。

原文链接：https://su3.io/posts/zeroserve-caddy-compat

论坛讨论链接：https://news.ycombinator.com/item?id=48527145

讨论意外集中在网站本身弹出的客户端证书选择框，很多用户在 Chrome、Firefox、Arc 等浏览器里都看到 su3.io 请求客户端证书，觉得可疑或至少很奇怪。有人解释这可能是启用了 mTLS 的副作用，不一定是恶意，但公共页面一般不该这么配置。关于 zeroserve 本身，评论关注 eBPF、Caddyfile 兼容和安全边界。

---

## 10. Show HN：一个画面精美的砍柴解压小游戏 (Firewood Splitting Simulator)


Firewood Splitting Simulator 是一个几乎没有文字说明的浏览器小游戏，核心就是砍木头。它不是复杂的游戏系统，也不是一篇技术文章，而是一个视觉和手感驱动的小玩具：玩家在精美、氛围感很强的场景中反复劈开木柴，享受动作反馈、动画和声音带来的放松感。它的价值类似许多低压力 Web toy：打开页面，不需要教程，不追求成就或排行榜，只是做一个简单、重复但有满足感的动作。对真实劈柴来说，它当然省略了体力、技巧、危险和疲劳；但正因为如此，它更像是把“啪一下劈开”的爽感抽出来，做成可随手玩的减压体验。作为 Show HN，它展示的是小型浏览器互动项目仍然可以靠美术、反馈和手感打动人。

原文链接：https://screen.toys/firewood/

论坛讨论链接：https://news.ycombinator.com/item?id=48471638

HN 讨论里有人说它有趣，但和真实劈柴经验不太一样：真正劈中木头后两半通常会向两侧弹开，也不能像切面包一样横切木纹。另一些人调侃真实劈柴第二天会发现自己拉伤了不知道存在的肌肉。也有人认真补充，劈柴其实有不少技巧，熟练老人可能比健身年轻人劈得更快。

