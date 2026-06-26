---
title: "两千年前的赫库兰尼姆卷轴，首次被完整读出 | Hacker News 摘要 (2026-06-26)"
author: "hacknews"
description: ""
digest: "Vesuvius Challenge 宣布，公元 79 年维苏威火山喷发中被碳化封存的赫库兰尼姆纸草卷 PHerc. 1667，已经在不物理展开的情况下被完整虚拟展开并从头到尾读出。团队通过高分辨率 X 射线扫描重建卷轴内部层层缠绕的纸草结"
source_url: "https://scrollprize.org/firstscroll"
pubDatetime: 2026-06-26 20:15:19.651+08:00
tags:
  - "AI与计算"
  - "隐私治理"
  - "开发者工具"
  - "科学突破"
---

---

## 1. 两千年前的赫库兰尼姆卷轴，首次被完整读出 (An entire Herculaneum scroll has been read for the first time)


Vesuvius Challenge 宣布，公元 79 年维苏威火山喷发中被碳化封存的赫库兰尼姆纸草卷 PHerc. 1667，已经在不物理展开的情况下被完整虚拟展开并从头到尾读出。团队通过高分辨率 X 射线扫描重建卷轴内部层层缠绕的纸草结构，再把它展平成可读表面，并用机器学习增强极其微弱的墨迹信号。卷轴残存部分约 8 厘米高、1.4 米长，包含约 22 列希腊文，内容是一篇伦理学哲学论述，可能与斯多葛学派、Aristocreon 和 Chrysippus 相关。除 PHerc. 1667 外，团队还在 PHerc. Paris 4 中用更高分辨率直接看到墨迹，并在 PHerc. 139 中恢复出标题和作者归属。数据和代码均开放，目标是把方法扩展到仍然封存的数百卷古代文献。

原文链接：https://scrollprize.org/firstscroll

论坛讨论链接：https://news.ycombinator.com/item?id=48675179

HN 讨论的情绪很强，很多人被时间尺度击中：两千年前写下的思想，经历火山毁灭、碳化保存，又被现代 X 射线、机器学习和全球网络重新带回人类视野。有人由此讨论我们今天是否有能力想象两千年后的技术形态，类比“足够先进的技术近似魔法”。也有人关注实际文本质量、残缺程度和未来批量读取潜力。整体共识是，这不是单纯的 OCR 成果，而是开放科学、成像技术、算法和人文学术协作的里程碑。

---

## 2. 互联网进入“请出示证件”时代，隐私会被年龄验证吞掉 (The 'papers, please' era of the internet will decimate your privacy)


FIRE 的文章警告，各国以保护未成年人为名推动的年龄验证，正在把互联网推向“papers, please”模式。作者以澳大利亚 2025 年底生效的 16 岁以下社交媒体禁令为例：平台为了避免巨额罚款，需要用既有数据推断年龄，或要求用户通过第三方服务提交政府 ID、人脸自拍、银行连接等敏感信息。问题在于，这不仅没明显减少青少年使用社交媒体，反而把普通用户的线上发言和现实身份更紧地绑定在一起。文章强调，年龄验证本质上常常就是身份验证，尤其当用户讨论政治、医疗、虐待经历或其他敏感话题时，提交证件会带来寒蝉效应、数据泄露和政府/平台滥用风险。

原文链接：https://expression.fire.org/p/the-papers-please-era-of-the-internet

论坛讨论链接：https://news.ycombinator.com/item?id=48679608

评论区讨论匿名凭证等技术方案：理论上可以证明“超过某年龄”而不暴露身份，也不能跨站关联。但反对者指出，如果验证凭证可以转借，未成年人仍能绕过；如果要阻止转借，就必须把凭证绑定到真实身份，并引入现实世界惩罚，这正会走向文章警告的身份化互联网。很多人认为，没有完全技术化的解法，只能在“足够好”的家长控制、低摩擦年龄估计和强隐私保护之间取舍。社区分歧在于：是接受有限有效性，还是为了执行力牺牲匿名性。

---

## 3. IBM 展示 0.7 纳米芯片技术，但“亚纳米”更像路线图 (IBM debuts sub-1 nanometer chip technology)





