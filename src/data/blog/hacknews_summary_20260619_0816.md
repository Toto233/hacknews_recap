---
title: "Midjourney 跨界医疗：想用水下超声在 60 秒内扫描全身 | Hacker News 摘要 (2026-06-19)"
author: "hacknews"
description: ""
digest: "Midjourney 宣布进入医疗成像领域，正在研发一套名为 Midjourney Scanner 的全身扫描设备。用户站在平台上缓慢沉入温水，穿过由约 50 万个微型收发单元组成的环形阵列；阵列从多个角度发射并接收超声波，再由计算集群把波"
source_url: "https://www.midjourney.com/medical/blogpost"
pubDatetime: 2026-06-19 08:16:03.080+08:00
tags:
  - "医疗科技"
  - "网络安全"
  - "AI工具"
  - "开发者生态"
---

---

## 1. Midjourney 跨界医疗：想用水下超声在 60 秒内扫描全身 (Midjourney Medical)


Midjourney 宣布进入医疗成像领域，正在研发一套名为 Midjourney Scanner 的全身扫描设备。用户站在平台上缓慢沉入温水，穿过由约 50 万个微型收发单元组成的环形阵列；阵列从多个角度发射并接收超声波，再由计算集群把波形变化重建为人体内部的三维图像。公司目标是把一次扫描压缩到 60 秒，并让图像外观接近 MRI，同时通过 AI 分割识别组织结构。Midjourney 计划 2027 年在旧金山开设首个研究型 Spa，把扫描与温泉体验结合，初期只提供身体组成图，后续能力将逐步申请 FDA 批准。需要强调的是，这仍是研发路线和公司愿景，超声并不等同于 CT 或 MRI，实际诊断价值、误报风险和监管结果尚待临床验证。

原文链接：https://www.midjourney.com/medical/blogpost

论坛讨论链接：https://news.ycombinator.com/item?id=48579650

HN 当前抓到的核心评论来自一名放射科医生。他认可新型成像技术值得探索，但提醒宣传图看起来像低分辨率 CT，不代表超声已经具备 CT 的组织穿透和诊断能力，肺部、骨骼等区域尤其受物理限制。讨论关注水下超声阵列、海量数据重建和 AI 分割是否真能形成有用的新模态，也担心频繁全身扫描带来偶然发现、误报、焦虑和后续医疗成本。整体态度是技术大胆且有趣，但不能把漂亮的重建图直接等同于经过验证的临床工具。

---

## 2. 研究者在 GitHub 找到上万个传播木马的伪造仓库 (I found 10k GitHub repositories distributing Trojan malware)


一名开发者偶然发现，有人复制真实 GitHub 项目的名称、描述和完整提交历史，再追加一个指向恶意 ZIP 文件的下载链接。进一步分析后，他写脚本识别共同模式，最终找到约一万个类似仓库。这些仓库来自不同账号、名称各异，也不是标准 fork，因此表面上很像独立项目；攻击者还会每隔几小时删除并重新推送同一恶意提交，维持仓库的新鲜度和搜索曝光。恶意包被包装成软件发布、破解工具或项目构建产物，目标是诱使搜索用户和自动化工具下载。事件显示，供应链攻击正从污染知名依赖扩展到批量复制长尾项目，通过搜索排名、标签和可信提交历史制造合法感。

原文链接：https://orchidfiles.com/github-repositories-distributing-malware/

论坛讨论链接：https://news.ycombinator.com/item?id=48583928

HN 评论提出一个值得警惕的判断：这些仓库可能不主要针对人工浏览者，而是针对会自主搜索、下载依赖和运行代码的 AI 编程代理。复制大量新项目并频繁刷新提交，可以让恶意仓库偶尔进入代理的搜索结果，一旦代理缺少来源验证和沙箱隔离，就可能自动形成感染链。也有人提醒，不应在没有证据时把所有活动归因于 agent，传统 SEO 投毒同样能解释这种行为。讨论共同指向 GitHub 搜索、仓库信誉、发布签名和自动下载策略需要更强防护。

