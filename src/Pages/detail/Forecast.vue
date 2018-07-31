<template>
	<div class="sales-board">
		<div class="sales-board-intro">
    		<h2>数据检测</h2>
    		<p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有行业的人阅读。</p>
		</div>
		<div class="sales-board-form">
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					购买数据：
				</div>
				<div class="sales-board-line-right">
					<v-chooser :max="100" :min="20"></v-chooser>
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					媒介：
				</div>
				<div class="sales-board-line-right">
					<v-multiply-chooser :selections="versionList"></v-multiply-chooser>
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					有效时间：
				</div>
				<div class="sales-board-line-right">
					一年
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					总价：
				</div>
				<div class="sales-board-line-right">
					500元
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					&nbsp;
				</div>
				<div class="sales-board-line-right">
					<div class="button">立即购买</div>
				</div>
			</div>
		</div>
	</div>

    
</template>
<script>
import VChooser from '../../components/base/counter'
import VMultiplyChooser from '../../components/base/multiplyChooser'
export default {
	components:{
		VChooser,
		VMultiplyChooser
	},
	data(){
		return{
			versionList:[
			{
				label:'纸质报告',
				value:0
			},{
				label:'PDF',
				value:1
			},{
				label:'页面报告',
				value:2
			},{
				label:'邮件',
				value:3
			}]
		}
	}
};
</script>
<style lang="less" scoped>
</style>


