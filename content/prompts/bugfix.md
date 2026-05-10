---
title: Bugfix 模板
type: prompt
slug: prompt-bugfix
updated: 2026-05-10
tags: [codex, prompt, bugfix, template]
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 适用场景
- 修复一个可复现的 bug。
- 需要最小改动和明确回归验证。

# 核心观点
- bugfix prompt 要先给复现，再给约束。
- 验证命令和回归范围不能省。

# 可复用知识
- expected vs actual 是关键字段。
- 相关文件和复现步骤要写清楚。

# 可复制模板
```text
目标：修复这个 bug。
复现步骤：{{steps}}
预期结果：{{expected}}
实际结果：{{actual}}
相关文件：{{files}}
约束：{{constraints}}
验证：{{tests}}
完成标准：{{done_when}}
下一步：如果修复不稳定，请先给出最小复现。
```

# 最佳实践
- 把复现步骤写成可执行动作。
- 要求先修最小范围，再考虑扩展。
- 要求输出验证命令。

# 常见坑
- 没有复现步骤。
- 修了一个点又引入新回归。
- 没写验证，结果无法确认。

# 测试与验证方法
- 运行复现步骤验证问题已消失。
- 跑相关测试确认没有新回归。
- 检查 diff 是否足够小。

# 下一步学习建议
- 看 frontend bug case。
- 再练一个真实仓库 bugfix。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
