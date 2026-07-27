---
title: "欧盟拟让浏览器替你拒绝 Cookie 横幅 | Hacker News 摘要 (2026-07-27)"
author: "hacknews"
description: ""
digest: "欧洲多个民间组织发起 Kill the Cookie Banner 行动，支持欧盟委员会在 Digital Omnibus 改革中引入浏览器隐私信号。方案允许用户只在浏览器里设置一次追踪偏好，再由浏览器自动传给网站，不必逐站点击 Cooki"
source_url: "https://killthecookiebanner.eu/"
pubDatetime: 2026-07-27 19:48:55.511+08:00
tags:
  - "数字隐私"
  - "开发工具"
  - "硬件创作"
  - "人工智能"
---

---

## 1. 欧盟拟让浏览器替你拒绝 Cookie 横幅 (Kill The Cookie Banner)





欧洲多个民间组织发起 Kill the Cookie Banner 行动，支持欧盟委员会在 Digital Omnibus 改革中引入浏览器隐私信号。方案允许用户只在浏览器里设置一次追踪偏好，再由浏览器自动传给网站，不必逐站点击 Cookie 弹窗。发起方认为，现有横幅不是在提供真正选择，而是在用更醒目的“全部接受”和更麻烦的拒绝路径诱导同意；其页面称，最高可有 90% 的人点下同意，但真正希望被追踪的比例约为 3%。类似信号已被部分美国州法律认可，技术上也接近浏览器传递语言偏好。行动方同时说明，他们只支持改革中的隐私信号部分，并不支持会削弱其他数字权利的条款。

原文链接：https://killthecookiebanner.eu/

论坛讨论链接：https://news.ycombinator.com/item?id=49057175

讨论的焦点不是如何把横幅设计得更好，而是这种点击能否算作“知情同意”。有评论主张，用户为了尽快关掉遮挡而按按钮，本身就说明同意机制失真；也有人指出，“全部接受”通常一步完成，拒绝却常被藏进二级页面，这是刻意制造的阻力。多位参与者赞成把选择放进浏览器，让“始终拒绝”成为可执行的统一偏好，同时提醒欧盟虽已有拒绝和接受应同样容易的要求，现实中的执法仍然不足。

---

## 2. GrapheneOS 详解锁屏设备的数据防线 (GrapheneOS protections against data extraction from locked devices)


GrapheneOS 系统梳理了设备锁定后的数据保护链条。磁盘加密是底座，攻击者通常只能设法利用首次解锁后的系统状态，或暴力猜测 PIN 和密码。受支持设备的安全元件会逐步拉长失败尝试间隔，10 次后等待 4 小时，15 次后可达 41 天，最多允许 20 次；固件更新还要求机主先成功认证，以降低内部人员通过恶意更新移除限速的风险。GrapheneOS 还支持最长 128 字符密码、指纹加第二因素 PIN、锁屏后阻断新 USB 连接，以及默认 18 小时自动重启，把设备带回密钥尚未解开的首次解锁前状态。胁迫密码会擦除设备，但项目强调，核心保护并不依赖这个功能。

原文链接：https://discuss.grapheneos.org/d/40700-grapheneos-protections-against-data-extraction-from-locked-devices

论坛讨论链接：https://news.ycombinator.com/item?id=49055169

HN 讨论把这篇说明与近期边境搜查案件联系起来，认为项目是在澄清：即使不用胁迫密码，18 小时自动重启、加密和安全元件也能显著增加取证难度。部分评论担心媒体把强设备安全描述成“罪犯专用”，主张让普通用户更广泛使用 GrapheneOS，避免隐私保护被污名化。也有人提醒，任何系统都不能宣称绝对安全，比较 iOS、Android 和取证工具时应区分具体版本、设备硬件与攻击条件。

---

## 3. 8 美元 ESP32 跑起 2890 万参数模型 (Running a 28.9M parameter LLM on an $8 microcontroller)



