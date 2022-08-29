<template>
	<div class="videos-box">
		<div class="title anim" style="--delay: .3s">相关话题</div>
		
		<div class="card anim"
			v-for="item in cards"
			:key="item.id"
			style="--delay: .5s"
		>
			<img class="img" :src="item.img"  alt=""/>
			<div class="content">
				<div class="name">{{item.name}}</div>
				<div class="by">{{item.by}}</div>
				<div class="info">
					{{item.info1}}
					<span class="separate"></span>{{item.info2}}
				</div>
			</div>
		</div>
		<div class="button anim" style="--delay: .6s">查看全部</div>
	</div>
</template>

<script>
export default {
	name: "ChatVipComponent",
	data(){
		return{
			cards:[
				{id:0,img:'http://image.wufazhuce.com/FjB5Nj2tXGO5SOtBnUwq0GFQqQ7z#pskt#&imgName=%u9996%u9875%u56FE&imgLink=http%3A%2F%2Fm.wufazhuce.com%2Fone%2F3677',name:'未来像盛夏的大雨，在我们还不及撑开伞时就扑面而来。',by:' Benjamin Davies',info1:'329 浏览',info2:'1 小时前'},
				{id:1,img:'http://image.wufazhuce.com/FuLThNJCQOvKb-_z_VrBrW3RHQAG#pskt#&imgName=%u9996%u9875%u56FE&imgLink=http%3A%2F%2Fm.wufazhuce.com%2Fone%2F3671',name:'一场为期6个月的平静实验',by:'老杨的猫头鹰',info1:'9k 浏览',info2:'3 天前'},
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