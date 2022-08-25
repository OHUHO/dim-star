<template>
	<div class="videos-box">
		<div class="title anim" style="--delay: .3s">Related Videos</div>
		
		<div class="card anim"
			v-for="item in cards"
			:key="item.id"
			style="--delay: .5s"
		>
			
			<img class="img" :src="item.img" />
			<div class="content">
				<div class="name">{{item.name}}</div>
				<div class="by">{{item.by}}</div>
				<div class="info">
					{{item.info1}}
					<span class="separate"></span>{{item.info2}}
				</div>
			</div>
		</div>
		<div class="button anim" style="--delay: .6s">See All related videos (32)</div>
	</div>
</template>

<script>
export default {
	name: "ChatVipComponent",
	data(){
		return{
			cards:[
				{id:0,img:'https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg',name:'Prepare for your first skateboard jump',by:'Jordan Wise',info1:'125.908 views',info2:'2 days ago'},
				{id:1,img:'https://iamaround.it/wp-content/uploads/2015/02/pexels-photo-4663818.jpeg',name:'Prepare for your first skateboard jump',by:'Jordan Wise',info1:'125.908 views',info2:'2 days ago'},
			],
		}
	}
}
</script>

<style scoped lang="scss">

.videos-box{
	.title{
		color: #fff;
		font-size: 18px;
		margin-top: 30px;
	}
	
	.card{
		display: flex;
		align-items: center;
		margin-top: 26px;
		
		.img{
			width: 100px;
			height: 80px;
			border-radius: 10px;
			object-fit: cover;
			object-position: right;
			margin-right: 16px;
			transition: 0.3s;
			&:hover {
				transform: scale(1.02);
			}
		}
		.content{
			max-width: 20ch;
			.name{
				color: #fff;
				font-size: 14px;
				line-height: 1.3em;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				overflow: hidden;
				-webkit-box-orient: vertical;
			}
			.by{
				color: var(--body-color);
				font-size: 13px;
				margin: 6px 0;
			}
			.info{
				color: var(--body-color);
				font-size: 13px;
				
				.separate {
					width: 3px;
					height: 3px;
					display: inline-block;
					vertical-align: middle;
					border-radius: 50%;
					background-color: #fff;
					margin: 0 6px;
					&.video-seperate {
						background-color: var(--body-color);
					}
				}
			}
		}
	}
	.button{
		background-color: #6c5ecf;
		border: 0;
		color: #fff;
		font-size: 13px;
		margin-top: 26px;
		display: flex;
		padding: 0 10px;
		align-items: center;
		justify-content: center;
		height: 40px;
		border-radius: 10px;
		cursor: pointer;
		transition: 0.3s;
		&:hover {
			background-color: #5847d0;
		}
	}
	
}


</style>