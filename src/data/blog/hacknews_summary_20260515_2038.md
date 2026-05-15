---
title: '为了不让汽车持续回传数据，他拆掉了 RAV4 的 modem 和 G | Hacker News 摘要 (2026-05-15)'
author: 'hacknews'
description: ''
digest: '作者详细记录了如何从 2024 款 Toyota RAV4 Hybrid 中物理移除 DCM 数据通信模块和内置 GPS，以阻止车辆继续向厂商和第三方回传遥测数据。他先列举现代汽车的数据收集范围：位置、速度、油量、急加速/急刹、摄像头、麦克'
source_url: 'https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/'
pubDatetime: 2026-05-15 20:38:39.297+08:00
tags:
  - 汽车隐私
  - 安全研究
  - AI_工具
  - 系统底层
---

---

## 1. 为了不让汽车持续回传数据，他拆掉了 RAV4 的 modem 和 GPS (Removing the modem and GPS from my 2024 RAV4 hybrid)





作者详细记录了如何从 2024 款 Toyota RAV4 Hybrid 中物理移除 DCM 数据通信模块和内置 GPS，以阻止车辆继续向厂商和第三方回传遥测数据。他先列举现代汽车的数据收集范围：位置、速度、油量、急加速/急刹、摄像头、麦克风、驾驶员注意力、车内外图像等，并指出车企数据可能通过 LexisNexis、Verisk 等经纪商进入保险和风控体系。拆除 DCM 后，Toyota 云服务、OTA、SOS 等联网功能失效，这是明确的安全取舍；车内麦克风也会受影响，因此作者安装 DCM bypass kit 恢复麦克风。GPS 也要断开，是因为 CarPlay 会从车载 GPS 接收位置，拆 modem 后可能导致位置跳到内华达。文章最关键的细节是：即便拆了 modem，如果手机通过蓝牙连接，车仍可能借手机联网回传数据；作者因此只用 USB CarPlay。

原文链接：https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/

论坛讨论链接：https://news.ycombinator.com/item?id=48138136

HN 讨论里很多人分享了类似“明明关了遥测但数据仍被卖出”的经历。有人说自己的 Volkswagen 已关闭 app 和车机里的数据收集，几周没进店，却在申请 Carfax 时发现系统知道几天前的准确里程。评论认为这反映了后广告技术时代的默认逻辑：能收集的数据都会被收集，即使大部分永远没人看。也有人认为里程上报能防止二手车调表，有一定公共价值，但问题在于用户缺少清晰同意、范围控制和可验证的关闭方式。

---

## 2. M5 Mac 首个公开内核内存破坏利用：AI 和专家 5 天做出 PoC (First public macOS kernel memory corruption exploit on Apple M5)



Calif 称其团队在 Apple M5 硬件上做出了首个公开 macOS kernel memory corruption exploit，并可绕过 Apple 新一代 MIE（Memory Integrity Enforcement）硬件辅助内存安全机制。MIE 基于 ARM MTE，被 Apple 作为 M5/A19 的旗舰安全功能，用来显著提高内存破坏漏洞的利用成本。文章说，团队 4 月 25 日发现漏洞，4 月 27 日 Dion Blazakis 加入，5 月 1 日已有可用 exploit。攻击链是针对 macOS 26.4.1 的本地提权，从非特权用户出发，经两个漏洞和多个技巧，在启用 kernel MIE 的裸机 M5 上拿到 root shell。完整 55 页技术报告会在 Apple 修复后发布。作者强调 Mythos Preview 在 bug 发现和 exploit 开发中提供了帮助，但人类专家仍负责把模型输出约束到可用路径上。

原文链接：https://blog.calif.io/p/first-public-kernel-memory-corruption

论坛讨论链接：https://news.ycombinator.com/item?id=48139219

讨论分成兴奋和怀疑两派。有人认为专家加前沿模型一周内做出顶级平台 exploit，是安全研究进入新阶段的信号；也有人批评文章缺少可验证技术细节，更像 PR。评论普遍认为 Mythos 这类系统不能替代经验丰富的安全研究者：模型能提高速度、扩展搜索和辅助验证，但仍需要专家过滤幻觉、判断 exploitability、构造稳定链路。还有人讨论这类漏洞在 Apple bounty 中的价值，以及 MIE 并非“防黑客”，而是提高攻击成本。

---

## 3. Nginx 爆出远程代码执行 PoC：rewrite 模块堆溢出可打穿服务器 (New Nginx Exploit)


