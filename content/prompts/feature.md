---
title: Feature 模板
type: prompt
slug: prompt-feature
updated: 2026-05-10
tags: [codex, prompt, feature, template]
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 适用场景
- 增加一个新功能。
- 需要把 acceptance criteria 写清楚。

# 核心观点
- feature prompt 要先定义用户价值。
- 边界、异常和验证都要写。

# 可复用知识
- 用户故事比空泛目标更清楚。
- 边界条件必须明确。

# 可复制模板
```text
目标：实现这个功能。
用户故事：{{user_story}}
约束：{{constraints}}
边界情况：{{edge_cases}}
验证：{{tests}}
完成标准：{{done_when}}
下一步：如果需求不完整，先列出缺口再实现。
```

# 最佳实践
- 把验收标准写成可测试句子。
- 对边界条件做显式枚举。
- 要求输出实现计划和验证方式。

# 常见坑
- 需求没写清就直接开干。
- 忽略异常和边界。
- 没有确认完成标准。

# 测试与验证方法
- 用验收标准逐条对照。
- 跑测试并检查输出。
- 确认没有误伤现有行为。

# 下一步学习建议
- 看 first-success case。
- 再看 frontend 或 mobile 相关 case。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Overview](../wiki/codex-overview.md)
