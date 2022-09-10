<template>
	<div class="blogs">
		<div class="blog anim" style="--delay: .1s">
			<div class="title">皮卡丘 | 不干什么，就为了干这个世界！ </div>
			
			<div class="author">
				<div class="author-wrapper">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img src="../../assets/img/pikachu.png"  alt=""/>
				</div>
				<div class="detail">
					<div class="name">皮卡丘</div>
					<div class="info">690K 浏览 <span class="separate"></span>1 天前</div>
				</div>
			</div>
			<div class="time">6 分钟</div>
		</div>
		
		<div class="blog anim" style="--delay: .2s">
			<div class="title">年度最佳 | 2022年度颜色排行榜 </div>
			
			<div class="author tips">
				<div class="time">4 分钟</div>
				<div class="author-wrapper">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img src="https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg"  alt=""/>
				</div>
				<div class="detail">
					<div class="name">潘通色彩</div>
					<div class="info">39K 浏览 <span></span>10 天前</div>
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

.blogs{
	display: flex;
	align-items: center;
	
	.blog {
		background-image: url(../../assets/img/pikachu.png);
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
			max-width: 20ch;
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
		background-image: url(../../assets/img/beautiful_girl.png);
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