---
title: 扩展评估模板
type: prompt
slug: prompt-extension-evaluation
updated: 2026-05-10
tags: [codex, prompt, extensions, template]
---

# 来源链接
- [Official Codex Research](../research/official-codex.md)
- [MCP and Skills Notes](../research/mcp-skills-notes.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)

# 适用场景
- 决定要不要安装插件、连接器或其他扩展。
- 需要评估权限、风险、收益和回退。

# 核心观点
- 扩展先评估，再安装。
- 验证和回退是必须项。

# 可复用知识
- 扩展、MCP、Skills 的边界要先判断。
- 安装后最小验证不能省。

# 可复制模板
```text
扩展名称：{{extension}}
解决的问题：{{problem}}
影响范围：{{scope}}
权限/风险：{{risk}}
验证：{{smoke_test}}
回退：{{rollback}}
结论：是否安装，以及为什么。
下一步：如果要安装，先给出最小验证计划。
```

# 最佳实践
- 先判断是否真有必要。
- 把权限和回退写清楚。
- 安装后立即验证。

# 常见坑
- 没评估风险就安装。
- 没有回退方案。
- 把插件和工具层混淆。

# 测试与验证方法
- 确认扩展在目标场景可用。
- 确认禁用后能恢复。
- 确认权限符合预期。

# 下一步学习建议
- 看 extensions lesson。
- 再看 extension case。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
