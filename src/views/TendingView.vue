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
	components: {ChatVipComponent, ChatComponent, VideoComponent, VideoDetailComponent},
	
	/*inject: ['reload'],
	data(){
		return{
		
		}
	},*/

	//watch:{
	//	$route (to,from){
	//		window.location.reload()
	//		console.log(to ,from)
	//	}
	//},
	/*mounted() {
		if (location.href.indexOf("#reloaded") == -1) {
			location.href = location.href + '#reloaded';
			location.reload();
		}
	},*/
}
</script>

<style scoped lang="scss">

.stream-area {
	display: flex;
	//min-width: 627px;
	
	.video-stream {
		width: 65%;
		object-fit: cover;
		transition: 0.3s;
		
	}
	
	.chat-stream {
		flex-grow: 1;
		margin-left: 30px;
		
	}
}

@media screen and (max-width: 900px) {
	.stream-area{
		flex-direction: column;
		.video-stream {
			width: 100%;
		}
		.chat-stream {
			margin-left: 0;
			margin-top: 30px;
			width: 100%;
		}
		.video-js.vjs-fluid {
			min-height: 250px;
		}
		.content {
			max-width: 100%;
		}
	}
}
//627

</style>