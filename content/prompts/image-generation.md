---
title: 图片生成模板
type: prompt
slug: prompt-image-generation
updated: 2026-05-10
tags: [codex, prompt, image-generation, template]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 适用场景
- 生成封面图、配图、海报或插图提示词。
- 需要风格、尺寸和文字安全区。

# 核心观点
- 图片 prompt 先写 brief 再写风格。
- 必须带审核标准。

# 可复用知识
- 用途、风格、尺寸、禁区四项要齐。
- 变体比较比一次生成更可靠。

# 可复制模板
```text
用途：{{use_case}}
风格：{{style}}
受众：{{audience}}
尺寸：{{size}}
禁区：{{constraints}}
需要：{{must_have}}
输出：请给出 3 个变体，并说明每个变体适合什么场景。
完成标准：{{done_when}}
```

# 最佳实践
- 每轮只改一个变量。
- 保留成功版本的 prompt。
- 把品牌要求写具体。

# 常见坑
- 需求太泛。
- 忽略文字区域。
- 没有比较变体。

# 测试与验证方法
- 检查尺寸和清晰度。
- 检查文字可读性。
- 检查是否符合品牌。

# 下一步学习建议
- 看 image case。
- 再看 self-media template。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Overview](../wiki/codex-overview.md)
