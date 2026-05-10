---
title: 前端组件重构与回归控制
type: case
slug: case-frontend-component-refactor
updated: 2026-05-10
tags: [codex, case, frontend, refactor]
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)

# 场景
- 一个大组件过于臃肿，需要拆分和重构。
- 要求保持对外 API、交互和视觉行为不变。

# 前置条件
- 已有测试或可以补 characterization tests。
- 知道公共 props、事件和路由行为。
- 有预览或截图验证手段。

# 真实操作流程
1. 先补 characterization tests，冻结现状。
2. 再拆分组件或抽出 hook / util。
3. 每一步都跑测试和构建。
4. 最后用浏览器或 Storybook 检查视觉一致性。

# 核心观点
- 重构不是重新设计接口。
- 先锁行为，再改结构。

# 可复用知识
- tests-first 是重构稳定性的核心。
- 拆分后要重新审视边界和职责。

# 最佳实践
- 保持 public API 不变。
- 每一步都小而可回滚。
- 把大重构拆成多个 checkpoint。

# 常见坑
- 边改边重设需求。
- 只顾结构，忘了回归测试。
- 拆完之后行为微妙变化。

# 测试与验证方法
- characterization tests 先通过。
- 重构后回放旧测试与关键交互。
- 检查视觉和 props 行为一致。

# 下一步学习建议
- 看 workflows lesson。
- 再看 bugfix case。
- 然后回到 prompt patterns。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
先给我一个重构计划：
1) 先补哪些 characterization tests
2) 计划怎么拆组件/抽 hook
3) 每一步如何验证不破坏现有行为。
```
