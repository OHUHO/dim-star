<template>
	<!--poster='https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80'-->
	<div class="my-video">
		<video
			class="video-js vjs-default-skin anim"
			width=640px
			height=267px
			controls
			preload="auto"
			poster='https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80'
			data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
		>
			<!--<source src="https://player.vimeo.com/external/390402719.sd.mp4?s=20cfdb066c4253047562b65bd4e411b86a004bc5&profile_id=139&oauth2_token_id=57447761" type='video/mp4' />-->
			<!--<source src="https://player.vimeo.com/external/390402719.sd.mp4?s=20cfdb066c4253047562b65bd4e411b86a004bc5&profile_id=139&oauth2_token_id=57447761" type='video/webm' />-->
			<source src="../../assets/video.mp4" type='video/mp4' />
			<!--<source src="../../assets/video.mp4" type='video/webm' />-->
		</video>
	</div>
	
	<!--width=640px
		height="267px"
		controls
		preload="auto"
		poster='https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80'
		data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'-->
</template>

<script>
import "video.js/dist/video-js.css"
import "videojs-flash"
//import videojs from "video.js"

export default {
	name: "VideoComponent",
	data(){
		return{
		
		}
	},
	/*mounted() {
		this.initVideo();
	},
	methods: {
		initVideo() {
			videojs("my-video",{
				width:"640px",
				height: "267px",
				controls: true,
				preload: "auto",
				poster: 'https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80',
				"data-setup":'{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
			});
		}
		
	}*/
	
}
</script>

<style lang="scss">

.my-video{
	width: 100%;
	//height: 400px;
	background-color: red;
	border-radius: 20px;
	video {
		//max-width: 100%;
		width: 100%;
		height: 100%;
		border-radius: 20px;
		display: block;
		cursor: pointer;
		transition: 0.4s;
		
	}
	
	
}

video {
	max-width: 100%;
	width: 100%;
	border-radius: 20px;
	display: block;
	cursor: pointer;
	transition: 0.4s;
	
}

//播放器样式

// 设置视频中的播放按钮
.video-js .vjs-big-play-button {
	transition: 0.3s;
	opacity: 0;
	border: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.video-js:hover .vjs-big-play-button {
	background-color: rgba(43, 51, 63, 0.5);
	opacity: 1;
}


// 设置视频控制条
.video-js .vjs-control-bar{
	display: flex;
	//align-items: center;
	background-color: rgba(43, 51, 63, 0.7);
	margin: 0px 30px 20px;
	padding-left: 70px;
	width: calc(100% - 60px);
	border-radius: 10px;
	
}

// 设置LIVE样式
.vjs-play-control:after {
	content: "LIVE";
	position: absolute;
	left: -58px;
	bottom: 3px;
	background-color: #8941e3;
	height: 24px;
	font-family: var(--body-font);
	font-size: 8px;
	padding: 0 10px 0 20px;
	display: flex;
	font-weight: 600;
	//letter-spacing: 0.04em;
	align-items: center;
	border-radius: 6px;
	
	background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-circle'%3e%3ccircle cx='12' cy='12' r='10'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-size: 6px;
	background-position: 12px;
	@media screen and (max-width: 625px) {
		display: none;
	}
}

//视频倍速区域设置
.vjs-playback-rate .vjs-playback-rate-value {
	font-size: 1.1em;
	opacity: 0.6;
	font-family: var(--body-font);
	display: flex;
	align-items: center;
	justify-content: center;
}


.vjs-poster {
	background-size: 150%;
}

/*.vjs-menu-button-inline .vjs-menu {
	top: 4px;
}*/

.vjs-icon-fullscreen-enter:before,
.video-js .vjs-fullscreen-control:before {
	content: "";
	position: absolute;
	display: block;
	background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.54 0h3.38c1.41 0 2.54 1.15 2.54 2.561V5.97c0 1.42-1.13 2.56-2.54 2.56H2.54C1.14 8.53 0 7.39 0 5.97V2.561C0 1.15 1.14 0 2.54 0zm0 11.47h3.38c1.41 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.13 2.56-2.54 2.56H2.54C1.14 20 0 18.85 0 17.44v-3.41c0-1.42 1.14-2.56 2.54-2.56zM17.46 0h-3.38c-1.41 0-2.54 1.15-2.54 2.561V5.97c0 1.42 1.13 2.56 2.54 2.56h3.38c1.4 0 2.54-1.14 2.54-2.56V2.561C20 1.15 18.86 0 17.46 0zm-3.38 11.47h3.38c1.4 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.56 2.54-2.56z' fill='%23fff'/%3e%3c/svg%3e");
	background-size: 11px;
	background-position: center;
	background-position-y: 14px;
	background-repeat: no-repeat;
	opacity: 0.6;
}


// 视频未播放样式
.video-js.vjs-fluid {
	border-radius: 20px;
	overflow: hidden;
	min-height: 414px;
}

//视频播放时样式
.video-js .vjs-tech {
	object-fit: cover;
}



</style>