DepthFirstDisclosures 发布 NGINX Rift，这是 CVE-2026-42945 的 RCE PoC。漏洞是 NGINX `ngx_http_rewrite_module` 中自 2008 年引入的 critical heap buffer overflow，影响使用 `rewrite` 和 `set` 指令的服务器。根因在于 NGINX script engine 两阶段处理：先计算所需缓冲区长度，再复制数据。含 `?` 的 rewrite replacement 会在主 engine 上设置 `is_args`，但长度计算 pass 使用新建且清零的 sub-engine，于是长度计算按原始 capture 长度，复制 pass 却按 `NGX_ESCAPE_ARGS` 做 URI escape，某些字节膨胀到 3 倍，导致向过小堆缓冲区写入攻击者可控数据。PoC 利用跨请求 heap feng shui 修改相邻 `ngx_pool_t` cleanup pointer，最终调用 `system()`。受影响版本包括 NGINX Open Source 0.6.27 到 1.30.0，修复在 1.31.0/1.30.1。

原文链接：https://github.com/DepthFirstDisclosures/Nginx-Rift

论坛讨论链接：https://news.ycombinator.com/item?id=48138268

HN 安全从业者提醒，不应因为公开 PoC 暂不绕过 ASLR 就低估风险。ASLR 是 defense-in-depth，通常只是增加利用难度；文章声称有可靠绕过路径，而且 LLM agent 正在降低构造绕过所需的时间和技能。也有人指出，公开 PoC 不能直接打穿默认启用 ASLR 的服务器，确实会减少低水平自动化 bot 的即时风险，但这只意味着补丁窗口稍微宽一点，不意味着可以不修。评论还讨论 rewrite 和 set 的组合是否常见，结论是虽然不是最常见配置，但现实中确实存在。

---

## 4. 硬盘固件黑客入门：为了 Xbox 360 exploit，他开始改 HDD firmware (HDD Firmware Hacking)





这篇长文是 HDD Firmware Hacking 系列第一篇。作者最初在做 Xbox 360 softmod 相关 exploit，需要在主机读取硬盘数据时制造特定延迟来触发 race condition，于是想到修改 HDD firmware，让硬盘在读取某个 sector 时延迟数百毫秒。虽然后来他用其他方式解决了 race condition，不再必须改固件，但这个过程让他进入硬盘/SSD 固件逆向。文章记录了如何选择测试对象，包括 Samsung、Hitachi、Western Digital 和 Samsung SSD；如何查找旧论坛、HDD Guru 和 MalwareTech 等资料；也说明很多 15 年前经验并不直接适用于手头型号。第一篇聚焦人工完成的固件 dump、分析和修改，后续才会讲如何用 AI 辅助分析未知 MCU 架构、甚至让 Claude 访问硬盘调试。

原文链接：https://icode4.coffee/?p=1465

论坛讨论链接：https://news.ycombinator.com/item?id=48137553

评论补充了 SSD 固件研究和厂商封闭问题。有人提到 Samsung 840 EVO 固件曾被反编译，后来 Samsung 开始加密固件；也有人提醒二手 SSD 价格上涨后，买到有问题 vendor firmware 的风险更值得关注。讨论还吐槽厂商的“加密/混淆”常常很粗糙：有些 Linux live USB 固件更新工具会先把固件解密写到磁盘，再上传到设备，只要阻止清理目录就能拿到明文固件。有人认为厂商做这些更多是为了 DMCA 和法律威慑，而不是真正安全。

---

## 5. 双胞胎 IT 员工被开除后，几分钟内删除 96 个政府数据库 (Twin brothers wipe 96 government databases minutes after being fired)





Ars Technica 报道了一起离职访问控制失败案例。Muneeb 和 Sohaib Akhter 两兄弟曾因 wire fraud 和计算机犯罪服刑，后来进入一家为 45 个美国联邦客户提供软件服务的华盛顿公司。政府指控称，两人曾从公司网络数据中收集约 5400 组用户名密码，并写 Python 脚本测试酒店、DocuSign、航空账户等。2025 年 2 月 18 日，两人被 Teams 会议解雇；Sohaib 的 VPN 和 Windows 账号很快失效，但 Muneeb 的账号被遗漏。几分钟后，他开始访问政府数据库，阻止其他用户连接并执行删除命令，包括 `DROP DATABASE dhsproddb`，一小时内删除约 96 个数据库，还下载了 EEOC 文件和至少 450 人的联邦税务信息。事后两人还讨论清日志、删文件系统和是否勒索。

