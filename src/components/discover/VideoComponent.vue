<template>
	<div class="small-header anim" style="--delay: .3s">最多阅读</div>
	<div class="videos">
		<div
			class="video anim"
			v-for="item in watchList"
			:key="item.id"
			:style="delay(item.id)"
		>
			<div class="time">{{ item.time}}</div>
			<div class="video-wrapper">
				<img :src="item.sourceSrc" >
				<div class="author-wrapper author">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img class="img" :src="item.img" />
				</div>
			</div>
			<div class="by" :class="{offline:item.isOffline}">{{item.by}}</div>
			<div class="name">{{item.name}}</div>
			<div class="view">{{ item.view1 }}<span class="separate video-separate"></span>{{item.view2}}</div>
		</div>
		
	</div>
</template>

<script>
export default {
	name: "VideoComponent",
	data(){
		return {
			watchList:[
				{id:0,time:'8分钟',sourceSrc:'https://img-blog.csdnimg.cn/fa3068595a6b4ab08a53bbf9a701d174.png',img:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',by:'京茶吉鹿',name:'教你快速开发一款高端、实用的网页！',view1:'120 浏览量',view2:'30 秒前',isOffline: false},
				{id:1,time:'3分钟',sourceSrc:'https://tse1-mm.cn.bing.net/th/id/OIP-C.RcjQN5XLfQ6Bq_ZU0DjXEgHaFP?w=264&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7',img:'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',by:'二月',name:'如何面对一份自己不喜欢的工作？',view1:'99浏览量',view2:'3 分钟前',isOffline: true},
				{id:2,time:'10分钟',sourceSrc:'https://tse3-mm.cn.bing.net/th/id/OIP-C.vXOyUC25GO7XPIsNf98SiwHaE8?w=270&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7',img:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',by:'雷旺',name:'人生需要按照计划一步步进行吗？',view1:'23k 浏览量',view2:'1 小时前',isOffline: false},
				{id:3,time:'2分钟',sourceSrc:'https://tse2-mm.cn.bing.net/th/id/OIP-C.TwZfHULPCojybK45_67BwgAAAA?w=264&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',img:'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg',by:'William',name:'你想在30岁之前完成那些事儿？',view1:'12 浏览量',view2:'20分钟前',isOffline: false},
				{id:4,time:'30分钟',sourceSrc:'https://tse1-mm.cn.bing.net/th/id/OIP-C.EoZVouvhTO6eSgQZFKGnNQHaEn?w=277&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',img:'https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg',by:'张三',name:'爱一个人的时候，是爱这个人还是爱这个人的感觉？',view1:'123k 浏览量',view2:'3 天前',isOffline: true},
				{id:5,time:'7分钟',sourceSrc:'https://tse4-mm.cn.bing.net/th/id/OIP-C.0zKT1Irqwd461cdovgvipAHaEL?w=296&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7',img:'https://pic1.zhimg.com/v2-30abf710aa138aff0a52b43552935578_r.jpg',by:'Jerry',name:'那句台词里的情谊，最让你回味无穷？',view1:'100 浏览量',view2:'1 年前',isOffline: false},
			]
		}
	},
	methods:{
		delay(id){
			return "--delay:" + ((id+4)/10) + "s"
		}
	}
}
</script>

<style scoped lang="scss">

.small-header {
	font-size: 24px;
	font-weight: 500;
	color: #fff;
	margin: 30px 0 20px;
}
.videos {
	display: grid;
	width: 100%;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	
	.video {
		position: relative;
		background-color: var(--video-bg);
		border-radius: 20px;
		overflow: hidden;
		transition: 0.4s;
		
		.time {
			position: absolute;
			background: rgba(21, 13, 13, 0.44);
			color: rgb(255 255 255 / 85%);
			padding: 3px 8px;
			font-size: 12px;
			border-radius: 6px;
			top: 10px;
			z-index: 1;
			right: 8px;
		}
		
		&-wrapper {
			position: relative;
			
			img{
				width: 100%;
				height: 120px;
				display: block;
				cursor: pointer;
				transition: 0.4s;
				//background-color: #6bbb9e;
				
			}
			
			.author-wrapper {
				position: relative;
				flex-shrink: 0;
				svg {
					width: 16px;
					padding: 2px;
					background-color: #fff;
					color: #0daabc;
					border-radius: 50%;
					border: 2px solid #0daabc;
					position: absolute;
					bottom: 5px;
					right: 0;
				}
				
				img{
					width: 52px;
					height: 52px;
					border: 1px solid rgb(255 255 255 / 75%);
					padding: 4px;
					border-radius: 50%;
					object-fit: cover;
				}
			}
			
			.author {
				position: absolute;
				right: 10px;
				transition: 0.4s;
				bottom: -25px;
				svg {
					background-color: #0aa0f7;
					color: #fff;
					border-color: var(--video-bg);
				}
			}
			
		}
		.by {
			transition: 0.3s;
			padding: 20px 20px 0;
			display: inline-flex;
			position: relative;
			&:before {
				content: "";
				background-color: #22b07d;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				position: absolute;
				top: 26px;
				right: 5px;
			}
			&.offline:before {
				background-color: #ff7551;
			}
		}
		.name {
			color: #fff;
			font-size: 16px;
			line-height: 1.4em;
			padding: 12px 20px 0;
			overflow: hidden;
			background-color: var(--video-bg);
			z-index: 9;
			position: relative;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.view {
			font-size: 12px;
			padding: 12px 20px 20px;
			background-color: var(--video-bg);
			position: relative;
			
			.separate {
				width: 3px;
				height: 3px;
				display: inline-block;
				vertical-align: middle;
				border-radius: 50%;
				background-color: #fff;
				margin: 0 6px;
				&.video-separate {
					background-color: var(--body-color);
				}
			}
		}
		
		&:hover {
			video {
				transform: scale(1.6);
				transform-origin: center;
			}
			.time {
				display: none;
			}
			.author {
				bottom: -65px;
				transform: scale(0.6);
				right: -3px;
				z-index: 10;
			}
			.by {
				opacity: 0;
			}
		}
		
	}
}

@media screen  and (max-width: 900px){
	.videos{
		grid-template-columns: repeat(3,1fr);
	}
}

@media screen  and (max-width: 680px){
	.videos{
		grid-template-columns: repeat(2,1fr);
	}
}
@media screen  and (max-width: 500px){
	.videos{
		grid-template-columns: repeat(1,1fr);
	}
}

</style>