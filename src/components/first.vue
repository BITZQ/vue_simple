/* eslint-disable */
<template>
	<div >
		<h1>{{article.title}}</h1>
		<p class='outstanding'>{{article.content}}</p>
		<button @click="$emit('changePicClick',article.picUrl)">修改图片</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dataContent:"我是动态数据"
			}
		},
		props:[
			"article"
		]
		
	}
</script>

<style scoped>
.outstanding{
	color:red
}
</style>