原文链接：https://arstechnica.com/tech-policy/2026/05/drop-database-what-not-to-do-after-losing-an-it-job/

论坛讨论链接：https://news.ycombinator.com/item?id=48115438

评论认为这个案例会强化企业最极端的裁员安全流程：先断权限再通知本人。但也有人主张更平衡的教训：敏感系统本来就不该允许单人单账号造成灾难，离职时应立即关闭特权凭据，但不一定要把所有人性化流程都取消。还有人指出，雇用有 wire fraud 历史的人做高权限系统管理员本身就是重大风控失误。讨论里也有大量离职权限未回收的轶事，有人 20 年后仍知道旧组织门禁和密码。

---

## 6. Bun 的 Rust 重写合并：代码更安全，争议也更大 (Rewrite Bun in Rust has been merged)


Bun 的“Rewrite Bun in Rust”PR 已合并。Jarred Sumner 在 PR 中表示，新的 Rust 版本通过了 Bun 现有跨平台测试套件，修复了一些内存泄漏和 flaky tests，二进制体积缩小约 3MB 到 8MB，benchmark 从持平到更快不等。更重要的是，团队现在获得了编译器辅助工具来捕获和预防内存 bug，而这些问题过去消耗了大量开发和调试时间。PR 也强调架构和数据结构基本保持一致，Bun 仍少用第三方库，也没有采用 async Rust。用户可通过 `bun upgrade --canary` 试用，正式版前还会继续优化和清理。由于 Bun 原本以 Zig 著称，这次合并引发巨大反应，PR 表情里赞成和反对都非常多。

原文链接：https://github.com/oven-sh/bun/pull/30412

论坛讨论链接：https://news.ycombinator.com/item?id=48132488

HN 讨论对“一周完成重写”的说法保持怀疑。有人指出仓库里已有非常详细的 Zig 到 Rust idiom 映射文档，Bun 代码也可能早就为迁移做了准备，例如内部智能指针类型和 `bun_collections` Rust crate。评论认为这不像突然完成的奇迹，更像长期铺垫后的集中合并。更广泛的担忧是 AI、营销和技术事实的边界正在模糊：开发者成了 AI 编程工具的目标客户，社区讨论可能混入大量宣传。也有人认为自己实测 LLM 后确实能明显提高迁移效率，但仍必须逐行严格 review。

---

## 7. 把 RTX 5090 接到 M4 MacBook Air：能玩游戏吗？ (RTX 5090 and M4 MacBook Air: Can It Game?)





作者尝试把桌面级 RTX 5090 通过 Thunderbolt eGPU 接到 M4 MacBook Air 上，并让它在 Linux VM 中工作。Thunderbolt 可以通过 USB-C 隧道传 PCIe，从主机角度看 eGPU 像一个较慢的 PCIe 设备；Linux 和 Windows 通常能直接使用，但 Apple Silicon macOS 没有 NVIDIA/AMD 显示驱动。tinygrad 的 macOS eGPU 驱动只适合其 AI stack，不能作为通用游戏/显示驱动。作者的方案是：macOS 支持 Thunderbolt，Linux 支持 NVIDIA，Linux 可作为 ARM64 VM 运行在 macOS 上，于是把 GPU passthrough 给 Linux VM。文章深入讲了 PCI BAR 映射、DMA、Apple Silicon DMA 约束、NVIDIA 对齐问题、mapping coalescing、调度和性能瓶颈，并给出游戏和 AI inference benchmark。

原文链接：https://scottjg.com/posts/2026-05-05-egpu-mac-gaming/

论坛讨论链接：https://news.ycombinator.com/item?id=48137145

评论里有前 Apple Silicon Mac Pro 工程师说，自己多年推动 VM GPU passthrough，因为 Mac Pro 内部 PCIe GPU 如果能直通 Linux VM 会非常合理。其他人讨论这个方案是否基于标准 DriverKit 接口：PCI BAR 似乎已经可从用户态映射，VMM 如 QEMU 采用相关接口即可，但 DMA buffer 限制和 entitlements 仍是现实障碍。也有人怀疑 Apple 是否愿意给足权限，因为这可能让用户买 NVIDIA GPU 而不是更贵的 Mac。

---

## 8. Anthropic 推出 Claude for Small Business，把 AI 接进 QuickBooks、PayPal 和 HubSpot (Claude for Small Business)



