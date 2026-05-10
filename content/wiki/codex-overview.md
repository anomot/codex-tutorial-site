---
title: Codex Overview
type: wiki
slug: codex-overview
updated: 2026-05-10
tags: [codex, overview, beginner, architecture]
---

# 来源链接
- [官方研究](../research/official-codex.md)
- [社区主题研究](../research/community-codex-themes.md)
- [官方 Codex 页面](https://developers.openai.com/codex)

# 核心观点
- Codex 是面向软件开发的 coding agent，不只是问答式助手。
- 它有多个入口：CLI、IDE、Cloud/Web、GitHub 集成。
- 读者最先要理解的是“在哪个入口工作”，而不是“如何一句话生成代码”。

# 可复用知识
- 先选工作入口，再选任务类型，再写 prompt。
- 对新手来说，最稳的初始任务是解释代码、修 bug、补测试。

# 最佳实践
- 在总览页明确区分 CLI、IDE、Cloud 的上下文模型。
- 用一张“入口 vs 适合任务”的表，帮助读者快速选型。

# 常见坑
- 把 Codex 当成单一产品，忽略不同入口的行为差异。
- 把“能做很多事”误解成“任何事都能可靠完成”。

# 适合加入网站的位置
- 首页之后的第一篇概念页。
- 导航里的“先理解 Codex”章节。

# 双向链接
- 见 [Codex CLI First Steps](./codex-cli-first-steps.md)
- 见 [Codex Workflows](./codex-workflows.md)
- 见 [Official Codex Research](../research/official-codex.md)

# Prompt 示例
```text
先帮我选 Codex 的入口：CLI、IDE 还是 Cloud。然后说明你为什么这样选。
```
