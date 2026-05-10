---
title: 浏览器发布前检查
type: case
slug: case-browser-release-check
updated: 2026-05-10
tags: [codex, case, browser, release]
---

# 来源链接
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Tutorial Signal](../research/tutorial-signal.md)
- [Codex Workflows](../wiki/codex-workflows.md)

# 场景
- 在 staging 或预发布页面做发版前检查。
- 要确认关键路径、控制台和网络请求都正常。

# 前置条件
- 有可访问的测试环境。
- 知道要检查的关键路径。
- 能读取 console / network / screenshot。

# 真实操作流程
1. 打开测试环境并读取页面结构。
2. 按真实用户路径完成关键操作。
3. 检查 console、network 和视觉截图。
4. 记录阻塞项并决定是否可以发布。

# 核心观点
- 发布前检查不是“看一眼页面”。
- 它要覆盖行为、请求和视觉三层。

# 可复用知识
- 浏览器操作能把 QA 过程标准化。
- 重要路径需要固定验证脚本。

# 最佳实践
- 先读取结构，再点击。
- 把错误信息保留下来。
- 把检查结果写成发布门槛。

# 常见坑
- 只检查视觉，不看 console/network。
- 没有明确退出标准。
- 忘记把失败项写成阻断项。

# 测试与验证方法
- 完成关键路径后检查无控制台错误。
- 确认关键请求返回正确。
- 截图和人工观察一致。

# 下一步学习建议
- 看 browser operations lesson。
- 再看 frontend workflow lesson。
- 然后做 browser prompt 模板。

# 双向链接
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Overview](../wiki/codex-overview.md)

# 可复制 Prompt
```text
请帮我在 staging 环境完成发版前检查：
先读取页面结构，再跑关键路径，最后给出 console/network/screenshot 结论和阻断项。
```
