---
title: Codex 总览
type: lesson
slug: lesson-00-overview
updated: 2026-05-10
tags: [codex, lesson, overview, beginner]
---

# 来源链接
- [Official Codex Research](../research/official-codex.md)
- [Codex Overview](../wiki/codex-overview.md)

# 核心观点
- 先选入口，再写任务；Codex 的价值来自工作流，不只是生成代码。
- CLI、IDE、Cloud/Web 适合不同上下文，先选对入口能少走很多弯路。
- 第一次上手应从可验证的小任务开始：解释、修复、补测试。

# 适用场景
- 给新手建立 Codex 的心智模型。
- 帮助读者区分 CLI、IDE、Cloud/Web 的角色。
- 为后续所有教程页提供统一起点。

# 可复用知识
- 入口选择先于 prompt 质量。
- 任务成功依赖上下文、验证和提交节奏。
- 小任务更适合作为第一条成功路径。

# 步骤
1. 识别任务类型：解释、修 bug、重构、review、自动化。
2. 选择入口：本地终端、IDE、云端或 Web。
3. 准备最小上下文：相关文件、验证方式、成功标准。
4. 先做一个可回滚的小任务，再扩展到更大的工作流。

# 最佳实践
- 在任务前就写明 done-when。
- 把 diff、日志、截图或测试结果当成完成条件的一部分。
- 同一仓库尽量保持稳定的上下文和规则文件。

# 常见坑
- 把 Codex 当成单一按钮，忽略入口差异。
- 一次要求完成过多目标，导致输出不稳定。
- 没有验证就直接接受结果。

# 测试与验证方法
- 让 Codex 先复述它理解的入口和任务。
- 用一个最小示例验证它能否正确读取上下文。
- 检查它是否主动提出验证步骤和回滚路径。

# 下一步学习建议
- 继续看 [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)。
- 再看 [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)。
- 最后看 [Codex Workflows](../wiki/codex-workflows.md)。

# 双向链接
- [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 可复制 Prompt
```text
先帮我判断这次任务应该用 Codex 的哪个入口：CLI、IDE 还是 Cloud/Web。
然后列出你需要的上下文、验证方式和完成标准。
```
