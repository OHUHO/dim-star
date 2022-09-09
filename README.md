# 熹微README.md


## 1、项目简介

**熹微**（dim-star），名字来源于晋代田园派诗人陶渊明的《归去来兮辞》：

问征夫以前路，恨晨光之熹微，

因为整个界面的风格是较为暗淡的，页面中的组件又总是给人微亮的感受，所以以熹微来命名。

熹微是基于vue框架开发的只包含前端页面的响应式网页，整个页面的响应式布局可以很好的展示组件随着页面的尺寸的变化而变化。



## 2、项目环境搭建

1. 项目创建

    - 创建项目 dim-star

    ```bash
    vue create dim-star
    ```

    - 选择Vue的版本

        **Default ([Vue 3] babel, eslint)**

        

2. 添加项目所需依赖

    - 添加 router

        ```bash
        vue add router
        ```

    - df

        ```bash
        npm install sass-loader@7.3.1 sass@1.26.5  --save-dev
        ```

        

    - 



## 3、项目开发

### 3.1、网页基础配置

#### ① 在 public/index.html文件中写入如下内容

```html
<style>
    *{
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }
</style>
```

#### ② 删除自带的组件等信息

- views/AboutView.vue
- views/HomeView.vue
- components/HelloWorld.vue
- 清除router/index.js中无效的路由信息
- 清除views/App.vue中的无效内容



### 3.2、配置App.vue

在App.vue文件中的template标签中写入如下内容

```html
<div class="home-page">
    <div class="container">
        <!--左侧滑动条组件-->
        <div class="wrapper">
            <!--头部组件-->

            <div class="main-container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
```









































 







