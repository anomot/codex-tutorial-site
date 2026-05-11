---
title: 上下文工程模板
type: prompt
slug: context-engineering
updated: 2026-05-11
tags: [codex, prompt, context-engineering, template]
---

# 来源链接
- [Codex Context Engineering](../wiki/codex-context-engineering.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Slash Commands](../wiki/codex-slash-commands.md)

# 适用场景
- 想让 Codex 快速接手一个已有仓库。
- 想减少重复解释项目结构和规则。

# 核心观点
- 上下文提示词的目标，是让 Codex 先理解项目，再开始动手。

# 可复用知识
- 先读文件，再总结理解，再开始执行。
- 让 Codex 明确指出它会看哪些文件。

# 可复制模板
```text
请先阅读这些上下文文件：
{{files}}

然后按顺序输出：
1. 项目目标；
2. 关键结构；
3. 当前任务相关文件；
4. 你会如何验证你的理解；
5. 你会先做什么。
```

# 最佳实践
- 上下文文件保持固定命名。
- 先从最小文件集开始，不要一次塞太多。

# 常见坑
- 只给任务，不给项目结构。
- 上下文文件太散。

# 测试与验证方法
- 看 Codex 是否能复述项目目标。
- 看它是否能指出关键目录和文件。

# 下一步学习建议
- 接着看 [Codex 项目上下文工程](../wiki/codex-context-engineering.md)。

# 双向链接
- [Codex Context Engineering](../wiki/codex-context-engineering.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Slash Commands](../wiki/codex-slash-commands.md)