---

## 3. 瑞士议会解除新建核电站禁令，最终仍需全民公投 (Swiss parliament lifts ban on new nuclear power plants)



瑞士国民院在激烈辩论后支持解除新建核电站禁令，与联邦委员会和联邦院立场一致。议会以极小差距否决把方案退回政府补充融资说明的动议，并通过针对“停电倡议”的间接反建议，使未来重新建设核电站在法律上成为可能。不过，这并不是立即开工许可，最终决定仍可能由瑞士选民在公投中作出。支持者认为，瑞士冬季电力供应不足、可再生能源季节波动明显，核电可以提供稳定低碳基荷；反对者则担忧建设周期、成本、废料处理和国家财政风险。此次表决标志着福岛事故后形成的退核政策出现重大转向。

原文链接：https://www.bluewin.ch/en/news/switzerland/parliament-lifts-ban-on-new-nuclear-power-plants-3257535.html

论坛讨论链接：https://news.ycombinator.com/item?id=48585746

HN 评论首先强调，议会投票只是政策链条的一步，瑞士直接民主制度意味着公众仍可能在公投中否决。当地评论者认为核电讨论高度政治化，左翼和绿党普遍反对，未来辩论未必理性。技术讨论集中在瑞士春夏水电和太阳能充足、冬季供电紧张的结构性矛盾，以及核电能否在成本和建设周期上及时补位。有人支持用核能减少进口和化石能源，也有人认为储能、电网互联与可再生能源组合更现实。

---

## 4. 医院和大学把旧药用于新病，临床试验成本最多低九成 (Hospitals and universities repurposing drugs at lower cost)




伦敦国王学院研究指出，医院和大学正在专利体系之外形成一套“隐藏”的药物创新机制：把已经上市、专利到期或安全性较清楚的药物重新用于其他疾病，并以远低于制药企业的成本推进后期临床试验。研究案例包括用抗癌药治疗黄斑变性、把乳腺癌药物转用于预防，以及用老抗炎药治疗新疾病。由于药物的生产、安全和基础机制已有大量资料，学术机构面临的技术、风险和资本门槛较低，部分试验的资助成本不到行业公开成本的十分之一。问题在于，廉价通用药缺乏专利回报，企业没有动力承担适应症扩展和监管申请，因此社会需要新的公共资助与审批路径。

原文链接：https://www.kcl.ac.uk/news/hospitals-and-universities-repurposing-drugs-at-90-lower-cost

论坛讨论链接：https://news.ycombinator.com/item?id=48583386

HN 评论以眼科药物为例解释这种价差：Avastin 与 Lucentis 在分子和用途上高度相关，但前者经配药房分装后每剂约几十美元，后者眼科包装价格可达上千美元。评论者指出，药物再利用并非没有成本，稳定剂量、给药方式、无菌分装和责任体系都需要专业支持；但专利和定价结构确实会让便宜方案缺少正式试验。讨论认为，公共机构最适合填补这种“社会价值高、商业回报低”的研发空白。

---

## 5. DeepSeek Chat 加入 Vision，开始支持图片理解 (DeepSeek Introduces Vision)


DeepSeek Chat 在线聊天界面新增 Vision 图片理解能力，用户可以上传照片、截图、图表或带文字的图片，让模型描述场景、识别内容并结合图像回答问题。它并不是图像生成或图片编辑系统，不能按提示重绘、修改图片；功能重点是从视觉输入中提取语义，而不只是做 OCR。由于 chat.deepseek.com 是动态交互应用而非新闻文章，静态页面只提供登录和 Cookie 信息，此次变化主要由产品实际界面和用户测试确认。对 DeepSeek 用户而言，这补上了与 ChatGPT、Claude、Gemini 等多模态助手竞争时的重要能力，也让低成本截图分析、文档阅读和视觉问答更实用。

原文链接：https://chat.deepseek.com/

论坛讨论链接：https://news.ycombinator.com/item?id=48581458

