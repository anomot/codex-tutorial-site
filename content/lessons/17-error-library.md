---
title: 错误库整理与复盘
type: lesson
slug: lesson-17-error-library
updated: 2026-05-11
tags: [codex, lesson, errors, logs, knowledge-management]
---

# 来源链接
- [Codex Knowledge Management](../wiki/codex-knowledge-management.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
- [Codex Testing and Validation](../wiki/codex-testing-validation.md)

# 核心观点
- 错误库是知识管理的副产物，也是 AI Coding 稳定性的关键资产。
- 每次失败都应该留下可复用的错误记录，而不是只停留在当前会话。
- 错误库的价值在于帮助后续任务少踩同样的坑。

# 适用场景
- 项目里出现重复错误。
- 团队开始积累 Codex 的使用经验。
- 需要把失败案例转成长期可复用知识。

# 可复用知识
- 错误类型、触发条件、修复方式、验证方式应该一起记录。
- 错误库和 Prompt 库可以互相链接。
- 失败不是垃圾，而是下一次成功的素材。

# 步骤
1. 记录错误现象。
2. 归类错误原因。
3. 记录修复方式。
4. 写出验证方法。
5. 链接相关 Prompt 和案例。
6. 定期清理重复错误。

# 最佳实践
- 错误记录要短而明确。
- 给每个错误加标签和上下文。
- 把错误库和日志分层管理。

# 常见坑
- 只记错误现象，不记修复方法。
- 不记录上下文，后面看不懂。
- 错误库过度膨胀。

# 测试与验证方法
- 抽一条旧错误，看是否能快速找到修复路径。
- 检查错误记录是否能给 Codex 直接复用。

# 下一步学习建议
- 继续看 [Codex + 知识管理](../wiki/codex-knowledge-management.md)。
- 再看 [Codex Context Engineering](../wiki/codex-context-engineering.md)。

# 双向链接
- [Codex Knowledge Management](../wiki/codex-knowledge-management.md)
- [Codex Testing and Validation](../wiki/codex-testing-validation.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
请把这次失败整理成一条错误库记录：
- 错误现象
- 根因
- 修复方式
- 验证方法
- 以后如何避免
```
