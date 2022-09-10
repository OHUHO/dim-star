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

        ```shell
        vue add router
        ```

    - 添加 scss 需要的依赖

        ```shell
        npm install sass-loader sass --save-dev
        ```

    - 添加 video 需要的依赖

        ```shell
        npm install video.js
        ```
    
        ```shell
        npm install videojs-flash
        ```
    
        ```shell
        npm install vue-video-player
        ```
    
        

## 3、项目界面搭建

### 3.1、网页基础配置

#### 3.1.1、页面全局配置

在 public/index.html文件中写入如下内容

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

#### 3.1.2、项目初始化

删除创建项目时自带的组件等信息，具体内容如下

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
        <side-bar-component></side-bar-component>
        <div class="wrapper">
            <!--头部组件-->
			<header-component></header-component>
            <div class="main-container">
			
            </div>
        </div>
    </div>
</div>
```

注：因为篇幅问题项目中的scss代码未罗列在页面

### 3.3、页面整体架构

#### 3.3.1、创建左侧导航栏组件

文件创建位置 components/SideBarComponent.vue

#### 3.3.2、创建头部导航栏组件

文件创建位置 components/HeaderComponent.vue

#### 3.3.3、创建主页面

- views/DiscoverView.vue页面
- views/TendingView.vue页面

> 注：本项目仅添加上面创建的两个主页面

#### 3.3.4、配置路由信息

##### ① 配置路由渲染页面

配置文件 App.vue，在main-container容器中添加 router-view，如下

```html
<div class="main-container">
    <router-view></router-view>
</div>
```

##### ② 配置路由入口

配置文件SideBarComponent.vue，在menu容器中未每一项菜单配置 router-link，示例如下

```html
<router-link to="/discover" active-class="active">
    <svg></svg>
    发现
</router-link>
```

##### ③ 在文件router/index.js中添加如下内容

```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/discover',
    children:[
      {
        path: 'discover',
        name: 'discover',
        component: DiscoverView,
      },

      {
        path: 'tending',
        name: 'tending',
        component: TendingView
      },

    ]
  },
]
```



### 3.4、界面预览及布局

![image-20220910162930855](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910162930855.png)



## 4、页面开发

### 4.1、[发现]页面

DiscoverView页面由上下两部分构成，可以拆分为如下三个部分

- header 头部

- BlogComponent 组件
- VideoComponent 组件

在components文件夹下创建discover文件夹并创建上述两个组件

DiscoverView.vue 文件中的代码如下

```html
<template>
    <div class="header anim" style="--delay: 0s">发现</div>
	
	<blog-component></blog-component>
	
	<video-component></video-component>
</template>
```

#### 4.1.1、BlogComponent组件

##### ① 简介

BlogComponent组件分由一两个卡片样式构成，如下所示

- blogs
    - blog
    - blog

##### ② 代码

略……

##### ③ 界面预览

![image-20220910165713176](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910165713176.png)



#### 4.1.2、VideoComponent组件

##### ① 简介

VideoComponent组件由上下两部分构成，上部为小标签，下部为循环生成的videos列表，列表中的子video使用栅格布局，用户可以根据实际的需求来选择生成video的个数

##### ② 代码

略

##### ③ 界面预览

![image-20220910171142528](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910171142528.png)



#### 4.1.3、[发现]界面预览

![image-20220910171248907](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910171248907.png)

![image-20220910171302924](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910171302924.png)



### 4.2、[热门]页面

TendingView页面由左侧流和右侧流两部分构成。其中，左侧流结构由两部分构成，右侧流结构也由两部分构成

- 左侧
    - VideoComponent 组件
    - VideoDetailComonent 组件
- 右侧
    - ChatComponet 组件
    - ChatVipComponent组件

在components文件夹下创建tending文件夹并创建上述的四个组件

TendingView.vue 文件中的代码如下

```html
<template>
	<div class="stream-area">
		<!--左侧流-->
		<div class="video-stream">
			<video-component></video-component>
			<video-detail-component></video-detail-component>
		</div>
		
		<!--右侧流-->
		<div class="chat-stream">
			<chat-component></chat-component>
			<chat-vip-component></chat-vip-component>
		</div>
	</div>
</template>
```



#### 4.2.1、VideoComponent 组件

##### ① 简介

VideoComponent组件为自定义的视频播放组件

文件assets/css/player.scss为我们自定义的视频播放器样式

使用自定义的视频组件，我们可以选择局部或全局导入，此处我们选择全局导入，在main.js中引入自定义视频组件的样式

##### ②代码

在main.js中导入自定义视频播放器组件

```javascript
require("video.js/dist/video-js.css")
require("vue-video-player/")
import "videojs-flash"
require("./assets/css/player.scss")
```

##### ③ 自定义播放器预览

![image-20220910203115145](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910203115145.png)

#### 4.2.2、VideoDetailComponent 组件

##### ① 简介

VideoDetailComponnent组件为视频详情组件，用于展示视频的详细信息，主要包含作者的信息和视频描述等内容

##### ② 代码

略

##### ③ 界面预览

![image-20220910203505702](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910203505702.png)



#### 4.2.3、ChatComponent 组件

##### ① 简介

ChatComponent组件由头部功能提示块、底部的输入框和中间的一个循环生成的消息列表构成，主要展示用户当前的状态和消息

##### ② 代码

略

##### ③ 页面预览

![image-20220910205004399](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910205004399.png)



#### 4.2.4、ChatVipComponent组件

##### ① 简介

ChatVipComponent组件的构成和ChatComponent组件的构成相似，同样是由三部分构成，不同的是中间为话题板块，底部为查看全部按钮

##### ② 代码

略

##### ③ 页面预览

![image-20220910205314110](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910205314110.png)



#### 4.2.5、[热门]界面预览

![image-20220910205550419](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910205550419.png)

![image-20220910205606818](C:\Users\Aubuary\AppData\Roaming\Typora\typora-user-images\image-20220910205606818.png)









































 







