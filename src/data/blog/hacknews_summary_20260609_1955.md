---
title: "小米 MiMo 1T 模型冲到每秒 1000 tokens | Hacker News 摘要 (2026-06-09)"
author: "hacknews"
description: ""
digest: "小米 MiMo 团队与 TileRT 合作发布 MiMo-V2.5-Pro-UltraSpeed，宣称首次让 1 万亿参数模型在生成阶段突破 1000 tokens/s，峰值可接近 1200 tokens/s。官方把它定位为限时申请制 AP"
source_url: "https://mimo.xiaomi.com/blog/mimo-tilert-1000tps"
pubDatetime: 2026-06-09 19:55:28.410+08:00
tags:
  - "AI模型"
  - "社交媒体"
  - "隐私安全"
  - "开源项目"
---

---

## 1. 小米 MiMo 1T 模型冲到每秒 1000 tokens (MiMo-v2.5-Pro-UltraSpeed: 1T model with 1000 tokens per second)




小米 MiMo 团队与 TileRT 合作发布 MiMo-V2.5-Pro-UltraSpeed，宣称首次让 1 万亿参数模型在生成阶段突破 1000 tokens/s，峰值可接近 1200 tokens/s。官方把它定位为限时申请制 API：价格约为普通 MiMo-V2.5-Pro 的 3 倍，但生成速度约 10 倍，试用窗口为 2026 年 6 月 9 日至 6 月 23 日。文章强调，这种速度不是简单让文本打字更快，而是可能改变推理和智能体工作流：同样时间内可以并行尝试更多推理路径、做 Best-of-N 或 Tree Search，自我验证和修正也更快。技术上，它依赖模型和系统协同设计，包括面向商用 GPU 带宽瓶颈的 FP4 量化、DFlash speculative decoding、block-level masked parallel prediction 等，以避免只靠专用硬件实现极限吞吐。

原文链接：https://mimo.xiaomi.com/blog/mimo-tilert-1000tps

论坛讨论链接：https://news.ycombinator.com/item?id=48446639

HN 讨论对“快模型”既兴奋又不安。有人说当前 agent 任务常常跑几十分钟到数小时，如果接近实时，开发者的注意力管理和工作节奏都会改变；等待时间减少可能让人更专注，也可能让 AI 更快侵入原本人类需要数小时完成的工作。也有人质疑 token/s 不是全部：如果模型为完成任务消耗更多 token，单 token 速度优势可能被抵消。评论还比较了 DeepSeek、Claude、Gemini Flash 等模型的实际吞吐，认为供应商、路由和 benchmark 场景会显著影响体验。

---

## 2. Apple Intelligence 转向 Google Gemini 架构 (Apple reveals new AI architecture built around Google Gemini models)



MacRumors 报道称，Apple 公布了 Apple Intelligence 的重大架构调整，新方案围绕与 Google 深度合作开发的 Apple Foundation Models 展开，使用 Gemini 系列背后的技术，并适配本地设备和 Private Cloud Compute。新模型将支持更强的理解、推理和多模态能力，包括图像理解、图像生成、照片编辑、视觉问答、语音生成和更准确的听写。Apple 还引入系统级 orchestrator，用来根据当前 App 和用户任务协调 AI 功能，试图把外部模型能力包装成跨平台的系统智能。Apple 同时继续强调隐私路线：请求只用于当前任务，数据不向 Apple 或第三方开放，并允许外部专家验证 Private Cloud Compute 的保证。文章的关键在于，Apple 似乎选择用 Google 模型补齐能力短板，同时把差异化押在设备端、云端隐私和系统整合上。

原文链接：https://www.macrumors.com/2026/06/08/apple-reveals-new-ai-architecture/

论坛讨论链接：https://news.ycombinator.com/item?id=48450142

评论区认为这很符合 Apple 风格：把外部模型放进自家隐私架构和系统体验里，产品化 orchestrator，而不是单纯追模型参数。争议集中在“隐私”和“数据保护”的区别：有人认为 Apple 更像是在提供技术性隐私保障，而 Microsoft 等企业方案更多靠法律和合规承诺。也有人怀疑手机上的 AI 到底需要做什么，认为专业场景使用 AI 很多，但个人设备上的系统级 AI 价值仍有待证明。

