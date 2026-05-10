---
title: Codex Prompt Patterns
type: wiki
slug: codex-prompt-patterns
updated: 2026-05-10
tags: [codex, prompts, examples, validation]
---

# 来源链接
- [官方研究](../research/prompt-patterns.md)
- [社区主题研究](../research/community-codex-themes.md)
- [OpenAI Codex Prompting Guide](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide)

# 核心观点
- 最好的 prompt 是任务说明书，而不是聊天开场白。
- 目标、上下文、约束、验证，是教程里必须反复出现的四个元素。
- 给出失败条件和排除项，能显著提升稳定性。

# 可复用知识
- 每个模板都要包含：目标、限制、文件、验证、完成标准。
- 为 bugfix、refactor、review、feature 分别准备模板。

# 最佳实践
- 明确“不要改什么”。
- 明确“做完后如何确认”。
- 对不清楚的需求先让 Codex 复述理解。

# 常见坑
- 只说“帮我改一下”，不说验证方式。
- 同时塞进太多目标，结果都做得很浅。

# 适合加入网站的位置
- “Prompt 写法”教程页。
- “模板与示例”资料页。

# 双向链接
- 见 [Codex Workflows](./codex-workflows.md)
- 见 [Codex CLI First Steps](./codex-cli-first-steps.md)
- 见 [Codex Slash Commands](./codex-slash-commands.md)
- 见 [Prompt Patterns Research](../research/prompt-patterns.md)

# Prompt 示例
```text
目标：修复崩溃。上下文：相关文件是 X/Y/Z。约束：不改公共 API。验证：运行测试 A 和 B。完成标准：无回归、diff 最小。
```
