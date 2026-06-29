---
title: "GLM 5.2 在 Semgrep 安全评测中领先 Claude | Hacker News 摘要 (2026-06-29)"
author: "hacknews"
description: ""
digest: "Semgrep 文章围绕“我们家也有 Mythos”展开，重点是用自家的 cyber benchmark 评估 GLM 5.2、Claude 等模型在安全代码分析、漏洞推理和应用安全任务中的表现。文章背景是前沿闭源模型价格高、发布节奏和访问"
source_url: "https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks/"
pubDatetime: 2026-06-29 20:13:06.397+08:00
tags:
  - "AI评测"
  - "隐私安全"
  - "工具生态"
  - "历史文化"
---

---

## 1. GLM 5.2 在 Semgrep 安全评测中领先 Claude (GLM 5.2 beats Claude in our benchmarks)


Semgrep 文章围绕“我们家也有 Mythos”展开，重点是用自家的 cyber benchmark 评估 GLM 5.2、Claude 等模型在安全代码分析、漏洞推理和应用安全任务中的表现。文章背景是前沿闭源模型价格高、发布节奏和访问限制不稳定，而安全团队又需要能持续处理真实代码库、规则、漏洞上下文和修复建议的模型。Semgrep 的结论是，GLM 5.2 在部分安全基准上表现强劲，足以成为日常安全自动化和多智能体代码审查场景中的实用候选。这里的看点不只是“谁赢了 benchmark”，而是安全厂商开始把模型选择当成工程供应链问题：成本、稳定性、可部署性和抗 benchmark 过拟合同样重要。

原文链接：https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks/

论坛讨论链接：https://news.ycombinator.com/item?id=48709670

HN 讨论明显分成两类：一类用户把 GLM 5.2 当成便宜、快速、足够可靠的日常编程模型，认为它在长时间 coding session 中没有明显掉链子；另一类则提醒不要把单一 benchmark 等同于综合能力，尤其公开模型可能对公开评测更敏感。也有人指出安全评测比普通代码题更难“刷榜”，但仍需要看真实企业代码库和多轮修复表现。整体气氛是谨慎乐观：它可能不是绝对最强模型，但已经足以改变成本和可用性权衡。

---

## 2. Codex 敏感文件排除问题仍在讨论 (A way to exclude sensitive files issue still open for OpenAI Codex)


OpenAI Codex issue #2847 讨论的是：用户希望在项目中声明某些敏感文件，让 Codex 不能读取、编辑或通过工具输出间接泄露。这个问题看似像一个配置需求，但实质上触及安全边界应该放在哪里。如果 agent 仍能运行 shell、grep、构建命令或测试命令，那么单纯让“读文件工具”忽略某些路径并不能阻止内容通过命令输出进入上下文。更可靠的做法通常是从操作系统权限、容器挂载、工作区裁剪或密钥管理层面让进程本身无法访问敏感文件。这个 issue 的价值在于暴露了 agent 产品的常见误解：提示词和工具策略不是完整隔离边界。

原文链接：https://github.com/openai/codex/issues/2847

论坛讨论链接：https://news.ycombinator.com/item?id=48706714

HN 评论基本认同“权限边界要放在更低层”。有人建议直接用文件权限、容器、单独用户或不挂载敏感目录解决；否则 agent 执行 `rg`、`make`、日志打印时仍可能把敏感内容带出来。也有人说 Codex issue 区能看出用户对安全模型理解差异很大：一部分人期待产品提供类似 `.gitignore` 的保护，一部分人认为这会给人虚假安全感。讨论的核心结论是：对 agent 来说，可访问就可能泄露；真正的隔离不能只靠应用层约定。

---

## 3. EFF 警告 KIDS Act 会推动全网年龄检查 (The KIDS Act would require age checks to get online)



EFF 文章批评美国国会即将表决的 KIDS Act。该法案包裹了多项面向未成年人网络保护的规定，包括不同服务上的年龄门槛、平台责任、内容治理和私密通信规则。EFF 认为，这种复杂且高风险的监管组合会促使平台采取更保守的全站年龄验证：为了证明用户不是未成年人，服务商往往需要识别所有用户。文章担心这会损害匿名浏览、隐私、言论自由和加密通信，并把“保护儿童”变成事实上的普遍身份检查基础设施。它反对的不是儿童安全目标，而是用大规模年龄验证作为默认手段。

