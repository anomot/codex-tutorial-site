---
title: 图片素材生成与审核
type: case
slug: case-image-asset-production
updated: 2026-05-10
tags: [codex, case, image-generation, content]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 场景
- 需要为文章、课程或社媒生成封面和插图。
- 要在风格、尺寸和文字可读性上做审核。

# 前置条件
- 知道受众、用途和尺寸。
- 能调用或联动图片生成工具。
- 有品牌或视觉约束。

# 真实操作流程
1. 先写 brief，再生成几个变体。
2. 挑一条方向继续迭代 prompt。
3. 检查尺寸、留白、清晰度和品牌感。
4. 导出最终版本并保留 prompt。

# 核心观点
- 图片生产要先控制需求，再控制输出。
- 变体和审核比一次生成更重要。

# 可复用知识
- 固定 brief 模板能减少反复沟通。
- 审核指标要写进流程里。

# 最佳实践
- 一轮只改一个变量。
- 保留通过审核的 prompt。
- 先小样本验证，再做最终图。

# 常见坑
- 需求太泛，风格会乱。
- 忽略文字安全区。
- 只看单张图，不比较变体。

# 测试与验证方法
- 检查尺寸和清晰度。
- 确认标题/文字可读。
- 确认风格符合发布渠道。

# 下一步学习建议
- 看 image lesson。
- 再看 self-media lesson。
- 然后做 image prompt 模板。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Overview](../wiki/codex-overview.md)

# 可复制 Prompt
```text
请把这段 brief 转成图片生成任务：
用途：{{use_case}}
风格：{{style}}
尺寸：{{size}}
禁区：{{constraints}}
输出 3 个变体并说明适合的发布场景。
```
