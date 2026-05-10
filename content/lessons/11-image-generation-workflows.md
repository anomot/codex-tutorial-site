---
title: 图片生成工作流
type: lesson
slug: lesson-11-image-generation-workflows
updated: 2026-05-10
tags: [codex, lesson, image-generation, content]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Official Codex Research](../research/official-codex.md)

# 核心观点
- 图片生成更适合按 brief、prompt、迭代和审核来组织。
- Codex 的价值在于把需求、约束和校验串起来。
- 教程里要把图片生产流程拆成可复用步骤。

# 适用场景
- 封面图、插图、配图、海报素材。
- 需要把创意 brief 转成可执行提示词。
- 需要反复调整风格、比例和文字安全区域。

# 可复用知识
- 先定义受众、风格和用途，再写 prompt。
- 图片审核要看尺寸、清晰度和文案可读性。
- 变体比一次到位更可靠。

# 步骤
1. 写 brief：用途、风格、尺寸、禁区。
2. 生成多个变体并挑选方向。
3. 调整 prompt 和约束再迭代。
4. 导出并做最终视觉检查。

# 最佳实践
- 把品牌限制和排除项明确写出来。
- 每轮只改一个核心变量。
- 保存通过审核的 prompt 模板。

# 常见坑
- 需求模糊，结果风格漂移。
- 忽略文字区域和尺寸要求。
- 只看单张图，不比较变体。

# 测试与验证方法
- 检查图像尺寸、清晰度和边距。
- 确认主题、配色和品牌一致。
- 确认用于网页或社媒时不会失真。

# 下一步学习建议
- 看 image case。
- 再看 self-media 页。
- 然后回到 [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Overview](../wiki/codex-overview.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 可复制 Prompt
```text
请把下面这段 brief 转成图片生成提示词：
用途：{{use_case}}
风格：{{style}}
尺寸：{{size}}
禁区：{{constraints}}
需要输出 3 个变体并说明适合哪个场景。
```
