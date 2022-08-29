<template>
	
		<!--<video
			class="video-js vjs-default-skin anim"
			width="640"
			height="267"
			controls
			preload="auto"
			poster='https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80'
			data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
		>
			<source src="../../assets/video.mp4" type='video/mp4' />
		</video>-->
	
	<video
		class="anim"
		controls
		preload="auto"
		poster="../../assets/img/wall.jpeg"
	>
		<source src="../../assets/video.mp4" type='video/mp4' />
	</video>
	
</template>

<script>


export default {
	name: "VideoComponent",
	
}
</script>

<style lang="scss" scoped>

video{
	width: 100%;
	border-radius: 20px;
}

</style>