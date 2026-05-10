---
title: Browser Workflow 模板
type: prompt
slug: prompt-browser-workflow
updated: 2026-05-10
tags: [codex, prompt, browser, template]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Overview](../wiki/codex-overview.md)

# 适用场景
- 网页交互、QA、表单、登录、发布检查。
- 需要页面结构、console 和截图验证。

# 核心观点
- 浏览器任务必须以验证为目标。
- 先读结构，再动手。

# 可复用知识
- 页面、动作、证据、退出条件要写清楚。
- console/network/screenshot 是三类证据。

# 可复制模板
```text
URL：{{url}}
目标：{{task}}
关键路径：{{flow}}
需要检查：页面结构、console、network、截图
成功标准：{{done_when}}
下一步：如果遇到阻塞，先给出最小复现和阻断项。
```

# 最佳实践
- 先读取页面结构。
- 动作后立刻收集证据。
- 把发布前检查写成固定流程。

# 常见坑
- 盲点网页面。
- 只看视觉不看日志。
- 没有终止条件。

# 测试与验证方法
- 确认关键路径完成。
- 确认没有 console error。
- 确认截图符合预期。

# 下一步学习建议
- 看 browser operations lesson。
- 再看 browser release check case。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Overview](../wiki/codex-overview.md)