---

## 3. AI 放缓了吗？一篇唱衰泡沫的长文又吵翻 HN (AI is slowing down)





Ed Zitron 在《AI is slowing down》中继续批评生成式 AI 泡沫，核心论点是：AI 行业不仅技术增速可能放缓，财务结构也难以维持。文章估算，规划中的数据中心建设、GPU 采购、云计算承诺和模型公司烧钱速度，需要未来几年产生数万亿美元级收入才能自洽。作者把矛头指向 NVIDIA、OpenAI、Anthropic、Google、Meta、Oracle、CoreWeave 等公司之间的资本支出、债务、股权融资和 compute commitment，认为行业靠越来越大的融资和基础设施承诺制造增长叙事，而实际商业收入远不足以覆盖成本。文章语气强烈，既批评 AI 叙事中的夸张宣传，也质疑市场是否低估了数据中心债务和资本循环的风险。

原文链接：https://www.wheresyoured.at/ai-is-slowing-down/

论坛讨论链接：https://news.ycombinator.com/item?id=48446893

讨论区几乎和文章一样激烈。有人试图抓住核心数字，追问 AI 到 2030 年是否真的需要 3 万亿美元收入，并用美国工资总额和就业数据做粗略对比。更多评论则质疑作者的可信度，认为他长期唱衰 AI、写作风格煽动、预测记录糟糕，也有人要求拿出他具体预测错误的证据。整体上，支持者认为文章至少提出了资本开支和回报错配问题，反对者则认为这是面向反 AI 读者的情绪产品，分析质量不足。

---

## 4. 社交媒体不再社交，算法内容取代朋友动态 (Anti-social: It's fads, not friends, which now dominate social media feeds)



BBC 这篇文章观察到，Instagram、Facebook、TikTok、Snapchat 等平台正在从朋友间交流工具，转向以短视频和推荐内容为核心的娱乐消费场。受访用户说，自己打开 Instagram 已经很少看到朋友动态，更多是室内设计、动物、广告和创作者内容；年轻用户也更倾向于被动观看陌生人的视频，而不是发布自己的生活。文章引用法国、英国和美国数据说明主动发帖比例下降：英国 Ofcom 报告显示活跃发布用户从 61% 降至 49%，美国调查中只有 33% 每日发布，而 57% 每天把社交平台当娱乐使用。专家认为，真正的私人社交正在转移到 WhatsApp、私密群组和阅后即焚故事里，而大型平台由于广告模式，更偏好让用户沉浸在算法推荐和商业内容中。

原文链接：https://www.bbc.com/worklife/article/20260520-how-social-media-ceased-to-be-social

论坛讨论链接：https://news.ycombinator.com/item?id=48444228

HN 讨论很快转向“HN 算不算社交媒体”。有人指出，文章描述的匿名内容发现和 Hacker News 的使用方式并不遥远，HN 早在 15 年前就承认 social news site 可能令人上瘾，并提供 noprocrast 限制访问时间。评论者也承认，当人们卸载 Instagram、X 或 Reddit 后，很容易把注意力转移到 HN、LinkedIn 等其他信息流上。核心共识是，问题不只是哪一个平台，而是大脑已经习惯在空闲时寻找新的分心来源。

---

## 5. Signal 反对英国内容扫描：监控不是儿童安全 (Surveillance is not safety: A statement on the UK's latest threat to privacy [pdf])


Signal 发布声明，反对英国政府以儿童安全为名推动的设备内容扫描和年龄验证方案。声明认为，要求英国销售或使用的设备扫描所有内容是否包含裸露，并结合年龄验证，会把基本通信权变成默认受监控的行为。这类基础设施一旦建立，就很难只限于儿童保护或裸露检测，未来可能扩展到政治言论、其他“有害内容”或政府不喜欢的对象。Signal 还批评这种方案会强化 Apple、Google、Microsoft 等平台对个人数据和设备的控制，同时忽视真正能保护儿童的措施，例如教育、社会服务和对 AI 平台的实际护栏。文章的立场是，儿童确实需要保护，但不应以全民设备级监控作为代价。

原文链接：https://signal.org/blog/pdfs/2026-06-08-uk-surveillance-is-not-safety.pdf

