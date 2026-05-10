---
title: 移动端工作流
type: lesson
slug: lesson-10-mobile-workflows
updated: 2026-05-10
tags: [codex, lesson, mobile, app]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 核心观点
- 移动端任务要把构建、模拟器/真机和截图验证一起考虑。
- 移动端的环境差异比前端更大，验证必须更细。
- 教程要明确不同栈的检查重点。

# 适用场景
- iOS、Android、React Native、Flutter 或类似项目。
- 界面调整、构建问题、日志排查、发布前检查。
- 需要写成可执行的移动端教程。

# 可复用知识
- 屏幕尺寸、平台样式和权限是移动端验证的核心。
- 构建结果和真机表现都要看。
- 截图和日志是常见证据。

# 步骤
1. 确认目标平台和设备类型。
2. 修改后先跑构建或最小测试。
3. 在模拟器或真机上做关键路径验证。
4. 保存截图、日志和失败点。

# 最佳实践
- 把平台特有差异写进教程。
- 对 UI 修改做设备尺寸检查。
- 保留可回滚的构建和配置方案。

# 常见坑
- 只在一种设备上看结果。
- 把构建成功误当成体验正确。
- 忽略平台权限和生命周期差异。

# 测试与验证方法
- 跑平台对应的单元或集成测试。
- 在模拟器/真机上检查关键流程。
- 保存截图并确认无明显差异。

# 下一步学习建议
- 看 mobile case。
- 再看扩展与连接器页。
- 最后回到 [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
请帮我处理这个移动端修改。
先确认平台和设备，再修改，并给出构建、模拟器/真机验证和截图检查步骤。
```
