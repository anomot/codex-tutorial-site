---
title: Official Codex Research
type: research
slug: official-codex
updated: 2026-05-10
tags: [codex, official, cli, cloud, ide, skills, mcp]
---

# 来源链接
- [Codex - OpenAI Developers](https://developers.openai.com/codex)
- [Web - Codex | OpenAI Developers](https://developers.openai.com/codex/cloud)
- [GitHub - openai/codex](https://github.com/openai/codex)
- [Introducing Codex - OpenAI](https://openai.com/index/introducing-codex/)
- [GitHub - openai/skills](https://github.com/openai/skills)
- [Code generation | OpenAI API](https://developers.openai.com/api/docs/guides/code-generation)

# 核心观点
- Codex 的最新定位是“one agent for everywhere you code”，覆盖 App、IDE extension、CLI、Web/Cloud 和 GitHub 等入口。
- 官方把 Codex 定义为能写代码、解释遗留代码、做 review、修 bug、跑测试、迁移和重构的工程型 agent，而不只是代码补全工具。
- CLI 是本地终端里的 coding agent；Cloud 强调后台并行执行；IDE extension 强调上下文自动注入；GitHub 集成强调 repo-native 工作流。
- Skills 是可复用任务包；MCP 与 connectors 位于工具扩展层，帮助 Codex 访问外部能力。
- 官方教程的重点不是“如何提问”，而是“如何把任务、上下文、验证和提交流程固定下来”。

# 可复用知识
- 新手教程应先讲“选哪个入口”，再讲“怎么提需求”。
- Codex 的最佳教学顺序是：安装/登录 → 选 repo → 给上下文 → 发任务 → 看 diff/日志 → 跑验证 → 提交 PR。
- Skills 适合做固定流程；MCP 适合做外部工具接入；AGENTS.md 适合做 repo 级规则。

# 最佳实践
- 把任务写成“目标 + 约束 + 验证”三段式。
- 优先让 Codex 处理可验证、可回滚的变更，例如重构、测试补齐、文档迁移和 bug 修复。
- 在教程中显式区分 CLI / IDE / Cloud 的上下文差异。

# 常见坑
- 把 Codex 当成只会生成片段的聊天机器人，会错过其工作流价值。
- 混淆 Cloud、CLI 和 IDE 的上下文来源，导致用户照抄后得到不同结果。
- 把 Skills、MCP、AGENTS.md 混为一谈，忽略它们各自的边界。

# 适合加入网站的位置
- 首页后的“什么是 Codex”总览页。
- “选择入口：CLI / IDE / Cloud / Web”章节。
- “安装与首次运行”章节前的背景说明。

# 双向链接
- 见 [Codex Overview](../wiki/codex-overview.md)
- 见 [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)
- 见 [Codex MCP & Skills](../wiki/codex-mcp-skills.md)
- 见 [Codex Workflows](../wiki/codex-workflows.md)

# Prompt 示例
```text
你是 Codex。先说明你会在哪个入口工作（CLI/IDE/Cloud），再列出你需要的上下文文件，最后给出你会如何验证结果。
```
