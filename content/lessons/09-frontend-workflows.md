---
title: 前端工作流
type: lesson
slug: lesson-09-frontend-workflows
updated: 2026-05-10
tags: [codex, lesson, frontend, ui]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 核心观点
- 前端任务最适合把 Codex、测试和浏览器验证串起来。
- 组件改造必须保留 props、状态和视觉约束。
- 可访问性和视觉验证是前端教程的关键。

# 适用场景
- React、Vue、Next.js 或类似前端项目。
- UI bug、组件重构、布局修复、可访问性改进。
- 需要把前端任务写成教程章节。

# 可复用知识
- 先复现，再修改，再验证。
- diff 和截图应该一起看。
- 测试不只是单元测试，也包括交互和视觉检查。

# 步骤
1. 确认影响的组件、路由和状态来源。
2. 复现问题并记录浏览器表现。
3. 修改代码后跑测试、构建和浏览器检查。
4. 对比前后截图或交互结果。

# 最佳实践
- 把前端任务拆成数据、状态和呈现三层。
- 优先保留 public API 与交互约定。
- 把可访问性和响应式当成默认验证项。

# 常见坑
- 只改样式不看状态流。
- 没有做多断点验证。
- 把构建通过误当成 UI 正确。

# 测试与验证方法
- 跑单测或组件测试。
- 跑 build 或预览，检查页面交互。
- 在浏览器里确认布局、可访问性和控制台无错误。

# 下一步学习建议
- 看前端 bug case。
- 再看 frontend refactor case。
- 最后回到 [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
请帮我修复这个前端问题。
先定位相关组件和状态来源，再修改，并给出单测、构建和浏览器验证步骤。
```
