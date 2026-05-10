---
title: MCP 工具接入与联调
type: case
slug: case-mcp-tool-integration
updated: 2026-05-10
tags: [codex, case, mcp, integration]
---

# 来源链接
- [MCP and Skills Notes](../research/mcp-skills-notes.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)

# 场景
- 要把一个外部系统接入 Codex 工作流。
- 例如日历、任务、知识库或工单系统。

# 前置条件
- 知道工具的权限和认证要求。
- 有可用的 MCP server 配置。
- 能做一次最小的读取或写入验证。

# 真实操作流程
1. 先确认这个集成应属于 MCP 而不是 skill。
2. 配置 server 并让 Codex 识别到工具。
3. 用最小操作验证读写是否正常。
4. 记录认证、权限和回退方案。

# 核心观点
- MCP 是外部能力接入层，不是任务逻辑本身。
- 联调成功的标准是工具可见且可用。

# 可复用知识
- 先做单一 server 的最小验证。
- 把认证和回退写成固定步骤。

# 最佳实践
- 配置、验证、回退分开写。
- 每次只接一个新能力。
- 联调后保留样例命令。

# 常见坑
- 把 MCP 当成一次性配置。
- 权限没设好就开始复杂任务。
- 工具接入后没有回退方案。

# 测试与验证方法
- 确认工具列表里能看到 server。
- 执行一次读取和一次写入。
- 验证异常时会给出清晰错误。

# 下一步学习建议
- 看 MCP lesson。
- 再看 skill case。
- 然后做 MCP prompt 模板。

# 双向链接
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
请帮我把 {{external_system}} 接入 Codex 工作流。
先判断应不应该用 MCP，接着做最小验证，最后给出权限、风险和回退方案。
```
