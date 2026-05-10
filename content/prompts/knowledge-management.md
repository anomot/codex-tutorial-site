---
title: 知识管理模板
type: prompt
slug: prompt-knowledge-management
updated: 2026-05-10
tags: [codex, prompt, knowledge-management, template]
---

# 来源链接
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Overview](../wiki/codex-overview.md)

# 适用场景
- 把一次会话、研究或决策整理成可检索知识。
- 需要摘要、链接、标签和 checkpoint。

# 核心观点
- 知识记录要短而可回跳。
- 链接和原因比长文更重要。

# 可复用知识
- 摘要、证据、下一步是核心字段。
- 对外可读、对内可查都要兼顾。

# 可复制模板
```text
请把这次内容整理成知识页：
主题：{{topic}}
关键结论：{{conclusions}}
证据/来源：{{sources}}
可复用知识：{{reuse}}
待验证点：{{open_questions}}
下一步：{{next_step}}
```

# 最佳实践
- 先写摘要，再补链接。
- 对齐目录和标签。
- 保留原始来源。

# 常见坑
- 只写结论不写证据。
- 没有标签和索引。
- 知识页太长。

# 测试与验证方法
- 过后还能从知识页直接找回关键点。
- 能从页面跳回来源。
- 能被另一个会话复用。

# 下一步学习建议
- 看 knowledge management lesson。
- 再维护一条真实知识页。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Overview](../wiki/codex-overview.md)
- [Codex Workflows](../wiki/codex-workflows.md)
