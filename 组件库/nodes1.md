# 为什么monorepo
- 管理多个项目
- 更好的控制依赖版本

## 步骤
- npm init -y
- monorepo配置  
    - 位置 paclages
    - 配置 workspace.yaml

## 设计子包
## 调试 dumi
## 规范化设计
- 规范至关重要,尽可能的细
- eslint prettier JS
- stylelint  CSS
- 提交规范(commitlint提交 husky提交拦截)
- 拼写检查(极致规范) 慎用

### eslint
- 版本9+
- lint:es
- 继承规范 @eslint/js files ignores
- typescript-eslint写法不太一样
- 语言选项 languageOptions
    - parser
    - parserOptions
        - project (tsconfig文件定义位置)
        - tsconfigRootDir
- 自定义规则rules
### 拼写检查 cspell
- cspell.json
- custom-words.txt 在cspell.json里配置
### stylelint
- cssinjs
    - parser处理
    - postcss 处理
### 提交规范
- git hook
    - pre-commit
    - commit-msg
- husky 提交拦截
    - npx husky init
    - .husky
        - pre-commit
        - commit-msg
- commitlint
    - 结合 git-cz(commitizen 的命令行别名,格式拦截检查) commitizen(负责“生成”规范的提交信息)
    - commit : "git-cz"
    - commitlint.config.cjs 自定义提交信息
``` json
 "config": {
        "commitizen": {
            "path": "node_modules/cz-git"
        }
    },

```
## 缺陷
- 如果文件过多,检查项目过多,会过于卡顿
## lint-staged
- 只对“暂存区”（即将要提交）git add . 后的文件运行 lint 或其他脚本任务
- 在 pre-commit
    - pnpm spellcheck && npx lint-staged
``` json
 "lint-staged": {
        "*.{md,json}": [
            "prettier --cache --write --no-error-on-unmatched-pattern"
        ],
        "*.{css,less}": [
            "stylelint --fix",
            "prettier --cache --write"
        ],
        "*.{js,jsx}": [
            "eslint --fix",
            "prettier --cache --write"
        ],
        "*.{ts,tsx}": [
            "eslint --fix",
            "prettier --cache --parser=typescript --write"
        ]
    },
```