---
title: Codex 安全边界
type: lesson
slug: lesson-14-safety-boundaries
updated: 2026-05-11
tags: [codex, lesson, safety, boundaries, security]
---

# 来源链接
- [Official Codex Research](../research/official-codex.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 核心观点
- AI Coding 的第一原则不是“更快”，而是“可控”。
- Codex 的安全边界要在任务开始前就讲清楚，而不是出事后补救。
- 权限、沙箱、分支、commit 和敏感信息保护，应该组成一个固定闭环。

# 适用场景
- 给团队建立 Codex 使用规范。
- 需要让新手理解“哪些可以让 Codex 做，哪些必须人工确认”。
- 需要把安全策略写入教程或仓库规则。

# 可复用知识
- 沙箱和权限比 prompt 更重要。
- 越接近生产环境，越要收紧自动化边界。
- 每次任务都应默认存在误删、误改和泄露风险。

# 步骤
1. 确认任务范围与目标分支。
2. 设定权限策略和可写范围。
3. 先在最小目录/最小文件上验证。
4. 提交前做人工审查和敏感信息检查。
5. 只在验证通过后推进到更大范围。

# 最佳实践
- 使用独立 Git 分支。
- 把 `.env`、密钥和生产配置从默认任务中排除。
- 对删除、重命名、迁移类操作加入二次确认。
- 把危险命令列表写进仓库规则。

# 常见坑
- 让 Codex 直接碰生产环境。
- 没有限定写入目录。
- 任务一大就没有回滚方案。
- 忽略 commit 前的人工检查。

# 测试与验证方法
- 检查任务是否在预期目录内运行。
- 检查是否能在出问题时快速回滚。
- 检查是否存在敏感文件误改或误提交。
- 检查权限设置是否符合预期。

# 下一步学习建议
- 继续看 [Codex 项目上下文工程](./codex-context-engineering.md)。
- 再看 [Codex 测试与验证](./codex-testing-validation.md)。
- 最后回到 [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)。

# 双向链接
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
- [Official Codex Research](../research/official-codex.md)
- [Community Codex Themes](../research/community-codex-themes.md)

# Prompt 示例
```text
请先检查这次任务的安全边界：写入范围、敏感文件、危险命令、回滚方式和人工确认点，然后再开始执行。
```
