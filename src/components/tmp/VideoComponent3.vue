<template>
	
	<div class="x">
		<video class="video" controls preload="metadata">
			<source src="https://www.dropbox.com/s/oxrbxi4b9dwv7yj/AmyCuddy_2012G-480p.mp4?dl=1" type="video/mp4">
			<track label="English" kind="subtitles" srclang="en" src="//cdn.rawgit.com/iandevlin/iandevlin.github.io/master/mdn/video-player-with-captions/subtitles/vtt/sintel-en.vtt" default>
		</video>
	
	</div>


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
	border-radius: 20px;
}
</style>