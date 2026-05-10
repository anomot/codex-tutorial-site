---
title: MCP 集成模板
type: prompt
slug: prompt-mcp-integration
updated: 2026-05-10
tags: [codex, prompt, mcp, template]
---

# 来源链接
- [MCP and Skills Notes](../research/mcp-skills-notes.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)

# 适用场景
- 把外部系统接入 Codex 工作流。
- 需要工具认证、权限和验证步骤。

# 核心观点
- 先判断是否真的该用 MCP。
- 接入后必须做最小读写验证。

# 可复用知识
- 工具列表、认证、权限、回退要一起写。
- 外部系统应该通过最小操作来验证。

# 可复制模板
```text
外部系统：{{system}}
目标：{{integration_goal}}
为什么用 MCP：{{reason}}
认证/权限：{{auth}}
最小验证：{{smoke_test}}
风险与回退：{{rollback}}
完成标准：{{done_when}}
下一步：先做单一 server 的最小验证，再扩展。
```

# 最佳实践
- 一开始只接一个工具。
- 把认证和回退写清楚。
- 验证成功后再扩范围。

# 常见坑
- 把所有工具一次性接入。
- 没有权限边界。
- 没有回退方案。

# 测试与验证方法
- 确认工具可见且可用。
- 执行一次读取和一次写入。
- 检查失败时的错误消息。

# 下一步学习建议
- 看 MCP case。
- 再看 Skills lesson。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Workflows](../wiki/codex-workflows.md)
