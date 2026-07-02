---
title: "人工合成细胞首次完成生长、复制与分裂 | Hacker News 摘要 (2026-07-02)"
author: "hacknews"
description: ""
digest: "Quanta 报道了一项合成生物学进展：研究人员把非生命分子逐步装入类似细胞膜的结构中，使这个人工合成细胞能够生长、复制 DNA 并分裂，首次展示了更接近完整细胞周期的行为。研究者强调这还不是“活细胞”：它无法独立生存，需要持续补充营养和核"
source_url: "https://www.quantamagazine.org/for-the-first-time-a-cell-built-from-scratch-grows-and-divides-20260701/"
pubDatetime: 2026-07-02 21:41:19.525+08:00
tags:
  - "合成生物学"
  - "数字所有权"
  - "开发工具"
  - "开放基础设施"
---

---

## 1. 人工合成细胞首次完成生长、复制与分裂 (For first time, a cell built from scratch grows and divides)





Quanta 报道了一项合成生物学进展：研究人员把非生命分子逐步装入类似细胞膜的结构中，使这个人工合成细胞能够生长、复制 DNA 并分裂，首次展示了更接近完整细胞周期的行为。研究者强调这还不是“活细胞”：它无法独立生存，需要持续补充营养和核糖体，也缺少防御和废物处理系统。但它是从非生命组件产生类生命行为的重要 proof of concept。由于所有部件都在实验室构建，科学家可以替换和调整分子组件，用它研究生命最小条件、生命起源以及生物系统还能被重新组合成什么。关键突破在于绕开天然细胞复杂的细胞骨架分裂机制，通过膜蛋白招募其他蛋白，让膜发生弯曲并完成分裂。

原文链接：https://www.quantamagazine.org/for-the-first-time-a-cell-built-from-scratch-grows-and-divides-20260701/

论坛讨论链接：https://news.ycombinator.com/item?id=48747304

HN 讨论集中在“这是否算创造生命”和真正创新点。有人引用正文指出，过去合成细胞领域已能供养、增长和复制 DNA，但细胞分裂一直卡住；这次的聪明之处不是重建整个细胞骨架，而是用蛋白标签诱导膜弯曲，侧面解决分裂问题。也有评论提醒不要过度宣传，研究者自己也承认它离完整生命还有很多步骤，比如自主代谢、持续复制、废物处理和稳健进化。整体评价是重要但有限的第一步，更像是把生命系统的若干模块拼出可实验的平台，而不是已经制造出真正生命。

---

## 2. PlayStation 2028 年起停止新游戏实体光盘生产 (Physical disc production ending in Jan 2028 for new games on PlayStation)




Sony Interactive Entertainment 宣布，从 2028 年 1 月开始，所有新发行的 PlayStation 主机游戏将停止实体光盘生产，改为只通过 PlayStation Store 和零售商销售数字版。官方说法是消费者偏好和娱乐行业都在转向数字媒体，数字访问已明显超过实体光盘；此举不会影响 2028 年 1 月前已经发行或计划发行实体版的游戏。Sony 表示会继续把资源投入到玩家获取游戏的新方式，并保留零售和 PlayStation Store 等购买渠道。公告同日还关联了 PS3 和 PS Vita 商店的重要更新，使这次转向数字化的决定更加引发关于旧平台、授权和长期访问权的担忧。

原文链接：https://blog.playstation.com/2026/07/01/physical-disc-production-ending-in-january-2028-for-new-games-releasing-on-playstation-consoles/

论坛讨论链接：https://news.ycombinator.com/item?id=48745456

评论区强烈质疑数字所有权。有人指出，Sony 刚刚又从用户库中移除了数百部已“购买”的电影且没有退款，这正好提醒大家数字内容很多时候只是租用而非真正拥有。还有人提到 PS3 和 Vita 商店关闭，与停止光盘生产放在同一天宣布，是很糟糕的信任铺垫。部分评论认为 Sony 正把历史决策成本转嫁给消费者：如果当初影视内容合同没有保障已售副本不可撤销，或者旧主机授权密钥会随硬件老化失效，用户最终会承担损失。讨论焦点是平台锁定、授权续期和实体媒介作为最后退路的消失。

---

## 3. Cloudflare 推 x402 Monetization Gateway，为网页、API 和 MCP 工具按次收费 (Monetization Gateway: Charge for any resource behind Cloudflare via x402)



Cloudflare 发布 Monetization Gateway，允许客户对 Cloudflare 保护下的任意资源收费，包括网页、数据集、API 和 MCP 工具。它提供统一控制平面来管理支付策略和访问控制，并保护源站免受高频支付请求压力。文章把这一产品放在 AI agent 时代的资源付费问题中解释：当 agent 需要搜索、读取内容、调用 API 或使用工具时，支付单位可能从传统的座席/月费转向请求、token、上传大小或成功结果。Cloudflare 举例说，可以按每次 web search 收几美分、按上传 MB 收费，或按成功解决客服工单收费。它试图把此前只适合已知 API key 买家的计量计费，扩展到更开放的、可验证的小额交易场景。

