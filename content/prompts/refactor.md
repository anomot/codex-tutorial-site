---
title: Refactor 模板
type: prompt
slug: prompt-refactor
updated: 2026-05-10
tags: [codex, prompt, refactor, template]
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 适用场景
- 拆组件、抽函数、整理目录、优化结构。
- 需要保持行为不变。

# 核心观点
- 重构前先冻结行为。
- 保持 API 和测试稳定最重要。

# 可复用知识
- characterization tests 是重构底线。
- 公共接口和行为要明确写出。

# 可复制模板
```text
目标：重构这段代码。
现状：{{current_state}}
不可改变的行为：{{invariants}}
可修改范围：{{scope}}
先决条件：{{characterization_tests}}
验证：{{tests}}
完成标准：{{done_when}}
下一步：每完成一步都先验证再继续。
```

# 最佳实践
- 先补测试，再改结构。
- 每步都保留可回退状态。
- 保持 diff 可读。

# 常见坑
- 重构时顺手改需求。
- 忘了回归测试。
- 拆分过细导致难维护。

# 测试与验证方法
- characterization tests 保持通过。
- 关键交互和 API 行为不变。
- 检查构建和静态检查结果。

# 下一步学习建议
- 看 frontend refactor case。
- 再看 workflows lesson。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
