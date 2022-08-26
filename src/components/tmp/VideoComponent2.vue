<template>
	<!--<div class="container">-->
		<video
			width='640px'
			height='267px'
			controls
			crossorigin
			playsinline
			poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
			id="player">
			<!-- Video files -->
			<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576">
			<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size="720">
			<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size="1080">
			<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4" type="video/mp4" size="1440">
			
			<!-- Caption files -->
			<track kind="captions" label="English" srclang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default>
			<track kind="captions" label="Français" srclang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt">
			
			<!-- Fallback for browsers that don't support the <video> element -->
			<a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a>
		</video>
		
	<!--</div>-->
</template>

<script>

import "video.js/dist/video-js.css"
import "videojs-flash"
export default {
	name: "VideoComponent",
	data(){
		return{
		
		}
	},
	
	
}
</script>

<style lang="scss">

video{
	width: 100%;
	height: 414px;
	//border-radius: 20px;
}

</style>