论坛讨论链接：https://news.ycombinator.com/item?id=48450646

HN 讨论把矛头指向 secure boot、remote attestation、DRM 和 App Store 审核等技术基础设施。有人认为，技术行业过去把最终控制权从用户手里转移给公司，如今政治力量自然会要求把这些控制权再转移给政府。评论者质疑做这些系统的人是否预见到这种结局：如果公司可以为了抽成和审核内容锁定设备，政府当然也会想要同样的规则制定和审查能力。另一条讨论线强调，不合理法律应该被审视和修改，而不是因为“这是法律”就默认执行。

---

## 6. 有人从化学原理推导出一套煎饼公式 (Show HN: I Derived a Pancake)





《I Derived a Pancake》是一篇把煎饼当工程问题优化的长文。作者做了 25 年煎饼，厌倦了不同食谱之间的经验主义和杯量不精确，于是从酸碱中和、二氧化碳生成、面筋抑制、Maillard 反应和配料组成出发，建立了一个交互式煎饼计算器。用户可以勾选手头有的酸奶、kefir、buttermilk、ricotta、柠檬、cream of tartar 等材料，计算器根据酸、脂肪、盐、糖和 CO2 目标生成配方。文章把煎饼质量拆成内部质地、酸味、膨发结构和外皮酥脆四个轴，并解释不同膨发来源在不同时间尺度上如何作用。作者特别喜欢 yeast-raised lemon ricotta kefir pancakes，也承认自己不是化学家，欢迎读者指出错误。

原文链接：https://www.absurdlyoptimized.com/recipes/pancakes/

论坛讨论链接：https://news.ycombinator.com/item?id=48408854

HN 评论一边赞叹“为了煎饼写到荒谬细节”的认真，一边调侃现实早餐场景：早上 7:30、孩子和狗都在催，十小时等待显然不适合普通家庭。作者还根据评论添加了更快出饼的选项。有人建议加入 time-to-pancake slider，也有人指出默认 tang 设置太高才会引入发酵和长等待，调低后会更接近日常 quickbread。讨论整体轻松，许多人认为这个项目好玩之处就在于把平凡食物做成可计算、可调参的系统。

---

## 7. Performative-UI：一套专门讽刺 AI 创业审美的 React 组件 (Show HN: Performative-UI – A react component library of design tropes)

Performative-UI 是一个 MIT 许可的 React 组件库，收录 27 个“AI 原生”设计套路组件，把当下 AI 创业公司官网的视觉陈词滥调用可复用组件包装起来。组件包括 Sparkle、GradientText、StatusDot、PromptHero、AsciiHero、Aurora、NodeGraphBackground、GlassCard、MockIDE、TokenStream、LogoMarquee、StatCounter、PricingCard、WaitlistForm 等，每个组件都配有讽刺文案：比如“AI builder 用 textarea 代替解释产品价值”“三团渐变 blob 定义一个时代”“中间价格卡在发光，所以你该选它”。它既是可安装的前端库，也是对同质化 SaaS/AI 落地页的一次小型文化吐槽。项目本身非常 meta：用最典型的 AI 网站套路，展示 AI 网站套路已经被抽象成组件。

原文链接：https://vorpus.github.io/performativeUI/

论坛讨论链接：https://news.ycombinator.com/item?id=48445554

评论区讨论这些“表演型 UI”为什么会流行。有人说自己做过简单直白的网站，却被用户认为“不够认真”，因为缺少这些视觉信号；就像 YouTube 主播反复求订阅一样，之所以做，是因为数据表明有效。也有人认为，闪亮官网确实影响第一印象，干净、现代的设计会让人推断产品也更可靠。但反对者抱怨 hero 动画增加 GPU 和功耗，且许多创业公司网站看起来过于相似。大家基本认同，这个项目讽刺的不是“网站不该好看”，而是所有公司都套同一组信号。

---

## 8. Dopamine Fracking：把一切体验压榨成多巴胺 (Dopamine Fracking)



