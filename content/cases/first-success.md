---
title: 第一次成功闭环
type: case
slug: case-first-success
updated: 2026-05-10
tags: [codex, case, cli, onboarding]
---

# 来源链接
- [Official Codex Research](../research/official-codex.md)
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)

# 场景
- 新用户刚装好 Codex，想在真实仓库里跑通第一条任务。
- 目标不是做大功能，而是建立最短成功闭环。

# 前置条件
- 已安装 Codex CLI。
- 已有一个小型仓库或练习仓库。
- 能看到测试命令和 diff。

# 真实操作流程
1. 进入仓库后先让 Codex 解释目录和关键文件。
2. 发一个很小的修复任务，例如文案、注释或单行 bug。
3. 查看 diff、日志和测试输出。
4. 只在验证通过后再继续第二个任务。

# 核心观点
- 第一次成功应该短、清楚、可回滚。
- 看懂 diff 比看懂 prompt 更关键。

# 可复用知识
- 把“安装 → 登录 → 进入仓库 → 小任务 → 验证”做成固定流程。
- 第一次任务应尽量只改一个文件或一个局部。

# 最佳实践
- 任务前先写 done-when。
- 把测试命令放进提示词。
- 保留第一次成功的截图或日志。

# 常见坑
- 第一条任务过大。
- 没有确认仓库上下文。
- 直接接受结果，没有复核。

# 测试与验证方法
- 确认 diff 只包含预期修改。
- 跑最小验证命令并检查结果。
- 确认你能复述整个闭环。

# 下一步学习建议
- 继续看 prompt patterns。
- 再看 workflow plan-execute-verify。
- 然后挑一个真实 bug 练习。

# 双向链接
- [Codex Overview](../wiki/codex-overview.md)
- [Codex CLI First Steps](../wiki/codex-cli-first-steps.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)

# 可复制 Prompt
```text
先带我完成第一次成功闭环：
1) 解释仓库  2) 做一个很小的修复  3) 展示 diff  4) 跑验证  5) 告诉我下一步应该做什么。
```
