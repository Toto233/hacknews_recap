---
title: 'cPanel 认证绕过已被利用：共享主机的管理面又出事了 | Hacker News 摘要 (2026-05-02)'
author: 'hacknews'
description: ''
digest: 'watchTowr 分析了 cPanel & WHM 的认证绕过漏洞 CVE-2026-41940。cPanel/WHM 是大量共享主机和托管服务使用的控制面，WHM 拥有服务器级管理能力，cPanel 则面向单个站点账户，因此认证绕过的影'
source_url: 'https://labs.watchtowr.com/the-internet-is-falling-down-falling-down-falling-down-cpanel-whm-authentication-bypass-cve-2026-41940/'
pubDatetime: 2026-05-02 09:43:51.783+08:00
tags:
  - 安全漏洞
  - AI_隐私
  - 开发者工具
  - 基础设施治理
---

---

## 1. cPanel 认证绕过已被利用：共享主机的管理面又出事了 (CPanel and WHM Authentication Bypass – CVE-2026-41940)



watchTowr 分析了 cPanel & WHM 的认证绕过漏洞 CVE-2026-41940。cPanel/WHM 是大量共享主机和托管服务使用的控制面，WHM 拥有服务器级管理能力，cPanel 则面向单个站点账户，因此认证绕过的影响范围非常大。cPanel 官方称漏洞影响所有当前支持版本，问题与 session loading/saving 有关，并发布多个分支的补丁版本。KnownHost 还确认该漏洞已作为 zero-day 在野利用。watchTowr 通过对比未修复和已修复版本，定位到 Session.pm、Load.pm、Encoder.pm 等文件变化，指出问题本质在会话保存/加载和编码处理链路上，属于管理平面认证边界的高危失败。对于运营者而言，关键动作是立即升级到对应补丁版本，并在边缘层部署临时缓解规则。

原文链接：https://labs.watchtowr.com/the-internet-is-falling-down-falling-down-falling-down-cpanel-whm-authentication-bypass-cve-2026-41940/

论坛讨论链接：https://news.ycombinator.com/item?id=47969288

HN 讨论聚焦在“不要自己造认证和会话系统”。有人认为 session、auth、crypto、password hashing 这类基础设施应尽量使用成熟方案，因为任何手写逻辑都意味着未来凌晨两点要修的安全债。也有人指出 cPanel 本身已有三十年历史，不能简单说它不成熟。争议点不在漏洞严重性，而在老牌系统为何仍会在认证链路上暴露灾难性边界。

---

## 2. Opus 4.7 只看 150 个词，就认出了作者本人 (Opus 4.7 knows the real Kelsey)


Kelsey Piper 发现 Claude Opus 4.7 能从很短、未发表、不同体裁的文本中识别出她本人。她先把约 125 个词的政治评论草稿输入模型，Opus 4.7 判断最可能作者是 Kelsey Piper；随后又测试了教育评语、电影评论、奇幻小说片段、十五年前的大学申请文等，模型仍多次命中。她强调自己没有启用 memory，也在隐身模式、朋友电脑和 API 中复现了结果。模型给出的解释常常像事后编造，例如把某些主题和有效利他主义圈子错误关联，但底层风格识别能力确实很强。文章的核心担忧是：对有大量公开写作的人来说，向 AI 匿名对话的感觉可能已经消失，只要几轮实质交流，模型就足以推断身份。

原文链接：https://www.theargumentmag.com/p/i-can-never-talk-to-an-ai-anonymously

论坛讨论链接：https://news.ycombinator.com/item?id=47951295

讨论区围绕匿名的现实边界展开。有人认为这证明风格指纹比多数人想象更稳定，尤其对长期公开写作者；也有人质疑模型可能借助训练集中的人物背景和语义线索，而不是纯粹识别文风。更大的担忧是，未来匿名举报、政治表达、少数群体交流和心理咨询都可能受到影响：即使平台不保存实名，模型本身也可能从文本中推断出你是谁。

