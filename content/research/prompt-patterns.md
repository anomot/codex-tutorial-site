---
title: Codex Prompt Patterns Research
type: research
slug: prompt-patterns
updated: 2026-05-10
tags: [codex, prompts, validation, workflow, tests]
---

# 来源链接
- [Workflows - Codex | OpenAI Developers](https://developers.openai.com/codex/workflows)
- [Codex Prompting Guide](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide)
- [Proven Patterns for OpenAI Codex in 2026](https://dev.to/kuldeep_paul/proven-patterns-for-openai-codex-in-2026-prompts-validation-and-gateway-governance-1jhm)
- [OpenAI Codex CLI Workflow Patterns 2026](https://thepromptshelf.dev/blog/openai-codex-cli-workflow-patterns-2026/)
- [Hacker News discussion: Superpowers](https://news.ycombinator.com/item?id=45547344)

# 核心观点
- 最有效的 prompt 不是“帮我写代码”，而是“目标、上下文、约束、完成标准、验证方式”一体化说明。
- 大型任务最稳的模式是 plan-then-execute：先给出分步计划，再按步骤执行并在每一步验证。
- 变更越大，越应该从测试、review 和 characterization 开始，而不是直接改实现。
- 用户对 Codex 的信任来自可重复验证，不来自“看起来很聪明”的输出。

# 可复用知识
- 让教程里的 prompt 都带有验收句：done when ...
- 把“不要做什么”写清楚，能显著减少模型跑偏。
- 对 refactor、review、bugfix、feature 四类任务分别给出模板。

# 最佳实践
- 先列出现有文件，再要求修改范围和验证命令。
- 分步骤任务每一步都要输出结果、风险和下一步。
- 对不确定的需求，先让 Codex 复述理解，再开始写代码。

# 常见坑
- prompt 太短，导致 Codex 自行补全了错误假设。
- 只要求产出代码，不要求验证。
- 一次性塞入太多目标，最后每个目标都完成得不够好。

# 适合加入网站的位置
- “Prompt 写法”核心章节。
- “如何让 Codex 给出可验证结果”章节。
- “高级工作流：计划、实现、验证”章节。

# 双向链接
- 见 [Codex Workflows](../wiki/codex-workflows.md)
- 见 [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)
- 见 [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)

# Prompt 示例
```text
目标：修复这个 bug。上下文：相关文件是 A、B、C。约束：不要改 public API。完成标准：测试通过、diff 最小、说明回归风险。
```
