---
title: 视频生成模板
type: prompt
slug: prompt-video-generation
updated: 2026-05-10
tags: [codex, prompt, video-generation, template]
---

# 来源链接
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 适用场景
- 从主题生成视频脚本、镜头和发布检查。
- 需要控制时长、节奏和字幕。

# 核心观点
- 视频 prompt 先定义结构，再定义风格。
- 脚本、镜头、审核三项必须同时出现。

# 可复用知识
- 时长、受众、镜头表是核心字段。
- 字幕和同步检查是必需项。

# 可复制模板
```text
主题：{{topic}}
受众：{{audience}}
时长：{{duration}}
风格：{{style}}
输出：脚本、镜头表、素材清单、发布检查清单
完成标准：{{done_when}}
下一步：先给出结构，再补细节。
```

# 最佳实践
- 先出脚本母版。
- 再拆 shot list。
- 最后做发布检查。

# 常见坑
- 脚本太长。
- 没有检查字幕同步。
- 封面和简介没一起做。

# 测试与验证方法
- 检查预览时长和节奏。
- 检查字幕和旁白同步。
- 检查导出格式。

# 下一步学习建议
- 看 video case。
- 再看 self-media template。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Overview](../wiki/codex-overview.md)
