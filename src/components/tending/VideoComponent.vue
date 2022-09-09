<template>
	
		<video
			class="video-js vjs-default-skin anim"
			width="640"
			height="440"
			controls
			preload="auto"
			poster='https://ts3.cn.mm.bing.net/th?id=OVP.PWJ78Rt4AlHhvD4PSZrLlgEsCo&w=268&h=150&c=7&rs=1&qlt=90&o=5&dpr=1.25&pid=2.1'
			data-setup='{ "aspectRatio":"940:620", "playbackRates": [0.5, 1, 1.5, 2] }'>
			<source src="https://apd-189c1b4bc3580b05040acbc90ec2286b.v.smtcdns.com/om.tc.qq.com/A3r9LIn0Homw-_S7E1Nh-TKdwT0HwYTUQYLwb7rKYi00/uwMROfz2r57EIaQXGdGnC2dePkZaz9nvINvy8qtBz-4opyj0/svp_50001/szg_6243_50001_0b6bd4aawaaalqap3d65cjpfch6dbmpqac2a.f622.mp4?sdtfrom=v1010&guid=85b53d158011456d&vkey=9B31AE3769BD1E6A4694C304DFD1D52F48C9D9E24E74282BA68B36B51CF54D3D3E52FC137CC0F41593E06796B7E65B1101C815061EC10B6B2560A834DBC185325632D0907F66CC7B391069FE3ADE575DD0BF463FBCC3371B511DD10DC10C125A1799F5B3280D3B93D3F6CBF35BDB11EC137189710C88BC6A3A923DB273BE4C83" type='video/mp4' />
		</video>
	
	<!--<video
		class="anim"
		controls
		preload="auto"
		poster="../../assets/img/wall.jpeg"
	>
		<source src="../../assets/video.mp4" type='video/mp4' />
	</video>-->
	
</template>

<script>


export default {
	name: "VideoComponent",
	
}
</script>

<style lang="scss" scoped>

video{
	width: 100%;
	min-height: 414px;
	border-radius: 20px;
}

</style>