IBM 宣布推出所谓全球首个 sub-1 nanometer 芯片技术，称其 0.7nm/7Å 级“nanostack”三维芯片架构可在指甲大小芯片上容纳近 1000 亿个晶体管，密度接近 2021 年 IBM 2nm 芯片的两倍，并在未来十年继续推动逻辑芯片缩放。核心创新是三维 nanosheet-based nanostack：把晶体管垂直堆叠和错位排列，通过 3D sequential integration 提高密度，同时允许不同层使用不同材料组合以优化性能和功耗。IBM 称该技术在 CMOS 集成、双沟道工程和 CMOS inverter 操作上得到实验验证，预计相比 2nm 节点可提升最多 50% 性能或 70% 能效。不过文章也承认现代“节点”更多指制造技术世代，而非真实几何尺寸。

原文链接：https://newsroom.ibm.com/2026-06-25-ibm-debuts-worlds-first-sub-1-nanometer-chip-technology

论坛讨论链接：https://news.ycombinator.com/item?id=48674967

HN 讨论明显怀疑营销口径。评论者指出，所谓 0.7nm 并不等于芯片中横向结构真的小于 1nm；实际交付的是一种 nanostack 架构，其特征尺寸和行业节点命名之间仍有很大距离。也有人补充，硅基 FET 的 gate length 有物理下限，真正继续缩小可能需要新半导体材料；垂直层厚可以做到纳米甚至亚纳米，但这不直接等同于电路密度。整体评价是：IBM 的三维堆叠和材料工程确实有技术价值，但“sub-1nm”标题带有强烈市场化包装。

---

## 4. GLM-5.2：开放权重模型开始逼近可用 coding agent (GLM-5.2 is a step change for open agents)




Nathan Lambert 认为 GLM-5.2 是开放权重 agent 能力的一次台阶式提升。它在 Claude Fable 5 受到出口限制争议后由 Z.ai 发布，最初像是 GLM-5.1 的小版本更新，但实际使用反馈显示它跨过了一个重要用户体验阈值。作者认为，GLM-5.2 是第一个在 coding harness 中“感觉像通用 agent”的开放权重模型，生态反馈和社区基准都比单纯官方 benchmark 更有说服力。它在 agent leaderboard、Design Arena 等评测中开始与 OpenAI、Anthropic 高端模型同台竞争，甚至被类比为 DeepSeek R1 之后又一次开放模型时刻。意义在于，Claude Code 这类产品曾依赖闭源最强模型形成优势，而 GLM-5.2 证明开放权重模型也能提供可信替代。

原文链接：https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open

论坛讨论链接：https://news.ycombinator.com/item?id=48639840

评论区重点是成本和可及性。有人说个人使用 coding AI 每月 200 美元并不现实，对世界大多数地区尤其昂贵；开放权重模型即使落后 6–9 个月，只要推理价格低、能力足够，就能缩小“AI 工具富人”和普通开发者之间的差距。也有人分享自己每月为客户项目花数百美元 LLM 费用，这在本地已接近平均工资，形成不公平竞争优势。更强的开放模型会降低这种差距。讨论总体认可开放权重对全球开发者生态的重要性。

---

## 5. NVIDIA 45°C 液冷：AI 数据中心不用冷水也能降耗 (45°C cooling design cuts data center water use to near zero)




NVIDIA 介绍了其 Rubin 代 AI 基础设施采用的 45°C 液冷设计：服务器冷却液温度甚至高于热水浴缸，但这正是提升效率的关键。新架构号称实现 100% 液冷，芯片和网络组件都由闭环液体系统冷却，系统内无需风扇。因为热量直接在芯片处被捕获并通过较高温液体带走，数据中心可以在很多气候下使用 dry cooler 而不是蒸发式冷却塔，从而把传统每兆瓦每年约 260 万加仑的冷却用水降到接近零。NVIDIA 称，Rubin 代 AI factory 参考设计可大幅降低冷却能耗和水耗；在 50MW 级设施中，提高冷却温度和转向液冷，每年可能节省数百万美元。

原文链接：https://blogs.nvidia.com/blog/liquid-cooling-ai-factories/

论坛讨论链接：https://news.ycombinator.com/item?id=48660178