原文链接：https://www.eff.org/deeplinks/2026/06/kids-act-would-require-age-checks-get-online

论坛讨论链接：https://news.ycombinator.com/item?id=48706560

HN 讨论延续了典型分歧：不少人认为“保护儿童”正在成为各国收紧互联网身份制度的理由，因为验证儿童年龄往往意味着验证所有人身份；也有人认为互联网确实长期不适合儿童直接暴露在社交平台和成人内容中，问题是怎样设计不会变成隐私灾难。评论里有人强调父母、平台、学校和监管都承担一部分责任，但任何要求全网实名或年龄证明的方案，都可能比原问题制造更大的监控风险。

---

## 4. 用 Claude Code 给 MRI 做第二意见 (I used Claude Code to get a second opinion on my MRI)





作者讲述自己右肩疼痛后接受 MRI，被诊断为肩胛下肌腱部分撕裂，并被诊所迅速安排一系列治疗。因为对诊疗节奏不放心，他把 MRI 报告和治疗建议交给 GPT 与 Claude Code 分析。模型指出了两个疑点：无钙化情况下使用冲击波治疗可能不符合指南，以及注射的 Traumeel 属于无明确治疗适应证的顺势疗法药物。随后作者用 Claude Code 处理 DICOM 文件、安装医学影像相关包、分析影像序列，试图获得更细的解释。文章反复强调自己不是医生，AI 不能替代诊断，但它可以帮助患者理解报告、准备问题和识别需要进一步确认的地方。

原文链接：https://antoine.fi/mri-analysis-using-claude-code-opus

论坛讨论链接：https://news.ycombinator.com/item?id=48708941

HN 讨论很谨慎。有人说 AI 的价值在于随时可问、不会受预约时间限制，患者更敢追问和质疑；但更多信息不等于更好信息，尤其医疗场景需要可信专家而不是更多互相矛盾的解释。也有人分享自己向多个模型或医生寻求意见后反而更焦虑的经历。主线不是“AI 能看 MRI 了”，而是患者面对复杂医疗系统时缺少解释权，LLM 能补足一部分沟通和理解，但不能替代可靠诊断。

---

## 5. 如何选择公共 DNS 解析器 (Choosing a Public DNS Resolver)


这篇指南整理了 30 个全球公共 DNS 解析器，并提供交互式筛选器和浏览器侧 DoH 延迟测试。用户可以按隐私、无日志、恶意站点拦截、广告和追踪过滤、家长控制、无过滤、可自定义过滤、Anycast 速度、非商业运营、加密 DNS、DNSSEC、IPv6、运营地和 ECS 等条件筛选。文章的价值在于把公共 DNS 从“换成 8.8.8.8 或 1.1.1.1”扩展成一组可比较的工程和信任选择：速度、隐私、管辖地、过滤策略、运营透明度和功能都可能互相冲突。

原文链接：https://evilbit.de/dns-resolver-guide.html

论坛讨论链接：https://news.ycombinator.com/item?id=48702273

HN 评论里有长期自建 DNS 的用户认为，很多过滤、隐私和解析策略都可以自己搭建 resolver 实现，因此公共列表对他们吸引力有限。但他们也承认表格揭示了重要信息：运营者是谁、服务在哪个司法辖区、是否有 bus factor、是否发送 ECS、是否过滤内容。讨论提醒普通用户不要只看延迟，DNS 是基础信任入口；选择公共解析器等于选择一个会看到大量访问意图的第三方。

---

## 6. LibrePods 解锁 AirPods 的非苹果功能体验 (Librepods: AirPods liberated)



LibrePods 是一个开源项目，目标是在非苹果设备上实现 AirPods 与苹果设备之间的部分专有协议，让用户能使用更多原本只在苹果生态内可见的功能。AirPods 本身可以作为普通蓝牙耳机连接其他设备，但电量状态、控制项、降噪/通透模式、设备特定交互等高级体验通常依赖苹果系统集成。LibrePods 的意义在于补齐这层协议和界面，把硬件从单一生态中“解放”出更多能力。它也体现了一个常见开源方向：不是重新造硬件，而是补上厂商未公开的互操作层。

原文链接：https://github.com/librepods-org/librepods

