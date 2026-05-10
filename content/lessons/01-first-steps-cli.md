---
title: Codex CLI 第一次上手
type: lesson
slug: lesson-01-first-steps-cli
updated: 2026-05-10
tags: [codex, lesson, cli, setup]
---

# 来源链接
- [Official Codex Research](../research/official-codex.md)
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [openai/codex GitHub](https://github.com/openai/codex)

# 核心观点
- CLI 最适合做可验证、可迭代的工程任务。
- 第一次上手的目标不是“做大功能”，而是跑通闭环。
- 安装、登录、连 repo、看 diff、跑验证，必须形成固定顺序。

# 适用场景
- 第一次安装 Codex CLI。
- 需要在本地仓库里快速做一个小修复。
- 想把命令行工作流写成可复用教程。

# 可复用知识
- 安装不等于就能工作，认证和仓库上下文同样关键。
- 先确认可读写范围，再发任务。
- 先看 diff，再看结果，最后才是提交。

# 步骤
1. 安装 Codex CLI（npm、brew 或二进制均可）。
2. 登录 ChatGPT 或配置 API key。
3. 进入目标仓库并发起第一个小任务。
4. 检查 diff、日志和测试结果，再决定是否继续。

# 最佳实践
- 第一次任务只选一个小而清晰的 bug 或文案修正。
- 把验证命令写在提示词里。
- 每次完成后保留可复现的命令和输出。

# 常见坑
- 把安装成功误认为工作流成功。
- 没有明确 repo 上下文，导致任务偏航。
- 跳过 diff 直接接受修改。

# 测试与验证方法
- 运行 `codex --help` 或等价帮助命令确认安装可用。
- 用一个最小 bugfix 验证日志、diff 和测试三项是否齐全。
- 检查是否能在不改大范围代码的前提下完成任务。

# 下一步学习建议
- 接着看 [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)。
- 再看 [Codex Workflows](../wiki/codex-workflows.md)。
- 然后练习一条真实的仓库修复流程。

# 双向链接
- [Codex Overview](../wiki/codex-overview.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 可复制 Prompt
```text
我刚安装好 Codex CLI。
请带我完成最短闭环：登录、进入仓库、做一个小修复、查看 diff、跑验证。
```