HN 用户测试认为，新功能确实能理解图片并描述画面，不只是提取文字，但无法生成或修改图像。有人表示，以明显低于 Claude 和 ChatGPT 的成本分析截图，比加入语音输入输出更有价值；另一些人则希望 DeepSeek 补上 ASR、TTS 和语音对话。评论还比较了 Gemini 的手写文字和场景识别能力，以及可在本地 GPU 上运行的 Gemma 等多模态模型。讨论焦点从“是否支持图片”转向准确率、价格、隐私和本地运行成本。

---

## 6. 本地 Qwen 不是低配 Opus，而是另一种需要监督的工具 (Local Qwen isn't a worse Opus, it's a different tool)





OpenFaaS 创始人 Alex Ellis 用真实业务和开源维护经验总结本地 Qwen 模型的价值。他认为，把 Qwen 27B 或 35B 简单称为“接近 Opus”会误导用户：本地模型确实能在代码整理、受限任务和内部数据处理上节省订阅成本，一张高端 GPU 也可能在几个月内回本，但它们更容易陷入循环、产生幻觉，并在量化后进一步损失稳定性。作者仍然使用云端前沿模型处理复杂规划和高风险任务，同时把本地模型放在边界明确、可审查、数据敏感的工作中。核心结论不是谁更聪明，而是不同模型需要不同提示方法、监督强度和任务分工。

原文链接：https://blog.alexellis.io/local-ai-is-not-opus/

论坛讨论链接：https://news.ycombinator.com/item?id=48580209

HN 讨论认同模型不应只按单一智力等级排列。长期使用者发现，不同模型像不同乐器：Claude 在适度留白、创意实现和交流语气上表现好，本地 Qwen 则需要更具体的约束和频繁检查。评论也讨论本地部署的真实成本，包括显卡、功耗、上下文长度、量化损失和维护时间。支持者看重隐私、可控性和固定成本；质疑者认为，如果把人工监督和失败返工算进去，云端模型仍可能更便宜。

---

## 7. 新版 Outlook 打开通知要等 10 秒，经典版却几乎瞬间完成 (Microsoft new Outlook takes 10 seconds to do what Outlook Classic does instantly)




Windows Latest 测试发现，在 Windows 11 中点击新邮件通知后，新版 Outlook 往往需要约 10 秒才能打开对应邮件，而 Outlook Classic 几乎立即完成。新版 Outlook 基于 WebView2，本质上加载 Outlook.com 的 Web 应用；微软用它替代了原生 Mail 与 Calendar，并持续推动经典 Win32 版用户迁移。通知跳转本应是最简单、最高频的操作之一，却要经历启动 Web 容器、加载页面和定位邮件等步骤，暴露了 Web 封装在桌面集成和响应速度上的代价。文章认为，这不仅是单个性能 bug，也反映微软以统一开发和云端体验换取本地性能后，用户承担的日常摩擦。

原文链接：https://www.windowslatest.com/2026/06/15/microsofts-new-outlook-takes-10-seconds-to-do-what-outlook-classic-does-instantly-on-windows/

论坛讨论链接：https://news.ycombinator.com/item?id=48584207

HN 评论迅速从 Outlook 延伸到现代桌面软件普遍的 Web 化。有人回顾自己从 Windows 转向 Linux的经历，认为越来越慢、越来越不可控的系统应用是重要原因。评论者质疑，硬件性能多年增长后，打开一封邮件反而比旧软件慢，是开发便利和组织目标压过用户体验的结果。也有人指出经典 Outlook 本身并不轻巧，但它在本地缓存、通知跳转和键盘工作流上仍经过多年优化，新版尚未补齐这些能力。

---

## 8. Emacs 31 快来了：这些新功能作者已经每天在用 (Emacs 31 is around the corner: The changes I'm daily driving)