评论区最感兴趣的是数据中心余热再利用。45°C 虽不算很高，但仍可用于区域供热，数据中心如果把热量免费供给社区，可能从“本地负担”变成有实际能源价值的设施。有人提到芬兰等地已经有数据中心接入 district heating，也有人讨论季节性地下储热：夏天把热存入地下，冬天取回。社区整体认可热液冷方向，但也提醒具体经济性取决于气候、热网基础设施、负载稳定性和热泵效率。

---

## 6. Cloudflare 开放自助 OAuth：第三方集成不用再靠 API Token (OAuth for all)



Cloudflare 宣布向所有客户开放 self-managed OAuth，让开发者可以为 SaaS 集成、内部开发平台和 agent 工具提供标准 OAuth 授权流程，而不是让用户手工创建和管理 API Token。此前 Cloudflare 已在 Wrangler 和少数合作伙伴中使用 OAuth，但第三方集成需要人工 onboarding，扩展性有限。开放 OAuth 前，Cloudflare 重新设计了权限模型、用户 consent、撤销流程和滥用防护，并大规模升级底层 OAuth 引擎 Hydra。文章重点介绍了这次升级的工程复杂度：1.x 迁移中需要避免锁住关键表、改写 SQL migration、修复 SELECT * 造成的反序列化问题；2.x 迁移则采用 blue-green 策略，在多小时迁移窗口内保证授权、撤销和 token 行为尽量不中断。

原文链接：https://blog.cloudflare.com/oauth-for-all/

论坛讨论链接：https://news.ycombinator.com/item?id=48668033

HN 讨论中，Ory Hydra 作者出现并认可 Cloudflare 的技术描述，也顺便说明 Hydra 在这个规模下 CPU 消耗很低。其他工程师分享大规模 OAuth/OIDC 的经验，认为协议本身在成熟实现中并不神秘，真正难点常在工程师对 authN/authZ 的心理负担、权限边界和高可用迁移上。也有人提到商业化 IdentityServer 的授权成本和安全补丁问题。整体讨论认可 Cloudflare 把 OAuth 开放给所有集成是平台生态的必要一步，尤其对 agent 工具和 delegated access 更合适。

---

## 7. Half-Life 2 跑进浏览器：Source 引擎 Web 移植实录 (Half-Life 2 in a Browser)



作者宣布 Half-Life 2 已可在浏览器中运行，并记录了移植过程。项目基于 weliveinhell 的 Portal Web port，而后者又来自 nillerusr/source-engine——一个修改过的 2020 TF2 Source 引擎泄露版本。关键基础是 ToGLES 渲染路径：OpenGLES 调用可由 Emscripten 转译到 WebGL2，因此渲染层不需要完全重写。主要工作集中在资产适配、map chunk 打包和大量游戏 bug 修复。由于当前 Source 引擎版本不支持 20 周年版 HL2 资产，作者需要切回 `steam_legacy`；又因为原脚本面向 Linux，需要改写 Windows 打包流程并解包 VPK。面部动画造成大量稳定性问题，最终被禁用；存档加载、道具、光照、水体、NPC 行为、控制键等也逐项修复。

原文链接：https://hl2.slqnt.dev/

论坛讨论链接：https://news.ycombinator.com/item?id=48669534

HN 讨论把它放进“经典游戏进浏览器”的长线趋势里，提到了 Quake 3、Unreal Tournament、Ultima Online 以及 noclip.website 这类项目。很多人赞叹浏览器已能承载复杂旧游戏，但也注意到渲染并不完美，例如缺少部分 shader、角色眼睛等效果。另一个分支讨论浏览器 API 兼容性：有些 Web game 依赖 File System Access API、目录选择和文件锁等能力，Firefox 支持不足会影响体验。整体上，社区更把它看作技术展示和保存/可访问性实验，而不是完整替代原版游戏。

---

## 8. Zig 调整 bitCast 语义，LLVM 后端也更稳了 (Zig's new bitCast semantics and LLVM back end improvements)


