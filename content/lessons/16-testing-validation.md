---
title: Codex 测试与验证
type: lesson
slug: lesson-16-testing-validation
updated: 2026-05-11
tags: [codex, lesson, testing, validation, qa]
---

# 来源链接
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)

# 核心观点
- Codex 生成的代码，必须经过和人类代码同样严格的验证。
- 测试不是收尾动作，而是任务的一部分。
- 最可靠的结果，是“Codex 生成 + 测试验证 + 人工审查”三者一起成立。

# 适用场景
- 团队需要统一 AI 代码验证标准。
- 需要让 Codex 自己补测试、修测试、跑测试。
- 需要把 LLM 输出风险纳入交付流程。

# 可复用知识
- TypeScript / ESLint / 单测 / 集成 / E2E 是基础验证层。
- 安全检查和回归检查要纳入同一流程。
- 验证结果应该可回放、可追踪、可复盘。

# 步骤
1. 先定义完成标准和失败条件。
2. 让 Codex 先写测试或更新测试。
3. 再让 Codex 实现变更。
4. 运行 lint / typecheck / test / build / preview。
5. 人工 review diff、日志和边界情况。
6. 在失败时回到测试或任务定义，不要直接硬改。

# 最佳实践
- 对每类任务固定验证清单。
- 代码改动前后都保留证据。
- 让 Codex 明确解释为什么测试能覆盖风险。

# 常见坑
- 只看构建通过，不看行为正确性。
- 让 Codex 自己“感觉没问题”就结束。
- 没有回归清单。

# 测试与验证方法
- 跑 `npm run build` / `npm run lint` / `npm test` / E2E。
- 手工验证关键路径。
- 检查错误日志、控制台和网络请求。

# 下一步学习建议
- 继续看 [Codex + 知识管理](../wiki/codex-knowledge-management.md)。
- 再看 [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)。
- 然后把这套验证流程写成仓库规则。

# 双向链接
- [Codex Common Pitfalls](../wiki/codex-common-pitfalls.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)

# 可复制 Prompt
```text
请先列出这次变更的验证清单：
- 需要跑哪些命令；
- 需要检查哪些页面/流程；
- 哪些结果能算通过；
- 哪些情况必须回滚。
```