作者提出“Dopamine Fracking”这个词，用来描述把金钱、数据、优化、热门共识和规模化生产注入原本复杂、随意或有层次的活动中，只为榨取最浓缩多巴胺的现象。它像水力压裂一样，短期产出强烈刺激，长期破坏文化、创造力和连接。文章从药物脱离原有文化语境后的工业化谈起，延伸到社群、音乐、视频、电影、网站和食物如何被优化成单一刺激点。草莓例子很典型：真实草莓有复杂风味和差异，但工业食品可以提取最像草莓的香味化合物并到处使用，便宜、稳定、强烈，却抹平了体验的丰富性。作者认为，现代互联网文化也在用类似方式制造内容，让一切趋向更快、更强、更可复制的刺激。

原文链接：https://igerman.cc/blog/dopamine-fracking/

论坛讨论链接：https://news.ycombinator.com/item?id=48440792

HN 用户很喜欢这个词，尤其用来描述 YouTube 和儿童内容。有人举例说，平台上出现大量复制热门创作者、分屏加入随机 DIY 视频、AI 配音编造情绪故事并诱导儿童点赞订阅的内容，明显是在榨取低龄用户注意力。家长评论尤其强烈，不少人说已经限制或屏蔽 YouTube，只允许孩子在监管下观看少量精选内容，因为默认推荐流会迅速滑向垃圾内容。讨论的主线是，平台利润和用户福祉之间的冲突，在儿童内容上表现得最刺眼。

---

## 9. 1worldflag：一面透明背景上的蓝点世界旗 (1worldflag: A blue dot on a transparent background)



1worldflag 是一个世界旗设计项目：透明背景中间放一个蓝色圆点，象征我们共同生活的蓝色星球。项目方认为，传统旗帜往往代表国家、地区或群体差异，而 One World Flag 想表达“超越差异的共同归属”。透明背景意味着旗帜会随着环境变化而适应周围场景，蓝点则指向地球本身。项目不试图替代国家旗帜，而是作为统一和共同未来的象征。网站还介绍了 Nomad magazine 的旗帜传递项目，以及与德国 NGO ARTHELPS 在乌克兰开展的“Flag Your ID”工作坊，参与者通过设计自己的旗帜思考身份、价值和归属。整体更像一个艺术/社会设计项目，而不是正式政治提案。

原文链接：https://1worldflag.com/

论坛讨论链接：https://news.ycombinator.com/item?id=48440435

评论区列举了许多已有的地球旗设计，并讨论这面蓝点旗是否太像日本国旗或某些品牌标志。有人喜欢 James W. Cadle 1970 年的地球旗，认为更像传统旗帜又能清楚代表地球。也有人开玩笑说白旗更适合代表和平与谈判，但立刻被指出白旗常与投降相连，氛围不对。还有评论提到日本正在讨论国旗亵渎相关法律，如果蓝点旗被视为改造日本国旗，可能引发右翼攻击。讨论轻松但也显示，旗帜符号很难做到完全中立。

---

## 10. 和那些没能实现的人生梦想和解 (Making peace with your unlived dreams (2023))


这篇 2023 年旧文谈的是如何面对“未曾生活过的人生”。作者以自己永远无法成为优秀 snowboarder 为例：因为膝盖问题，他不适合滑雪、网球或任何重负荷运动。起初他会愤怒，觉得人生夺走了这条可能性；但后来意识到人生足够大，也足够短，即使中大奖拥有无限时间，也不可能把所有想学的事都做到极致。作者还想学功夫、精通更多游戏、重拾卡牌爱好、掌握多种语言，但现实中还要工作、陪伴伴侣、家人和朋友。结论不是彻底放弃想象，而是学会让某些梦想停留为梦想：通过视频、书籍和想象与它们相处，不必把每个愿望都变成待完成任务。选择有限的人生样本，本身就是生活的一部分。

原文链接：https://nik.art/making-peace-with-your-unlived-dreams/

论坛讨论链接：https://news.ycombinator.com/item?id=48437290

评论区把主题延伸到“已知不可能”和“未知是否可能”的区别。有人说，能确定自己永远不能做某些事时，反而可以和解；真正折磨人的是不知道能否买房、能否找到伴侣、能否实现某些人生目标。也有人回应说，重点是享受过程而不是执着终点，因为追逐梦想会改变人，原来的目标可能消退，新目标会出现。另一条评论引用宁静祷文：接受不能改变的事，改变应该改变的事，并拥有区分二者的智慧。

