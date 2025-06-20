---
title: '谷歌DeepMind发布Veo 3、Imagen 4及AI电影工具Flow：开启生成媒体新纪元 | Hacker News 摘要 (2025-05-21)'
author: 'hacknews'
description: ''
pubDatetime: 2025-05-21 20:07:45.938+08:00
tags:
  - Data_Breach
  - Cryptography
  - Deep_Learning
  - Applied_Topology
---

---

## 1. 谷歌DeepMind发布Veo 3、Imagen 4及AI电影工具Flow：开启生成媒体新纪元 (Veo 3 and Imagen 4, and a new tool for filmmaking called Flow)

Google DeepMind于2025年5月20日发布了一系列令人兴奋的全新生成媒体模型及工具，旨在激发无限创意。其中，Veo 3视频生成模型不仅提升了视频质量，更首次实现了音视频同步生成，能够逼真地模拟城市交通噪音、鸟鸣甚至人物对话。用户只需输入简短的故事提示，Veo 3便可将其栩栩如生地呈现。目前，美国地区的Gemini应用、Flow以及Vertex AI的企业用户已可体验。

此外，备受欢迎的Veo 2也迎来更新，新增参考驱动视频、精确相机控制、画面外扩和对象增删等功能，进一步提升了视频创作的灵活性。专为Veo打造的AI电影制作工具Flow，整合了Veo、Imagen和Gemini等模型，让用户可以通过自然语言轻松创建电影片段和场景。

Imagen 4图像模型则兼顾速度与精度，细节表现力惊人，尤其擅长处理织物、水滴和动物毛发等复杂元素，同时在排版和文字生成方面也有显著提升。音乐创作方面，Lyria 2为音乐人提供了强大的作曲和探索工具，通过YouTube Shorts和Vertex AI即可使用。为了确保AI生成内容的透明度，Veo 3、Imagen 4和Lyria 2的输出都将带有SynthID水印，并通过新推出的SynthID Detector验证门户，帮助用户识别AI生成内容。

原文链接：https://blog.google/technology/ai/generative-media-models-io-2025/

论坛讨论链接：https://news.ycombinator.com/item?id=44044043

论坛上关于Veo 3的AI视频演示引发热议。有人认为，谷歌收购YouTube是明智之举，YouTube作为互联网上最大的数据和流量来源，其数据对机器人技术至关重要。他们同时惋惜谷歌出售波士顿动力的举动。

对于YouTube“快速增长”的说法，有观点提出质疑，认为AI生成视频的比例正在快速增长，未来可能超过一半。但也有人认为，即使内容完全由AI生成，人类的参与仍然是AI学习的强大信号，类似于大规模的免费人工标注。

进一步的讨论涉及到AI参与互动的问题，有人担心人类的互动会被AI互动取代。另有观点指出，目前是广告商在为AI观看视频付费。针对AI生成内容混入数据集的问题，有人认为谷歌有能力检测并排除，但也有人对此表示怀疑，并指出部分用户可能希望合法上传AI生成内容。

---

## 2. 谷歌Gemma 3n重磅发布：大模型“瘦身”成功，手机AI体验再升级 (Gemma 3n preview: Mobile-first AI)

谷歌发布Gemma 3n预览版，一款专为手机、平板等日常设备打造的尖端开源AI模型，旨在将强大、高效且注重隐私的智能体验直接带到用户手中。
核心亮点在于：凭借创新的Per-Layer Embeddings等技术，即使是50亿及80亿参数的大模型，也能以仅2GB和3GB的超低内存高效运行，性能媲美小型模型；它还支持文本、图像、音频乃至视频的复杂多模态理解与实时语音处理。此外，其独特的“多合一”灵活架构，允许开发者动态平衡性能与功耗。
Gemma 3n不仅自身性能卓越，还将为下一代Gemini Nano奠定坚实基础，有望开启移动设备AI应用的新浪潮。开发者现已可通过Google AI Studio等平台抢鲜体验。

原文链接：https://developers.googleblog.com/en/introducing-gemma-3n/

论坛讨论链接：https://news.ycombinator.com/item?id=44044199

