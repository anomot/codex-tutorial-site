---
title: Codex Slash Commands
type: wiki
slug: codex-slash-commands
updated: 2026-05-10
tags: [codex, slash-commands, cli, ide, shortcuts]
---

# 来源链接
- [Slash commands in Codex CLI - OpenAI Developers](https://developers.openai.com/codex/cli/slash-commands)
- [CLI - Codex | OpenAI Developers](https://developers.openai.com/codex/cli)
- [Command line options – Codex CLI - OpenAI Developers](https://developers.openai.com/codex/cli/reference)
- [Features - Codex CLI | OpenAI Developers](https://developers.openai.com/codex/cli/features)
- [Slash commands – Codex IDE - OpenAI Developers](https://developers.openai.com/codex/ide/slash-commands)
- [codex/docs/slash_commands.md](https://github.com/openai/codex/blob/main/docs/slash_commands.md)

# 核心观点
- Slash commands 是 Codex 的“键盘优先控制层”，适合快速切换模式、复盘长对话、调整权限和检查状态。
- CLI 和 IDE 都支持 slash commands，但用途略有不同：CLI 更偏会话控制和工作流，IDE 更偏聊天盒内的运行态控制。
- 实战里，slash commands 最常被用在三类场景：会话管理、任务流切换、复制结果或打开 review。

# 命令总览
## CLI 常见命令
- `/plan`：切到计划模式，先产出步骤再执行。适合实现前、重构前、或你还在理清需求时。
- `/review`：进入 review 流程，适合审查 diff、查找问题、看回归风险。
- `/fork`：把当前对话分叉成新线程。适合你想保留主线，同时试另一种思路。
- `/side`：打开一个临时侧线程。适合短暂插话，不想打断主线。
- `/resume`：恢复之前保存的会话。适合继续昨天或上周的工作。
- `/compact`：压缩当前对话，保留要点、减少上下文占用。适合长会话后整理上下文。
- `/status`：查看会话状态、上下文和配额。适合确认当前线程是否正常。
- `/permissions`（也常见为 `/approvals`）：调整审批/权限策略。适合在自动化与保守模式间切换。
- `/model`：切换模型或推理设置。适合遇到复杂任务或想换更快响应时。
- `/fast`：开启/关闭/查看 Fast 模式状态。适合想在速度和能力之间切换时。
- `/copy`：复制最近一次完成的输出。适合把结果转发、写入文档或复用。
- `/clear`：清空当前界面并开始新聊天。适合需要从头整理时。
- `/new`：开启新会话但保留当前界面。适合并行探索另一个方向。
- `/agent`：在已存在的 agent 线程间切换。适合你正在管理多个子任务。
- `/mcp`：查看已配置的 MCP 工具。适合检查外部工具是否已接入。
- `/plugins`：浏览可发现插件。适合查看可扩展能力。
- `/init`：生成 `AGENTS.md` 脚手架。适合给仓库补持久规则。
- `/goal`：设置或管理长期目标。适合长跑式任务。
- `/debug-config`：检查配置层和策略来源。适合排查设置为什么没生效。
- `/title`：设置终端标题字段。适合提升多任务时的可读性。
- `/statusline`：配置底部状态栏。适合让自己快速看见模型、上下文等信息。
- `/keymap`：重映射键盘快捷键。适合自定义 TUI 操作。
- `/feedback`：打开反馈对话。适合上报问题或发送日志。
- `/logout`：清除本地凭证。适合共享机器或重新登录。
- `/quit`、`/exit`：退出 CLI。适合任务结束后离开会话。

## IDE 常见命令
- `/auto-context`：开关自动注入最近文件和 IDE 上下文。适合想控制上下文喂入范围时。
- `/cloud`：把任务送到远程云端执行。适合本地不想占资源或想让任务后台跑。
- `/cloud-environment`：选择云端环境。适合在云模式下切环境。
- `/feedback`：打开反馈。适合给扩展或运行问题留痕。
- `/local`：把任务拉回本地工作区。适合从云端切回本地。
- `/review`：对未提交改动或分支比较做 review。适合在 IDE 里做审查。
- `/status`：查看线程 ID、上下文使用和速率限制。适合确认当前状态。

# 使用场景
- 计划阶段：用 `/plan` 把模糊需求拆成步骤。
- 审查阶段：用 `/review`、`/status`、`/copy`，把结论拿出来复用。
- 长任务阶段：用 `/compact`、`/goal`、`/resume` 保持主线清晰。
- 多分支探索：用 `/fork` 和 `/side` 保留主线，不互相污染。
- 权限调节：用 `/permissions` / `/approvals` 在自动和保守之间切换。
- 运行态切换：用 `/model`、`/fast`、`/auto-context`、`/cloud` 控制执行策略。

# 可组合使用方式
- `/plan` → `/review`：先计划再审查，适合复杂实现或改大功能。
- `/plan` → `/compact`：长计划后压缩上下文，避免线程过长。
- `/fork` → `/side`：主线保留，侧线试验新思路。
- `/review` → `/copy`：审查完把结论复制到 PR 或文档里。
- `/status` → `/permissions`：先看状态再调整权限，避免盲改策略。
- `/resume` → `/compact`：恢复旧会话后先压缩，再继续执行。
- `/mcp` → `/plugins`：先看外部工具，再看可扩展插件。
- `/cloud` → `/local`：云端跑完再切回本地继续修正。

# 不同场景下用户怎么用
## 新手上手
- 先用 `/status` 看当前会话配置。
- 再用 `/plan` 让 Codex 先拆步骤。
- 遇到结果太长时用 `/copy` 复制给自己或贴进笔记。

## 日常开发
- 用 `/review` 做小范围审查。
- 用 `/compact` 在对话变长时保留上下文。
- 用 `/fork` 保留主线，同时试验另一种实现。

## 长任务 / 复杂任务
- `/goal` 维护长期目标。
- `/plan` 规划阶段性步骤。
- `/status` 确认上下文和限制。
- `/resume` 在后续会话继续推进。

## 云端/本地切换
- 在 IDE 里用 `/cloud` 把重任务丢到云端。
- 用 `/local` 把任务拉回本地检查和修正。
- `/cloud-environment` 用于指定云端运行环境。

## 质量控制
- `/review` 看差异。
- `/copy` 把结果沉淀到 PR、wiki 或 prompt 库。
- `/feedback` 在工具行为异常时反馈问题。

# 常见坑
- 以为 slash command 只是“高级命令”，忽略了它其实是工作流控制器。
- 在当前运行中的任务里误用不可用的命令。
- 把 `/copy` 当成可以复制未完成内容，它只复制最近完成输出。
- 把 `/compact` 当作清空，它只是摘要压缩，不是重开会话。
- 混淆 `/clear` 和 `Ctrl+L`：前者重置会话，后者只是清屏。

# 测试与验证方法
- 在一个真实会话里试一次 `/status`，确认状态展示是否正确。
- 试 `/plan` 或 `/review`，看是否真的切到了对应模式。
- 试 `/copy`，确认复制的是最近完成输出。
- 试 `/compact`，确认对话被压缩但关键信息还在。
- 试 `/fork` / `/side`，确认可以保留主线并分出新线程。

# 下一步学习建议
- 先看 [Codex CLI First Steps](./codex-cli-first-steps.md)。
- 再看 [Codex Workflows](./codex-workflows.md)。
- 然后看 [Codex Prompt Patterns](./codex-prompt-patterns.md)。
- 如果你经常在终端里工作，再看 [Codex Common Pitfalls](./codex-common-pitfalls.md)。

# 双向链接
- [Codex CLI First Steps](./codex-cli-first-steps.md)
- [Codex Workflows](./codex-workflows.md)
- [Codex Prompt Patterns](./codex-prompt-patterns.md)
- [Codex Common Pitfalls](./codex-common-pitfalls.md)
- [Official Codex Research](../research/official-codex.md)

# Prompt 示例
```text
请先用 /plan 帮我拆这个需求，再用 /status 看当前上下文和限制，最后告诉我哪些 slash commands 适合这个场景。
```