---

## 3. Linux 内核漏洞没有统一预警：发行版只能自己撞上来 (For Linux kernel vulnerabilities, there is no heads-up to distributions)


Openwall oss-security 上的讨论指出，对于 Linux 内核漏洞，除非报告者主动把信息提交给 linux-distros 邮件列表，发行版通常不会提前收到 heads-up。背景是 CVE-2026-31431 CopyFail，一个近期严重的本地提权漏洞。补丁已经进入部分稳定内核，但长期维护分支的回溯并不顺利，Gentoo 开发者 Sam James 表示他们会先采用禁用相关 authencesn 模块的 workaround。争议在于：漏洞披露、补丁进入上游、PoC 或技术细节公开、发行版打包修复之间没有可靠协调链路。对下游维护者来说，这意味着严重内核漏洞可能已经公开，但可部署补丁和风险说明还没同步到各发行版安全团队。

原文链接：https://www.openwall.com/lists/oss-security/2026/04/30/10

论坛讨论链接：https://news.ycombinator.com/item?id=47965108

HN 评论认为真正的问题不是披露窗口本身，而是内核安全团队和发行版维护者之间缺少机制化通知。有人接受在上游修复后一段时间公开漏洞，但认为不应要求随机报告者逐个通知所有下游。理想流程应是在补丁进入内核时，向可信发行版安全联系人发送影响说明和优先级提示。大家担心共享主机、企业发行版和旧 LTS 内核会在这类空档期暴露。

---

## 4. Grok 4.3 上线：百万上下文，价格打到每百万输入 1.25 美元 (Grok 4.3)


xAI 文档显示 Grok 4.3 已作为 API 模型上线，别名为 grok-4.3-latest，支持 1,000,000 token 上下文窗口、函数调用、结构化输出和 reasoning。价格为每百万输入 token 1.25 美元、缓存输入 0.20 美元、输出 2.50 美元；超过 200K 上下文的请求会采用更高上下文价格。模型区域包括 us-east-1 和 eu-west-1，默认 rate limit 显示每分钟 1,800 请求、1,000 万 token。相比近期其他闭源模型，Grok 4.3 的文档亮点主要是长上下文和较低 API 单价，而非完整技术报告或 benchmark 披露。

原文链接：https://docs.x.ai/developers/models/grok-4.3

论坛讨论链接：https://news.ycombinator.com/item?id=47972447

HN 讨论没有停在参数表，而是集中在实际写作体验。非英语母语用户称 Grok 在把握语气、正式程度和口语细微差别上比 ChatGPT 更自然，尤其在改写短消息时不会过度扩写。也有人做了小型 eval，认为 Grok 4.3、Opus 4.7、GPT-4.1 在语气改写上差距不大，但 Grok 更快更便宜。质疑者提醒，这类主观体验很难用简单 benchmark 证明。

---

## 5. AI 真的很耗水吗？加州水资源专家说先别被数字吓住 (AI uses less water than the public thinks)




加州水资源专家 Jay Lund 讨论了 AI 数据中心用水争议。他承认数据中心需要大量电力和冷却，水资源问题应被严肃评估，但反对在缺少量化估计时把 AI 塑造成“喝光水”的恐慌对象。文章按加州约 1500 万平方英尺数据中心面积、机柜散热功率和蒸发冷却效率粗算，得出年度蒸发用水大致可能在 3.2 万到 29 万 acre-feet，更窄的估计约 2 万 acre-feet。相比加州人类年用水约 4000 万 acre-feet，AI 数据中心大概只占 0.055%，即使用较宽估计也约 0.08% 到 0.7%。作者结论是：AI 用水不是零，但在加州总量中并非首要矛盾；真正需要的是本地化评估、透明数据和有依据的政策讨论。

