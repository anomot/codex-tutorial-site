---
title: Frontend Task 模板
type: prompt
slug: prompt-frontend-task
updated: 2026-05-10
tags: [codex, prompt, frontend, template]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 适用场景
- 前端 bugfix、组件修改、布局调整、可访问性修复。
- 需要结合测试和浏览器验证。

# 核心观点
- 前端任务要明确组件、断点和验证。
- 不要只交代“改 UI”。

# 可复用知识
- 组件、状态、样式、测试要一起说。
- 截图比描述更稳。

# 可复制模板
```text
目标：{{frontend_goal}}
组件/路由：{{files}}
约束：{{constraints}}
断点/设备：{{breakpoints}}
验证：单测、构建、浏览器截图、可访问性检查
完成标准：{{done_when}}
下一步：先复现，再修改，再验证。
```

# 最佳实践
- 把相关文件明确列出来。
- 把断点和设备也写进 prompt。
- 要求输出截图或验证步骤。

# 常见坑
- 只说改 UI，不说验证。
- 没有列出组件边界。
- 忘了响应式检查。

# 测试与验证方法
- 跑单测和构建。
- 在浏览器里检查关键交互。
- 确认多断点视觉正常。

# 下一步学习建议
- 看 frontend bug case。
- 再看 frontend refactor case。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
