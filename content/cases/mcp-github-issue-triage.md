---
title: MCP 辅助 GitHub Issue 处理
type: case
slug: case-mcp-github-issue-triage
updated: 2026-05-11
tags: [codex, case, mcp, github, issue]
---

# 来源链接
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Context Engineering](../wiki/codex-context-engineering.md)
- [Codex Testing and Validation](../wiki/codex-testing-validation.md)

# 场景
- 团队希望让 Codex 借助 MCP 工具读取并处理 GitHub Issue。
- 目标不是自动关闭 issue，而是让 Issue 处理更有结构、更省人工时间。

# 前置条件
- 已配置好 GitHub 相关 MCP server。
- Codex 已能访问 issue 列表、详情或相关仓库信息。
- 已定义 issue 标签、优先级和处理规范。

# 背景
- 日常 issue 处理中，很多时间花在信息整理和初步分类上。
- 让 Codex 读取 issue 内容、仓库上下文和相关文件，有助于快速形成处理建议。

# 输入材料
- issue 标题与描述
- 仓库上下文
- 标签规则与优先级规则
- 相关 PR / commit / 文件路径

# 推荐 Prompt
```text
请结合 GitHub MCP 工具和当前仓库上下文，帮我处理这个 issue：
1. 总结问题；
2. 判断优先级；
3. 推荐标签；
4. 指出可能涉及的代码位置；
5. 给出下一步处理建议；
6. 说明需要人工确认的部分。
```

# 真实操作流程
1. 先读取 issue 原文和上下文。
2. 用 Codex 总结问题并做第一轮分类。
3. 结合仓库文件找出可能相关模块。
4. 给出标签、优先级和处理建议。
5. 人工确认后再更新 issue 或转成任务。

# Codex 操作步骤
- 拉取 issue 信息。
- 总结问题。
- 关联代码位置。
- 生成处理建议。
- 标记人工确认点。

# 人工检查点
- 标签是否合理。
- 优先级是否符合真实影响范围。
- 代码定位是否靠谱。
- 是否存在误判或过度推断。

# 核心观点
- MCP 的价值不是“替你判断”，而是帮你把 issue 处理流程结构化。
- GitHub Issue 处理里，人类依旧要保留最终判断权。

# 可复用知识
- Issue → 摘要 → 分类 → 代码定位 → 人工确认，是稳定闭环。
- 对仓库规则越了解，Codex 给出的 triage 越可靠。

# 最佳实践
- 标签和优先级规则固定化。
- 对高风险 issue 始终保留人工确认。
- 处理完后沉淀为案例或 prompt 模板。

# 常见坑
- 让 Codex 直接代替人工判断。
- 没有规则就让它自由分类。
- 代码关联过度乐观。

# 测试与验证方法
- 检查 issue 摘要是否准确。
- 检查推荐标签与优先级是否符合团队规则。
- 随机抽样人工比对几条 triage 结果。

# 输出结果
- 一条结构化 issue 处理建议。
- 可复用 triage prompt。
- 与仓库上下文绑定的处理流程。

# 复盘
- 本案例适合展示 MCP + 仓库上下文的结合方式。
- 如果 triage 不准，通常是因为规则和上下文不足。

# 可复用模板
```text
请不要直接替我决定，而是先做 triage 建议：
摘要、优先级、标签、相关文件、处理建议、人工确认点。
```

# 下一步学习建议
- 继续看 [Codex MCP and Skills](../wiki/codex-mcp-skills.md)。
- 再看 [Codex 项目上下文工程](../wiki/codex-context-engineering.md)。
- 然后把 triage 规则固化到 AGENTS.md 或知识库里。

# 双向链接
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Context Engineering](../wiki/codex-context-engineering.md)
- [Codex Testing and Validation](../wiki/codex-testing-validation.md)
