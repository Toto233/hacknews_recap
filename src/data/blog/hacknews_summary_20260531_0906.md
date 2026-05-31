---
title: 'Zig 重做构建系统，把配置和执行拆成两个进程 | Hacker News 摘要 (2026-05-31)'
author: 'hacknews'
description: ''
digest: 'Zig devlog 介绍了一次已经合入主干的大改动：`zig build` 不再把用户的 `build.zig` 逻辑和整个构建系统实现编译进同一个 Debug 进程，而是拆成“configurer”和“maker”两个角色。新的流程中，'
source_url: 'https://ziglang.org/devlog/2026/#2026-05-26'
pubDatetime: 2026-05-31 09:06:54.499+08:00
tags:
  - 编程语言
  - 开源工具
  - 自然科普
  - 硬件创新
---

---

## 1. Zig 重做构建系统，把配置和执行拆成两个进程 (Zig: Build System Reworked)


Zig devlog 介绍了一次已经合入主干的大改动：`zig build` 不再把用户的 `build.zig` 逻辑和整个构建系统实现编译进同一个 Debug 进程，而是拆成“configurer”和“maker”两个角色。新的流程中，`build.zig` 只负责在一个较小的 Debug 进程里生成构建图，并把它序列化成二进制配置文件；父进程缓存这份配置，同时异步编译负责执行构建图的 maker 进程。maker 以 Release 模式编译，并且每个 Zig 版本只需在全局缓存里编译一次。这样带来三类收益：修改用户构建逻辑时不用重编整个构建系统；在配置不变时可跳过 `build.zig`；真正执行构建图的进程有优化。示例 benchmark 中，`zig build -h` 从约 150ms 降到约 14ms，CPU 指令数和 cache 访问也大幅下降。

原文链接：https://ziglang.org/devlog/2026/#2026-05-26

论坛讨论链接：https://news.ycombinator.com/item?id=48334048

HN 讨论把这次改动放在 Zig 0.16 和即将到来的 0.17 背景下看。有人刚升级到 0.16，认为虽然破坏性变化很多，但新 IO 机制和构建系统方向让语言前景更清晰。也有人指出 Zig 目前的 IO 仍有动态分发和多层间接调用，效率承诺还没完全兑现，需要后续 release 解决。讨论里还提到 Andrew Kelley 之前演讲展示过新设计的汇编效率，社区在“系统调用减少”和“vtable 间接调用”两个层面上理解性能差异。整体看，大家对 Zig 工具链变快持正面态度，但仍关注迁移成本和实际性能。

---

## 2. 曾遮天蔽日的落基山蝗虫，为什么突然灭绝了 (What are locusts and what happened to them?)


这篇长文讲述 19 世纪美国落基山蝗虫的兴衰。1874 年的 Albert’s Swarm 曾覆盖约 19.8 万平方英里，比加州还大，估计有 12.5 万亿只昆虫，被认为是历史上最大的动物聚集之一。它们遮蔽太阳、吞噬作物、阻断火车，并在大平原引发饥荒。文章解释了蝗虫和普通蚱蜢的关系：在拥挤、缺食等条件下，某些蝗虫会发生相变，从独居型变成群居型，行为、颜色、身体和迁徙倾向都改变，甚至形成“互相追赶以免被吃”的行军群。落基山蝗虫的诡异之处在于，它们迁徙范围巨大，但真正的繁殖地集中在怀俄明和蒙大拿少数河谷。随着这些河谷被开垦、灌溉、放牧和踩踏，产卵地被破坏，短短几十年后这种曾经铺天盖地的物种就灭绝了。

原文链接：https://explosion-scratch.github.io/locusts/

论坛讨论链接：https://news.ycombinator.com/item?id=48281772

HN 讨论把文章视为周末长读，但也有人指出它使用了 AI 生成内容，似乎基于人类写的 outline。评论中最有价值的补充是：落基山蝗虫的迁徙范围虽然能覆盖到东海岸，但繁殖范围很小，几个河谷一旦被犁地、灌溉和牲畜踩踏，物种就失去延续能力。也有人认为文章最有趣的不是灭绝结论，而是蝗虫因拥挤触发相变的生物机制。少数评论不喜欢页面里的动画昆虫效果，但也有人觉得这种“恐怖感”符合蝗灾主题。

---

## 3. Prusa 开源 ColorMix，让多材料打印机混出几十种颜色 (Print with dozens of colors: Our new open-source ColorMix for PrusaSlicer)


