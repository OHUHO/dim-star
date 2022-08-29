<template>
	
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

</style>
