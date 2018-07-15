<template>
    <div class="detail-wrap">
        <div class="detail-left">
            <div class="product-board">
                <img src="">
                <ul></ul>
            </div>
        </div>
        <div class="detail-right"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .detail-wrap{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        padding-top: 20px;
        display: flex;
        display: -webkit-flex;
        .detail-left{
            width: 200px;
            margin-right: 20px;
            text-align: center;
            .product-board{
                background: #fff;
                padding: 20px 0;
                ul{
                    margin-top: 20px;
                    li{
                        text-align: left;
                        padding: 10px 15px;
                        cursor: pointer;
                        a{
                            display: block;
                        }
                    }
                    li.active,li.hover{
                        background: #4fc08d;
                        color:#fff;
                    }
                }
            }
        }
        .detail-right{
            flex: 1;
        }
    }
</style>

