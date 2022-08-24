<template>
	<div class="stream-area">
		
		<!--左侧流-->
		<div class="video-stream">
			<video-component></video-component>
			<video-detail-component></video-detail-component>
		</div>
		
		<!--右侧流-->
		<div class="chat-stream">
			<div class="chat">
				<div class="chat-header anim">Live Chat
					<span>
						<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.212 7.762c0 2.644-2.163 4.763-4.863 4.763-2.698 0-4.863-2.119-4.863-4.763C4.486 5.12 6.651 3 9.35 3c2.7 0 4.863 2.119 4.863 4.762zM2 17.917c0-2.447 3.386-3.06 7.35-3.06 3.985 0 7.349.634 7.349 3.083 0 2.448-3.386 3.06-7.35 3.06C5.364 21 2 20.367 2 17.917zM16.173 7.85a6.368 6.368 0 01-1.137 3.646c-.075.107-.008.252.123.275.182.03.369.048.56.052 1.898.048 3.601-1.148 4.072-2.95.697-2.675-1.35-5.077-3.957-5.077a4.16 4.16 0 00-.818.082c-.036.008-.075.025-.095.055-.025.04-.007.09.019.124a6.414 6.414 0 011.233 3.793zm3.144 5.853c1.276.245 2.115.742 2.462 1.467a2.107 2.107 0 010 1.878c-.531 1.123-2.245 1.485-2.912 1.578a.207.207 0 01-.234-.232c.34-3.113-2.367-4.588-3.067-4.927-.03-.017-.036-.04-.034-.055.002-.01.015-.025.038-.028 1.515-.028 3.145.176 3.747.32z" /></svg>15,988 people
					</span>
				</div>
				<div class="message-container">
					<div class="message anim" style="--delay: .1s">
						<div class="author-wrapper video-author video-p">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5" /></svg>
							<img class="author-img" src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
						</div>
						<div class="msg-wrapper">
							<div class="name video-p-name"> Wijaya Adabi</div>
							<div class="content video-p-sub"> Lorem ipsum clor sit, ame conse quae debitis</div>
						</div>
					</div>
					<div class="message anim" style="--delay: .2s">
						<div class="author-wrapper video-author video-p">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
								<path d="M20 6L9 17l-5-5" />
							</svg>
							<img class="author-img" src="https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
						</div>
						<div class="msg-wrapper">
							<div class="name video-p-name offline"> Johny Wise</div>
							<div class="content video-p-sub"> Suscipit eos atque voluptates labore</div>
						</div>
					</div>
					<div class="message anim" style="--delay: .3s">
						<div class="author-wrapper video-author video-p">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
								<path d="M20 6L9 17l-5-5" />
							</svg>
							<img class="author-img" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
						</div>
						<div class="msg-wrapper">
							<div class="name video-p-name offline"> Budi Hakim</div>
							<div class="content video-p-sub">Dicta quidem sunt adipisci</div>
						</div>
					</div>
					<div class="message anim" style="--delay: .4s">
						<div class="author-wrapper video-author video-p">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
								<path d="M20 6L9 17l-5-5" />
							</svg>
							<img class="author-img" src="https://images.pexels.com/photos/1870163/pexels-photo-1870163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
						</div>
						<div class="msg-wrapper">
							<div class="name video-p-name"> Thomas Hope</div>
							<div class="content video-p-sub"> recusandae doloremque aperiam alias molestias</div>
						</div>
					</div>
					<div class="message anim" style="--delay: .5s">
						<div class="author-wrapper video-author video-p">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
								<path d="M20 6L9 17l-5-5" />
							</svg>
							<img class="author-img" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
						</div>
						<div class="msg-wrapper">
							<div class="name video-p-name"> Gerard Will</div>
							<div class="content video-p-sub">Dicta quidem sunt adipisci</div>
						</div>
					</div>
					<div class="message anim" style="--delay: .6s">
						<div class="author-wrapper video-author video-p">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
								<path d="M20 6L9 17l-5-5" />
							</svg>
							<img class="author-img" src="https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
						</div>
						<div class="msg-wrapper">
							<div class="name video-p-name offline">Johny Wise</div>
							<div class="content video-p-sub"> recusandae doloremque aperiam alias molestias</div>
						</div>
					</div>
				</div>
				<div class="chat-footer anim" style="--delay: .1s">
					<input type="text" placeholder="Write your message">
				</div>
			</div>
			
			<div class="chat-vid__container">
				<div class="chat-vid__title anim" style="--delay: .3s">Related Videos</div>
				<div class="chat-vid anim" style="--delay: .4s">
					<div class="chat-vid__wrapper">
						<img class="chat-vid__img" src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg" />
						<div class="chat-vid__content">
							<div class="chat-vid__name">Prepare for your first skateboard jump</div>
							<div class="chat-vid__by">Jordan Wise</div>
							<div class="chat-vid__info">125.908 views <span class="seperate"></span>2 days ago</div>
						</div>
					</div>
				</div>
				<div class="chat-vid anim" style="--delay: .5s">
					<div class="chat-vid__wrapper">
						<img class="chat-vid__img" src="https://iamaround.it/wp-content/uploads/2015/02/pexels-photo-4663818.jpeg" />
						<div class="chat-vid__content">
							<div class="chat-vid__name">Prepare for your first skateboard jump</div>
							<div class="chat-vid__by">Jordan Wise</div>
							<div class="chat-vid__info">125.908 views <span class="seperate"></span>2 days ago</div>
						</div>
					</div>
				</div>
				<div class="chat-vid__button anim" style="--delay: .6s">See All related videos (32)</div>
			</div>
		</div>
	</div>
	