原文链接：https://californiawaterblog.com/2026/04/26/ai-water-use-distractions-and-lessons-for-california/

论坛讨论链接：https://news.ycombinator.com/item?id=47977383

讨论区提醒“总量不大”不等于“局部无害”。有人指出数据中心可使用闭环冷却，完全蒸发冷却主要因为工业水便宜；也有人把焦点转向农业、喷灌和亚利桑那苜蓿等更大的水耗。反方则强调，在干旱地区新建巨型数据中心可能与既有水权、城市供水和生态恢复冲突。共识是水问题高度本地化，不能只用 statewide 百分比判断。

---

## 6. WhatCable：终于有人把 USB-C 线缆能力讲人话了 (Show HN: WhatCable, a tiny menu bar app for inspecting USB-C cables)


WhatCable 是一个 macOS 菜单栏应用，用来显示插在 Mac 上的 USB-C 线缆到底能做什么。USB-C 外观统一，但能力差异极大：有的只能 5W 充电，有的支持 100W/240W、40Gbps Thunderbolt、DisplayPort 或高速数据。macOS 其实已经通过 IOKit 暴露了线缆 e-marker、充电器 PDO、协商功率、连接设备、活动传输协议等信息，WhatCable 把这些底层数据整理成普通用户能看懂的诊断：线缆是否限制充电速度、当前协商功率、线缆速度、额定电流、供应商、连接设备和 USB/Thunderbolt/DP 状态。项目开源免费、无跟踪，支持菜单栏和 CLI，要求 macOS 14 及 Apple Silicon。

原文链接：https://github.com/darrylmorley/whatcable

论坛讨论链接：https://news.ycombinator.com/item?id=47972511

HN 讨论很快变成跨平台移植现场。有人用 GPT-5.5 花约 10 分钟和 2 美元做出 KDE Plasma 6 plasmoid 原型，随后其他用户开始尝试 Linux/KDE/GNOME 版本。评论一方面认可 USB-C 线缆混乱确实需要更好工具，另一方面也感叹现代 AI 让“看到一个 macOS 小工具，顺手 port 到 Linux”变成了当天就能完成的事。

---

## 7. OpenWarp：给 Warp 终端换上自己的 AI 模型 (OpenWarp)


OpenWarp 是基于 Warp 开源代码的社区分支，目标是在保留 Warp 交互体验的同时开放 AI 层，让用户自带模型和提供商。它通过 genai 适配层支持 OpenAI、Anthropic、Gemini、Ollama、DeepSeek 等多种 API 协议，允许显式配置 Base URL、API Key、模型和系统提示词，而不是依赖“OpenAI 兼容”硬塞。凭证本地存储，默认不上传云端，不收集遥测；系统提示词可用 minijinja 模板根据工作目录、语言、角色动态渲染。项目强调继续合并 Warp 上游，保留 blocks、workflows、AI command、键位和主题，同时提供中文/英文 UI 和 AGPL/MIT 双许可。

原文链接：https://openwarp.zerx.dev

论坛讨论链接：https://news.ycombinator.com/item?id=47970622

HN 中 Warp 创始人回应称官方也将加入 bring-your-own-model，并邀请用户参与讨论。许多评论认为这个能力早该出现，因为终端 AI 若不能选择模型、Base URL 和本地提供商，就很难被严肃开发者信任。也有人质疑是否还需要把 AI 嵌入终端本身，毕竟 Claude Code、tmux、SSH wrapper 和各种 TUI agent 已能完成类似工作。

---

## 8. 罗马发现《凯德蒙赞歌》早期抄本，英语文学开端又多一块证据 (New copy of earliest poem in English, written 1,3k years ago, discovered in Rome)





