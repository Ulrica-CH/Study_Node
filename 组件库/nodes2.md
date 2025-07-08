## 色值体系约定
- 针对不同的颜色体系,比如基础色,提醒色按照层级做好全局的定义,在使用时候直接 var 变量进行取值,同时对应暗黑/明亮两种模式
- theme.css
    - 亮模式
    - 暗黑模式
        - :root[data-color-schema="dark"]
    - 颜色配置
        - --xy-color-primary-0: #e6f7ff
        - --xy-color-primary-1: #bae7ff
        - 分层级
- 换肤
    - 前景色
    - 背景色

## 构建系统
- 分为两种构建形式
    - 子包跟随主应用一起构建运行
    - 子包独立打包,主应用使用打包构建产物
- 打包方式
    - 采用 tsup
    - ts 编写项目,那么忙吗每个子包应该有自己的 ts 配置,继承主应用
    - 同时配置 tsup.config.ts
        - 可以通过 defineConfig 数组格式来配置多种产物并输出到不同目录下
## 文档
- apps/website
- 使用 dumi ? 版本依赖适配坑点较多
    - npx create-dumi
    - .dumirc.ts
    - 去掉多余配置,跟随主包
    - 安装主题依赖来更改全局样式
    - 子包使用子包(dumi 的 docs 要依赖 ui 子项目的 dist 产物来写文档)
        - "@xy-ui":"workspace:*"
        - 相当于在工作区寻找子包,创建个软连接实际
        - 被导入包要配置出口 (重要)
            - module:"es/index.js"
            - types:es/index.d.ts
        
        - .dumirc.ts里配置支持热更新
            - resolve
                - entryFile
            - alias
            - 同时 ui 包要 ts --watch打开热更新(修改自动编译到 dist)

## 样式体系 Provider

## 组件设计
- 定义接口协议,props
- 定义样式体系 不同变体对应的样式不同 采用动态 css-in-js 方案 styled-components 