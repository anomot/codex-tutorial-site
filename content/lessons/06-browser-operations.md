---
title: 浏览器操作工作流
type: lesson
slug: lesson-06-browser-operations
updated: 2026-05-10
tags: [codex, lesson, browser, qa]
---

# 来源链接
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Official Codex Research](../research/official-codex.md)

# 核心观点
- 浏览器操作适合做真实 UI 交互和发布前验证。
- 页面读取、表单输入、截图和日志检查是一个闭环。
- 浏览器工作流应该服务于验证，而不是替代开发。

# 适用场景
- 检查 staging 页面和生产前流程。
- 执行登录、表单、导航、截图等操作。
- 把网页 QA 写成可复用教程。

# 可复用知识
- 先读页面结构，再做动作。
- 截图和 console/network 是验证的重要证据。
- 每次浏览器任务都要说明目标页面和退出条件。

# 步骤
1. 打开目标页面并读取结构。
2. 执行点击、填写或导航操作。
3. 检查 console、network 和截图。
4. 记录失败点和可回滚动作。

# 最佳实践
- 先用最小动作确认页面状态。
- 在教程里同时展示成功与失败截图。
- 把浏览器验证当成发布门槛的一部分。

# 常见坑
- 没有先看页面结构就盲点。
- 只看视觉，不看 console/network。
- 没有退出条件，操作变成无穷循环。

# 测试与验证方法
- 用 staging 页面跑一次完整链路。
- 确认关键路径上的控件都可被定位和操作。
- 检查没有未预期的 console error。

# 下一步学习建议
- 接着看前端工作流页。
- 再写一个 browser QA 案例。
- 回到 [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md) 做浏览器模板。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Overview](../wiki/codex-overview.md)

# 可复制 Prompt
```text
请帮我在这个网页上完成 {{task}}。
先读取页面结构，再执行动作，最后输出截图、console 状态和是否通过验证。
```
