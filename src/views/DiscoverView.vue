<template>
	<div class="header anim" style="--delay: 0s">发现</div>
	<blog-component></blog-component>
	
	<video-component></video-component>
	
</template>

<script>
import BlogComponent from "@/components/discover/BlogComponent";
import VideoComponent from "@/components/discover/VideoComponent";
export default {
	name: "DiscoverView",
	components: {VideoComponent, BlogComponent}
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

</style>
