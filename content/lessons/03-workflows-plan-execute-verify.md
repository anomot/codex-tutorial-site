---
title: Codex 工作流：计划-执行-验证
type: lesson
slug: lesson-03-workflows-plan-execute-verify
updated: 2026-05-10
tags: [codex, lesson, workflow, verification]
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Official Codex Research](../research/official-codex.md)

# 核心观点
- 稳定工作流比一次性的聪明输出更重要。
- 长任务应该分成 plan、execute、verify 三个阶段。
- 每一步都要有 checkpoint，失败就停。

# 适用场景
- 重构、迁移、review、测试补齐。
- 任何超过一次 prompt 就能完成的任务。
- 需要把 Codex 变成可靠助手的时候。

# 可复用知识
- 先计划，再执行，是降低上下文漂移的主方法。
- 验证不是收尾动作，而是每一步的一部分。
- 复杂任务越要写清楚退出条件。

# 步骤
1. 先发 plan-only 指令，要求列出步骤和风险。
2. 按步骤执行，每步后立即验证。
3. 遇到失败就停，更新计划后再继续。
4. 最后复查 diff、测试和回归面。

# 最佳实践
- 计划页只写步骤，不写代码。
- 每步都要有可见产物：diff、测试、日志或截图。
- 把 checkpoint 写成可回看记录。

# 常见坑
- 计划太宏大，执行时不断偏航。
- 执行前没有验证标准。
- 中途失败后继续硬推，没有回看计划。

# 测试与验证方法
- 检查计划里是否写了每一步的验证命令。
- 确认执行阶段会在失败点停止。
- 回看 checkpoint 能否解释每次决策。

# 下一步学习建议
- 继续看 [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)。
- 再看一个真实案例页。
- 回到 [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md) 补齐模板。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
请先给出 3 步计划，再执行。
每一步都要说明输入文件、预期输出、验证命令和失败时的停点。
```
