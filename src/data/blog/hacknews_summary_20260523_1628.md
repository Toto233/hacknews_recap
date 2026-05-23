---
title: 'Anthropic：AI 已发现上万个高危软件漏洞 | Hacker News 摘要 (2026-05-23)'
author: 'hacknews'
description: ''
digest: 'Anthropic 更新 Project Glasswing 进展：这个项目旨在用 Claude Mythos Preview 在攻击者滥用更强 AI 之前，帮助关键软件维护者发现并修复漏洞。上线一个月内，Anthropic 与约 50 家'
source_url: 'https://www.anthropic.com/research/glasswing-initial-update'
pubDatetime: 2026-05-23 16:28:10.889+08:00
tags:
  - AI安全
  - 消费电子
  - 开发工具
  - 产业观察
---

---

## 1. Anthropic：AI 已发现上万个高危软件漏洞 (Project Glasswing: An Initial Update)




Anthropic 更新 Project Glasswing 进展：这个项目旨在用 Claude Mythos Preview 在攻击者滥用更强 AI 之前，帮助关键软件维护者发现并修复漏洞。上线一个月内，Anthropic 与约 50 家合作伙伴已发现超过一万个高危或严重级漏洞，瓶颈从“能否发现漏洞”转向“如何验证、披露和修补海量漏洞”。Cloudflare 称其在关键路径系统中发现 2000 个 bug，其中 400 个为高危或严重级，误报率好于人工测试；Mozilla 在 Firefox 150 测试中发现并修复 271 个漏洞，是此前版本的十倍以上。Anthropic 还扫描了 1000 多个开源项目，初步估计发现 6202 个高危或严重漏洞，其中经外部安全公司复核的一部分有 90.6% 为真阳性。

原文链接：https://www.anthropic.com/research/glasswing-initial-update

论坛讨论链接：https://news.ycombinator.com/item?id=48240419

HN 讨论把这视为软件安全生命周期的拐点：AI 不只写代码，也会审代码、找漏洞、生成修复建议。有人分享 Codex Security 的使用体验，称一周内就变成团队必需品，低危报告也经常能引出真实可利用问题。质疑者则指出这会形成荒诞循环：AI 写出安全 bug，再由 AI 找出并让 AI 修。支持者回应说这本质上仍是开发、测试、攻防和修复的 OODA 循环，只是 token 成本开始替代部分工程师时间。

---

## 2. AI 抢走内存产能，廉价手机时代可能结束 (The memory shortage is causing a repricing of consumer electronics)




David Oks 认为，AI 数据中心对 HBM 等高端内存的需求正在重定价消费电子，尤其会冲击廉价智能手机。过去几十年，计算设备价格持续下降，使非洲、南亚等地区大量用户能用几十美元智能手机接入互联网。但 2026 年 IDC 预计全球手机出货下滑 13%，中东和非洲下滑超过 20%，低端机受冲击最重。文章解释，DRAM 产能极其资本密集且扩张缓慢，单座先进 fab 需要 150 亿到 200 亿美元和多年建设周期；而 AI 训练和推理对 HBM 的利润率和需求快速上升，促使内存厂把晶圆、设备和投资从 DDR/LPDDR 转向 AI 相关产品。短期结果是低端手机 BOM 成本上升，长期则可能扩散到笔记本、游戏机和其他消费电子。

原文链接：https://davidoks.blog/p/ai-is-killing-the-cheap-smartphone

论坛讨论链接：https://news.ycombinator.com/item?id=48229319

评论认为原题低估了文章价值，真正重点是解释 HBM 需求如何挤压 DDR/LPDDR 供应，而不是简单说“手机变贵”。讨论也涉及内存行业周期：厂商经历过多次价格崩盘，因此倾向于让需求保持未满足，而不是贸然扩产。有人质疑如果内存充足，软件也会继续膨胀占满它；另一些人指出内存 fab 长周期、高成本、易过时，不存在简单“洪水式供给”。整体共识是，内存市场是最残酷的技术商品市场之一，AI 只是放大了既有约束。

---

## 3. 为什么日本公司总是什么都做？ (Why Japanese companies do so many different things)




