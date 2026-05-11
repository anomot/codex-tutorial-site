---
title: Codex 安全边界
type: wiki
slug: codex-safety-boundaries
updated: 2026-05-11
tags: [codex, safety, security, permissions, sandbox]
---

# 来源链接
- [Codex - OpenAI Developers](https://developers.openai.com/codex)
- [Slash commands in Codex CLI - OpenAI Developers](https://developers.openai.com/codex/cli/slash-commands)
- [Codex Common Pitfalls](./codex-common-pitfalls.md)

# 核心观点
- 安全边界不是“限制效率”，而是让 Codex 在可控范围内持续工作。
- 安全设计的核心是可回滚、可审查、可确认。
- 真正危险的不是单次执行，而是不受约束的连续执行。

# 可复用知识
- 目录边界、权限边界、分支边界、提交边界应该同时存在。
- 敏感信息保护要在任务前、执行中、提交前三次检查。
- 对删除、迁移、重命名、批量修改要额外谨慎。

# 最佳实践
- 用最小权限开始。
- 把危险命令列表写进仓库规则。
- 为生产相关操作建立人工确认点。
- 使用独立分支和可回滚 commit。

# 常见坑
- 只控制 prompt，不控制实际权限。
- 忘记排除敏感文件。
- 把实验性任务和生产任务混在一起。

# 适合加入网站的位置
- 安全与治理专题页。
- 新手开始使用 Codex 前的必读页。

# 双向链接
- 见 [Codex 安全边界](../lessons/14-safety-boundaries.md)
- 见 [Codex Common Pitfalls](./codex-common-pitfalls.md)
- 见 [Codex Slash Commands](./codex-slash-commands.md)

# Prompt 示例
```text
请先检查这次 Codex 任务的安全边界：写入目录、敏感文件、危险命令、回滚方式、人工确认点，然后再继续。
```
