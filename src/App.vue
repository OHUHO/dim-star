<template>
	
	<div class="home-page">
		<div class="container">
			<!--左侧滑动条组件-->
			<side-bar-component></side-bar-component>
			
			<div class="wrapper">
				<!--头部组件-->
				<header-component></header-component>
				
				<div class="main-container">
					<!--下面将是路由-->
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
	components: {HeaderComponent, SideBarComponent}
}
</script>


<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

// 所有页面的动画效果
.anim {
	animation: bottom 0.8s var(--delay) both;
}

/*html {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
}*/

img {
	max-width: 100%;
}

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
	background-image: url(https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80);
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

.wrapper {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

.main-container {
	display: flex;
	flex-direction: column;
	padding: 0 30px 30px;
	flex-grow: 1;
	overflow: auto;
}



.seperate {
	width: 3px;
	height: 3px;
	display: inline-block;
	vertical-align: middle;
	border-radius: 50%;
	background-color: #fff;
	margin: 0 6px;
	&.video-seperate {
		background-color: var(--body-color);
	}
}







.video-stats {
	margin-left: 30px;
}






@media screen and (max-width: 475px) {
	.main-container {
		padding: 0 20px 20px;
	}
	
	.sidebar {
		align-items: center;
	}
	body {
		padding: 0;
	}
	.container {
		height: 100vh;
		border-radius: 0;
		max-height: 100%;
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
