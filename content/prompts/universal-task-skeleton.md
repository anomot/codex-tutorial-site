---
title: 通用任务骨架
type: prompt
slug: prompt-universal-task-skeleton
updated: 2026-05-10
tags: [codex, prompt, template, universal]
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 适用场景
- 任何需要先定义目标、上下文和验证的任务。
- 适合作为所有模板的底座。

# 核心观点
- 任务骨架决定输出稳定性。
- 验证和完成标准必须写进模板。

# 可复用知识
- 目标、上下文、约束、验证、done-when 是核心字段。
- 下一步建议也应该预留。

# 可复制模板
```text
目标：{{goal}}
上下文：{{context}}
约束：{{constraints}}
验证：{{verification}}
完成标准：{{done_when}}
下一步：{{next_step}}
```

# 最佳实践
- 字段顺序保持固定。
- 每个字段尽量一句话说明。
- 把验证写成具体动作。

# 常见坑
- 只写目标，不写验证。
- 上下文不够具体。
- 没有下一步建议。

# 测试与验证方法
- 用一个小任务测试模板是否足够完整。
- 检查输出是否包含验证计划。
- 确认模板可以复制到不同任务中。

# 下一步学习建议
- 用 bugfix / refactor / review 模板继续练。
- 再看 workflows lesson。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)
