---
title: Mobile Task 模板
type: prompt
slug: prompt-mobile-task
updated: 2026-05-10
tags: [codex, prompt, mobile, template]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 适用场景
- iOS、Android、React Native、Flutter 的修改。
- 需要模拟器/真机与构建验证。

# 核心观点
- 移动端任务要写清平台和设备。
- 必须把日志和截图列为验证项。

# 可复用知识
- 平台差异和设备尺寸要显式写出。
- 构建命令和验证命令要一起给。

# 可复制模板
```text
平台：{{ios/android/rn/flutter}}
设备/尺寸：{{device}}
目标：{{mobile_goal}}
相关文件：{{files}}
约束：{{constraints}}
验证：构建、模拟器/真机、截图、日志
完成标准：{{done_when}}
下一步：先确认平台，再修改，再验证。
```

# 最佳实践
- 先写平台再写改动。
- 把截图和日志当作必须项。
- 保留回退方案。

# 常见坑
- 只在一种设备上看结果。
- 忽略平台特有权限。
- 把构建成功当成完成。

# 测试与验证方法
- 跑平台测试或构建。
- 检查模拟器/真机上的关键路径。
- 保存截图和日志。

# 下一步学习建议
- 看 mobile case。
- 再看 browser workflow template。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
