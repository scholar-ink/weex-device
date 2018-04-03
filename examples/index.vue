<template>
	<div class="conatiner">
		<text style="margin-bottom: 20px;">weex plugin examples</text>
		<div @click="createAction" style="margin: 20px;padding:20px;background-color:#1ba1e2;color:#fff;"><text style="color:#fff">hello world22</text></div>
	</div>
</template>

<style>
	.container{
		flex: 1;
	}
</style>

<script>
  	const plugin = weex.requireModule('device');
	module.exports = {
		data: {
			value: '',
			index: 0,
			txtChange: ''
		},
        created: function () {

		  	plugin.createButton({
			  text: 'button1',
			  icon: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2799047192,122246874&fm=202&mola=new&crop=v1'
			}, function () {
			  console.log("button1");
            })

            var globalEvent = weex.requireModule('globalEvent')
            globalEvent.addEventListener('category', (e) => {
              alert(e)
              console.log('addEventListener CallBack', e)
            })
        },
		methods: {
			createAction: function() {
                // navigator.push({
                //     'url': "?page=/examples/build/vue-web/login.js",
                //     'animated': 'true'
                // }, function () {
                //     console.log('skip complete')
                // })
              plugin.show({
                frameWidth:250,
                frameHeight:250,
                frameHide:false,
                tipText:"111111111",
                laserMoveFullScreen:false,
              },function(txtChange){

              });
            }
		}
	}
</script>