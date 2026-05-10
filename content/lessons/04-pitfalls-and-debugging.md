---
title: Codex 常见坑与排错
type: lesson
slug: lesson-04-pitfalls-and-debugging
updated: 2026-05-10
tags: [codex, lesson, debugging, pitfalls]
---

# 来源链接
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 核心观点
- 多数失败都来自上下文、验证、权限和边界不清楚。
- 排错应该先看任务定义，再看工具和环境。
- 能复现的问题，比“感觉不对”更容易修。

# 适用场景
- Codex 输出偏航或看起来不稳定。
- 配置、权限、平台、版本差异导致行为变化。
- 想把 FAQ 变成教程内容。

# 可复用知识
- 先缩小问题，再放大上下文。
- 验证缺失时，先补验证，不要先改实现。
- 平台问题和能力问题要分开判断。

# 步骤
1. 重述任务、输入和成功标准。
2. 找出最小复现路径。
3. 区分配置问题、权限问题和内容问题。
4. 修复后重新验证最小路径。

# 最佳实践
- 每次失败都记录一次可复现案例。
- 优先修正任务定义和验证流程。
- 把排错结果写回知识库。

# 常见坑
- 没有最小复现就直接大改。
- 把所有错误都归咎于模型。
- 忽略平台或版本差异。

# 测试与验证方法
- 用最小输入复现问题。
- 确认修复后回归测试稳定通过。
- 检查是否把排错经验写成新的 prompt 或规则。

# 下一步学习建议
- 接着看 [Codex MCP and Skills](../wiki/codex-mcp-skills.md)。
- 再看 [Codex Overview](../wiki/codex-overview.md)。
- 然后把一个真实失败案例写进案例页。

# 双向链接
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Overview](../wiki/codex-overview.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 可复制 Prompt
```text
先帮我判断失败原因属于哪一类：上下文不足、验证缺失、权限受限、平台差异，还是工具配置问题。
先给最小复现，再给修复建议。
```
