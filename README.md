# cat

> for vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 公共组件BaseButton的调用方法
### 组件已经在main.js里批量注册过，不再需要单独引用
``` bash
    <BaseButton v-on:click="show" text="我是普通按钮"></BaseButton>
    <BaseButton text="我是大个按钮" :big = 'true'></BaseButton>
    <BaseButton text="我是小个按钮" :small = 'true'></BaseButton>
    <BaseButton text="我是禁用按钮" :disabled = 'true'></BaseButton>
    <BaseButton text="我是无圆角" :notRadius = 'true'></BaseButton>
    <BaseButton text="我是浮动按钮" :fLeft = 'true'></BaseButton>
    <BaseButton text="我是空心小按钮" :small = 'true' :hollow = 'true'></BaseButton>

```
## 公共组件BaseAlertMsg的调用方法
``` bash
    <ul>
      <li>
        <BaseButton text='调出弹框(confirm)' @click="openAlert1"></BaseButton>
        <BaseAlertMsg type="confirm" :cancelText="cancelText" :confirmText="confirmText" @confirm="clickConfirm()" v-on:cancel="clickCancel()" :title="title" :content="content" v-model="showAlert1"></BaseAlertMsg>
      </li>
      <li>
        <BaseButton text='调出弹框(非confirm)' @click="openAlert2"></BaseButton>
        <BaseAlertMsg :confirmText="confirmText" @confirm="know()" :title="title" :content="content" v-model="showAlert2"></BaseAlertMsg>
      </li>
    </ul>
```