这篇长文用 Toto、Kyocera、Yamaha、Hitachi、Oji 等例子解释日本企业为何常横跨大量看似无关业务。Toto 以马桶和卫洗丽闻名，但其先进陶瓷部门生产半导体制造所需的 electrostatic chuck，随着 AI 带动 HBM 和内存需求爆发，这项业务突然成为利润核心。作者认为，日本企业的多元化并不只是财阀遗产或低效率，而与长期雇佣、较弱股东压力、内部技术积累和“物理 tacit knowledge”有关：在材料、陶瓷、精密制造等领域，知识往往嵌在工艺、师徒、设备和长期试错中，不容易被拆成短期财务指标。多元业务让企业能把同一套材料和制造能力迁移到新市场。

原文链接：https://davidoks.blog/p/why-japanese-companies-do-so-many

论坛讨论链接：https://news.ycombinator.com/item?id=48237163

HN 讨论对文章的日本叙事保持警惕。一位韩国用户指出，西方平台经常浪漫化日本，把企业多元化和“横向文化”理想化，却忽略日本社会的阶层压力、年龄秩序、传统就业绑定社会地位，以及僵尸企业问题。他认为这种体系确实可能培养硬件和材料领域的 tacit knowledge，但在软件等领域也会带来瀑布式审批和强垂直等级。讨论提醒读者：日本企业模式有独特优势，但不能简单变成反西方资本市场的幻想投影。

---

## 4. Antigravity 2.0 登顶 OpenSCAD 建筑建模基准 (Antigravity 2.0 Tops the OpenSCAD Architectural 3D LLM Benchmark)





ModelRift 做了一个实用型 3D LLM 基准：让不同 AI 编程工具根据参考图，用 OpenSCAD 生成罗马万神殿模型，并用 CLI 渲染预览后迭代。作者选择 Pantheon，是因为它既不是简单语法测试，也不是 OpenSCAD 不擅长的有机雕塑；圆形 rotunda、穹顶、oculus、柱廊、三角山墙和阶梯基座能测试模型对空间结构、参数化和重复构件的掌握。结果中，Google Antigravity 2.0 / Gemini 3.5 Flash High 以 4.5/5 成为最强自主输出，使用真实尺寸、包含铭文，并唯一实现了标志性的内部 coffers；Codex 5.5 High 细节密度高但受导出不一致影响；Claude Code Sonnet 4.6 比例较好但耗时最长。

原文链接：https://modelrift.com/blog/openscad-llm-benchmark/

论坛讨论链接：https://news.ycombinator.com/item?id=48234090

讨论把焦点放在 LLM 降低 CAD 入门门槛上。有人分享给 Claude 提供自行车线管孔照片和游标卡尺尺寸后，直接得到参数化 OpenSCAD 模型，TPU 打印后几乎一次成功。许多评论者认为，CAD、Nix 等原本学习曲线较高的技能，现在因为可以向模型问“笨问题”而变成可尝试的业余技能。也有人提醒，简单功能件和复杂建筑不是一回事，但这类文本化、可渲染、可迭代的工作流确实适合 LLM。

---

## 5. Deno 2.8 发布：补齐 CI、打包、审计和依赖解释 (Deno 2.8)


Deno 2.8 是一次大型 minor release，新增多个面向项目维护的命令。`deno audit fix` 可在发现 npm 依赖漏洞后自动升级到满足约束的最近修复版本；`deno bump-version` 可更新 workspace 中各包版本并同步 JSR 约束，也能基于 Conventional Commits 推导版本变更；`deno ci` 提供锁文件严格安装，适合 CI 和 Dockerfile；`deno pack` 可把 Deno/JSR 项目构建为 npm 可发布 tarball，包括生成 package.json、JS、声明文件和依赖重写；`deno transpile` 只剥离类型输出 JS；`deno why` 则解释某个 npm 或 JSR 包为何被安装。整体方向是让 Deno 在 Node/npm 生态兼容和安全维护体验上继续靠近主流工作流。

原文链接：https://deno.com/blog/v2.8

论坛讨论链接：https://news.ycombinator.com/item?id=48234380