都柏林圣三一学院研究者在罗马国家中央图书馆发现了一份 9 世纪早期手稿，其中包含《凯德蒙赞歌》的古英语文本。这首九行诗被认为是现存最早的英语诗歌，传说由北约克郡 Whitby 的牧牛人 Caedmon 在神启后创作，赞美上帝创造世界。新发现的手稿约写于 800 到 830 年，是目前第三古老的存世版本。重要之处在于，它把古英语诗文本直接放在拉丁正文中，而更早的剑桥和圣彼得堡版本只是在边注或末尾附古英语。这说明 Bede 读者在其拉丁《英吉利教会史》中重新嵌入英语诗歌，反映早期读者对本土英语诗歌的重视。手稿曾因拿破仑战争时期转移、被盗和私人流转而长期被认为失踪，直到数字化后才被重新识别。

原文链接：https://www.tcd.ie/news_events/articles/2026/caedmons-hymn-discovery/

论坛讨论链接：https://news.ycombinator.com/item?id=47946899

讨论区很多人首先想看诗本身，并分享现代英语译文。语言爱好者关注 Old English 与现代斯堪的纳维亚语言、诺斯神话词汇之间的亲缘关系，例如 middangeard 与 Midgård/Middle-earth 的联系。也有人提到 Tolkien 对翻译地名和古英语意象的影响。整体讨论从考古发现延伸到语言演变、基督教化过程和北/西欧神话语汇的交叉。

---

## 9. 你的网站不是给老板看的，是给用户用的 (Your website is not for you)



这篇短文讨论网站设计评审中常见的错位：设计师展示研究、用户路径和设计理由后，决策者仍然凭个人喜好要求修改。作者强调网站不是创始人、营销负责人或董事会的艺术品，而是给客户、线索、访客和会员完成任务的工具。决策者因为品牌和业务承载了个人情感，容易把网站当成墙上的画或展示自我的花园；但网页的核心职责是帮助用户完成他们来这里要做的事。文章把设计专业和外科医生、会计、电工类比：人们不会随意指导外科医生从哪里下刀，却常常因为“见过很多网站”就自信推翻设计研究。作者建议评审时先问：这个意见帮助用户，还是只帮助我表达品味？

原文链接：https://websmith.studio/blog/your-website-is-not-for-you/

论坛讨论链接：https://news.ycombinator.com/item?id=47973376

HN 讨论并不完全站在设计师一边。有人指出很多设计师也不了解客户、市场和业务，所谓研究未必比创始人的领域经验更可靠。开发者则抱怨设计师常忽视实现成本，偏爱从零打造组件，导致前端复杂度和预算膨胀。讨论最终落在协作问题上：老板、设计师、开发、QA、PM 都可能把个人意见包装成用户需求，缺少真正协作时，网站会同时偏离用户和执行现实。

---

## 10. 过度节俭也是一种成本：当省钱开始限制人生 (Maladaptive Frugality)


Herbert Lui 用自己修 iPhone 的经历讨论“maladaptive frugality”。他本来因为没有及时使用 AppleCare 而情绪低落，后来意识到真正重要的是终于解决了手机问题，而不是为一个可承受的小额损失反复自责。作者回顾自己的节俭观来自家庭和香港文化背景：省钱被视为美德，花钱常被看作道德风险。这种习惯在很多时候有用，但当一个人默认选择最低成本、拖延必要购买、对可恢复的小错误反复内耗，节俭就从工具变成主人。作者建议把注意力拉回当下，用最近一年的实际生活质量判断哪些地方值得投入，而不是继续受童年信念控制。

原文链接：https://herbertlui.net/maladaptive-frugality/

论坛讨论链接：https://news.ycombinator.com/item?id=47942863

讨论区提醒，美国更普遍的问题可能是过度消费和债务，而不是花钱太少。有人认为大多数科技从业者不需要被劝“多花钱”。但另一派指出，对长期自律储蓄并已达到财务目标的人，学会为生活质量花钱确实很难。评论举例：年长父母明明能负担更大屏手机或更舒适汽车，却因多年节俭惯性无法下手。分歧在于建议适用人群不同。

