<template>
    <div class="chooser-component">
    	<ul class="choose-list">
    		<li v-for="(item,index) in selections"
    		:key="index"
    		:title="item.label"
    		:class="{active:index == nowIndex}"
    		@click="toggleSelection(index)">{{item.label}}</li>
    	</ul>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
	props:{
		selections:{
			type:Array,
			default:[{
				label:'test',
				value:0
			}]
		}
	},
	data(){
		return{
			nowIndex:0
		}
	},
	methods:{
		toggleSelection (index) {
	      this.nowIndex = index;
	      this.$emit('on-change',this.selections[index])
   	 	},
	   
	}
};
</script>
<style lang="less" scoped>
.chooser-component{
	position: relative;
	display: inline-block;
	.choose-list{
		li{
			display: inline-block;
			padding: 0 8px;
			height: 25px;
			line-height: 25px;
			text-align: center;
			margin-right: 5px;
			border: 1px solid #e3e3e3;
			border-radius: 4px;
			cursor: pointer;
		}
		.active{
			border-color: #4fc08d;
			background-color: #4fc08d;
			color:#fff;
		}
	}
}
</style>


