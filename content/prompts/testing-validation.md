---
title: 测试与验证模板
type: prompt
slug: testing-validation
updated: 2026-05-11
tags: [codex, prompt, testing, validation, template]
---

# 来源链接
- [Codex Testing and Validation](../wiki/codex-testing-validation.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 适用场景
- 需要让 Codex 先补测试再改代码。
- 需要明确自动化和人工验证边界。

# 核心观点
- 验证提示词的目标，是把“通过”定义清楚。

# 可复用知识
- 完成标准、回归面、验证命令三项必须写明。
- 失败时要有明确回退策略。

# 可复制模板
```text
请先为这次变更列出验证计划：
1. 自动化测试；
2. 类型检查；
3. lint；
4. 手工验证；
5. 回归检查；
6. 失败时的处理方案。

完成标准：{{done_when}}
```

# 最佳实践
- 让 Codex 先写测试，再做实现。
- 验证流程固定下来后，重复使用。

# 常见坑
- 只看 build 结果。
- 没有回归验证。

# 测试与验证方法
- 检查 Codex 是否给出可执行命令。
- 检查是否列出人工检查点。

# 下一步学习建议
- 接着看 [Codex Testing and Validation](../wiki/codex-testing-validation.md)。

# 双向链接
- [Codex Testing and Validation](../wiki/codex-testing-validation.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