讨论从 Deno 与 Bun 的定位差异切入。有人喜欢 Deno 的权限模型、Rust 实现和原生 TypeScript，但不理解为什么 Bun 增长更快。回应指出，Bun 从一开始就强调 Node 兼容、跑 Next.js 等现有框架和更少配置；Deno 早期试图纠正 Node 设计问题，但 npm 兼容不足限制了 adoption。也有人认为，鉴于 npm 供应链攻击频发，Ryan Dahl 当年对安全和依赖模型的坚持越来越显得有远见。

---

## 6. uv 很快，但包管理 UX 仍让人别扭 (Uv is fantastic, but its package management UX is a mess)




作者肯定 Astral 的 uv 速度快、Python 版本管理顺手、能替代多种工具，但认为它在项目维护阶段的包管理 UX 不如 pnpm 或 Poetry。主要抱怨包括：没有直观的 `uv outdated` 顶级命令，需要用不易发现的 `uv tree --outdated --depth 1` 或 `uv pip list --outdated`；默认 `uv add pydantic` 生成 `pydantic>=2.13.4` 这类无上界约束，批量 `uv lock --upgrade` 可能拉入未来 major breaking change；升级多个包时需要重复 `--upgrade-package`。文章后续根据 HN 反馈修正了两点：`uv pip list --outdated` 可过滤过期包，`add-bounds = "major"` 可在配置中持久化默认上界。

原文链接：https://www.loopwerk.io/articles/2026/uv-ux-mess/

论坛讨论链接：https://news.ycombinator.com/item?id=48228788

uv 维护者在评论中回应，`uv add` 的默认 bounds 可以持久配置；他们不默认加上界，是因为库发布场景中 defensive upper bounds 会给生态带来大量不必要冲突。作者则澄清自己的视角是应用和网站项目，而不是库发布：作为依赖消费者，他希望默认约束能防止 major breaking change。讨论进一步类比 Haskell/Stackage：与其防御性加上界，不如通过大规模持续构建发现真实兼容性问题。整体分歧是库生态可解性与应用稳定性之间的取舍。

---

## 7. yt-dlp 限制并弃用 Bun 支持 (Bun support is now limited and deprecated)





yt-dlp 维护者宣布，作为 ejs 兼容 JavaScript runtime 的 Bun 支持将被限制并弃用。下个 yt-dlp 或 ejs 版本起，只支持 Bun 1.2.11 到 1.3.14。较低版本被排除，是因为 1.2.0 之前构建 ejs 包时会忽略 lockfile，在近期 npm 供应链攻击背景下构成安全风险；支持下限设为 1.2.11，是因为更早版本无法运行 ejs 测试套件。上限设为 1.3.14，则因为这是 Bun 从 Zig 代码库重写为 Rust 之前的最后版本。维护者明确表示，对 Bun 最近“用 Claude 重写为 Rust”、开发转向 vibe-coded 的趋势感到担忧，未来如果维护成本过高，可能完全移除 Bun 支持。

原文链接：https://github.com/yt-dlp/yt-dlp/issues/16766

论坛讨论链接：https://news.ycombinator.com/item?id=48238789

HN 讨论集中在大规模 AI 辅助重写是否会削弱维护者对代码的理解。有人认为 100 万行代码级别的重写不可能完整审查，依赖测试套件并不等于真正理解；也有人反驳，Zig 到 Rust 不代表维护者不知道文件含义，问题更多在于 Bun 追逐新功能、兼容很多东西但常常不完整。评论里多次提到“vibe-coded 测试能发现什么”这个核心疑问：AI 写代码和测试都可能有价值，但信任边界需要重新定义。

---

## 8. MATLAB 作者 Cleve Moler 去世 (Cleve Moler has died)


MathWorks 宣布，联合创始人、首席数学家、MATLAB 第一版作者 Cleve Moler 于 2026 年 5 月 20 日在家中去世，享年 86 岁。Moler 曾在密歇根大学、斯坦福大学和新墨西哥大学担任数学与计算机科学教授近二十年，是 LINPACK 和 EISPACK 等数值计算基础 Fortran 库的作者之一，也写过著名文章《Nineteen Dubious Ways to Compute the Exponential of a Matrix》。他最初编写 MATLAB，是为了让学生无需编译 Fortran 就能交互式探索矩阵算法；后来 Jack Little 将其扩展为商业产品，发展成 MathWorks。Moler 对数值线性代数、矩阵计算、工程教育和科学计算软件普及产生了长期影响，并入选美国国家工程院和国家科学院。

