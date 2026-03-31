---
layout: ../../../layouts/PresentationLayout.astro
title: OpenCode（opencode）使用说明
---

# OpenCode（opencode）使用说明

> 信息来源：OpenCode 官方文档
> - https://opencode.ai/docs
> - https://opencode.ai/docs/agents
> - https://opencode.ai/docs/commands

## OpenCode 是什么（一句话）

OpenCode 是一个开源 AI coding agent，可在 **终端 TUI / 桌面端 / IDE 插件**使用。（来源： https://opencode.ai/docs ）

## 适合什么时候用

- 不想被 IDE 绑定，想在服务器/容器/远程机里跑
- 希望更可控（可自托管/可改造/可审计）
- 想把 agent 融入现有 workflow：Git + CI + 测试

## 上手流程（按官方文档）

1) **安装**
- 安装脚本：
  - `curl -fsSL https://opencode.ai/install | bash`
- 或 `npm install -g opencode-ai` / `brew install anomalyco/tap/opencode`（来源： https://opencode.ai/docs ）

2) **配置 Provider（推荐用 /connect）**
- 在 TUI 里运行 `/connect`，按提示绑定 provider / 填 API key（来源： https://opencode.ai/docs ）
- 备注：provider 凭证会存到本机 `~/.local/share/opencode/auth.json`（来源： https://opencode.ai/docs/providers ）

3) **进项目目录启动**
- `cd /path/to/project`
- `opencode`

4) **项目初始化（非常关键）**
- 在 TUI 里运行 `/init`
- 它会分析项目并在根目录生成 `AGENTS.md`，用来描述项目结构/编码模式（来源： https://opencode.ai/docs ）

5) **先 Plan 再 Build（最佳实践）**
- OpenCode 内置两个主 agent：Build 和 Plan（来源： https://opencode.ai/docs/agents ）
- **Plan 模式**会限制写文件/跑 bash（默认都需要 ask），适合先出方案，避免“手一抖改太多”（来源： https://opencode.ai/docs/agents ）
- 在 UI 里用 Tab 在 Plan/Build 间切换（来源： https://opencode.ai/docs/agents ）

6) **后悔了就撤回（/undo）**
- 改出来不对，可以用 `/undo` 撤销（来源： https://opencode.ai/docs ）

## 演讲里值得讲的“最佳实践”（官方能力 + 经验打法）

### 1) 先 Plan 再 Build
官方就建议：做 feature 时先让它出 plan，再切回 build 真改代码。（来源： https://opencode.ai/docs ，Add features）

### 2) 学会引用文件（@file）
官方示例大量使用 `@packages/.../file.ts` 这种方式，把具体文件内容直接喂给模型，能明显减少“找错文件/改错位置”。（来源： https://opencode.ai/docs ，Ask questions/Make changes）

### 3) 不满意就 /undo
这是 OpenCode 内置的安全绳：改崩了、方向不对，直接 `/undo`。（来源： https://opencode.ai/docs ，Undo changes）

### 4) 用自定义命令把工作流固化（/test /review…）
OpenCode 支持自定义命令（markdown 或 JSON），并支持把 shell 输出注入 prompt（`!\`cmd\``）、把文件内容注入 prompt（`@file`）。
这条非常适合演讲：**把“最佳实践”做成一条命令**。
（来源： https://opencode.ai/docs/commands ）

### 5) 把角色拆开：Build / Plan + 子 agent
官方内置 primary agents：Build（全工具）/ Plan（受限权限）；还有 subagents（General/Explore）用于并行或只读探索。
这条适合讲“怎么不污染主上下文、怎么让 agent 干脏活”。
（来源： https://opencode.ai/docs/agents ）

---

## 推荐的“需求描述模板”（我建议你在演讲里给观众抄走）

把任务写成 4 段，稳定性会明显提升：

- **目标（可验收）：** 你要交付什么？
- **约束（别乱改）：** 不要动哪些文件/接口？要兼容什么？
- **上下文（给路标）：** 相关模块/文件路径在哪里？（最好用 `@path/to/file`）
- **验证（硬门槛）：** 跑哪些命令算通过？（可以固化成自定义 `/test` 命令）

示例：

- 目标：修复登录接口 500，返回正确的错误码
- 约束：不要改数据库 schema；不要引入新依赖
- 上下文：主要逻辑在 `src/auth/login.ts`
- 验证：`pnpm test` + `pnpm lint` 全绿

## 常见坑（提前避雷）

- 没在 repo 根目录运行 → 上下文不完整，容易乱改
- 没写验证命令 → 改完“看起来对”，但跑不起来
- 一次塞太大需求 → 大重构失控；建议拆成 3~5 个小任务
- 跳过 diff 审查 → 最容易把“可运行状态”搞丢