论坛讨论链接：https://news.ycombinator.com/item?id=48710232

HN 讨论首先澄清了一个误解：AirPods 并不是不能在其他设备上用，而是高级功能和集成体验受限。有人认为 README 已经写清楚，但也有不少读者从标题误以为项目解决的是基础蓝牙连接。评论进一步讨论为什么用户购买 AirPods：很多人看重的是在 iPhone、Mac、Apple TV 之间无缝切换，而不仅是耳机本身音质。这个项目的吸引力主要面向混合设备用户和希望摆脱生态锁定的人。

---

## 7. 五千份老菜单里的美国餐饮史 (5k menus from the New York Public Library’s Buttolph Collection (1880-1920))


Pudding 这篇数据叙事基于纽约公共图书馆 Buttolph Collection 中 1880–1920 年间约五千份菜单，观察现代餐厅文化如何形成。菜单不只是菜品列表，也记录了阶层、性别、技术、环境和城市生活方式的变化。文章以“十道菜”的方式讲述这段历史，从法式汤品、牡蛎、餐厅服务到菜单语言和食材流行，展示美国餐饮如何从酒店、俱乐部和精英消费逐步走向更现代的公共餐饮体验。当前正文为人工补齐内容，来源仍是原页面和相关菜单集合页。

原文链接：https://pudding.cool/2026/06/menu-story/

论坛讨论链接：https://news.ycombinator.com/item?id=48707763

HN 评论被菜单里的历史细节带向各地餐饮文化：有人提到德国啤酒垫上用铅笔记账，擅自改动可能涉及法律问题；也有人联想到巴西餐桌小票、点心店叠盘计价、旧称 alligator pear 指牛油果等。讨论重点不是页面技术，而是菜单作为社会文档的价值：一份菜单能同时记录价格、语言、移民影响、食材供应链、服务习惯和当时人们如何理解“外出吃饭”。

---

## 8. Show HN：Zanagrams 路径字谜游戏 (Show HN: Zanagrams)


Zanagrams 是一个网页字谜游戏。玩家在字母格上沿路径拖动，找出隐藏单词；拖动方向可以变化，但必须沿已有路径前进。当某些字母和路径不再需要时会消失，单词可按任意顺序找到，而且谜题仍保持可解。作者后来根据 HN 反馈增加了可玩的新手教程、计时器和若干词库修正，还做了一个 HN 主题谜题。当前正文为人工补齐的页面说明，真正的体验主要来自交互式游戏和玩家反馈。

原文链接：https://zanagrams.com/

论坛讨论链接：https://news.ycombinator.com/item?id=48708182

HN 反馈整体很积极。玩家称它容易上手、满足感强，也有人建议加入提示、放弃按钮、分享具体谜题分数和时间等功能。作者快速部署了教程和计时器，显示 Show HN 的即时反馈循环很有效。也有评论指出它和 Puzzmo 的 Ribbit 有相似玩法，但这不妨碍独立实现带来不同节奏和实验空间。讨论重点是玩法设计：规则要简短，反馈要及时，失败时最好有轻量提示。

---

## 9. Daisugi：从树上培育直木的日本技术 (Daisugi, the Japanese technique of growing trees out of other trees (2020))



Open Culture 文章介绍 Daisugi，这是一种约 600 年历史的日本林业技术，常被描述为在一棵树的平台上培育新的直立树干。它与京都传统建筑对笔直木材的需求有关，也和土地与幼苗不足的现实压力有关。技术上，母树先被修剪成稳定基座，随后让新枝垂直生长，再不断修剪以获得更直、更少节疤的木材。文章比较轻量，更像文化介绍；HN 评论补充说应参考更详细来源理解具体做法，并提醒树种其实是 sugi，即日本柳杉。

原文链接：https://www.openculture.com/2020/10/daisugi.html

论坛讨论链接：https://news.ycombinator.com/item?id=48708859

HN 评论主要在补技术细节。有人解释 Daisugi 依赖特定树种既能垂直生长又能被训练成平台状的特性，优点是节省空间、提高木材直度，但非常耗费人工。也有人追问为什么木材更强更柔韧，评论推测可能与笔直纹理和较少节疤有关。还有人纠正英文里把 sugi 直接叫 cedar 容易误导。整体讨论把它从“神奇图片”拉回到林业、材料和传统工艺。