开源项目 esp32-ai 在约 8 美元的 ESP32-S3 上运行一个 2890 万参数语言模型，完全离线，并以约每秒 9.5 个 token 的速度把文本输出到小屏幕。芯片只有 512KB SRAM、8MB PSRAM 和 16MB 闪存，模型经 4-bit 量化后为 14.9MB。关键做法来自 Gemma 的 Per-Layer Embeddings：约 2500 万参数留在慢速闪存的查找表中，每生成一个 token 只读取约 450 字节需要的行，把真正参与计算的小核心和工作内存放在更快的 SRAM、PSRAM。模型用 TinyStories 训练，只能写简单短故事，不能问答、遵循指令、写代码或提供事实。项目价值在于验证极小设备上的内存架构，而不是模型能力。

原文链接：https://github.com/slvDev/esp32-ai

论坛讨论链接：https://news.ycombinator.com/item?id=49050512

讨论一边比较更便宜但内存、TPU 和向量指令更强的 Milk-V 开发板，一边争论在微控制器上跑语言模型是否有实际意义。质疑者认为约束太强，模型几乎没有用途；支持者则把它看成资源受限工程实验，指出计算机视觉也曾被认为不适合 MCU，后来才形成成熟方案。还有人强调，个人嵌入式项目未必需要商业价值，尝试“不可能”的目标本身就能迫使开发者理解内存、量化和硬件边界。

---

## 4. 他为找回唱片封面，学会了 PCB 和 C (I learned PCB design, 3D printing and C just to listen to music)





Marton 怀念实体唱片的大幅封面，又不愿放弃流媒体的便利，于是做出 Pentaton LP：一台外形接近 12 英寸唱片套、配备 17 英寸 1920×1920 方形屏幕的音乐播放器。为了把机身压薄，他从零学习 PCB 设计，为 Radxa CM3 做了四版载板，又用 FreeCAD 设计外壳并解决 3D 打印问题。软件基于精简的 Alpine Linux 和 shairport-sync，通过 AirPlay 播放音乐；自制应用只显示封面，并用 GPU 完成两张 400 万像素图片的 60 帧淡入淡出。由于 AirPlay 只传约 500×500 的封面，他还给自己的播放器增加了带外协议发送高清图。设备待机功耗低于 2 瓦，满亮度约 24 瓦，作者正在评估是否发起 Kickstarter。

原文链接：https://pentaton.app/blog/2026-07-12-introducing-pentaton-lp/

论坛讨论链接：https://news.ycombinator.com/item?id=49022355

HN 评论最关心作者省略的学习和调试细节：3D 打印的失败最终如何修正、PCB 设计用了哪些资料，以及高清封面的带外协议怎样工作。一位评论者估算，1920×1920、24 位色、60 帧画面仅持续刷新就需要约 620MB/s 带宽，因此用完整单板计算机和 GPU 并不夸张。其他人讨论了 Radxa CM3 的供货、DAC 采样率切换，以及能否用擦除、滑动等局部过渡替代全屏淡入淡出。作者也在首条评论中说明，整个项目只使用 KiCad、FreeCAD 等自由或开源工具完成。

---

## 5. AI 提效之后，真正稀缺的是专注 (The New AI Superpowers: Focus and Followthrough)



Rick Manelius 原以为 AI 把单项任务加速 2 到 100 倍后，人会变得更轻松，结果自己同时启动了约 40 个概念验证项目，每个项目都变成一个等待照料的开放循环。AI 减少了原有工作，他却立刻创造出更多新工作，倦怠并没有消失。复盘后，他把策略从横向扩张改成纵向深入：少开项目，把省下的时间投入到真正重要作品的最后 1%。文章借日全食说明，99% 与 100% 看似只差一点，体验却可能完全不同，而最后一点往往消耗一半以上的时间。作者决定减少发文数量，增加修改轮次，把“专注并完成”视为 AI 时代更稀缺的能力。

