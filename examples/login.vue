<template>
	<div class="conatiner">
		<text style="margin-bottom: 20px;">weex plugin examples</text>
		<div @click="createAction" style="margin: 20px;padding:20px;background-color:#1ba1e2;color:#fff;"><text style="color:#fff">hello world</text></div>
	</div>
</template>

<style>
	.container{
		flex: 1;
	}
</style>

<script>

  const navigator = weex.requireModule('navigator')
  const plugin = weex.requireModule('device');
  module.exports = {
		data: {
			value: '',
			index: 0,
			txtChange: ''
		},
		methods: {
			createAction: function() {
              plugin.postNotification("category",{"test":'test'})
              navigator.pop({ animation: 'ture' }, () => {});
			}
		}
	}
</script>