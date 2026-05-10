---
title: Codex CLI First Steps
type: wiki
slug: codex-cli-first-steps
updated: 2026-05-10
tags: [codex, cli, install, auth, beginner]
---

# 来源链接
- [官方研究](../research/official-codex.md)
- [教程信号研究](../research/tutorial-signal.md)
- [OpenAI Codex CLI README](https://github.com/openai/codex)

# 核心观点
- CLI 是本地终端里的 Codex 工作方式，最适合做可验证、可迭代的工程任务。
- 新手的成功路径是：安装 → 登录 → 选仓库 → 发第一个任务 → 看 diff → 跑验证。
- CLI 教程必须提前讲清楚上下文是怎么给进去的。

# 可复用知识
- 适合把“第一次运行 codex”做成一步一步的检查清单。
- 适合放 install、auth、repo attach、task submit、review diff、run tests 六个小节。

# 最佳实践
- 先让读者跑最短闭环，再扩展到复杂任务。
- 把验证命令写在每个例子的末尾。

# 常见坑
- 安装成功不等于能正确工作，认证和仓库上下文常常才是关键。
- 读者不知道哪些文件要明确传入，就会得到不稳定结果。

# 适合加入网站的位置
- “安装与第一次运行”页。
- “Codex CLI 快速开始”页。

# 双向链接
- 见 [Codex Overview](./codex-overview.md)
- 见 [Codex Prompt Patterns](./codex-prompt-patterns.md)
- 见 [Codex Slash Commands](./codex-slash-commands.md)
- 见 [Codex Tutorial Signal](../research/tutorial-signal.md)

# Prompt 示例
```text
我刚安装好 Codex CLI。请给我一个最短可行流程：登录、连接仓库、提交一个 bug 修复任务、验证结果。
```
