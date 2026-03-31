---
title: Qwen Code 使用说明
---

# Qwen Code 使用说明

> 信息来源：GitHub 仓库 README + 官方文档站
>
> - https://github.com/QwenLM/qwen-code
> - https://qwenlm.github.io/qwen-code-docs/

## Qwen Code 是什么（一句话）

**一个住在终端里的开源 AI coding agent**，并且针对 **Qwen3-Coder** 做了优化：用来理解大型代码库、自动化重复劳动、并以“多步 agent 工作流”方式完成改动。

## 你会怎么用它（演讲友好版）

- **读代码**：让它总结项目结构、定位关键模块
- **改代码**：按需求跨文件修改、补边界条件
- **重构**：拆分函数/模块、重命名、补注释
- **补测试**：生成单测与测试数据
- **自动化**：用 headless 模式跑脚本/CI（不进交互 UI）

## 使用前提（你这边的实际情况）

你这里是**公司已在云 IDE 里预装/预配好**，所以一般不需要你自己安装。

你只需要在云 IDE 的 Terminal 里：

```bash
cd your-project/
qwen
```

> 备注：如果遇到某些环境没装（或者你要在本机跑），官方要求 Node.js 20+，并提供脚本 / npm / brew / Windows bat 等安装方式（详见仓库 README）。

## 启动与首次登录

在项目目录下启动（交互式终端 UI）：

```bash
cd your-project/
qwen
```

首次使用建议先看帮助并完成认证：

```text
/help
/auth
```

### 认证方式（两种）

- **Qwen OAuth（推荐，含免费额度）**：浏览器登录 qwen.ai；据 README 描述可用 **1,000 free requests/day**。
- **API Key**：通过 OpenAI / Anthropic / Gemini 兼容协议接入，也可接入阿里云 DashScope/Bailian 等 OpenAI-compatible endpoint。

> 备注：在 **CI/SSH/容器等 headless 场景**通常不方便走浏览器 OAuth，这时用 API Key 更稳。

## Headless（无 UI）模式：脚本/CI 常用

```bash
cd your-project/
qwen -p "Explain the codebase structure."
```

## 配置：~/.qwen/settings.json（推荐）

官方推荐用 `~/.qwen/settings.json` 统一配置 model providers、API keys、默认模型等。

- `~/.qwen/settings.json`：用户级（全局）
- `.qwen/settings.json`：项目级（仅该项目生效，覆盖用户级）

一个 README 给的完整示例（OpenAI-compatible，通过 DashScope）：

```json
{
  "modelProviders": {
    "openai": [
      {
        "id": "qwen3-coder-plus",
        "name": "qwen3-coder-plus",
        "baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "description": "Qwen3-Coder via Dashscope",
        "envKey": "DASHSCOPE_API_KEY"
      }
    ]
  },
  "env": {
    "DASHSCOPE_API_KEY": "sk-xxxxxxxxxxxxx"
  },
  "security": {
    "auth": {
      "selectedType": "openai"
    }
  },
  "model": {
    "name": "qwen3-coder-plus"
  }
}
```

补充：也支持在 shell 里 `export XXX_API_KEY=...` 或用 `.env`（通常优先级更高）；**不要把 key 提交到仓库**。

## 常用交互命令（记 6 个就够）

- `/help`：查看命令
- `/auth`：切换/重新登录认证
- `/model`：在已配置模型间切换
- `/clear`：清屏/清对话
- `/compress`：压缩历史，省 token
- `/exit` 或 `/quit`：退出

快捷键：`Ctrl+C` 取消当前操作；空行时 `Ctrl+D` 退出。

## YOLO 模式（自动批准：改文件 + 跑命令）

Qwen Code 有 4 种权限/确认模式：`plan`（只读分析）、`default`（改文件/跑命令都要你确认）、`auto-edit`（自动改文件，但跑命令要确认）、`yolo`（全自动，最高权限）。

**YOLO 的核心含义**：它会**自动批准所有操作**，包括**文件编辑**和**Shell 命令执行**。

⚠️ 风险提示（演讲里建议一句话强调）：

- 只在你**信任当前代码库**、并且最好已经 **git commit/有备份** 的情况下用
- 在共享/生产环境里不要随便开（它能用你当前终端权限执行任意命令）

### 开启 YOLO（仅当前会话）

在 qwen 交互界面里：

```text
/approval-mode yolo
```

### 设为默认（项目级/用户级）

```text
/approval-mode yolo --project
/approval-mode yolo --user
```

### 配置文件方式（settings.json）

```json
{
  "permissions": {
    "defaultMode": "yolo",
    "confirmShellCommands": false,
    "confirmFileEdits": false
  }
}
```

文档参考：Approval Mode
- https://qwenlm.github.io/qwen-code-docs/en/users/features/approval-mode/

## IDE 集成（可作为演讲延伸）

官方文档提供：

- VS Code：https://qwenlm.github.io/qwen-code-docs/en/users/integration-vscode/
- Zed：https://qwenlm.github.io/qwen-code-docs/en/users/integration-zed/
- JetBrains：https://qwenlm.github.io/qwen-code-docs/en/users/integration-jetbrains/

## 演示建议（1 个可复用 Demo 流程）

1. `qwen` 在项目根目录启动
2. 问：*“Explain the codebase structure.”*（让它先“读懂”）
3. 给一个小需求：例如“新增参数校验 + 错误信息 + 单测”
4. 要求它：先列修改点 → 再逐步改 → 最后说明如何验证（测试/构建）

---

如果你希望我把这页进一步“演讲化”（比如加一页：它和 Cursor/Trae 在 vibe coding 流程里怎么分工、什么时候用 headless、什么时候用 IDE），我可以按你的演讲结构再精简一版。关键是你打算主推：**终端 agent**还是 **IDE 助手**。