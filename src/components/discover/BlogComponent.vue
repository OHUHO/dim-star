<template>
	<div class="header anim" style="--delay: 0s">Discover</div>
	<div class="blogs">
		<div class="blog anim" style="--delay: .1s">
			<div class="title">How to do Basic Jumping and how to landing safely</div>
			
			<div class="author">
				<div class="author-wrapper">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
				</div>
				<div class="detail">
					<div class="name">Thomas Hope</div>
					<div class="info">53K views <span class="separate"></span>2 weeks ago</div>
				</div>
			</div>
			<div class="time">7 min</div>
		</div>
		
		<div class="blog anim" style="--delay: .2s">
			<div class="title">Skateboard Tips You need to know</div>
			
			<div class="author tips">
				<div class="time">7 min</div>
				<div class="author-wrapper">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
				</div>
				<div class="detail">
					<div class="name">Tony Andrew</div>
					<div class="info">53K views <span></span>2 weeks ago</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BlogComponent"
}
</script>

<style scoped lang="scss">

.header {
	font-size: 30px;
	color: #fff;
	font-weight: 700;
	padding-bottom: 20px;
	position: sticky;
	top: 0;
	left: 0;
	background: linear-gradient(
			to bottom,
			#1f1d2b 0%,
			#1f1d2b 78%,
			rgb(31 29 43 / 0%) 100%
	);
	z-index: 11;
}

.blogs{
	display: flex;
	align-items: center;
	
	.blog {
		background-image: url(https://assets.codepen.io/3364143/skate-removebg-preview.png);
		background-size: 80%;
		background-position-x: 150px;
		background-color: #31abbd;
		display: flex;
		flex-direction: column;
		text-align: left;
		width: 65%;
		padding: 20px;
		border-radius: 20px;
		align-self: stretch;
		overflow: hidden;
		position: relative;
		transition: background 0.3s;
		background-repeat: no-repeat;
	
		
		.title{
			font-size: 25px;
			max-width: 12ch;
			font-weight: 600;
			letter-spacing: 1px;
			color: #fff;
			margin-bottom: 30px;
		}
		
		.author {
			display: flex;
			align-items: center;
			//padding-bottom: 10px;
			
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
			
			.detail{
				margin-left: 16px;
				.name {
					font-size: 15px;
					color: #fff;
					font-weight: 500;
					margin-bottom: 8px;
				}
				.info {
					font-size: 13px;
					font-weight: 400;
					color: #fff;
					
					.separate {
						width: 3px;
						height: 3px;
						display: inline-block;
						vertical-align: middle;
						border-radius: 50%;
						background-color: #fff;
						margin: 0 6px;
					}
				}
			}
			
		}
		
		.tips {
			flex-direction: column-reverse;
			align-items: flex-start;
		}
		
		.time {
			background: rgba(21, 13, 13, 0.44);
			color: #fff;
			padding: 3px 8px;
			font-size: 12px;
			border-radius: 6px;
			position: absolute;
			right: 20px;
			bottom: 20px;
		}
	}
	
	.blog + .blog {
		margin-left: 20px;
		width: 35%;
		background-image: url(https://assets.codepen.io/3364143/skate-removebg-preview.png);
		background-color: unset;
		background-color: darkseagreen;
		background-position-x: 0;
		background-size: 139%;
		filter: saturate(1.4);
		img {
			border-color: rgb(255 255 255 / 75%);
			margin-top: 14px;
		}
		.author-wrapper svg {
			border-color: #ffe6b2;
			color: #e7bb7d;
		}
		.detail {
			margin-left: 0;
		}
	}
	
}

@media screen and (max-width: 680px) {
	.blogs{
		display: flex;
		flex-direction: column;
		width: 100%;
		.blog{
			width: 100%;
		}
		.blog + .blog{
			width: 100%;
			margin-left: 0;
			margin-top: 20px;
			//background-color: red;
		}
	}
	
	
}


</style>