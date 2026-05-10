---
title: Codex MCP and Skills
type: wiki
slug: codex-mcp-skills
updated: 2026-05-10
tags: [codex, mcp, skills, tools, extension]
---

# 来源链接
- [官方研究](../research/mcp-skills-notes.md)
- [Official Codex Research](../research/official-codex.md)
- [OpenAI Skills repo](https://github.com/openai/skills)

# 核心观点
- Skills、MCP、AGENTS.md 是三层不同的扩展机制。
- Skills 适合封装重复任务；MCP 适合接外部工具；AGENTS.md 适合写仓库规则。
- 对新手来说，先理解分工，比直接安装一堆扩展更重要。

# 可复用知识
- 重复流程做 skill。
- 外部系统接入做 MCP。
- 仓库约束写进 AGENTS.md。

# 最佳实践
- 先做一个小 skill，再扩展到更多流程。
- 教程里展示“安装、使用、创建”三步。
- 给每个工具层留一段简短的适用边界说明。

# 常见坑
- 把 skill 写成大而全的文档。
- 把 MCP 和 repo 规范混在一起。
- 忘记刷新配置，误以为功能失效。

# 适合加入网站的位置
- “扩展 Codex 能力”专题页。
- “进阶工具”章节。

# 双向链接
- 见 [MCP and Skills Notes](../research/mcp-skills-notes.md)
- 见 [Codex Overview](./codex-overview.md)
- 见 [Codex Common Pitfalls](./codex-common-pitfalls.md)

# Prompt 示例
```text
把这个重复工作流程拆成 skill 和 MCP 两部分：哪些是任务逻辑，哪些是外部工具接入。
```
