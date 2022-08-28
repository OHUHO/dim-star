<template>
	<div class="small-header anim" style="--delay: .3s">Most Watched</div>
	<div class="videos">
		<div class="video anim" style="--delay: .4s">
			<div class="time">8 min</div>
			<div class="video-wrapper">
				<video muted="">
					<source src="" type="video/mp4">
				</video>
				<div class="author-wrapper author">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img class="img" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
				</div>
			</div>
			<div class="by">Andy William</div>
			<div class="name">Basic how to ride your skateboard comfortly</div>
			<div class="view">54K views<span class="seperate video-seperate"></span>1 week ago</div>
		</div>
		<div class="video anim" style="--delay: .5s">
			<div class="time">8 min</div>
			<div class="video-wrapper">
				<video muted="">
					<source src="https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
				</video>
				<div class="author-wrapper author">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img class="img" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
				</div>
			</div>
			<div class="by">Andy William</div>
			<div class="name">Basic how to ride your skateboard comfortly</div>
			<div class="view">54K views<span class="seperate video-seperate"></span>1 week ago</div>
		</div>
		<div class="video anim" style="--delay: .6s">
			<div class="time">8 min</div>
			<div class="video-wrapper">
				<video muted="">
					<source src="https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
				</video>
				<div class="author-wrapper author">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img class="img" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
				</div>
			</div>
			<div class="by">Andy William</div>
			<div class="name">Basic how to ride your skateboard comfortly</div>
			<div class="view">54K views<span class="seperate video-seperate"></span>1 week ago</div>
		</div>
		<div class="video anim" style="--delay: .7s">
			<div class="time">8 min</div>
			<div class="video-wrapper">
				<video muted="">
					<source src="https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
				</video>
				<div class="author-wrapper author">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img class="img" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
				</div>
			</div>
			<div class="by">Andy William</div>
			<div class="name">Basic how to ride your skateboard comfortly</div>
			<div class="view">54K views<span class="seperate video-seperate"></span>1 week ago</div>
		</div>
		<div class="video anim" style="--delay: .8s">
			<div class="time">8 min</div>
			<div class="video-wrapper">
				<video muted="">
					<source src="https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
				</video>
				<div class="author-wrapper author">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
					<img class="img" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
				</div>
			</div>
			<div class="by">Andy William</div>
			<div class="name">Basic how to ride your skateboard comfortly</div>
			<div class="view">54K views<span class="seperate video-seperate"></span>1 week ago</div>
		</div>
		
	</div>
</template>

<script>
export default {
	name: "VideoComponent"
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
			
			video {
				max-width: 100%;
				width: 100%;
				border-radius: 20px 20px 0 0;
				display: block;
				cursor: pointer;
				transition: 0.4s;
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
			padding: 20px 20px 0px;
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