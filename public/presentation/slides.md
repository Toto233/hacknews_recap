# vibe coding

氛围编程 · AI 时代的编程新范式

演讲人：Toto233

> 工具只是开始，持续学习才是关键。

---

## 这份 Slides 怎么看

- 来听演讲：跟着主线走（过去 / 现在 / 未来）
- 想复用方法论：重点看「习惯与原则」+「OpenClaw」

---

## 核心理念

- **早上手，早受益**
- 工具的**复利效应**
- 做自己真正会用的东西（**吃自己的狗粮**）
- 真正提高生产力：学会跟机器配合
- **别怕出错**：把坑变成机制（备份 / checkpoint / 文档固化）

---

## 不是什么

- ❌ 完美主义
- ❌ 炫技式项目
- ❌ 为了学而学

---

## 工具生态：过去 / 现在 / 未来

同一件事（写代码 / 做事情），不同阶段工具关注点不同：

- **过去：Cursor + Trae**（AI IDE / 端到端工程师）
- **现在：Claude Code（+ Codex CLI）**（终端里的工程搭档，闭环交付）
- **未来：OpenClaw**（从“写代码”到“管生活”）

---

## 过去：Cursor

![Cursor](/presentation/images/cursor.png)

- AI 原生 IDE（VS Code 二次开发）
- 多模型、全仓库理解
- 自主性滑块：Tab 补全 → Agent 自主

---

## Cursor：三种使用模式

1. **Tab 补全**：像写代码一样自然
2. **Cmd+K**：针对性编辑
3. **Agent 模式**：自主构建 / 测试 / 演示

---

## 过去：Trae

![Trae](/presentation/images/trae.png)

- Understand → Execute → Deliver
- 强调端到端交付：理解需求 → 独立编码 → 完整交付

---

## 现在：Claude Code

![Claude Code](/presentation/images/claude.png)

**关键词：** 终端里的工程搭档

- 读仓库 / 跑命令 / 产出 diff
- 跑测试 / 修复 / 再验证
- 把“能跑起来”当硬门槛

---

## vibe coding 最佳实践：把 AI 变成可复利系统

- 先跑起来，再迭代
- 让 AI 快速实现想法，但你要负责“收口”
- 迭代中学习 AI 的思维方式

---

## 关键补丁：用 Git 保存“每一次成功”

我们遇到过典型事故：
- AI 因为编码/换行/格式等小问题
- 看起来改得很大，但最后**完全跑不起来**

解决不是“别让 AI 改”，而是**流程化**：
- 每到一个可运行状态就 **commit checkpoint**
- 大改动走分支：`feature/*`
- 先看 diff → 再跑测试 → 再合并

---

## 未来：OpenClaw（从 IDE 到个人助理）

> Claude Code 帮你写代码，OpenClaw 帮你做一切。

**定位：** 个人 AI 助手框架（24/7 待命）

**核心能力：**
- 多渠道消息与提醒（Telegram/Discord/飞书/…）
- 文件与知识（本地读写、飞书文档、长期记忆）
- 自动化（Shell / Browser / Node / Cron / Heartbeat）

---

## 模型切换：GLM-4.7 → ChatGPT 5.2

同一套用法，换模型后“性格”明显变：

- GLM-4.7：更像美国人（直给、快、执行导向）
- ChatGPT 5.2：更像德国人（严谨、爱确认、边界更强）

**结论：** 不是你变了，是模型的“气质/偏好”变了。

---

## 真实案例：把学习也做成 vibe coding

项目：**Macroeconomics-for-Dummies-study（开源）**

- 学习过程 repo 化：`progress/` `summaries/` `sessions/`
- `AGENTS.md` 固化学习助教角色、提问方式、输出标准
- 每次学习沉淀可复用产物：摘要 / 自测题 / 复习块

仓库：
https://github.com/Toto233/Macroeconomics-for-Dummies-study

---

## 配图：卖不掉也会计入 GDP

（GDP 统计口径里，卖不掉的产出会作为“存货投资”计入 GDP）

![GDP/Inventory 例子](/presentation/images/macro-gdp-inventory.png)

---

## 真实案例：从「搞坏 WSL」到安卓 Termux（Dr.Two）

- 第一世：WSL Ubuntu
  - 配置快，但也容易“用坏”
- 第二世：安卓 Termux（Dr.Two）
  - 吃过亏后把稳定性固化成机制：
    1) 改配置前先备份
    2) 重要修改先在测试环境试
    3) 守护进程监控 gateway 状态

---

## 最近一次折腾：更新版本 + 换模型 → 行为大变

我们做的不是吐槽模型，而是把它调回可用：

- 找到导致频繁确认/阻塞的配置开关
- 不需要的确认关掉，需要的边界留住
- 让它恢复到「该干活就干活」

> 工具会变、模型会变，但你的系统要用配置和文档把稳定性固化下来。

---

## 行动号召：把 AI 变成你的复利系统

别等了，现在就开始。

三步走：
1. 了解工具（Cursor / Trae / Claude Code / OpenClaw）
2. 快速上手（今天就用起来）
3. 深入使用（把工作流写进规则和文档里）

---

## 送你一个 Prompt（可带走）

> **"2026 年，如果只选一个习惯——只要做到每天稳定执行，就会最大程度上改变你的人生——这个习惯是什么？"**

落地方式：
- 拆成「每天都能做完」的小动作
- 把结果固化成可复用的东西（代码 / 笔记 / 脚本 / 流程 / 文档）

---

## 参考资料

- Cursor: https://cursor.com/cn
- Trae: https://www.trae.cn/
- 微信公众号文章： https://mp.weixin.qq.com/s/bO-Tq4w5YG5jrayzzyJTAA

---

## 推荐关注（持续学习）

---

### 宝玉AI

![宝玉AI](/presentation/images/b8d513cb-c453-4dc9-9e69-e7fed0bc73a6.webp)

---

### 数字生命卡兹克

![数字生命卡兹克](/presentation/images/d3d26763-262f-429f-a580-e163be772258.jpg)

---

### 小互AI

![小互AI](/presentation/images/7191e495-ff0e-46ac-aeac-ab430f24e26e.jpg)

---

### HackerNews

![HackerNews](/presentation/images/ab423e9b-2b67-4e4d-ba92-afcdb999a8ba.jpg)

---

### 跨国串门儿计划

![跨国串门儿计划](/presentation/images/701b832e-0fc1-465e-a7ee-ce4e6672465b.png)

---

## 谢谢

工具只是开始，持续学习才是关键。
