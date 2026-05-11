---
title: Codex 项目上下文工程
type: wiki
slug: codex-context-engineering
updated: 2026-05-11
tags: [codex, context-engineering, docs, agents, workflow]
---

# 来源链接
- [Codex Overview](./codex-overview.md)
- [Codex Slash Commands](./codex-slash-commands.md)
- [Official Codex Research](../research/official-codex.md)

# 核心观点
- 上下文工程的目标，是让 Codex 不靠“猜”也能快速理解项目。
- 长期有效的上下文，应该以文件和目录结构来表达，而不是靠聊天记忆。
- 最好的上下文文件，是能被人和 Codex 同时复用的文件。

# 可复用知识
- README 管入口，AGENTS.md 管规则，TASK.md 管任务，SPEC.md 管需求，ARCHITECTURE.md 管结构。
- MOC 可以把分散文档串成稳定导航。
- 上下文越稳定，越少出现重复解释。

# 最佳实践
- 每个项目至少保留一个总入口文档。
- 用固定模板写任务、规格和架构说明。
- 把验证步骤放进上下文文件，避免每次重说。

# 常见坑
- 上下文文档太长。
- 命名不固定。
- 文档没有形成互链。

# 适合加入网站的位置
- 知识管理专题页。
- 团队开发规范页。

# 双向链接
- 见 [Codex 项目上下文工程](../lessons/15-context-engineering.md)
- 见 [Codex Slash Commands](./codex-slash-commands.md)
- 见 [Codex Common Pitfalls](./codex-common-pitfalls.md)

# Prompt 示例
```text
请帮我审视这个项目的上下文体系：README、AGENTS.md、TASK.md、SPEC.md、ARCHITECTURE.md 是否足够让 Codex 快速接手？
如果不够，请指出应该补什么。
```
