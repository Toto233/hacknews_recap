---
title: '苹果放大招：AI框架、Xcode集成ChatGPT，助力开发者革新应用体验 | Hacker News 摘要 (2025-06-10)'
author: 'hacknews'
description: ''
pubDatetime: 2025-06-10 20:33:07.143+08:00
tags:
  - AI_Framework
  - Developer_Tools
  - Account_Security
  - Bruteforce_Attack
---

---

## 1. 苹果放大招：AI框架、Xcode集成ChatGPT，助力开发者革新应用体验 (Apple announces Foundation Models and Containerization frameworks, etc)

![苹果放大招：AI框架、Xcode集成ChatGPT，助力开发者革新应用体验 ](https://www.apple.com/newsroom/images/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/article/Apple-WWDC25-macOS-Tahoe-26-XCode-26-250609_big.jpg.large.jpg)

![苹果放大招：AI框架、Xcode集成ChatGPT，助力开发者革新应用体验 ](https://www.apple.com/newsroom/images/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/article/Apple-WWDC25-iOS26-Day-One-250609_inline.jpg.large.jpg)

![苹果放大招：AI框架、Xcode集成ChatGPT，助力开发者革新应用体验 ](https://www.apple.com/newsroom/images/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/article/Apple-WWDC25-iOS-26-Apple-Games-app-250609_inline.jpg.large.jpg)

苹果近日公布一系列开发者工具和技术重大革新，旨在激发全球开发者的无限创意与创新潜能。核心亮点包括：通过Foundation Models框架，开发者可利用设备端Apple Intelligence模型，打造智能且注重隐私的AI应用，甚至离线可用；Xcode 26深度集成ChatGPT等大语言模型，显著提升编码、测试与调试效率；同时，全新“液态玻璃”设计语言将为iOS 26等平台带来更优雅流畅的视觉体验。此外，Swift 6.2优化了性能与互操作性，Game Porting Toolkit 3和Metal 4等游戏工具也得到强化，助力开发者创造更沉浸的视觉效果与游戏体验。全新Apple Games应用则将所有游戏集中，并引入“挑战”功能，让玩家互动更丰富。这些更新赋能开发者，加速构建更美观、智能、引人入胜的未来应用。

原文链接：https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/

论坛讨论链接：https://news.ycombinator.com/item?id=44226978

苹果社区的用户们对苹果推出的“容器化框架”反响热烈，认为其原生Linux容器支持有望极大改善Mac上的工作流程，并减轻Docker带来的内存负担。

有用户通过苹果提供的GitHub仓库确认，该框架基于虚拟机（VM）技术，而非系统调用转换，具备创建优化Linux内核、轻量级VM及管理运行时环境的能力。

讨论的核心围绕虚拟机内存管理问题。用户指出，Linux内核在VM中运行时往往独占分配的RAM，导致Mac上Docker等应用内存占用高。社区探讨了是否有技术能让Linux感知VM环境并释放内存，或苹果能否打补丁。

解决方案方面，有用户提及KVM支持的“内存气球技术”，需宿主与客户机配合。但另有评论指出，即便有此技术，容器在VM内动态调整内存仍缓慢且复杂，Linux处理不佳，难有效回收内存。这导致超额分配下，Linux仍根据“可见”内存大小分配固定结构，造成浪费。有用户以WSL2为例，指出需终止VM才能回收大量内存。

最终，讨论归结于“气球驱动程序”的重要性，即客户机操作系统需加载特殊驱动，与宿主Hypervisor协同，按需请求和返还内存页面。

---

## 2. 谷歌账户遭暴力破解：仅凭电话号码，用户信息或被窃取 (Bruteforcing the phone number of any Google user)

![谷歌账户遭暴力破解：仅凭电话号码，用户信息或被窃取 ](https://brutecat.com/assets/leaking-google-phones/bgtoken.png)

一位技术爱好者在测试谷歌服务时，意外发现即使禁用浏览器JavaScript，谷歌的用户名恢复表单仍能运作。这本应受其2018年引入的BotGuard反滥用机制保护，令人惊奇。通过深入研究，他发现该表单可用来验证电话或邮箱是否关联特定显示名。尽管最初遭遇IP限速和验证码，他巧妙利用BotGuard令牌绕过限制，并尝试结合IPv6轮换IP地址，实现每秒数万次的查询。

尽管谷歌在2023至2024年间已逐步移除未认证账户的显示名以加强隐私，这位爱好者仍独辟蹊径，发现一个精妙的泄露途径：通过创建Looker Studio文档并将其所有权转移给受害者，受害者的谷歌显示名便可在主页上泄露，且无需任何交互。他进一步利用libphonenumbers库验证号码，并自动化了BotGuard令牌的生成。

最终，他成功构建了一条完整的“攻击链”，利用一台每小时仅0.3美元、配备16个虚拟CPU的普通服务器，便能达到每秒约4万次的检查速度。这意味着，结合“忘记密码”流程中泄露的电话号码片段，他能高效地验证大量电话号码对应的谷歌账户是否存在并获取其显示名。这次发现不仅揭示了大型科技公司安全防线中的潜在盲点，也展现了技术探索的无限可能，令人叹为观止。

原文链接：https://brutecat.com/articles/leaking-google-phones

论坛讨论链接：https://news.ycombinator.com/item?id=44224684

社区成员讨论了当前IP封锁机制在IPv6时代面临的挑战。一个普遍观点是，尽管主机提供商和ISP通常会分配至少一个/64的IPv6地址块，但大多数限速和IP封锁仍针对单个IP地址，这与IPv6的设计理念相悖。有用户指出，甚至大型内容分发网络（CDN）也未能正确处理，仍旧在用户从同一IPv6 /64地址块连接时发出“异常IP连接”警报，反映了行业对IPv6理解的滞后。

讨论还提到，这种现象部分源于代码复用，简单地增加IP地址存储位数比重新设计逻辑更容易。有成员观察到，在家用网络中直接获得可路由的IPv6地址已属常态，这使得网络地址转换（NAT）在IPv6中变得不再必要，预示着点对点连接的回归。

有评论强调，普通住宅用户通过DHCPv6前缀委托就能获得像/56或/48这样的大型IPv6地址块，这意味着一个用户可能拥有数万个/64地址块。因此，即使采用/64地址块进行封锁也过于粗犷，IPv6的IP过滤需要更智能的策略，例如初始针对单个或/64地址块，但对恶意行为持续者升级到封锁更大的地址段。

此外，社区成员也探讨了CGNAT（运营商级NAT）的影响，以及IPv6地址充裕性如何让分配和封锁变得更灵活，允许服务商根据用户群（如将未验证用户分配到更大的前缀，使他们相互影响而不波及付费客户）进行更精细的管理。

---

## 3. 苹果重塑五大系统： “液态玻璃”引领跨平台设计革命 (Apple introduces a universal design across platforms)

![苹果重塑五大系统： “液态玻璃”引领跨平台设计革命 ](https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-hero-250609_big.jpg.large.jpg)

![苹果重塑五大系统： “液态玻璃”引领跨平台设计革命 ](https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-Home-Screen-clear-look-250609_big.jpg.large.jpg)

![苹果重塑五大系统： “液态玻璃”引领跨平台设计革命 ](https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-Home-Screen-dark-tint-250609_big.jpg.large.jpg)

库比蒂诺，2025年6月9日 – 苹果公司今日发布史上最广泛的全新软件设计。以“液态玻璃”（Liquid Glass）为核心，此次更新覆盖iOS 26、iPadOS 26、macOS Tahoe 26、watchOS 26及tvOS 26五大平台，旨在实现跨平台和谐统一，革新用户体验。

这种半透明材质借鉴visionOS深度感，融合玻璃光学特质与苹果独有流动性，能动态折射、反射环境光线并智能适应内容，呈现精美活力。从应用控件、导航到系统锁屏、主屏幕、图标与小组件，其运用无处不在，让触控更直观愉悦。

苹果人机界面设计副总裁Alan Dye称，这是软硬件深度整合的里程碑，为未来体验奠定基础。新设计提升视觉表现力，操作流畅魔幻。如iOS 26 Tab栏滚动时智能收缩聚焦内容，macOS Tahoe 26引入透明菜单栏大幅提升桌面空间感。

全新API将助力开发者采纳“液态玻璃”设计，为应用注入生机与个性化。此变革预示苹果生态系统将迈入沉浸感的数字新纪元，令人对未来数字生活充满期待。

原文链接：https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/

论坛讨论链接：https://news.ycombinator.com/item?id=44226612

社区中，关于新操作系统中“液态玻璃”半透明界面设计引发了广泛讨论。

多位评论者首先指出，这种半透明图层对可访问性构成巨大挑战。有用户表示，背景噪音和模糊效果会干扰文字辨识，使其难以阅读，对自闭症患者和其他许多人来说都是一场噩梦，强烈呼吁提供关闭此功能的选项，尽管其外观“未来感十足”。

关于性能方面，讨论出现两派观点。部分用户担忧这会是“性能噩梦”，尤其是在老旧设备上运行会不流畅，并提及之前公司因性能成本而禁止使用半透明效果的经验。

然而，另一派用户则反驳了这一担忧。他们指出，苹果早在近十二年前的iOS 7中就引入了磨砂玻璃模糊效果，并在iPhone 4等旧设备上流畅运行，这得益于苹果专门优化的模糊算法。他们认为，在当今的硬件条件下，即使“液态玻璃”计算量更大，对性能的影响也微乎其微。

但前述观点很快遭到反驳。有评论者明确指出，iOS 7推出时，透明/半透明效果的滥用确实导致了所有苹果设备的电池续航时间显著缩短，甚至包括当时的最新型号iPhone 5S和5c。用户可以通过辅助功能关闭这些效果来提升系统响应速度和电池续航。

另有用户回忆起，iPhone 4S在升级iOS 7后确实变得非常迟缓，电池续航也有所下降，尽管磨砂玻璃效果本身能保持60帧流畅运行。他们认为，电池消耗可能并非完全归咎于模糊效果，因为该效果在应用内并不常出现。

---

## 4. macOS拥抱Linux容器：苹果开源Containerization项目 (Containerization is a Swift package for running Linux containers on macOS)

![macOS拥抱Linux容器：苹果开源Containerization项目 ](D:\python\hacknews\images\20250610\Containerization_is_a_Swift_package_for_running_Li.png)

苹果近日推出一款名为“Containerization”的Swift语言开源软件包，为Apple Silicon Mac用户带来福音，旨在革新其设备上运行Linux容器的方式。这一创新方案巧妙地利用macOS的Virtualization.framework，让每个Linux容器都能在独立的轻量级虚拟机中运行，实现亚秒级的极速启动，大幅提升开发效率和体验。

“Containerization”的核心优势在于其卓越的性能与灵活性。它内置优化版Linux内核和极简启动系统vminitd，保证容器运行轻量高效。开发者可为每个容器配置专属IP地址，省去繁琐的端口转发。此外，该包还支持自定义内核配置和版本，赋予用户根据不同工作负载需求进行灵活调整的能力。

这款基于Swift打造的工具包，不仅提供了丰富的API接口，还鼓励社区贡献，目前已发布0.1.0版本。它解决了在macOS上部署Linux环境的痛点，无论是进行跨平台开发、测试，还是仅仅好奇探索Linux生态，都能借此获得前所未有的流畅与便捷。对于热爱科技、追求高效的中文读者而言，“Containerization”无疑开启了Mac上Linux应用的新篇章，预示着更多精彩可能。

原文链接：https://github.com/apple/containerization

论坛讨论链接：https://news.ycombinator.com/item?id=44229348

社区围绕Apple新推出的容器工具展开讨论，该工具据称允许每个容器运行在独立的“轻量级Linux虚拟机”中。有评论者质疑“轻量级”的定义，猜测可能意味着共享单一Linux内核或通过模拟层实现内核API映射。但另有观点指出，若每个容器真运行独立Linux VM，这听起来相当“重量级”，一个含12个容器的项目将运行12个内核，而非一个，并对性能指标表示担忧。

讨论随后转向与Docker的对比。多位用户澄清，Docker的核心理念是共享宿主机操作系统资源以降低消耗，与为每个容器运行独立VM的做法截然相反。他们强调，Docker在Linux上直接使用宿主机内核，无需额外内核。而在非Linux系统上，Docker虽需一个额外Linux内核，但Apple新方案似乎是N个容器运行N个额外内核。有用户以WSL1为例，指出在不同操作系统之上模拟Linux系统调用是可行的。此外，也有评论者澄清，讨论可能混淆了Apple的两个相关项目：`apple/container`（开发者工具）和`apple/containerization`（应用容器侧车框架），指出后者才是支持轻量级VM上运行Linux容器的关键框架，前者则为使用该框架的工具。

---

## 5. 复古Mac“白金”色重现：3D打印圆梦经典 (Endangered classic Mac plastic color returns as 3D-printer filament)

![复古Mac“白金”色重现：3D打印圆梦经典 ](D:\python\hacknews\images\20250610\Endangered_classic_Mac_plastic_color_returns_as_3D.png)

![复古Mac“白金”色重现：3D打印圆梦经典 ](https://cdn.arstechnica.net/wp-content/uploads/2025/06/macfilament-1152x648.jpg)

![复古Mac“白金”色重现：3D打印圆梦经典 ](https://cdn.arstechnica.net/wp-content/uploads/2025/06/platinum_filament_1.jpg)

复古电脑收藏家Joe Strosnider近日推出一款创新3D打印耗材，完美复刻了上世纪80年代末至90年代经典Macintosh电脑标志性的“白金”色。这款PLA耗材以每公斤21.99美元的价格公开发售，旨在帮助广大爱好者3D打印怀旧物件、替换零件及配件，精准匹配老款苹果电脑的原有色彩，解决了原机塑料老化变色、难以修复的痛点。

Strosnider投入约900美元，历时多年与Polar Filament合作开发此色，并慷慨地选择公开发布配方，而非独占。此举填补了复古计算社区在色彩准确材料上的空白，尤其对“SE Mini”这类将老Mac主板融入现代显示器的新潮机箱项目意义重大。这不仅让经典科技焕发新生，更展现了科技爱好者们融合历史与未来的无限创意与热情。

原文链接：https://arstechnica.com/apple/2025/06/new-filament-lets-you-3d-print-parts-in-authentic-1980s-apple-computer-color/

论坛讨论链接：https://news.ycombinator.com/item?id=44188373

社区上的一段讨论围绕一本名为《Keep It Simple》的书籍前言展开。该书宣称苹果设计师Hartmut Esslinger在1982年与史蒂夫·乔布斯合作，引入了一种名为“Snow White”（白雪公主）的新颜色概念，这是一种“破白色”，旨在替代工业界普遍的“灰米色”，并首次应用于Apple IIc，以使电脑更适合居家环境，后来也出现在Macintosh SE上。

然而，有评论者指出，尽管该书是Esslinger的亲身叙述，但在其他地方，“Snow White”通常指的是一种设计语言而非特定的颜色。他们解释说，首款采用“Snow White”设计语言的产品Apple IIc，其颜色被称为“Fog”（雾色），这与苹果1986年至1999年产品中使用的“Platinum”（铂金色）有所不同，并提供了图片进行对比。另一位评论者也表示赞同，不理解为何将“Snow White”设计语言与“Platinum”塑料色混淆。

讨论中还出现了其他关注点，比如有评论者曾期待是关于2000年代初期iMac多彩塑料背壳的讨论。此外，对话转向了3D打印材料，有用户推荐Polymaker的“Panchroma Matte White”作为经典Mac塑料色的近似匹配。但随后有人纠正称，该颜色应为“Panchroma Muted White”，并指出其在实际匹配上存在偏差，更重要的是，这款材料的层间附着力极差，质量令人失望，期望其他制造商的产品能有更好的表现。

---

## 6. 超声波“入侵”神经系统：医学新纪元？ (Doctors could hack the nervous system with ultrasound)

![超声波“入侵”神经系统：医学新纪元？ ](https://spectrum.ieee.org/media-library/colorful-abstract-of-human-silhouette-with-anatomical-overlay-and-dynamic-wave-patterns.jpg?id=60557881&width=1200&height=1587)

一项突破性生物电子医学研究揭示，医生有望通过“聚焦超声刺激（FUS）”技术“入侵”神经系统，无创精准治疗炎症、糖尿病、肥胖及心肺疾病。这项技术利用超声波震动神经细胞，而非药物，以靶向方式干预身体功能，已在人体试验中成功降低炎症生物标志物TNF，并在动物实验中显著改善糖尿病和肥胖。FUS治疗安全且未来有望开发为智能可穿戴设备，让患者在家就能自我管理。这项基于FDA认证、安全可靠的现有超声技术，正开辟一个减少药物依赖、直接与“生物电”身体对话的全新医疗范式，前景令人振奋。

原文链接：https://spectrum.ieee.org/focused-ultrasound-stimulation-inflammation-diabetes

论坛讨论链接：https://news.ycombinator.com/item?id=44224874

社区围绕糖尿病治疗中“聚焦超声（FUS）”的作用展开讨论。最初有评论者质疑，FUS旨在纠正肝脏葡萄糖释放异常，但这被认为是糖尿病（特别是2型）的并发症而非原发原因（即胰岛素抵抗和β细胞功能障碍），因此“治疗肝脏来治疗糖尿病”显得奇怪。

有观点以“铲雪”为例，指出即便FUS是针对症状而非根本原因，能立即降低血糖仍具帮助。然而，另有评论者反驳，将糖尿病比作“受损的车道”，认为治疗应着重于修复潜在损伤和改变生活方式，而非仅仅依赖“电动工具”（如补充胰岛素）来缓解症状。

讨论中有人明确指出，该研究将FUS定位为“糖尿病的治疗方法”，而非仅是症状缓解。但也有人认为，医疗治疗不一定总针对根本原因，如同固定断腿与醉驾无关。此外，有评论提到“十二指肠黏膜修复术（DMR）”等研究，旨在通过修复十二指肠功能来“逆转疾病”。出人意料的是，还有评论者对FUS技术潜在的“战争罪行”应用表示担忧，联想到“哈瓦那综合征”。

---

## 7. 肖恩·蒙德兹《迷失日本》歌词暗藏玄机：科技侦探揭秘其千岛群岛立场 (Finding Shawn Mendes (2019))

![肖恩·蒙德兹《迷失日本》歌词暗藏玄机：科技侦探揭秘其千岛群岛立场 ](https://ericneyman.wordpress.com/wp-content/uploads/2019/11/mendes_in_iturup.jpg?w=1100)

![肖恩·蒙德兹《迷失日本》歌词暗藏玄机：科技侦探揭秘其千岛群岛立场 ](https://ericneyman.wordpress.com/wp-content/uploads/2019/11/yuzhno_sakhalinsk_airport-1.png?w=1100)

![肖恩·蒙德兹《迷失日本》歌词暗藏玄机：科技侦探揭秘其千岛群岛立场 ](https://ericneyman.wordpress.com/wp-content/uploads/2019/11/ci_124.png?w=1100)

歌手肖恩·蒙德兹的歌曲《Lost in Japan》引发了一场有趣的政治探秘。一位编辑通过层层推理，发现歌词中“离日本几百英里”的描述，并非指向常见的韩、中、台，而是巧妙地指向了俄罗斯远东城市南萨哈林斯克。经分析飞行时间、时区、甚至蒙德兹的蚊虫过敏史，最终锁定目的地为日本声称拥有主权的争议岛屿——择捉岛（Iturup Island）。文章指出，蒙德兹歌词中将择捉岛称为“日本”，无意中表明了他在这场日俄领土争端中支持日本的立场。这一细致入微的侦探式分析，不仅揭示了流行文化中可能隐藏的政治信号，也让读者对看似日常的流行歌曲有了全新的理解。

原文链接：https://ericneyman.wordpress.com/2019/11/26/finding-shawn-mendes/

论坛讨论链接：https://news.ycombinator.com/item?id=44222119

社区用户对一篇内容展开讨论，尽管对其目的感到困惑，但普遍认为其引人入胜且充满乐趣，欣赏其叙事巧妙构思。有人将其比作Caity Weaver作品，赞其魅力。文章本质引发多元解读：有人认为其幽默源于对空洞歌词的字面解读，称之为“反高潮法”；也有用户质疑其是否隐藏地缘政治信息。然而，主流观点认为这是一篇讽刺作品，旨在戏仿粉丝对“隐藏信息”的过度解读，或巧妙模仿阴谋论的荒谬逻辑，使其作为戏仿更可读。社区成员在享受阅读乐趣的同时，也对其讽刺手法进行了深入探讨。

---

## 8. 为专制者打造超级电脑，对民主有害无益 (Building supercomputers for autocrats probably isn't good for democracy)

![为专制者打造超级电脑，对民主有害无益 ](https://substackcdn.com/image/fetch/w_520,h_272,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc14b5829-f26f-4d2c-a624-daa066587912_1858x1326.png)

![为专制者打造超级电脑，对民主有害无益 ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72df4d7a-f501-4203-8a45-1b6f2f649d7b_555x161.png)

OpenAI推出“Stargate”计划，旨在全球构建AI基础设施，宣称赋能“民主AI”。然而，CEO奥特曼访问海湾后，OpenAI宣布与阿联酋达成大型AI数据中心合作，并宣称“植根民主价值观”。批评者指出，阿联酋民主与人权记录不佳（自由之家2024年评分为18/100），存在严格审查、劳工问题。OpenAI辩称此举旨在推广美式AI、助美国在AI竞赛中领先。但分析认为，这笔交易实质上极大增强了阿联酋政府的AI实力，与OpenAI普惠全人类使命和民主理念相悖。这引发了AI发展如何避免权力固化、巩固威权体制的思考。

原文链接：https://helentoner.substack.com/p/supercomputers-for-autocrats

论坛讨论链接：https://news.ycombinator.com/item?id=44219519

社区中围绕一篇关于“为独裁者建造超级计算机”的文章展开讨论，核心争议在于其将焦点过度集中在OpenAI，而忽视了其他科技巨头。

一些评论者对这种狭隘的视角表示不满，认为这是对OpenAI的“特别辩护”。他们指出，像思科和甲骨文等老牌公司，几十年来一直在从事类似甚至更具争议的活动，却鲜少受到关注。有用户强调，对于“为独裁者建造超级计算机”这一主题，甲骨文创始人拉里·埃里森及其公司的相关行径可能更具探讨价值。他们批评媒体常因点击量或广告收入而选择性报道，忽略了那些与政府有深入合作的“老牌”公司。一些人还认为，OpenAI最初的非营利形象早已失去意义，其行为应与其他任何与政府有争议关系的科技巨头一视同仁。

另一方面，也有讨论者为聚焦OpenAI进行辩护。他们指出，思科和甲骨文从未像OpenAI那样，以“造福人类”的非营利机构形象示人，因此OpenAI当前行为的转变本身就值得关注，堪比谷歌放弃“不作恶”原则。尽管承认可以同时关注多方，且像Palantir等公司也同样值得担忧，但他们强调，人工智能在监控和压制方面的独特适用性，以及OpenAI在该领域的主导地位，使其与权威政府的任何合作都值得特别关注。他们辩称，并非每篇文章都需涵盖所有问题，文章选择聚焦OpenAI有其合理性。

