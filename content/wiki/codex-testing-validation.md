---
title: Codex 测试与验证
type: wiki
slug: codex-testing-validation
updated: 2026-05-11
tags: [codex, testing, validation, qa, reliability]
---

# 来源链接
- [Codex Common Pitfalls](./codex-common-pitfalls.md)
- [Codex Workflows](./codex-workflows.md)
- [Codex Prompt Patterns](./codex-prompt-patterns.md)

# 核心观点
- 验证是 AI Coding 的核心环节，不是附属步骤。
- Codex 生成内容要通过自动化验证和人工验证双重把关。
- 验证体系越稳定，越容易复用到后续项目。

# 可复用知识
- 验证清单应该按任务类型固定化。
- 结果要能追踪到命令、日志和 diff。
- 失败时先确认问题属于实现、测试还是需求定义。

# 最佳实践
- 固定 lint / typecheck / unit / integration / e2e 流程。
- 让 Codex 自己写测试，但不要让它自己决定什么叫“够了”。
- 把安全检查和回归检查列入每次交付。

# 常见坑
- 只做 build，不做行为验证。
- 没有回归面检查。
- 没有失败后的回滚路径。

# 适合加入网站的位置
- 测试与质量专题页。
- 交付前检查清单页。

# 双向链接
- 见 [Codex 测试与验证](../lessons/16-testing-validation.md)
- 见 [Codex Common Pitfalls](./codex-common-pitfalls.md)
- 见 [Codex Slash Commands](./codex-slash-commands.md)

# Prompt 示例
```text
请把这次改动的验证流程整理成 checklist：
1. 自动化验证；
2. 手工验证；
3. 回归检查；
4. 失败后的处理方式。
```