Anthropic 发布 Claude for Small Business，定位为面向小企业的一组 connectors 和即用 workflow，让 Claude 进入 QuickBooks、PayPal、HubSpot、Canva、DocuSign、Google Workspace、Microsoft 365 等常用工具。它通过 Claude Cowork 启用，连接现有业务系统后，用户选择任务，Claude 执行并在发送、发布、付款前等待人工批准。首批包含 15 个 agentic workflows 和 15 个 skills，覆盖财务、运营、销售、营销、HR 和客服，例如根据 QuickBooks 和 PayPal 数据规划 payroll、做 30 天现金预测、追发票、月结对账、生成 P&L、分析 HubSpot campaign、在 Canva 里准备营销素材等。Anthropic 把它包装成让小企业获得大企业自动化能力的一步。

原文链接：https://www.anthropic.com/news/claude-for-small-business

论坛讨论链接：https://news.ycombinator.com/item?id=48130950

HN 讨论认为真正的 killer app 可能是把 Claude Code/Codex 这类能力做成普通人能用的界面，类似 Excel 曾经把数据库能力交给普通业务人员。也有人说 Claude Cowork 的目标正是如此：非工程师开始直接让 Claude 写应用、部署、整理业务流程。但负面经验同样明显：很多人会生成大段未审阅文档、合同意见或方案，然后直接丢给同事，导致别人要花更多时间筛选。评论共识是，生成能力越强，人工的筛选、压缩和判断越重要。

---

## 9. MIT 校长警告：联邦科研经费下滑正在掐断人才管线 (A message from President Kornbluth about funding and the talent pipeline)


MIT 校长 Sally Kornbluth 在视频文字稿中说明，MIT 正面临经费和人才管线两方面压力。虽然国会曾部分恢复科研机构拨款，但 MIT 实际收到的联邦经费并未恢复到往常水平；一些机构还在讨论按地理因素分配资金，而不是只看科学价值。与去年同期相比，MIT 由联邦资助的校园科研活动下降超过 20%，新联邦科研奖项也下降超过 20%；算上非联邦来源后，整体 sponsored research activity 仍比一年前小 10%。经费不确定让各系在录取研究生时更加谨慎，除 Sloan 和 EECS MEng 外，新生入学规模较 2024 年可能下降近 20%，约少 500 名研究生。Kornbluth 警告，这不是简单削边角，而是基础研究、学生培养和国家未来创新能力的真实收缩。

原文链接：https://president.mit.edu/writing-speeches/video-transcript-message-president-kornbluth-about-funding-and-talent-pipeline

论坛讨论链接：https://news.ycombinator.com/item?id=48136262

评论除了讨论科研经费，也集中在学术职业本身的吸引力下降。有人说自己认识的大多数新近 PhD 都想离开 academia，尽管最初目标是学术生涯；科学 PhD 中位数已接近 6 年，工作艰苦、薪资低、前景不确定。也有人分享导师压榨研究生、把审稿和报告草稿等杂务交给学生的经历。另一派则认为 PhD 本质是 apprenticeship，需要时间发展研究品味、写作、演讲和问题选择能力，过快毕业未必有利于长期职业。

---

## 10. Scorched Earth 2000 网页版：老炮兵游戏又回来了 (Scorched Earth 2000 – Web)


Scorched Earth 2000 – Web 是经典炮兵游戏 Scorched Earth 风格的网页版移植。页面本身更像游戏界面而非文章：有 Player 1、Player 2、Shooter、Cyborg、Inventory、Missile ammo、Power、Angle、fire、New Round 等控件，也包含 About 信息，显示版本 1.1，日期为 2026 年 5 月 11 日，由 KAOS Software Team 制作，JavaScript Port 标注使用 ChatGPT 5.5。它承袭的是早年“调角度、调力度、发射武器、看抛物线和地形破坏”的回合制炮兵玩法，核心乐趣不在复杂叙事，而在简单物理、武器组合、风向/角度误差和朋友之间互相炸飞。正文很短，但截图和讨论足以说明这是一个怀旧 Web 游戏项目。

原文链接：http://www.scorch2000.com/web/

论坛讨论链接：https://news.ycombinator.com/item?id=48129694

HN 评论迅速变成老游戏和早年“黑客体验”回忆。有人说自己 9 岁时通过编辑 Scorched Earth shareware 的存档，把电脑玩家可用的 ultra tank 改给自己，这是第一次“破解”体验。也有人回忆 Escape Velocity 里的 Cap'n Hector shareware 防盗机制：试用期后会追杀玩家，孩子们通过资源编辑器削弱它或强化自己。讨论的共同点是，单机游戏时代的可编辑文件和弱保护机制反而培养了很多人的探索欲、逆向兴趣和对软件内部结构的好奇。

