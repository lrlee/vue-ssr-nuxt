<template>
    <div class="modal_box">
        <div class="modal_container">
            <p class="title">{{info.name}}</p>
            <p class="desc">
                {{info.text}}            
            </p>
            <div class="details">
                <div class="company">
                    <p class="text">公司:</p>
                    <p class="name">CAPCOM</p>
                </div>
                <div class="date">
                    <p class="text">发行时间:</p>
                    <p class="date">1992年</p>
                </div>
            </div>
            <div class="images_container">
                <ul class="images_list">
                    <li class="images_item" v-for="v in num" :key="v">
                        <img :src="require(`@/assets/images/games/games/${info.id}_${v}.jpg`)" alt="">
                    </li>
                </ul>
            </div>
            <p class="tips">“ROUND ONE, FIGHT”</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num:[1,2,3],
            info:this.info,
            test:'测试内容'
        }
    },
    props:['info'],
    mounted(){
        console.log(this.info,"dadddd")
    }
}
</script>
<style lang="less" scoped>
    @r:1vw/19.2;
    .modal_box{
        background: #3D2C20;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        .modal_container{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
           
            .title{
                margin-top: 80*@r;
                font-size:34px;
                font-family:Microsoft YaHei;
                font-weight:300;
                color:rgba(255,201,11,1);
            }
            .desc{
                margin: 47*@r 0 34*@r;
                font-size:15px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:26px;
            }
            .details{
                display: flex;
                >div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    &:first-child{
                        margin-right: 285*@r;
                    }
                    .text{
                        font-size:15px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        margin-bottom: 10px;
                    }
                    .name,.date{
                        font-size:20px;
                        font-family:Microsoft YaHei;
                        font-weight:300;
                        color:rgba(255,213,5,1);
                    }
                }
            }
            .images_container{
                margin: 31*@r 0 68*@r;
                .images_list{
                    display: flex;
                    align-items: center;
                    .images_item{
                        margin-right: 8px;
                        &:last-child{
                            margin-right: 0;
                        }
                        img{
                            display: block;
                            width:342*@r;
                            height:257*@r;
                            background:rgba(255,213,5,1);
                        }
                    }
                }
            }
            .tips{
                font-size:28px;
                font-family:Microsoft YaHei;
                font-weight:300;
                color:rgba(255,213,5,1);
            }
        }
    }
</style>
