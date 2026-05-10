---
title: Skill 设计模板
type: prompt
slug: prompt-skill-design
updated: 2026-05-10
tags: [codex, prompt, skills, template]
---

# 来源链接
- [MCP and Skills Notes](../research/mcp-skills-notes.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)

# 适用场景
- 把重复流程沉淀成 Skill。
- 需要明确输入、输出和验证。

# 核心观点
- Skill 应该窄、短、可验证。
- 重复三次以上才值得做。

# 可复用知识
- 说明范围比写长文更重要。
- 安装和测试要写清楚。

# 可复制模板
```text
任务：{{repeated_task}}
输入：{{inputs}}
输出：{{outputs}}
验证：{{validation}}
失败条件：{{failure_modes}}
适用范围：{{scope}}
安装/使用：{{install_use}}
完成标准：{{done_when}}
```

# 最佳实践
- 先做最小 skill。
- 把失败条件写进设计。
- 保留样例输入。

# 常见坑
- 范围太大。
- 没有安装后验证。
- 没有测试样本。

# 测试与验证方法
- 用样例输入跑一次。
- 确认输出和验证一致。
- 确认安装后能被识别。

# 下一步学习建议
- 看 skill case。
- 再看 MCP template。

# 双向链接
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex MCP and Skills](../wiki/codex-mcp-skills.md)
- [Codex Workflows](../wiki/codex-workflows.md)