</template>

<script>
import VideoDetailComponent from "@/components/tending/VideoDetailComponent";
import VideoComponent from "@/components/tending/VideoComponent";
export default {
	name: "TendingView",
	components: {VideoComponent, VideoDetailComponent}
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
		
		.chat {
			background-color: #252836;
			border-radius: 20px;
			padding: 0 20px;
			max-height: 414px;
			overflow: auto;
			&-footer {
				display: flex;
				align-items: center;
				position: sticky;
				bottom: 0;
				left: 0;
				width: calc(100% + 20px);
				padding-bottom: 12px;
				background-color: #252836;
				input {
					width: 100%;
					border: 0;
					background-color: #2d303e;
					border-radius: 20px;
					font-size: 12px;
					color: #fff;
					margin-left: -10px;
					padding: 12px 40px;
					font-weight: 500;
					font-family: var(--body-font);
					background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.48 6.47 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10C6.47 22 2 17.52 2 12zm5.52 1.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.19.54 1.19 1.2 0 .66-.53 1.2-1.19 1.2zM10.8 12c0 .66.54 1.2 1.2 1.2.66 0 1.19-.54 1.19-1.2a1.194 1.194 0 10-2.39 0zm4.48 0a1.195 1.195 0 102.39 0 1.194 1.194 0 10-2.39 0z' fill='%236c6e78'/%3e%3c/svg%3e");
					background-repeat: no-repeat;
					background-size: 24px;
					background-position: 8px;
					&::placeholder {
						color: #6c6e78;
					}
				}
				&:before {
					content: "";
					position: absolute;
					background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z'/%3e%3c/svg%3e");
					background-repeat: no-repeat;
					background-size: 14px;
					background-position: center;
					width: 18px;
					height: 18px;
					background-color: #6c5ecf;
					padding: 4px;
					border-radius: 50%;
					right: 16px;
				}
			}
			&-vid {
				&__title {
					color: #fff;
					font-size: 18px;
				}
				&__container {
					margin-top: 40px;
				}
				&__wrapper {
					display: flex;
					align-items: center;
					margin-top: 26px;
				}
				&__name {
					color: #fff;
					font-size: 14px;
					line-height: 1.3em;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					overflow: hidden;
					-webkit-box-orient: vertical;
				}
				&__img {
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
				&__content {
					max-width: 20ch;
				}
				&__by,
				&__info {
					color: var(--body-color);
					font-size: 13px;
				}
				&__by {
					margin: 6px 0;
				}
				&__button {
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
			
			.chat-header {
				display: flex;
				align-items: center;
				padding: 20px 0;
				font-size: 16px;
				font-weight: 600;
				color: #fff;
				position: sticky;
				top: 0;
				background-color: #252836;
				left: 0;
				z-index: 1;
				border-bottom: 1px solid var(--border-color);
				svg {
					width: 15px;
					margin-right: 6px;
					flex-shrink: 0;
				}
				span {
					margin-left: auto;
					color: var(--body-color);
					font-size: 12px;
					display: flex;
					align-items: center;
				}
			}
			
			.message-container{
				.message {
					display: flex;
					align-items: center;
					margin-top: 18px;
					&:last-child {
						margin-bottom: 18px;
					}
					&-container .author-img__wrapper svg {
						width: 15px;
					}
					
					.author-wrapper {
						position: relative;
						flex-shrink: 0;
						svg {
							width: 16px;
							padding: 2px;
							background-color: #fff;
							color: #0daabc;
							border-radius: 50%;
							border: 2px solid #0daabc;
							position: absolute;
							bottom: 5px;
							right: 0;
						}
						
						img{
							width: 52px;
							height: 52px;
							border: 1px solid rgb(255 255 255 / 75%);
							padding: 4px;
							border-radius: 50%;
							object-fit: cover;
						}
					}
				}
			}
		}
	}
}

</style>