<template>
	<div class="header">
		<div class="search-bar" :class="{'search-bar-active':isChange}">
			<input
				@focusin="changeStyle"
				@focusout="changeStyle"
				type="text"
				placeholder="轻松查询需要内容~~~">
		</div>
		<div class="settings">
			<img class="img" src="../assets/img/head.jpg" alt="">
			<div class="name">京茶吉鹿</div>
			<svg viewBox="0 0 492 492" fill="currentColor"><path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path></svg>
			<div class="notify">
				<div class="notification"></div>
				<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z" /></svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HeaderComponent",
	data(){
		return{
			isChange: false
		}
	},
	methods:{
		changeStyle(){
			this.isChange = !this.isChange
		}
	}
}
</script>

<style scoped lang="scss">

.header {
	display: flex;
	align-items: center;
	flex-shrink: 0;
	padding: 30px;
	
	.search-bar {
		height: 34px;
		display: flex;
		width: 100%;
		max-width: 450px;
		
		input {
			width: 100%;
			height: 100%;
			border: none;
			background-color: var(--button-bg);
			border-radius: 8px;
			font-family: var(--body-font);
			font-size: 14px;
			font-weight: 500;
			padding: 0 40px 0 16px;
			box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
			background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: 96%;
			color: #fff;
		}
	}
	.search-bar-active{
		border: 1px solid #ada7da;
		border-radius: 8px;
	}
	
	
	.settings {
		display: flex;
		align-items: center;
		padding-left: 20px;
		flex-shrink: 0;
		margin-left: auto;
		
		.img {
			width: 30px;
			height: 30px;
			flex-shrink: 0;
			object-fit: cover;
			border-radius: 50%;
		}
		.name {
			color: #fff;
			font-size: 14px;
			margin: 0 6px 0 12px;
			@media screen and (max-width: 575px) {
				display: none;
			}
		}
		
		svg {
			width: 10px;
			flex-shrink: 0;
			@media screen and (max-width: 575px) {
				display: none;
			}
		}
		.notify {
			position: relative;
			svg {
				width: 20px;
				margin-left: 24px;
				flex-shrink: 0;
			}
			.notification {
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: #ec5252;
				position: absolute;
				right: 1px;
				border: 1px solid var(--theme-bg);
				top: -2px;
				@media screen and (max-width: 575px) {
					display: none;
				}
			}
		}
	}

}

@media screen and (max-width: 475px) {
	.header {
		padding: 20px;
	}
}
</style>