原文链接：https://blog.cloudflare.com/monetization-gateway/

论坛讨论链接：https://news.ycombinator.com/item?id=48746914

评论两极分化。一部分人兴奋地认为这可能实现长期被期待的微支付和 agent 代付：用户给 agent 一个预算，让它像人类代理一样按需为新闻、API 或资源付几分钱，而不必管理一堆 API key。Cloudflare 团队成员也回应说，支出委托和权限控制是重点，必须限制 agent 出错时的损失。另一部分评论强烈反感，认为从游戏、手机 app 到网页，万物微交易化只会让用户体验变差，并追问隐私后果。讨论核心是：agent 经济需要新的支付基础设施，但它也可能把互联网进一步切碎成处处付费的资源池。

---

## 4. FFmpeg 9.1 新 AAC 编码器改写完成 (FFmpeg 9.1's new AAC encoder)


HydrogenAudio 论坛帖介绍了 FFmpeg 9.1 的新 AAC 编码器。作者称这次是一次重写，目标是在只使用 TNS 等基础工具时先公平追上其他 AAC 编码器，再在此基础上重新实现 PNS、Intensity Stereo、Mid/Side 等工具。新编码器把 PNS、TNS、I/S、M/S 都纳入 RDO 循环，而不是依靠固定启发式或任意码率阈值；如果某个工具有帮助，就会自动使用。作者还逆向研究了 qaac，认为其没有真正做感知优化，而是用偏向高频的 bit allocation 曲线，因此新实现改为使用 masked band energy。编码器主要针对 48 kHz 音频优化，高码率场景也受到特别关注。

原文链接：https://hydrogenaudio.org/index.php/topic,129691.0.html

论坛讨论链接：https://news.ycombinator.com/item?id=48747116

讨论一开始就拿 Opus 作对比：有人认为 benchmark 反而展示了 Opus 的强大，尤其 64 kbps 下仍明显领先各类 AAC 编码器。但其他评论指出，高质量 AAC 编码器仍很重要，因为过去近二十年直播视频事实标准基本是 H.264 视频加 AAC 音频，RTMP、YouTube、Twitch、OBS 等生态默认都围绕它运转。即使部分平台开始支持 H.265、VP9 或 AV1，音频侧经常仍要求 AAC。讨论因此从“新编码器是否最优”转向“老标准为什么仍重要”：AAC 的价值更多来自兼容性、直播链路和硬件/平台支持，而不是纯效率。

---

## 5. 实时图形程序员该学什么：从渲染 API 到 PBR (What to learn to be a graphics programmer)


Demofox 写了一份面向想成为实时图形程序员的学习路线。作者认为现代渲染像两份工作：一是 CPU 侧，学习 DirectX 12、Vulkan、Metal 等显式图形 API，以及资产加载和引擎支持代码；二是 GPU 侧，理解现代光照、着色、阴影、环境光遮蔽、后处理，以及 GPU 上哪些操作快、哪些慢。初学者很难同时精通两侧，所以如果目标是学习渲染技术，可以先用 OpenGL、WebGL、DX11 或现有引擎降低 CPU 侧复杂度；如果目标是显式 API，则先把三角形、网格等基础跑起来。文章建议写 path tracer、学习 PBR、阅读 Ray Tracing in One Weekend、LearnOpenGL、Filament 和 PBRT，并把可展示源码放到 GitHub。

原文链接：https://blog.demofox.org/2026/07/01/what-to-learn-to-be-a-graphics-programmer/

论坛讨论链接：https://news.ycombinator.com/item?id=48750710

评论补充了职业选择现实：如果目标是做游戏，用 Unreal、Unity、Godot 或 Bevy 这类现有引擎更实际，可以学习高层图形问题而不是底层像素推进；真正做 3D engine programming 则要意识到工程规模，很多自制引擎项目停在“第一个渲染器”附近，离可承载复杂动态场景还有很长距离。也有人提醒游戏行业薪资、工时和稳定性都不理想，项目结束后岗位消失很常见，竞争又非常激烈。另一方认为不必都去追 Unreal 级画质，做出基本 renderer 和 game loop 并不难，关键是明确自己要学底层技术还是要做可玩的作品。

---

## 6. ZCode 发布：面向 GLM-5.2 的桌面 AI 编程 Harness (ZCode – Harness for GLM-5.2)


