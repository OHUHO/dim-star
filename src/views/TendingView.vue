<template>
	<div class="stream-area">
		
		<!--左侧流-->
		<div class="video-stream">
			<video-component></video-component>
			<video-detail-component></video-detail-component>
		</div>
		
		<!--右侧流-->
		<div class="chat-stream">
			<chat-component></chat-component>
			<chat-vip-component></chat-vip-component>
		</div>
	</div>
	
</template>

<script>
import VideoDetailComponent from "@/components/tending/VideoDetailComponent";
import VideoComponent from "@/components/tending/VideoComponent";
import ChatComponent from "@/components/tending/ChatComponent";
import ChatVipComponent from "@/components/tending/ChatVipComponent";
export default {
	name: "TendingView",
	components: {ChatVipComponent, ChatComponent, VideoComponent, VideoDetailComponent}
}
</script>

<style scoped lang="scss">

.stream-area {
	display: flex;
	@media screen and (max-width: 940px) {
		flex-direction: column;
		.video-stream {
			width: 100%;
		}
		.chat-stream {
			margin-left: 0;
			margin-top: 30px;
		}
		.video-js.vjs-fluid {
			min-height: 250px;
		}
		.content {
			max-width: 100%;
		}
	}
	
	.video-stream {
		width: 65%;
		object-fit: cover;
		transition: 0.3s;
		&:hover .video-js .vjs-big-play-button {
			opacity: 1;
		}
		
		
	}
	
	.chat-stream {
		flex-grow: 1;
		margin-left: 30px;
		
	}
}

</style>