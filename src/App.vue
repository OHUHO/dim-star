<template>
	
	<div class="home-page">
		<div class="container">
			<!--左侧滑动条组件-->
			<side-bar-component></side-bar-component>
			
			<div class="wrapper">
				<!--头部组件-->
				<header-component></header-component>
				
				<div class="main-container">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
	
</template>


<script>
import SideBarComponent from "@/components/SideBarComponent";
import HeaderComponent from "@/components/HeaderComponent";


export default {
	components: {HeaderComponent, SideBarComponent},
	data(){
		return{
			isRouterAlive: true
		}
	},
	/*provide(){
		return{
			reload: this.reload
		}
	},
	methods:{
		reload(){
			this.isRouterAlive = false
			this.$nextTick(() =>{
				this.isRouterAlive = true
			})
		}
	}*/
}
</script>


<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

// 所有页面的动画效果
.anim {
	animation: bottom 0.8s var(--delay) both;
}
@keyframes bottom {
	0% {
		transform: translateY(100px);
		opacity: 0;
	}
	
	100% {
		opacity: 1;
		transform: none;
	}
}

//页面公共属性设置
:root {
	--body-font: "Inter", sans-serif;
	--theme-bg: #1f1d2b;
	--body-color: #808191;
	--button-bg: #353340;
	--border-color: rgb(128 129 145 / 24%);
	--video-bg: #252936;
	--delay: 0s;
}

.home-page {
	font-family: var(--body-font);
	color: var(--body-color);
	background-image: url(./assets/full-background.png);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-blend-mode: color-dodge;
	background-color: rgba(18, 21, 39, 0.86);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1em 2em;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	&:before {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
				163deg,
				rgba(31, 29, 43, 1) 21%,
				rgba(31, 29, 43, 0.3113620448179272) 64%
		);
		opacity: 0.4;
		content: "";
	}
	
	
	.container {
		background-color: var(--theme-bg);
		max-width: 1240px;
		max-height: 900px;
		height: 95vh;
		display: flex;
		overflow: hidden;
		width: 100%;
		border-radius: 20px;
		font-size: 15px;
		font-weight: 500;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
		position: relative;
		
		
		.wrapper {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			
			
			.main-container {
				display: flex;
				flex-direction: column;
				padding: 0 30px 30px;
				flex-grow: 1;
				overflow: auto;
			}
			
		}
	}
	
}


// 浏览器滑动条
::-webkit-scrollbar {
	width: 6px;
	border-radius: 10px;
}

::-webkit-scrollbar-thumb {
	background-color: rgb(21 20 26 / 63%);
	border-radius: 10px;
}


</style>