Zig devlog 介绍了两类重要进展：SPIR-V 后端修复和 LLVM 后端/@bitCast 语义调整。SPIR-V 后端方面，团队增加了 `@SpirvType` 来表达 Zig 类型系统原本无法表示的 sampler、image、runtime array 等 SPIR-V 类型，把 execution mode 信息移到 calling convention 上，并让 capabilities/extensions 由 CPU feature set 驱动；同时恢复多线程 codegen、对象文件链接等能力，行为测试通过率接近提升 10%。更受关注的是 6 月 25 日的 @bitCast 变更。过去 @bitCast 近似“把内存字节重新解释为目标类型”，但随着数组、vector、packed struct 等场景扩展，语义变得不明确。新定义改为按逻辑比特序列转换，使 LLVM backend 能更一致地处理任意 bit-width integer 和聚合类型。

原文链接：https://ziglang.org/devlog/2026/#2026-06-25

论坛讨论链接：https://news.ycombinator.com/item?id=48673825

HN 讨论认为，新 @bitCast 与 packed struct 逻辑结合后，会让解析 bit-packed binary header 这类底层任务更少手动位运算。评论区也延伸到开发文化对比：一边有人深入优化低层结构布局，另一边有人用 AI/高层框架拼接大量 Electron 应用。有人认为 LLM 放大了两端：既能帮助做很深的外科式修改，也能帮助拼很宽的系统，中间层会被重塑。也有人提醒，这种“高层低层之争”在 Node、Java、Fortran 等历史中反复出现。

---

## 9. Oxide 3D 机架导览：把整机系统做成可浏览对象 (Oxide computer 3D rack guided tour)


Oxide 的 3D rack guided tour 是一个互动式浏览器导览页，用三维方式展示 Oxide 计算机机架及其组件结构。页面提供组件树，用户可以点击任意项目聚焦，使用方向键在相邻项目间移动，用 Enter 下钻、Esc 返回；在 3D 视图中可以拖拽环绕、滚轮缩放、点击组件选择，双击背景回到整体视图。部分组件被选中后会显示上下文规格信息。它不是传统文章，而是把硬件产品、机架结构和工程说明做成可探索对象，让读者从整机、机箱、模块、部件之间逐级理解 Oxide 的系统设计思路。

原文链接：https://explorer.oxide.computer/

论坛讨论链接：https://news.ycombinator.com/item?id=48631450

HN 评论对 Oxide 的工程气质高度认同。很多人把它和 Sun、DEC 等“真正整机系统”时代类比：硬件、固件、管理控制和配置被作为一个整体设计，而不是把通用服务器、BMC 和零散组件拼起来。有人说 Oxide 是少数让自己真想工作的公司，也有人表示虽然没机会用到它的设备，但很希望在客户环境中接触这种产品。讨论也涉及 Oxide 招聘门槛和工程文化，整体氛围是对高整合度、可理解硬件系统的怀旧与期待。

---

## 10. 写博客，有时就是把显而易见的话说出来 (Blogging can just be stating the obvious)


Jim Nielsen 写道，博客并不总需要提出全新的观点，很多时候只是把你觉得显而易见、但周围没人明说的东西说出来。文章从 John Gruber 抱怨网页弹窗谈起：网页应该直接显示网页，邮件应该直接显示邮件，这种话看似不需要解释，但现实中反复出现的糟糕体验让人不得不“bring receipts”。作者承认，很多文章在自己看来没有多深、没有多新，甚至像《皇帝的新衣》里那个指出事实的小孩；但正是这些“大家都知道却没人说”的表达，经常构成博客的价值。博客的关键不是绝对原创，而是愿意清楚地指出问题，或链接别人并说“是的，就是这个”。

原文链接：https://blog.jim-nielsen.com/2026/blogging-stating-the-obvious/

论坛讨论链接：https://news.ycombinator.com/item?id=48666927

HN 评论把这个问题扩展到知识表达的心理负担。一位数学背景评论者说，越了解一个领域，越容易被“这早就有人讲过、我是不是在制造噪音”的声音压住，反而不愿解释基础内容。其他人回应，读者关注某个主题往往正是因为“你”选择强调它，表达者的视角、语气和例子本身就有价值。讨论核心是：信息冗余不可避免，但好的重复可以降低理解门槛、重新排列注意力，并让没有被说出口的共识变成可引用的公共表达。
