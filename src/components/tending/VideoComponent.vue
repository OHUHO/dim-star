<template>
	<!--poster='https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80'-->
	<div class="my-video">
		<video
			class="video-js vjs-default-skin anim"
			width="640"
			height="267"
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
	
	<!--
		width=640px
		height="267px"
		controls
		preload="auto"
		poster='https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80'
		data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
	-->
</template>

<script>


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

<style lang="scss" scoped>

.my-video{
	width: 100%;
	max-height: 414px;
	//background-color: red;
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



</style>