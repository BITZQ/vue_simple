<template>
<div>
 hey, dear {{userName}}!
</div>
</template>
<script>
export default{
	
	computed: {
		userName () {
			return this.$route.params.userName;
		}
	}
	

}

</script>
<style>

</style>
