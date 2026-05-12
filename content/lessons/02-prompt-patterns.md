---
title: Codex Prompt 写法
type: lesson
slug: lesson-02-prompt-patterns
updated: 2026-05-12
tags: [codex, lesson, prompt, validation, done-when]
excerpt: Codex Prompt 不是聊天开场白，而是一份小型任务说明书；核心是目标、上下文、约束、验证和 done-when。
---

# 来源链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [OpenAI Codex Prompting Guide](https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide)
- [Workflows - Codex | OpenAI Developers](https://developers.openai.com/codex/workflows)

# 核心观点
- Codex Prompt 不是聊天开场白，而是一份小型任务说明书。
- 最稳定的结构是：目标、上下文、约束、验证、完成标准 done-when。
- 验证是“怎么检查”，done-when 是“满足什么结果才算完成”。
- 失败条件、不能修改的边界、最终交付格式，往往比“请更聪明”更有用。

# 适用场景
- 你希望 Codex 的输出更可控，而不是每次都靠临场解释。
- 你要把 bugfix、feature、review、refactor 这类任务沉淀成可复用模板。
- 你需要让团队成员用同一套 prompt 写法获得相近质量的结果。
- 你想把一次任务从“帮我改一下”升级成“可执行、可验证、可验收”的开发任务。

# 一句话模板
```text
目标：{{这次任务要解决什么}}
上下文：{{相关文件 / repo / 业务背景 / 当前行为}}
约束：{{不能改什么 / 不能引入什么 / 必须保持什么行为}}
验证：{{测试命令 / 构建命令 / 手动检查路径}}
完成标准 done-when：{{满足哪些可观察结果才算完成}}
```

# 如何理解这五个字段

| Prompt 字段 | 对应开发概念 | 要回答的问题 |
|---|---|---|
| 目标 | 需求 / Issue / Ticket | 这次到底要解决什么？ |
| 上下文 | 仓库、文件、业务背景 | Codex 应该看哪里、基于什么判断？ |
| 约束 | 技术边界、风险控制 | 哪些东西不能碰、哪些行为不能变？ |
| 验证 | 测试、构建、截图、人工检查 | 做完后怎么检查？ |
| done-when | Definition of Done / 验收条件 | 满足什么结果才算完成？ |

这个结构的价值在于，它把“让 AI 帮我改代码”变成了“给 AI 一个可执行、可验证的开发任务”。

# done-when 是什么

done-when 可以理解为“完成标准”，但它比中文里的“完成标准”更工程化。它强调任务结束时应该出现哪些可观察、可验证、可交付的结果。

不要这样写：

```text
完成标准：功能正常。
```

更好的写法是：

```text
完成标准 done-when：
- 登录按钮点击后可以正确调用 login API。
- 登录成功后跳转到 /dashboard。
- 登录失败时展示错误提示。
- npm test 全部通过。
- 不引入新的 TypeScript 报错。
```

# 验证和 done-when 的区别

| 字段 | 关注点 | 示例 |
|---|---|---|
| 验证 | 怎么检查？ | 运行 `npm test`、打开页面手动测试 |
| done-when | 满足什么结果算完成？ | 所有测试通过，页面无报错，功能符合预期 |

一个完整写法通常是：

```text
验证：
- 运行 npm test。
- 运行 npm run build。
- 手动打开 /login 页面测试登录流程。

完成标准 done-when：
- npm test 全部通过。
- npm run build 无错误。
- 用户输入正确账号密码后能登录成功。
- 输入错误密码时显示明确错误提示。
```

验证是方法，done-when 是判定条件。两者分开写，Codex 更容易知道该做什么，也更容易在最后汇报结果。

# 为什么 done-when 很重要

## 1. 让任务知道什么时候停

如果你只说：

```text
帮我优化登录页面。
```

Codex 可能会改 UI、改状态管理、改接口请求，甚至顺手重构一堆你没要求的东西。

如果你写清楚：

```text
完成标准 done-when：
- 登录页面在移动端不再出现按钮溢出。
- 只修改 LoginPage.tsx 和 login.css。
- 不改接口逻辑。
- npm run build 通过。
```

任务边界会清楚很多。

## 2. 防止“看起来完成”

“已完成优化”不是一个可靠交付。更可靠的是：

```text
完成标准 done-when：
- 原 bug 可以按复现步骤复现。
- 修复后同样步骤不再复现。
- 增加一个回归测试覆盖该 bug。
- 现有测试不失败。
```

这会把 Codex 的注意力从“给出答案”拉回“提供证据”。

## 3. 方便你人工验收

done-when 同时写给三个人看：

- Codex：知道做到什么程度可以停。
- 你自己：知道如何验收。
- 未来的你或团队成员：知道当时的任务边界。

如果你把 prompt 沉淀到 Obsidian、README、项目规则或这个教程站，done-when 就会变成可复用的任务资产。

# done-when 的五类写法

## 功能完成标准

```text
完成标准 done-when：
- 用户可以成功创建任务。
- 创建成功后任务出现在列表顶部。
- 创建失败时展示错误提示。
```

## 技术完成标准

```text
完成标准 done-when：
- 不引入新的 TypeScript 错误。
- 不改变现有 API 返回结构。
- 不增加新的第三方依赖。
- 保持现有组件 props 兼容。
```

## 测试完成标准

```text
完成标准 done-when：
- 新增一个针对空输入的单元测试。
- 现有测试全部通过。
- npm run build 成功。
```

## 回归完成标准

```text
完成标准 done-when：
- 按照复现步骤操作，原 bug 不再出现。
- 相邻功能不受影响。
- 增加回归测试，防止同类问题再次出现。
```

## 文档完成标准

```text
完成标准 done-when：
- README 增加本功能的使用说明。
- 示例命令可以直接复制运行。
- 文档中说明了常见错误和排查方式。
```

# 差 Prompt 与好 Prompt

## 差的 Prompt

```text
帮我修一下登录页按钮样式。
```

它的问题是：没有相关文件、没有具体现象、没有约束、没有验证方式，也没有完成标准。

## 好的 Prompt

```text
目标：
修复登录页在移动端宽度下，提交按钮右侧溢出容器的问题。

上下文：
相关文件：
- src/pages/LoginPage.tsx
- src/styles/login.css

当前问题：
在 iPhone 13 尺寸下，登录按钮宽度超出表单容器，导致页面横向滚动。

约束：
- 只修改 LoginPage.tsx 和 login.css。
- 不修改登录 API、状态管理和路由逻辑。
- 不引入新的 UI 库。
- 优先使用现有 CSS 类。

验证：
- 运行 npm run build。
- 使用浏览器开发者工具切换到 iPhone 13 尺寸。
- 打开 /login 页面检查是否还有横向滚动。

完成标准 done-when：
- /login 页面在 iPhone 13 尺寸下没有横向滚动。
- 登录按钮宽度不超过表单容器。
- 桌面端布局不发生明显变化。
- npm run build 通过。
- 最终回复说明修改了哪些文件，以及如何验证。

执行要求：
请先复述任务理解和约束，再给出修改计划，确认后开始修改。
```

# 常见错误

## 错误 1：完成标准太抽象

不要只写“功能正常”。要写清楚用户能做什么、异常怎么表现、哪些测试或构建必须通过。

## 错误 2：只有技术标准，没有业务标准

`npm test` 通过不等于业务正确。完成标准里要同时包含业务结果和技术结果。

## 错误 3：没有说明不能做什么

“页面样式更好看”会让 Codex 很容易大改。把“不重写页面结构、不修改接口逻辑、不引入新 UI 库”写进约束里。

## 错误 4：把验证和完成标准混在一起

不推荐：

```text
完成标准：
- 运行 npm test。
```

更推荐：

```text
验证：
- 运行 npm test。

完成标准 done-when：
- npm test 全部通过。
```

# 从简单任务到复杂任务

简单任务可以只写五段式：

```text
目标：修复 {{问题描述}}。
上下文：相关文件是 {{file1}}、{{file2}}。
约束：最小改动，不修改无关文件，不改变现有 API。
验证：运行 {{test command}} 和 {{build command}}。
完成标准 done-when：问题不再出现，测试通过，构建通过，没有新的类型错误。
```

复杂任务建议升级为完整任务说明书，包含角色、背景、当前行为、期望行为、执行要求、输出格式。完整模板我拆到了 [Codex done-when 任务模板](/prompts/prompt-done-when-task)，便于复制使用。

# 与站内资料的关系

- [Codex Prompt Patterns Research](../research/prompt-patterns.md)：适合作为这页的方法来源，里面保留外部资料和社区讨论脉络。
- [Community Codex Themes](../research/community-codex-themes.md)：解释为什么社区反复强调验证、边界、checkpoint 和退出条件。
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)：适合作为速查页，快速回顾各种任务模板的共同骨架。
- [通用任务骨架](/prompts/prompt-universal-task-skeleton)：适合复制最短版本。
- [Bugfix 模板](/prompts/prompt-bugfix)、[Feature 模板](/prompts/prompt-feature)、[Review 模板](/prompts/prompt-review)、[Refactor 模板](/prompts/prompt-refactor)：适合按任务类型继续细化。

