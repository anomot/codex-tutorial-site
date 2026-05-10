---
title: 扩展安装、验证与回退
type: case
slug: case-extension-setup-recovery
updated: 2026-05-10
tags: [codex, case, extensions, recovery]
---

# 来源链接
- [Official Codex Research](../research/official-codex.md)
- [MCP and Skills Notes](../research/mcp-skills-notes.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)

# 场景
- 要安装一个扩展或连接器并验证是否可用。
- 如果出问题，还要能快速回退。

# 前置条件
- 知道扩展的安装方式和权限要求。
- 知道怎么禁用或卸载。
- 有一个最小验证场景。

# 真实操作流程
1. 先判断它属于扩展、连接器、MCP 还是 skill。
2. 安装或启用后立刻做最小验证。
3. 如果异常，先禁用再定位原因。
4. 记录回退步骤和安全边界。

# 核心观点
- 扩展的价值必须和维护成本一起看。
- 验证和回退与安装一样重要。

# 可复用知识
- 每个扩展都应该有验证和回退文档。
- 扩展总览要避免和工具层混写。

# 最佳实践
- 先单个验证，再扩展组合。
- 给权限和影响范围写清楚。
- 保留禁用/回退命令。

# 常见坑
- 装完没有验证。
- 没有回退路径。
- 把扩展和 MCP、Skills 混成一团。

# 测试与验证方法
- 确认扩展在目标场景中真的可用。
- 尝试禁用并观察行为是否恢复。
- 检查权限是否符合预期。

# 下一步学习建议
- 看 extensions lesson。
- 再看 MCP/Skills lesson。
- 最后补一个 prompt 模板。

# 双向链接
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Overview](../wiki/codex-overview.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
评估并验证这个扩展：
说明它解决什么问题、安装后如何验证、出现问题如何回退，以及它和 MCP / Skills 的关系。
```
