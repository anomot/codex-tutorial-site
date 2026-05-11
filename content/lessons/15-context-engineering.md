---
title: Codex 项目上下文工程
type: lesson
slug: lesson-15-context-engineering
updated: 2026-05-11
tags: [codex, lesson, context-engineering, docs, agents]
---

# 来源链接
- [Codex Overview](../wiki/codex-overview.md)
- [Codex Slash Commands](../wiki/codex-slash-commands.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 核心观点
- Codex 的稳定性首先来自上下文组织，而不是更长的 prompt。
- 项目上下文工程的目标，是让 Codex 每次都能快速接上项目状态。
- README、AGENTS.md、TASK.md、SPEC.md、ARCHITECTURE.md 和日志文件应该形成一个稳定上下文面。

# 适用场景
- 团队要长期使用 Codex 做开发。
- 一个仓库需要减少重复解释。
- 需要把项目规范、架构和任务边界固定下来。

# 可复用知识
- 上下文文件比临时说明更可靠。
- 固定目录、固定模板、固定命名能显著降低模型偏航。
- 每次任务都应该能从已有文档中恢复上下文。

# 步骤
1. 先写 README，说明项目目标、启动方式、目录结构和常见命令。
2. 再写 AGENTS.md，记录仓库级规则、验证命令和禁区。
3. 需要更细任务时补 TASK.md / SPEC.md / ARCHITECTURE.md。
4. 为每次 Codex 任务保留日志和复盘条目。
5. 定期合并重复内容，保留稳定的项目上下文主干。

# 最佳实践
- 文档要短、准、可跳转。
- 把“如何验证”写进上下文文件，而不是只写在聊天里。
- 对长项目用 MOC（Map of Content）组织入口。

# 常见坑
- 把上下文全塞进 prompt。
- 文档名字不固定，每次都不一样。
- 任务完成后没有沉淀回上下文文件。

# 测试与验证方法
- 让 Codex 只读上下文文件，检查是否能正确复述项目目标。
- 检查它是否能自动找到验证命令和相关文件。
- 检查重复任务是否不再需要重新解释。

# 下一步学习建议
- 继续看 [Codex 测试与验证](./lesson-16-testing-validation.md)。
- 再看 [Codex + 知识管理](../wiki/codex-knowledge-management.md)。
- 最后回到 [Codex Slash Commands](../wiki/codex-slash-commands.md) 练习计划与恢复命令。

# 双向链接
- [Codex Slash Commands](../wiki/codex-slash-commands.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
- [Codex Context Engineering](../wiki/codex-context-engineering.md)

# 可复制 Prompt
```text
请先阅读这个项目的上下文文件（README、AGENTS.md、TASK.md、SPEC.md、ARCHITECTURE.md），然后告诉我：
1. 这个项目在做什么；
2. 你会优先看哪些文件；
3. 你会如何验证你的理解。
```
