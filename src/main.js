import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Video from 'video.js'
import "video.js/dist/video-js.css"
import "videojs-flash"
import "./assets/css/player.scss"
import video_zhCN from 'video.js/dist/lang/zh-CN.json'



Video.addLanguage('zh_CN',video_zhCN)

createApp(App).use(router).mount('#app')