Prusa Research 发布开源 ColorMix 模型，并把它接入 PrusaSlicer 和 EasyPrint，目标是在普通多材料 FDM 打印机上用有限几卷耗材打印出几十种色调。思路来自社区项目：通过在很薄的层中交替使用不同颜色材料，形成视觉上的混色效果；类似 OrcaSlicer-FullSpectrum、filament-mixer、PeggyPalette 等项目已经证明了方向。Prusa 的版本做了更系统的校准：用实际 FDM 打印结果建立更准确的混色模型，接入 OpenPrintTag Material Database，并准备 CMYKW Prusament 组合，让颜色预览和默认体验更可靠。这个模型以 MIT 许可证开源，社区可以检查、使用和改进。它不等于真正连续全彩打印，但让多材料打印从“手工调色”更接近“像绘画一样选颜色”。

原文链接：https://blog.prusa3d.com/our-new-open-source-colormix-model-in-prusaslicer-and-easyprint_136079/

论坛讨论链接：https://news.ycombinator.com/item?id=48283410

讨论区对“FullSpectrum”这类叫法比较谨慎。有人认为它更像 CMYK/CMYKW 打印，不应暗示能打印完整连续光谱；也有人希望看到照片、连续渐变和复杂曲面上的效果，而不仅是色块示例。技术讨论进一步转向混色和打印速度：如果未来能按需混合喷嘴尺寸、挤出量和层高，在内部结构用粗喷嘴快打、外表面用精细混色，价值会更大。也有人务实表示，如果只是为了一个橙色零件，等两天买一卷橙色耗材可能仍比 20 小时混色打印划算。整体评价是方向有趣，但还需要真实场景验证。

---

## 4. OpenBSD 的 openrsync：BSD 许可证 rsync 实现 (Openrsync: An implementation of rsync, by the OpenBSD team)


openrsync 是 OpenBSD 团队实现的 rsync 兼容工具，采用 ISC/BSD 风格许可证，已经合入 OpenBSD base。这个 GitHub 仓库主要是 OpenBSD 版本加上一些便携性 glue，方便在其他 UNIX 系统上编译运行。openrsync 与现代 rsync 协议兼容，测试目标是 rsync 3.1.3 和协议 27，但只支持 rsync 命令行参数的一个子集。项目源自 OpenBSD 的 `rpki-client` 需求，目标是提供一个许可证更干净、文档更明确、适合 OpenBSD base 的同步实现。仓库文档介绍了安装方式、如何和传统 rsync 互操作，以及 rsync 算法中的 sender/receiver 模型。canonical 文档仍是 man page，包括 `openrsync(1)`、`rsync(5)` 和 `rsyncd(5)`。

原文链接：https://github.com/kristapsdz/openrsync

论坛讨论链接：https://news.ycombinator.com/item?id=48334854

HN 讨论集中在兼容性和 rsync 语义细节上。有人说 openrsync 这些年持续进步，期待未来能完全替代 Samba rsync，但也举例指出某些远程路径场景下结果和预期不同。很快就有评论指出，这可能并不是 openrsync bug，而是 rsync 本身对目录、文件名和尾随斜杠语义的经典坑点。还有人提到 macOS 15.4 已经悄悄切到 openrsync，这件事很容易被忽略。整体讨论说明 openrsync 已经进入真实使用场景，但 rsync 的路径规则仍然是最容易让用户误解的地方。

---

## 5. 别再证明人类比 AI 强，你可以直接说人有价值 (You can just say it)


这篇短文反对一种常见的 AI 时代论证：为了证明人类仍有价值，人们不断强调 AI 做不到某些任务、人类做得更好、或者人类输出有 AI 无法稳定复现的细微风格。作者认为，这类论证把人的价值绑定在“输出质量”上，而这个基础很危险，因为它依赖于某一时刻的人机能力差距。更稳固的说法其实很简单：“人类有价值。”不需要以模型 benchmark、创造力差异或风格稀缺性来证明。文章进一步讨论创作中的“意图”和“形式”：生成式 AI 能用很少的人类意图生成大量形式，这也是很多人感到“AI slop”的原因。问题不只是成品看起来好不好，而是我们是否能从形式中识别出真实意图。作者并不否认 AI 可用，而是主张在谈人类、创作和沟通时，不要把人降格为可替代的产出机器。

原文链接：https://noperator.dev/posts/you-can-just-say-it/

论坛讨论链接：https://news.ycombinator.com/item?id=48324853

