# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## jsx爬坑记录

理解：ts是js的超集，tsx是ts的超集，将 jsx语法转成js的核心是vue内置的babel-plugin-jsx

# 1、https://blog.csdn.net/weixin_44067333/article/details/121647363 provide/inject都必须在setup中使用 异步返回的数据需要先提供出去，再修改
# 2、插槽的写法
```jsx
  <Button
    onClick={() => (this.sysVerify.normalLogin = 11)}
    v-slots={{ // slots 复数，别写掉了
      icon: () => <DownloadOutlined />
    }}
  >
    111
  </Button>
```
# 3、组件自定义事件报错

背景：tsx会对采用大驼峰命名法（PascalCase）的组件进行类型检查，
```jsx
// 普通dom元素tsx检查不会报错
<div onClick={() => {console.log(111)}}>点我</div>
// 自定义组件的props和声明周期也会有正常补全, 但是自定义事件不会提示且会报类型错误
<CustomComp count={1} onClick={() => {console.log(111)}}>点我</CustomComp>
```
解决办法：
1. 组件名由驼峰式改为肉串式，并在组件中注册
- 如果我们在全局或者组件内部局部注册组件，再用短线命名法（kebab-case）在tsx中使用就OK了，避免进入ts的语法检查，缺点无法进入语法检查
- 注意：组件不支持on={{ eventName: this.handleEvent }} 改成 onEventName={this.handleEvent}
```jsx
// 错误示例
<NormalLogin on={{ loginSuccess: this.loginCallback }} />
// 正确示例
<normal-login onLoginSuccess={this.loginCallback} />
```

2. 使用 // @ts-ignore忽略报错，就可以继续享受ts的语法补全和检测
3. 将子组件的类型进行补全：
   [掘金方案A](https://juejin.cn/post/6966856931839311886#heading-1) 和 [掘金方案B](https://juejin.cn/post/6920939733983969294#heading-5)的方法



# model绑定
```jsx
<Form
  {...{
    model: this.formState, // model属性比较特殊，需要用结构赋值方法给到组件
    onFinish: this.handleFinish,
    onFinishFailed: this.handleFinishFailed
  }}
>
```

# 监听props属性
```jsx
  watch(
    // 错误示例：props.pwModalVisible
    // 原因分析：[Vue warn]: Invalid watch source:  false A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types. 
    () => props.pwModalVisible, // 正确示例
    async newVal => {
      if (!newVal) return
      // 获取最新的密码规则配置
      let {
        data: { rows }
      } = await sysetLoadUsingGet(encodeRequest({ datatype: SystemDataType.SercureSet }))
      rows = rows || {} // 初始化默认为空对象
      pwConfigMap.pwd_express = rows.pwd_express || ''
      pwConfigMap.pwd_express_desc = rows.pwd_express_desc ? JSON.parse(rows.pwd_express_desc) : {}
    }
  )
```
