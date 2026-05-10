---
title: 移动端界面修改与设备验证
type: case
slug: case-mobile-ui-change
updated: 2026-05-10
tags: [codex, case, mobile, ui]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 场景
- 需要修改移动端某个页面的布局、文案或交互。
- 必须确认真机/模拟器上的表现。

# 前置条件
- 知道目标平台（iOS、Android、RN、Flutter 等）。
- 能跑构建或模拟器。
- 有截图验证手段。

# 真实操作流程
1. 先在目标设备尺寸上复现或确认当前状态。
2. 让 Codex 只改目标页面和相关样式。
3. 跑平台构建/测试并打开模拟器或真机。
4. 截取前后对比图并记录差异。

# 核心观点
- 移动端验证比桌面端更依赖设备上下文。
- 构建成功不等于设备上体验正确。

# 可复用知识
- 平台差异要提前写进任务。
- 截图和日志是关键证据。

# 最佳实践
- 先确认目标设备和断点。
- 修改尽量只影响目标页面。
- 保留回滚路径和构建命令。

# 常见坑
- 只在一个设备尺寸上看结果。
- 忽略平台权限或生命周期差异。
- 把 build 通过当成最终验证。

# 测试与验证方法
- 跑平台对应的测试/构建。
- 在模拟器或真机上做关键路径检查。
- 比较截图是否符合预期。

# 下一步学习建议
- 看 mobile lesson。
- 再看 browser release check case。
- 然后做 mobile prompt 模板。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
请帮我修改这个移动端页面。
先确认平台和设备尺寸，再改布局/文案，并给出构建、模拟器/真机和截图验证步骤。
```
