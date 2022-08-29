<template>
	<div class="chat">
		<div class="header anim">在线聊天
			<span>
				<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.212 7.762c0 2.644-2.163 4.763-4.863 4.763-2.698 0-4.863-2.119-4.863-4.763C4.486 5.12 6.651 3 9.35 3c2.7 0 4.863 2.119 4.863 4.762zM2 17.917c0-2.447 3.386-3.06 7.35-3.06 3.985 0 7.349.634 7.349 3.083 0 2.448-3.386 3.06-7.35 3.06C5.364 21 2 20.367 2 17.917zM16.173 7.85a6.368 6.368 0 01-1.137 3.646c-.075.107-.008.252.123.275.182.03.369.048.56.052 1.898.048 3.601-1.148 4.072-2.95.697-2.675-1.35-5.077-3.957-5.077a4.16 4.16 0 00-.818.082c-.036.008-.075.025-.095.055-.025.04-.007.09.019.124a6.414 6.414 0 011.233 3.793zm3.144 5.853c1.276.245 2.115.742 2.462 1.467a2.107 2.107 0 010 1.878c-.531 1.123-2.245 1.485-2.912 1.578a.207.207 0 01-.234-.232c.34-3.113-2.367-4.588-3.067-4.927-.03-.017-.036-.04-.034-.055.002-.01.015-.025.038-.028 1.515-.028 3.145.176 3.747.32z" /></svg>
				90,338 人
			</span>
		</div>
		<div class="messages">
			<div
				class="message anim"
				v-for="item in messages"
				:key="item.id"
				:style="delay(item.id)"
			>
				<div class="author-wrapper">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
					<img class="author-img" :src="item.img"  alt=""/>
				</div>
				<div class="msg-wrapper">
					<div class="name" :class="{offline:item.isOffline}"> {{item.name}}</div>
					<div class="content"> {{item.desc}}</div>
				</div>
			</div>
			
		</div>
		<div class="footer anim" style="--delay: .1s">
			<input type="text" placeholder="发表你的想法">
		</div>
	</div>
</template>

<script>
export default {
	name: "ChatComponent",
	data(){
		return{
			messages:[
				{id:0,img:'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',name:'张子涵',desc:'欢迎大家发表自己的态度',isOffline:false},
				{id:1,img:'https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg',name:'Jerry',desc:'共同营造美好的网络环境',isOffline:true},
				{id:2,img:'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',name:'王丽华',desc:'哈哈哈哈，大家一起加油！',isOffline:false},
				{id:3,img:'https://pic1.zhimg.com/v2-30abf710aa138aff0a52b43552935578_r.jpg',name:'Aubuary',desc:'熹微网站欢迎大家的到来',isOffline:true},
				{id:4,img:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',name:'杜丽君',desc:'欢迎大家来到我的开源项目',isOffline:true},
			]
		}
	},
	methods:{
		delay(id){
			return "--delay:" + ((id+1)/10) + "s"
		}
	}
}
</script>

<style scoped lang="scss">

.chat{
	background-color: #252836;
	border-radius: 20px;
	padding: 0 20px;
	max-height: 414px;
	overflow: auto;
	
	.header{
		display: flex;
		align-items: center;
		padding: 20px 0;
		font-size: 16px;
		font-weight: 600;
		color: #fff;
		position: sticky;
		top: 0;
		background-color: #252836;
		left: 0;
		z-index: 1;
		border-bottom: 1px solid var(--border-color);
		svg {
			width: 15px;
			margin-right: 6px;
			flex-shrink: 0;
		}
		span {
			margin-left: auto;
			color: var(--body-color);
			font-size: 12px;
			display: flex;
			align-items: center;
		}
	}

	.messages{
		padding-bottom: 1px;
		.message {
			display: flex;
			align-items: center;
			margin-top: 18px;
			&:last-child {
				margin-bottom: 18px;
			}
			
			.author-wrapper {
				position: relative;
				flex-shrink: 0;
				
				svg {
					width: 15px;
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
					//border: 1px solid rgb(255 255 255 / 75%);
					padding: 4px;
					border-radius: 50%;
					object-fit: cover;
				}
			}
			
			.msg-wrapper{
				margin-left: 12px;
				.name {
					font-size: 13px;
					
					margin-bottom: 8px;
					color: #fff;
					display: flex;
					align-items: center;
					&:after {
						content: "";
						width: 6px;
						height: 6px;
						background-color: #22b07d;
						border-radius: 50%;
						margin-left: 8px;
						display: inline-block;
					}
					&.offline:after {
						background-color: #ff7551;
					}
				}
				.content {
					font-size: 12px;
					line-height: 1.4em;
					max-width: 26ch;
					display: -webkit-box;
					overflow: hidden;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
	.footer{
		display: flex;
		align-items: center;
		position: sticky;
		bottom: 0;
		left: 0;
		//width: calc(100% + 20px);
		width: 100%;
		padding-bottom: 12px;
		background-color: #252836;
		
		input {
			width: 100%;
			border: 0;
			background-color: #2d303e;
			border-radius: 20px;
			font-size: 12px;
			color: #fff;
			//margin-left: -10px;
			padding: 12px 40px;
			font-weight: 500;
			font-family: var(--body-font);
			background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.48 6.47 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10C6.47 22 2 17.52 2 12zm5.52 1.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.19.54 1.19 1.2 0 .66-.53 1.2-1.19 1.2zM10.8 12c0 .66.54 1.2 1.2 1.2.66 0 1.19-.54 1.19-1.2a1.194 1.194 0 10-2.39 0zm4.48 0a1.195 1.195 0 102.39 0 1.194 1.194 0 10-2.39 0z' fill='%236c6e78'/%3e%3c/svg%3e");
			background-repeat: no-repeat;
			background-size: 24px;
			background-position: 8px;
			&::placeholder {
				color: #6c6e78;
			}
		}
		&:before {
			content: "";
			position: absolute;
			background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z'/%3e%3c/svg%3e");
			background-repeat: no-repeat;
			background-size: 14px;
			background-position: center;
			width: 18px;
			height: 18px;
			background-color: #6c5ecf;
			padding: 4px;
			border-radius: 50%;
			right: 16px;
		}
	}
}


</style>