# 测试与验证方法
- 用一个真实小任务套五段式模板，看 Codex 是否能复述目标、约束和验证方式。
- 检查最终回复是否包含修改摘要、验证结果和风险点。
- 如果输出跑偏，优先补充约束和 done-when，而不是只要求“再认真一点”。

# 下一步学习建议
- 先复制 [Codex done-when 任务模板](/prompts/prompt-done-when-task)，改成你的个人模板。
- 再看 [Codex Workflows](../wiki/codex-workflows.md)，把 prompt 放进“计划、执行、验证”的完整流程。
- 最后用一个真实 bugfix 练习 [Bugfix 模板](/prompts/prompt-bugfix)。

# 双向链接
- [Codex Prompt Patterns Research](../research/prompt-patterns.md)
- [Community Codex Themes](../research/community-codex-themes.md)
- [Codex Prompt Patterns](../wiki/codex-prompt-patterns.md)
- [Codex Workflows](../wiki/codex-workflows.md)
- [Codex Testing Validation](../wiki/codex-testing-validation.md)

# 可复制 Prompt
```text
目标：{{goal}}
上下文：{{relevant_files / repo / background}}
约束：{{must_not_change}}
验证：{{tests / build / screenshot / review}}
完成标准 done-when：{{observable_acceptance_criteria}}
输出格式：请总结修改内容、验证结果和仍然存在的风险。
```
