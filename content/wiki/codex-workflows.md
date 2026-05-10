---
title: Codex Workflows
type: wiki
slug: codex-workflows
updated: 2026-05-10
tags: [codex, workflows, review, refactor, testing, planning]
---

# 来源链接
- [官方研究](../research/official-codex.md)
- [Prompt 模式研究](../research/prompt-patterns.md)
- [社区主题研究](../research/community-codex-themes.md)
- [OpenAI Codex Workflows](https://developers.openai.com/codex/workflows)

# 核心观点
- Codex 最适合的工作流是“计划 → 执行 → 验证 → 复盘”。
- 复杂任务应拆成小步，每一步都有明确完成标准。
- review、refactor、test、migration 是最适合用 Codex 讲清楚的四类教程案例。

# 可复用知识
- 给每一步写输入、输出、风险和验证方式。
- 把 plan-then-execute 作为默认模板。

# 最佳实践
- 任务开始前先写 done-when。
- 任务结束时强制要求 diff、日志和测试结果。

# 常见坑
- 一口气要求“做完一个大功能”，会导致过程不可控。
- 只看生成结果，不看验证结果。

# 适合加入网站的位置
- “高级工作流”章节。
- “如何让 Codex 更可靠”专题页。

# 双向链接
- 见 [Codex Prompt Patterns](./codex-prompt-patterns.md)
- 见 [Codex Slash Commands](./codex-slash-commands.md)
- 见 [Codex Common Pitfalls](./codex-common-pitfalls.md)
- 见 [Community Codex Themes](../research/community-codex-themes.md)

# Prompt 示例
```text
请先给出 3 步计划，再执行。每一步都要说明输入文件、预期输出和验证命令。
```
