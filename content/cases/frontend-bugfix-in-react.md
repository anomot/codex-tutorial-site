---
title: 前端 bug 修复与测试
type: case
slug: case-frontend-bugfix-react
updated: 2026-05-10
tags: [codex, case, frontend, react]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 场景
- React 页面出现按钮状态错乱或布局偏移。
- 需要把修复、测试和浏览器验证连成一条流程。

# 前置条件
- 能在本地复现问题。
- 有组件测试或页面预览。
- 知道目标断点和浏览器。

# 真实操作流程
1. 先在浏览器里复现 bug 并截图。
2. 让 Codex 定位组件、状态和样式来源。
3. 修改代码后跑单测/构建，再打开浏览器验证。
4. 对比修复前后的截图和交互。

# 核心观点
- 前端修复必须同时看状态和视觉。
- 测试通过不代表 UI 已经正确。

# 可复用知识
- 先复现，再改，最后验证。
- diff 和截图要一起审。

# 最佳实践
- 让 Codex 先说明影响的文件和组件。
- 把测试和浏览器验证写成固定顺序。
- 保留回归检查清单。

# 常见坑
- 只改样式不看状态流。
- 只跑单测不看页面。
- 忘了多断点验证。

# 测试与验证方法
- 跑组件测试或最小单测。
- 跑 build 或 preview。
- 在浏览器里检查交互和布局。

# 下一步学习建议
- 看前端 lesson。
- 再看前端 refactor case。
- 然后做一个 prompt 模板。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
请帮我修复这个 React 前端 bug。
先复现并定位组件/状态/样式来源，再修改，最后给出单测、构建和浏览器验证步骤。
```