评论区最有共鸣的是一句话：如果你要用 LLM 给我写邮件，不如直接把 prompt 发给我，至少我知道你真正想说什么。很多人说，收到 AI 生成的回复会有被敷衍或不真诚的感觉，因为“形式”变得礼貌完整，但人的真实意图反而被遮住。也有人认为 AI 可以作为附件、草稿或辅助，但主体沟通应清楚标明哪些来自人、哪些来自模型。讨论还延伸到 PR 描述和工作沟通：AI 生成内容不是完全不能用，但如果它替代了人的表达和责任，会削弱信任。

---

## 6. 1992 年的 Voxel Space：用高度图做出震撼地形 (Voxel Space (2017))





这篇 2017 年文章用 Web demo 解释了 NovaLogic 在 1992 年《Comanche》中使用的 Voxel Space 地形渲染技术。文章回到当时的硬件背景：CPU 比今天慢得多，GPU 加速不可得或昂贵，大多数 3D 游戏还只能在 CPU 上渲染单色填充多边形。《Comanche》之所以显得超前，是因为它用高度图和颜色图表现有纹理、阴影和大尺度起伏的地形。Voxel Space 本质上是 2.5D：每个地图位置只有一个高度值，因此不能表示建筑、树木等复杂几何；但颜色图可以预先包含光照和阴影，渲染时不必实时算光。算法也很直接：从远到近按距离扫描地图线，按屏幕列采样高度和颜色，投影高度后画垂直线，并通过 painter algorithm 处理遮挡。它展示了在硬件受限时代，聪明的数据表示和渲染策略能带来巨大视觉突破。

原文链接：https://s-macke.github.io/VoxelSpace/

论坛讨论链接：https://news.ycombinator.com/item?id=48336564

讨论区先纠正术语：严格说这不是今天意义上的 voxel，因为它没有在三轴上均匀切分体素空间，更像高度图柱状集合，和 Doom 式地图有亲缘关系。但也有人指出，当年确实就叫 voxel rendering，而且名字和画面一样酷。评论里有人讨论“体积像素”是否可以从视觉结果而非实现细节理解，也有人提醒文章已说明每个位置只能有一个高度，不能有多层地形。更多人则回忆 1992 年看到这种地形时的震撼。整体讨论兼具术语考据和怀旧，重点是早期 3D 图形如何用限制换速度。

---

## 7. 《Snowboard Kids 2》已经 100% 反编译 (Snowboard Kids 2 is 100% Decompiled)




Chris Lewis 宣布 Nintendo 64 游戏《Snowboard Kids 2》已经 100% 反编译：所有函数都已有 C 实现，并能编译成与原版匹配的汇编。作者强调，这不等于代码已经整洁，项目里仍有少量 `__asm__` hack，很多命名和文档也需要整理；但“每个函数都有匹配 C 实现”意味着游戏从一堆 MIPS 汇编变成了可读、可构建、可研究、可修改的代码库。这为后续重编译、资产提取、mod 和机制研究打下基础。项目从 2024 年 9 月首个 commit 开始，历时近两年。作者特别感谢 N64 反编译 Discord 社区，并提到 Claude、GLM、Codex 等 coding agent 在最后难函数上显著加速，但真正关键的仍是社区知识、工具链和人工判断。

原文链接：https://blog.chrislewis.au/snowboard-kids-2-is-100-decompiled/

论坛讨论链接：https://news.ycombinator.com/item?id=48284494

讨论区普遍把这看作游戏保存和移植工作的好消息。有人指出，完整反编译是 PC 移植、其他平台移植和 mod 社区的基础，并分享了 decomp.dev、readonlymemo 和 awesome-game-decompilation 等项目列表。也有工具作者补充，这些列表并不完整，很多反编译项目分散在不同 Discord 和平台社区中，甚至还有不少私有项目。讨论也提到 Windows 游戏反编译更碎片化，缺少类似 N64 社区标准工具链。整体气氛偏技术和怀旧，重点是反编译社区如何长期积累可复用方法。

---

## 8. IXI 自动对焦镜片，想替代渐进多焦眼镜 (IXI's autofocusing lenses are almost ready to replace multifocal glasses)



