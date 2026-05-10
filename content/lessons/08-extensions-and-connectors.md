---
title: 扩展与连接器总览
type: lesson
slug: lesson-08-extensions-and-connectors
updated: 2026-05-10
tags: [codex, lesson, extensions, connectors]
---

# 来源链接
- [Official Codex Research](../research/official-codex.md)
- [MCP and Skills Notes](../research/mcp-skills-notes.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)

# 核心观点
- “插件”最好按扩展总览来讲，避免和 MCP、Skills 混淆。
- 扩展的重点是能力边界、权限和维护成本。
- 先确认用途，再决定是装扩展、接连接器还是写 skill。

# 适用场景
- 需要说明插件/连接器的整体位置。
- 需要给读者一个选择扩展方式的判断框架。
- 需要处理安装、启用和回退问题。

# 可复用知识
- 扩展不是越多越好，越清晰越好。
- 安装、验证、禁用、回退要作为一个闭环。
- 扩展总览页要和 MCP / Skills 页面互相链接。

# 步骤
1. 判断扩展是否真的必要。
2. 确认它属于插件、连接器、MCP 还是 skill。
3. 安装或启用后先做最小验证。
4. 出现问题时保留回退路径。

# 最佳实践
- 把“扩展”写成分类而不是堆清单。
- 每个扩展都写清安装前提和验证方法。
- 在教程里强调权限和影响范围。

# 常见坑
- 把扩展和工具层混写。
- 装完就默认可用，没有验证。
- 没准备回退路径。

# 测试与验证方法
- 确认扩展是否在目标场景里真正可用。
- 尝试禁用或回退并检查系统行为。
- 检查扩展是否引入额外的权限或安全风险。

# 下一步学习建议
- 回到 [Codex MCP and Skills](../wiki/codex-mcp-skills.md)。
- 然后去做一个扩展安装案例。
- 再回到前端或浏览器工作流页。

# 双向链接
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Overview](../wiki/codex-overview.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
评估这个扩展值不值得装：
说明它解决什么问题、需要什么权限、如何验证、如何回退，以及它和 MCP / Skills 的关系。
```
