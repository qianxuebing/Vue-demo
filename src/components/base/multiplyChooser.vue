<template>
    <div class="chooser-component">
    	<ul class="choose-list">
    		<li v-for="(item,index) in selections"
    		:key="index"
    		:title="item.label"
    		:class="{active:checkActive(index)}"
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
			nowIndexes:[0]
		}
	},
	methods:{
		toggleSelection (index) {
	      if (this.nowIndexes.indexOf(index) === -1) {
	        this.nowIndexes.push(index)  
	      }
	      else {
	        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
	          return idx !== index
	        })
	      }
	      let nowObjArray = _.map(this.nowIndexes, (idx) => {
	        return this.selections[idx]
	      })
	      this.$emit('on-change', nowObjArray)
   	 	},
	    checkActive (index) {
	      return this.nowIndexes.indexOf(index) !== -1
	    }
  
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