Engadget 介绍了 IXI 的自动对焦眼镜原型。传统眼镜几百年来变化不大，上一次重要创新大致是 1950 年代的渐进多焦镜片。IXI 瞄准的是 45 岁以上常见的老花问题：眼镜通过无摄像头眼动追踪和液晶镜片，在检测到用户视线从远处切换到近处时自动改变镜片处方。它不是在镜框里塞相机，而是在镜片边缘布置 LED 和光电二极管，用红外反射测量眼球运动、眨眼、视线方向以及双眼会聚程度。IXI 称这种模拟通道方案比摄像头方案省电得多，眼动追踪只消耗约 4mW。文章强调，原型重量约 22 克，外观接近普通眼镜。它仍需医疗认证和量产准备，但如果可靠，可能成为渐进多焦和双光眼镜之外的新路径。

原文链接：https://www.engadget.com/wearables/ixis-autofocusing-lenses-multifocal-glasses-ces-2026-212608427.html

论坛讨论链接：https://news.ycombinator.com/item?id=48298912

HN 讨论一边期待，一边担心监管和安全。有人说自己更希望眼镜技术先解决夜间驾驶时对向 LED 车灯过亮的问题。对 IXI 本身，有评论担心 FDA 等医疗认证可能让产品多年无法上市；也有人反驳，自动切换处方的镜片确实有潜在风险，例如驾驶时突然焦点跳变或闪烁，会造成危险。另一些人指出，老花主要影响近距离，不一定影响驾驶，但也有人同时近视和远视，不能简单说摘掉即可。整体看，社区认可技术方向，但真正难点在稳定性、安全策略和认证。

---

## 9. Daring Fireball 给烦人弹窗起了个新名字：Dickover (What Is a Dickover?)




John Gruber 在 Daring Fireball 上提出一个新词 “dickover”，用来指那些故意遮住网页或 App 内容、强迫用户完成无关交互的弹窗、遮罩或 curtain。典型例子包括 cookie 同意、订阅 newsletter、安装移动 App、同意服务条款等。它们和普通 popover 的区别在于：它们不是为用户完成当前任务服务，而是网站把自己的内容挡住，逼用户处理网站自己的商业或合规需求。文章特别点名 Substack 首页常见的全屏 newsletter curtain，它的设计会暗示用户必须订阅才能阅读，而关闭链接又被做得很弱。Gruber 还批评付费媒体网站在用户已登录、已订阅时仍弹出短信订阅或营销提示，认为这会持续伤害用户体验。

原文链接：https://daringfireball.net/2026/05/what_is_a_dickover

论坛讨论链接：https://news.ycombinator.com/item?id=48330882

讨论区首先被页面自身的示范逗笑：很多人点击标题后先猜“dickover”是什么意思，页面短暂停顿后弹出一个大弹窗写着“This is a Dickover”，瞬间完成定义。随后讨论转向为什么这些反用户模式越来越多。有人提出一个解释：产品经理和开发者可能五年前就在自己设备上点过 cookie 同意，从此再也看不到真实新用户体验，因此误以为产品没问题。也有人把 Substack、新闻站和各种 newsletter 弹窗当作典型反面案例。整体共识是：这个词粗俗但准确，正好命名了每天都在发生的网页体验退化。

---

## 10. Pandoc 模板目录：从简历、论文到博士论文 (Pandoc Templates)



pandoc-templates.org 是一个收集 Pandoc 模板的网站，展示了不少常用 Markdown 到 PDF、LaTeX 或 HTML 的模板。页面列出的项目包括 Eisvogel 这种面向讲义和计算机科学练习的 LaTeX 模板、`pandoc-letter` 这种可用 Markdown 写信并转成漂亮 PDF 的模板、Markdown Resume 简历模板、IEEE 论文模板、博士论文模板、MLA 论文模板，以及多个统计学和学术期刊模板。每个条目会显示作者、用途、输出格式、GitHub 链接、星标数和更新时间。它的价值不在单个模板，而在把“用 Markdown 写结构化文档，再用 Pandoc 进入正式出版格式”这件事集中展示出来，降低从手写 LaTeX 或 Word 模板迁移的门槛。

原文链接：https://pandoc-templates.org/

论坛讨论链接：https://news.ycombinator.com/item?id=48334515

HN 讨论主要围绕 Pandoc 和 Quarto 的使用体验。有人回忆本科论文曾用一条很长的 Pandoc 命令把 Markdown 转成 Word，后来发现 Quarto 后体验明显改善。也有人总结：Pandoc 是自己的通用“文档转换器”，而 Quarto 更像文档/报告创作工具。评论里还有人分享 Word 模板、表格样式和 Quarto 脚本经验，说明真正让 Pandoc 好用的往往是周边工具链、模板和可复用脚本。整体讨论偏实用，适合需要把 Markdown 接入论文、报告、简历或正式文档流程的人。