论坛用户分享了在安卓设备上使用Edge Gallery应用和Gemma模型进行图像识别和文本生成的体验。用户可以通过GitHub下载Edge Gallery apk，并通过Hugging Face导入.task文件。一位用户表示，Gemma-3n-E4B-it的性能介于Gemma 3 4B和12B之间，且指令遵循性良好，建议将最大tokens设置为32000。

不同用户在不同型号的Pixel手机上进行了测试，速度差异显著。Pixel 4a用户报告解码速度较慢，而Pixel 9 Pro XL速度相对较快，并能较好地识别复杂图像。Pixel Fold用户在使用CPU和GPU加速时也获得了不同的结果，GPU加速下首个token出现时间较长，但后续生成速度较快，但也有用户在使用GPU加速时遇到了bug。

还有用户在Galaxy Z Fold 4上进行了测试，并分享了CPU模式下的token生成速度。讨论中还提到了手机处理器的代际差异对性能的影响，以及摩尔定律在移动设备上的体现。总的来说，用户们对Gemma模型在移动设备上的运行速度和图像识别能力进行了初步探索和评估。

---

## 3. 科研AI重大突破：多智能体系统“罗宾”发现老年黄斑变性新疗法 (Robin: A multi-agent system for automating scientific discovery)

![科研AI重大突破：多智能体系统“罗宾”发现老年黄斑变性新疗法 ](https://arxiv.org/static/browse/0.3.4/images/icons/smileybones-pixel.png)

AI科研迎来新突破！科学家们推出名为“Robin”的多智能体系统，首次实现科研流程的全自动化。这个AI系统如同一个不知疲倦的科研助手，集文献搜索、假设生成、实验设计、数据分析于一体，自主完成科学发现的关键步骤。更令人兴奋的是，Robin已经成功找到一种治疗干性老年黄斑变性(dAMD)的新方法，dAMD是发达国家导致失明的主要原因。

Robin提出增强视网膜色素上皮细胞的吞噬作用，并验证了一种有潜力的候选药物Ripasudil。Ripasudil是一种临床使用的ROCK抑制剂，此前从未被认为可用于治疗dAMD。为了进一步探究Ripasudil的作用机制，Robin还设计并分析了一项RNA-seq实验，揭示了ABCA1的表达上调，这是一种关键的脂质外排泵，也可能成为新的治疗靶点。该研究中所有假设、实验计划、数据分析和图表均由Robin生成。

原文链接：https://arxiv.org/abs/2505.13400

论坛讨论链接：https://news.ycombinator.com/item?id=44043323

论坛上，有人指出某AI系统所谓的“新发现”实际上早已有综述文章介绍过。这暴露了AI的一个问题：它会产生大量看似合理实则无意义的内容，而验证成本很高。有人建议，与其炒作AI，不如致力于开发更可靠的论文查找和分析工具，以避免此类错误。

另有评论提到，其他研究小组也研究过ABCA1，并通过全基因组关联研究(GWAS)将其与相关疾病联系起来，但结论是它不起作用。作者质疑，如果将该AI系统重新定义为利用GWAS结果寻找小分子抑制剂/激活剂，然后进行RNA-seq实验的软件，是否还会引起关注。

针对该质疑，有人辩称，另一小组研究ABCA1的事实恰恰验证了该AI助手找到了一个合理的研究课题。其目标并非完美预测解决方案，而是通过自动化降低总体成本和时间。

但也有人反驳，如果AI遗漏了已被反驳的研究，推荐的实验(RNA-Seq)需要大量资源，且结果只是基因的上调，这可能意味着任何事情，那么它的价值就值得怀疑。基因调控最多只能表明基因的参与，而无法说明原因。最终，人们不需要加速科学思考的流水线，尤其是在专家需要重新验证每个发现的情况下。

---

## 4. 深度学习新解：拓扑学重塑AI认知，神经网络化身“拓扑生成器” (Deep Learning Is Applied Topology)

![深度学习新解：拓扑学重塑AI认知，神经网络化身“拓扑生成器” ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8dc662ec-be49-4697-8596-96f21d9e414f_1515x1254.png)

![深度学习新解：拓扑学重塑AI认知，神经网络化身“拓扑生成器” ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F376a3b5b-1d37-49c3-ae58-2b08198d081d_1600x1200.png)

![深度学习新解：拓扑学重塑AI认知，神经网络化身“拓扑生成器” ](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0bfc82be-8079-44d5-8eb2-59ab880e8668_1600x938.png)

AI领域的新突破！科学家们正尝试用拓扑学的视角解读深度学习，将神经网络视为“拓扑生成器”。想象一下，神经网络不再是冷冰冰的数字堆砌，而是像一块可以随意揉捏的橡皮泥，通过拉伸、弯曲，在高维空间中构建数据的拓扑结构，让原本难以区分的数据点各就各位，就像猫和狗，在特定拓扑结构中，也能找到明确的数学边界！

这种理解方式不仅帮助我们更深入地理解AI的“思考”方式，还为AI训练带来了新思路。通过构建“推理流形”，引导AI从“预测下一个词”向“问答推理”进化。Deepseek等机构正尝试用强化学习绕过人工标注，直接训练出更强大的模型。

原文链接：https://theahura.substack.com/p/deep-learning-is-applied-topology

论坛讨论链接：https://news.ycombinator.com/item?id=44041738

论坛上，一位作者回顾了自己过去十年尝试用拓扑学理解神经网络的经历，但认为效果不佳。他发现“线性表征假说”（概念对应于神经网络中的方向）和“电路”（连接概念的网络）更有帮助。他分享了相关的研究文章。

另一位参与者指出，人们对大型语言模型（LLM）存在一些误解，例如认为LLM只是稍微好一点的n-gram模型，或者认为“仅仅”预测下一个词就意味着模型一定很笨。他引用了对Karpathy的RNN文章的回应和一篇关于随机鹦鹉的论文，认为它们在某种程度上将LLM等同于n-gram模型。

还有人认为，关于“随机鹦鹉”和“模型是否理解”的讨论是不健康的，因为它本应是关于机制的科学问题。由于缺乏讨论神经网络内部机制的词汇，人们将意义投射到模糊的想法上，导致争论没有落实到科学、经验性的主张。他提到一篇论文，该论文对神经网络用于回答问题的计算进行了逆向工程，发现了可以描述为“多步推理”、“规划”等的计算，并通过干预实验进行了测试。他鼓励大家使用任何他们喜欢的语言，但理想情况下，应该更多地讨论具体的机制。

---

## 5. 英伟达的黎明：揭秘GPU巨头的崛起之路与技术创新 (The Dawn of Nvidia's Technology)

![英伟达的黎明：揭秘GPU巨头的崛起之路与技术创新 ](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO85gwYZe26wSgaOd1H0HOXSCvb0Om7puyQHn4n-ArzXGO8luzvNhIgqqGV9utc4_Y60fwaL7tPOEe5D6K5iAhjQ95czJYvM_BlFXE-VMGrUOIyOxgYU47QhYhEkuATIZtdlb-TwgzbG3v/s1600/Dshr.jpg)

![英伟达的黎明：揭秘GPU巨头的崛起之路与技术创新 ](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1n3V5T6sIrfAdzTzeDqJHGDw5GvhXbdt78jR9ryma3FKAHMxV_mhIsnIorW1RqkBVfy_6j59PlHhmyidrER_7irjnZ05NkmVlPVRt6x27a6hI-MvLi2b56YdE4ZuBQQbT4ptUohUY2gQt/w168-h200/NeWS-Pie.png)

![英伟达的黎明：揭秘GPU巨头的崛起之路与技术创新 ](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUzInF_bS1vKsGac_M_R9SQh1KBdMMpNxCeGFRRBy99iu9Z63We8RyFcDrO-z6l_I1uyGYpXbq3VhdcrEwH9wcquU1KQ7JGgm3k5a3tMrzFYEsOoxd7G2pkqQudn-QOa7YAfMk4hxM-as_Uk96Yy-v42_DS0D7W8NwwD4itMMAxEMVpYST_-SmsWCOVfZJ/w200-h141/5805930-Figure6.png)

随着英伟达成为全球最具价值的公司之一，两本新书《英伟达之路：黄仁勋与科技巨头的崛起》和《思考机器：黄仁勋、英伟达与全球最令人觊觎的微芯片》应运而生，揭示了这家科技巨头的早期创新历程。文章作者作为早期英伟达工程师，分享了对公司图形处理单元（GPU）NV1的成像模型和I/O架构设计理念的独特见解，指出当时英伟达利用四边形贴片技术在有限的PCI总线带宽下实现了突破性的性能，在PC上全帧率运行世嘉《VR战士》等街机游戏。

文章还回顾了在Sun Microsystems的工作经历，强调了在Unix环境下进行图形开发的经验如何塑造了英伟达的“面向未来”架构， 以及与微软DirectX竞争中，最终放弃四边形贴片转而采用三角形的战略转变。此外，文章着重介绍了Curtis Priem发明的“虚拟化对象”架构，该架构通过软件资源管理器模拟硬件功能，加速了芯片创新，使得英伟达能快速迭代芯片设计，迅速适应市场变化。这项架构的成功，被誉为英伟达的“秘密武器”，并影响了后续AWS数据中心网络接口的设计。

原文链接：https://blog.dshr.org/2025/05/the-dawn-of-nvidias-technology.html

论坛讨论链接：https://news.ycombinator.com/item?id=44043687

论坛的讨论围绕图形设备与CPU的通信方式展开，早期由于缺乏标准化，存在多种实现方式，例如三角形或四边形的选择、共享内存或命令队列的使用，以及DMA的方向等。现在有了Vulkan，它标准化了一些内容，但也暴露了硬件设计的诸多选择，允许通过DMA或共享内存传输数据，并支持不同方向的单向或双向传输。

一些开发者指出，由于Vulkan的底层暴露和扩展复杂性，其普及程度低于预期。Khronos也在Vulkanised 2025大会上承认了这一点，并制定了改进路线图。有开发者表示，目前基于Vulkan的Rust渲染器虽然API与three.js相似，但在加载静态glTF场景后，会遇到难以解决的并发问题。因此，Vulkan更适合引擎开发者，而对于需要快速完成3D任务的用户来说，更高层次的API更为舒适。这个并发问题并非复古问题，而是当前仍然存在的问题。

---

## 6. 揭秘美国贸易逆差：元凶并非贸易，而是国内“储蓄荒”！ (Why does the U.S. always run a trade deficit?)

美国为何长期面临贸易逆差？纽约联邦储备银行的经济学家指出，答案远不止于“进口大于出口”的表面现象。其核心在于一个宏观经济事实：美国的国内储蓄长期不足以支撑其国内投资需求，这一“储蓄缺口”需依赖海外资金流入来弥补，而这恰恰等同于贸易逆差的规模。

数据显示，自2000年以来，美国的投资支出占GDP比重持续高于国内储蓄。尽管各组成部分（家庭、企业、政府储蓄）各有波动，特别是疫情后家庭储蓄率走低，但整体储蓄不足的格局未变。

这意味着，单纯针对进出口的贸易政策，如关税或产业回流，若未能实质性改变国内储蓄与投资的对比关系，则难以从根本上扭转贸易逆差。一个生动的例子是，尽管美国曾一度消除了石油贸易逆差，但由于整体储蓄缺口仍在，其总贸易逆差并未因此显著缩小。

贸易逆差犹如一枚硬币的两面：一方面，它意味着美国能利用外国储蓄来支持国内投资，可能提升了经济的生产能力；另一方面，这也导致部分国内资产的收益流向海外。若要缩小逆差，则需提升国内储蓄或适度调降投资，这往往伴随着经济的调整过程。

原文链接：https://libertystreeteconomics.newyorkfed.org/2025/05/why-does-the-u-s-always-run-a-trade-deficit/

论坛讨论链接：https://news.ycombinator.com/item?id=44040407

论坛中，关于美元作为全球储备货币的讨论主要围绕其对美国经济和国际贸易的影响展开。一种观点认为，美元作为全球储备货币，确保了美国的贸易逆差，因为其他国家必须通过向美国提供商品和服务来获取美元，以便进行国际贸易。这使得美国能够获得巨大的政治影响力和市场情报，但代价是国内产业空心化和贸易逆差。理想的解决方案是建立一种基于一篮子货币的非国家全球储备货币。

另一些观点则质疑储备货币地位必然导致贸易逆差的说法，认为这需要外国持有的美元储备持续增长，以及美国人自愿增加负债。同时，有人指出美国并非受害者，而是通过这种体系获得了大量廉价商品和服务，使得美国居民的生活水平远超其自身生产能力。中国等国家通过高强度劳动生产大量消费品，换取“想象的数字”。这种体系存在崩溃的风险，届时美国可能面临困境。有人反驳说，这正是美国人民的“手段”，例如澳大利亚政府通过谈判获得更低的药品价格，并非超出其能力范围。

---

## 7. 摆脱引擎束缚：独立游戏开发者2025生存指南 (Making video games (without an engine) in 2025)

![摆脱引擎束缚：独立游戏开发者2025生存指南 ](https://noelberry.ca/posts/making_games_in_2025/postcard.png)

![摆脱引擎束缚：独立游戏开发者2025生存指南 ](https://noelberry.ca/posts/making_games_in_2025/aseprite.jpeg)

![摆脱引擎束缚：独立游戏开发者2025生存指南 ](https://noelberry.ca/posts/making_games_in_2025/platforms.jpeg)

独立游戏开发者在2025年如何摆脱大型游戏引擎的束缚？一位拥有20年从业经验的开发者分享了他的秘诀：拥抱轻量级、定制化的工具链，打造更自由的游戏开发体验。他认为，Unity或Unreal Engine等“大而全”的引擎虽然功能强大，但对小型项目而言，90%的功能都是多余的，而且引擎的专有工作流程和商业决策反而会限制开发者的创作自由。

这位开发者偏爱C#语言，因为它既能保证游戏运行速度，又易于上手，尤其适合小型团队。他推荐使用SDL3作为跨平台抽象层，处理窗口、控制器和渲染等底层任务，并利用FMOD处理音频。对于关卡设计，他倾向于自制编辑器，并借助Dear ImGui快速构建用户界面。

得益于C#的Native-AOT工具链和SDL3的跨平台支持，游戏移植变得前所未有的简单。这位开发者甚至放弃了Windows，转投Linux的怀抱，进一步拥抱开源和跨平台工具。他认为，对于追求独特风格和高效开发的小型团队来说，自制游戏工具链是完全可行的，而且乐趣无穷。

原文链接：https://noelberry.ca/posts/making_games_in_2025/

论坛讨论链接：https://news.ycombinator.com/item?id=44038209

论坛上关于游戏引擎开发的讨论主要集中在引擎本身与围绕引擎的工具链和内容管线的重要性对比上。有人指出，游戏引擎的运行时部分实际上只占整个系统的一小部分，真正的重点在于各种工具和资源管线，包括数据导入、编辑器、可视化操作、数据打包等，这些对于游戏的成功至关重要。游戏工作室通常拥有较小的引擎团队，而有大量的工具程序员负责处理这些关键的周边工作。

另有评论表示，游戏引擎实际上只是依附于资源管线末端的一个运行时附件，并指出shader编译器的重要性日益增加。同时，有开发者认为，自制引擎不必追求通用性，只需满足特定游戏的需求即可，并可以利用现有的库和框架来简化开发，例如使用imGUI这样的UI库。但也有人提醒，依赖外部库可能面临库被废弃的风险，导致需要重新实现相关功能。对此，有人反驳说库被废弃并不意味着它会立即停止工作。

---

## 8. Windows福音：用Janet编写的强大分块式窗口管理器Jwno问世！ (Show HN: A Tiling Window Manager for Windows, Written in Janet)

![Windows福音：用Janet编写的强大分块式窗口管理器Jwno问世！ ](https://agent-kilo.github.io/jwno/img/jwno-emacs-repl.jpg)

![Windows福音：用Janet编写的强大分块式窗口管理器Jwno问世！ ](https://agent-kilo.github.io/jwno/img/jwno-sonic-pi.jpg)

Jwno是一款为Windows 10/11量身打造的、高度可定制的分块式窗口管理器。它采用Janet语言编写，并且充满了爱心（❤️）。Jwno为你的桌面带来神奇的括号力量，这种力量完全可控，绝非“可疑”。

这款管理器可以轻松管理Emacs框架以及自身的REPL窗口，还能与Sonic Pi等应用完美协作。Jwno具备独特的UI提示功能，方便用户与UI元素互动。

目前，Jwno的文档仍在完善中，部分链接可能暂时无法访问。无论你是新手还是经验丰富的用户，都能找到相应的资源：新手可以查看特性介绍、安装指南和交互式教程；老手则可以参考使用手册、参考索引和开发指南。如果在使用过程中遇到问题，可以通过Issue Tracker提交。源代码同时托管在Github和Chisel上，欢迎大家前往探索和贡献。

原文链接：https://agent-kilo.github.io/jwno/

论坛讨论链接：https://news.ycombinator.com/item?id=44042490

论坛上，一位用户表示该软件在辅助功能方面潜力巨大，尤其是在眼动追踪输入方面。他建议增加在较小屏幕区域内实现平铺的选项，并指出Windows 11破坏了应用栏的垂直停靠。他还提到UI提示功能似乎无法正常工作，并认为对于新手来说，必须选择配置文件才能使用该软件有些令人生畏。

开发者回应，可以通过“transform”顶层框架来为屏幕键盘预留空间，并建议提交bug报告，附上相关日志，以便调查UI提示无法工作的问题。关于没有默认配置的问题，开发者解释说，窗口管理器是高度个性化的，默认配置很可能最终会被修改，因此没有在可执行文件中包含默认配置。

另一位用户提问，使用Janet/lisp-like语言是否有带来便利之处。有人回复，REPL和交互式开发流程非常有价值。

---

## 9. TeleMessage遭黑客重创：410GB敏感数据泄露，加密通讯成“裸奔”？ (DDoSecrets publishes 410 GB of heap dumps, hacked from TeleMessage)

![TeleMessage遭黑客重创：410GB敏感数据泄露，加密通讯成“裸奔”？ ](https://images.unsplash.com/photo-1642204705127-accc0dcc5779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGxhbmRmaWxsfGVufDB8fHx8MTc0NzY3MTQzMnww&ixlib=rb-4.1.0&q=80&w=1200)

![TeleMessage遭黑客重创：410GB敏感数据泄露，加密通讯成“裸奔”？ ](https://micahflee.com/content/images/2025/02/programming-1.png)

![TeleMessage遭黑客重创：410GB敏感数据泄露，加密通讯成“裸奔”？ ](https://www.gravatar.com/avatar/73aa6b8ef40730e5cbcce3137400120e?s=250&r=x&d=mp)

互联网再掀波澜！“分布式秘密否认”组织（DDoSecrets）今日发布了高达410GB的敏感数据，矛头直指以色列公司TeleMessage。这家公司专门为Signal、WhatsApp等加密通讯软件定制“魔改”版本，核心功能是集中存档用户消息。由于数据包含大量个人身份信息（PII），DDoSecrets目前仅向记者和研究人员开放访问权限。

故事的开端要追溯到前国家安全顾问Mike Waltz在Signal群组中讨论敏感信息，引发了对特朗普政府官员使用加密通信的担忧。随后，Waltz被发现使用TeleMessage的定制版Signal——TM SGNL，与Tulsi Gabbard、JD Vance和Marco Rubio等人联络。

紧接着，TM SGNL的源代码被曝光，TeleMessage遭遇黑客攻击，安全漏洞浮出水面，甚至有研究表明TeleMessage的产品在加密方面存在虚假宣传。最令人震惊的是，TeleMessage的服务器存在严重漏洞，任何人都可以通过特定URL下载包含明文聊天记录的Java堆转储文件。此次DDoSecrets发布的正是这些堆转储文件，其中包含大量明文消息和元数据，揭示了“Signal门”事件中令人瞠目结舌的失误。

原文链接：https://micahflee.com/ddosecrets-publishes-410-gb-of-heap-dumps-hacked-from-telemessages-archive-server/

论坛讨论链接：https://news.ycombinator.com/item?id=44036647

论坛中有用户爆料，涉事服务器存在一个公开的`/heapdump`端点，可以访问服务器的堆转储。与此事件相关的讨论主要集中在以下几个方面：

*   **安全性问题**：Signal反对第三方应用或分支连接到其服务，因为不安全的版本会降低整体安全性。Apple关闭iMessage客户端应用也有类似的考量，尽管有人认为这是为了将用户锁定在iPhone生态系统中。有评论认为，在不信任的环境下，加密群聊本身就存在矛盾，技术手段无法取代信任的重要性。
*   **品牌与普及的权衡**：有人批评Signal过于注重品牌，而忽略了安全消息传递的广泛普及。他们认为应该优先扩大用户群，而不是过分强调品牌形象。
*   **单一实现的问题**：有人指出，协议的单一实现可能会导致漏洞，但却难以被发现。另有评论反驳说，实现与品牌或销售无关。
*   **数据泄露的风险**：恶意应用可能会利用新的消息接口来获取用户数据。

---

## 10. 90s.dev：Web端复古游戏创作平台，重燃90年代开发激情 (Show HN: 90s.dev – Game maker that runs on the web)

90s.dev/os，一个让人眼前一亮的新平台横空出世，它专为游戏制作工具的创造者而生。开发者自今年二月起便埋头苦干，力求打造一个独特的创作环境。

这个平台的核心是一个API，它巧妙地将Web技术包裹在“操作系统”的比喻之中，唤醒人们对90年代GUI应用开发的美好回忆。它并非游戏引擎或游戏制作器，而是一个API，用于构建游戏、游戏引擎以及游戏制作组件。想象一下，你可以在浏览器中，通过HTML画布进行创作，拥有一个可扩展至全屏的320x180屏幕。更令人兴奋的是，所有应用都在Web Workers中运行，保证安全与性能，同时通过OffscreenCanvas赋予你完全的WebGL2访问权限，轻松实现60帧的游戏体验。

开发者可以便捷地发布和加载GitHub或NPM上的应用。平台配备了基于TypeScript的VSCode SDK，加速原型设计。它还支持导入编译为wasm的各种语言模块。平台自带基础应用，用于制作像素艺术素材，例如绘图、精灵制作和地图制作工具。未来，社区成员还可以贡献声音特效和音乐编辑器等应用，共同构建一个充满活力的生态系统。通过iframe或链接，你可以轻松分享你的作品。

90s.dev/os的设计灵感来源于PICO-8、TIC-80、Picotron和Love2D等经典平台，力求在极简主义、可扩展性和易用性之间找到平衡。它甚至还拥有一个创新的GUI API，以及一个简单而强大的自动布局系统。更酷的是，平台支持从NPM或GitHub导入文件，极大地扩展了其可能性。

原文链接：https://90s.dev/blog/finally-releasing-90s-dev.html

论坛讨论链接：https://news.ycombinator.com/item?id=44042371

论坛上，一位开发者分享了自己凌晨两点起床写代码的经历，并构建了一个游戏制作工具、游戏引擎和游戏的API。他表示自己热爱API设计，并很高兴能全身心投入到自己热爱的事业中。有人认为他发布得太早了，作者本人也承认发布过早，表示会改进并过几个月再回来。但也有人认为发布得恰到好处，赞赏其项目过度设计，甚至实现了自己的响应式系统。还有人分享了自己将Vue响应式系统应用于GTA多人服务器的经验。作者提到，自己设计的Refs可能在计算机科学领域有所突破，甚至考虑以此为题撰写博士论文。另有评论者认为，结合PICO-8和React的经验，很容易理解这个项目，并且16:9的比例选择很好。作者感谢大家的鼓励，并表示会继续迭代，使其更易用，并计划尽快完成paint应用。