原文链接：https://www.rickmanelius.com/p/the-new-ai-superpowers-focus-and

论坛讨论链接：https://news.ycombinator.com/item?id=49057877

唯一抓到的长评论提供了组织层面的对应案例：当所有人都相信问题只需“用 AI 做几个小时”，公司里会出现大量功能相似却互不兼容的内部工具。团队乐于生成概念验证，却回避难以自动化的慢环节，还把没有外部依赖误当成速度优势。评论者建议把过去的“工作证明”改成“理解证明”，因为 Agent 能快速搭出雏形，却不能替代领域理解；一个完全没有外部依赖的方案，反而可能只是尚未面对真实约束的玩具。

---

## 6. Go 的模块化静态分析框架如何工作 (Go Analysis Framework: modular static analysis by go team)


Go 团队的 `golang.org/x/tools/go/analysis` 为静态检查器定义了一套通用接口。每个 Analyzer 按包检查语法树和类型信息，可报告诊断、给出修复建议，也能声明对其他 Analyzer 的依赖。更关键的是 Facts 机制：分析器可以把某个包或对象的中间事实序列化，交给依赖它的上层包继续使用，像编译器分开编译那样扩展到大型代码库。相同的检查器因此可以复用在 `go vet`、编辑器、IDE、构建系统、代码评审和批处理流水线中。框架还提供依赖图校验、结果类型约束、测试工具，以及 singlechecker、multichecker 等驱动程序。

原文链接：https://pkg.go.dev/golang.org/x/tools/go/analysis

论坛讨论链接：https://news.ycombinator.com/item?id=49057398

评论很快从分析框架转向 Go 语言长期存在的取舍。一派喜欢强制格式化、显式错误返回和统一工具链，认为这些约定让陌生代码更容易阅读；另一派用冗长循环和层层包装错误的例子反讽其样板代码。争论中比较一致的一点是，Go 的优势不只来自语法，也来自 `gofmt`、`vet`、分析器和社区规范形成的整套工程实践。至于显式错误处理究竟培养谨慎，还是把负担留给开发者，双方依然没有共识。

---

## 7. Shell 里的冒号什么都不做，却很有用 (A shell colon does nothing. Use it anyway)


POSIX Shell 中单独的冒号 `:` 是一个总会成功的空命令，看似什么都不做，却能为参数展开提供一个安全落点。作者用 `: "${GREET_NAME:?missing argument}"` 在变量未设置时立即报错，也用 `: "${DATA_DIR:=/var/data}"` 设置默认值，同时丢弃展开后的结果。冒号还可以配合重定向清空日志文件、测试输入输出是否可读写、给 `trap` 或语法上必须有命令的位置提供占位。它不是要求大家把普通 `if` 语句改成晦涩技巧，而是在确实需要执行参数展开或提供 no-op 命令时，给出一个简短且符合标准的工具。

原文链接：https://refp.se/articles/your-shell-and-the-magic-colon

论坛讨论链接：https://news.ycombinator.com/item?id=49047453

讨论围绕“古老但高效”还是“古老所以晦涩”展开。批评者认为 POSIX Shell 依赖字符串替换，变量展开的含义随上下文变化，这类文章正说明它不适合承担复杂编程；支持者则说 Shell 的任务是高效编排系统命令，拿它与 Go、Rust 或 Python 比较并不公平，就像不能因为叉车不适合公路就否定叉车。反方随后举出 fish、Oil 和 awk，认为历史兼容性而非设计优越性才是旧语法延续至今的主要原因。

---

## 8. Decker 用复古约束重做 HyperCard 式创作 (Decker, a platform that builds on the legacy of Hypercard and classic macOS)