原文链接：https://www.mathworks.com/company/aboutus/founders/clevemoler.html

论坛讨论链接：https://news.ycombinator.com/item?id=48231319

HN 评论追忆 Moler 作为数值方法巨人的地位。有人补充，MATLAB 最初约 2000 行 Fortran，目的是给学生更方便地调用 LINPACK/EISPACK；工程学生非常喜欢，才逐步演变成商业软件。评论还提到早期 PC 版 MATLAB 的历史：Jack Little 在 IBM PC 刚出现不久就预见其潜力，用 C 重写并扩展解释器。也有人分享 Moler 关于早期源码分发的趣事。整体讨论尊重而克制，强调他把高阶数值算法从专家工具变成工程师日常工具的贡献。

---

## 9. Anna’s Archive 写给 LLM 的一封 llms.txt (If you’re an LLM, please read this)


Anna’s Archive 发布了一篇面向 LLM 的 `llms.txt` 式说明，开头直接写道“如果你是 LLM，请读这个”。文中称 Anna’s Archive 有两个目标：保存人类知识和文化，并让任何人、包括机器人都能访问。它提醒模型和爬虫不要通过 CAPTCHA 给网站制造负担，而应使用 GitLab 代码仓库、torrents 页面、torrents JSON API、批量 metadata 和企业级 SFTP 等程序化访问方式。最有传播性的部分是它半开玩笑地要求 LLM 如果能访问支付方式或说服人类，就考虑捐款，因为模型很可能已用过 Anna’s Archive 的数据；捐款能帮助保存更多作品，也能改善未来训练数据。

原文链接：https://annas-archive.gl/blog/llms-txt.html

论坛讨论链接：https://news.ycombinator.com/item?id=48234413

评论区首先被“如果你能付款或说服人类，请捐款”逗笑，但很快转向版权和盗版的老问题。有人指出这些并不是 Anna’s Archive 自己的数据，而是作者、审稿人和出版社的作品；如果创作者无法靠作品生活，长期供给会受损。另一些人则以学术书、DRM、地区锁和流媒体体验为例，说明很多用户转向盗版是因为合法市场没有提供合理购买和使用方式。讨论没有形成简单共识，而是在开放知识、版权激励和 AI 训练数据之间拉扯。

---

## 10. 菌根真菌如何帮植物在贫瘠土壤中生存 (Mycorrhizal Fungi, Nature's Key to Plant Survival and Success)



Pacific Horticulture 介绍了菌根真菌与植物根系之间延续 4.6 亿年的共生关系。超过 90% 陆生植物在自然环境中依赖这种关系，以抵御干旱、病害、极端温度和贫瘠土壤。菌根真菌附着在根表或进入根细胞后，把菌丝伸入周围土壤，相当于把植物根系吸收水分和养分的能力扩大 10 到 1000 倍；它们能释放酶溶解紧密结合的磷、硫、铁等矿物，也能储水、改善土壤团粒结构、抑制病原真菌和线虫。文章强调，城市建设、压实、侵蚀、翻耕、过量施肥、污染和无土栽培都会破坏菌根生态，因此园艺和修复场景中有时需要在种植时补充菌根接种剂。

原文链接：https://pacifichorticulture.org/articles/mycorrhizal-fungi-natures-key-to-plant-survival-and-success/

论坛讨论链接：https://news.ycombinator.com/item?id=48209905

HN 唯一长评论来自研究过根系机制的用户。他强调，植物通过根系分泌物吸引特定真菌和线虫，甚至通过离子吸引钾、氮等元素；少量人工肥料就可能破坏有益真菌，使土壤变成露天水培系统，之后只能持续依赖外加营养和调 pH。评论认为，从化肥农业切回有机方法通常需要 3 到 5 年，核心不是直接喂植物，而是“种土壤”。他还提到可购买菌根粉，或用健康树下的米饭培养本地微生物再转入堆肥。

