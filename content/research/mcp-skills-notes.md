---
title: MCP and Skills Notes
type: research
slug: mcp-skills-notes
updated: 2026-05-10
tags: [codex, mcp, skills, agents, config]
---

# 来源链接
- [Model Context Protocol - Codex | OpenAI Developers](https://developers.openai.com/codex/mcp)
- [Skills - Codex | OpenAI Developers](https://developers.openai.com/codex/skills)
- [GitHub - openai/skills](https://github.com/openai/skills)
- [Awesome Codex CLI discussion](https://github.com/openai/codex/discussions/16329)
- [Codex Skills - Am I missing something here?](https://github.com/openai/codex/discussions/8877)
- [Setting up MCP in Codex is easy... - Reddit](https://www.reddit.com/r/vibecoding/comments/1n45pzt/setting_up_mcp_in_codex_is_easy_dont_let_the_toml/)

# 核心观点
- Skills 更像“可复用任务包”，适合把固定流程、命令、约束和资源打包成可重复执行的工作单元。
- MCP 更像“工具接入层”，适合把外部系统、数据源和动作能力接进 Codex。
- 社区把 Skills / MCP / AGENTS.md 视为三层分工：skills 管任务，MCP 管工具，AGENTS.md 管仓库规则。
- 官方与社区都强调可移植、可复用、可共享，但首次安装和维护仍有手工成本。

# 可复用知识
- 当一个流程重复三次以上，就适合考虑做成 skill。
- 当一个任务需要访问外部系统时，优先考虑 MCP，而不是把整段脚本塞进 prompt。
- 当一个仓库有固定规范时，把规则写进 AGENTS.md，比每次 prompt 重复更稳。

# 最佳实践
- skill 内容要短、明确、能验证，避免把它写成大段说明书。
- MCP server 配置要和仓库规则分层，避免 prompt 中混入太多基础设施细节。
- 教程里要区分“安装 skill”“使用 skill”“创建 skill”三件事。

# 常见坑
- 把 skill 当作一次性 prompt 模板，导致复用性差。
- 把 MCP 配置和仓库规则放在一起，后期难维护。
- 忘记重启 Codex 或刷新配置，导致新技能不可见。

# 适合加入网站的位置
- “扩展 Codex 能力”章节。
- “技能与工具接入”专题页。
- “进阶工作流”中的工具编排部分。

# 双向链接
- 见 [Codex Overview](../wiki/codex-overview.md)
- 见 [Codex Workflows](../wiki/codex-workflows.md)
- 见 [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# Prompt 示例
```text
把这个重复流程整理成一个 skill 设计草案：目标、输入、输出、验证命令、失败条件、适用范围。
```