作者提前编译并长期使用 Emacs 31 分支，整理了一组已经进入日常配置的新功能。最受期待的是 Tree-sitter 体验改善：语言源和模式配置更顺畅，减少过去手动维护 treesit-language-source-alist 的工作。文章还覆盖包管理、终端、窗口、编辑命令和内置功能增强，并以一个不依赖外部包的 Emacs Solo 配置展示具体用法。由于 Emacs 31 仍处预发布阶段，名称和默认值可能变化，但这些功能已能在开发分支中使用。文章的重点不是完整 changelog，而是从真实日常工作流筛出那些足以改变配置和减少第三方依赖的更新。

原文链接：https://www.rahuljuliato.com/posts/emacs-31-around-the-corner

论坛讨论链接：https://news.ycombinator.com/item?id=48584135

HN 评论一如既往出现“还有人用 Emacs 吗”的话题，资深用户回答自己已使用三十多年且没有更换计划。有人指出 Emacs/Readline 风格的光标快捷键广泛存在于 shell、浏览器输入框和网络设备 CLI 中，长期形成的肌肉记忆价值很高。讨论也关注 Emacs 31 能否把过去依赖插件的能力稳定纳入核心，以及 Tree-sitter 默认体验是否终于足够简单。整体气氛是老用户期待升级，新用户仍担心配置和学习成本。

---

## 9. Glojure：运行在 Go 生态里的 Clojure 解释器 (Clojure Hosted on Go)



Glojure 是一个以 Go 为宿主语言实现的 Clojure 解释器，目标是像 Clojure 调用 Java 框架一样，让 Lisp 风格代码直接访问 Go 库。项目支持独立命令行 REPL，也可以嵌入 Go 应用；Go 值和 Glojure 值能够互相使用。它目前仍处早期阶段，存在缺失特性、性能限制和兼容性变化，但已经能运行经过转换的部分 Clojure 核心库，并用于一些业余项目。项目与把 Clojure 语法编译成 Go 的方案不同，它强调“hosted language”模型，希望利用 Go 的运行时、工具链、静态二进制和跨平台生态，同时保留 Clojure 的交互式开发与数据处理方式。

原文链接：https://github.com/glojurelang/glojure

论坛讨论链接：https://news.ycombinator.com/item?id=48578326

HN 评论对在 Go 上构建更高层语言很感兴趣，并提到 Lisette 等 typed FP 项目。有人认为 Go 的运行时、部署和工具链非常适合作为语言宿主，也有人关心 REPL 的实现：是每次生成 Go 再编译，还是解释器内带完整运行环境。评论者期待项目成熟，因为它可能让 Go 服务获得动态配置、脚本和交互式调试能力；但早期性能、与 Go 类型系统互操作、错误信息和长期兼容性仍是关键挑战。

---

## 10. 有人给面包袋塑料夹建立了一整套伪生物分类学 (Taxonomy of the Occlupanida (parasitoids on bread bag tags))





HORG 的 Occlupanida Taxonomy 用严肃生物学语言，为面包袋上的塑料封口夹构建了一套完整的虚构分类系统。它把这些小物件归入 Microsynthera 界、Plasticae 门，再根据开口槽的齿形、边缘突起、尺寸和地域分布划分目、科、属和种。作者坦言，合成物没有基因、繁殖、发育和化石记录，因此只能像早期博物学家那样依靠形态分类，并画出复杂系统发育图。项目既是幽默网站，也是一种对日常工业设计差异的长期收藏和记录：那些通常被忽略、用完即弃的小塑料件，被赋予了生态位、演化关系和拉丁学名。

原文链接：https://www.horg.com/horg/?page_id=921

论坛讨论链接：https://news.ycombinator.com/item?id=48578388

HN 评论配合网站设定，以学术口吻争论塑料夹边缘的小突起究竟是生殖残留、运动结构还是趋同演化特征。有人指出单靠形态容易把功能相似但来源不同的结构误判为同源，也有人尝试根据制造模具和断裂点建立更合理的“遗传谱系”。讨论的乐趣在于集体维持这套伪科学世界观，同时也真实触及分类学问题：当缺乏基因和历史记录时，人们如何从形态推测关系。