Decker 是一个创建和分享交互式文档的多媒体平台，继承了 HyperCard 把文本、图片、声音、超链接和脚本放在同一张“卡片”里的思路。用户可以在浏览器中制作电子杂志、笔记、演示、冒险游戏或 1-bit 像素画，完成的 deck 能保存成独立 HTML。它用刻意的抖动像素美学限制选择，鼓励先做出粗糙但可运行的原型；复杂项目可以使用自带的 Lil 脚本语言、内置组件和自定义控件。Decker 还提供命令行工具 Lilt，源码采用 MIT 许可证，并明确不加入广告、遥测、游戏化或内容生成器。

原文链接：https://beyondloom.com/decker/

论坛讨论链接：https://news.ycombinator.com/item?id=49060856

很多评论在回忆 HyperCard 曾经如何降低软件创作门槛。有人小时候就能像写笔记一样制作单词卡，作品外观还能与当时的正式软件接近；后来图形界面的类库越来越庞大，普通用户反而难以做出“像软件的东西”。评论者用早期 Fallout 与后来的 3D 世界作类比，认为限制会给想象力留下空间。也有人提到 Myst 等作品与 HyperCard 的历史，认为现代 Web 花了很久才重新获得类似的组件和事件驱动能力，却没有找回同样直接的创作体验。

---

## 9. 好设计不是没有妥协，而是选对妥协 (Design is compromise)


Steph Ango 认为，“毫不妥协”几乎不可能成为真实的产品原则。只要选择一种方案，就同时放弃了其他选择；设计工作的价值，正是在相互竞争的目标之间明确优先级。Tradeoff 比 compromise 更容易让人接受，因为它直接揭示优势与弱点之间的交换。作者偏爱立场鲜明的产品：它们坦白自己不擅长什么，以换取在少数方向上做得明显更好。试图讨好所有人，往往只会得到平庸结果。真正值得自豪的不是假装没有代价，而是清楚知道代价在哪里，并让这些取舍共同表达产品的观点。

原文链接：https://stephango.com/design-is-compromise

论坛讨论链接：https://news.ycombinator.com/item?id=49059367

评论者把这个观点延伸到团队协作和技术选择。有人说，妥协常被误解成软弱或输掉争论，但职业生涯中最有价值的能力之一，正是让不同目标找到可接受的平衡；也有人提醒，不应只从人际冲突理解妥协，很多时候它是在延迟、成本、复杂度和质量之间做工程判断。讨论还区分了有意识的取舍与被动让步：前者能解释为什么牺牲一项指标，后者只是没有原则地折中。

---

## 10. htmx 把 4.0 发布做成了 Game Boy 游戏 (Htmx 4.0, the first JavaScript library to release exclusively on the Game Boy)





htmx 没有用普通版本公告介绍 4.0，而是在官方周边商店里把它包装成一款 Game Boy 游戏，售价 35.97 加元。商品页宣称这是“首个只在 Game Boy 平台发布的 JavaScript 库”，玩家要在四个关卡里收集泡菜、压缩客户端 JavaScript、躲开所谓的 slop，最后击败 Warren 才能解锁 htmx 4.0 源码。整件事延续了 htmx 社区一贯的自嘲风格，也把关于服务器端渲染、少写客户端 JavaScript 的技术立场变成了一次可玩的发布活动。页面本身更像一件社区周边和玩笑作品，而不是传统软件发行说明。

原文链接：https://swag.htmx.org/en-cad/products/htmx-4-the-game

论坛讨论链接：https://news.ycombinator.com/item?id=49057241

不少评论借这个玩笑分享了 htmx 的真实使用体验。有人用服务器端模板替换大量前端 JavaScript 后，认为页面更快、故障点更少，也更容易调试；也有人提醒 htmx 仍然运行 JavaScript，不能把它描述成没有客户端计算。讨论里最有趣的部分是社区关系：一位用户曾抱怨官方杯子太小，商店第二天就增加了超大杯。对支持者来说，这种响应速度和幽默感与库本身的简洁理念同样重要。