ZCode 官方页面把它定位为 GLM-5.2 的简单、快速、适合 vibe coding 的 harness。它提供桌面应用和文档入口，主打把 AI agents 与现有工具结合，让用户完成规划、编码、review 和部署。页面展示了任务列表、工作区、技能、项目任务和 agent 执行记录，例如从空仓库创建 Gomoku 游戏、检查项目结构、写入 index.html/app.js/styles.css、调试 UI 和逻辑等。产品叙事强调多任务管理、任务历史、下载客户端和可视化工作流，和纯 CLI agent 相比更偏桌面工作台。页面抓取里包含大量演示任务文本，反映它主要想把 agent 运行过程包装成可跟踪、可复用的开发环境。

原文链接：https://zcode.z.ai/en

论坛讨论链接：https://news.ycombinator.com/item?id=48753715

HN 讨论集中在架构和信任。有人遗憾它似乎不支持 ACP，认为编辑器、harness 和 LLM 之间应有清晰分层，让 editor 继续做 editor，harness 负责 agent 协调，模型只负责推理。也有人惊讶它似乎不是开源，并拿小米 MiMo Code 这种 CLI 项目对比。关于桌面 app 的评论更尖锐：一些开发者习惯在 headless VM 中运行 agent，并使用隔离环境甚至危险权限，不愿把高权限 AI 工具直接放到自己的桌面/笔记本上。也有人指出，好的桌面 app 可以管理多个远程 SSH host，但反方认为 CLI 也能做到，没必要把一切都推向 IDE 化。

---

## 7. Box2D 作者发布开源 3D 物理引擎 Box3D (Box3D, an open source 3D physics engine)


Erin Catto 宣布发布 Box3D，一个开源 3D 物理引擎，可视为从 Box2D 扩展而来的 3D 版本。它保留了接近 Box2D 的核心架构，同时加入 3D 游戏需要的特性：三角网格碰撞、高度场碰撞、baked compound collision、C API、C17 源码、sub-stepping solver、连续碰撞、大 island 图着色、宽 SIMD contact solver、多线程钩子、可选内部 scheduler、大世界双精度位置、跨平台确定性以及录制/回放。作者解释开发动机之一来自自己参与的游戏 The Legend of California：Unreal 原生物理在树木倒下、陀螺力矩、大规模实体 broad-phase 等场景上无法满足需求。后来他基于 Rubikon-Lite 和 Box2D v3 优化经验，逐步形成 Box3D。

原文链接：https://box2d.org/posts/2026/06/announcing-box3d/

论坛讨论链接：https://news.ycombinator.com/item?id=48745445

评论区首先回忆 Box2D 与 Angry Birds 的旧故事：有人提到当年 Box2D 作者在 Rovio 演讲现场询问游戏用了什么物理引擎，营销负责人答出 Box2D 后，作者追问为什么没有出现在 credits 中。这个故事引发了关于开源公平性的讨论：Angry Birds 产生巨大收入，但 Box2D 作为 MIT 授权软件，法律上并不要求使用者付费或署名之外的回报。有人觉得维护者应该得到更多支持，也有人指出 MIT 许可本身就是允许任何人免费使用，不能事后再说商业成功不公平。讨论从 Box3D 新发布自然延伸到开源基础设施如何获得回报。

---

## 8. Anthropic 称 Claude Fable 5 与 Mythos 5 出口限制解除 (Department of Commerce has lifted export controls on Claude Fable 5 and Mythos 5)


Anthropic 在 X 上表示，已经收到美国商务部通知，Claude Fable 5 和 Mythos 5 的出口管制已经解除，公司将从次日开始恢复访问，并随后分享进一步更新。帖文本身很短，主要信息是两个模型此前受到限制，现在准备重新部署。由于来源是社交媒体页面，抓取到的正文包含 X 的登录、注册和页面装饰信息，但核心内容明确：Anthropic 感谢用户等待，也感谢参与模型重新部署的人。相比长篇产品公告，这条更像是一个政策和可用性状态更新，影响的是此前无法访问这些模型的用户和地区。

原文链接：https://twitter.com/AnthropicAI/status/2072106151890809341

论坛讨论链接：https://news.ycombinator.com/item?id=48740771

HN 评论没有围绕政策细节展开太多，而是转向对商业闭源 AI 供应商的依赖风险。有人表示正在把公司迁移到私有开源 AI 栈，原因是大模型实验室进入应用层后，API 交互本身会暴露产品开发和创新数据，供应商可能用这些数据反向竞争。评论把这种风险类比为知识服务公司偷走客户信息后再服务竞争对手。另一位评论则认为开源也不是无条件安全，企业要在第三方前沿模型能力和自控模型栈之间权衡；对客服等任务，未必需要最前沿能力，自主管控推理栈可能更合理。
