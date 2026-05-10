---
title: MCP、Skills 与 AGENTS.md
type: lesson
slug: lesson-05-mcp-skills-agents
updated: 2026-05-10
tags: [codex, lesson, mcp, skills, agents]
---

# 来源链接
- [MCP and Skills Notes](../research/mcp-skills-notes.md)
- [Official Codex Research](../research/official-codex.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)

# 核心观点
- Skills、MCP、AGENTS.md 是三层不同的扩展机制。
- Skills 负责重复任务，MCP 负责外部工具，AGENTS.md 负责仓库规则。
- 先分层，再堆功能，教程会更清楚。

# 适用场景
- 要让一套流程长期复用。
- 要接一个外部系统或数据源。
- 要给仓库写稳定的代理规则。

# 可复用知识
- 重复三次以上的流程值得做成 skill。
- 需要访问外部系统时优先考虑 MCP。
- 仓库规范最好写进 AGENTS.md。

# 步骤
1. 先判断问题属于任务逻辑、工具接入，还是仓库规则。
2. 如果是重复流程，先做一个小 skill。
3. 如果是外部能力，配置 MCP server。
4. 如果是 repo 约束，写 AGENTS.md 并验证生效。

# 最佳实践
- 每层职责只放自己该放的内容。
- skill 要短、清楚、可验证。
- MCP 配置和 repo 规则分开管理。

# 常见坑
- 把 skill 写成说明书。
- 把 MCP 和仓库规则混在一起。
- 忘记重新加载或重启导致新配置没生效。

# 测试与验证方法
- 检查一个 skill 是否能在最小任务里复用。
- 检查一个 MCP server 是否能被列出并执行。
- 检查 AGENTS.md 是否只影响应影响的目录。

# 下一步学习建议
- 接着看 [Codex MCP and Skills](../wiki/codex-mcp-skills.md)。
- 然后做一个 skill 的真实案例。
- 最后回到浏览器或前端场景。

# 双向链接
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
把这个重复流程拆成三层：任务逻辑、外部工具接入、仓库规则。
分别告诉我应该放在 Skill、MCP 还是 AGENTS.md。
```
