---
title: Codex Prompt 写法
type: lesson
slug: lesson-02-prompt-patterns
updated: 2026-05-10
tags: [codex, lesson, prompt, validation]
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)

# 核心观点
- 好 prompt 的核心是任务说明书，不是聊天开场白。
- 目标、上下文、约束、验证、done-when 是最稳定的结构。
- 失败条件写清楚，比要求“更聪明”更有用。

# 适用场景
- 需要把 Codex 的输出变得可控。
- 需要让不同人用同一模板得到相近结果。
- 需要把 prompt 沉淀成网站教程模板。

# 可复用知识
- 先说目标，再说文件和约束，最后说验证。
- 每个模板都要留一个 done-when 字段。
- 对不确定的地方先让 Codex 复述理解。

# 步骤
1. 写出一句话目标。
2. 补充上下文文件和边界约束。
3. 说明验证方法与成功标准。
4. 让 Codex 先回读任务，再开始执行。

# 最佳实践
- 把“不要改什么”也写进 prompt。
- 把测试命令写成明确动作。
- 模板里不要同时塞太多目标。

# 常见坑
- 只有“帮我改一下”，没有验证。
- 上下文太少，导致模型自己补假设。
- 目标太多，最后每个都做浅了。

# 测试与验证方法
- 让 Codex 先复述它理解的目标、约束和验证。
- 检查它是否主动给出 plan 和测试步骤。
- 确认模板能在不同任务里复用。

# 下一步学习建议
- 继续看 [Codex Workflows](../wiki/codex-workflows.md)。
- 然后把模板应用到一个真实 bugfix。
- 再看 [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# 可复制 Prompt
```text
目标：{{goal}}
上下文：{{relevant_files / repo / background}}
约束：{{must_not_change}}
验证：{{tests / build / screenshot / review}}
完成标准：{{done_when}}
```
