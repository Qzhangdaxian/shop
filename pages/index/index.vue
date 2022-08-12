<template>

	<scroll-view scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered" :refresher-threshold="100"
		refresher-background="lightgreen" @refresherpulling="onPulling" @refresherrefresh="onRefresh"
		@refresherrestore="onRestore" @refresherabort="onAbort">
		<view class="content">
			<view v-for="item in userInfo">
				<div class="title">{{item.age}}</div>
				<p class="title">{{item.birth}}</p>
				<p class="title">{{item.category}}</p>
				<p class="title">{{item.creatTime}}</p>
				<p class="title">{{item.userName}}</p>
				<p class="title">{{item._id}}</p>
				<i class="iconfont icon-sousuo"></i>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {defineComponent} from 'vue';
	
	export default defineComponent({

		setup() {
			const getMsg= () => {
				const db = uniCloud.database() //创建数据库连接
				db.collection("userList").get() //获取数据表的信息
					.then(res => {
						console.log(res)
						this.userInfo = res.result.data
					})
					.catch(err => {
						console.log(err)
					})
			};
			getMsg();
			const onPulling = (e) => {
				console.log("onpulling", e);
			};
			const onRefresh= () => {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 3000)
			};
			const onRestore= () => {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			};
			const onAbort= () => {
				console.log("onAbort");
			};
			return {

			}
		}
	})



	// 	export default {
	// 		data() {
	// 			return {
	// 				title: 'Hello',
	// 				userInfo: {}
	// 			}
	// 		},
	// 		onLoad() {
	// 			this.getMsg()
	// 		},
	// 		methods: {
	// 			getMsg() {
	// 				const db = uniCloud.database() //创建数据库连接
	// 				db.collection("userList").get() //获取数据表的信息
	// 					.then(res => {
	// 						console.log(res)
	// 						this.userInfo = res.result.data
	// 					})
	// 					.catch(err => {
	// 						console.log(err)
	// 					})
	// 			},
	// 			onPulling(e) {
	// 				console.log("onpulling", e);
	// 			},
	// 			onRefresh() {
	// 				if (this._freshing) return;
	// 				this._freshing = true;
	// 				setTimeout(() => {
	// 					this.triggered = false;
	// 					this._freshing = false;
	// 				}, 3000)
	// 			},
	// 			onRestore() {
	// 				this.triggered = 'restore'; // 需要重置
	// 				console.log("onRestore");
	// 			},
	// 			onAbort() {
	// 				console.log("onAbort");
	// 			}
	// 		},
	// 	}
	// 
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
