---
title: Review 模板
type: prompt
slug: prompt-review
updated: 2026-05-10
tags: [codex, prompt, review, template]
---

# 来源链接
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)

# 适用场景
- 审查 diff、PR 或 patch。
- 需要优先看正确性、边界和安全。

# 核心观点
- review prompt 要明确排除风格噪音。
- 要求输出问题级别和最小修复建议。

# 可复用知识
- 只看 diff 时要要求上下文。
- 用 severity 标签更容易排序。

# 可复制模板
```text
目标：审查这份 diff。
关注点：正确性、边界条件、回归风险、安全问题。
排除项：风格、命名、无关重构。
输出格式：按严重程度列出问题、原因和最小修复建议。
验证：{{how_to_verify}}
完成标准：{{done_when}}
下一步：如果没有问题，也请说明未覆盖的风险面。
```

# 最佳实践
- 要求先看 correctness 再看 style。
- 让输出按严重程度排序。
- 给出最小修复，而不是重写。

# 常见坑
- 把 review 写成聊天。
- 没有限定关注范围。
- 没有要求验证。

# 测试与验证方法
- 确认输出里有具体文件/行级问题。
- 检查是否给出可执行的验证建议。
- 确认没有被风格项淹没。

# 下一步学习建议
- 看 frontend refactor case。
- 再做一个真实 PR review。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
