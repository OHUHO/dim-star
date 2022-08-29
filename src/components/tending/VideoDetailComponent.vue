<template>
	<div class="video-box">
		<div class="video-content">
			<div class="video-wrapper anim" style="--delay: .1s">
				<div class="author-portraits">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
				</div>
				<div class="author-other">
					<div class="name">京茶吉鹿</div>
					<div class="sub">9,023,499 订阅</div>
				</div>
				<div class="button">
					<button class="like">
						<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z" /></svg>
						分享
					</button>
					<button class="like">
						<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.85 2.5c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.81 38.456 38.456 0 01-6.33 4.96l-.25.15-.26-.16a38.093 38.093 0 01-6.37-4.96 12.933 12.933 0 01-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12c.28-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.125.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z" /></svg>
						关注
					</button>
				</div>
			</div>
			<div class="title anim" style="--delay: .2s">幻昼：音乐最妙的地方，是念念不忘的“回响”</div>
			<div class="subtitle anim" style="--delay: .3s">你一定听过今天我们为大家推荐的这首歌，但你或许因为它在某类视频中的频繁出现而消磨了期待和喜爱，甚至不能明确叫出它的名字—— Illusionary Daytime（幻昼）。 其实，这首歌曲全程250秒，有一个很美的名字，有很好听的曲调。 今天我们邀请到这首歌的创作者Shirfine和大家谈谈关于这首歌的故事。</div>
			<div class="subtitle anim" style="--delay: .4s">1.请用三个词来简单介绍一下自己——</div>
			<div class="subtitle anim" style="--delay: .5s">追梦人，实干家，深思者。</div>
			<div class="subtitle anim" style="--delay: .6s">2.如果把《幻昼》拟人化，它在你心中是什么形象？</div>
			<div class="subtitle anim" style="--delay: .7s">一个环抱双膝，坐在云端，离世间万象有点距离的人。</div>
			<div class="subtitle anim" style="--delay: .8s">3.你在创作的过程中，加入了哪些自己的理解？ </div>
			<div class="subtitle anim" style="--delay: .9s">回溯到9年前创作《Illusionary Daytime》的那个时期，我还是一个非常依赖直觉和感受的人。情绪涌动是触发做音乐的唯一原因，而当时是我人生最压抑的一段时期，创作是为了非常纯粹地输出与释放，为了治愈与平静。</div>
			
		</div>
	</div>
</template>

<script>
export default {
	name: "VideoDetailComponent"
}
</script>

<style scoped lang="scss">

.video-box {
	display: flex;
	margin-top: 30px;
	width: 100%;
	
	.video-content {
		width: 100%;
		
		.video-wrapper{
			display: flex;
			align-items: center;
			
			.author-portraits {
				margin-right: 12px;
				object-fit: cover;
				flex-shrink: 0;
				border-radius: 50%;
				position: relative;
				top: 0;
				left: 0;
				
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
					//border: 1px solid rgb(255 255 255 / 75%);
					border: 0;
					padding: 4px;
					border-radius: 50%;
					object-fit: cover;
				}
			}
			
			.author-other{
				.name {
					margin-bottom: 8px;
					color: #fff;
					display: flex;
					align-items: center;
					/*&:after {
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
					}*/
				}
				.sub{
					font-size: 12px;
				}
			}
			
			.button{
				display: flex;
				align-items: center;
				margin-left: auto;
				
				.like {
					display: flex;
					align-items: center;
					background-color: var(--button-bg);
					color: #fff;
					border: 0;
					font-family: var(--body-font);
					border-radius: 8px;
					padding: 10px 16px;
					font-size: 14px;
					cursor: pointer;
					
					svg {
						width: 18px;
						flex-shrink: 0;
						margin-right: 10px;
						padding: 0;
					}
					
				}
				
				.like + .like {
					margin-left: 16px;
					background-color: #ea5f5f;
				}
			}
		}
		
		.title{
			font-size: 24px;
			color: #fff;
			line-height: 1.4em;
			margin: 16px 0 20px;
		}
		.subtitle{
			font-size: 14px;
			line-height: 1.5em;
			//max-width: 60ch;
			width: 100%;
		}
		.subtitle + .subtitle {
			margin-top: 16px;
		}
	}
}

@media screen and (max-width: 640px) {
	.video-wrapper{
		flex-direction: column;
		align-items: center;
		
		.author-other{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		.button{
			margin-right: auto;
			margin-top: 10px;
		}
	}
	.title{
		text-align: center;
	}
}


</style>